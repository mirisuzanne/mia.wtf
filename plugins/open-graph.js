import pluginRss, { absoluteUrl } from '@11ty/eleventy-plugin-rss';

const ogImage = (image, url) => {
  if (image) {
    return `/img/_og/${image}`;
  }

  const api = 'https://v1.screenshot.11ty.dev/';
  const baseUrl = process.env.URL || 'https://miriamsuzanne.com';
  const encoded = encodeURIComponent(`${baseUrl}${url}`);
  return `${api}${encoded}/opengraph/`;
}

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addFilter('ogImage', ogImage);
  eleventyConfig.addLiquidFilter('absoluteUrl', absoluteUrl);
};
