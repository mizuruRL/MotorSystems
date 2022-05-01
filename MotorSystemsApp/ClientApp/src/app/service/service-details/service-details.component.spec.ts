import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { ServiceDetailsComponent } from './service-details.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";


describe('ServiceDetailsComponent', () => {
  let component: ServiceDetailsComponent;
  let fixture: ComponentFixture<ServiceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceDetailsComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [{ provide: 'BASE_URL', useValue: 'http://localhost' }, { provide: MatDialogRef, useValue: [] }, { provide: MatDialog, useValue: [] }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
