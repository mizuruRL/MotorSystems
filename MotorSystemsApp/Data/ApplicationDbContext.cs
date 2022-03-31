using Duende.IdentityServer.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder
            .Entity<Order>()
            .Property(o => o.State)
            .HasConversion(new EnumToStringConverter<OrderState>());

            modelBuilder.Entity<Product>().HasData
                (
                    new Product
                    {
                        Id = 1,
                        Name = "Prod1",
                        Description = "Desc1",
                        Brand = "Brand1",
                        Price = 30,
                        QuantityNeeded = 0,
                        AvailableQuantity = 30,
                        Category = "Category1"
                    },
                    new Product
                    {
                        Id = 2,
                        Name = "Prod2",
                        Description = "Desc2",
                        Brand = "Brand2",
                        Price = 10,
                        QuantityNeeded = 0,
                        AvailableQuantity = 30,
                        Category="Category2"
                    },
                    new Product
                    {
                        Id = 3,
                        Name = "Prod3",
                        Description = "Desc3",
                        Brand = "Brand3",
                        Price = 13,
                        QuantityNeeded = 0,
                        AvailableQuantity = 5,
                        Category = "Category3"
                    }
                );

            modelBuilder.Entity<ProductNeeded>().HasData
                (
                    new ProductNeeded
                    {
                        Id = 1,
                        ProductId = 1,
                        NeededForDate = new DateTime(2022, 3, 30),
                        QuantityNeeded = 10
                    },
                    new ProductNeeded
                    {
                        Id = 2,
                        ProductId = 1,
                        NeededForDate = new DateTime(2022, 5, 29),
                        QuantityNeeded=38
                    },
                    new ProductNeeded
                    {
                        Id = 3,
                        ProductId = 3,
                        NeededForDate = new DateTime(2022, 4, 24),
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
                        ProductId = 1,
                        OrderDate = new DateTime(2022, 3, 20),
                        OrderDelivery = new DateTime(2022, 4, 2),
                        State = OrderState.Pending,
                        QuantityOrdered=5,
                    }
                );
        }

    }
}