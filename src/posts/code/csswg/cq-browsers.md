---
title: Container queries in browsers!
sub: and a prototype of style queries as well
date: 2022-09-14
tags:
  - container queries
hero:
  src: 2022/2-weeks-2-browsers.jpg
  alt: |
    2 weeks 2 browser engines
    scrawled in red ink
    over a poster of fast cars and neon lights
    originally saying 2 fast 2 furious.
---

After nearly 15 years
as a highly-requested feature in CSS --
and 15 years being told it was impossible --
(size) Container Queries and units
have shipped in both Chrome/Edge 105,
and Safari 16!
Firefox is not far behind.

<!-- intro -->

- [Chrome 105](https://developer.chrome.com/blog/new-in-chrome-105/)
  [<date-time date="2022-08-30"></date-time>]
- [Safari 16](https://webkit.org/blog/13152/webkit-features-in-safari-16-0/)
  [<date-time date="2022-09-12"></date-time>]

If you want to start using these features
(I recommend it!)
just
[make sure you're using the right syntax][syntax]!
Some things have changed
between the first prototype
and the final version that's shipping in browsers.
But don't worry --
_it's stable now, and won't be changing again_!

[syntax]: https://www.oddbird.net/2022/08/18/cq-syntax/

Both Chrome 105
and Safari 16
come with an impressive list
of new features
in addition to container queries.
The main highlights are the
[`:has()` selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:has)
(in both) and
[subgrid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Subgrid)
(in Safari).
But I recommend digging through
the release notes linked above.

(For more about container size
queries and units,
see my list of
[Container Query Resources](/specs/contain-3/#resources).)

## Style Queries Prototype

Meanwhile,
[Chrome Canary](https://www.google.com/chrome/canary/)
&
[Edge Canary](https://www.microsoftedgeinsider.com/en-us/download)
have both shipped a prototype
of _style queries_.
Rather than measuring the dimensions
of an element,
style queries measure the
_computed value_ of a given property
on that element.

To test the feature:
- Download either Canary browser.
- Navigate to `about://flags/#enable-experimental-web-platform-features`.
- Set it to `Enabled`.
- Restart the browser.

For now
style queries are limited to strict equality
(we can't query number ranges,
or partial values) --
and the prototype is limited to
custom properties.
Even with those limitations,
it's a pretty powerful feature.
Here's my first experiment,
establishing two 'button themes' --
`mia` and `mia-plus` --
toggled by a single custom property:

<iframe
  webc:is="code-pen"
  src="https://codepen.io/miriamsuzanne/embed/abGBNNx"
  title="Style query button themes"
  height="600"
  default-tab="css,result"
></iframe>

I'm excited to experiment with this more.
It should enable most of the use-cases
in Lea Verou's request for
[_Higher Level Custom Properties_](https://github.com/w3c/csswg-drafts/issues/5624),
and I'm excited to see
what else people come up with.
If you make any demos,
please send them my way!

## Browser Support for Size Queries & Units

<figure>
  <can-i-use feature="css-container-queries"></can-i-use>
  <can-i-use feature="css-container-query-units"></can-i-use>
</figure>
