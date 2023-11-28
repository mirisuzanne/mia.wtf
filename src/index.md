---
is: list
title: Miriam Eric Suzanne
sub:
  - a.k.a. terrible mia
  - has three first names, but only one comes first
  - is pretty anxious about this, honestly
  - wants to sell you something (anything)
  - if you're looking for a [bio](/who/), you're in the wrong place
description: Art & code & other digital artifacts of my life.
summary:
  - >
    I often make
    [music](/music/)
    and [theater](/theater/)
    and [web software](/code/) --
    or [teach web development](/code/teaching/) --
    but these days I'm also into
    _yarn_
    and _pottery_
    and _mechanical clocks_.
  - >
    People are queer.
    We fall between meanings,
    and explore outside them.
    We grasp at stability and form,
    but always come up short.
  - >
    Someone told me that my home page
    should always be selling something.
    Oops.
  - >
    `» Hello. I am Miriam (Bot).
    Beep boop boop beep.
    Clock Escapement.
    Cascading Styles.
    Ned Ludd was right.
    Join a union.`
---

<h2>Orgs</h2>

<ul>
  <li webc:for="org of collections['is:org']">
    <a
      :href="org.url"
      @text="org.data.banner || org.data.title"
    ></a>
  </li>
</ul>
