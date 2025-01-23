// Importa React para crear componentes.
import React from "react";

// Importa componentes básicos de React Native para la interfaz.
import { Modal, View, Text, TouchableOpacity, Image } from "react-native";

// Importa los estilos definidos para el componente.
import styles from "../Styles/driverFiles";

// Define la interfaz de las propiedades que recibirá el componente.
interface FileModalProps {
  isVisible: boolean; // Indica si el modal está visible.
  imageUri: string | null; // URI de la imagen que se mostrará, puede ser `null`.
  fileName: string | null; // Nombre del archivo, puede ser `null`.
  onClose: () => void; // Función que se ejecuta al cerrar el modal.
}

// Define el componente funcional `FileModal`.
const FileModal: React.FC<FileModalProps> = ({ isVisible, imageUri, fileName, onClose }) => (
  // Modal con visibilidad, fondo transparente y animación de tipo "fade".
  <Modal visible={isVisible} transparent={true} animationType="fade">
    {/* Contenedor del modal. */}
    <View style={styles.modalContainer}>
      {/* Contenido principal del modal. */}
      <View style={styles.modalContent}>
        {/* Muestra el nombre del archivo si está disponible. */}
        {fileName && <Text style={styles.modalTitle}>{fileName}</Text>}
        
        {/* Muestra la imagen si la URI está disponible. */}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
        
        {/* Botón para cerrar el modal. */}
        <TouchableOpacity style={styles.closeModalButton} onPress={onClose}>
          <Text style={styles.closeModalText}>Cerrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

// Exporta el componente para usarlo en otros lugares.
export default FileModal;
