#!/bin/bash
# Static build script for Cloudflare Pages deployment
# This script builds only the frontend static files

echo "Building static site for Cloudflare Pages..."
vite build

if [ $? -eq 0 ]; then
    echo "✓ Build successful! Output directory: dist/public"
    echo "You can preview the build with: vite preview"
else
    echo "✗ Build failed!"
    exit 1
fi
