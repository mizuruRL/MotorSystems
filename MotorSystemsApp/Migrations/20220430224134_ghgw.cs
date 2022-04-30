using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MotorSystemsApp.Migrations
{
    public partial class ghgw : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "ProductNeeded",
                keyColumn: "Id",
                keyValue: 1,
                column: "NeededForDate",
                value: new DateTime(2022, 5, 30, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.UpdateData(
                table: "ProductNeeded",
                keyColumn: "Id",
                keyValue: 2,
                column: "NeededForDate",
                value: new DateTime(2022, 5, 24, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.UpdateData(
                table: "ProductNeeded",
                keyColumn: "Id",
                keyValue: 3,
                column: "NeededForDate",
                value: new DateTime(2022, 5, 6, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "ProductNeeded",
                keyColumn: "Id",
                keyValue: 1,
                column: "NeededForDate",
                value: new DateTime(2022, 3, 30, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.UpdateData(
                table: "ProductNeeded",
                keyColumn: "Id",
                keyValue: 2,
                column: "NeededForDate",
                value: new DateTime(2022, 5, 29, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.UpdateData(
                table: "ProductNeeded",
                keyColumn: "Id",
                keyValue: 3,
                column: "NeededForDate",
                value: new DateTime(2022, 4, 24, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
