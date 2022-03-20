﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MotorSystemsApp.Data.Migrations
{
    public partial class datetest : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "ProductNeeded",
                columns: new[] { "Id", "NeededForDate", "ProductId", "QuantityNeeded" },
                values: new object[] { 3, new DateTime(2022, 3, 21, 0, 0, 0, 0, DateTimeKind.Unspecified), 1, 4 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "ProductNeeded",
                keyColumn: "Id",
                keyValue: 3);
        }
    }
}
