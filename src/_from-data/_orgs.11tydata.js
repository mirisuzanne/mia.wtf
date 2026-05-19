export default {
  eleventyComputed: {
    role: (data) => data.src.role,
    logo: (data) => data.src.logo,
  },
}
