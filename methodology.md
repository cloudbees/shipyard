---
title: Mobile-first Methodology
description: Shipyard is a CSS Framework built with a mobile-first approach to front-end development. This means that by default, a class applies to all screen sizes unless otherwise specifed. In order to make something truly responsive, you need to first think about how you want it to look on all screen sizes, and then using the modifiers `(sm..xl)` to define how the style will change as the screen size grows.
---

{% include page-heading.html page=page %}

---

## Responsive Demo

<div class="box-secondary p-8 sm:p-16 md:p-16 lg:p-24 align-center">
  <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
    <span class="inline sm:hidden">.btn-xs</span>
    <span class="hidden sm:inline md:hidden">.sm:btn-sm</span>
    <span class="hidden md:inline lg:hidden">.md:btn-md</span>
    <span class="hidden lg:inline xl:hidden">.lg:btn-lg</span>
    <span class="hidden xl:inline">.xl:btn-xl</span>
  </button>
</div>
