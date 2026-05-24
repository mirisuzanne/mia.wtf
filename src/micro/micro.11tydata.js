import { UTCDate } from "@date-fns/utc";
import { formatDate } from '../../plugins/time-utils.js';

export const eleventyComputed = {
  title: (data) => data.title
    || `Note: ${formatDate(new UTCDate(data.date), 'MMMM d, y')}`,
};
