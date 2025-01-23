// Importa React para crear componentes.
import React from 'react';

// Importa componentes básicos de React Native para la interfaz.
import { View, Text } from 'react-native';

// Importa los estilos definidos para el componente.
import styles from '../Styles/Home';

// Define el componente funcional `Loading`.
const Loading: React.FC = () => (
    // Contenedor principal para el estado de carga.
    <View style={styles.loadingContainer}>
        {/* Mensaje de carga para el usuario. */}
        <Text style={styles.loadingText}>Cargando empleados...</Text>
    </View>
);

// Exporta el componente para usarlo en otros lugares.
export default Loading;
