﻿using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace MotorSystemsApp.Models
{
    public class Worker
    {
        [Key]
        public string Username { get; set; }
        public string? JobTitle { get; set; }
        public DateTime? ContractEndDate { get; set; }
        public double? Salary { get; set; }
    }
}
