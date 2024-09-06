import { format } from "date-fns";
import { utcToZonedTime } from 'date-fns-tz';

const year = () => `${new Date().getFullYear()}`;

export default function (eleventyConfig, options = {}) {
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

  const formatDate = (date, style = 'default') =>
    format(
      utcToZonedTime(date || new Date(), '+00:00'),
      formats[style] || style
    );

  eleventyConfig.addShortcode('year', year);
  eleventyConfig.addFilter('year', year);
  eleventyConfig.addFilter('dateFormat', formatDate);
};
