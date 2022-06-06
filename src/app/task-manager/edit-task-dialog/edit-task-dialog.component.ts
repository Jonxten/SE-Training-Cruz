import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationTaskDialogComponent } from '../confirmation-task-dialog/confirmation-task-dialog.component';

@Component({
  selector: 'app-edit-task-dialog',
  templateUrl: './edit-task-dialog.component.html',
  styleUrls: ['./edit-task-dialog.component.scss']
})
export class EditTaskDialogComponent implements OnInit {

  updateTaskForm!: FormGroup;
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.updateTaskForm = new FormGroup({
      taskName: new FormControl(null, Validators.required),
      tags: new FormControl(null, Validators.required),
      taskDescription: new FormControl(null, Validators.required),
      status: new FormControl(null, Validators.required),
      dateModified: new FormControl(null, Validators.required)
    })
  }

  onUpdate() {
    this.dialog.open(ConfirmationTaskDialogComponent, {
      width: '20%',
      data: 'Task updated successfully.',
    });
  }

}
