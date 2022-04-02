using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MotorSystemsApp.Models
{
    public class Order
    {
        //[Key, Column(Order = 0)]
        public int Id { get; set; }
        public DateTime OrderDate { get; set; }
        public DateTime OrderDelivery { get; set; }
        //public int[] ProductIds { get; set; }

        //[Key, Column(Order = 1)]
        public int ProductId { get; set; }
        public float QuantityOrdered { get; set; }
        public OrderState State { get; set; }
        
    }
}
