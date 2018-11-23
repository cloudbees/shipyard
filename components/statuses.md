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
    {% include status-icon.html status=status size="md" -%}
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
    <div class="status-{{ status }}-bg p-20 pl-0 pr-0 col">
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
    {% include status-icon.html status=status size="lg" -%}
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

<div class="col-container m-0 align-center mb-30 rounded overflow-hidden">
  {% for status in page.statuses -%}
    <div class="status-{{ status }}-bg p-20 pl-0 pr-0 col">
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

<button tooltip="skipped" class="mr-5">
  <span class="status status-skipped status-xl">{% icon :skipped, prefix: 'status-xl', class: 'status-icon' %}</span>
</button>
<button tooltip="waiting" class="mr-5">
  <span class="status status-waiting status-xl">{% icon 'waiting', prefix: 'status-xl', class: 'status-icon' %}</span>
</button>
<button tooltip="running" class="mr-5">
  <span class="status status-running status-xl">{% icon :running, prefix: 'status-xl', class: 'status-icon' %}</span>
</button>
<button tooltip="success" class="mr-5">
  <span class="status status-success status-xl">{% icon :success, prefix: 'status-xl', class: 'status-icon' %}</span>
</button>
<button tooltip="paused" class="mr-5">
  <span class="status status-paused status-xl">{% icon :paused, prefix: 'status-xl', class: 'status-icon' %}</span>
</button>
<button tooltip="error" class="mr-5">
  <span class="status status-error status-xl">{% icon :error, prefix: 'status-xl', class: 'status-icon' %}</span>
</button>
<button tooltip="fail">
  <span class="status status-fail status-xl">{% icon :fail, prefix: 'status-xl', class: 'status-icon' %}</span>
</button>

```erb
{%- for status in page.statuses %}
<span class="status status-xl status-{{ status }}">
  <%= icon :{{ status }}, prefix: 'status-xl', class: 'status-icon' %>
</span>
{% endfor -%}
```

---

### X-Large, Inverse Status Icons `.status-inverse.status-xl`
Useful when next to standard text where where it's important to show the status of a particular object.
{: .section-description }

<div class="col-container m-0 align-center mb-30">
  <div class="status-skipped-bg p-10 sm:p-20 pl-0 pr-0 col rounded rounded-left" tooltip="skipped">
    <span class="status status-inverse status-skipped status-xl">
      {% icon :skipped, prefix: 'status-xl', class: 'status-icon' %}
    </span>
  </div>
  <div class="status-waiting-bg p-10 sm:p-20 pl-0 pr-0 col" tooltip="waiting">
    <span class="status status-inverse status-waiting status-xl">
      {% icon 'waiting', prefix: 'status-xl', class: 'status-icon' %}
    </span>
  </div>
  <div class="status-running-bg p-10 sm:p-20 pl-0 pr-0 col" tooltip="running">
    <span class="status status-inverse status-running status-xl">
      {% icon :running, prefix: 'status-xl', class: 'status-icon' %}
    </span>
  </div>
  <div class="status-success-bg p-10 sm:p-20 pl-0 pr-0 col" tooltip="success">
    <span class="status status-inverse status-success status-xl">
      {% icon :success, prefix: 'status-xl', class: 'status-icon' %}
    </span>
  </div>
  <div class="status-paused-bg p-10 sm:p-20 pl-0 pr-0 col" tooltip="paused">
    <span class="status status-inverse status-paused status-xl">
      {% icon :paused, prefix: 'status-xl', class: 'status-icon' %}
    </span>
  </div>
  <div class="status-error-bg p-10 sm:p-20 pl-0 pr-0 col" tooltip="error">
    <span class="status status-inverse status-error status-xl">
      {% icon :error, prefix: 'status-xl', class: 'status-icon' %}
    </span>
  </div>
  <div class="status-fail-bg p-10 sm:p-20 pl-0 pr-0 col rounded rounded-right" tooltip="fail">
    <span class="status status-inverse status-fail status-xl">
      {% icon :fail, prefix: 'status-xl', class: 'status-icon' %}
    </span>
  </div>
</div>

```erb
{%- for status in page.statuses %}
<span class="status status-inverse status-xl status-{{ status }}">
  <%= icon :{{ status }}, prefix: 'status-xl', class: 'status-icon' %>
</span>
{% endfor -%}
```

---

### Utility CSS
```css
{% sass_output -%}
```

---

{% include css-stats.html %}
