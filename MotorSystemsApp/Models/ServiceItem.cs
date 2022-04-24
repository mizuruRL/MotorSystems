namespace MotorSystemsApp.Models
{
    public class ServiceItem
    {
        public int ServiceId { get; set; }

        public Service? Service { get; set; }

        public int ProductId { get; set; }

        public Product? Product { get; set; }
        public float ProductQuantity { get; set; }
        public string Description { get; set; }
    }
}
