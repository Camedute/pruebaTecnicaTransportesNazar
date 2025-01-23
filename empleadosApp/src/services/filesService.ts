// Importa la instancia de axios configurada previamente desde el archivo "api"
import api from './api';

// Define una interfaz que describe la estructura de un archivo. Esto asegura que los objetos que representan a los archivos sigan este formato.
export interface Archivo {
  idArchivo: number;      // ID único del archivo
  nombreArchivo: string;  // Nombre del archivo
  idConductor: number;    // ID del conductor al que pertenece el archivo
  imagenBase64: string;   // Imagen del archivo en formato Base64
}

// Función asincrónica para obtener los archivos de un conductor específico
export const getArchivosConductor = async (conductorId: number): Promise<Archivo[]> => {
  try {
    // Realiza una solicitud GET a la API para obtener los archivos del conductor con el ID proporcionado
    const response = await api.get<{ archivos: Archivo[] }>(`/archivo/${conductorId}`);
    return response.data.archivos; // Devuelve solo la lista de archivos de la respuesta
  } catch (error) {
    console.error('Error al obtener archivos:', error);
    throw error; // Lanza el error si hay un problema
  }
};

// Función asincrónica para subir un archivo (imagen) de un conductor
export const postArchivosConductor = async (formData: FormData): Promise<void> => {
  try {
    // Realiza una solicitud POST a la API para subir un archivo
    await api.post(`/archivo/subir-imagen`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Especifica el tipo de contenido adecuado para subir archivos
      },
    });
  } catch (error: any) {
    console.error('Error al subir archivo:', error.response?.data || error.message);
    throw error; // Lanza el error si hay un problema
  }
};

// Función asincrónica para obtener un archivo en base64 de un conductor
export const getArchivosBase64 = async (conductorId: number, archivoId: number): Promise<{ nombreArchivo: string, imagenBase64: string } | null> => {
  try {
    // Realiza una solicitud GET a la API para obtener todos los archivos del conductor
    const response = await api.get<{ archivos: Archivo[] }>(`/archivo/${conductorId}`);
  
    // Busca el archivo con el ID especificado
    const archivo = response.data.archivos.find(archivo => archivo.idArchivo === archivoId);
  
    if (archivo) {
      // Si el archivo es encontrado, devuelve su nombre y la imagen en base64
      return {
        nombreArchivo: archivo.nombreArchivo,
        imagenBase64: archivo.imagenBase64,
      };
    } else {
      console.error('Archivo no encontrado');
      return null; // Si no se encuentra el archivo, devuelve null
    }
  } catch (error) {
    console.error('Error al obtener el archivo base64:', error);
    return null; // Si hay un error, devuelve null
  }
};
