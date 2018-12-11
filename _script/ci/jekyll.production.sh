#!/bin/bash
set -e # halt script on error

# Clone only the gh-pages branch
git clone https://${GITHUB_DEPLOY_USER_API_KEY}@github.com/cloudbees/shipyard.git --branch gh-pages --single-branch _production/shipyard
chown -R jekyll:jekyll _production

# Rebuild the jekyll site for production
JEKYLL_ENV=production jekyll build --trace --baseurl /shipyard --destination _production/shipyard
