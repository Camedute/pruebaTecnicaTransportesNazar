// Importa React y hooks necesarios para manejar estado y efectos secundarios.
import React, { useEffect, useState } from 'react';

// Importa componentes básicos de React Native para la interfaz.
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';

// Importa SafeAreaView para manejar áreas seguras en diferentes dispositivos.
import { SafeAreaView } from 'react-native-safe-area-context';

// Importa tipos y navegación desde React Navigation.
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Importa servicios relacionados con los archivos.
import { Archivo, getArchivosConductor, getArchivosBase64 } from '../services/filesService';

// Importa un ícono de la librería Ionicons.
import Icon from 'react-native-vector-icons/Ionicons';

// Importa componentes personalizados para mostrar archivos.
import FileItem from '../components/driverFiles/fileItem';
import FileModal from '../components/driverFiles/fileModal';

// Importa los estilos definidos para esta pantalla.
import styles from '../components/Styles/driverFiles';

// Define los parámetros de navegación para la pila de pantallas.
export type RootStackParamList = {
  Home: undefined; // Pantalla de inicio.
  DriverFiles: {    // Pantalla actual, recibe los datos del conductor.
    id: number; 
    nombreConductor: string;
    apellidoConductor: string;
  };
  UploadFiles: {    // Pantalla de subida de archivos, recibe el ID del conductor.
    conductorId: number;
  };
};

// Define las propiedades específicas para esta pantalla.
type Props = NativeStackScreenProps<RootStackParamList, 'DriverFiles'>;

// Componente funcional `DriverFiles`.
const DriverFiles: React.FC<Props> = ({ route, navigation }) => {
  // Extrae parámetros de la ruta (información del conductor).
  const { id, nombreConductor, apellidoConductor } = route.params;

  // Estados para manejar archivos, carga, errores, imagen seleccionada y visibilidad del modal.
  const [archivos, setArchivos] = useState<Archivo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);

  // Efecto para cargar archivos del conductor al montar el componente.
  useEffect(() => {
    const fetchArchivos = async () => {
      try {
        // Llama al servicio para obtener los archivos del conductor.
        const data = await getArchivosConductor(id);
        setArchivos(data); // Actualiza el estado con los archivos obtenidos.
      } catch (err) {
        setError('Error al cargar los archivos'); // Maneja errores de la llamada.
      } finally {
        setLoading(false); // Detiene el indicador de carga.
      }
    };

    fetchArchivos(); // Ejecuta la función al montar el componente.
  }, [id]); // Se vuelve a ejecutar si cambia el ID.

  // Maneja la visualización de un archivo al seleccionarlo.
  const handleShowFile = async (archivoId: number) => {
    try {
      // Llama al servicio para obtener el archivo en base64.
      const archivoBase64 = await getArchivosBase64(id, archivoId);
      if (archivoBase64) {
        setSelectedFileName(archivoBase64.nombreArchivo); // Guarda el nombre del archivo.
        setSelectedImage(`data:image/jpeg;base64,${archivoBase64.imagenBase64}`); // Guarda la URI de la imagen.
        setModalVisible(true); // Muestra el modal.
      } else {
        Alert.alert('Error', 'No se encontró el archivo para el conductor.'); // Alerta si no hay archivo.
      }
    } catch (error) {
      console.error('Error al obtener el archivo base64:', error); // Imprime errores en la consola.
      Alert.alert('Error', 'Hubo un problema al obtener el archivo.'); // Alerta de error.
    }
  };

  return (
    // Vista segura que respeta las áreas seguras del dispositivo.
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Cabecera con botón para regresar. */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="#1D4ED8" />
          </TouchableOpacity>
        </View>
  
        <View style={styles.content}>
          {/* Muestra el nombre completo del conductor. */}
          <Text style={styles.driverName}>{nombreConductor} {apellidoConductor}</Text>

          {/* Botón para navegar a la pantalla de subida de archivos. */}
          <TouchableOpacity style={styles.uploadButton} onPress={() => navigation.navigate('UploadFiles', { conductorId: id })}>
            <Icon name="cloud-upload-outline" size={24} color="#ffffff" />
            <Text style={styles.uploadButtonText}>Subir Archivo</Text>
          </TouchableOpacity>
  
          {/* Muestra un indicador de carga, mensaje de error o lista de archivos. */}
          {loading ? (
            <ActivityIndicator size="large" color="#1D4ED8" style={styles.loader} />
          ) : archivos.length === 0 ? (
            <Text style={styles.noFilesText}>No hay archivos disponibles</Text>
          ) : (
            <FlatList
              data={archivos} // Lista de archivos obtenidos.
              renderItem={({ item }) => (
                // Renderiza un componente `FileItem` por cada archivo.
                <FileItem archivo={item} onShowFile={() => handleShowFile(item.idArchivo)} />
              )}
              keyExtractor={(item) => item.idArchivo.toString()} // Clave única para cada archivo.
              ItemSeparatorComponent={() => <View style={styles.separator} />} // Separador entre elementos.
              contentContainerStyle={styles.filesList} // Estilo del contenedor de la lista.
            />
          )}
        </View>
      </View>
  
      {/* Modal para mostrar la imagen seleccionada. */}
      <FileModal 
        isVisible={isModalVisible} 
        imageUri={selectedImage} 
        fileName={selectedFileName} 
        onClose={() => setModalVisible(false)} 
      />
    </SafeAreaView>
  );
};

// Exporta el componente para usarlo en otros lugares.
export default DriverFiles;
