import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-task-dialog',
  templateUrl: './confirmation-task-dialog.component.html',
  styleUrls: ['./confirmation-task-dialog.component.scss']
})
export class ConfirmationTaskDialogComponent implements OnInit {

  message!: string;

  constructor(@Inject(MAT_DIALOG_DATA) public messageData: any) { }

  ngOnInit(): void {
    this.message = this.messageData;
  }

}
