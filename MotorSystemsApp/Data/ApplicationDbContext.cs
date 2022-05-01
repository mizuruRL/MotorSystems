using Duende.IdentityServer.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Microsoft.Extensions.Options;
using MotorSystemsApp.Models;

namespace MotorSystemsApp.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions options, IOptions<OperationalStoreOptions> operationalStoreOptions)
            : base(options, operationalStoreOptions)
        {

        }

        public DbSet<Product> Product { get; set; }
        public DbSet<ProductNeeded> ProductNeeded { get; set; }
        public DbSet<Order> Order { get; set; }
        public DbSet<OrderItem> OrderItem { get; set; }
        public DbSet<Service> Service { get; set; }
        public DbSet<Vehicle> Vehicle { get; set; }        
        public DbSet<Worker> Worker { get; set; }
        public DbSet<ServiceItem> ServiceItem { get; set; }
        public DbSet<ServiceItemItem> ServiceItemItem { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<OrderItem>().HasKey(oi => new { oi.OrderId, oi.ProductId });

            modelBuilder.Entity<OrderItem>()
                        .HasOne(oi => oi.Order)
                        .WithMany(o => o.OrderItems)
                        .HasForeignKey(oi => oi.OrderId);

            modelBuilder.Entity<OrderItem>()
                        .HasOne(oi => oi.Product)
                        .WithMany(p => p.OrderItems)
                        .HasForeignKey(oi => oi.ProductId);

            ApplicationUser admin = new ApplicationUser
            {
                Id = "1",
                UserName = "admin",
                Email = "admin@admin.com",
                NormalizedEmail = "admin@admin.com".ToUpper(),
                NormalizedUserName = "admin".ToUpper(),
                TwoFactorEnabled = false,
                EmailConfirmed = true,
                PhoneNumber = "123456789",
                PhoneNumberConfirmed = false,
                DocId = 123,
                BirthDate = new DateTime(),
                CreatedDate = new DateTime(),
                Address = "address",
                City = "city",
                Zip = "123"
            };

            PasswordHasher<ApplicationUser> ph = new PasswordHasher<ApplicationUser>();
            admin.PasswordHash = ph.HashPassword(admin, "admin");

            modelBuilder.Entity<ApplicationUser>().HasData(
                admin
             );

            modelBuilder.Entity<Worker>().HasData(
                new Worker
                {
                    Id = "1",
                    IsAdmin = true,
                    Username = "admin"
                }
             );

            modelBuilder.Entity<Product>().HasData
                (
                    new Product()
                    {
                        Id = 1,
                        Name = "Castrol Oil",
                        Description = "Óleo multigraduado totalmente sintético adequado para motores a gasolina e diesel. Preparado para intervalos de manutenção prolongados, pois é um óleo com designação 'longa vida' (máximo 30.000 km). Lubrificante com baixo teor de cinzas e enxofre, por isso é respeitoso com os filtros de partículas (DPF) e conversores catalíticos de três vias dos carros mais atuais.",
                        Brand = "Castrol",
                        Price = 30,
                        AvailableQuantity = 30,
                        Category = "Engine Oil",
                        ImgUrl = "/assets/images/castrol-oil.jpg"
                    },
                    new Product
                    {
                        Id = 2,
                        Name = "R³ Wheels R3H03",
                        Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                        Brand = "R³",
                        Price = 10,
                        AvailableQuantity = 30,
                        Category = "Rims",
                        ImgUrl = "/assets/images/rims.jpg",
                    },
                    new Product
                    {
                        Id = 3,
                        Name = "EK9 Front Bumper",
                        Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                        Brand = "ABP",
                        Price = 13,
                        AvailableQuantity = 5,
                        Category = "Bumpers",
                        ImgUrl = "/assets/images/Bumper.jpg"
                    }
                );

            modelBuilder.Entity<ProductNeeded>().HasData
                (
                    new ProductNeeded
                    {
                        Id = 1,
                        ProductId = 1,
                        NeededForDate = new DateTime(2022, 5, 30),
                        QuantityNeeded = 10
                    },
                    new ProductNeeded
                    {
                        Id = 2,
                        ProductId = 1,
                        NeededForDate = new DateTime(2022, 5, 24),
                        QuantityNeeded = 38
                    },
                    new ProductNeeded
                    {
                        Id = 3,
                        ProductId = 3,
                        NeededForDate = new DateTime(2022, 5, 6),
                        QuantityNeeded = 4
                    },
                    new ProductNeeded
                    {
                        Id = 4,
                        ProductId = 3,
                        NeededForDate = new DateTime(2022, 5, 24),
                        QuantityNeeded = 10
                    }
                );

            modelBuilder.Entity<Order>().HasData
                (
                    new Order
                    {
                        Id = 1,
                        OrderDate = new DateTime(2022, 3, 20),
                        OrderDelivery = new DateTime(2022, 4, 2),
                        State = OrderState.Pending,
                        OrderItems = new List<OrderItem>(),
                        Provider = "Castrol"
                    },
                    new Order
                    {
                        Id = 2,
                        OrderDate = new DateTime(2022, 4, 5),
                        OrderDelivery = new DateTime(2022, 4, 15),
                        State = OrderState.Pending,
                        OrderItems = new List<OrderItem>(),
                        Provider = "Prov2"
                    }
                );
            modelBuilder.Entity<OrderItem>().HasData
                (
                    new OrderItem
                    {
                        OrderId = 1,
                        ProductId = 1,
                        Quantity = 3,
                        Price = 5,
                    },
                    new OrderItem
                    {
                        OrderId = 1,
                        ProductId = 2,
                        Quantity = 4,
                        Price = 7,
                    },
                    new OrderItem
                    {
                        OrderId = 2,
                        ProductId = 2,
                        Quantity = 7,
                        Price = 45,
                    },
                    new OrderItem
                    {
                        OrderId = 2,
                        ProductId = 3,
                        Quantity = 12,
                        Price = 55,
                    }
                );

            
        }
    }
}