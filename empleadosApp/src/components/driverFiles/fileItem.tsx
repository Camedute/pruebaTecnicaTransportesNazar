// Importa la interfaz `Archivo` desde el servicio correspondiente.
import { Archivo } from "../../services/filesService";

// Importa componentes básicos de React Native para la interfaz.
import { View, Text } from "react-native";

// Importa `TouchableOpacity` para crear un botón táctil.
import { TouchableOpacity } from "react-native";

// Importa los estilos definidos para el componente.
import styles from "../Styles/driverFiles";

// Importa el ícono `FileText` desde el paquete lucide-react-native.
import { FileText } from "lucide-react-native";

// Define las propiedades que recibirá el componente.
type FileItemProps = {
    archivo: Archivo; // Información del archivo, como su nombre.
    onShowFile: () => void; // Función que se ejecuta al presionar "Mostrar".
};

// Define el componente funcional `FileItem`.
const FileItem: React.FC<FileItemProps> = ({ archivo, onShowFile }) => (
    // Contenedor principal del elemento del archivo.
    <View style={styles.fileItem}>
        {/* Ícono de archivo con estilo. */}
        <FileText size={24} color="#1D4ED8" />
        
        {/* Contenedor de información del archivo. */}
        <View style={styles.fileInfo}>
            {/* Muestra el nombre del archivo. */}
            <Text style={styles.fileName}>{archivo.nombreArchivo}</Text>
        </View>
        
        {/* Botón táctil para la acción "Mostrar". */}
        <TouchableOpacity style={styles.showButton} onPress={onShowFile}>
            {/* Texto del botón. */}
            <Text style={styles.showButtonText}>Mostrar</Text>
        </TouchableOpacity>
    </View>
);

// Exporta el componente para usarlo en otros lugares.
export default FileItem;
