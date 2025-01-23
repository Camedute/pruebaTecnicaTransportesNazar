using System.Text.Json.Serialization; // Importa la biblioteca para trabajar con la serialización de JSON, especialmente la clase JsonIgnore.

namespace EmpleadosAPI.Models
{
    // Clase que representa los archivos asociados a un conductor.
    public class ArchivosConductor
    {
        // Propiedad que representa el identificador único del archivo.
        public int IdArchivo { get; set; }

        // Propiedad que almacena el nombre del archivo.
        public string NombreArchivo { get; set; }

        // Propiedad que contiene los datos de la imagen del archivo como un arreglo de bytes.
        public byte[] Imagen { get; set; }

        // Clave foránea que referencia al conductor al que pertenece este archivo.
        // Se usa JsonIgnore para que no se incluya en la serialización JSON.
        [JsonIgnore]
        public int ConductorId { get; set; }

        // Propiedad de navegación que permite acceder al conductor relacionado.
        // También se usa JsonIgnore para evitar incluirla en la serialización JSON.
        [JsonIgnore]
        public Conductor Conductor { get; set; }

        // Propiedad calculada que convierte la imagen en un string Base64, útil para devolver la imagen en una respuesta JSON.
        // Esta propiedad no se serializa a la base de datos (usando JsonIgnore).
        [JsonIgnore] // No se serializa en la base de datos
        public string ImagenBase64 => Imagen != null ? Convert.ToBase64String(Imagen) : null;
    }
}
