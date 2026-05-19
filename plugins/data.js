import { load } from 'js-yaml';

const shuffle = (items) => items
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);

const merge = (...args) => Object.assign({}, ...args);

const hasTag = (page, tag) => {
  const pageTags = [];

  if (page.data.tags) pageTags.push(...page.data.tags);
  if (page.data.src?.tags) pageTags.push(...page.data.src?.tags);

  return pageTags.includes(tag)
};
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

const wrapData = (item, key) => {
  const data = {};
  data[key] = item;
  return data;
};

const getList = (collection, opts = {}) => {
  const pages = collection || [];
  if (pages.length === 0) return pages;

  const tags = (typeof opts.tags === 'string') ? [opts.tags] : opts.tags;
  const subSet = tags ? withEveryTag(pages, tags) : pages;

  const filterOptions = ['feature', 'latest', 'current', 'past'];
  const hasFilters = Object.keys(opts).some(
    (filter) => filterOptions.includes(filter) && opts[filter]
  );

  const sorted = subSet
    .sort((a, b) => {
      if (onGoing(b)) {
        if (onGoing(a)) return b.data.date - a.data.date;
        return !opts.reverse;
      }
      if (onGoing(a)) return opts.reverse;

      const bEnd = b.data.end || b.data.date;
      const aEnd = a.data.end || a.data.date;

      return opts.reverse ? aEnd - bEnd : bEnd - aEnd;
    });

  const result = sorted
    .filter((item, i) => {
      if (item.data.private) return false;
      if (!hasFilters) return true;
      if (opts.current && onGoing(item)) return true;
      if (opts.past && !onGoing(item)) return true;
      if (opts.feature && item.data.feature) return true;
      if (opts.latest && i < opts.latest) return true;
      return false;
    });

  return opts.limit
    ? result.slice(0, opts.limit)
    : result;
}

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

  eleventyConfig.addAsyncFilter('getList', getList);

  eleventyConfig.addAsyncFilter('wrapData', wrapData);

  eleventyConfig.addDataExtension('yml, yaml', (contents) =>
    load(contents),
  );
}
