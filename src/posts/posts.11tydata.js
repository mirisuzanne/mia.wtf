import { format } from "date-fns";
import { utcToZonedTime } from 'date-fns-tz';

const dateToUrl = (date) => format(
    utcToZonedTime(date, '+00:00'),
    'yyyy/MM/dd'
  );

const postUrl = (data) => data
  ? `/${dateToUrl(data.date || data.page.date)}/${data.slug || data.page.fileSlug}/index.html`
  : false;

export default {
  tags: ['is:post'],
  permalink: (data) => postUrl(data),
}
