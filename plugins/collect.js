const tagLink = (tag, collections) => {
  const splitTag = tag.split(':');
  const tagPage = splitTag[0] === 'area'
    ? collections.area.find((page) => page.data.area === splitTag[1])
    : collections.index.find((page) => page.data.index === tag)

  return tagPage
    ? tagPage.url
    : `/tags/${tag}/`;
};

export default (eleventyConfig) => {
  eleventyConfig.addAsyncFilter('tagLink', tagLink);

  eleventyConfig.addCollection('area', (collectionsAPI) =>
    collectionsAPI
      .getAll()
      .filter((item) => item.data.area),
  );

  eleventyConfig.addCollection('feed:posts', (collectionsAPI) =>
    collectionsAPI
      .getFilteredByTag('is:post')
      .filter((item) => !item.data.private)
      .sort((a, b) => b.date - a.date),
  );

  eleventyConfig.addCollection('index', (collectionsAPI) =>
    collectionsAPI
      .getAll()
      .filter((item) => item.data.index),
  );
}
