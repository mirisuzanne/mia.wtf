export default {
  eleventyComputed: {
    title: (data) => data.src?.title || data.title,
    sub: (data) => data.src?.sub || data.sub,
    date: (data) => data.src?.date || data.date,
    end: (data) => data.src?.end || data.end,
    hero: (data) => data.src?.hero || data.hero,
    at: (data) => data.src?.at || data.at,
  },
}
