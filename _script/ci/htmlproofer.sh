#!/bin/bash
set -e # halt script on error

htmlproofer _site --disable-external --allow-hash-href --assume-extension --log-level :debug --check-html true
htmlproofer _production --disable-external --allow-hash-href --assume-extension --log-level :debug --check-html true
