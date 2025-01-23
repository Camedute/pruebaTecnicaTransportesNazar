using EmpleadosAPI.Data; // Importa el contexto de datos de la base de datos, en este caso ApplicationDbContext.
using Microsoft.EntityFrameworkCore; // Importa el paquete necesario para trabajar con Entity Framework Core y las bases de datos.

var builder = WebApplication.CreateBuilder(args); // Crea una instancia del objeto WebApplicationBuilder, que es responsable de configurar los servicios y el pipeline de la aplicación.


// Cambiar la configuración de la cadena de conexión para usar SQL Server
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))); 
    // Configura el contexto de la base de datos para usar SQL Server.
    // Se obtiene la cadena de conexión desde el archivo de configuración (appsettings.json o variables de entorno).


// Agregar servicios para controladores
builder.Services.AddControllers(); 
// Configura la aplicación para que pueda manejar peticiones HTTP a través de los controladores que están definidos en la API.


// Agregar Swagger para la documentación y prueba de la API
builder.Services.AddEndpointsApiExplorer(); 
// Añade soporte para la exploración de los puntos finales de la API (endpoints).
builder.Services.AddSwaggerGen(); 
// Añade soporte para generar la documentación interactiva de la API a través de Swagger.


/* Habilitar CORS para permitir el acceso desde la APP */
builder.Services.AddCors(options =>
{
    options.AddPolicy("permitirAPP",
        policy => policy.AllowAnyOrigin() // Permite el acceso desde cualquier origen (dominio) a la API.
                        .AllowAnyMethod() // Permite cualquier método HTTP (GET, POST, PUT, DELETE, etc.)
                        .AllowAnyHeader()); // Permite cualquier encabezado (header) en las solicitudes.
});


var app = builder.Build(); // Crea la instancia de la aplicación con la configuración y servicios definidos previamente.


// Usar Swagger en desarrollo
if (app.Environment.IsDevelopment()) 
{
    app.UseSwagger(); // Habilita Swagger para generar la documentación de la API cuando la aplicación esté en desarrollo.
    app.UseSwaggerUI(); // Configura la interfaz de usuario de Swagger para probar los endpoints de la API.
}


// Usar la política de CORS que configuraste
app.UseCors("permitirAPP"); 
// Aplica la política de CORS configurada previamente, permitiendo solicitudes desde cualquier origen.

if (!app.Environment.IsDevelopment()) 
{
    app.UseExceptionHandler("/Error"); // Configura un controlador de excepciones para manejar errores no capturados.
    app.UseHsts(); // Habilita la política de seguridad de transporte estricto (HSTS), que obliga el uso de HTTPS en producción.
}

app.UseStaticFiles(); 
// Permite que la aplicación sirva archivos estáticos (como imágenes, archivos CSS, JavaScript, etc.).

app.UseRouting(); 
// Habilita el enrutamiento para que las solicitudes HTTP se dirijan a los controladores correspondientes.

app.UseAuthorization(); 
// Habilita el uso de autorización para las solicitudes (aunque no se haya configurado explícitamente la autenticación en este caso).

// Mapear controladores (necesario para que tu API funcione)
app.MapControllers(); 
// Registra los controladores en la aplicación, permitiendo que se resuelvan las rutas HTTP hacia las acciones de los controladores.

app.Run(); 
// Inicia la aplicación, haciendo que escuche las solicitudes entrantes en el puerto configurado.
