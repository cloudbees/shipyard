const glob = require('glob')
const FileManagerPlugin = require('filemanager-webpack-plugin')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')

module.exports = {
  entry: {
    sass: [ './sass/shipyard.sass' ],
    icons: glob.sync('./icons/**/*.svg'),
  },
  output: {
    filename: '../dist/[name]'
  },
  module: {
    rules: [
      { test: /\.sass$/,
        use: [{ loader: 'file-loader', options: { name: 'shipyard.css' } },
              { loader: 'extract-loader' },
              { loader: 'css-loader' },
              { loader: 'sass-loader' }] },

      { test: /\.svg$/,
        loader: 'svg-sprite-loader',
        options: {
          extract: true,
          spriteFilename: 'icons.svg' } }
    ],
  },
  plugins: [
    new SpriteLoaderPlugin({ plainSprite: true }),
    new FileManagerPlugin({
      onStart: { delete: ['./dist'] },
      onEnd: { delete: ['./dist/sass', './dist/icons'] }
    }),
  ]
}
