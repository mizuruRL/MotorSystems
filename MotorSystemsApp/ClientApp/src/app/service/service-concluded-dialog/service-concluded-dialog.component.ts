import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-service-concluded-dialog',
  templateUrl: './service-concluded-dialog.component.html',
  styleUrls: ['./service-concluded-dialog.component.css']
})
export class ServiceConcludedDialogComponent implements OnInit {

  private remove: boolean = false;

  constructor(public dialogRef: MatDialogRef<ServiceConcludedDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {

  }

  ngOnInit(): void {
  }

  yes() {
    this.remove = true;
    this.dialogRef.close({ data: this.remove })
  }

  no() {
    this.dialogRef.close({ data: this.remove });
  }

}
