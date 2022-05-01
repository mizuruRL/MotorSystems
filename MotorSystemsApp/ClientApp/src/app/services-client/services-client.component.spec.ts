import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesClientComponent } from './services-client.component';

describe('ServicesClientComponent', () => {
  let component: ServicesClientComponent;
  let fixture: ComponentFixture<ServicesClientComponent>;
  let table: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    table = fixture.nativeElement.querySelector("table");
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('client service table should create', () => {
    expect(table).toBeTruthy();
  })
});
