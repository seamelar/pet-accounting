namespace api.Models
{
    public class Feed
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public DateTime DateTime { get; set; }
        public int AnimalId { get; set; }
        public Animal? Animal { get; set; }
    }
}
