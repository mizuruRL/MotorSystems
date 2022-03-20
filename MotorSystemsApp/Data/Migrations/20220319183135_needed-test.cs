using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MotorSystemsApp.Data.Migrations
{
    public partial class neededtest : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "QuantityNeeded",
                table: "ProductNeeded",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "Product",
                keyColumn: "Id",
                keyValue: 1,
                column: "QuantityNeeded",
                value: 0f);

            migrationBuilder.UpdateData(
                table: "Product",
                keyColumn: "Id",
                keyValue: 2,
                column: "QuantityNeeded",
                value: 0f);

            migrationBuilder.UpdateData(
                table: "ProductNeeded",
                keyColumn: "Id",
                keyValue: 1,
                column: "QuantityNeeded",
                value: 10);

            migrationBuilder.InsertData(
                table: "ProductNeeded",
                columns: new[] { "Id", "NeededForDate", "ProductId", "QuantityNeeded" },
                values: new object[] { 2, new DateTime(2022, 3, 26, 0, 0, 0, 0, DateTimeKind.Unspecified), 1, 8 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "ProductNeeded",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DropColumn(
                name: "QuantityNeeded",
                table: "ProductNeeded");

            migrationBuilder.UpdateData(
                table: "Product",
                keyColumn: "Id",
                keyValue: 1,
                column: "QuantityNeeded",
                value: 50f);

            migrationBuilder.UpdateData(
                table: "Product",
                keyColumn: "Id",
                keyValue: 2,
                column: "QuantityNeeded",
                value: 25f);
        }
    }
}
