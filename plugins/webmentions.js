const webMentionsData = async () => {
  const token = process.env.WEBMENTION_IO_TOKEN;
  const domain = process.env.DOMAIN_NAME;
  const url = `https://webmention.io/api/mentions.jf2?domain=${domain}&token=${token}`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      const feed = await response.json();
      return feed.children;
    }
  } catch (err) {
    console.error(err);
    return null
  }
}

export default (eleventyConfig) => {
  eleventyConfig.addGlobalData('webMentions', webMentionsData());

  eleventyConfig.addFilter('mentionsByUrl', (webMentions, url) =>
    webMentions.filter((webMention) => webMention['wm-target'] === url)
  );

  eleventyConfig.addFilter('getLikes', (webMentions) =>
    webMentions.filter((webMention) => webMention['wm-property'] === 'like-of')
  );

  eleventyConfig.addFilter('getReplies', (webMentions) =>
    webMentions.filter(
      (webMention) => webMention['wm-property'] === 'in-reply-to'
    )
  );
}
