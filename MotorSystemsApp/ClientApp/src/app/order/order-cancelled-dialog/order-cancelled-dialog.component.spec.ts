import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCancelledDialogComponent } from './order-cancelled-dialog.component';

describe('OrderCancelledDialogComponent', () => {
  let component: OrderCancelledDialogComponent;
  let fixture: ComponentFixture<OrderCancelledDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderCancelledDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCancelledDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
