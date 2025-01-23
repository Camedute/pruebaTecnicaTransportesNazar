import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Importa el contenedor de navegación
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Importa el creador de navegadores de pila
import Home from './src/screens/home'; // Importa la pantalla de inicio
import DriverFiles from './src/screens/driverFiles'; // Importa la pantalla de archivos del conductor
import { RootStackParamList } from './src/screens/driverFiles'; // Importa la lista de parámetros de la pila
import UploadFiles from './src/screens/uploadFiles'; // Importa la pantalla para cargar archivos
import { getConductores, Conductor } from './src/services/conductorService'; // Importa el servicio para obtener conductores

// Crea el stack navigator con los parámetros específicos
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const [conductores, setConductores] = useState<Conductor[]>([]); // Estado para almacenar los conductores
  const [loading, setLoading] = useState<boolean>(true); // Estado para manejar la carga de datos
  const [error, setError] = useState<string | null>(null); // Estado para manejar errores

  // useEffect se ejecuta cuando el componente se monta
  useEffect(() => {
    // Función asincrónica para obtener los conductores desde el servicio
    const fetchConductores = async () => {
      try {
        const data = await getConductores(); // Llama a la función que obtiene los conductores
        // Ordena los datos por apellido y luego por nombre del conductor
        const sortedData = data.sort((a, b) => {
          if (a.apellidoConductor === b.apellidoConductor) {
            return a.nombreConductor.localeCompare(b.nombreConductor);
          }
          return a.apellidoConductor.localeCompare(b.apellidoConductor);
        });
        setConductores(sortedData); // Actualiza el estado con los conductores ordenados
      } catch (error: any) {
        console.error('Error fetching conductores:', error);
        setError(error.message || 'Error desconocido'); // Maneja cualquier error y lo guarda en el estado
      } finally {
        setLoading(false); // Una vez que los datos han sido obtenidos (o fallado), actualiza el estado de carga
      }
    };

    fetchConductores(); // Llama a la función para obtener los conductores cuando el componente se monta
  }, []); // El arreglo vacío indica que solo se ejecuta una vez, al montar el componente

  return (
    <NavigationContainer>
      {/* El Stack Navigator contiene todas las pantallas de la aplicación */}
      <Stack.Navigator>
        {/* Pantalla Home */}
        <Stack.Screen 
          name="Home" 
          options={{ headerShown: false }} // Desactiva el encabezado de la pantalla
        >
          {props => <Home {...props} conductores={conductores} loading={loading} error={error} />} 
          {/* Pasa los datos de conductores, loading y error a la pantalla Home */}
        </Stack.Screen>

        {/* Pantalla DriverFiles */}
        <Stack.Screen 
          name="DriverFiles" 
          component={DriverFiles} // Define el componente para esta pantalla
          options={{ headerShown: false }} // Desactiva el encabezado
        />

        {/* Pantalla UploadFiles */}
        <Stack.Screen
          name="UploadFiles"
          component={UploadFiles} // Define el componente para esta pantalla
          options={{ headerShown: false }}  // Desactiva el encabezado
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
