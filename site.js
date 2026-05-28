// Renders shared content from data.js into each page.
//  - <nav> is filled from NAV_ITEMS, with the current page marked active.
//  - Events are split into upcoming/past by date; the index shows the next few.
//  - Publications render in full on research.html and as a curated subset (selected)
//    on the index.
// Content strings come from data.js (author-controlled), so innerHTML is safe here.

(function () {
  "use strict";

  function currentPage() {
    return location.pathname.split("/").pop() || "index.html";
  }

  function fill(id, html) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  function todayISO() {
    var d = new Date();
    var mm = String(d.getMonth() + 1).padStart(2, "0");
    var dd = String(d.getDate()).padStart(2, "0");
    return d.getFullYear() + "-" + mm + "-" + dd;
  }

  function renderNav() {
    var nav = document.querySelector("header nav");
    if (!nav || typeof NAV_ITEMS === "undefined") return;
    var here = currentPage();
    nav.innerHTML = "";
    NAV_ITEMS.forEach(function (item) {
      var a = document.createElement("a");
      a.href = item.href;
      a.textContent = item.label;
      if (item.href === here) a.className = "active";
      nav.appendChild(a);
    });
  }

  function eventEnd(ev) {
    return ev.end || ev.start;
  }

  function eventHTML(ev) {
    return (
      "<li><h3>" + ev.title + "</h3>" +
      '<p class="item-meta">' + ev.meta + "</p></li>"
    );
  }

  function renderEvents() {
    if (typeof EVENTS === "undefined") return;
    var today = todayISO();

    var upcoming = EVENTS.filter(function (e) {
      return eventEnd(e) >= today;
    }).sort(function (a, b) {
      return a.start < b.start ? -1 : a.start > b.start ? 1 : 0;
    });

    var past = EVENTS.filter(function (e) {
      return eventEnd(e) < today;
    }).sort(function (a, b) {
      return a.start > b.start ? -1 : a.start < b.start ? 1 : 0;
    });

    fill("upcoming-events", upcoming.map(eventHTML).join(""));
    fill("past-events", past.map(eventHTML).join(""));

    var highlight = document.getElementById("highlight-events");
    if (highlight) {
      var n = parseInt(highlight.getAttribute("data-count"), 10) || 3;
      highlight.innerHTML = upcoming.slice(0, n).map(eventHTML).join("");
    }
  }

  function pubHTML(p) {
    var title = p.url
      ? '<a href="' + p.url + '" target="_blank" rel="noopener">' + p.title + "</a>"
      : p.title;
    return (
      "<li>" +
      '<div class="pub-title">' + title + "</div>" +
      '<div class="pub-authors">' + p.authors + "</div>" +
      '<div class="pub-venue">' + (p.venue || "") + "</div>" +
      '<span class="pub-year">' + p.year + "</span>" +
      "</li>"
    );
  }

  function renderPublications() {
    if (typeof PUBLICATIONS === "undefined") return;
    fill("all-publications", PUBLICATIONS.map(pubHTML).join(""));
    var selected = document.getElementById("selected-publications");
    if (selected) {
      selected.innerHTML = PUBLICATIONS.filter(function (p) {
        return p.selected;
      }).map(pubHTML).join("");
    }
  }

  function init() {
    renderNav();
    renderEvents();
    renderPublications();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
