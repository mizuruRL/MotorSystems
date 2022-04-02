using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MotorSystemsApp.Models
{
    public class Order
    {
        [Key]
        public int Id { get; set; }
        public DateTime OrderDate { get; set; }
        public DateTime OrderDelivery { get; set; }
        public OrderState State { get; set; }
        public ICollection<OrderItem>? OrderItems { get; set; }

    }
}
