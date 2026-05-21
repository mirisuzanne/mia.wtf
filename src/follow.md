---
templateEngineOverride: webc
title: Follow my website
sub: Wherever it goes
---


At this point there's only a single
<a :href="this.site.feed" rel="alternate">
  <rss-fill></rss-fill>
  <link-text>rss</link-text></a>,
but maybe I'll add more in the future.

<!-- intro -->

<div webc:nokeep>
<channel-list
  :@pages="getList($data.collections['is:channel'], {
    current: true,
  })"
><p>Other places to follow me…</p></channel-list>
</div>
