require('dotenv').config();

// External Plugins
const { EleventyRenderPlugin } = require('@11ty/eleventy');
const pluginWebc = require("@11ty/eleventy-plugin-webc");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

// Internal Plugins
const build = require('./plugins/build');
const collect = require('./plugins/collect');
const data = require('./plugins/data');
const icons = require('./plugins/icons');
const images = require('./plugins/images');
const markdown = require('./plugins/markdown');
const openGraph = require('./plugins/open-graph');
const sass = require('./plugins/sass');
const time = require('./plugins/time');

module.exports = function (eleventyConfig) {
  eleventyConfig.addJavaScriptFunction("absoluteUrl", pluginRss.absoluteUrl);
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginWebc, {
    components: [
      "src/_includes/**/*.webc",
      "src/_includes/**/*.svg",
    ],
  });

  eleventyConfig.addPlugin(build);
  eleventyConfig.addPlugin(collect);
  eleventyConfig.addPlugin(data);
  eleventyConfig.addPlugin(icons);
  eleventyConfig.addPlugin(markdown);
  eleventyConfig.addPlugin(openGraph);
  eleventyConfig.addPlugin(time, {
    short: 'PP',
    long: 'MMMM d, y',
    default: 'MMMM d, y',
  });

  // assets
  eleventyConfig.addPlugin(sass, {
    sassIn: '_sass'
  });

  eleventyConfig.addPlugin(images, {
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
  });

  eleventyConfig.addPassthroughCopy({
    './src/_assets/fonts': 'fonts',
    './src/_assets/favicons/*.*': './',
    './src/admin/config.yml': './admin/config.yml',
  });

  // config
  eleventyConfig.setLiquidOptions({jsTruthy: true});
  eleventyConfig.setQuietMode(true);

  return {
    dir: {
      input: 'src',
      layouts: '_layouts',
    },
  };
};
