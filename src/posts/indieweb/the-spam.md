---
title: The spam has arrived
sub: Now I remember why we stopped putting comment forms on everything.
date: 2022-06-09
tags:
  - webmentions
  - code
callout:
  - date: 2022-06-11
    update: |
      There is a
      [shared blocklist](https://github.com/sw-yx/domainblocklist)
      maintained by
      [Shawn Wang](https://www.swyx.io/),
      which I'm now using.
---

The other day, I posted an article about
[implementing webmentions](/2022/06/04/indiweb/)
on this site.
Today, I'm battling an endless stream
of spam.

<!-- intro -->

I first noticed it on a Netlify deploy preview.
A faceless mention from 'admin'
at 'imoneyhub'.

<img
  webc:is="u-img"
  src="2022/mention-spam.jpg"
  alt="screenshot: admin, June 9, 2022, mentioned this in imoneyhub.com">

I assumed right away it must be spam,
but I'm glad I clicked through.
It turns out
[Geoff Graham](https://css-tricks.com/author/geoffgraham/)
wrote
[a lovely CSS-Tricks reply](https://css-tricks.com/am-i-on-the-indieweb-yet/)
about his own struggle
setting up webmentions,
and some of the Wordpress plugins
that can help.

But I didn't see a mention from CSS-Tricks
(at least not right away).
Instead,
Geoff's post has been re-posted by 'admin'
on a long list of random URLs,
all (web)mentioning my original post.
The webmention.io dashboard shows me all of them
(with a few legit mentions scattered through):

<img
  webc:is="u-img"
  src="2022/mention-spam-list.jpg"
  alt="screenshot: Recent Webmentions, and a small-print list of faceless random urls, and a few blurred-out legit mentions">

All of these mentions made it into my local cache,
but only one made it into a build.
It seems the rest were caught in a simple filter
that came from
Max Böck's
[Eleventy Webmentions](https://github.com/maxboeck/eleventy-webmentions)
starter.
It's a quick JS function
that ensures every mention has an author name
and a timestamp.

```js
// only allow webmentions that have an author name and a timestamp
const checkRequiredFields = (entry) => {
  const { author, published } = entry;
  return Boolean(author) && Boolean(author.name) && Boolean(published);
};
```

That caught all but one of the spam mentions
('admin' made it through!),
but it also caught the mention from CSS-Tricks,
which doesn't include Geoff's info,
a timestamp,
or even content.
So I already have both
false negatives and false positives
in my filtering. Fun!

I can go through these by hand,
and delete/block each one in the dashboard.
I also have to delete them in my local cache.
And while I'm at it,
I've added author info in the cache for Geoff?
We'll see if that sticks.
But there has to be a better way, right?

Right?

_There has to be a better way, right?_
