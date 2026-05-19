export default {
  eleventyComputed: {
    type: (data) => data.src.type,
    feature: (data) => data.src.feature,
  },
}
