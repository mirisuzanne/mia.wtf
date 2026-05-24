import { UTCDate } from "@date-fns/utc";
import { format, subMonths } from 'date-fns';

const knownFormats = {
  day: 'd',
  month: 'MMMM',
  year: 'y',
  iso: 'yyyy-MM-dd',
  url: 'yyyy/MM/dd',
  default: 'yyyy/MM/dd',
};

export const formatDate = (date, style, opts = {}) => {
  const formats = {
    ...knownFormats,
    ...opts,
  };

  return format(date, formats[style] || style);
}

export const today = new UTCDate();
export const isFuture = (date) => new UTCDate(date) > today;
export const isRecent = (date) => new UTCDate(date) > subMonths(today, 1);
