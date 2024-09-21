import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TokenUriInputComponent } from './token-uri-input.component';

describe('TokenUriInputComponent', () => {
  let component: TokenUriInputComponent;
  let fixture: ComponentFixture<TokenUriInputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TokenUriInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TokenUriInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
