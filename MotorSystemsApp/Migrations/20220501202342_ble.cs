using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MotorSystemsApp.Migrations
{
    public partial class ble : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "Address", "BirthDate", "City", "ConcurrencyStamp", "CreatedDate", "DocId", "Email", "EmailConfirmed", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName", "Zip" },
                values: new object[] { "26a24843-b5f4-4487-8fbf-6896167dbf1d", 0, "address", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "city", "a60378b8-3062-469d-9b14-c3b6dc809bce", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 123, "admin@admin.com", true, false, null, "ADMIN@ADMIN.COM", "ADMIN", "AQAAAAEAACcQAAAAEHKdnysX4jGJU5p8J7rWOKwzxel7XTofaAtfv2wfeQZG28JH4Y/byPcdfO72ZtGBog==", "123456789", false, "d44fadd8-6ef2-4aaa-a1fb-a83b5cea645b", false, "admin", "123" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "26a24843-b5f4-4487-8fbf-6896167dbf1d");
        }
    }
}
