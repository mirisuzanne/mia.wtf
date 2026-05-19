import 'dotenv/config';

// External Plugins
import pluginWebc from '@11ty/eleventy-plugin-webc';
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';
import { exec } from 'child_process';
import { RenderPlugin } from "@11ty/eleventy";

// Internal Plugins
import collect from './plugins/collect.js';
import data from './plugins/data.js';
import icons from './plugins/icons.js';
import images from './plugins/images.js';
import markdown from './plugins/markdown.js';
import time from './plugins/time.js';

export default async function (eleventyConfig) {
  eleventyConfig.setServerOptions({ port: 8010 });

  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(RenderPlugin);
  eleventyConfig.addPlugin(pluginWebc, {
    components: [
      'src/_includes/**/*.webc',
      'src/_includes/**/*.svg',
      'npm:@terriblemia/ground-control/*.webc',
      'npm:@terriblemia/eight-ball/*.webc',
      'npm:@terriblemia/track-list/*.webc',
      'npm:@11ty/eleventy-img/*.webc',
    ],
  });

  eleventyConfig.addPlugin(collect);
  eleventyConfig.addPlugin(data);
  eleventyConfig.addPlugin(icons);
  eleventyConfig.addPlugin(markdown);
  eleventyConfig.addPlugin(time, {
    short: 'PP',
    long: 'MMMM d, y',
    default: 'MMMM d, y',
    rough: 'MMMM y',
  });

  // assets
  eleventyConfig.addPassthroughCopy({
    './src/_fonts': 'fonts',
    './src/_css': 'css',
    './src/_files': '_files',
    './src/_images/_site': 'img/_site',
    './src/_favicons/*.*': './',
  });

  eleventyConfig.addPlugin(images, {
    src: '/_images/',

    transform: {
      formats: ['avif', 'jpeg'],
      widths: [640, 960, 1600],

      htmlOptions: {
        imgAttributes: {
          alt : "", // required
          loading: "lazy",
          decoding: "async",
        },

        // HTML attributes added to `<picture>` (omitted when <img> used)
        pictureAttributes: {},

        // Which source to use for `<img width height src>` attributes
        fallback: "largest", // or "smallest"
      }
    }
  });

  eleventyConfig.addPlugin(feedPlugin, {
    collection: {
      name: "is:post",
      limit: 10,
    },
    metadata: {
      language: "en",
      title: "Miriam Suzanne",
      subtitle: "Art & CSS & other digital artifacts of my life",
      base: "https://www.miriamsuzanne.com/",
      author: {
        name: "Miriam Suzanne",
        email: "miriam@miriamsuzanne.com",
      }
    }
  });

  // config
  eleventyConfig.on('eleventy.beforeWatch', (changedFiles) => {
    const layouts = 'src/_layouts';
    if (!changedFiles.some((filePath) => filePath.includes(`./${layouts}`))) {
      console.log('🤠 Component files updated -- coercing layout reload.')
      exec(`find ${layouts}/*.webc -type f -exec touch {} +`);
    }
  });

  eleventyConfig.setLiquidOptions({jsTruthy: true});
  eleventyConfig.addWatchTarget('./src/_css/');
  eleventyConfig.setQuietMode(true);

  return {
    dir: {
      input: 'src',
      layouts: '_layouts',
    },
  };
};
