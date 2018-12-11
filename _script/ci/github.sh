#!/bin/bash
set -e # halt script on error

# Commit all changes to the gh-pages branch
cd _production/shipyard
git config user.email "${GITHUB_DEPLOY_USER_EMAIL}"
git config user.name "${GITHUB_DEPLOY_USER_NAME}"
git status
git add --all
git status
git commit --allow-empty -m "Deploy to GitHub Pages: ${CI_COMMIT_ID} --skip-ci"

# Push all changes to production
git push -q "https://${GITHUB_DEPLOY_USER_API_KEY}@github.com/cloudbees/shipyard" gh-pages
