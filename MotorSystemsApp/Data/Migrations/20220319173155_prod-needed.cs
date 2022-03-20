using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MotorSystemsApp.Data.Migrations
{
    public partial class prodneeded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "ProductNeeded",
                columns: new[] { "Id", "NeededForDate", "ProductId" },
                values: new object[] { 1, new DateTime(2022, 3, 23, 0, 0, 0, 0, DateTimeKind.Unspecified), 1 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "ProductNeeded",
                keyColumn: "Id",
                keyValue: 1);
        }
    }
}
