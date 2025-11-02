# Cloudflare Pages Deployment Guide

This is a static React website that can be easily deployed to Cloudflare Pages.

## Quick Deploy

### Option 1: Using Cloudflare Dashboard (Recommended)

1. **Push to Git**
   - Push your code to GitHub, GitLab, or Bitbucket

2. **Connect to Cloudflare Pages**
   - Go to [Cloudflare Pages](https://pages.cloudflare.com/)
   - Click "Create a project"
   - Connect your Git repository
   - Select the repository for this project

3. **Configure Build Settings**
   - **Framework preset**: Vite (or None)
   - **Build command**: `npx vite build`
   - **Build output directory**: `dist/public`
   - **Root directory**: Leave blank or `/`
   - **Deploy command** (if required): `echo "Deployment complete"`
   
   **Environment Variables** (add these in the settings):
   - `NODE_VERSION`: `20`

4. **Deploy**
   - Click "Save and Deploy"
   - Your site will be live at `<project-name>.pages.dev`

### Option 2: Using Wrangler CLI

1. **Install Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**
   ```bash
   wrangler login
   ```

3. **Build the site**
   ```bash
   npx vite build
   ```

4. **Deploy**
   ```bash
   npx wrangler pages deploy dist/public --project-name=demonflare-links
   ```

## Local Development

Run the development server:
```bash
npx vite
```

The site will be available at `http://localhost:5173`

## Local Preview of Production Build

Build and preview the production build locally:
```bash
npx vite build
npx vite preview
```

## Project Structure

```
client/
├── public/           # Static assets
│   ├── _redirects   # SPA routing configuration for Cloudflare
│   └── favicon.png
├── src/
│   ├── components/  # React components
│   ├── pages/       # Page components
│   ├── App.tsx      # Main app component
│   └── main.tsx     # Entry point
└── index.html       # HTML template

dist/public/         # Build output (deploy this folder)
```

## Custom Domain

After deployment, you can add a custom domain:
1. Go to your Cloudflare Pages project
2. Click "Custom domains"
3. Add your domain
4. Update your DNS settings as instructed

## Environment Variables

This site doesn't require any environment variables, but if you need to add them in the future:
1. Go to your project settings in Cloudflare Pages
2. Navigate to "Environment variables"
3. Add variables with the `VITE_` prefix to make them available in the client

## Notes

- The `_redirects` file ensures proper routing for the single-page application
- All routes will serve the `index.html` file, allowing client-side routing to work correctly
- The build output is optimized and minified for production
