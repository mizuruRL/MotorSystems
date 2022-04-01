﻿using System.ComponentModel.DataAnnotations;

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
        public string? ImgUrl { get; set; }
        public float QuantityNeeded { get; set; }
        public float AvailableQuantity { get; set; }
        public float MissingQuantity { get; set; }
        public int DaysUntilNextNeed { get; set; }
        
    }
}
