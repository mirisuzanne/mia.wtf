// External Plugins
const { EleventyRenderPlugin } = require('@11ty/eleventy');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const yaml = require('js-yaml');

// Internal Plugins
const build = require('./plugins/build');
const icons = require('./plugins/icons');
const images = require('./plugins/images');
const markdown = require('./plugins/markdown');
const openGraph = require('./plugins/open-graph');
const sass = require('./plugins/sass');
const time = require('./plugins/time');

// settings
const imgOpts = {
  imgFolder: './src/_assets/images/',
  output: {
    formats: ['avif', 'jpeg'],
    widths: [640, 960, 1600],
    urlPath: '/img/',
    outputDir: './_site/img/',
  },
  sizes: {
    default: '(min-width: 65em) 60vw, 95vw',
    hero: '(min-width: 75em) 75vw, 95vw',
    gallery: '(min-width: 65em) 30vw, (min-width: 30em) 45vw, 95vw',
    media: '(min-width: 65em) 15vw, (min-width: 30em) 30vw, 50vw',
  },
};

const dateFormats = {
  short: 'PP',
  long: 'MMMM d, y',
  default: 'MMMM d, y',
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(build);
  eleventyConfig.addPlugin(icons);
  eleventyConfig.addPlugin(markdown);
  eleventyConfig.addPlugin(openGraph);

  // assets
  eleventyConfig.addPlugin(time, dateFormats);
  eleventyConfig.addPlugin(images, imgOpts);
  eleventyConfig.addPlugin(sass, { sassIn: '_sass' });
  eleventyConfig.addPassthroughCopy({
    './src/_assets/fonts': 'fonts',
    './src/_assets/favicons/*.*': './',
    './src/admin/config.yml': './admin/config.yml',
  });

  // config
  eleventyConfig.setLiquidOptions({jsTruthy: true});
  eleventyConfig.setQuietMode(true);

  eleventyConfig.addDataExtension('yml, yaml', (contents) =>
    yaml.load(contents),
  );

  return {
    dir: {
      input: 'src',
      layouts: '_layouts',
    },
  };
};
