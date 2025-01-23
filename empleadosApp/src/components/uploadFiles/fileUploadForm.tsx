// Importa React para crear componentes.
import React from 'react';

// Importa componentes básicos de React Native para la interfaz.
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';

// Importa los estilos definidos para el componente.
import styles from '../Styles/uploadFiles';

// Define la interfaz de las propiedades que recibirá el componente.
interface FileUploadFormProps {
  fileName: string; // Nombre del archivo ingresado por el usuario.
  setFileName: (name: string) => void; // Función para actualizar el nombre del archivo.
  isUploading: boolean; // Indica si el archivo se está subiendo.
  uploadFile: () => void; // Función para iniciar la subida del archivo.
}

// Define el componente funcional `FileUploadForm`.
const FileUploadForm: React.FC<FileUploadFormProps> = ({ fileName, setFileName, isUploading, uploadFile }) => {
  return (
    // Contenedor principal del formulario.
    <View style={styles.formContainer}>
      
      {/* Etiqueta para el campo de entrada. */}
      <Text style={styles.inputLabel}>Nombre del Archivo</Text>
      
      {/* Campo de entrada para escribir el nombre del archivo. */}
      <TextInput
        style={styles.input}
        placeholder="Escribe el nombre del archivo"
        value={fileName}
        onChangeText={setFileName}
      />
      
      {/* Botón para subir el archivo. */}
      <TouchableOpacity
        style={[styles.button, styles.uploadButton]} // Estilo combinado para el botón.
        onPress={uploadFile}
        disabled={isUploading} // Desactiva el botón mientras se sube el archivo.
      >
        {/* Indicador de carga o texto del botón según el estado de subida. */}
        {isUploading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Subir</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

// Exporta el componente para usarlo en otros lugares.
export default FileUploadForm;
