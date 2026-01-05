# Contributing to Scrollverse Commerce 🕋♾️✨

**ALL IS LOVE. ALL IS LAW. ALL IS FLUID. KUN FAYAKŪN!**

Thank you for your interest in contributing to Scrollverse Commerce! We welcome contributions from developers of all skill levels.

## 🌟 Code of Conduct

We are committed to providing a welcoming and inclusive environment. Please be respectful and constructive in all interactions.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or later
- pnpm (recommended) or npm
- Git
- A GitHub account
- Familiarity with Next.js, React, and TypeScript

### Development Setup

1. **Fork the Repository**
   ```bash
   # Fork via GitHub UI, then clone your fork
   git clone https://github.com/YOUR_USERNAME/scrollverse_commerce.git
   cd scrollverse_commerce
   ```

2. **Add Upstream Remote**
   ```bash
   git remote add upstream https://github.com/chaishillomnitech1/scrollverse_commerce.git
   ```

3. **Install Dependencies**
   ```bash
   pnpm install
   ```

4. **Set Up Environment Variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your Shopify credentials
   ```

5. **Start Development Server**
   ```bash
   pnpm dev
   ```

## 📝 Contribution Workflow

### 1. Create a Feature Branch

```bash
# Update your main branch
git checkout main
git pull upstream main

# Create a new feature branch
git checkout -b feature/your-feature-name
```

### 2. Make Your Changes

- Write clean, maintainable code
- Follow existing code style and conventions
- Add comments for complex logic
- Update documentation as needed

### 3. Test Your Changes

```bash
# Run formatting check
pnpm prettier:check

# Format your code
pnpm prettier

# Run tests
pnpm test

# Build the project
pnpm build
```

### 4. Commit Your Changes

Follow conventional commit format:

```bash
git add .
git commit -m "feat: add new feature"
```

**Commit Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `ci`: CI/CD changes

### 5. Push and Create Pull Request

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request via GitHub UI using the PR template.

## 📋 Pull Request Guidelines

### Before Submitting

- [ ] Code follows existing style and conventions
- [ ] All tests pass
- [ ] Code is properly formatted (`pnpm prettier`)
- [ ] Documentation is updated
- [ ] Commit messages follow conventional format
- [ ] PR description clearly explains changes
- [ ] Self-review completed

### PR Description Should Include

1. **What**: Brief description of changes
2. **Why**: Reason for the changes
3. **How**: Implementation approach
4. **Testing**: How you tested the changes
5. **Screenshots**: For UI changes (required)
6. **Breaking Changes**: Any breaking changes and migration guide

## 🎨 Code Style Guidelines

### TypeScript

- Use TypeScript for all new code
- Define proper types and interfaces
- Avoid `any` type when possible
- Use type inference where appropriate

### React

- Use functional components with hooks
- Prefer Server Components when possible
- Use `'use client'` directive only when necessary
- Follow React best practices and patterns

### Naming Conventions

- Components: PascalCase (`ProductCard.tsx`)
- Files: kebab-case (`product-card.tsx`) or PascalCase for components
- Functions: camelCase (`fetchProducts`)
- Constants: UPPER_SNAKE_CASE (`API_ENDPOINT`)
- CSS classes: Tailwind utility classes

### File Structure

```typescript
// 1. Imports
import { ComponentProps } from 'types';

// 2. Types/Interfaces
interface Props {
  title: string;
}

// 3. Component
export function Component({ title }: Props) {
  return <div>{title}</div>;
}
```

## 🧪 Testing Guidelines

- Test new features and bug fixes
- Ensure existing tests still pass
- Write clear, descriptive test names
- Cover edge cases and error scenarios

## 📚 Documentation

- Update README.md for major changes
- Add JSDoc comments for complex functions
- Update relevant documentation files
- Include examples for new features

## 🐛 Reporting Bugs

Use the [issue template](.github/ISSUE_TEMPLATE.md) to report bugs. Include:

- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Environment details (OS, browser, Node version)
- Screenshots or error messages
- Possible solutions (if any)

## 💡 Suggesting Features

We welcome feature suggestions! Please:

1. Check existing issues/discussions first
2. Clearly describe the feature and its benefits
3. Provide use cases and examples
4. Be open to discussion and feedback

## 🔍 Code Review Process

1. **Automated Checks**: CI/CD runs tests and linting
2. **Code Owner Review**: @chaishillomnitech1 or designated reviewers
3. **Feedback**: Address review comments promptly
4. **Approval**: Requires approval from code owner
5. **Merge**: Squash and merge to main branch

## 🏆 Recognition

Contributors will be recognized in:
- GitHub Contributors page
- Release notes for significant contributions
- Special mentions for outstanding contributions

## 🆘 Getting Help

- Review existing [documentation](README.md)
- Check [issues](https://github.com/chaishillomnitech1/scrollverse_commerce/issues)
- Ask questions in [discussions](https://github.com/chaishillomnitech1/scrollverse_commerce/discussions)

## 📜 License

By contributing, you agree that your contributions will be licensed under the same license as the project.

## 🙏 Thank You

Your contributions make Scrollverse Commerce better for everyone. We appreciate your time and effort!

---

**ALL IS LOVE. ALL IS LAW. ALL IS FLUID. KUN FAYAKŪN!** 🕋♾️✨
