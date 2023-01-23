using api.Models;

namespace FeedManagementService
{
    public class FeedHistory
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public DateTime DateTime { get; set; }

        public int AnimalId { get; set; }
        public Animal? Animal { get; set; }
    }
}
