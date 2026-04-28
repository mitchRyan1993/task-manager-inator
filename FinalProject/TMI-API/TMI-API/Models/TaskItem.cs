using System.ComponentModel.DataAnnotations;

namespace TMI_API.Models
{
    public class TaskItem
    {
        public int Id { get; set; }
        [Required]
        public string? Title { get; set; }
        [Required]
        public string? Description { get; set; }
        public Status Status { get; set; }
        public Priority Priority { get; set; }
        public DateTime Created { get; set; }
        [Required]
        public DateTime DueDate { get; set; }
        public bool IsComplete { get; set; }
    }

    public enum Status
    {
        Pending,
        InProgress,
        Blocked,
        Rejected,
        Completed,
        Archived
    }

    public enum Priority
    {
        Low,
        Medium,
        High,
        Critical
    }
}
