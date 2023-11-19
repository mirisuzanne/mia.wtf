module.exports = {
  eleventyComputed: {
    ogSrc: data => {
      return data.isOg ? null : `/_og${ data.page.url }`;
    },
  }
};
