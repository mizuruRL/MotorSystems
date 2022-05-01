import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';

import { WorkerService } from './worker.service';

describe('WorkerService', () => {
  let service: WorkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule, MatButtonModule, MatDialogModule],
      providers: [{ provide: 'BASE_URL', useValue: 'http://localhost' }]});
    service = TestBed.inject(WorkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
