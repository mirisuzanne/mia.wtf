import { UTCDate } from "@date-fns/utc";
import { formatDate, today, isFuture, isRecent } from './time-utils.js';

export default function (eleventyConfig, options = {}) {
  const applyFormat = (date, style) => formatDate(date, style, options);
  const year = () => applyFormat(today, 'year');

  const recentDate = (date) => {
    const zoned = new UTCDate(date);
    const nowParts = applyFormat(today, 'iso').split('-');
    const postParts = applyFormat(zoned, 'iso').split('-');

    if (nowParts[0] !== postParts[0]) {
      return applyFormat(zoned, 'MMM, yyyy');
    }

    return applyFormat(zoned, 'MMM dd');
  };

  const recentOrFullFormat = (date, style = 'default') => {
    return style === 'recent'
      ? recentDate(date)
      : applyFormat(new UTCDate(date), style);
  };

  eleventyConfig.addShortcode('year', year);
  eleventyConfig.addFilter('year', year);
  eleventyConfig.addFilter('dateFormat', recentOrFullFormat);
  eleventyConfig.addFilter('isFuture', isFuture);
  eleventyConfig.addFilter('isRecent', isRecent);
};
