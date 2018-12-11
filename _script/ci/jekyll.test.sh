#!/bin/bash
set -e # halt script on error

JEKYLL_ENV=test jekyll build --trace --destination _site
