export default {
  eleventyComputed: {
    title: (data) => data.src.title,
    sub: (data) => data.src.sub,
    date: (data) => data.src.date,
    end: (data) => data.src.end,
    hero: (data) => data.src.hero,
    at: (data) => data.src.at,
  },
}
