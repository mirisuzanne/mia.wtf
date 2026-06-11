import removeMd from 'remove-markdown';

const shorter = (string, max) => {
  const dot = string.lastIndexOf('. ');
  const fade = string.lastIndexOf('… ');

  if (dot || fade) {
    const end = Math.max(dot, fade);
    const newString = string.substring(0, end);
    return (newString <= max)
      ? newString
      : shorter(newString, max);
  }

  const newString = string.substring(0, max);
  const space = newString.lastIndexOf(' ');
  return `${newString.substring(0, space)}…`
}

const description = (data) => {
  const max = 160;
  if (data.description) return data.description;

  if (data.summary) {
    if (typeof data.summary === 'string') return removeMd(data.summary);
    if (Array.isArray(data.summary)) return removeMd(data.summary[0]);
  }

  if (data.page.inputPath.endsWith('.md')) {
    const raw = data.page.rawInput.split('<!-- intro -->')[0];
    const pre = removeMd(raw);

    if (pre.length <= max) return pre;
    return shorter(pre, max);
  }

  if (typeof data.sub === 'string') return removeMd(data.sub);

  return data.site.description;
}

const baseURL = (data) => process.env.URL || `https://${data.site.domain}`;

export default {
  eleventyComputed: {
    baseURL,
    listOf: (data) => data.listOf || data.index,
    title: (data) => data.title || data.site.title,
    description,
  },
};
