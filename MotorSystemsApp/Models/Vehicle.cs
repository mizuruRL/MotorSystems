using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace MotorSystemsApp.Models
{
    public class Vehicle
    {
        [Key]
        public string Plate { get; set; }
        //public int VehicleId { get; set; 

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public VehicleType Type { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public string Client { get; set; }      
        //public List<Service> Services { get; set; }
    }

    public enum VehicleType
    {
        Car, Truck, Motorcycle
    }
}
