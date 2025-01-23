// Importa React y los hooks necesarios.
import React from 'react';

// Importa componentes básicos de React Native.
import { View, Text, FlatList } from 'react-native';

// Importa SafeAreaView para manejar áreas seguras en diferentes dispositivos.
import { SafeAreaView } from 'react-native-safe-area-context';

// Importa tipos y navegación desde React Navigation.
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Importa el tipo de parámetros de navegación de la pantalla `driverFiles`.
import { RootStackParamList } from './driverFiles';

// Importa componentes personalizados.
import ConductorItem from '../components/Home/ConductorItem';
import Header from '../components/Home/Header';

// Importa los estilos definidos para esta pantalla.
import styles from '../components/Styles/Home';

// Importa el tipo `Conductor` desde el servicio de conductores.
import { Conductor } from '../services/conductorService';

// Define las propiedades específicas para esta pantalla.
type Props = NativeStackScreenProps<RootStackParamList, 'Home'> & {
  conductores: Conductor[]; // Lista de conductores.
  loading: boolean; // Estado de carga.
  error: string | null; // Mensaje de error.
};

// Componente funcional `Home`.
const Home: React.FC<Props> = ({ navigation, conductores, loading, error }) => {

  // Función para manejar la selección de un conductor y navegar a `DriverFiles`.
  const handleDriverSelect = (conductor: Conductor) => {
    navigation.navigate('DriverFiles', {
      id: conductor.idConductor, // Pasa el ID del conductor.
      nombreConductor: conductor.nombreConductor, // Pasa el nombre del conductor.
      apellidoConductor: conductor.apellidoConductor, // Pasa el apellido del conductor.
    });
  };

  // Si está cargando, muestra un indicador de carga.
  if (loading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Cargando empleados...</Text>
        </View>
      </SafeAreaView>
    );
  }

  // Si hay un error, muestra el mensaje de error.
  if (error) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>{error}</Text>
        </View>
      </SafeAreaView>
    );
  }

  // Si no está cargando y no hay error, muestra la lista de conductores.
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.listContainer}>
            {/* Renderiza el componente `Header` pasando el error si existe. */}
            <Header error={error} />
            
            {/* Lista de conductores. */}
            <FlatList
              data={conductores} // Lista de datos a mostrar.
              keyExtractor={(item) => item.idConductor.toString()} // Identificador único para cada item.
              renderItem={({ item }) => (
                // Renderiza un componente `ConductorItem` por cada conductor.
                <ConductorItem conductor={item} onSelect={() => handleDriverSelect(item)} />
              )}
              ItemSeparatorComponent={() => <View style={styles.separator} />} // Separador entre elementos.
              showsVerticalScrollIndicator={false} // Desactiva el indicador de desplazamiento vertical.
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

// Exporta el componente para usarlo en otros lugares.
export default Home;
