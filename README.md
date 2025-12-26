<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1UZdwFwHLkiHdgeTZNfZjEQp-b7GnC_is

**Developer tooling:** see `CONTRIBUTING.md` for ESLint, Prettier and Husky setup.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

---

## Build & manual upload

If your uploader doesn't run a build step (it detected TypeScript files), build locally and upload the generated `dist` directory.

1. Install dependencies (if not already):
   `npm install`
2. Build the app (Vite outputs to `./dist`):
   `npm run build`
3. Confirm the build output exists:
   - Windows: `dir dist`
   - macOS/Linux: `ls -la dist`
4. Upload the `dist` folder using your uploader or hosting service.

**Tip:** If you need automatic build/deploy (recommended for worker-based projects), consider Cloudflare Wrangler:
- `npx wrangler pages publish ./dist --project-name <project-name>`
- Or add a `wrangler.toml` and run `npx wrangler deploy`
