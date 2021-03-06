#!/bin/bash
set -eu # halt script on error

repo="cloudbees/shipyard"
user_access_token=${GITHUB_DEPLOY_USER_API_KEY:?"Missing GITHUB_DEPLOY_USER_API_KEY environment variable"}
if ! branch=$(git symbolic-ref --short HEAD 2>/dev/null); then
  branch=${CI_BRANCH:?"Could not read branch from either local checkout nor environment variable CI_BRANCH"}
fi

sanitized_repo=$(echo $repo | sed "s/\//-/g")
sanitized_branch=$(echo $branch | sed "s/\//-/g")
surge="${sanitized_repo}-${sanitized_branch}.surge.sh"
surge_url="https://${surge}"

deployment=$(curl -s \
                  -X POST \
                  -H "Authorization: bearer ${user_access_token}" \
                  -d "{ \"ref\": \"${branch}\", \"environment\": \"preview\", \"description\": \"Styleguide Preview\", \"transient_environment\": true, \"auto_merge\": false, \"required_contexts\": []}" \
                  -H "Content-Type: application/json" \
                  "https://api.github.com/repos/${repo}/deployments")

deployment_id=$(echo "${deployment}" | jq '.id')

surge ./_site/ "${surge}"

curl -s \
  -X POST \
  -H "Authorization: bearer ${user_access_token}" \
  -d "{ \"state\": \"success\", \"environment_url\": \"${surge_url}\" }" \
  -H "Content-Type: application/json" \
  "https://api.github.com/repos/${repo}/deployments/${deployment_id}/statuses" \
  > /dev/null
