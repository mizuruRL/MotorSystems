using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MotorSystemsApp.Migrations
{
    public partial class gh : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Vehicle",
                keyColumn: "Plate",
                keyValue: "A1-B7-30");

            migrationBuilder.UpdateData(
                table: "Product",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Brand", "Name" },
                values: new object[] { "Castrol", "Castrol Oil" });

            migrationBuilder.UpdateData(
                table: "Product",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Category", "ImgUrl" },
                values: new object[] { "Rims", "/assets/images/rims.jpg" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Product",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Brand", "Name" },
                values: new object[] { "Brand1", "Prod1" });

            migrationBuilder.UpdateData(
                table: "Product",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Category", "ImgUrl" },
                values: new object[] { "Category2", "/assets/images/castrol-oil.jpg" });

            migrationBuilder.InsertData(
                table: "Vehicle",
                columns: new[] { "Plate", "Brand", "Client", "Model", "Type" },
                values: new object[] { "A1-B7-30", "BMW", "tiago", "M3", 0 });
        }
    }
}
