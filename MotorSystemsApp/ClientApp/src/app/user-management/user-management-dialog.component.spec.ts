import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementDialog } from './user-management.component';

describe('UserManagementComponent', () => {
  let component: UserManagementDialog;
  let fixture: ComponentFixture<UserManagementDialog>;
  let selector: HTMLElement;
  let promoteBtn: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserManagementDialog ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagementDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
    selector = fixture.nativeElement.querySelector('select');
    promoteBtn = fixture.nativeElement.querySelector('#promote');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain user selector', () => {
    expect(selector).toBeTruthy();
  });

  it('promote button should be disabled', () => {
    expect((promoteBtn as HTMLButtonElement).disabled).toBeTruthy();
  });
});
