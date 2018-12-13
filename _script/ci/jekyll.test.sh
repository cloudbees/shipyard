#!/bin/bash
set -e # halt script on error

(
  cd _assets/shipyard/
  yarn install
  yarn build:dist
  chown -R jekyll:jekyll ./
)

JEKYLL_ENV=test jekyll build --trace --destination _site
