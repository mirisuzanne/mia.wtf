import markdownIt from 'markdown-it';
import mdMark from 'markdown-it-mark';
import mdDefList from 'markdown-it-deflist';
import removeMd from 'remove-markdown';

const mdIt = markdownIt({
  html: true,
  breaks: false,
  typographer: true,
}).use(mdMark).use(mdDefList);

const block = (content) => (content ? mdIt.render(content.trim()) : '');
const inline = (content) => (content ? mdIt.renderInline(content.trim()) : '');
const mdRemove = (content) => (content ? removeMd(content.trim()) : '');

export default function (eleventyConfig) {
  eleventyConfig.addFilter('md', block);
  eleventyConfig.addFilter('mdI', inline);
  eleventyConfig.addFilter('mdRemove', mdRemove);

  eleventyConfig.setLibrary('md', mdIt);
};
