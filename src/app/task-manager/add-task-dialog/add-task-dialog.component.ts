import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationTaskDialogComponent } from '../confirmation-task-dialog/confirmation-task-dialog.component';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.scss']
})
export class AddTaskDialogComponent implements OnInit {
  
  addTaskForm!: FormGroup;
  constructor(
    public dialog: MatDialog,
    // @Inject(MAT_DIALOG_DATA) public addData: any,
  ) { }

  ngOnInit(): void {
    this.addTaskForm = new FormGroup({
      taskName: new FormControl(null, Validators.required),
      dateCreated: new FormControl(null, Validators.required),
      taskDescription: new FormControl(null, Validators.required),
      tags: new FormControl(null, Validators.required),
      tagSettings: new FormControl(null, Validators.required),
      // status: new FormControl(null, Validators.required),
      dateSettings: new FormControl(null, Validators.required)
    });
  }

  onAdd() {
    this.dialog.open(ConfirmationTaskDialogComponent, {
      width: '20%',
      data: 'Task added successfully.',
    });
  }
}

