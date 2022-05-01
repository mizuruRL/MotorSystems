import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDetailsComponent } from './service-details.component';

describe('ServiceDetailsComponent', () => {
  let component: ServiceDetailsComponent;
  let fixture: ComponentFixture<ServiceDetailsComponent>;
  let table: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    table = fixture.nativeElement.querySelector("table");
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('service detail table should create', () => {
    expect(table).toBeTruthy();
  })
});
