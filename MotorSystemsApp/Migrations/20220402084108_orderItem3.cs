using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MotorSystemsApp.Migrations
{
    public partial class orderItem3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Order",
                columns: new[] { "Id", "OrderDate", "OrderDelivery", "State" },
                values: new object[] { 1, new DateTime(2022, 3, 20, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2022, 4, 2, 0, 0, 0, 0, DateTimeKind.Unspecified), "Pending" });

            migrationBuilder.InsertData(
                table: "Product",
                columns: new[] { "Id", "AvailableQuantity", "Brand", "Category", "DaysUntilNextNeed", "Description", "ImgUrl", "MissingQuantity", "Name", "Price", "QuantityNeeded" },
                values: new object[,]
                {
                    { 1, 30f, "Brand1", "Category1", 0, "Óleo multigraduado totalmente sintético adequado para motores a gasolina e diesel. Preparado para intervalos de manutenção prolongados, pois é um óleo com designação 'longa vida' (máximo 30.000 km). Lubrificante com baixo teor de cinzas e enxofre, por isso é respeitoso com os filtros de partículas (DPF) e conversores catalíticos de três vias dos carros mais atuais.", "/assets/images/castrol-oil.jpg", 0f, "Prod1", 30f, 0f },
                    { 2, 30f, "Brand2", "Category2", 0, "Desc2", "/assets/images/castrol-oil.jpg", 0f, "Prod2", 10f, 0f },
                    { 3, 5f, "Brand3", "Category3", 0, "Desc3", "/assets/images/castrol-oil.jpg", 0f, "Prod3", 13f, 0f }
                });

            migrationBuilder.InsertData(
                table: "ProductNeeded",
                columns: new[] { "Id", "NeededForDate", "ProductId", "QuantityNeeded" },
                values: new object[,]
                {
                    { 1, new DateTime(2022, 3, 30, 0, 0, 0, 0, DateTimeKind.Unspecified), 1, 10 },
                    { 2, new DateTime(2022, 5, 29, 0, 0, 0, 0, DateTimeKind.Unspecified), 1, 38 },
                    { 3, new DateTime(2022, 4, 24, 0, 0, 0, 0, DateTimeKind.Unspecified), 3, 4 },
                    { 4, new DateTime(2022, 5, 24, 0, 0, 0, 0, DateTimeKind.Unspecified), 3, 10 }
                });

            migrationBuilder.InsertData(
                table: "OrderItem",
                columns: new[] { "OrderId", "ProductId", "Price", "Quantity" },
                values: new object[] { 1, 1, 5f, 3f });

            migrationBuilder.InsertData(
                table: "OrderItem",
                columns: new[] { "OrderId", "ProductId", "Price", "Quantity" },
                values: new object[] { 1, 2, 7f, 4f });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "OrderItem",
                keyColumns: new[] { "OrderId", "ProductId" },
                keyValues: new object[] { 1, 1 });

            migrationBuilder.DeleteData(
                table: "OrderItem",
                keyColumns: new[] { "OrderId", "ProductId" },
                keyValues: new object[] { 1, 2 });

            migrationBuilder.DeleteData(
                table: "Product",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "ProductNeeded",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "ProductNeeded",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "ProductNeeded",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "ProductNeeded",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Order",
                keyColumn: "Id",
                keyValue: 1);

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
