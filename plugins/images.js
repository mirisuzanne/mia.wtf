const Image = require('@11ty/eleventy-img');
const path = require('path');

const IMG_SRC = './src/_images/';
const LOCAL_OUT = 'local';
const REMOTE_OUT = 'remote';

const imgOptions = (out) => ({
  formats: ['avif', 'jpeg'],
  widths: [640, 960, 1600],
  urlPath: `/img/${out || LOCAL_OUT}/`,
  outputDir: `./_site/img/${out || LOCAL_OUT}/`,
});

const imgAttrs = {
  loading: 'lazy',
  decoding: 'async',
}

const getSizes = (sizes) => {
  const defaultSizes = {
    default: '(min-width: 65em) 60vw, 95vw',
    hero: '(min-width: 75em) 75vw, 95vw',
    gallery: '(min-width: 65em) 30vw, (min-width: 30em) 45vw, 95vw',
    media: '(min-width: 65em) 15vw, (min-width: 30em) 30vw, 50vw',
  };

  return sizes && defaultSizes[sizes]
    ? defaultSizes[sizes]
    : sizes || defaultSizes.default;
};

async function getImage(src) {
  const isRemote = src.includes('://');
  let imgSrc = isRemote
    ? src
    : path.join(IMG_SRC, src);
  let imgOpts = isRemote
    ? imgOptions(REMOTE_OUT)
    : imgOptions();

  let metadata = await Image(imgSrc, imgOpts);
  return metadata;
}

async function imageHtml(src, alt, sizes, attrs) {
  let metadata = await getImage(src);

  let imageAttributes = {
    alt,
    sizes: getSizes(sizes),
    ...imgAttrs,
    ...attrs,
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt=' works okay)
  return Image.generateHTML(metadata, imageAttributes, {
    whitespaceMode: 'inline',
  });
}

async function imageSrc(src) {
  let metadata = await getImage(src);
  const img = metadata.jpeg[metadata.jpeg.length - 1];

  return img.url;
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addAsyncFilter('img', imageHtml);
  eleventyConfig.addAsyncFilter('src', imageSrc);
  eleventyConfig.addAsyncShortcode('img', imageHtml);
  eleventyConfig.addAsyncShortcode('src', imageSrc);
};
