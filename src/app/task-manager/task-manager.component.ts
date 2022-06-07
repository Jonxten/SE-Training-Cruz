import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { AddTaskDialogComponent } from './add-task-dialog/add-task-dialog.component';
import { DeleteTaskDialogComponent } from './delete-task-dialog/delete-task-dialog.component';
import { EditTaskDialogComponent } from './edit-task-dialog/edit-task-dialog.component';
import { Subject } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

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
  dateCompleted: new Date("07-19-2022").toDateString()},

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

  totalPosts = 0;
  postsPerPage = 5;
  currentPage = 1;
  pageSizeOptions = [5,10,15];
  
  searchTask = '';

  dataSource = new MatTableDataSource<Tasks>(TASK_DATA);
  // dataSource = [...TASK_DATA];
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
  }

  onChangedPage(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.postsPerPage = pageData.pageSize;
  }

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
  

  

  

}



