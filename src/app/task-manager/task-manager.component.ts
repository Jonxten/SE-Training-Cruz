import { Component, Injectable, OnInit, NgModule } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddTaskDialogComponent } from './add-task-dialog/add-task-dialog.component';
import { DeleteTaskDialogComponent } from './delete-task-dialog/delete-task-dialog.component';
import { EditTaskDialogComponent } from './edit-task-dialog/edit-task-dialog.component';
import {Subject} from 'rxjs';

export interface Tasks {
  taskName: string;
  taskDescription: string;
  tags: string;
  status: string;
  dateCreated: string;
  dateModified: string;
  dateCompleted: string;
}

const TASK_DATA: Tasks[] = [
  {taskName: 'Learn Angular', 
  taskDescription: '- Watch Angular Materials - Output basic print' , 
  tags: 'Programming', 
  status: 'Ongoing', 
  dateCreated: new Date("06-01-2022").toDateString(),
  dateModified: '', 
  dateCompleted: ''},

  {taskName: 'Bake Buns', 
  taskDescription: '- (.25 ounce) package active - 2 cups flour', 
  tags: 'Cooking', 
  status: 'New', 
  dateCreated: new Date("05-25-2022").toDateString(),
  dateModified: '', 
  dateCompleted: ''},

  {taskName: 'Learn C++', 
  taskDescription: '- Watch C++ Materials - Output basic print', 
  tags: 'Programming', 
  status: 'Completed', 
  dateCreated: new Date("04-26-2020").toDateString(),
  dateModified: '', 
  dateCompleted: new Date("04-30-2020").toDateString()},

  {taskName: 'BAI Training', 
  taskDescription: '- Learn C# - Learn SQL - Output basic print', 
  tags: 'Programming, Work', 
  status: 'Ongoing', 
  dateCreated: new Date("05-30-2022").toDateString(),
  dateModified: new Date("05-31-2022").toDateString(), 
  dateCompleted: ''},
  
  {taskName: 'Learn CSS', 
  taskDescription: '- Watch CSS Materials - Output basic print', 
  tags: 'Programming', 
  status: 'Completed', 
  dateCreated: new Date("07-12-2022").toDateString(),
  dateModified: '', 
  dateCompleted: new Date("07-19-2022").toDateString()}
]

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})

@Injectable()

export class TaskManagerComponent implements OnInit {
  changes = new Subject<void>();
  
  constructor(
    public dialog: MatDialog
  ) { }

  displayedColumns: string[] = [
    'taskName',
    'tags',
    'taskDescription',
    'status',
    'dateCreated',
    'dateModified',
    'dateCompleted',
    'action'
  ];

  searchTask = '';
  // dataSource = new MatTableDataSource<Tasks>(TASK_DATA);
  dataSource = [...TASK_DATA];
  
  addDialog() {
    this.dialog.open(AddTaskDialogComponent, {
      width: '45%'
    });
  }

  updateDialog() {
    this.dialog.open(EditTaskDialogComponent, {
      width: '45%',
    });
  }

  deleteDialog() {
    this.dialog.open(DeleteTaskDialogComponent, {
      width: '25%',
    }); 
  }
  

  ngOnInit(): void {
    // this.dataSource = new MatTableDataSource<Task>(this.TASK_DATA);
    // this.loading = true;
    // this.studentService.getStudents(this.postsPerPage, this.currentPage);
    // this.studentService.studentChanged.subscribe((studData) => {
    // // this.ELEMENT_DATA = studData.students;
    // this.totalPosts = studData.postCount;
    // this.dataSource = new MatTableDataSource<InstructorExemptions>(this.ELEMENT_DATA);
    // this.loading = false;
    // });
  }

  

}



