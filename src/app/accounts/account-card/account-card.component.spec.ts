import { TestBed } from '@angular/core/testing';
import { AccountCardComponent } from './account-card.component';

describe('CreateAccountComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountCardComponent], // ✅ Standalone components should be imported, not declared
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(AccountCardComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
