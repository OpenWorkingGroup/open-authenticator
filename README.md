![Static Badge](https://img.shields.io/badge/version-alpha-blue) ![Static Badge](https://img.shields.io/badge/build-passing-green)

# Open Authenticator

Open Authenticator is an open source no-frills, purpose built multi-factor authentication application and the core upstream communitiy project for the [Auth#Waffle](https://authwaffle.app) cross-platform MFA application.

> All build and release related development is maintained in [Auth#waffle](https://github.com/AuthWaffle/authwaffle) repositories.

## Features

- Implements [HOTP](https://datatracker.ietf.org/doc/html/rfc4226) and [TOTP](https://datatracker.ietf.org/doc/html/rfc6238) protocols for multi-factor authentication with [OTPAuth](https://github.com/hectorm/otpauth).
- Secure storage via native device interfaces. ([Read more about security.]())
- Simple search and token management.

## Contributing

Please read the [Code of Conduct]() and [Contributors Guide]() before submitting a pull request.

## Quick Start

1. Fork the repository.
2. Clone your fork:

   ```sh
   git clone git clone https://github.com/your-username/project-name.git
   ```

3. Install dependencies:

   ```sh
   pnpm install
   ```

4. Run the project:

   ```sh
   pnpm start
   ```

### Development Notes

Open Authenticator uses [`@capictor/preferences`](https://capacitorjs.com/docs/apis/preferences?_gl=1*fqyk7c*_gcl_au*MTMzMTQ4NDQwMC4xNzI1NjgwMzAx*_ga*NTMxMTcxMDk3LjE3MjU2ODAzMDE.*_ga_REH9TJF6KF*MTcyODg0NzMxNy4yMi4xLjE3Mjg4NDc5NDEuMC4wLjA.) to store user accounts in [Google Authenticator Key](https://github.com/google/google-authenticator/wiki/Key-Uri-Format) format. Accounts are searialized and desearialized from local storage as they are added or modified using the [URI](https://hectorm.github.io/otpauth/classes/URI.html) class method in the [OTPAuth](https://github.com/hectorm/otpauth) package to instantiate HOTP and TOTP objects.

**Credits**

- [qr-scanner](https://github.com/nimiq/qr-scanner), [Demo](https://nimiq.github.io/qr-scanner/demo/)

#### Google Authenticator URI Regex Pattern

This regex pattern ensures that all the components of the TOTP URI are present and valid according to the expected format. You can adjust the pattern if there are any specific variations you need to account for. [RegExp Editor](https://regex101.com/r/2lViJA/1)

**Explanation:**

- `^otpauth:\/\/totp\/`: Ensures the URI starts with `otpauth://totp/`.
- `([A-Za-z0-9%]+)`: Matches the label part of the URI which can contain alphanumeric characters and percent-encoded characters.
- `(\?issuer=[A-Za-z0-9%]+&secret=[A-Z2-7]+=*&algorithm=(SHA1|SHA256|SHA512)&digits=\d{6}&period=\d{2})?$`: Matches the query parameters:
  - `\?issuer=[A-Za-z0-9%]+`: Matches the `issuer` parameter with alphanumeric and percent-encoded characters.
  - `&secret=[A-Z2-7]+=*`: Matches the `secret` parameter which contains base32 encoded string (letters A-Z and digits 2-7).
  - `&algorithm=(SHA1|SHA256|SHA512)`: Matches the `algorithm` parameter which can be SHA1, SHA256, or SHA512.
  - `&digits=\d{6}`: Matches the `digits` parameter which should be 6 digits.
  - `&period=\d{2}`: Matches the `period` parameter which should be 2 digits.
