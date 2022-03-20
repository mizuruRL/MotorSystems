using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MotorSystemsApp.Data.Migrations
{
    public partial class testurgencysort : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Product",
                columns: new[] { "Id", "AvailableQuantity", "Brand", "Category", "DaysUntilNextNeed", "Description", "MissingQuantity", "Name", "Price", "QuantityNeeded" },
                values: new object[] { 3, 23f, "Brand3", "Category3", 0, "Desc3", 0f, "Prod3", 13f, 0f });

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
                value: new DateTime(2022, 3, 29, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.UpdateData(
                table: "ProductNeeded",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "NeededForDate", "ProductId" },
                values: new object[] { new DateTime(2022, 3, 24, 0, 0, 0, 0, DateTimeKind.Unspecified), 3 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Product",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.UpdateData(
                table: "ProductNeeded",
                keyColumn: "Id",
                keyValue: 1,
                column: "NeededForDate",
                value: new DateTime(2022, 3, 23, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.UpdateData(
                table: "ProductNeeded",
                keyColumn: "Id",
                keyValue: 2,
                column: "NeededForDate",
                value: new DateTime(2022, 3, 26, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.UpdateData(
                table: "ProductNeeded",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "NeededForDate", "ProductId" },
                values: new object[] { new DateTime(2022, 3, 21, 0, 0, 0, 0, DateTimeKind.Unspecified), 1 });
        }
    }
}
