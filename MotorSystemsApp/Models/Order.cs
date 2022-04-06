using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace MotorSystemsApp.Models
{
    public class Order
    {
        [Key]
        public int Id { get; set; }
        public DateTime OrderDate { get; set; }
        public DateTime OrderDelivery { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public OrderState State { get; set; }
        public ICollection<OrderItem>? OrderItems { get; set; }

    }
}
