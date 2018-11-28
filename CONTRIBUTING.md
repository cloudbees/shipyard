# Branching

## Changes to just the styleguide

Changes to _just_ the styleguide that do not involve changing the shipyard package are safe to base directly on master.

You can create a new branch based on master with

```
git checkout -b changes-to-just-the-styleguide master
```

This will create you a branch based on master, and when you're ready to merge it you can create a pull request from `changes-to-just-the-styleguide` into `master`

## Changes that involve changing the shipyard package (along with the styleguide)

When you are making changes that require you to also update the shipyard package, those should be be based on `develop`.  In the [git flow]() branching model that we're using, new changes should always go into `develop` to await release.

To do that you can do

```
git checkout -b changes-to-the-shipyard-package develop
```

This will create a branch based on `develop`, and when you're ready to merge it you can create a pull request from `changes-to-the-shipyard-package` into `develop` (this is the default merge target).

Feel free to change the styleguide along with the shipyard package, as this is a good way to version them together.

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
  - Run `yarn build:dist`

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

## Publishing the styleguide

Once you have published a new version of the npm package, it's time to update the styleguide.

Make sure you have master checked out and run a jekyll build **with the baseurl flag set like so**.

```
bundle exec jekyll build --baseurl /shipyard
```

The additional `/shipyard` argument builds the styleguide so it can be hosted properly by GitHub Pages.
