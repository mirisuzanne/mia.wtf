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

  eleventyConfig.addAsyncFilter('imgSrc', imgSrc);
  eleventyConfig.addFilter('imgDir', imgDir);
};
