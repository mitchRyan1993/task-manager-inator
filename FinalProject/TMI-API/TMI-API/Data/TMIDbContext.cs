using Microsoft.EntityFrameworkCore;
using TMI_API.Models;

namespace TMI_API.Data
{
    public class TMIDbContext : DbContext
    {
        public TMIDbContext(DbContextOptions<TMIDbContext> options) : base(options)
        {

        }
        public DbSet<TaskItem> Tasks { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Organization> Organizations { get; set; }
    }
}
