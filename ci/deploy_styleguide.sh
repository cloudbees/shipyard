version=$(cat _assets/shipyard/packages.json | jq '.version')
cd _site
git add .
git commit -a -m "Automated update of shipyard styleguide (${version})"
git show
