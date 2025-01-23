// Importa la instancia de axios configurada previamente desde el archivo "api"
import api from "./api";

// Define una interfaz que describe la estructura de un conductor. Esto asegura que los objetos que representan a los conductores sigan este formato.
export interface Conductor {
    idConductor: number;     // ID único del conductor
    nombreConductor: string; // Nombre del conductor
    apellidoConductor: string; // Apellido del conductor
}

// Función asincrónica para obtener los conductores desde la API
export const getConductores = async (): Promise<Conductor[]> => {
    // Realiza una solicitud GET a la API para obtener los datos de los conductores
    const response = await api.get<Conductor[]>('/conductor'); 
    return response.data; // Devuelve los datos de la respuesta (la lista de conductores)
};
