import { StyleSheet } from "react-native"; // Importa el módulo StyleSheet de React Native para crear estilos.

const styles = StyleSheet.create({
  // Estilo para el contenedor principal de la pantalla.
  container: {
    flex: 1, // Ocupa todo el espacio disponible en el contenedor.
    alignItems: 'center', // Centra los elementos horizontalmente dentro del contenedor.
    justifyContent: 'center', // Centra los elementos verticalmente dentro del contenedor.
    padding: 20, // Aplica un espaciado de 20 unidades alrededor de los bordes.
    backgroundColor: '#ffffff', // Establece el color de fondo como blanco.
  },

  // Estilo para el botón de "volver" en la esquina superior izquierda.
  backButton: {
    position: 'absolute', // Posiciona el botón de forma absoluta.
    top: 30, // Coloca el botón 30 unidades desde la parte superior de la pantalla.
    left: 20, // Coloca el botón 20 unidades desde el borde izquierdo de la pantalla.
    padding: 10, // Aplica un espaciado de 10 unidades dentro del botón.
    backgroundColor: '#ffffff', // El fondo del botón es blanco, igual que el fondo de la pantalla.
    borderRadius: 50, // Establece bordes redondeados para hacer el botón circular.
    elevation: 5, // Aplica una sombra para dar un efecto de elevación en Android.
  },

  // Estilo para el botón principal de la pantalla.
  button: {
    backgroundColor: '#0288D1', // Fondo azul para el botón.
    padding: 18, // Aplica un espaciado de 18 unidades dentro del botón.
    borderRadius: 50, // Bordes redondeados para hacer el botón circular.
    marginBottom: 20, // Aplica un margen inferior de 20 unidades.
    flexDirection: 'row', // Organiza los elementos del botón en una fila (horizontal).
    alignItems: 'center', // Alinea los elementos (ícono y texto) verticalmente al centro.
    elevation: 5, // Aplica una sombra para dar un efecto de elevación en Android.
  },

  // Estilo para el texto dentro del botón.
  buttonText: {
    color: 'white', // Texto blanco dentro del botón.
    fontSize: 18, // Tamaño de fuente grande.
    fontWeight: 'bold', // Peso de fuente en negrita.
    textAlign: 'center', // Centra el texto horizontalmente dentro del botón.
    marginLeft: 10, // Aplica un margen izquierdo de 10 unidades para separar el texto del ícono.
  },

  // Estilo para la vista previa de la imagen.
  imagePreview: {
    width: 300, // Establece un ancho de 300 unidades para la imagen.
    height: 300, // Establece una altura de 300 unidades para la imagen.
    borderRadius: 10, // Bordes redondeados con un radio de 10 unidades para la imagen.
    marginTop: 20, // Aplica un margen superior de 20 unidades.
  },

  // Estilo para el contenedor de confirmación de la imagen.
  imageConfirmContainer: {
    alignItems: 'center', // Centra los elementos dentro del contenedor.
    width: '100%', // El contenedor ocupa todo el ancho disponible.
  },

  // Estilo para el título de confirmación de la imagen.
  confirmTitle: {
    fontSize: 18, // Tamaño de fuente moderado.
    fontWeight: 'bold', // Peso de fuente en negrita.
    marginBottom: 20, // Aplica un margen inferior de 20 unidades.
    color: '#333', // Color gris oscuro para el texto.
  },

  // Estilo para la imagen de confirmación.
  imageConfirm: {
    width: 300, // Establece un ancho de 300 unidades para la imagen de confirmación.
    height: 300, // Establece una altura de 300 unidades para la imagen de confirmación.
    borderRadius: 10, // Bordes redondeados con un radio de 10 unidades.
    marginBottom: 20, // Aplica un margen inferior de 20 unidades.
  },

  // Estilo para los botones dentro de la vista de confirmación.
  confirmButtons: {
    flexDirection: 'row', // Organiza los botones en una fila (horizontal).
    justifyContent: 'center', // Centra los botones horizontalmente dentro del contenedor.
    width: '80%', // El contenedor ocupa el 80% del ancho disponible.
  },

  // Estilo común para los botones de confirmación y cancelación.
  modalButton: {
    padding: 12, // Aplica un espaciado de 12 unidades dentro del botón.
    borderRadius: 8, // Bordes redondeados con un radio de 8 unidades.
    marginHorizontal: 5, // Aplica un margen horizontal de 5 unidades entre los botones.
    justifyContent: 'center', // Asegura que el contenido del botón esté centrado.
  },

  // Estilo para el botón de cancelar (rojo).
  cancelButton: {
    backgroundColor: '#FF5252', // Fondo rojo para el botón de cancelar.
  },

  // Estilo para el botón de confirmar (azul).
  confirmButton: {
    backgroundColor: '#0288D1', // Fondo azul para el botón de confirmar.
  },

  // Estilo para el contenedor del formulario.
  formContainer: {
    marginTop: 30, // Aplica un margen superior de 30 unidades.
    alignItems: 'center', // Centra los elementos dentro del contenedor.
    width: '100%', // El contenedor ocupa todo el ancho disponible.
  },

  // Estilo para las etiquetas de los campos del formulario.
  inputLabel: {
    fontSize: 16, // Tamaño de fuente moderado.
    fontWeight: 'bold', // Peso de fuente en negrita.
    color: '#333', // Color gris oscuro para el texto de la etiqueta.
    marginBottom: 10, // Aplica un margen inferior de 10 unidades entre la etiqueta y el campo.
  },

  // Estilo para los campos de entrada de texto del formulario.
  input: {
    width: '80%', // Establece el ancho del campo de entrada al 80% del contenedor.
    borderWidth: 1, // Aplica un borde de 1 unidad de grosor al campo.
    borderColor: '#ddd', // Color gris claro para el borde del campo.
    borderRadius: 8, // Bordes redondeados con un radio de 8 unidades.
    padding: 12, // Aplica un espaciado de 12 unidades dentro del campo de entrada.
    marginBottom: 20, // Aplica un margen inferior de 20 unidades.
    fontSize: 16, // Tamaño de fuente moderado.
    color: '#333', // Color gris oscuro para el texto dentro del campo de entrada.
  },

  // Estilo para el botón de subir archivo.
  uploadButton: {
    backgroundColor: '#0288D1', // Fondo azul para el botón de subir.
    marginTop: 20, // Aplica un margen superior de 20 unidades.
  },
});

export default styles; // Exporta los estilos definidos para ser utilizados en otros componentes.
