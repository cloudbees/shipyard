#!/bin/bash
set -e # halt script on error

percy snapshot --enable_javascript --widths "375,768,1280" _site/
