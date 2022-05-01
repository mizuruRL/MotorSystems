import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerMenuComponent } from './worker-menu.component';

describe('WorkerMenuComponent', () => {
  let component: WorkerMenuComponent;
  let fixture: ComponentFixture<WorkerMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
