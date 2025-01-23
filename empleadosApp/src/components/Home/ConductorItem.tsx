// Importa React para crear componentes.
import React from 'react';

// Importa la interfaz `Conductor` desde el servicio correspondiente.
import { Conductor } from '../../services/conductorService';

// Importa componentes básicos de React Native para la interfaz.
import { View, Text } from 'react-native';

// Importa `TouchableOpacity` para crear un botón táctil.
import { TouchableOpacity } from 'react-native';

// Importa el paquete de íconos `MaterialIcons`.
import Icon from 'react-native-vector-icons/MaterialIcons';

// Importa los estilos definidos para el componente.
import styles from '../Styles/Home';

// Define las propiedades que recibirá el componente.
type ConductorItemProps = {
    conductor: Conductor; // Información del conductor.
    onSelect: () => void; // Función que se ejecuta al seleccionar.
};

// Define el componente funcional `ConductorItem`.
const ConductorItem: React.FC<ConductorItemProps> = ({ conductor, onSelect }) => (
    // Contenedor principal del elemento.
    <View style={styles.item}>
        {/* Muestra el nombre completo del conductor. */}
        <Text style={styles.itemText}>
            {conductor.nombreConductor} {conductor.apellidoConductor}
        </Text>
        
        {/* Botón táctil para realizar una acción al seleccionar. */}
        <TouchableOpacity style={styles.iconButton} onPress={onSelect}>
            {/* Contenedor del ícono y texto del botón. */}
            <View style={styles.iconContainer}>
                {/* Ícono de "carpeta" */}
                <Icon name="folder" size={28} color="#ffffff" />
                {/* Texto del botón */}
                <Text style={styles.buttonText}>Detalles</Text>
            </View>
        </TouchableOpacity>
    </View>
);

// Exporta el componente para usarlo en otros lugares.
export default ConductorItem;
