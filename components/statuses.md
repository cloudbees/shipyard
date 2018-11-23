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
  <button tooltip="skipped" class="btn btn-secondary btn-xs rounded-pill mr-5">
    <span class="status status-skipped status-xs">
      {% include icon.html name='skipped' inline='true' class='icon-status-xs status-icon' %}
    </span>
    <span class="text-sm medium ml-5 text-skipped">Skipped</span>
  </button>

  <button tooltip="waiting" class="btn btn-secondary btn-xs rounded-pill mr-5">
    <span class="status status-waiting status-xs">
      {% include icon.html name='waiting' inline='true' class='icon-status-xs status-icon' %}
    </span>
    <span class="text-sm medium ml-5 text-waiting">Waiting</span>
  </button>

  <button tooltip="running" class="btn btn-secondary btn-xs rounded-pill mr-5">
    <span class="status status-running status-xs">
      {% include icon.html name='running' inline='true' class='icon-status-xs status-icon' %}
    </span>
    <span class="text-sm medium ml-5 text-running">Running</span>
  </button>

  <button tooltip="success" class="btn btn-secondary btn-xs rounded-pill mr-5">
    <span class="status status-success status-xs">
      {% include icon.html name='success' inline='true' class='icon-status-xs status-icon' %}
    </span>
    <span class="text-sm medium ml-5 text-success">Success</span>
  </button>

  <button tooltip="paused" class="btn btn-secondary btn-xs rounded-pill mr-5">
    <span class="status status-paused status-xs">
      {% include icon.html name='paused' inline='true' class='icon-status-xs status-icon' %}
    </span>
    <span class="text-sm medium ml-5 text-paused">Paused</span>
  </button>

  <button tooltip="error" class="btn btn-secondary btn-xs rounded-pill mr-5">
    <span class="status status-error status-xs">
      {% include icon.html name='error-xs' inline='true' class='icon-status-xs status-icon' %}
    </span>
    <span class="text-sm medium ml-5 text-error">Error</span>
  </button>

  <button tooltip="fail" class="btn btn-secondary btn-xs rounded-pill mr-5">
    <span class="status status-fail status-xs">
      {% include icon.html name='fail' inline='true' class='icon-status-xs status-icon' %}
    </span>
    <span class="text-sm medium ml-5 text-fail">Fail</span>
  </button>
</div>

---

### Utility CSS
```css
{% sass_output -%}
```

---

{% include css-stats.html %}
