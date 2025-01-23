using Microsoft.AspNetCore.Mvc; // Importa el módulo para usar las funcionalidades de API y controladores de ASP.NET Core.
using Microsoft.EntityFrameworkCore; // Importa el módulo para trabajar con Entity Framework Core y realizar consultas a la base de datos.
using EmpleadosAPI.Data; // Importa el contexto de la base de datos.

namespace EmpleadosAPI.Controllers
{
    [ApiController] // Indica que esta clase es un controlador de API.
    [Route("api/[controller]")] // Define la ruta base para las acciones del controlador.
    public class ConductorController : ControllerBase
    {
        private readonly ApplicationDbContext _context; // Define un campo para el contexto de la base de datos.

        // Constructor para inicializar el contexto de la base de datos.
        public ConductorController(ApplicationDbContext context)
        {
            _context = context; // Asigna el contexto recibido al campo _context.
        }

        // Acción para obtener todos los conductores con sus archivos asociados.
        [HttpGet] // Define el método HTTP (GET) y la ruta para obtener los conductores.
        public async Task<IActionResult> Get()
        {
            // Obtiene todos los conductores e incluye los archivos asociados utilizando Entity Framework.
            var conductores = await _context.Conductores.Include(c => c.Archivos).ToListAsync();

            // Devuelve los conductores junto con sus archivos asociados en la respuesta HTTP.
            return Ok(conductores);
        }
    }
}
