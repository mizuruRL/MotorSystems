import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';

import { OrderDeliveredDialogComponent } from './order-delivered-dialog.component';

describe('OrderDeliveredDialogComponent', () => {
  let component: OrderDeliveredDialogComponent;
  let fixture: ComponentFixture<OrderDeliveredDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderDeliveredDialogComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule, MatButtonModule, MatDialogModule],
      providers: [{ provide: 'BASE_URL', useValue: 'http://localhost' }, { provide: MatDialogRef, useValue: [] }, { provide: MAT_DIALOG_DATA, useValue: [] }]
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
