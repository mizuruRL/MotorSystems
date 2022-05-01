import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';

import { ServiceRequestComponent } from './service-request.component';

describe('ServiceRequestComponent', () => {
  let component: ServiceRequestComponent;
  let fixture: ComponentFixture<ServiceRequestComponent>;
  let form: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceRequestComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [{ provide: 'BASE_URL', useValue: 'http://localhost' }, { provide: MatDialogRef, useValue: [] }, { provide: MatDialog, useValue: [] }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    form = fixture.nativeElement.querySelector("form");
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should create', () => {
    expect(form).toBeTruthy();
  })

  afterAll(() => {
    TestBed.resetTestingModule();
  });
});
