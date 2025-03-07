import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountsPage } from './accounts.page';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('AccountsPage', () => {
  let component: AccountsPage;
  let fixture: ComponentFixture<AccountsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountsPage], // ✅ Ensure standalone components are in `imports`
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: of({}) }, // ✅ Mock ActivatedRoute if needed
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsPage);
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
