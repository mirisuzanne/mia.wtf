---
layout: is/markdown
title: What's in a website?
sub: The nerds call this a [colophon](https://en.wikipedia.org/wiki/Colophon_(publishing))
summary:
  This site relies on the
  [Remix Icon](https://remixicon.com) set --
  which is free,
  and doesn't require any attribution.
  That sentence was entirely discretionary,
  and literally _uncalled for_ --
  but I have to write it down somewhere,
  or I'll forget.
---

I used more than my share of
<abbr>HTML</abbr> & <abbr>CSS</abbr>,
with some <abbr>JS</abbr> thrown in _for good luck_.
Don't tell anyone,
but there's one <abbr>CSS</abbr> feature
that I _invented, and then used_!
That feels like cheating. Is that cheating?

## Design

I love sparse, bold typography.
But I also love bright colors and flare.
I hope this site has some of both.
I started the process
with a few priorities in mind:

- Eliminate all site-wide furniture,
  especially at the top of the page.
  No navigation, no running header,
  just straight into the content.
  I'm fighting my own instincts
  to tell you _everything I've ever done_
  all at once
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

I'm not always happy
with my skill as a designer,
but I am very happy with those goals.
And I hope you'll spend some time
customizing my website to your own liking.
Choose the settings you like best,
and change them any time you want.

Ok, _blur_ is mostly a joke.
But some days I feel like photocopier vibes,
with a bit of the sepia filter.
Other days I need that slightly blurred
terminal pc look,
with a bit of hue shift (and even more sepia).

Let's be honest,
all the vibes look better
with a bit of sepia.
Maybe I'll add an aging effect to old pages,
so they turn sepia over time by default.

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

## Fonts

Gosh, it was hard to pick fonts,
there are so many good ones.

I didn't want anything
designed by a massive tech company,
or associated with a specific operating system.
In the end, I went with
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
Now I get Volume TC any time I set my
vibes to the browser default.

## Inspiration

These sites were _on my mind_
while I was working:

[PublicDomainReview.org](https://publicdomainreview.org)
~ A good source for inspiration of any kind,
  but it's also where I first encountered
  (or noticed) the Alegreya fonts.

[FromJason.xyz](https://www.fromjason.xyz/)
~ Both the typography and voice
  fit my particular mood.
  I had already settled on my sparse site banner,
  with only a home link,
  but Jason's design helped validate that choice.

[ZachLeat.com](https://www.zachleat.com/)
~ Scroll down to the footer,
  where you can turn off web fonts
  and <abbr>CSS</abbr>
  with a little switch.

[SlashPages.net](https://slashpages.net)
~ The only navigation that I really need,
  and I put it in the footer.

[MXB.dev](https://mxb.dev)
~ What an excellent theme picker

[Tink.uk](https://tink.uk) & [BaldurBjarnason.com](https://www.baldurbjarnason.com)
~ Simple, elegant typography

[HeydonWorks.com](https://heydonworks.com)
~ Black and white and bold

## Custom Elements

Custom elements are just <abbr>HTML</abbr> elements
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
  You know that dice icon that shows up a few times
  on my home page and elsewhere?
  I went with a different visual metaphor here,
  but maybe I should go looking for
  an eight-ball icon.

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
