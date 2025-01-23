using System.Text.Json.Serialization; // Importa la biblioteca para trabajar con la serialización de JSON, especialmente para el uso de JsonIgnore.

namespace EmpleadosAPI.Models
{
    // Clase que representa un conductor dentro del sistema.
    public class Conductor
    {
        // Propiedad que representa el identificador único del conductor.
        public int IdConductor { get; set; } // Identificador del conductor

        // Propiedad que almacena el nombre del conductor.
        public string nombreConductor { get; set; } // Nombre del conductor

        // Propiedad que almacena el apellido del conductor.
        public string apellidoConductor { get; set; } // Apellido del conductor

        // Propiedad de navegación que permite acceder a los archivos asociados al conductor.
        // Se usa JsonIgnore para evitar incluir esta colección en la serialización JSON.
        [JsonIgnore]
        public ICollection<ArchivosConductor> Archivos { get; set; } // Esta colección representa los archivos asociados al conductor
    }
}
