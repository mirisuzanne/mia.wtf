import { UTCDate } from "@date-fns/utc";
import { formatDate, today, isFuture, isRecent } from './time-utils.js';

import { DateTime } from "luxon";

const TIME_ZONE = "America/Denver";

export default function (eleventyConfig, options = {}) {
	eleventyConfig.addDateParsing(function(dateValue) {
		let localDate;
		if(dateValue instanceof Date) { // and YAML
			localDate = DateTime.fromJSDate(dateValue, { zone: "utc" }).setZone(TIME_ZONE, { keepLocalTime: true });
		} else if(typeof dateValue === "string") {
			localDate = DateTime.fromISO(dateValue, { zone: TIME_ZONE });
		}
		if (localDate?.isValid === false) {
			throw new Error(`Invalid \`date\` value (${dateValue}) is invalid for ${this.page.inputPath}: ${localDate.invalidReason}`);
		}
		return localDate;
	});

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
