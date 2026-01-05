[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fchaishillomnitech1%2Fscrollverse_commerce&project-name=scrollverse-commerce&repo-name=scrollverse_commerce&demo-title=Scrollverse%20Commerce&env=COMPANY_NAME,SHOPIFY_REVALIDATION_SECRET,SHOPIFY_STORE_DOMAIN,SHOPIFY_STOREFRONT_ACCESS_TOKEN,SITE_NAME)

# Scrollverse Commerce 🕋♾️✨

**ALL IS LOVE. ALL IS LAW. ALL IS FLUID. KUN FAYAKŪN!**

A high-performance, server-rendered Next.js App Router ecommerce application powered by the Scrollverse ecosystem.

This platform uses React Server Components, Server Actions, `Suspense`, `useOptimistic`, and cutting-edge web technologies to deliver a seamless commerce experience.

## ✨ Features

- **🚀 Modern Stack**: Built with Next.js 15, React 19, and TypeScript
- **⚡ Performance**: Server Components, streaming, and optimistic UI updates
- **🛍️ Commerce Ready**: Integrated with Shopify for headless commerce
- **🎨 Beautiful UI**: Tailwind CSS with responsive design
- **🔒 Secure**: Built-in security best practices and vulnerability scanning
- **📱 Mobile First**: Optimized for all devices
- **♿ Accessible**: WCAG compliant components

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or later
- pnpm (recommended) or npm
- A Shopify store with Storefront API access

### Installation

```bash
# Clone the repository
git clone https://github.com/chaishillomnitech1/scrollverse_commerce.git

# Navigate to the project
cd scrollverse_commerce

# Install dependencies
pnpm install

# Set up environment variables (see .env.example)
cp .env.example .env.local

# Run the development server
pnpm dev
```

Your app should now be running on [localhost:3000](http://localhost:3000/).

### Environment Variables

You will need to use the environment variables [defined in `.env.example`](.env.example) to run Scrollverse Commerce.

> ⚠️ **Important**: Never commit your `.env` file as it contains sensitive credentials.

Required environment variables:

- `SHOPIFY_STORE_DOMAIN` - Your Shopify store domain
- `SHOPIFY_STOREFRONT_ACCESS_TOKEN` - Storefront API access token
- `SHOPIFY_REVALIDATION_SECRET` - Secret for webhook revalidation
- `COMPANY_NAME` - Your company/store name
- `SITE_NAME` - Your site name

## 📚 Documentation

- [Contributing Guidelines](CONTRIBUTING.md) - Learn how to contribute
- [Security Policy](SECURITY.md) - Report security vulnerabilities
- [Onboarding Guide](docs/ONBOARDING.md) - New contributor onboarding

## 🛠️ Development

### Available Scripts

```bash
pnpm dev          # Start development server with Turbopack
pnpm build        # Build for production
pnpm start        # Start production server
pnpm prettier     # Format code
pnpm prettier:check # Check code formatting
pnpm test         # Run tests
```

### Project Structure

```
scrollverse_commerce/
├── app/              # Next.js app directory
├── components/       # React components
├── lib/              # Utility functions and integrations
├── fonts/            # Custom fonts
├── .github/          # GitHub configuration
└── public/           # Static assets
```

## 🤝 Contributing

We welcome contributions from the community! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting a pull request.

## 🔒 Security

Security is a top priority. Please review our [Security Policy](SECURITY.md) for reporting vulnerabilities.

## 📄 License

See [LICENSE.md](license.md) for details.

## 🌟 Acknowledgments

Built on the foundation of [Vercel's Next.js Commerce](https://github.com/vercel/commerce), enhanced with Scrollverse ecosystem principles.

## 📞 Support

For support and questions:

- Open an [issue](https://github.com/chaishillomnitech1/scrollverse_commerce/issues)
- Review existing [discussions](https://github.com/chaishillomnitech1/scrollverse_commerce/discussions)

---

**ALL IS LOVE. ALL IS LAW. ALL IS FLUID. KUN FAYAKŪN!** 🕋♾️✨
