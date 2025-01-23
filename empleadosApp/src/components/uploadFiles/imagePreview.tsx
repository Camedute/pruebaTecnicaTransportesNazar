// Importa React para crear componentes.
import React from "react";

// Importa el componente `Image` de React Native para mostrar imágenes.
import { Image } from "react-native";

// Importa los estilos definidos para el componente.
import styles from "../Styles/uploadFiles";

// Define el componente funcional `ImagePreview`.
const ImagePreview: React.FC<{ uri: string }> = ({ uri }) => (
    // Muestra una imagen con la URI proporcionada y aplica los estilos definidos.
    <Image 
        source={{ uri }} // Fuente de la imagen obtenida desde la URI.
        style={styles.imagePreview} // Estilo para la vista previa de la imagen.
        resizeMode="contain" // Ajusta la imagen para que se contenga dentro del espacio disponible.
    />
);

// Exporta el componente para usarlo en otros lugares.
export default ImagePreview;
