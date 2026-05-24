import { UTCDate } from "@date-fns/utc";
import { formatDate } from '../../plugins/time-utils.js';

const dateToUrl = (date) => formatDate(new UTCDate(date), 'url');

const postUrl = (data) => data
  ? `/${dateToUrl(data.date || data.page.date)}/${data.slug || data.page.fileSlug}/index.html`
  : false;

export default {
  tags: ['is:post'],
  permalink: (data) => postUrl(data),
}
