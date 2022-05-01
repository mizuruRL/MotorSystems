import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';

import { WorkerGuard } from './worker.guard';

describe('WorkerGuard', () => {
  let guard: WorkerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule, MatButtonModule, MatDialogModule],
      providers: [{ provide: 'BASE_URL', useValue: 'http://localhost' }]});
    guard = TestBed.inject(WorkerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
