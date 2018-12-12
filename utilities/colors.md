---
title: Shipyard Colors
description: Shipyard includes **9 standard colors** by default, and each color can be accessed with the corresponding CSS utility class `.color-shade` or by using the SASS variable `$color-shade` in your SASS files.
sass_file: shipyard/utilities/_colors
white_shades: [100,90,80,70,60,50,40]
text_shades: [darkest, darker, dark, normal, light, lighter, lightest]
primary_colors: [gray, blue, teal, green, yellow, orange, red, coral, purple]
shades: [lightest, lighter, light, base, dark, darker, darkest]
base_colors: [black, white]
---

{% include page-heading.html page=page %}

---

{% for color in page.primary_colors %}
  <ul class="col-container shade-list mb-24" shade-list>
    {% for shade in page.shades %}
      {% assign color-shade = color | append: '-' | append: shade | replace: '-base', '' %}
      {% include color-shade.html box-color="white" color=color-shade text-color="text-dark" hover-text-color="text-lighter" %}
    {% endfor %}
  </ul>
{% endfor %}

<ul class="col-container shade-list mb-24" shade-list>
  {% include color-shade.html box-color="white" color="black" text-color="white" hover-text-color="white-70" %}
  {% include color-shade.html box-color="black" color="white" text-color="black" hover-text-color="black-70" %}
</ul>

---

<div class="col-container">
  <div class="col">
    <h3>Text Shades</h3>
    <div class="box p-8 sm:p-16 md:p-16 lg:p-24 mt-8">
      <ul class="list medium">
        {% for shade in page.text_shades %}
          <li class="text-{{ shade }}">.text-{{ shade }}</li>
        {% endfor %}
      </ul>
    </div>
  </div>
  <div class="col">
    <h3>Inverse Text Shades</h3>
    <div class="box-secondary p-8 sm:p-16 md:p-16 lg:p-24 bg-color gray-darker mt-8">
      <ul class="list medium">
        {% for shade in page.white_shades %}
          <li class="white{{ '-' | append: shade | replace: '-100', '' }}">
            .white{{ '-' | append: shade | replace: '-100', '' }}
          </li>
        {% endfor %}
      </ul>
    </div>
  </div>
</div>

---

```css
{% sass_output -%}
```

---

{% include css-stats.html %}
