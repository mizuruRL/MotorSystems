import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceConcludedDialogComponent } from './service-concluded-dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('ServiceConcludedDialogComponent', () => {
  let component: ServiceConcludedDialogComponent;
  let fixture: ComponentFixture<ServiceConcludedDialogComponent>;
  let buttons: NodeList;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceConcludedDialogComponent],
      providers: [{
        provide: MatDialogRef,
        useValue: []
      },
        {
          provide: MAT_DIALOG_DATA,
          useValue: []
        } ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceConcludedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    buttons = fixture.nativeElement.querySelectorAll("button");
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('all buttons should create', () => {
    expect(buttons.length == 2).toBeTruthy();
  });

});
