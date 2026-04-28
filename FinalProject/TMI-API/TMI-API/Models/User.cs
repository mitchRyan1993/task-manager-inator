using Microsoft.AspNetCore.Identity;

namespace TMI_API.Models
{
    public class User
    {
        public int Id { get; set; }
        public required string Username { get; set; }
        public required string Email { get; set; }
        public required string PasswordHash { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public DateTime Created { get; set; }
        public Role Role { get; set; }
    }

    public enum Role
    {
        Customer,
        Admininistrator,
    }
}
