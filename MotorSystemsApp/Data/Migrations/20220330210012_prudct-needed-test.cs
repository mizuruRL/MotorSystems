using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MotorSystemsApp.Data.Migrations
{
    public partial class prudctneededtest : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "ProductNeeded",
                columns: new[] { "Id", "NeededForDate", "ProductId", "QuantityNeeded" },
                values: new object[] { 4, new DateTime(2022, 5, 24, 0, 0, 0, 0, DateTimeKind.Unspecified), 3, 10 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "ProductNeeded",
                keyColumn: "Id",
                keyValue: 4);
        }
    }
}
