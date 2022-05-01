using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MotorSystemsApp.Migrations
{
    public partial class to : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Username",
                table: "Worker",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "7736ae25-aaba-42a7-a888-0bcfc0ddd7a1", "AQAAAAEAACcQAAAAEHG5+r5yhdLwReN2ZMQqDadr8EMb2CCChCO9uWNJHVRjmmsTznpb4vWa7ktgemoskg==", "40bb12bf-1b71-4cc6-9ccf-750072204195" });

            migrationBuilder.UpdateData(
                table: "Worker",
                keyColumn: "Id",
                keyValue: "1",
                column: "Username",
                value: "admin");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Username",
                table: "Worker");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "17d5276f-6d7a-436e-a7bd-60ddd3cf3936", "AQAAAAEAACcQAAAAEMJcRLMW35s4tGgr6ZlrEg2HVq5rGBnotcRlKSJUYvTETSO5u+A1wQ4OqUn9vcTsMw==", "b9f16eb1-f5a3-4694-80e0-ac5eeaf423ff" });
        }
    }
}
