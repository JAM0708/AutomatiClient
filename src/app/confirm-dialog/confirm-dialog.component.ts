import { Component, OnInit, Inject } from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(
    public dialogRef: MdDialogRef<ConfirmDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

    ngOnInit() {
      this.dialogRef.updatePosition({ top: '50', left: '50', right: '50', bottom: '0' });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
