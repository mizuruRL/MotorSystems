import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { ServiceItemAddComponent } from './service-item-add.component';

describe('ServiceItemAddComponent', () => {
  let component: ServiceItemAddComponent;
  let fixture: ComponentFixture<ServiceItemAddComponent>;
  let addToServiceBtn: HTMLElement;
  let forms: NodeList;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceItemAddComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule],
      providers: [{ provide: 'BASE_URL', useValue: 'http://localhost' }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceItemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    addToServiceBtn = fixture.nativeElement.querySelector("#addtoservice");
    forms = fixture.nativeElement.querySelectorAll("form");
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('button should be disabled', () => {
    expect((addToServiceBtn as HTMLButtonElement).disabled).toBeTruthy();
  })

  it('all forms should be created', () => {
    expect(forms.length == 2).toBeTruthy();
  })
});
