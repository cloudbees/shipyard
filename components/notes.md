---
title: Shipyard Notes
description: Notes should be used to grab a user's attention along side of other content.
sass_file: shipyard/components/_notes
---

{% include page-heading.html page=page %}

---

### Default `.note`
Used to display notes, tips, and other non-critical information.
{: .section-description }

<div class="note">
  <p markdown="1">
    Ten other people are also viewing tickets for [this flight](#).
    Use the code `Travel_Light_2017` before you book your flight.
  </p>
  <button class="btn btn-sm note-cta">Call to Action</button>
</div>

---

### Info `.note-info`
Useful when drawing attention to non-critical information or actions we want the user to take.
{: .section-description }

<div class="note note-info">
  <p markdown="1">
    Ten other people are also viewing tickets for [this flight](#).
    Use the code `Travel_Light_2017` before you book your flight.
  </p>
  <button class="btn btn-sm note-cta">Call to Action</button>
</div>

---

### Success `.note-success`
Useful when drawing attention to interactions that have produced successful results.
{: .section-description }

<div class="note note-success">
  <p markdown="1">
    Pack your bags! You'll be on the next flight to Hawaii.
    Use the code `Travel_Light_2017` on your next flight. In the meantime you can [invite a friend](#) to this flight.
  </p>
  <button class="btn btn-sm note-cta">Call to Action</button>
</div>

---

### Warning `.note-warning`
Useful when drawing attention to critical information.
{: .section-description }

<div class="note note-warning">
  <p markdown="1">
    There are only 2 seats left on this flight! We recommend to [book your tickets](#) as soon as possible.
    Use the code `Travel_Light_2017` before you book your flight.
  </p>
  <button class="btn btn-sm note-cta">Call to Action</button>
</div>

---

{% include css-stats.html %}
