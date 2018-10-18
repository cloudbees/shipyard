## Organization

This repository consists of 2 parts.

  - The styleguide (the root of this repository)
  - The shipyard package (`_assets/shipyard`)

### The styleguide

At it's core, the styleguide is a fairly standard [jekyll](https://jekyllrb.com/) site.

Out of the box you should be able to:

  - clone this repository
  - install the required ruby gems with `bundle install`
  - run `bundle exec jekyll serve`

After this, you should have a working styleguide locally.  As you make changes to any of the files (including the shipyard package), it should auto rebuild and you should see your changes reflected on refresh.

#### A note on Ruby helper usage

Currently, there are many places where we are using custom ruby helpers in order to generate html for the styleguide.  This is a relic of this package being used only in jekyll and rails applications.  It is our desire to move towards utilizing [jekyll includes](https://jekyllrb.com/docs/includes/) moving forward, and transition the ruby based helpers into includes.  You can see examples of this in how we are currently rendering our icons.  This will allow a wider range of contribution along with providing a clearer path to understand the expected HTML structure for certain components.  We consider HTML > Ruby in this context.

### The shipyard package

The shipyard package is what we publish to npm.  This is how all of our consuming projects will utilize shipyard.  This is where all the sass and icons intended to be published should live.  It is located at `_assets/shipyard` and contains the following components:

  - SVG Icons: `_assets/shipyard/icons`
  - SASS source files: `_assets/shipyard/sass`
  - Built CSS/SVG Assets: `_assets/shipyard/dist`

## Pull Requests

All pull requests should be submitted against the `develop` branch.

## Releases

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

### Publishing to npm

Once the release process is complete, and you're confident it is correct, you should be able to publish to npm with

```
$> npm publish --access public
```
