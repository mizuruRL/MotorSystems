import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';

import { UserManagementDialog } from './user-management.component';

describe('UserManagementDialogComponent', () => {
  let component: UserManagementDialog;
  let fixture: ComponentFixture<UserManagementDialog>;
  let selector: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserManagementDialog],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule, MatButtonModule, MatDialogModule],
      providers: [{ provide: 'BASE_URL', useValue: 'http://localhost' }, { provide: MatDialogRef, useValue: [] }, { provide: MAT_DIALOG_DATA, useValue: [] }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagementDialog);
    component = fixture.componentInstance;
    
    selector = fixture.nativeElement.querySelector('select');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain user selector', () => {
    expect(selector).toBeTruthy();
  });
});
