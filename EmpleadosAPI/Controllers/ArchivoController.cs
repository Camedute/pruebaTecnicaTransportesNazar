using Microsoft.AspNetCore.Mvc; // Importa el módulo para usar las funcionalidades de API y controladores de ASP.NET Core.
using Microsoft.EntityFrameworkCore; // Importa el módulo para trabajar con Entity Framework Core y realizar consultas a la base de datos.
using EmpleadosAPI.Data; // Importa el contexto de la base de datos.
using EmpleadosAPI.Models; // Importa los modelos de datos necesarios para interactuar con la base de datos.

namespace EmpleadosAPI.Controllers
{
    [ApiController] // Indica que esta clase es un controlador de API.
    [Route("api/[controller]")] // Define la ruta base para las acciones del controlador.
    public class ArchivoController : ControllerBase
    {
        private readonly ApplicationDbContext _context; // Define un campo para el contexto de la base de datos.

        // Constructor para inicializar el contexto de la base de datos.
        public ArchivoController(ApplicationDbContext context)
        {
            _context = context; // Asigna el contexto recibido al campo _context.
        }

        // Acción para obtener los archivos asociados a un conductor específico.
        [HttpGet("{conductorId}")] // Define el método HTTP (GET) y la ruta con un parámetro de id de conductor.
        public async Task<IActionResult> GetArchivosByConductor(int conductorId)
        {
            // Obtiene los archivos asociados al conductor especificado por el Id.
            var archivos = await _context.ArchivosConductores
                .Where(a => a.ConductorId == conductorId)
                .ToListAsync();

            // Obtiene el conductor asociado al Id.
            var conductor = await _context.Conductores
                .FirstOrDefaultAsync(c => c.IdConductor == conductorId);

            // Si no se encuentra el conductor, devuelve un mensaje de error.
            if (conductor == null)
            {
                return NotFound(new { mensaje = "Conductor no encontrado" });
            }

            // Si no hay archivos para el conductor, devuelve un mensaje indicando que no se encontraron archivos.
            if (archivos == null || archivos.Count == 0)
            {
                return Ok(new
                {
                    mensaje = "No se encontraron archivos para este conductor",
                    IdConductor = conductor.IdConductor,
                    nombreConductor = conductor.nombreConductor,
                    apellidoConductor = conductor.apellidoConductor,
                    archivos = new List<object>() // Lista vacía de archivos.
                });
            }

            // Convierte las imágenes a base64 para enviarlas de manera segura en la respuesta.
            var archivosConImagenBase64 = archivos.Select(a => new
            {
                a.IdArchivo,
                a.NombreArchivo,
                ImagenBase64 = Convert.ToBase64String(a.Imagen) // Convierte la imagen en bytes a un string en base64.
            }).ToList();

            // Devuelve la información del conductor junto con los archivos en formato base64.
            return Ok(new
            {
                IdConductor = conductor.IdConductor,
                nombreConductor = conductor.nombreConductor,
                apellidoConductor = conductor.apellidoConductor,
                archivos = archivosConImagenBase64
            });
        }

        // Acción para obtener un archivo específico por su ID.
        [HttpGet("archivo/{archivoId}")] // Define el método HTTP (GET) con la ruta que incluye el Id del archivo.
        public async Task<IActionResult> GetArchivoById(int archivoId)
        {
            // Obtiene el archivo especificado por su ID.
            var archivo = await _context.ArchivosConductores
                .Where(a => a.IdArchivo == archivoId)
                .FirstOrDefaultAsync();

            // Si no se encuentra el archivo, devuelve un mensaje de error.
            if (archivo == null)
            {
                return NotFound(new { mensaje = "Archivo no encontrado" });
            }

            // Convierte la imagen a base64 antes de enviarla en la respuesta.
            var archivoConImagenBase64 = new
            {
                archivo.IdArchivo,
                archivo.NombreArchivo,
                ImagenBase64 = Convert.ToBase64String(archivo.Imagen) // Convierte la imagen en bytes a un string en base64.
            };

            // Devuelve el archivo con la imagen en base64.
            return Ok(new { archivo = archivoConImagenBase64 });
        }

        // Acción para subir un nuevo archivo para un conductor específico.
        [HttpPost("subir-imagen")] // Define el método HTTP (POST) para subir un archivo.
        public async Task<IActionResult> Post([FromForm] IFormFile archivo, [FromForm] int conductorId)
        {
            // Verifica si el archivo está presente o tiene un tamaño mayor a 0.
            if (archivo == null || archivo.Length == 0)
            {
                return BadRequest(new { mensaje = "No se ha seleccionado un archivo" });
            }

            // Lee el archivo y lo convierte a un arreglo de bytes.
            byte[] imagenBytes;
            using (var memoryStream = new MemoryStream())
            {
                await archivo.CopyToAsync(memoryStream); // Copia el archivo al MemoryStream.
                imagenBytes = memoryStream.ToArray(); // Convierte el contenido a un arreglo de bytes.
            }

            // Crea una nueva instancia del archivo para guardarlo en la base de datos.
            var nuevoArchivo = new ArchivosConductor
            {
                NombreArchivo = archivo.FileName, // Asigna el nombre del archivo.
                Imagen = imagenBytes,  // Guarda la imagen como un arreglo de bytes.
                ConductorId = conductorId // Asocia el archivo al conductor.
            };

            // Guarda el nuevo archivo en la base de datos.
            _context.ArchivosConductores.Add(nuevoArchivo);
            await _context.SaveChangesAsync();

            // Devuelve una respuesta con el archivo creado y su URL para acceder a los archivos del conductor.
            return CreatedAtAction(nameof(GetArchivosByConductor), new { conductorId = nuevoArchivo.ConductorId }, nuevoArchivo);
        }
    }
}
