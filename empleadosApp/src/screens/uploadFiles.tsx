// Importa React y los hooks necesarios.
import React, { useState } from 'react';

// Importa componentes básicos de React Native.
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,  // Importa SafeAreaView para manejar áreas seguras en dispositivos.
} from 'react-native';

// Importa el paquete de Expo para el manejo de la cámara y las imágenes.
import * as ImagePicker from 'expo-image-picker';

// Importa el servicio para subir archivos.
import { postArchivosConductor } from '../services/filesService';

// Importa los íconos de la librería `react-native-vector-icons/Ionicons`.
import Icon from 'react-native-vector-icons/Ionicons';

// Importa componentes personalizados como los botones de la cámara y vista previa de imágenes.
import CameraButton from '../components/uploadFiles/cameraButton';
import ImagePreview from '../components/uploadFiles/imagePreview';
import FileUploadForm from '../components/uploadFiles/fileUploadForm'; // Importa el formulario para cargar archivos.

// Importa los estilos definidos para esta pantalla.
import styles from '../components/Styles/uploadFiles';

// Importa el componente de Alertas de React Native para mostrar mensajes de error o éxito.
import { Alert } from 'react-native';

// Componente funcional `UploadFiles` con propiedades `route` y `navigation`.
const UploadFiles = ({ route, navigation }: any) => {
  const { conductorId } = route.params; // Extrae el ID del conductor desde los parámetros de navegación.
  const [imageUri, setImageUri] = useState<string | null>(null); // Estado para almacenar la URI de la imagen seleccionada.
  const [fileName, setFileName] = useState<string>(''); // Estado para almacenar el nombre del archivo.
  const [isConfirmingImage, setIsConfirmingImage] = useState(false); // Estado para confirmar la imagen tomada.
  const [isUploading, setUploading] = useState(false); // Estado para saber si el archivo se está subiendo.

  // Función para tomar una foto.
  const takePicture = async () => {
    // Solicita permisos para acceder a la cámara.
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    // Si no se concede el permiso, muestra un mensaje de alerta.
    if (status !== 'granted') {
      Alert.alert('Permiso denegado', 'Se necesita acceso a la cámara para tomar fotos.');
      return;
    }

    // Lanza la cámara y obtiene la imagen.
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // Solo imágenes.
      quality: 0.7, // Establece la calidad de la imagen.
      allowsEditing: true, // Permite editar la imagen.
    });

    // Si la operación no fue cancelada, guarda la URI de la imagen y cambia el estado para confirmar la imagen.
    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
      setIsConfirmingImage(true); // Muestra la vista para confirmar la imagen.
    }
  };

  // Función para confirmar que la imagen tomada es la correcta.
  const confirmImage = () => {
    setIsConfirmingImage(false); // Regresa al paso de ingresar el nombre del archivo.
  };

  // Función para subir el archivo.
  const uploadFile = async () => {
    // Si no hay imagen o el nombre del archivo está vacío, muestra un mensaje de error.
    if (!imageUri || !fileName.trim()) {
      Alert.alert('Error', 'Por favor, asegúrate de tomar una foto y escribir un nombre válido.');
      return;
    }

    setUploading(true); // Marca como "subiendo" el estado.

    try {
      const formData = new FormData();
      // Prepara el archivo para ser enviado en el cuerpo de la solicitud.
      formData.append('archivo', {
        uri: imageUri, // URI de la imagen.
        name: `${fileName}.jpg`, // Nombre del archivo.
        type: 'image/jpeg', // Tipo de archivo.
      } as any);
      formData.append('conductorId', conductorId.toString()); // Incluye el ID del conductor.

      // Llama al servicio `postArchivosConductor` para subir el archivo.
      await postArchivosConductor(formData);

      // Muestra un mensaje de éxito y redirige a la pantalla principal.
      Alert.alert('Éxito', '¡Archivo subido correctamente!', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Home'), // Redirige a la pantalla de inicio.
        },
      ]);
    } catch (error: any) {
      // Si ocurre un error, muestra un mensaje de error.
      console.error('Error al subir archivo:', error.response?.data || error.message);
      Alert.alert('Error', 'Hubo un problema al subir el archivo.');
    } finally {
      setUploading(false); // Finaliza el estado de "subiendo".
      setImageUri(null); // Limpia la URI de la imagen.
      setFileName(''); // Limpia el nombre del archivo.
    }
  };

  return (
    <SafeAreaView style={styles.container}> {/* Área segura para la pantalla */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#1D4ED8" /> {/* Botón para regresar */}
      </TouchableOpacity>
  
      {/* Si no se está confirmando la imagen, muestra la opción para tomar foto y la vista previa de la imagen */}
      {!isConfirmingImage ? (
        <>
          <CameraButton onPress={takePicture} /> {/* Botón para tomar foto */}
          {imageUri && <ImagePreview uri={imageUri} />} {/* Muestra la vista previa de la imagen */}
        </>
      ) : (
        // Si se está confirmando la imagen, muestra una pantalla para confirmar.
        <View style={styles.imageConfirmContainer}>
          <Text style={styles.confirmTitle}>¿La imagen es correcta?</Text>
          <Image source={{ uri: imageUri || ''}} style={styles.imageConfirm} resizeMode="contain" />
          <View style={styles.confirmButtons}>
            <TouchableOpacity
              style={[styles.modalButton, styles.cancelButton]}
              onPress={() => setIsConfirmingImage(false)} // Regresa al paso anterior
            >
              <Text style={styles.cancelButton}>Regresar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.modalButton, styles.confirmButton]} onPress={confirmImage}> {/* Confirmar imagen */}
              <Text style={styles.confirmButton}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
  
      {/* Formulario para nombre del archivo y subir el archivo */}
      {imageUri && !isConfirmingImage && (
        <FileUploadForm
          fileName={fileName} // Nombre del archivo.
          setFileName={setFileName} // Función para actualizar el nombre.
          uploadFile={uploadFile} // Función para subir el archivo.
          isUploading={isUploading} // Estado de la subida.
        />
      )}
    </SafeAreaView>
  );
};

// Exporta el componente para su uso en otras partes de la aplicación.
export default UploadFiles;
