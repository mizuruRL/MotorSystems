using System.ComponentModel.DataAnnotations;

namespace MotorSystemsApp.Models
{
    public class Client
    {
        [Key]
        public int Id { get; set; }
        //public ApplicationUser Id { get; set; }

        //public ICollection<Vehicle> Vehicles { get; set; }
    }
}
