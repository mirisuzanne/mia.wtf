const markdownIt = require('markdown-it');
const removeMd = require('remove-markdown');

const mdIt = markdownIt({
  html: true,
  typographer: true,
});

const block = (content) => (content ? mdIt.render(content.trim()) : '');
const inline = (content) => (content ? mdIt.renderInline(content.trim()) : '');
const mdRemove = (content) => (content ? removeMd(content.trim()) : '');

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter('md', block);
  eleventyConfig.addFilter('mdI', inline);
  eleventyConfig.addFilter('mdRemove', mdRemove);

  eleventyConfig.setLibrary('md', mdIt);
};
