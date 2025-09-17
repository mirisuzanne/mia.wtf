import pluginRss from "@11ty/eleventy-plugin-rss";

const rssItemTitle = (post) => post.data.venue
  ? `${post.data.venue}: ${post.data.title}`
  : post.data.title;

export default function (eleventyConfig) {
  eleventyConfig.addFilter('rssItemTitle', rssItemTitle);
}
