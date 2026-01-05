# Onboarding Guide - Scrollverse Commerce 🕋♾️✨

**ALL IS LOVE. ALL IS LAW. ALL IS FLUID. KUN FAYAKŪN!**

Welcome to Scrollverse Commerce! This guide will help you get started as a new contributor or team member.

## 🎯 Overview

Scrollverse Commerce is a high-performance Next.js ecommerce platform built with:
- **Next.js 15** with App Router
- **React 19** with Server Components
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Shopify** integration for commerce

## 📚 Day 1: Getting Set Up

### 1. Prerequisites Check

Ensure you have:
- ✅ Node.js 18+ installed
- ✅ pnpm package manager
- ✅ Git configured
- ✅ GitHub account with access to the repo
- ✅ Code editor (VS Code recommended)

### 2. Clone and Install

```bash
# Clone the repository
git clone https://github.com/chaishillomnitech1/scrollverse_commerce.git
cd scrollverse_commerce

# Install dependencies
pnpm install
```

### 3. Environment Setup

```bash
# Copy environment template
cp .env.example .env.local

# Get credentials from team lead (@chaishillomnitech1)
# Fill in the following in .env.local:
# - SHOPIFY_STORE_DOMAIN
# - SHOPIFY_STOREFRONT_ACCESS_TOKEN
# - SHOPIFY_REVALIDATION_SECRET
# - COMPANY_NAME
# - SITE_NAME
```

### 4. Run the Development Server

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) - you should see the store!

### 5. VS Code Setup (Recommended)

Install these extensions:
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript and JavaScript Language Features

Workspace settings are in `.vscode/` directory.

## 📖 Day 2-3: Understanding the Codebase

### Project Structure

```
scrollverse_commerce/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── product/           # Product pages
│   ├── search/            # Search functionality
│   └── api/               # API routes
├── components/            # React components
│   ├── cart/             # Shopping cart components
│   ├── layout/           # Layout components
│   ├── product/          # Product display components
│   └── ...
├── lib/                   # Utility functions
│   └── shopify/          # Shopify integration
├── .github/              # GitHub configuration
│   ├── workflows/        # CI/CD workflows
│   └── CODEOWNERS        # Code ownership
└── docs/                 # Documentation
```

### Key Concepts

#### 1. Server Components (Default)

```typescript
// This is a Server Component by default
export default function ProductPage() {
  const products = await fetchProducts();
  return <ProductGrid products={products} />;
}
```

#### 2. Client Components

```typescript
'use client'; // Required for interactivity

import { useState } from 'react';

export function AddToCart() {
  const [count, setCount] = useState(0);
  // ... interactive logic
}
```

#### 3. Server Actions

```typescript
'use server';

export async function addToCart(productId: string) {
  // Server-side logic
}
```

### Important Files

- **`app/layout.tsx`**: Root layout with navigation
- **`lib/shopify/index.ts`**: Shopify API integration
- **`components/cart/modal.tsx`**: Shopping cart UI
- **`next.config.ts`**: Next.js configuration

## 🛠️ Day 4-5: Development Workflow

### 1. Creating a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

### 2. Making Changes

- Write clean, typed TypeScript
- Use Tailwind for styling
- Follow existing patterns
- Add comments for complex logic

### 3. Testing Your Changes

```bash
# Format code
pnpm prettier

# Check formatting
pnpm prettier:check

# Run tests
pnpm test

# Build to ensure no errors
pnpm build
```

### 4. Commit and Push

```bash
# Stage changes
git add .

# Commit with conventional format
git commit -m "feat: add new feature"

# Push to your branch
git push origin feature/your-feature-name
```

### 5. Create Pull Request

- Go to GitHub and create PR
- Fill out the PR template
- Request review from @chaishillomnitech1
- Address feedback

## 📋 Common Tasks

### Adding a New Component

```typescript
// components/my-component.tsx
interface MyComponentProps {
  title: string;
}

export function MyComponent({ title }: MyComponentProps) {
  return <div className="p-4">{title}</div>;
}
```

### Fetching Data from Shopify

```typescript
import { getProducts } from 'lib/shopify';

export default async function ProductsPage() {
  const products = await getProducts();
  return <ProductList products={products} />;
}
```

### Styling with Tailwind

```typescript
<div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md">
  <h2 className="text-2xl font-bold">Title</h2>
  <p className="text-gray-600">Description</p>
</div>
```

## 🐛 Debugging Tips

### 1. Check Server Logs

Development server shows server-side errors in terminal.

### 2. Browser Console

Client-side errors appear in browser DevTools console.

### 3. Network Tab

Check API calls in Network tab for Shopify integration issues.

### 4. React DevTools

Install React DevTools extension for component debugging.

## 📚 Learning Resources

### Next.js
- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)
- [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)

### React
- [React Documentation](https://react.dev)
- [React Hooks](https://react.dev/reference/react)

### TypeScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TypeScript with React](https://react.dev/learn/typescript)

### Tailwind CSS
- [Tailwind Documentation](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com)

### Shopify
- [Storefront API](https://shopify.dev/docs/api/storefront)
- [Headless Commerce](https://shopify.dev/docs/custom-storefronts)

## 🤝 Team Collaboration

### Communication Channels

- **GitHub Issues**: Bug reports, feature requests
- **GitHub Discussions**: Questions, ideas, general discussion
- **Pull Requests**: Code review and collaboration

### Code Review Process

1. Submit PR with clear description
2. Automated checks run (CI/CD)
3. Code owner (@chaishillomnitech1) reviews
4. Address feedback
5. Approval and merge

### Best Practices

- ✅ Write descriptive commit messages
- ✅ Keep PRs focused and small
- ✅ Add tests for new features
- ✅ Update documentation
- ✅ Be responsive to feedback

## 🔒 Security Guidelines

- ❌ Never commit secrets or API keys
- ✅ Use environment variables
- ✅ Validate user input
- ✅ Follow security best practices
- 📖 Read [SECURITY.md](../SECURITY.md)

## 🎯 Next Steps

### Week 1 Goals

- [ ] Set up development environment
- [ ] Understand project structure
- [ ] Read key documentation
- [ ] Make first small contribution (docs, typo fix, etc.)

### Week 2 Goals

- [ ] Pick up a "good first issue"
- [ ] Understand the development workflow
- [ ] Submit your first PR
- [ ] Get familiar with code review process

### Week 3+ Goals

- [ ] Contribute meaningful features
- [ ] Help review other PRs
- [ ] Improve documentation
- [ ] Share knowledge with team

## 🆘 Getting Help

### Stuck? Here's what to do:

1. **Check Documentation**: README, CONTRIBUTING, this guide
2. **Search Issues**: Someone might have had the same problem
3. **Ask in Discussions**: Post your question
4. **Contact Team Lead**: Reach out to @chaishillomnitech1

### Good Questions Include:

- What you're trying to do
- What you've already tried
- Error messages or unexpected behavior
- Relevant code snippets
- Environment details

## 🎉 Welcome!

You're now part of the Scrollverse Commerce team! We're excited to have you contribute.

Remember:
- **Ask questions** - there are no dumb questions
- **Be patient** - learning takes time
- **Help others** - share what you learn
- **Have fun** - enjoy the journey!

## 📞 Key Contacts

- **Code Owner/Lead**: @chaishillomnitech1
- **Repository**: [github.com/chaishillomnitech1/scrollverse_commerce](https://github.com/chaishillomnitech1/scrollverse_commerce)

---

**ALL IS LOVE. ALL IS LAW. ALL IS FLUID. KUN FAYAKŪN!** 🕋♾️✨
