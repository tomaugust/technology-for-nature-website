---
layout: page
title: Technology for Nature Team
summary: People, projects, outputs, and news from the UKCEH Technology for Nature Team.
eyebrow: UKCEH
---

The Technology for Nature Team develops and applies environmental technologies for biodiversity monitoring, data science, decision support, and conservation impact.

<section class="section">
  <h2>Explore</h2>
  <div class="card-grid compact-grid">
    <article class="card"><div class="card-body"><h3><a href="{{ '/team/' | relative_url }}">Team</a></h3><p>Meet the people behind the work.</p></div></article>
    <article class="card"><div class="card-body"><h3><a href="{{ '/projects/' | relative_url }}">Projects</a></h3><p>Browse current and past research activity.</p></div></article>
    <article class="card"><div class="card-body"><h3><a href="{{ '/outputs/' | relative_url }}">Outputs</a></h3><p>Find publications, reports, datasets, software, hardware, and methods.</p></div></article>
    <article class="card"><div class="card-body"><h3><a href="{{ '/news/' | relative_url }}">News</a></h3><p>Follow recent updates, milestones, events, and media.</p></div></article>
  </div>
</section>

<section class="section">
  <h2>Recent News</h2>
  <div class="card-grid">
    {% assign recent_news = site.news | sort: "date" | reverse %}
    {% for item in recent_news limit: 3 %}
      {% include card.html item=item type="News" %}
    {% else %}
      <p>No news has been added yet.</p>
    {% endfor %}
  </div>
</section>

