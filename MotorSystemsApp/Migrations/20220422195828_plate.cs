using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MotorSystemsApp.Migrations
{
    public partial class plate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Service_Vehicle_VehiclePlate",
                table: "Service");

            migrationBuilder.DropIndex(
                name: "IX_Service_VehiclePlate",
                table: "Service");

            migrationBuilder.AlterColumn<string>(
                name: "VehiclePlate",
                table: "Service",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "VehiclePlate",
                table: "Service",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.CreateIndex(
                name: "IX_Service_VehiclePlate",
                table: "Service",
                column: "VehiclePlate");

            migrationBuilder.AddForeignKey(
                name: "FK_Service_Vehicle_VehiclePlate",
                table: "Service",
                column: "VehiclePlate",
                principalTable: "Vehicle",
                principalColumn: "Plate",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
