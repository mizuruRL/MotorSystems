using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MotorSystemsApp.Data.Migrations
{
    public partial class ordermultiproducts : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Order",
                table: "Order");

            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "Order",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .OldAnnotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Order",
                table: "Order",
                columns: new[] { "Id", "ProductId" });

            migrationBuilder.InsertData(
                table: "Order",
                columns: new[] { "Id", "ProductId", "OrderDate", "OrderDelivery", "QuantityOrdered", "State" },
                values: new object[] { 1, 2, new DateTime(2022, 3, 20, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2022, 4, 2, 0, 0, 0, 0, DateTimeKind.Unspecified), 5f, "Pending" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Order",
                table: "Order");

            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "Order",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Order",
                table: "Order",
                column: "Id");
        }
    }
}
