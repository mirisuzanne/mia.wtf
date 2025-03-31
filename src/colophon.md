---
title: What's in a website?
sub: The nerds call this a [colophon](https://en.wikipedia.org/wiki/Colophon_(publishing))
---

This site relies on the
[Remix Icon](https://remixicon.com) set,
which is free
and doesn't require any attribution.
That sentence was entirely discretionary --
literally _uncalled for_ --
but I have to write it down somewhere,
or I'll forget.

<!-- intro -->

To build this site,
I used more than my share of
<abbr>HTML</abbr> & <abbr>CSS</abbr>,
with some <abbr>JS</abbr> thrown in _for good luck_.
Don't tell anyone,
but I invented a new <abbr>CSS</abbr> feature,
_and then used it here_!
That feels like cheating. Is that cheating?

This was an experiment
in raw, untamed, _pure_ CSS.
But purity is for suckers.
It would have been simpler with [Sass](https://sass-lang.com).

## Design

I love sparse, bold typography.
But I also love bright colors and flare.
I hope this site has some of both.
I started the process
with a few priorities in mind:

- Eliminate furniture
  at the top of the page.
  No navigation, no running header,
  just straight into the content.
  I'm fighting my own instincts
  to tell you _everything I've ever done_
  when you land on an article
  about _the `hwb()` color format_ or whatever.
- Move the 'cold open' above the title,
  so we get right to the point.
  I like cold opens in other media,
  why don't we use them on websites?
- Provide extreme (and persistent)
  customization from a minimal baseline.
  Not as a temporary gimmick,
  but something you might choose
  instead of switching to 'reader mode'.
  The web is made to be customized.

Ok, the `blur` filter is _mostly_ a joke.
But I recommend adding a small blur
to the terminal vibes.
And let's be honest,
all the vibes look better
with a bit of sepia.
Maybe I should add an aging effect to pages,
so they turn sepia over time by default?

Did you know that most browsers will let you choose
your default fonts?
There are great sites out there
(like Wikipedia)
that will use the fonts you set.
Make the web your own!
On this site,
the browser vibes
let you <abbr>BYOF</abbr>
(bring your own fonts).

I'm not always happy
with my skill as a designer,
but I am very happy with those goals.

## Fonts

Gosh, it was hard to pick fonts.
There are so many good ones.

I didn't want anything
designed by a massive tech company,
or associated with a specific operating system.
In the end, I chose
[Alegreya](https://www.huertatipografica.com/en/fonts/alegreya-ht-pro)
variable and
[Alegreya Sans](https://www.huertatipografica.com/en/fonts/alegreya-sans-ht)
by _Juan Pablo del Peral_,
along with
[Victor Mono](https://rubjo.github.io/victor-mono/) variable
by _Rune Bjørnerås_.

I was really tempted by the
[Volume TC](https://tomchalky.com/product/volume-handcrafted-trio-font-family/)
font family.
I'm a sucker for old style serifs
with a hand-drawn feel,
and Tom Chalky does nice work.
I bought it anyway,
and set it as my browser default.
I love when sites use my preference!

## Inspiration

I opened these sites on occasion,
while I was working:

[PublicDomainReview.org](https://publicdomainreview.org)
~ A good source for inspiration of any kind,
  but it's also where I first encountered
  (or noticed) the Alegreya fonts.

[SlashPages.net](https://slashpages.net)
~ The only navigation that I really need,
  and I put it in the footer.

[David Darnes](https://darn.es)
~ What web components has David built recently,
  and can I use them?

[ZachLeat.com](https://www.zachleat.com/)
~ I bet Zach has some good components too.
  Scroll down to the footer,
  and you can turn off the <abbr>CSS</abbr>
  with a little switch.

[MXB.dev](https://mxb.dev)
~ What an excellent theme picker

[HeydonWorks.com](https://heydonworks.com)
~ Black and white and bold

## Custom Elements

Custom elements are just <abbr>HTML</abbr> tags
that you make up as you go.
You can introduce them to the browser if you want,
but it's not required.
I relied heavily on custom elements
for this site,
both formal and informal.
Here are a few that I've published,
in case you want to use them:

[Ground-Control](https://github.com/mirisuzanne/ground-control)
~ A set of custom elements
  that take some input
  and broadcast the selected value --
  controlling <abbr>HTML</abbr> attributes
  & <abbr>CSS</abbr> properties on other elements.
  I used all three
  (`<input-control>`, `<toggle-control>`, and `<switch-control>`)
  to create the theme controls for the site,
  then extended them to create
  `<black-out>` (for erasure poetry)
  and `<dialog-toggle>`
  (for opening and closing <abbr>HTML</abbr> `<dialog>` elements)

[Eight-Ball](https://github.com/mirisuzanne/eight-ball)
~ Displays a random selection
  from a group of options,
  and allows the reader to shake things up.
  I went with a 'dice' icon on this site,
  because that's what I found.
  Sorry for the mixed metaphor.

## Tools

I also used some tools from other people
(with permission):

[Eleventy](https://www.11ty.dev/)
~ A flexible static site generator,
  with a bunch of great plugins.
  I also used the plugins for RSS,
  fetch,
  responsive images,
  syntax highlighting,
  and WebC --
  along with the screenshots API
  for creating open-graph images on the fly.

[WebC](https://www.11ty.dev/docs/languages/webc/)
~ Is an <abbr>HTML</abbr> template language
  inspired by web component syntax,
  and integrated with Eleventy.

[Remix Icon](https://remixicon.com)
~ I wanted to find good looking icons
  that don't come from a large corporate design system.
  They don't have an eight-ball icon,
  I looked.

[Wakamai Fondue](https://wakamaifondue.com)
~ A great resource for inspecting font files,
  and learning what your fonts can do!

[Sorted Colors](https://enes.in/sorted-colors/)
~ The [CSS Color Specification](https://www.w3.org/TR/css-color/#named-colors)
  strongly encourages us _not_ to use named colors.
  I used them anyway,
  it was nice to have them sorted for me.

[Fontsource](https://fontsource.org/)
~ Was really unnecessary here,
  but I used it anyway.
  It's a source, where you can look at
  (and download) fonts.

Corporate Stuff
~ I have no love for
  Netlify or Github or <abbr>NPM</abbr>,
  but they are tools that I rely on
  for building and publishing websites.
  Visual Studio Code is a text editor
  that works when I need to edit text.
