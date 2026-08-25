

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
