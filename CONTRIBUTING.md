# Contributing to Open Authententicator

Thank you for your interest in contributing to the Open Authenticator project! We welcome all contributions, whether fixing bugs, adding new features, or improving documentation.

**How do you want to contribute?**

- [Core functionality](#getting-started-with-core-functionality)
- Documentation
- Release management

> For any release management related contributions refer to the [Auth#Waffle](https://github.com/AuthWaffle/authwaffle) documentation.

## Getting Started with Core Functionality

The Open Working Group uses [pNpM](https://pnpm.io) for efficient package management and [Visual Studio Code](https://code.visualstudio.com) with the [Ionic extension](https://marketplace.visualstudio.com/items?itemName=ionic.ionic) installed and enabled.

**Setup your development environment:**

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

### Contribution Workflow

1. Start your feature or patch branch:

   ```sh
   git checkout -b feature/your-feature
   ```

2. Make your changes and commit them:

   ```sh
   git commit -m "feat: add new feature"
   ```

3. Push to your fork and create a PR:

   ```sh
   git push origin feature/your-feature
   ```

4. Submit a Pull Request on GitHub and follow the PR template.

**Coding Guidelines**

- Use TypeScript for all files.
- Follow the project’s ESLint and Prettier rules.
- Provide documenation (see [Getting Started with Documentation]().)
- Run the following before committing:

```sh
pnpm lint
pnpm format
```

**Testing**

All contributions should include tests. Run tests with:

```sh
pnpm test
```

**Reporting Issues**

- Check [existing issues](https://github.com/OpenWorkingGroup/open-authenticator/issues) before opening a new one.
- Use clear, descriptive titles and provide steps to reproduce.
- Label issues accordingly (e.g., bug, enhancement).

**Feature Requests**

- Open an issue with the feature label.
- Provide details about the use case and benefits.

### Code of Conduct

Please follow our [Code of Conduct](/CODE_OF_CONDUCT.md) when interacting with the community.

### License

This project is licensed under the [MIT License](/LICENSE.md).
