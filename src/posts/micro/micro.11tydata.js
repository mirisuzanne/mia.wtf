import { format } from "date-fns";
import { utcToZonedTime } from 'date-fns-tz';

const zoneDate = (date) => utcToZonedTime(date || new Date(), '+00:00');

export const eleventyComputed = {
  title: (data) => data.title
    || `Note: ${format(zoneDate(data.date), 'yyyy-MM-dd')}`,
};
