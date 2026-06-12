#!/bin/bash
set -e
if [ -z "$GITHUB_PUSH_TOKEN" ]; then
  echo "Error: GITHUB_PUSH_TOKEN tidak ditemukan. Buka shell baru dan coba lagi."
  exit 1
fi
REPO="https://x-token:${GITHUB_PUSH_TOKEN}@github.com/shafirazea48-tech/stk.git"
git remote remove _gh_push 2>/dev/null || true
git remote add _gh_push "$REPO"
echo "→ Pushing ke GitHub..."
git push _gh_push main
echo "✓ Push berhasil!"
git remote remove _gh_push
rm -f push.sh
