import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDeliveredDialogComponent } from './order-delivered-dialog.component';

describe('OrderDeliveredDialogComponent', () => {
  let component: OrderDeliveredDialogComponent;
  let fixture: ComponentFixture<OrderDeliveredDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDeliveredDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDeliveredDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
