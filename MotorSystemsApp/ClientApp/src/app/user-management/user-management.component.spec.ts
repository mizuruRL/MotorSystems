import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementComponent } from './user-management.component';

describe('UserManagementComponent', () => {
  let component: UserManagementComponent;
  let fixture: ComponentFixture<UserManagementComponent>;
  let workerBtn: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    workerBtn = fixture.nativeElement.querySelector("#workerbtn");
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('worker add button should create', () => {
    expect(workerBtn).toBeTruthy();
  })
});
