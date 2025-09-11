# Copilot StartUp UI

A modern, minimal React + TypeScript application scaffolded with Vite. This project is designed for rapid prototyping and scalable production apps, featuring hot module replacement, strict linting, and environment-based configuration.

---

## Why This Architecture?
This architecture leverages the best-in-class modern frontend tooling for speed, maintainability, and scalability:
- **Vite** provides lightning-fast development and build times, instant HMR, and a highly optimized production output.
- **React 19** with functional components and hooks enables a clean, declarative, and component-driven UI architecture.
- **TypeScript** ensures type safety, reducing runtime errors and improving code quality.
- **ESLint** with strict, extensible rules enforces code consistency and best practices across JavaScript, TypeScript, and React codebases.
- **Environment-based configuration** allows for secure, flexible deployments across multiple environments (dev, staging, prod).
- **Modular project structure** makes it easy to scale, test, and maintain as your app grows.

This stack is ideal for teams who want:
- Fast iteration and feedback during development
- Easy onboarding for new developers
- A clear separation of concerns and best practices by default
- A foundation that can be extended for advanced use cases (state management, routing, testing, etc.)

---

## Project Structure
```
├── public/                  # Static assets served as-is
│   └── vite.svg
├── src/                     # Application source code
│   ├── assets/              # Images and static assets for import
│   │   └── react.svg
│   ├── App.tsx              # Main App component
│   ├── App.css              # App-level styles
│   ├── main.tsx             # Entry point, React root rendering
│   ├── index.css            # Global styles
│   └── vite-env.d.ts        # Vite/TS environment types
├── .env.example             # Example environment variables
├── index.html               # HTML template
├── package.json             # Project metadata and scripts
├── tsconfig.json            # TypeScript base config
├── tsconfig.app.json        # TypeScript config for app code
├── tsconfig.node.json       # TypeScript config for node/build tools
├── vite.config.ts           # Vite configuration
├── eslint.config.js         # ESLint configuration
└── README.md                # Project documentation
```

### Structure Rationale
- **public/**: For static files that do not get processed by Vite (e.g., favicons, robots.txt).
- **src/**: All source code lives here, keeping the root clean and making it easy to locate app logic.
  - **assets/**: Central place for images and static imports, making asset management straightforward.
  - **App.tsx**: The main React component, a starting point for your UI.
  - **main.tsx**: The entry point for ReactDOM, where the app is mounted.
  - **vite-env.d.ts**: Ensures TypeScript recognizes Vite-specific types.
- **.env.example**: Documents all environment variables needed for configuration.
- **tsconfig.*.json**: Splits TypeScript config for app and tooling, improving build performance and clarity.
- **eslint.config.js**: Centralizes linting rules for all code, ensuring consistency.
- **vite.config.ts**: All Vite build and dev server settings in one place.

This structure is simple for small projects but easily extensible for larger apps (add `components/`, `pages/`, `hooks/`, etc.).

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
```bash
# Install dependencies
npm install
# or
yarn install
```

### Development
```bash
# Start the development server
npm run dev
# or
yarn dev
```

### Build
```bash
# Build for production
npm run build
# or
yarn build
```

### Preview Production Build
```bash
npm run preview
# or
yarn preview
```

### Lint
```bash
npm run lint
# or
yarn lint
```

---

## Available Scripts
- `dev` – Start Vite dev server with HMR
- `build` – Type-check and build for production
- `preview` – Preview the production build
- `lint` – Run ESLint on the project

---

## Environment Variables
Configuration is managed via environment variables. Copy `.env.example` to `.env` and update values as needed.

| Variable                   | Description                        |
|---------------------------|------------------------------------|
| VITE_API_BASE_URL         | Base URL for API requests           |
| VITE_AUTH_CLIENT_ID       | Auth client ID                      |
| VITE_AUTH_SECRET          | Auth secret                         |
| VITE_ENABLE_DEBUG         | Enable debug mode (true/false)      |
| VITE_FEATURE_X_ENABLED    | Toggle Feature X (true/false)       |
| VITE_GOOGLE_ANALYTICS_ID  | Google Analytics Tracking ID        |
| VITE_APP_NAME             | Application name                    |
| VITE_APP_ENV              | Application environment             |

---

## ESLint & Code Quality
- Uses [typescript-eslint](https://typescript-eslint.io/), [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks), and [eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh)
- Lint config: see `eslint.config.js`
- Type-aware linting is recommended for production (see comments in `eslint.config.js` and the sample in the old README)

---

## Customization
- Update `src/App.tsx` to start building your UI
- Add assets to `src/assets/`
- Update environment variables in `.env`
- Adjust TypeScript config in `tsconfig.*.json` as needed

---

## License

This project is licensed under the MIT License.
