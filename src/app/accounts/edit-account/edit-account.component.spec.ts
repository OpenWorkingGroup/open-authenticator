import { TestBed, ComponentFixture } from '@angular/core/testing';
import { EditAccountComponent } from './edit-account.component';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UiService } from 'src/app/shared/services/ui.service';
import { AccountService } from 'src/app/shared/services/account.service';
import { Token } from 'src/app/shared/token';
import { TOTP, HOTP } from 'otpauth';
import { ReactiveFormsModule, NonNullableFormBuilder } from '@angular/forms';
import { signal } from '@angular/core';

describe('EditAccountComponent', () => {
  let component: EditAccountComponent;
  let fixture: ComponentFixture<EditAccountComponent>;

  const mockNavController = jasmine.createSpyObj('NavController', ['back']);
  const mockUiService = jasmine.createSpyObj('UiService', ['confirm']);
  const mockAccounts = {
    accounts: signal<Token[]>([
      new Token(<HOTP | TOTP>{ issuer: 'MockIssuer', label: 'MockLabel' })
    ])
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditAccountComponent, ReactiveFormsModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: { id: '0' }
            }
          }
        },
        { provide: NavController, useValue: mockNavController },
        { provide: UiService, useValue: mockUiService },
        { provide: AccountService, useValue: mockAccounts },
        { provide: NonNullableFormBuilder, useClass: NonNullableFormBuilder }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAccountComponent);
    component = fixture.componentInstance;
    component.id = 0;
    component.account.set(mockAccounts.accounts()[component.id]);

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with correct account data', () => {
    expect(component.id).toBe(0);
    expect(component.account().issuer).toBe('MockIssuer');
    expect(component.account().label).toBe('MockLabel');
    expect(component.form.value).toEqual({
      issuer: 'MockIssuer',
      label: 'MockLabel'
    });
  });

  it('should update the account when the form changes', () => {
    component.form.controls['issuer'].setValue('UpdatedIssuer');
    component.form.controls['label'].setValue('UpdatedLabel');

    fixture.detectChanges();

    expect(component.account().issuer).toBe('UpdatedIssuer');
    expect(component.account().label).toBe('UpdatedLabel');
  });

  it('should navigate back when saving a valid form', () => {
    component.save();
    expect(mockNavController.back).toHaveBeenCalled();
  });

  it('should navigate back when canceling a form with no changes', async () => {
    await component.cancel();
    expect(mockNavController.back).toHaveBeenCalled();
  });

  it('should prompt confirmation when canceling a dirty form', async () => {
    mockUiService.confirm.and.returnValue(Promise.resolve(true)); // Simulate user confirming

    component.form.controls['issuer'].setValue('ChangedIssuer');
    component.form.markAsDirty(); // Ensure the form is marked dirty

    await component.cancel();

    expect(mockUiService.confirm).toHaveBeenCalled();
    expect(mockNavController.back).toHaveBeenCalled();
  });
});
