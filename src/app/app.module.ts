import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { AddTaskDialogComponent } from './task-manager/add-task-dialog/add-task-dialog.component';
import { EditTaskDialogComponent } from './task-manager/edit-task-dialog/edit-task-dialog.component';
import { DeleteTaskDialogComponent } from './task-manager/delete-task-dialog/delete-task-dialog.component';
import { ConfirmationTaskDialogComponent } from './task-manager/confirmation-task-dialog/confirmation-task-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShortenPipe } from './shared/shorten.pipe';
import { FilterPipe } from './shared/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    TaskManagerComponent,
    AddTaskDialogComponent,
    EditTaskDialogComponent,
    DeleteTaskDialogComponent,
    ConfirmationTaskDialogComponent,
    ShortenPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
