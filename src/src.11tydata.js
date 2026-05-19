const ogSrc = (data) => data.isOg ? null : `/_og${data.page.url}`;

export default {
  eleventyComputed: {
    ogSrc,
    listOf: (data) => data.listOf || data.index,
  },
};
