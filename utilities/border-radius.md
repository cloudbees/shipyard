---
title: Border-Radius Utilities
description: Shipyard's border-radius utilities are useful for connecting components together.
sass_file: shipyard/utilities/_border-radius
css:
  example:
    col: col col-50 sm:col-20 mb-8
    box: pt-8 pb-8 text-sm bold align-center bg-color gray-lighter
    text: text-dark
directions:
  -
    label: all
    modifier: null
  -
    label: none
    modifier: 0
  -
    label: top
    modifier: top
  -
    label: bottom
    modifier: bottom
  -
    label: left
    modifier: left
  -
    label: right
    modifier: right
  -
    label: top left
    modifier: top-left
  -
    label: top right
    modifier: top-right
  -
    label: bottom left
    modifier: bottom-left
  -
    label: bottom right
    modifier: bottom-right
---

{% include page-heading.html page=page %}

---

## Sizes `.{ screen }:rounded-{ size }`
The examples below demonstrate the utility classes at each size.
{: .section-description }

<div class="col-container">
  <div class="{{ page.css.example.col }}">
    <div class="{{ page.css.example.box }} rounded-pill">
      <span class="{{ page.css.example.text }}">pill</span>
    </div>
  </div>
  <div class="{{ page.css.example.col }}">
    <div class="{{ page.css.example.box }} rounded">
      <span class="{{ page.css.example.text }}">default</span>
    </div>
  </div>
  <div class="{{ page.css.example.col }}">
    <div class="{{ page.css.example.box }} rounded-sm">
      <span class="{{ page.css.example.text }}">sm</span>
    </div>
  </div>
  <div class="{{ page.css.example.col }}">
    <div class="{{ page.css.example.box }} rounded-xs">
      <span class="{{ page.css.example.text }}">xs</span>
    </div>
  </div>
  <div class="{{ page.css.example.col }}">
    <div class="{{ page.css.example.box }} rounded-0">
      <span class="{{ page.css.example.text }}">0</span>
    </div>
  </div>
</div>

```css
.rounded { border-radius: 4px }
.rounded-pill { border-radius: 999px }
.rounded-lg { border-radius: 5px }
.rounded-md { border-radius: 4px }
.rounded-sm { border-radius: 3px }
.rounded-xs { border-radius: 2px }
.rounded-0 { border-radius: 0 }
```

---

## Responsive Options `.{screen}:rounded-{ direction }`
The examples below demonstrate the utility classes on each breakpoint.
{: .section-description }

```html
{% for direction in page.directions -%}
  <div class="{% if direction.modifier != 0 and direction.modifier != none %}rounded {% endif %}{{ 'rounded' | component_css_class: direction.modifier }}"><!-- {{ direction.label }} --></div>
{% endfor -%}
```

{% for breakpoint in site.data.breakpoints %}
  <h3 class="text-md text-light mt-32 mb-8" markdown="1">{{ breakpoint.label }} `.{{ 'rounded' | component_css_class: breakpoint.modifier }}`</h3>
  <div class="col-container">
    {% for direction in page.directions %}
      <div class="{{ page.css.example.col }}">
        <div class="{{ page.css.example.box }} tooltip-data tooltip-data-top {{ 'rounded' | component_css_class: breakpoint.modifier }} {{ 'rounded' | component_css_class: breakpoint.modifier, direction.modifier }}" data-tooltip=".{{ 'rounded' | component_css_class: breakpoint.modifier, direction.modifier }}">
          <span class="{{ page.css.example.text }}">{{ direction.label }}</span>
        </div>
      </div>
    {% endfor %}
  </div>
{% endfor %}

---

### Utility CSS
```css
{% sass_output -%}
```

---

{% include css-stats.html %}
