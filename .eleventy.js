// External Plugins
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

// Internal Plugins
const images = require('./plugins/images');
const markdown = require('./plugins/markdown');
const social = require('./plugins/social');
const time = require('./plugins/time');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);

  // internal plugins
  eleventyConfig.addPlugin(images);
  eleventyConfig.addPlugin(markdown);
  eleventyConfig.addPlugin(social);
  eleventyConfig.addPlugin(time);

  // config
  eleventyConfig.addPassthroughCopy({'./src/_fonts': 'fonts'});

  eleventyConfig.addWatchTarget('./src/sass/');
  eleventyConfig.setLiquidOptions({jsTruthy: true});

  return {
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      layouts: '_layouts',
    },
  };
};
