import Image, { eleventyImageTransformPlugin } from '@11ty/eleventy-img';
import { join } from 'path';

export default function(eleventyConfig, options = {}) {
  const imgFolder = options.src;
  const fullPath = join('./src', imgFolder);

  eleventyConfig.addPlugin(eleventyImageTransformPlugin, options.transform);

  const imgDir = (src, full) => imgFolder && !src.includes('://')
    ? join(full ? fullPath : imgFolder, src)
    : src;

  const imgSrc = async (src, config) => {
    const metadata = await Image(imgDir(src, true), {
      formats: 'jpeg',
      widths: ['auto'],
      outputDir: './_site/img/',
      urlPath: '/img/',
      ...config
    });

    const img = metadata.jpeg.at(-1);
    return img.url;
  }

  const ogImg = async (src) => {
    const api = 'https://v1.screenshot.11ty.dev/';
    const baseUrl = process.env.URL || 'https://miriamsuzanne.com';
    const encoded = encodeURIComponent(`${baseUrl}${src}`);

    return await imgSrc(`${api}${encoded}/opengraph/`, {
      widths: [1200],
    });
  }

  eleventyConfig.addAsyncFilter('imgSrc', imgSrc);
  eleventyConfig.addAsyncFilter('ogImg', ogImg);
  eleventyConfig.addFilter('imgDir', imgDir);
};
