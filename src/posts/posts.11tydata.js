import { format } from "date-fns";
import { utcToZonedTime } from 'date-fns-tz';

const dateToUrl = (date) => format(
    utcToZonedTime(date, '+00:00'),
    'yyyy/MM/dd'
  );

const postUrl = (page) => page
  ? `/${dateToUrl(page.date)}/${page.fileSlug}/index.html`
  : false;

export default {
  tags: ['is:post'],
  layout: 'is/markdown',
  permalink: (data) => postUrl(data.page),
}
