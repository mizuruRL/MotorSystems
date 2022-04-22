namespace MotorSystemsApp.Models
{
    public class ServiceItem
    {
        public int ServiceId { get; set; }

        public Service? Service { get; set; }

        public int ProductId { get; set; }

        public Product? Product { get; set; }
        public float Quantity { get; set; }
    }
}
