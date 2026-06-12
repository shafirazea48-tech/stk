#!/bin/bash
set -e
REPO="https://x-token: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@github.com/shafirazea48-tech/stk.git"
git remote remove _gh_push 2>/dev/null || true
git remote add _gh_push "$REPO"
echo "→ Pushing fix vercel.json ke GitHub..."
git push _gh_push main
echo "→ Berhasil!"
git remote remove _gh_push
rm -f push.sh
