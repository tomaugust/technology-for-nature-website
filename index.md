---
layout: default
title: Technology for Nature Team
summary: People, projects, outputs, and news from the UKCEH Technology for Nature Team.
eyebrow: UKCEH
---

<section class="home-hero reveal">
  <div class="home-hero-copy">
    <p class="scroll-cue">Scroll</p>
    <p class="eyebrow">UKCEH</p>
    <h1>We build technology for Nature</h1>
    <p class="hero-kicker">Biodiversity monitoring, field sensing, data science, and decision support for environmental change.</p>
    <div class="hero-actions">
      <a class="button" href="{{ '/projects/' | relative_url }}">Explore projects</a>
      <a class="button ghost-button" href="{{ '/outputs/' | relative_url }}">See outputs</a>
    </div>
  </div>
  <div class="signal-panel" aria-hidden="true">
    <div class="signal-grid"></div>
    <div class="signal-orbit orbit-one"></div>
    <div class="signal-orbit orbit-two"></div>
    <div class="signal-trace"></div>
    <div class="signal-card signal-card-one">
      <span>Acoustic stream</span>
      <strong>18.4k</strong>
    </div>
    <div class="signal-card signal-card-two">
      <span>Image checks</span>
      <strong>92%</strong>
    </div>
  </div>
</section>

<section class="statement-section reveal">
  <p class="section-number">01</p>
  <h2>Signals from the field, translated into evidence for nature.</h2>
  <p>The Technology for Nature Team develops and applies environmental technologies across biodiversity monitoring, data science, decision support, and conservation impact.</p>
</section>

<section class="section reveal">
  <div class="section-heading">
    <p class="section-number">02</p>
    <h2>How We Work</h2>
  </div>
  <div class="approach-grid">
    <article class="approach-panel reveal">
      <span>Sense</span>
      <h3>Field systems that can stay outside.</h3>
      <p>Low-power sensor networks, cameras, acoustic recorders, and deployment patterns for real environmental conditions.</p>
    </article>
    <article class="approach-panel reveal">
      <span>Process</span>
      <h3>Automated workflows with human judgement built in.</h3>
      <p>Reusable methods for turning acoustic, image, and environmental data into quality-controlled summaries.</p>
    </article>
    <article class="approach-panel reveal">
      <span>Decide</span>
      <h3>Tools that make monitoring results easier to use.</h3>
      <p>Dashboards, reports, datasets, and practical outputs that connect research activity to decisions.</p>
    </article>
  </div>
</section>

<section class="section feature-section reveal">
  <div class="section-heading">
    <p class="section-number">03</p>
    <h2>Featured Projects</h2>
    <a href="{{ '/projects/' | relative_url }}">All projects</a>
  </div>
  <div class="card-grid">
    {% assign featured_projects = site.projects | sort: "title" %}
    {% for item in featured_projects limit: 2 %}
      {% include card.html item=item type="Project" %}
    {% else %}
      <p>No projects have been added yet.</p>
    {% endfor %}
  </div>
</section>

<section class="section reveal">
  <div class="section-heading">
    <p class="section-number">04</p>
    <h2>Reusable Outputs</h2>
    <a href="{{ '/outputs/' | relative_url }}">All outputs</a>
  </div>
  <div class="card-grid">
    {% assign latest_outputs = site.outputs | sort: "date" | reverse %}
    {% for item in latest_outputs limit: 3 %}
      {% include card.html item=item type="Output" %}
    {% else %}
      <p>No outputs have been added yet.</p>
    {% endfor %}
  </div>
</section>

<section class="section news-strip reveal">
  <div class="section-heading">
    <p class="section-number">05</p>
    <h2>News and Updates</h2>
    <a href="{{ '/news/' | relative_url }}">All news</a>
  </div>
  <div class="news-feed">
    {% assign recent_news = site.news | sort: "date" | reverse %}
    {% for item in recent_news limit: 4 %}
      <article class="news-row reveal">
        <time datetime="{{ item.date | date_to_xmlschema }}">{{ item.date | date: "%d %b %Y" }}</time>
        <div>
          <p class="eyebrow">{{ item.news_type | default: "News" | replace: "_", " " }}</p>
          <h3><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h3>
          {% if item.summary %}<p>{{ item.summary }}</p>{% endif %}
        </div>
      </article>
    {% else %}
      <p>No news has been added yet.</p>
    {% endfor %}
  </div>
</section>

<section class="home-cta reveal">
  <p class="eyebrow">Explore the network</p>
  <h2>Move between people, projects, outputs, and updates.</h2>
  <div class="quick-links">
    <a href="{{ '/team/' | relative_url }}">Team</a>
    <a href="{{ '/projects/' | relative_url }}">Projects</a>
    <a href="{{ '/outputs/' | relative_url }}">Outputs</a>
    <a href="{{ '/news/' | relative_url }}">News</a>
  </div>
</section>
