export default {
  eleventyComputed: {
    title: (data) => data.src.title,
    sub: (data) => data.src.sub,
    date: (data) => data.src.date,
    slug: (data) => data.src.slug,
    description: (data) => data.src.description || data.src.caption,
  },
}
