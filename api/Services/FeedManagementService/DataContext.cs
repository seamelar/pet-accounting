using Microsoft.EntityFrameworkCore;

namespace FeedManagementService
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<FeedHistory> FeedHistory { get; set; }
    }
}
