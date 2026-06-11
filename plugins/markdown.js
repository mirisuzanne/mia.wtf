import markdownIt from 'markdown-it';
import mdMark from 'markdown-it-mark';
import mdDefList from 'markdown-it-deflist';
import mdFootNote from 'markdown-it-footnote';

const mdIt = markdownIt({
  html: true,
  breaks: false,
  typographer: true,
}).use(mdMark)
  .use(mdDefList)
  .use(mdFootNote);

const block = (content) => (content ? mdIt.render(content.trim()) : '');
const inline = (content) => (content ? mdIt.renderInline(content.trim()) : '');

const splitString = '<!-- intro -->';
const splitContent = (content) => {
  if (content?.includes(splitString)) return content.split(splitString);
  if (content.length < 400) return [content, null];
  return [null, content];
}

const getSummary = (content) => splitContent(content)[0];
const getContent = (content) => splitContent(content)[1];

export default function (eleventyConfig) {
  eleventyConfig.addFilter('mdBlock', block);
  eleventyConfig.addFilter('mdInline', inline);

  eleventyConfig.addGlobalData('splitString', splitString);
  eleventyConfig.addFilter('splitContent', splitContent);
  eleventyConfig.addFilter('getSummary', getSummary);
  eleventyConfig.addFilter('getContent', getContent);

  eleventyConfig.setLibrary('md', mdIt);
  eleventyConfig.addPreprocessor(
    "webMD",
    "md,webc",
    (data, content) => (
      data.templateEngineOverride === 'webc' || data.parse === 'md'
      ? block(content)
      : content
    )
  );
};
