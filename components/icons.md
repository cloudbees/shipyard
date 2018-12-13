---
title: Shipyard Icons
description: Shipyard comes with several default icons that you're welcome to use on any project. Each icon has been designed on a pixel grid at the small size possible, but can be scaled up to any size you like simply by changing the `width` and `height` in the CSS.
sass_file: shipyard/components/_icons
---

{% include page-heading.html page=page %}

---

### Common Icons
The following icons are the most frequently used in just about any application.
{: .section-description }

<ul class="icon-list col-container">
  {% include icon-item.html name="plus" class="center" %}
  {% include icon-item.html name="restart" class="icon-outline center" %}
  {% include icon-item.html name="gear" class="icon-outline center" %}
  {% include icon-item.html name="lock" class="center" %}
  {% include icon-item.html name="card" class="center" %}
  {% include icon-item.html name="tag" class="center" %}
  {% include icon-item.html name="x" class="icon-outline center" %}
  {% include icon-item.html name="arrow-up" class="icon-outline center" %}
  {% include icon-item.html name="arrow-down" class="center" %}
  {% include icon-item.html name="arrow-left" class="center" %}
  {% include icon-item.html name="arrow-right" class="center" %}
  {% include icon-item.html name="check" class="center" %}
  {% include icon-item.html name="hamburger" class="icon-outline center w-24 h-24" %}
</ul>

---

### Status Icons
The following icons are used primarily in the <a href="{{ site.baseurl }}/components/statuses">status component</a>.
{: .section-description }

<ul class="icon-list col-container">
  {% include icon-item.html name="error-xs" class="center icon-outline" %}
  {% include icon-item.html name="error" class="center icon-outline" %}
  {% include icon-item.html name="fail" class="center icon-outline" %}
  {% include icon-item.html name="paused" class="center icon-outline" %}
  {% include icon-item.html name="running" class="center icon-outline" %}
  {% include icon-item.html name="skipped" class="center icon-outline" %}
  {% include icon-item.html name="success" class="center icon-outline" %}
  {% include icon-item.html name="waiting" class="center icon-outline" %}
</ul>

---

### Brand Icons
If you need to style several paths inside of the icon, it's important to make sure you use the *injected* version of the icon.
{: .section-description }

<ul class="icon-list col-container">
  <!-- {% include icon-item.html name="bitbucket-white" class="center icon-xl" %} -->
  {% include icon-item.html name="bitbucket" class="center gray icon-xl" %}
  {% include icon-item.html name="bitbucket-color" class="center icon-xl" %}
  {% include icon-item.html name="campfire-color" class="center icon-xl" %}
  {% include icon-item.html name="codeship" class="center icon-xl" %}
  {% include icon-item.html name="email-color" class="center icon-xl" %}
  {% include icon-item.html name="flowdock-color" class="center icon-xl" %}
  {% include icon-item.html name="github" class="center icon-xl" %}
  {% include icon-item.html name="gitlab" class="center icon-xl" %}
  {% include icon-item.html name="gitlab-color" class="center icon-xl" %}
  {% include icon-item.html name="google-app-engine" class="center icon-xl" %}
  {% include icon-item.html name="grove-color" class="center icon-xl" %}
  {% include icon-item.html name="hipchat" class="center icon-xl" %}
  {% include icon-item.html name="hipchat-color" class="center icon-xl" %}
  {% include icon-item.html name="slack" class="center icon-xl" %}
  {% include icon-item.html name="slack-color" class="center icon-xl" %}
  {% include icon-item.html name="webhook" class="center icon-xl" %}
  {% include icon-item.html name="webhook-color" class="center icon-xl" %}
</ul>

---

### Icon Sizes
The icon size utility classes can be applied to any icon, and are useful when you want to override the default icon size.
{: .section-description }

<ul class="icon-list col-container">
  {% include icon-item.html name="gear" class="icon-outline center icon-xxs" tooltip=".icon-xxs" %}
  {% include icon-item.html name="gear" class="icon-outline center icon-xs" tooltip=".icon-xs" %}
  {% include icon-item.html name="gear" class="icon-outline center icon-sm" tooltip=".icon-sm" %}
  {% include icon-item.html name="gear" class="icon-outline center icon-md" tooltip=".icon-md" %}
  {% include icon-item.html name="gear" class="icon-outline center icon-lg" tooltip=".icon-lg" %}
  {% include icon-item.html name="gear" class="icon-outline center icon-xl" tooltip=".icon-xl" %}
</ul>
