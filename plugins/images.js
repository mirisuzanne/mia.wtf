import Image from '@11ty/eleventy-img';
import { join } from 'path';

export default function(eleventyConfig, options = {}) {
  const imgFolder = options.in;
  const opts = { ...options.out };

  async function getImageData(src, config) {
    const imgSrc = imgFolder && !src.includes('://')
      ? join(imgFolder, src)
      : src;

    const metadata = await Image(imgSrc, { ...opts, ...config});
    return metadata;
  }

  async function imageSrc(src, config) {
    const metadata = await getImageData(src, config);
    const img = metadata.jpeg[metadata.jpeg.length - 1];
    return img.url;
  }

  eleventyConfig.addAsyncFilter('imgSrc', imageSrc);
};
