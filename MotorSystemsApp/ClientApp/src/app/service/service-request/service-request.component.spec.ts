import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRequestComponent } from './service-request.component';

describe('ServiceRequestComponent', () => {
  let component: ServiceRequestComponent;
  let fixture: ComponentFixture<ServiceRequestComponent>;
  let form: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceRequestComponent ]
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
});
