import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  private add: boolean = false;

  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {
    
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
