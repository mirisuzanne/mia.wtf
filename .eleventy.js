// External Plugins
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

// Internal Plugins
const drafts = require('./plugins/drafts');
const icons = require('./plugins/icons');
const images = require('./plugins/images');
const markdown = require('./plugins/markdown');
const openGraph = require('./plugins/open-graph');
const sass = require('./plugins/sass');
const time = require('./plugins/time');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);

  // internal plugins
  eleventyConfig.addPlugin(drafts);
  eleventyConfig.addPlugin(icons);
  eleventyConfig.addPlugin(images);
  eleventyConfig.addPlugin(markdown);
  eleventyConfig.addPlugin(openGraph);
  eleventyConfig.addPlugin(sass);
  eleventyConfig.addPlugin(time);

  // config
  eleventyConfig.addPassthroughCopy({'./src/_fonts': 'fonts'});
  eleventyConfig.setLiquidOptions({jsTruthy: true});

  return {
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      layouts: '_layouts',
    },
  };
};
