using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MotorSystemsApp.Migrations
{
    public partial class ble2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ServiceItemProduct_ServiceItem_ServiceItemId",
                table: "ServiceItemProduct");

            migrationBuilder.DropIndex(
                name: "IX_ServiceItemProduct_ServiceItemId",
                table: "ServiceItemProduct");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_ServiceItemProduct_ServiceItemId",
                table: "ServiceItemProduct",
                column: "ServiceItemId");

            migrationBuilder.AddForeignKey(
                name: "FK_ServiceItemProduct_ServiceItem_ServiceItemId",
                table: "ServiceItemProduct",
                column: "ServiceItemId",
                principalTable: "ServiceItem",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
