#!/bin/bash
gh variable set -f .env
gh variable delete REPO_URL
gh variable delete ACCESS_TOKEN
gh variable delete RUNNER_WORKDIR
gh variable delete LABELS
gh variable delete WEB_HOOK_URL

# ar44 @ MAINDESK in ~/promgramming/ne
array=( $(find .secrets -type f) )
for i in ${array[@]}
do
    name=$(basename $i)
    value=$(cat $i)
    gh secret set $name -b $value
done

gh workflow run .github/workflows/linter.yml --ref feat/github_actions