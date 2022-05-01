using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MotorSystemsApp.Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public string Description { get; set; }
        public string Brand { get; set; }
        public float Price { get; set; }
        public string ImgUrl { get; set; }        
        public float AvailableQuantity { get; set; }

        [NotMapped]
        public float QuantityNeeded { get; set; }        

        [NotMapped]
        public float MissingQuantity { get; set; }
        [NotMapped]
        public int DaysUntilNextNeed { get; set; }

        public ICollection<ServiceItem>? ServiceItems { get; set; }

        [System.Text.Json.Serialization.JsonIgnore]
        public ICollection<OrderItem>? OrderItems { get; set; }
        

    }
}
