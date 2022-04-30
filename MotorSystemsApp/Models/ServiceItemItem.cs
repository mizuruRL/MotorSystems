using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MotorSystemsApp.Models
{
    public class ServiceItemItem
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("ServiceItem")]
        public int ServiceItemId { get; set; }

        [ForeignKey("Product")]
        public int ProductId { get; set; }
        public Product? Product { get; set; }
        public float Quantity { get; set; }
    }
}
