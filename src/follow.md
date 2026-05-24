---
templateEngineOverride: webc
title: Follow my website
sub: Wherever it goes
listOf: feed
---

At this point there's only a single RSS feed,
but maybe I'll add more in the future.

<!-- intro -->

<a :href="$data.site.feed" rel="alternate">
  <rss-fill></rss-fill>
  <link-text>RSS feed</link-text>
</a>

<div webc:nokeep>
<channel-list
  :@pages="getList($data.collections['is:channel'], {
    current: true,
  })"
><p>Other places to follow me…</p></channel-list>
</div>
