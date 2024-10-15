![Static Badge](https://img.shields.io/badge/version-alpha-blue) ![Static Badge](https://img.shields.io/badge/build-passing-green) ![Static Badge](https://img.shields.io/badge/angular-18-white) ![Static Badge](https://img.shields.io/badge/ionic-7-white) ![Static Badge](https://img.shields.io/badge/nx-monorepo-teal)

# Open Authenticator

Open Authenticator provides the core functionality for the [Auth#Waffle](https://authwaffle.app) multi-factor cross-platform authentication application. All upstream functionality should be commited here.

> All build and release related development is maintained in [Auth#waffle](https://github.com/AuthWaffle/authwaffle) repositories.

This application implements [HOTP](https://datatracker.ietf.org/doc/html/rfc4226) and [TOTP](https://datatracker.ietf.org/doc/html/rfc6238) RFC protocols for multi-factor authentication with [OTPAuth](https://github.com/hectorm/otpauth).

## Contributing

Open Authenticator is an open source community project and the upstream repository for the [Auth#Waffle](https://authwaffle.app) cross-platform application. All core application development is maintained here while build and deployment development is maintained in [Auth#waffle](https://github.com/AuthWaffle/authwaffle) repositories.

### Getttng Started

1. Clone the [`OpenWorkingGroup/open-authenticator`](https://github.com/OpenWorkingGroup/open-authenticator.git) repository
2. Run `npm install` to Install project dependencies
3. Run `npm run start` to start a local development server
4. pull request

### Development Notes

Open Authenticator uses [`@capictor/preferences`](https://capacitorjs.com/docs/apis/preferences?_gl=1*fqyk7c*_gcl_au*MTMzMTQ4NDQwMC4xNzI1NjgwMzAx*_ga*NTMxMTcxMDk3LjE3MjU2ODAzMDE.*_ga_REH9TJF6KF*MTcyODg0NzMxNy4yMi4xLjE3Mjg4NDc5NDEuMC4wLjA.) to store user accounts. Accounts are searialized and desearialized from local storage as they are added or modified using [URI](https://hectorm.github.io/otpauth/classes/URI.html) class methods in the [OTPAuth](https://github.com/hectorm/otpauth) package to instantiate HOTP and TOTP objects.

#### Kit

- [ ] [Angular 18](https://angular.dev) - TypeScript MVC framework
- [ ] [Ionic 8](https://github.com/ionic-team/ionic-framework/releases/v8.0.0) - Mobile component & design system
- [ ] [Capacitor 6](https://capacitorjs.com/docs) - Device API
- [ ] [Karma 6](https://angular.dev/guide/testing) - Testing framework

**Packages**

- [otpauth](https://github.com/hectorm/otpauth) - OTP/TOTP
- [NgxDropzone](https://www.npmjs.com/package/ngx-dropzone) - Drag-and-drop
- [qr-scanner](https://github.com/nimiq/qr-scanner), [Demo](https://nimiq.github.io/qr-scanner/demo/)

**Referece**

- [Google Authenticator Key](https://github.com/google/google-authenticator/wiki/Key-Uri-Format)

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
