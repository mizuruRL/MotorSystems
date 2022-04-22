using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MotorSystemsApp.Migrations
{
    public partial class r : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Vehicle",
                table: "Vehicle");

            migrationBuilder.DeleteData(
                table: "Service",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Vehicle",
                keyColumn: "Plate",
                keyValue: "A1-B7-30");

            migrationBuilder.AlterColumn<string>(
                name: "Plate",
                table: "Vehicle",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.AddColumn<int>(
                name: "VehicleId",
                table: "Vehicle",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddColumn<int>(
                name: "VehicleId",
                table: "Service",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Vehicle",
                table: "Vehicle",
                column: "VehicleId");

            migrationBuilder.InsertData(
                table: "Vehicle",
                columns: new[] { "VehicleId", "Brand", "Client", "Model", "Plate", "Type" },
                values: new object[] { 1, "BMW", "tiago", "M3", "A1-B7-30", 0 });

            migrationBuilder.CreateIndex(
                name: "IX_Service_VehicleId",
                table: "Service",
                column: "VehicleId");

            migrationBuilder.AddForeignKey(
                name: "FK_Service_Vehicle_VehicleId",
                table: "Service",
                column: "VehicleId",
                principalTable: "Vehicle",
                principalColumn: "VehicleId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Service_Vehicle_VehicleId",
                table: "Service");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Vehicle",
                table: "Vehicle");

            migrationBuilder.DropIndex(
                name: "IX_Service_VehicleId",
                table: "Service");

            migrationBuilder.DropColumn(
                name: "VehicleId",
                table: "Vehicle");

            migrationBuilder.DropColumn(
                name: "VehicleId",
                table: "Service");

            migrationBuilder.AlterColumn<string>(
                name: "Plate",
                table: "Vehicle",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Vehicle",
                table: "Vehicle",
                column: "Plate");

            migrationBuilder.InsertData(
                table: "Service",
                columns: new[] { "Id", "AssignedWorker", "Client", "State", "Type" },
                values: new object[] { 1, "whatever", "tiago", 0, 1 });
        }
    }
}
