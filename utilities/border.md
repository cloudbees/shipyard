---
title: Border Utilities
description: Useful when you need to add a border to any object.
sass_file: shipyard/utilities/_border
examples: ['-a', '-x', '-y', '-t', '-b', '-r', '-l']
css: align-center bg-white p-16 border gray-light
---

{% include page-heading.html page=page %}

---

## Thin Borders `.border-thin`
Useful for adding 1px borders to any object.
{: .section-description }

<div class="col-container mb-24">
  {% for example in page.examples %}
    <div class="col col-100 md:col-0 mb-8 md:mb-0">
      <div class="{{ page.css }} border-thin {{ 'border' | append: example | append: '-solid' }}">
        <span class="text-normal medium">
          .{{ 'border' | append: example | append: '-solid' }}
        </span>
      </div>
    </div>
  {% endfor %}
</div>

```html
{% for example in page.examples -%}
<div class="border border-thin {{ 'border' | append: example | append: '-solid' }}"><!-- .{{ 'border' | append: example | append: '-solid' }} --></div>
{% endfor -%}
```

---

## Thick Borders `.border-thick`
Useful for adding 2px borders to any object.
{: .section-description }

<div class="col-container mb-24">
  {% for example in page.examples %}
    <div class="col col-100 md:col-0 mb-8 md:mb-0">
      <div class="{{ page.css }} border-thick {{ 'border' | append: example | append: '-solid' }}">
        <span class="text-normal medium">
          .{{ 'border' | append: example | append: '-solid' }}
        </span>
      </div>
    </div>
  {% endfor %}
</div>

```html
{% for example in page.examples -%}
<div class="border border-thick {{ 'border' | append: example | append: '-solid' }}"><!-- .{{ 'border' | append: example | append: '-solid' }} --></div>
{% endfor -%}
```

---

```css
{% sass_output -%}
```

---

{% include css-stats.html %}
