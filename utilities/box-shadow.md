---
title: Box-Shadow Utilities
sass_file: shipyard/utilities/_box-shadow
options: [box-shadow, box-shadow-hover, box-shadow-active]
---

{% include page-heading.html page=page %}

---

{% for option in page.options -%}
  <div class="{{ option }} bg-white rounded p-16 text-normal mb-16">
    {{ option }}
  </div>
{% endfor %}

```css
{% sass_output -%}
```

---

{% include css-stats.html %}
