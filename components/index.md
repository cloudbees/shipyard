---
title: Shipyard Components
---

{% include page-heading.html page=page %}

---

<ul class="col-container">
  {% for component in site.data.components %}
    <li class="mb-8 sm:mb-16 md:mb-24 col col-100 sm:col-33 md:col-25">
      <a href="{{ site.baseurl }}/components/{{ component | replace: ' ', '-' | downcase }}" class="box-link p-8 sm:p-16 md:p-16 lg:p-24 align-center text-md sm:text-lg md:text-xl">
        {{ component }}
      </a>
    </li>
  {% endfor %}
</ul>
