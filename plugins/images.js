import Image from '@11ty/eleventy-img';
import { join } from 'path';

export default function(eleventyConfig, options = {}) {
  const imgFolder = options.in;
  const opts = { ...options.out };

  async function getImageData(src) {
    const imgSrc = imgFolder && !src.includes('://')
      ? join(imgFolder, src)
      : src;

    const metadata = await Image(imgSrc, opts);
    return metadata;
  }

  async function imageSrc(src) {
    const metadata = await getImageData(src);
    const img = metadata.jpeg[metadata.jpeg.length - 1];
    return img.url;
  }

  eleventyConfig.addAsyncFilter('imgSrc', imageSrc);
};
