import { TOTP } from 'otpauth';
import { Token } from './token';

describe('Token', () => {
  it('should create an instance', () => {
    const token = new TOTP();
    expect(new Token(token)).toBeTruthy();
  });
});
