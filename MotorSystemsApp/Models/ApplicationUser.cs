using Microsoft.AspNetCore.Identity;

namespace MotorSystemsApp.Models
{
    public class ApplicationUser : IdentityUser
    {
        [PersonalData]
        public int DocId { get; set; }
        [PersonalData]
        public DateTime? BirthDate { get; set; }
        [PersonalData]
        public DateTime CreatedDate { get; set; }
        [PersonalData]
        public string Address { get; set; }
        [PersonalData]
        public string City { get; set; }
        [PersonalData]
        public string Zip { get; set; }
    }
}