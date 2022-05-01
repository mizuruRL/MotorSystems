import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';

import { OrderCancelledDialogComponent } from './order-cancelled-dialog.component';

describe('OrderCancelledDialogComponent', () => {
  let component: OrderCancelledDialogComponent;
  let fixture: ComponentFixture<OrderCancelledDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderCancelledDialogComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule, MatButtonModule, MatDialogModule],
      providers: [{ provide: 'BASE_URL', useValue: 'http://localhost' }, { provide: MatDialogRef, useValue: [] }, { provide: MAT_DIALOG_DATA, useValue: [] }]
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
