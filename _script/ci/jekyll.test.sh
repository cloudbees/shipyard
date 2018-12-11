#!/bin/bash
set -e # halt script on error

yarn install

JEKYLL_ENV=test jekyll build --trace --destination _site
