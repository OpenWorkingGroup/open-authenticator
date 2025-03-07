import { TestBed } from '@angular/core/testing';
import { RedirectCommand, ResolveFn } from '@angular/router';

import { accountResolver } from './account.resolver';

describe('accountResolver', () => {
  const executeResolver: ResolveFn<boolean | RedirectCommand> = (
    ...resolverParameters
  ) =>
    TestBed.runInInjectionContext(
      () => accountResolver(...resolverParameters) as boolean | RedirectCommand
    );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
