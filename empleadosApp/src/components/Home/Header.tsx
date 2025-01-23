// Importa React para crear componentes.
import React from "react";

// Importa componentes básicos de React Native para la interfaz.
import { View, Text } from "react-native";

// Importa los estilos definidos para el componente.
import styles from "../Styles/Home";

// Define las propiedades que recibirá el componente.
type HeaderProps = {
  error: string | null; // Mensaje de error, puede ser una cadena o `null`.
};

// Define el componente funcional `Header`.
const Header: React.FC<HeaderProps> = ({ error }) => (
  // Contenedor principal del encabezado.
  <View style={styles.header}>
    {/* Título principal del encabezado. */}
    <Text style={styles.headerText}>Empleados</Text>
    
    {/* Muestra un mensaje de error si existe. */}
    {error && <Text style={styles.errorText}>{error}</Text>}
  </View>
);

// Exporta el componente para usarlo en otros lugares.
export default Header;
