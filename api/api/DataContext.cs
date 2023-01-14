using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options) {
            Console.WriteLine("Вызван DataContext конструктор");
        }

        public DbSet<Animal> Animals { get; set; }
        public DbSet<AnimalOwner> Owners { get; set; }
        public DbSet<Feed> FeedingHistory { get; set; }
        public DbSet<Veterinarian> Veterinarians { get; set; }
    }
}
