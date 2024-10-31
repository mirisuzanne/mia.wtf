import { load } from 'js-yaml';

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

const tagType = (tags, prefix) => tags
  .filter((tag) => tag.startsWith(prefix))
  .map((tag) => tag.replaceAll(`${prefix}:`, ''));

const findTagType = (tags, prefix) => tagType(tags, prefix)[0];
const pCategory = (tags, prefixList) => {
  const list = prefixList
    .map((pre) => findTagType(tags, pre))
    .filter(Boolean);
  return list ? list.join(':') : null;
}

const onGoing = (page) => page.data?.end === 'ongoing';
const pageName = (page) => page.data.banner || page.data.title || page.fileSlug;
const findIndex = (pages, tag) => pages.find((page) => page.data.index === tag);

export default (eleventyConfig) => {
  eleventyConfig.addAsyncFilter('shuffle', shuffle);
  eleventyConfig.addAsyncFilter('merge', merge);

  eleventyConfig.addAsyncFilter('hasTag', hasTag);
  eleventyConfig.addAsyncFilter('everyTag', everyTag);
  eleventyConfig.addAsyncFilter('anyTag', anyTag);

  eleventyConfig.addAsyncFilter('withTag', withTag);
  eleventyConfig.addAsyncFilter('withEveryTag', withEveryTag);
  eleventyConfig.addAsyncFilter('withAnyTag', withAnyTag);

  eleventyConfig.addAsyncFilter('tagType', tagType);
  eleventyConfig.addAsyncFilter('findTagType', findTagType);
  eleventyConfig.addAsyncFilter('pCategory', pCategory);

  eleventyConfig.addAsyncFilter('onGoing', onGoing);
  eleventyConfig.addAsyncFilter('pageName', pageName);
  eleventyConfig.addAsyncFilter('findIndex', findIndex);

  eleventyConfig.addDataExtension('yml, yaml', (contents) =>
    load(contents),
  );
}
