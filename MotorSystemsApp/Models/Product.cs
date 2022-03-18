using System.ComponentModel.DataAnnotations;

namespace MotorSystemsApp.Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Brand { get; set; }
        public double Price { get; set; }
        public double QuantityNeeded { get; set; }
        public double AvailableQuantity { get; set; }
    }
}
