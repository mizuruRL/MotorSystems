import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceConcludedDialogComponent } from './service-concluded-dialog.component';

describe('ServiceConcludedDialogComponent', () => {
  let component: ServiceConcludedDialogComponent;
  let fixture: ComponentFixture<ServiceConcludedDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceConcludedDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceConcludedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
