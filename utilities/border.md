---
title: Border Utilities
description: Useful when you need to add a border to any object.
sass_file: shipyard/utilities/_border
examples: ['', '-x', '-y', '-t', '-b', '-r', '-l']
---

{% include page-heading.html page=page %}

---

## Thin Borders `.border-thin`
Useful for adding 1px borders to any object.
{: .section-description }

<div class="col-container mb-24">
  {% for example in page.examples %}
    <div class="col col-100 md:col-0 mb-8 md:mb-0">
      <div class="align-center bg-white p-16 border-thin border-current gray-light {{ 'border' | append: example }}">
        <span class="text-normal medium">
          .{{ 'border' | append: example }}
        </span>
      </div>
    </div>
  {% endfor %}
</div>

```html
{% for example in page.examples -%}
<div class="border-thin {{ 'border' | append: example }}"><!-- .{{ 'border' | append: example }} --></div>
{% endfor -%}
```

---

## Thick Borders `.border-thick`
Useful for adding 2px borders to any object.
{: .section-description }

<div class="col-container mb-24">
  {% for example in page.examples %}
    <div class="col col-100 md:col-0 mb-8 md:mb-0">
      <div class="align-center bg-white p-16 border-thick border-current gray-light {{ 'border' | append: example }}">
        <span class="text-normal medium">
          .{{ 'border' | append: example }}
        </span>
      </div>
    </div>
  {% endfor %}
</div>

```html
{% for example in page.examples -%}
<div class="border-thick {{ 'border' | append: example }}"><!-- .{{ 'border' | append: example }} --></div>
{% endfor -%}
```

---

```css
{% sass_output -%}
```

---

{% include css-stats.html %}
