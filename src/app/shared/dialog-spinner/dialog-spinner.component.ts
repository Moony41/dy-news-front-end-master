import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogContent } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-spinner',
  templateUrl: './dialog-spinner.component.html',
  styleUrls: ['./dialog-spinner.component.scss'],
})
export class DialogSpinnerComponent {

  @Input() isLoading: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {

  }
}

export interface DialogData {
  title: string,
  message: string,
  isSuccess: boolean
}
