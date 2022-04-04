using System.ComponentModel.DataAnnotations.Schema;

namespace MotorSystemsApp.Models
{
    public class OrderItem
    {
        public int OrderId { get; set; }

        
        public Order? Order { get; set; }

        public int ProductId { get; set; }
        
        public Product? Product { get; set; }
        public float Quantity { get; set; }
        public float Price { get; set; }

    }
}
