import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-order-cancelled-dialog',
  templateUrl: './order-cancelled-dialog.component.html',
  styleUrls: ['./order-cancelled-dialog.component.css']
})
export class OrderCancelledDialogComponent implements OnInit {

  private cancel: boolean = false;

  constructor(public dialogRef: MatDialogRef<OrderCancelledDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {

  }

  ngOnInit(): void {
  }

  yes() {
    this.cancel = true;
    this.dialogRef.close({ data: this.cancel })
  }

  no() {
    this.dialogRef.close({ data: this.cancel });
  }

}
