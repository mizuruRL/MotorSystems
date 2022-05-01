using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MotorSystemsApp.Models
{
    public class ServiceItem
    {
        [Key]
        public int Id { get;set; }

        [ForeignKey("Service")]
        public int ServiceId { get; set; }

        [System.Text.Json.Serialization.JsonIgnore]
        public Service? Service { get; set; }
        public string Description { get; set; }
        public float Price { get; set; }

        [NotMapped]
        public List<ServiceItemItem>? Items { get; set; }
    }
}
