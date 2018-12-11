---
title: Shipyard Alerts
description: Alerts should be used to grab a user's attention before proceeding to the next action. They are commonly found at the very top of the page directly above the content.
sass_file: shipyard/components/_alerts
---

{% include page-heading.html page=page %}

---

### Timed Alerts
Useful when you want to display an alert for a predetermined amount of time.
{: .section-description }

<div id="timed-alert-5s" class="alert alert-success alert-dismissible alert-closed" role="alert" shipyard="alert">
  Pack your bags! You'll be on the next flight to Hawaii.
  <span class="alert-timer alert-timer-on" data-duration="5"></span>
</div>

<div id="timed-alert-10s" class="alert alert-success alert-dismissible alert-closed" role="alert" shipyard="alert">
  Pack your bags! You'll be on the next flight to Tahiti.
  <span class="alert-timer alert-timer-on" data-duration="10"></span>
</div>

<div id="timed-alert-15s" class="alert alert-success alert-dismissible alert-closed" role="alert" shipyard="alert">
  Pack your bags! You'll be on the next flight to Corsica.
  <span class="alert-timer alert-timer-on" data-duration="15"></span>
</div>

<button class="btn btn-primary mr-8" alert-trigger="#timed-alert-5s">5 Seconds</button>
<button class="btn btn-primary mr-8" alert-trigger="#timed-alert-10s">10 Seconds</button>
<button class="btn btn-primary" alert-trigger="#timed-alert-15s">15 Seconds</button>

---

### Dismissible
Used to display notes, tips, and other non-critical information.
{: .section-description }

<div class="alert alert-dismissible" role="alert">
  Ten other people are also viewing tickets for <a href="#">this flight</a>.
  Use the code <code class="code-inline">Travel_Light_2017</code> before you book your flight.
</div>

---

### Default `.alert`
Used to display notes, tips, and other non-critical information.
{: .section-description }

<div class="alert" role="alert">
  Ten other people are also viewing tickets for <a href="#">this flight</a>.
  Use the code <code class="code-inline">Travel_Light_2017</code> before you book your flight.
  <button class="btn btn-sm alert-cta">Call to Action</button>
</div>

---

### Info `.alert-info`
Useful when drawing attention to non-critical information or actions we want the user to take.
{: .section-description }

<div class="alert alert-info" role="alert">
  Ten other people are also viewing tickets for <a href="#">this flight</a>.
  Use the code <code class="code-inline">Travel_Light_2017</code> before you book your flight.
  <button class="btn btn-sm alert-cta">Call to Action</button>
</div>

---

### Success `.alert-success`
Useful when drawing attention to interactions that have produced successful results.
{: .section-description }

<div class="alert alert-success" role="alert">
  Pack your bags! You'll be on the next flight to Hawaii.
  Use the code <code class="code-inline">Travel_Light_2017</code> on your next flight. In the meantime you can <a href="#">invite a friend</a> to this flight.
  <button class="btn btn-sm alert-cta">Call to Action</button>
</div>

---

### Warning `.alert-warning`
Useful when drawing attention to critical, time-sensitive information &mdash; even if nothing has gone wrong.
{: .section-description }

<div class="alert alert-warning" role="alert">
  There are only 2 seats left on this flight! We recommend to <a href="#">book your tickets</a> as soon as possible.
  Use the code <code class="code-inline">Travel_Light_2017</code> before you book your flight.
  <button class="btn btn-sm alert-cta">Call to Action</button>
</div>

---

### Error `.alert-error`
Useful when drawing attention to something that has gone critically wrong.
{: .section-description }

<div class="alert alert-error" role="alert">
  This flight is now sold out. Let's get you on the <a href="#">next flight to Kauai</a>.
  We hope the code <code class="code-inline">Travel_Light_2017</code> will be useful for your next flight.
  <button class="btn btn-sm alert-cta">Call to Action</button>
</div>

---

{% include css-stats.html %}
