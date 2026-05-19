export default {
  eleventyComputed: {
    type: (data) => data.src.type,
    feature: (data) => data.src.feature,
    with: (data) => data.src.with,
    venue: (data) => data.src.venue,
    'bookmark-of': (data) => data.src.at,
  },
}
