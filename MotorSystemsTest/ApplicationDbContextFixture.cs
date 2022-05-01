using Xunit;
using System;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using MotorSystemsApp.Data;
using Microsoft.Extensions.Options;
using Duende.IdentityServer.EntityFramework.Options;
using MotorSystemsApp.Models;


namespace MotorSystemsTest
{
    public class ApplicationDbContextFixture : IDisposable
    {
        public ApplicationDbContext DbContext { get; private set; }

        public ApplicationDbContextFixture()
        {
            var connection = new SqliteConnection("DataSource=:memory:");
            connection.Open();
            var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                    .UseSqlite(connection)
                    .Options;
            var operationalStoreOptions = Options.Create(new OperationalStoreOptions());
            DbContext = new ApplicationDbContext(options, operationalStoreOptions);

            DbContext.Database.EnsureCreated();

            DbContext.Users.Add(new ApplicationUser {Address = "Test", BirthDate = null, City = "Test", 
                //Client = new Client(), 
                CreatedDate = DateTime.Now, Email = "testestest123@asdasd.com",  UserName = "teste", Id = "1", Zip = "teste"});

            DbContext.SaveChanges();
        }

        public void Dispose() => DbContext.Dispose();
    }
}
