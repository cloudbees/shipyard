# Pull Requests

All pull requests should be submitted against the `develop` branch.

# Releases

**From within `_assets/shipyard`.**

We strive for [semantic versioning](https://semver.org/) for our version number assignment, and utilize the [git flow](https://github.com/nvie/gitflow) tool to execute releases in the repository.

You can initialize git flow on your local machine once it is installed with

```
$> git flow init -d
```

This will use the default branch naming conventions for git flow.

All new functionality should come in on the `develop` branch and when you're ready to cut a new release, start the process by using

```
$> git flow release start 1.x.x
```

This should give you a release branch off develop and some relevant instructions.

This is when you should:
  - Bump the version number in `package.json`
  - Run `npm build:dist`

Once you've done this and committed these changes to the release branch, you are ready to run:

```
$> git flow release finish 1.x.x
```

This will:
  - Merge the release branch into `master` and also back into `develop`
  - Create a tag for the release and prompt you for an annotation to describe the highlights of the release

At this point you should push `master` and `develop`, and also the new tag with `git push --tags`

## Publishing to npm

Once the release process is complete, and you're confident it is correct, you should be able to publish to npm with

```
$> npm publish --access public
```
