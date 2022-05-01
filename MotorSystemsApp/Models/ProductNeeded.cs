using System.ComponentModel.DataAnnotations;

namespace MotorSystemsApp.Models
{
    public class ProductNeeded
    {
        [Key]
        public int Id { get; set; }
        public int ProductId { get; set; }
        public DateTime NeededForDate { get; set; }
        public int QuantityNeeded { get; set; }


    }
}
