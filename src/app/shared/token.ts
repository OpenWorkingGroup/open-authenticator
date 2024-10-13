import { HOTP, Secret, TOTP } from 'otpauth';

/**
 * TODO: Explain this model.
 */
export class Token extends TOTP {
  /**
   * The Token object is an overlay to the
   * OTPAuth.TOTP and OTPAuth.HOTP classes providing
   * functional accessors and modifiers.
   *
   * Initialize token with TOTP defaults.
   * Override defaults by passing values as `token`.
   * @param token
   */
  constructor(token: HOTP | TOTP) {
    super();

    // Intialize OTP secret object.
    token.secret = new Secret(token.secret);

    // Initialize token with OTP defaults.
    Object.assign(this, token);
  }

  /**
   * Nullify serverside functionality for token
   * validation.
   *
   * @returns null
   */
  override validate = () => null;
}
