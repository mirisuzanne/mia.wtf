const dF = require('date-fns/format');
const { utcToZonedTime } = require('date-fns-tz');

const year = () => `${new Date().getFullYear()}`;

module.exports = function (eleventyConfig, options = {}) {
  // https://date-fns.org/v2.21.2/docs/format
  const formats = {
    day: 'd',
    month: 'MMMM',
    year: 'y',
    iso: 'yyyy-MM-dd',
    url: 'yyyy/MM/dd',
    default: 'yyyy/MM/dd',
    ...options,
  };

  const formatDate = (date, format = 'default') =>
    dF(utcToZonedTime(date, '+00:00'), formats[format] || format);

  eleventyConfig.addShortcode('year', year);
  eleventyConfig.addFilter('year', year);
  eleventyConfig.addFilter('dateFormat', formatDate);
};
