import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationTaskDialogComponent } from './confirmation-task-dialog.component';

describe('ConfirmationTaskDialogComponent', () => {
  let component: ConfirmationTaskDialogComponent;
  let fixture: ComponentFixture<ConfirmationTaskDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationTaskDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationTaskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
