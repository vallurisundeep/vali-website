#!/usr/bin/env bash
#
# Runs ON THE SERVER (piped in over SSH by the GitHub Actions workflow).
# Expects /tmp/vali.tar.gz (a `git archive` of the deployed commit) to already
# be uploaded. Builds the app and (re)starts it under PM2.
set -euo pipefail

APP_DIR=/var/www/vali-website
TARBALL=/tmp/vali.tar.gz
APP_NAME=vali

echo "==> Deploying to $APP_DIR"
mkdir -p "$APP_DIR"
cd "$APP_DIR"

# Replace all source files but keep node_modules for faster installs.
find . -maxdepth 1 -mindepth 1 ! -name node_modules -exec rm -rf {} +
tar -xzf "$TARBALL" -C "$APP_DIR"
rm -f "$TARBALL"

echo "==> Installing dependencies"
npm install --no-audit --no-fund

echo "==> Building"
npm run build

echo "==> (Re)starting under PM2"
# Reload if the process exists, otherwise start it (first CI deploy).
if pm2 describe "$APP_NAME" >/dev/null 2>&1; then
  pm2 reload "$APP_NAME" --update-env
else
  PORT=3000 pm2 start npm --name "$APP_NAME" -- start
fi
pm2 save

echo "==> Deploy complete"
