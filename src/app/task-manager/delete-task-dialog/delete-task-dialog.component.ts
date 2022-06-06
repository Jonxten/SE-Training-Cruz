import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationTaskDialogComponent } from '../confirmation-task-dialog/confirmation-task-dialog.component';

@Component({
  selector: 'app-delete-task-dialog',
  templateUrl: './delete-task-dialog.component.html',
  styleUrls: ['./delete-task-dialog.component.scss']
})
export class DeleteTaskDialogComponent implements OnInit {

  message!: string;

  constructor(
      @Inject(MAT_DIALOG_DATA) 
      public messageData: any, 
      public dialog: MatDialog 
    ) { }

    ngOnInit(): void {
      this.message = this.messageData;
    }
    
    onDeleteSuccess() {
      this.dialog.open(ConfirmationTaskDialogComponent, {
        width: '20%',
        data: 'Task Deleted Successfully'
      })
    }
    

  }
