#!/bin/bash

set -eu

repo="cloudbees/shipyard"
user_access_token=${GITHUB_DEPLOY_USER_ACCESS_TOKEN:?"Missing GITHUB_DEPLOY_USER_ACCESS_TOKEN environment variable"}
user_access_token="notreal"
if ! branch=$(git symbolic-ref --short HEAD 2>/dev/null); then
  branch=${CI_BRANCH:?"Could not read branch from either local checkout nor environment variable CI_BRANCH"}
fi

sanitized_repo=$(echo $repo | sed "s/\//-/g")
sanitized_branch=$(echo $branch | sed "s/\//-/g")
surge="${sanitized_repo}-${sanitized_branch}.surge.sh"
surge_url="https://${surge}"

if ! deployment=$(curl -s \
                  -X POST \
                  -H "Authorization: bearer ${user_access_token}" \
                  -d "{ \"ref\": \"${branch}\", \"environment\": \"preview\", \"description\": \"Styleguide Preview\", \"transient_environment\": true, \"auto_merge\": false, \"required_contexts\": []}" \
                  -H "Content-Type: application/json" \
                  "https://api.github.com/repos/${repo}/deployments"); then
  echo "POSTing deployment status failed, exiting" 1>&2
  exit 1
fi

if ! deployment_id=$(echo "${deployment}" | jq '.id'); then
  echo "Could not extract deployment ID from API response, exiting"
  exit 2
fi

if ! surge ./_site/ "${surge}"; then
  echo "Deployment of the preview failed, exiting" 1>&2
  exit 3
fi

if ! curl -s \
  -X POST \
  -H "Authorization: bearer ${user_access_token}" \
  -d "{ \"state\": \"success\", \"environment_url\": \"${surge_url}\" }" \
  -H "Content-Type: application/json" \
  "https://api.github.com/repos/${repo}/deployments/${deployment_id}/statuses" \
  > /dev/null ; then
  echo "POSTing deployment status failed, exiting" 1>&2
  exit 4
fi
