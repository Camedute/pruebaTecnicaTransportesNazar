using EmpleadosAPI.Models; // Importa el espacio de nombres que contiene los modelos de datos, como 'Conductor' y 'ArchivosConductor'.
using Microsoft.EntityFrameworkCore; // Importa Entity Framework Core para trabajar con la base de datos y realizar consultas.

namespace EmpleadosAPI.Data
{
    public class ApplicationDbContext : DbContext // Define el contexto de la base de datos que hereda de DbContext.
    {
        // Constructor que recibe las opciones de configuración de DbContext y las pasa al constructor base de DbContext.
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        // Define las tablas (DbSets) que se corresponderán con las entidades de la base de datos.
        public DbSet<Conductor> Conductores { get; set; } // Tabla para la entidad Conductor.
        public DbSet<ArchivosConductor> ArchivosConductores { get; set; } // Tabla para la entidad ArchivosConductor.

        // Método que configura las relaciones y claves en el modelo.
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Llama a la implementación base para configurar las entidades.
            base.OnModelCreating(modelBuilder);

            // Configura la clave primaria para la entidad 'Conductor'.
            modelBuilder.Entity<Conductor>()
                .HasKey(c => c.IdConductor); // La propiedad 'IdConductor' es la clave primaria.

            // Configura la clave primaria para la entidad 'ArchivosConductor'.
            modelBuilder.Entity<ArchivosConductor>()
                .HasKey(a => a.IdArchivo); // La propiedad 'IdArchivo' es la clave primaria.

            // Configura la relación entre 'Conductor' y 'ArchivosConductor'.
            modelBuilder.Entity<ArchivosConductor>()
                .HasOne(a => a.Conductor) // Cada 'ArchivoConductor' pertenece a un único 'Conductor'.
                .WithMany(c => c.Archivos) // Un 'Conductor' puede tener muchos 'ArchivosConductor'.
                .HasForeignKey(a => a.ConductorId); // Define la clave foránea 'ConductorId' en 'ArchivosConductor'.
        }
    }
}
