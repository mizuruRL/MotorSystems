using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace MotorSystemsApp.Models
{
    public class Service
    {
        public int Id { get; set; }
        public string? AssignedWorker { get; set; }
        public string Client { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public State State { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public ServiceType Type { get; set; }

        public string VehiclePlate { get; set; }
       // public Vehicle Vehicle { get; set; }

        //[ForeignKey("VehiclePlate")]
        //public int VehiclePlate { get; set; }
        //public string Plate { get; set; }
    }

    public enum ServiceType
    {
        Oil_Change, Revision, Part_Replacement, General_Tuning, Other
    }    

    public enum State
    {
        In_Queue, Processing, Finished, Cancelled
    }
}
