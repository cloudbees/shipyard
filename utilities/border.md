---
title: Border Utilities
description: Useful when you need to add a border to any object.
sass_file: shipyard/utilities/_border
css:
  col: col col-100 md:col-0 mb-8 md:mb-0
  demo: align-center bg-white p-16
---

{% include page-heading.html page=page %}

---

<div class="col-container">
  <div class="{{ page.css.col }}">
    <div class="{{ page.css.demo }} border border-thin">
      .border
    </div>
  </div>
  <div class="{{ page.css.col }}">
    <div class="{{ page.css.demo }} border-x border-thin">
      .border-x
    </div>
  </div>
  <div class="{{ page.css.col }}">
    <div class="{{ page.css.demo }} border-y border-thin">
      .border-y
    </div>
  </div>
  <div class="{{ page.css.col }}">
    <div class="{{ page.css.demo }} border-t border-thin">
      .border-t
    </div>
  </div>
  <div class="{{ page.css.col }}">
    <div class="{{ page.css.demo }} border-b border-thin">
      .border-b
    </div>
  </div>

  <div class="{{ page.css.col }}">
    <div class="{{ page.css.demo }} border-r border-thin">
      .border-r
    </div>
  </div>
  <div class="{{ page.css.col }}">
    <div class="{{ page.css.demo }} border-l border-thin">
      .border-l
    </div>
  </div>
</div>

```css
{% sass_output -%}
```

---

{% include css-stats.html %}
