namespace TMI_API.Models
{
    public class Organization
    {
        public int Id {  get; set; }
        public required string Name { get; set; }
        public string? Description { get; set; }
        public required int FounderId { get; set; }
    }
}
