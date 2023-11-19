const slugify = require('slugify');
const markdownIt = require('markdown-it');
const mdAnchor = require('markdown-it-anchor');
const removeMd = require('remove-markdown');

const slug = (str) => {
  if (!str) {
    return;
  }

  return slugify(str, {
    lower: true,
    strict: true,
    remove: /["]/g,
  });
}

const mdIt = markdownIt({
  html: true,
  typographer: true,
}).use(mdAnchor, {
  permalink: mdAnchor.permalink.ariaHidden({
    class: 'md-anchor',
    space: false,
  }),
  level: [2, 3],
  slugify: slug,
});

const block = (content) => (content ? mdIt.render(content.trim()) : '');
const inline = (content) => (content ? mdIt.renderInline(content.trim()) : '');
const mdRemove = (content) => (content ? removeMd(content.trim()) : '');

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter('slug', slug);
  eleventyConfig.addFilter('md', block);
  eleventyConfig.addFilter('mdI', inline);
  eleventyConfig.addFilter('mdRemove', mdRemove);

  eleventyConfig.setLibrary('md', mdIt);
};
