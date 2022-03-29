using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MotorSystemsApp.Data.Migrations
{
    public partial class changeneeddate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "ProductNeeded",
                keyColumn: "Id",
                keyValue: 3,
                column: "NeededForDate",
                value: new DateTime(2022, 4, 24, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "ProductNeeded",
                keyColumn: "Id",
                keyValue: 3,
                column: "NeededForDate",
                value: new DateTime(2022, 3, 24, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
