import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesWorkerComponent } from './services-worker.component';

describe('ServicesWorkerComponent', () => {
  let component: ServicesWorkerComponent;
  let fixture: ComponentFixture<ServicesWorkerComponent>;
  let table: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesWorkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    table = fixture.nativeElement.querySelector("table");
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('table should create', () => {
    expect(table).toBeTruthy();
  })

});
