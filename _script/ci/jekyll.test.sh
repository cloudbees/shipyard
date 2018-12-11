#!/bin/bash
set -e # halt script on error

chown -R jekyll:jekyll ./
JEKYLL_ENV=test jekyll build --trace --destination _site
