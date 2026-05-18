---
layout: page
title: Search / Tags
summary: Browse site content by theme, output type, news type, and project status.
permalink: /browse/
---

<section class="section">
  <h2>Themes</h2>
  <div class="pill-grid">
    {% for theme in site.data.themes %}
      <a class="pill" href="#{{ theme.id }}">{{ theme.label }}</a>
    {% endfor %}
  </div>
</section>

<section class="section">
  <h2>Output Types</h2>
  <div class="pill-grid">
    {% for type in site.data.output_types %}
      <span class="pill">{{ type.label }}</span>
    {% endfor %}
  </div>
</section>

<section class="section">
  <h2>News Types</h2>
  <div class="pill-grid">
    {% for type in site.data.news_types %}
      <span class="pill">{{ type.label }}</span>
    {% endfor %}
  </div>
</section>

<section class="section">
  <h2>Theme Browse</h2>
  {% for theme in site.data.themes %}
    <section id="{{ theme.id }}" class="theme-block">
      <h3>{{ theme.label }}</h3>
      <div class="browse-columns">
        <div>
          <h4>People</h4>
          <ul class="link-list">
            {% assign matched = false %}
            {% for item in site.people %}
              {% if item.tags contains theme.id or item.expertise contains theme.id %}
                {% assign matched = true %}
                <li><a href="{{ item.url | relative_url }}">{{ item.title }}</a></li>
              {% endif %}
            {% endfor %}
            {% unless matched %}<li>No people yet.</li>{% endunless %}
          </ul>
        </div>
        <div>
          <h4>Projects</h4>
          <ul class="link-list">
            {% assign matched = false %}
            {% for item in site.projects %}
              {% if item.tags contains theme.id %}
                {% assign matched = true %}
                <li><a href="{{ item.url | relative_url }}">{{ item.title }}</a></li>
              {% endif %}
            {% endfor %}
            {% unless matched %}<li>No projects yet.</li>{% endunless %}
          </ul>
        </div>
        <div>
          <h4>Outputs</h4>
          <ul class="link-list">
            {% assign matched = false %}
            {% for item in site.outputs %}
              {% if item.tags contains theme.id %}
                {% assign matched = true %}
                <li><a href="{{ item.url | relative_url }}">{{ item.title }}</a></li>
              {% endif %}
            {% endfor %}
            {% unless matched %}<li>No outputs yet.</li>{% endunless %}
          </ul>
        </div>
        <div>
          <h4>News</h4>
          <ul class="link-list">
            {% assign matched = false %}
            {% for item in site.news %}
              {% if item.tags contains theme.id %}
                {% assign matched = true %}
                <li><a href="{{ item.url | relative_url }}">{{ item.title }}</a></li>
              {% endif %}
            {% endfor %}
            {% unless matched %}<li>No news yet.</li>{% endunless %}
          </ul>
        </div>
      </div>
    </section>
  {% endfor %}
</section>

