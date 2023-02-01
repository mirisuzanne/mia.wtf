// External Plugins
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const pluginRss = require('@11ty/eleventy-plugin-rss');

// Internal Plugins
const markdown = require('./plugins/markdown');
const time = require('./plugins/time');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addPlugin(markdown);
  eleventyConfig.addPlugin(time);

  eleventyConfig.addFilter("ogImage", (image, url) => {
    if (image) {
      return `/images/${image}`;
    }

    const api = 'https://screenshot-api.miriam.codes/';
    const baseUrl = process.env.URL || 'https://miriamsuzanne.com';
    const encoded = encodeURIComponent(`${baseUrl}/social/${url}`);
    return `${api}${encoded}/opengraph/`;
  });
  eleventyConfig.addLiquidFilter("absoluteUrl", pluginRss.absoluteUrl);

  eleventyConfig.addPassthroughCopy({'./src/_fonts': 'fonts'});

  eleventyConfig.addWatchTarget('./src/sass/');
  eleventyConfig.setLiquidOptions({jsTruthy: true});

  return {
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      output: 'public',
      layouts: '_layouts',
    },
  };
};
