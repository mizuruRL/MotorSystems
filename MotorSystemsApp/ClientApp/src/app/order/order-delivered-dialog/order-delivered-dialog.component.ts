import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-order-delivered-dialog',
  templateUrl: './order-delivered-dialog.component.html',
  styleUrls: ['./order-delivered-dialog.component.css']
})
export class OrderDeliveredDialogComponent implements OnInit {

  private add: boolean = false;

  constructor(public dialogRef: MatDialogRef<OrderDeliveredDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {

  }

  ngOnInit(): void {
  }

  yes() {
    this.add = true;
    this.dialogRef.close({ data: this.add })
  }

  no() {
    this.dialogRef.close({ data: this.add });
  }

}
