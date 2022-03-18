using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MotorSystemsApp.Data.Migrations
{
    public partial class productdatatest : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Product",
                columns: new[] { "Id", "AvailableQuantity", "Brand", "Description", "Name", "Price", "QuantityNeeded" },
                values: new object[] { 1, 40.0, "Brand1", "Description1", "Name1", 20.0, 30.0 });

            migrationBuilder.InsertData(
                table: "Product",
                columns: new[] { "Id", "AvailableQuantity", "Brand", "Description", "Name", "Price", "QuantityNeeded" },
                values: new object[] { 2, 60.0, "Brand2", "Description2", "Name2", 30.0, 70.0 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Product",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Product",
                keyColumn: "Id",
                keyValue: 2);
        }
    }
}
