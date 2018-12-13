---
title: Shipyard Boxes
description: Boxes should be used to grab a draw attention to specific groups of content, and are most useful to linked content. By default, all boxes need to have the base class of `.box` in order to function properly.
sass_file: shipyard/components/_boxes
css:
  box:
    default: bg-color white rounded box-shadow
    linked: bg-color white hover:white rounded box-shadow hover:box-shadow-hover ease-300ms cursor-pointer
    active: bg-color white hover:white rounded box-shadow-hover hover:box-shadow-hover ease-300ms cursor-pointer
    selected: bg-color white hover:white rounded box-shadow-active hover:box-shadow-active ease-300ms cursor-pointer
    secondary: bg-color gray-lighter rounded
  text: text-normal p-20
---

{% include page-heading.html page=page %}

---

### Default
Useful when needing to draw extra attention to a particular group of content.
{: .section-description }

<div class="{{ page.css.box.default }}">
  <p class="{{ page.css.text }}">Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
</div>

```html
<div class="{{ page.css.box.default }}">
  <!-- Box Content -->
</div>
```

---

### Linked
Useful when linking important components to another page or another group of content.
{: .section-description }

<div class="{{ page.css.box.linked }}">
  <p class="{{ page.css.text }}">Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
</div>

```html
<div class="{{ page.css.box.linked }}">
  <!-- Box Content -->
</div>
```

---

### Linked & Active
Useful when linking important components to another page or another group of content.
{: .section-description }

<div class="{{ page.css.box.active }}">
  <p class="{{ page.css.text }}">Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
</div>

```html
<div class="{{ page.css.box.active }}">
  <!-- Box Content -->
</div>
```

---

### Linked & Selected
Useful when highlighting a linked box that's been selected by the user.
{: .section-description }

<div class="{{ page.css.box.selected }}">
  <p class="{{ page.css.text }}">Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
</div>

```html
<div class="{{ page.css.box.selected }}">
  <!-- Box Content -->
</div>
```

---

### Secondary
Useful when connecting secondary information to the default box styles.
{: .section-description }

<div class="{{ page.css.box.secondary }}">
  <p class="{{ page.css.text }}">Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
</div>

```html
<div class="{{ page.css.box.secondary }}">
  <!-- Box Content -->
</div>
```

---

{% include css-stats.html %}
