import { utcToZonedTime } from 'date-fns-tz';

export const zoneDate = (date) => utcToZonedTime(date || new Date(), '+00:00');
export const today = zoneDate();
export const isFuture = (date) => zoneDate(date) > today;
