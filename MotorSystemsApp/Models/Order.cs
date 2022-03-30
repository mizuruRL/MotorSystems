using System.ComponentModel.DataAnnotations;

namespace MotorSystemsApp.Models
{
    public class Order
    {
        [Key]
        public int Id { get; set; }
        public DateTime OrderDate { get; set; }
        public DateTime OrderDelivery { get; set; }
        public int ProductId { get; set; }
        public string? ProductName { get; set; }
        public float QuantityOrdered { get; set; }
        public OrderState State { get; set; }
        
    }
}
