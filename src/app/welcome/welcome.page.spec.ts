import { TestBed, ComponentFixture } from '@angular/core/testing';
import { WelcomePage } from './welcome.page';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('WelcomePage', () => {
  let component: WelcomePage;
  let fixture: ComponentFixture<WelcomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomePage],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: of({}) }
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomePage);
    component = fixture.componentInstance;

    if (!component) {
      throw new Error('Component instance is undefined!'); // Debugging check
    }

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
