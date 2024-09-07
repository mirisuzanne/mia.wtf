import pluginRss, { absoluteUrl } from '@11ty/eleventy-plugin-rss';

const ogImage = (image, url) => {
  if (image) {
    return `/img/_og/${image}`;
  }

  const api = 'https://screenshot-api.miriam.codes/';
  const baseUrl = process.env.URL || 'https://miriamsuzanne.com';
  const encoded = encodeURIComponent(`${baseUrl}${url}`);
  return `${api}${encoded}/_og/`;
}

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addFilter('ogImage', ogImage);
  eleventyConfig.addLiquidFilter('absoluteUrl', absoluteUrl);
};
