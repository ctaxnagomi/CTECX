Developer tooling & pre-commit checks

This project includes ESLint (TypeScript + React), Prettier, Husky and lint-staged setup to keep code consistent.

Quick setup

1. Install dependencies (this will install devDependencies listed in package.json):
   npm install
2. Initialize Husky (creates the hooks):
   npm run prepare
3. Lint the code:
   npm run lint
4. Automatically fix issues:
   npm run lint:fix
5. To format files with Prettier:
   npm run format

Notes

- A Rollup visualizer is integrated into `vite.config.ts` and can be activated with a cross-platform command:
  npm run build:analyze
  This sets `ANALYZE=true` and generates `dist/bundle-analysis.html` after build.

- If Husky pre-commit hook doesn't run after fresh clone, run `npm run prepare` locally to set it up.

- If you'd like me to add Husky installation as part of CI, or add stricter ESLint rules (Airbnb, stricter TypeScript rules), tell me which style you prefer.
