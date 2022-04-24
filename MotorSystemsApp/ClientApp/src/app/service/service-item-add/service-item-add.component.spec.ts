import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceItemAddComponent } from './service-item-add.component';

describe('ServiceItemAddComponent', () => {
  let component: ServiceItemAddComponent;
  let fixture: ComponentFixture<ServiceItemAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceItemAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceItemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
