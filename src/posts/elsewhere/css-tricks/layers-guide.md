---
card: large
title: A Complete Guide to CSS Cascade Layers
at: https://css-tricks.com/css-cascade-layers/
date: 2022-02-21
tags:
  - org:csswg
  - org:oddbird
  - cascade layers
  - cascade
  - writing
hero:
  src: 2022/cascade-layers-guide.png
  alt: |
    fragment of an inverted triangle with the cascade --
    cascade layers are highlighted below element-attached styles
    and above specificity
---

Cascade layers are a new CSS feature
that allows us to define
explicit contained layers of specificity.

<!-- intro -->

We now have full control over
which styles take priority in a project
without relying on specificity hacks or `!important`.
This guide is intended to help you fully understand
what cascade layers are for,
how and why you might choose to use them,
the current levels of support,
and the syntax.
