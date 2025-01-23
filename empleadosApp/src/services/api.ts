// Importa la librería axios, que es una librería de cliente HTTP para hacer solicitudes.
import axios from "axios";

// Crea una instancia de axios, configurando las opciones globales para todas las solicitudes.
const api = axios.create({
    baseURL: "https://camedute-001-site1.ltempurl.com/api/", // Establece la URL base para las solicitudes API. Todos los endpoints de la API serán relativos a esta URL base.
    timeout: 5000, // Establece un tiempo máximo de espera (timeout) para las solicitudes en milisegundos. Si la solicitud tarda más de 5 segundos, se cancelará.
    headers: {
        'Content-Type' : 'application/json' // Establece el tipo de contenido que se enviará en las solicitudes como JSON.
    },
});

// Exporta la instancia configurada de axios para que pueda ser utilizada en otras partes de la aplicación.
export default api;
