using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MotorSystemsApp.Models
{
    public class Worker
    {
        [Key]
        [ForeignKey("ApplicationUser")]
        public int Id { get; set; }
        public string Username { get; set; }
        public string? JobTitle { get; set; }
        public DateTime? ContractEndDate { get; set; }
        public double? Salary { get; set; }
    }
}
