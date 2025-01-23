// Importa React para crear componentes.
import React from 'react';

// Importa componentes básicos de React Native para la interfaz.
import { TouchableOpacity, Text } from 'react-native';

// Importa el ícono `MaterialIcons` del paquete react-native-vector-icons.
import Icon from 'react-native-vector-icons/MaterialIcons';

// Importa los estilos definidos para el componente.
import styles from '../Styles/uploadFiles';

// Define el componente funcional `CameraButton`.
const CameraButton: React.FC<{ onPress: () => void }> = ({ onPress }) => (
    // Botón táctil con estilo y funcionalidad.
    <TouchableOpacity style={styles.button} onPress={onPress}>
        {/* Ícono de cámara con estilo. */}
        <Icon name="camera" size={24} color="white" />
        
        {/* Texto que describe la acción del botón. */}
        <Text style={styles.buttonText}>Tomar Foto</Text>
    </TouchableOpacity>
);

// Exporta el componente para usarlo en otros lugares.
export default CameraButton;
