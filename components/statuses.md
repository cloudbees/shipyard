---
title: Shipyard Statuses
sass_file: shipyard/components/_statuses
statuses: [skipped, waiting, running, success, paused, error, fail]
---

{% include page-heading.html page=page %}

---

### X-Small Status Icons `.status-xs`
Useful in tight spaces where it's still important to show status, but not important enough to compete for attention with other elements on the page.
{: .section-description }

<div class="mb-24">
  {%- for status in page.statuses %}
    <button class="btn btn-secondary btn-xs rounded-pill mr-4">
      {% include status-icon.html status=status size="xs" -%}
      <span class="text-sm medium ml-4 text-{{ status }}">{{ status | capitalize }}</span>
    </button>
  {% endfor -%}
</div>

```html
{%- for status in page.statuses %}
<!-- Status: {{ status | capitalize }} -->
{% include status-icon.html status=status size="xs" -%}
<span class="text-{{ status }}">{{ status | capitalize }}</span>
{% endfor -%}
```

---

### Small Status Icons `.status-sm`
Useful when next to standard text where where it's important to show the status of a particular object.
{: .section-description }

<div class="mb-24">
  {%- for status in page.statuses %}
    <button class="btn btn-secondary btn-sm rounded-pill mr-4">
      {% include status-icon.html status=status size="sm" -%}
      <span class="text-md medium ml-4 text-{{ status }}">{{ status | capitalize }}</span>
    </button>
  {% endfor -%}
</div>

```html
{%- for status in page.statuses %}
<!-- Status: {{ status | capitalize }} -->
{% include status-icon.html status=status size="sm" -%}
<span class="text-{{ status }}">{{ status | capitalize }}</span>
{% endfor -%}
```

---

### Medium Status Icons `.status-md`
Useful when next to standard text where where it's important to show the status of a particular object.
{: .section-description }

<div class="mb-24">
  {% for status in page.statuses -%}
    {% include status-icon.html status=status size="md" class="mr-4" -%}
  {% endfor -%}
</div>

```html
{%- for status in page.statuses %}
<!-- Status: {{ status | capitalize }} -->
{% include status-icon.html status=status size="md" -%}
{% endfor -%}
```

---

### Medium, Inverse Status Icons `.status-inverse.status-md`
Useful when next to standard text where where it's important to show the status of a particular object.
{: .section-description }

<div class="col-container m-0 align-center mb-24 rounded overflow-hidden">
  {% for status in page.statuses -%}
    <div class="status-{{ status }}-bg p-16 pl-0 pr-0 col">
      {% include status-icon.html status=status size="md" class="status-inverse" -%}
    </div>
  {% endfor -%}
</div>

```html
{%- for status in page.statuses %}
<!-- Status: {{ status | capitalize }} -->
{% include status-icon.html status=status size="md" class="status-inverse" -%}
{% endfor -%}
```

---

### Large Status Icons `.status-lg`
Useful when next to standard text where where it's important to show the status of a particular object.
{: .section-description }

<div class="mb-24">
  {% for status in page.statuses -%}
    {% include status-icon.html status=status size="lg" class="mr-4" -%}
  {% endfor -%}
</div>

```html
{%- for status in page.statuses %}
<!-- Status: {{ status | capitalize }} -->
{% include status-icon.html status=status size="lg" -%}
{% endfor -%}
```

---

### Large, Inverse Status Icons `.status-inverse.status-lg`
Useful when next to standard text where where it's important to show the status of a particular object.
{: .section-description }

<div class="col-container m-0 align-center mb-24 rounded overflow-hidden">
  {% for status in page.statuses -%}
    <div class="status-{{ status }}-bg p-16 pl-0 pr-0 col">
      {% include status-icon.html status=status size="lg" class="status-inverse" -%}
    </div>
  {% endfor -%}
</div>

```html
{%- for status in page.statuses %}
<!-- Status: {{ status | capitalize }} -->
{% include status-icon.html status=status size="lg" class="status-inverse" -%}
{% endfor -%}
```

---

### X-Large Status Icons `.status-xl`
Useful when next to standard text where where it's important to show the status of a particular object.
{: .section-description }

<div class="mb-24">
  {% for status in page.statuses -%}
    {% include status-icon.html status=status size="xl" class="mr-4" -%}
  {% endfor -%}
</div>

```html
{%- for status in page.statuses %}
<!-- Status: {{ status | capitalize }} -->
{% include status-icon.html status=status size="xl" -%}
{% endfor -%}
```

---

### X-Large, Inverse Status Icons `.status-inverse.status-xl`
Useful when next to standard text where where it's important to show the status of a particular object.
{: .section-description }

<div class="col-container m-0 align-center mb-24 rounded overflow-hidden">
  {% for status in page.statuses -%}
    <div class="status-{{ status }}-bg p-16 pl-0 pr-0 col">
      {% include status-icon.html status=status size="xl" class="status-inverse" -%}
    </div>
  {% endfor -%}
</div>

```html
{%- for status in page.statuses %}
<!-- Status: {{ status | capitalize }} -->
{% include status-icon.html status=status size="xl" class="status-inverse" -%}
{% endfor -%}
```

---

### Utility CSS
```css
{% sass_output -%}
```

---

{% include css-stats.html %}
