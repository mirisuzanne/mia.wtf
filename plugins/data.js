const yaml = require('js-yaml');

const shuffle = (items) => items
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);

const merge = (...args) => Object.assign({}, ...args);

const hasTag = (page, tag) => (page.data.tags || []).includes(tag);
const everyTag = (page, tags) => (tags || []).every((tag) => hasTag(page, tag));
const anyTag = (page, tags) => (tags || []).every((tag) => hasTag(page, tag));

const withTag = (pages, tag) => pages.filter((page) => hasTag(page, tag));
const withEveryTag = (pages, tags) => pages.filter((page) => everyTag(page, tags));
const withAnyTag = (pages, tags) => pages.filter((page) => anyTag(page, tags));

module.exports = (eleventyConfig) => {
  eleventyConfig.addAsyncFilter('shuffle', shuffle);
  eleventyConfig.addAsyncFilter('merge', merge);

  eleventyConfig.addAsyncFilter('hasTag', hasTag);
  eleventyConfig.addAsyncFilter('everyTag', everyTag);
  eleventyConfig.addAsyncFilter('anyTag', anyTag);

  eleventyConfig.addAsyncFilter('withTag', withTag);
  eleventyConfig.addAsyncFilter('withEveryTag', withEveryTag);
  eleventyConfig.addAsyncFilter('withAnyTag', withAnyTag);

  eleventyConfig.addDataExtension('yml, yaml', (contents) =>
    yaml.load(contents),
  );
}
