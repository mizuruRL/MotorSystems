﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MotorSystemsApp.Migrations
{
    public partial class t : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "26a24843-b5f4-4487-8fbf-6896167dbf1d");

            migrationBuilder.DropColumn(
                name: "Username",
                table: "Worker");

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "Address", "BirthDate", "City", "ConcurrencyStamp", "CreatedDate", "DocId", "Email", "EmailConfirmed", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName", "Zip" },
                values: new object[] { "1", 0, "address", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "city", "17d5276f-6d7a-436e-a7bd-60ddd3cf3936", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 123, "admin@admin.com", true, false, null, "ADMIN@ADMIN.COM", "ADMIN", "AQAAAAEAACcQAAAAEMJcRLMW35s4tGgr6ZlrEg2HVq5rGBnotcRlKSJUYvTETSO5u+A1wQ4OqUn9vcTsMw==", "123456789", false, "b9f16eb1-f5a3-4694-80e0-ac5eeaf423ff", false, "admin", "123" });

            migrationBuilder.InsertData(
                table: "Worker",
                columns: new[] { "Id", "ContractEndDate", "IsAdmin", "JobTitle", "Salary" },
                values: new object[] { "1", null, true, null, null });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1");

            migrationBuilder.DeleteData(
                table: "Worker",
                keyColumn: "Id",
                keyValue: "1");

            migrationBuilder.AddColumn<string>(
                name: "Username",
                table: "Worker",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "Address", "BirthDate", "City", "ConcurrencyStamp", "CreatedDate", "DocId", "Email", "EmailConfirmed", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName", "Zip" },
                values: new object[] { "26a24843-b5f4-4487-8fbf-6896167dbf1d", 0, "address", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "city", "a60378b8-3062-469d-9b14-c3b6dc809bce", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 123, "admin@admin.com", true, false, null, "ADMIN@ADMIN.COM", "ADMIN", "AQAAAAEAACcQAAAAEHKdnysX4jGJU5p8J7rWOKwzxel7XTofaAtfv2wfeQZG28JH4Y/byPcdfO72ZtGBog==", "123456789", false, "d44fadd8-6ef2-4aaa-a1fb-a83b5cea645b", false, "admin", "123" });
        }
    }
}