# Shipyard Styleguide

At it's core, the styleguide is a fairly standard [jekyll](https://jekyllrb.com/) site.

**Once you have a relatively recent ruby version available and [`yarn`](https://yarnpkg.com) installed.**

  - clone this repository
  - install the required ruby gems with `bundle install`
  - run `bundle exec jekyll serve`

After this, you should have a working styleguide locally at http://127.0.0.1:4000/shipyard/

As you make changes to any of the files (including the shipyard package), it should auto rebuild and you should see your changes reflected on refresh.

### A note on Ruby helper usage

Currently, there are many places where we are using custom ruby helpers in order to generate html for the styleguide.  This is a relic of this package being used only in jekyll and rails applications.  It is our desire to move towards utilizing [jekyll includes](https://jekyllrb.com/docs/includes/) moving forward, and transition the ruby based helpers into includes.  You can see examples of this in how we are currently rendering our icons.  This will allow a wider range of contribution along with providing a clearer path to understand the expected HTML structure for certain components.  We consider HTML > Ruby in this context.

## The shipyard package

The shipyard package is what we publish to npm.  This is how all of our consuming projects will utilize shipyard.  This is where all the sass and icons intended to be published should live.  It is located at `_assets/shipyard` and contains the following components:

  - SVG Icons: `_assets/shipyard/icons`
  - SASS source files: `_assets/shipyard/sass`
  - Built CSS/SVG Assets: `_assets/shipyard/dist`

## Development

See our [contribution](CONTRIBUTING.md) documentation for details on how we expect pull requests and how to cut releases.

## License

The package is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
