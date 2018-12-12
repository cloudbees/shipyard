---
title: Shipyard Colors
description: Shipyard includes **9 standard colors** by default, and each color can be accessed with the corresponding CSS utility class `.color-shade` or by using the SASS variable `$color-shade` in your SASS files.
sass_file: shipyard/utilities/_colors
white_shades: [100,90,80,70,60,50,40]
text_shades: [darkest, darker, dark, normal, light, lighter, lightest]
primary_colors: [Gray, Blue, Teal, Green, Yellow, Orange, Red, Coral, Purple]
shades: [Lightest, Lighter, Light, Base, Dark, Darker, Darkest]
base_colors: [Black, White]
---

{% include page-heading.html page=page %}

---

{% for color in page.primary_colors %}
  <ul class="col-container shade-list mb-24" shade-list>
    {% for shade in page.shades %}
      <li class="col col-50 sm:col-25 md:col-0 pl-4 pr-4 sm:pl-8 sm:pr-8 mb-8 sm:mb-16 shade-item shade-{{ shade | downcase }} shade-{{ color | color_css_class: shade }}">
        <div class="shade-box box bg-color {{ color | color_css_class: shade }} shade-{{ shade | downcase | replace: 'er', '' | replace: 'est', '' }}">
          <div class="shade-color col-center bg-color {{ color | color_css_class: shade }}" shade-color>
            <div class="shade-hex text-xxl bold"></div>
          </div>
          <p class="shade-text text-sm medium {{ color | color_css_class: shade }}">
            .{{ color | color_css_class: shade }}
          </p>
        </div>
      </li>
    {% endfor %}
  </ul>
{% endfor %}

<ul class="col-container shade-list mb-24" shade-list>
  {% assign shade = 'Base' %}
  {% for color in page.base_colors %}
    <li class="col pl-4 pr-4 sm:pl-8 sm:pr-8 mb-8 sm:mb-16 shade-item shade-{{ shade | downcase }} shade-{{ color | color_css_class: shade }}">
      <div class="shade-box box bg-color {{ color | color_css_class: shade }} shade-{{ shade | downcase | replace: 'er', '' | replace: 'est', '' }}">
        <div class="shade-color col-center bg-color {{ color | color_css_class: shade }}" shade-color>
          <div class="shade-hex text-xxl bold"></div>
        </div>
        <p class="shade-text text-sm medium {{ color | color_css_class: shade }}">
          .{{ color | color_css_class }}
        </p>
      </div>
    </li>
  {% endfor %}
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
    <div class="box-secondary p-8 sm:p-16 md:p-16 lg:p-24 bg-color gray-dark mt-8">
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
