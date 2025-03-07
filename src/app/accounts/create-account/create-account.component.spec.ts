import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CreateAccountComponent } from './create-account.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('CreateAccountComponent', () => {
  let component: CreateAccountComponent;
  let fixture: ComponentFixture<CreateAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAccountComponent], // ✅ Ensure standalone components are in `imports`
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: of({}) }, // ✅ Mock `ActivatedRoute`
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountComponent);
    component = fixture.componentInstance;

    if (!component) {
      throw new Error('Component instance is undefined!'); // ✅ Debugging check
    }

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
