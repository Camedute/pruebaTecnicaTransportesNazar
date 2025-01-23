import { StyleSheet } from "react-native"; // Importa la función StyleSheet de React Native para crear los estilos de la aplicación.

const styles = StyleSheet.create({
  // Estilo para la vista principal con área segura (safe area).
  safeArea: {
    flex: 1, // Ocupa todo el espacio disponible en el contenedor.
    backgroundColor: '#F9FAFB', // Establece un color de fondo claro.
  },
  
  // Estilo para el contenedor de la pantalla.
  container: {
    flex: 1, // Ocupa todo el espacio disponible.
    padding: 16, // Aplica un espaciado de 16 unidades a los bordes.
  },

  // Estilo para la cabecera de la pantalla.
  header: {
    flexDirection: 'row', // Organiza los elementos de la cabecera de forma horizontal.
    alignItems: 'center', // Alinea los elementos al centro verticalmente.
    paddingBottom: 16, // Aplica un espaciado de 16 unidades en la parte inferior.
    borderBottomWidth: 1, // Dibuja una línea en la parte inferior de 1 unidad de grosor.
    borderBottomColor: '#E5E7EB', // Establece el color de la línea inferior.
  },

  // Estilo para el botón de retroceso en la cabecera.
  backButton: {
    padding: 10, // Añade un espaciado de 10 unidades en todos los lados.
    marginRight: 16, // Añade un margen de 16 unidades en el lado derecho.
  },

  // Estilo para el contenido de la pantalla (área principal).
  content: {
    flex: 1, // Ocupa todo el espacio disponible en el contenedor.
    marginTop: 20, // Aplica un margen superior de 20 unidades.
  },

  // Estilo para el nombre del conductor.
  driverName: {
    fontSize: 24, // Tamaño de fuente grande.
    fontWeight: '700', // Peso de fuente grueso.
    color: '#1D4ED8', // Color del texto azul.
    textAlign: 'center', // Centra el texto horizontalmente.
    marginBottom: 20, // Aplica un margen inferior de 20 unidades.
    borderBottomWidth: 2, // Dibuja una línea en la parte inferior de 2 unidades de grosor.
    borderBottomColor: '#1D4ED8', // Color de la línea inferior (azul).
    paddingBottom: 10, // Aplica un espaciado de 10 unidades en la parte inferior.
  },

  // Estilo para el botón de subir archivos.
  uploadButton: {
    flexDirection: 'row', // Organiza los elementos de forma horizontal.
    backgroundColor: '#10B981', // Establece el color de fondo verde.
    borderRadius: 8, // Bordes redondeados de 8 unidades.
    paddingVertical: 8, // Espaciado vertical de 8 unidades.
    paddingHorizontal: 14, // Espaciado horizontal de 14 unidades.
    marginVertical: 30, // Añade un margen vertical de 30 unidades.
    alignSelf: 'flex-end', // Alinea el botón a la derecha.
    alignItems: 'center', // Centra los elementos verticalmente.
    elevation: 3, // Aplica una sombra leve al botón.
  },

  // Estilo para el texto dentro del botón de subir archivos.
  uploadButtonText: {
    fontSize: 14, // Tamaño de fuente pequeño.
    color: '#ffffff', // Color del texto blanco.
    fontWeight: '600', // Peso de fuente semigrueso.
    marginLeft: 8, // Aplica un margen izquierdo de 8 unidades.
  },

  // Estilo para el título de la sección de archivos.
  filesTitle: {
    fontSize: 18, // Tamaño de fuente grande.
    fontWeight: '600', // Peso de fuente semigrueso.
    color: '#374151', // Color del texto gris oscuro.
    marginBottom: 10, // Aplica un margen inferior de 10 unidades.
    marginTop: 20, // Aplica un margen superior de 20 unidades.
    textAlign: 'left', // Alinea el texto a la izquierda.
  },

  // Estilo para la sección de archivos, donde se muestran los archivos.
  filesSection: {
    backgroundColor: '#ffffff', // Fondo blanco.
    padding: 16, // Espaciado de 16 unidades alrededor del contenido.
    borderRadius: 8, // Bordes redondeados de 8 unidades.
    elevation: 3, // Aplica una sombra ligera.
    marginTop: 20, // Aplica un margen superior de 20 unidades.
    borderWidth: 1, // Aplica un borde de 1 unidad de grosor.
    borderColor: '#E5E7EB', // Establece el color del borde.
  },

  // Estilo para el cargador (indicador de carga).
  loader: {
    marginTop: 30, // Añade un margen superior de 30 unidades.
  },

  // Estilo para el texto de error.
  errorText: {
    fontSize: 16, // Tamaño de fuente moderado.
    color: '#EF4444', // Color rojo para el error.
    textAlign: 'center', // Centra el texto horizontalmente.
  },

  // Estilo para el texto cuando no hay archivos.
  noFilesText: {
    fontSize: 16, // Tamaño de fuente moderado.
    color: '#10B981', // Color verde.
    textAlign: 'center', // Centra el texto horizontalmente.
    padding: 20, // Aplica un espaciado de 20 unidades en todos los lados.
    backgroundColor: '#FCE8E8', // Fondo de color rosa pálido.
    borderRadius: 8, // Bordes redondeados de 8 unidades.
  },

  // Estilo para la lista de archivos.
  filesList: {
    marginTop: 20, // Aplica un margen superior de 20 unidades.
  },

  // Estilo para el separador entre elementos de la lista.
  separator: {
    height: 1, // Altura del separador de 1 unidad.
    backgroundColor: '#E5E7EB', // Color del separador gris claro.
  },

  // Estilo para cada elemento de la lista de archivos.
  fileItem: {
    flexDirection: 'row', // Organiza los elementos de forma horizontal.
    alignItems: 'center', // Alinea los elementos verticalmente.
    justifyContent: 'space-between', // Distribuye los elementos a los extremos.
    paddingVertical: 12, // Espaciado vertical de 12 unidades.
    paddingHorizontal: 16, // Espaciado horizontal de 16 unidades.
    backgroundColor: '#ffffff', // Fondo blanco.
    elevation: 1, // Aplica una sombra ligera.
    marginBottom: 8, // Aplica un margen inferior de 8 unidades.
    borderRadius: 8, // Bordes redondeados de 8 unidades.
  },

  // Estilo para la información del archivo dentro del item.
  fileInfo: {
    flex: 1, // Ocupa todo el espacio disponible.
    marginLeft: 12, // Aplica un margen izquierdo de 12 unidades.
  },

  // Estilo para el nombre del archivo.
  fileName: {
    fontSize: 16, // Tamaño de fuente moderado.
    color: '#374151', // Color gris oscuro.
    fontWeight: '500', // Peso de fuente medio.
  },

  // Estilo para el botón de mostrar el archivo.
  showButton: {
    paddingVertical: 6, // Espaciado vertical de 6 unidades.
    paddingHorizontal: 12, // Espaciado horizontal de 12 unidades.
    backgroundColor: '#1D4ED8', // Fondo azul.
    borderRadius: 8, // Bordes redondeados de 8 unidades.
    elevation: 2, // Aplica una sombra ligera.
  },

  // Estilo para el texto dentro del botón de mostrar el archivo.
  showButtonText: {
    color: '#ffffff', // Texto en blanco.
    fontWeight: '500', // Peso de fuente medio.
  },

  // Estilo para el contenedor del modal (pantalla emergente).
  modalContainer: {
    flex: 1, // Ocupa todo el espacio disponible.
    justifyContent: 'center', // Centra el contenido verticalmente.
    alignItems: 'center', // Centra el contenido horizontalmente.
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente negro.
  },

  // Estilo para el contenido del modal.
  modalContent: {
    backgroundColor: '#ffffff', // Fondo blanco para el modal.
    padding: 20, // Espaciado de 20 unidades dentro del modal.
    borderRadius: 12, // Bordes redondeados de 12 unidades.
    width: '80%', // Ancho del modal al 80% del contenedor.
    maxWidth: 400, // Ancho máximo del modal de 400 unidades.
  },

  // Estilo para el título del modal.
  modalTitle: {
    fontSize: 18, // Tamaño de fuente moderado.
    fontWeight: '600', // Peso de fuente semigrueso.
    color: '#374151', // Color gris oscuro.
    marginBottom: 10, // Margen inferior de 10 unidades.
  },

  // Estilo para la imagen dentro del modal.
  image: {
    width: '100%', // La imagen ocupa todo el ancho disponible.
    height: 300, // Altura de la imagen de 300 unidades.
    resizeMode: 'contain', // Asegura que la imagen se ajuste sin distorsionarse.
    marginBottom: 20, // Aplica un margen inferior de 20 unidades.
  },

  // Estilo para el botón de cerrar el modal.
  closeModalButton: {
    marginTop: 20, // Aplica un margen superior de 20 unidades.
    backgroundColor: '#EF4444', // Fondo rojo para el botón.
    borderRadius: 8, // Bordes redondeados de 8 unidades.
    paddingVertical: 10, // Espaciado vertical de 10 unidades.
    paddingHorizontal: 20, // Espaciado horizontal de 20 unidades.
    alignItems: 'center', // Centra el contenido horizontalmente.
  },

  // Estilo para el texto dentro del botón de cerrar el modal.
  closeModalText: {
    color: '#ffffff', // Texto en blanco.
    fontWeight: '600', // Peso de fuente semigrueso.
  },
});

export default styles; // Exporta los estilos definidos para ser usados en otros componentes.
