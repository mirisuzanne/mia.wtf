---
title: Music
sub: I like getting quiet and then loud
index: art:music
albums: [Holes, Whiskey, Jane/Eyre]
---

As a child of the 80s
I wanted to learn saxophone,
so my parents got me a clarinet.
Now I mostly play bass,
or tell stories over rolling soundscapes.

<!-- intro -->

<template webc:nokeep webc:for="name of albums">
  <album-tracks
    :@album="this.artifacts.find((item) => item.title.includes(name))"
    :@level="2"
  ></album-tracks>
</template>
