import { format } from "date-fns";
import { utcToZonedTime } from 'date-fns-tz';

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

  const zoneDate = (date) => utcToZonedTime(date || new Date(), '+00:00');
  const today = zoneDate();
  const applyFormat = (date, style) => format(date, formats[style] || style);
  const year = () => applyFormat(today, 'year');


  const recentDate = (date) => {
    const zoned = zoneDate(date);
    const nowParts = applyFormat(today, 'iso').split('-');
    const postParts = applyFormat(zoned, 'iso').split('-');

    if (nowParts[0] !== postParts[0]) {
      return applyFormat(zoned, 'MMM, yyyy');
    }

    return applyFormat(zoned, 'MMM dd');
  };

  const formatDate = (date, style = 'default') => {
    return style === 'recent'
      ? recentDate(date)
      : applyFormat(zoneDate(date), style);
  };

  eleventyConfig.addShortcode('year', year);
  eleventyConfig.addFilter('year', year);
  eleventyConfig.addFilter('dateFormat', formatDate);
};
