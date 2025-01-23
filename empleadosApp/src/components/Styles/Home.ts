import { StyleSheet, Dimensions } from 'react-native'; // Importa StyleSheet y Dimensions desde React Native para crear los estilos y obtener el tamaño de la ventana.

const { width } = Dimensions.get('window'); // Obtiene el ancho de la pantalla del dispositivo para usarlo en el diseño responsivo.

const styles = StyleSheet.create({
  // Estilo para la vista principal con área segura (safe area).
  safeArea: {
    flex: 1, // Ocupa todo el espacio disponible en el contenedor.
    backgroundColor: '#EFF6FF', // Establece el color de fondo de un azul claro.
  },

  // Estilo para el contenedor principal que contiene los elementos centrados.
  mainContainer: {
    flex: 1, // Ocupa todo el espacio disponible.
    justifyContent: 'center', // Centra los elementos verticalmente dentro del contenedor.
  },

  // Estilo para el contenedor que alinea sus elementos al centro.
  container: {
    alignItems: 'center', // Centra los elementos horizontalmente dentro del contenedor.
  },

  // Estilo para el contenedor cuando se está cargando.
  loadingContainer: {
    flex: 1, // Ocupa todo el espacio disponible.
    justifyContent: 'center', // Centra los elementos verticalmente dentro del contenedor.
    alignItems: 'center', // Centra los elementos horizontalmente.
  },

  // Estilo para el contenedor que envuelve la lista de elementos.
  listContainer: {
    width: width * 0.9, // Establece el ancho del contenedor al 90% del ancho de la pantalla.
    backgroundColor: '#ffffff', // Establece un fondo blanco.
    borderRadius: 12, // Bordes redondeados de 12 unidades.
    shadowColor: '#1D4ED8', // Color de la sombra (azul).
    shadowOffset: { width: 0, height: 4 }, // Desplazamiento de la sombra en el eje x y eje y.
    shadowOpacity: 0.1, // Opacidad de la sombra.
    shadowRadius: 6, // Radio de la sombra.
    elevation: 4, // Eleva el contenedor para darle una sombra más pronunciada en Android.
  },

  // Estilo para la cabecera de la lista.
  header: {
    backgroundColor: '#1D4ED8', // Fondo azul para la cabecera.
    padding: 15, // Aplica un espaciado de 15 unidades en todo el contorno.
    borderTopLeftRadius: 12, // Bordes redondeados en la parte superior izquierda.
    borderTopRightRadius: 12, // Bordes redondeados en la parte superior derecha.
  },

  // Estilo para el texto dentro de la cabecera.
  headerText: {
    color: '#ffffff', // Texto blanco.
    fontSize: 20, // Tamaño de fuente grande.
    fontWeight: 'bold', // Peso de fuente en negrita.
    textAlign: 'center', // Centra el texto horizontalmente.
  },

  // Estilo para el texto de error.
  errorText: {
    color: '#FF0000', // Color rojo para el texto de error.
    fontSize: 14, // Tamaño de fuente moderado.
    textAlign: 'center', // Centra el texto horizontalmente.
    marginTop: 10, // Añade un margen superior de 10 unidades.
  },

  // Estilo para el texto que indica que algo está cargando.
  loadingText: {
    fontSize: 18, // Tamaño de fuente moderado.
    color: '#374151', // Color gris oscuro.
    textAlign: 'center', // Centra el texto horizontalmente.
  },

  // Estilo para cada item en la lista.
  item: {
    flexDirection: 'row', // Organiza los elementos de forma horizontal.
    alignItems: 'center', // Alinea los elementos verticalmente en el centro.
    justifyContent: 'space-between', // Distribuye los elementos a los extremos.
    paddingVertical: 12, // Aplica un espaciado vertical de 12 unidades.
    paddingHorizontal: 16, // Aplica un espaciado horizontal de 16 unidades.
    backgroundColor: '#F9FAFB', // Fondo de color gris claro.
    borderBottomWidth: 1, // Aplica un borde en la parte inferior de 1 unidad de grosor.
    borderBottomColor: '#E5E7EB', // Color del borde inferior (gris claro).
  },

  // Estilo para el texto dentro de cada item de la lista.
  itemText: {
    fontSize: 16, // Tamaño de fuente moderado.
    color: '#1F2937', // Color gris oscuro.
    fontWeight: 'bold', // Peso de fuente en negrita.
    flex: 1, // El texto ocupa todo el espacio disponible en el contenedor.
  },

  // Estilo para el botón que contiene un ícono.
  iconButton: {
    marginLeft: 10, // Aplica un margen izquierdo de 10 unidades.
  },

  // Estilo para el contenedor que contiene el ícono y el texto.
  iconContainer: {
    flexDirection: 'row', // Organiza los elementos de forma horizontal.
    alignItems: 'center', // Alinea los elementos verticalmente al centro.
    justifyContent: 'center', // Centra los elementos horizontalmente.
    backgroundColor: '#3B82F6', // Fondo azul para el contenedor.
    borderRadius: 8, // Bordes redondeados de 8 unidades.
    paddingHorizontal: 12, // Aplica un espaciado horizontal de 12 unidades.
    paddingVertical: 8, // Aplica un espaciado vertical de 8 unidades.
    shadowColor: '#000', // Color de la sombra (negro).
    shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra en el eje x y eje y.
    shadowOpacity: 0.1, // Opacidad de la sombra.
    shadowRadius: 4, // Radio de la sombra.
    elevation: 3, // Eleva el contenedor para darle una sombra más pronunciada en Android.
  },

  // Estilo para el texto dentro del contenedor del ícono.
  buttonText: {
    color: '#ffffff', // Texto blanco.
    marginLeft: 8, // Aplica un margen izquierdo de 8 unidades.
    fontSize: 14, // Tamaño de fuente pequeño.
    fontWeight: '600', // Peso de fuente semigrueso.
  },

  // Estilo para el separador entre los elementos de la lista.
  separator: {
    height: 1, // Altura del separador de 1 unidad.
    backgroundColor: '#E5E7EB', // Color gris claro para el separador.
  },
});

export default styles; // Exporta los estilos definidos para ser utilizados en otros componentes.
