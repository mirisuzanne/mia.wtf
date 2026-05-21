---
title: What's in a website?
sub: The nerds call this a [colophon](https://en.wikipedia.org/wiki/Colophon_(publishing))
---

This site relies on the
[Remix Icon](https://remixicon.com) set,
which is free
and doesn't require any attribution.
That sentence is entirely discretionary --
_uncalled for_ --
but if I don't write it down,
I'll forget.

<!-- intro -->

To build this site,
I used more than my share of
<abbr>HTML</abbr> & <abbr>CSS</abbr>,
with some <abbr>JS</abbr> thrown in _for good luck_.
Don't tell anyone,
but I invented several new <abbr>CSS</abbr> features,
_and then used them here_!
That feels like cheating.
Is that cheating?

This was an experiment
in raw, untamed, _pure_ CSS.
But purity is for suckers.
Several things
would have been easier with [Sass](https://sass-lang.com).

## Design

I love sparse, bold typography.
But I also love bright colors and flare.
I hope this site has some of both.
I started the process
with a few priorities in mind:

- Eliminate furniture
  at the top of the page.
  Minimal navigation or running header,
  just straight into hyper-text content.
  I'm fighting my own instincts
  to tell you _everything I've ever done_
  when you land on an article
  about _the `hwb()` color format_ or whatever.
- Move a 'cold open' above the title,
  like it's a podcast or something.
- Provide extreme (and persistent)
  customization from a minimal baseline.
  Not as a temporary gimmick,
  but something you might choose
  instead of switching to 'reader mode'.
  The web is made to be customized.

Ok, the `blur` filter is mostly a gimmick.
But I recommend adding a small blur
to the terminal vibes.
And let's be honest,
all the vibes look better
with a bit of sepia.
Maybe I should add an aging effect to pages,
so they turn sepia over time?
That was suggested as a CSS feature
in the [original proposal](https://www.w3.org/People/howcome/p/cascade.html).

Did you know that most browsers will let you choose
your default fonts?
There are great sites out there
that will let you <abbr>BYOF</abbr>.
Make the web your own!
On this site,
you have that as an option.

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
by _Juan Pablo del Peral_ at _HT Fonts_,
along with
[Chivo Mono](https://www.omnibus-type.com/variable-fonts/#chivo-mono)
variable by _Héctor Gatti_ at _Omnibus-Type_.

I was really tempted by the
[Volume TC](https://tomchalky.com/product/volume-handcrafted-trio-font-family/)
font family.
I'm a sucker for old style serifs
with a hand-drawn feel,
and Tom Chalky does nice work.
So I bought that for myself,
and set it as the browser default.
I love when sites use my preference!

## Custom Elements

Custom elements are just <abbr>HTML</abbr> tags
that you make up as you go.
You can introduce them to the browser _formally_ if you want,
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

[Track-List](https://github.com/mirisuzanne/track-list)
~ Takes a list of audio files,
  and provides combined
  play/pause and previous/next controls.

## Tools

I also used some tools from other people
(with permission):

[Eleventy](https://www.11ty.dev/) aka _Build Awesome_
~ A flexible static site generator,
  with a bunch of great plugins.
  I used the plugins for RSS, fetch,
  responsive images, syntax highlighting, and WebC --
  along with the screenshots API
  for creating open-graph images on the fly.

[Remix Icon](https://remixicon.com)
~ I wanted to find good looking icons
  that don't come from a large corporate design system.

[Wakamai Fondue](https://wakamaifondue.com)
~ A great resource for inspecting font files,
  and learning what your fonts can do!

[Sorted Colors](https://enes.in/sorted-colors/)
~ The [CSS Color Specification](https://www.w3.org/TR/css-color/#named-colors)
  strongly discourages the use of named colors.
  But CSSWG can't tell me what to do.
  It was nice to have them sorted for me.

Corporate Stuff
~ I have no love for
  Netlify or Github or <abbr>NPM</abbr>,
  but they are tools that I still use sometimes
  for building and publishing websites.
  I might be looking for new options.
