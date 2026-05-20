export default {
  eleventyComputed: {
    type: (data) => data.src.type,
    feature: (data) => data.src.feature,
    with: (data) => data.src.with,
    venue: (data) => data.src.venue,
    adr: (data) => data.src.adr,
    'bookmark-of': (data) => data.src.at,
  },
}
