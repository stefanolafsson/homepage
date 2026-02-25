# Stefán Ólafsson — Academic Homepage

A minimal academic homepage built with plain HTML and CSS. No frameworks, no build step, no dependencies.

## Structure

```
index.html        Main page (bio, research interests, upcoming event, teaching, selected pubs)
research.html     Full publications list (33 papers, 2014–2025)
consulting.html   Consulting services
events.html       Full list of past and upcoming events (linked from index.html, not in nav)
style.css         Shared stylesheet
images/so.jpg     Profile photo
```

## Editing

- **Events**: Add upcoming or past events to `events.html`. Update the highlighted event on `index.html` to match the nearest upcoming one.
- **Teaching**: Course history is listed directly in `index.html`.
- **Publications**: Add new papers to `research.html`. Update the selected publications on `index.html` as desired.
- **Contact info**: Email and social links are in `index.html` and `consulting.html`.

## Deploying

This site works with any static hosting:

- **GitHub Pages**: Push to a repo, enable Pages in Settings, and point it to the `main` branch root.
- **Netlify / Vercel**: Connect the repo and deploy — no build command needed.
- **Any web server**: Just copy the files to your web root.

## Customization

- Colors and fonts are defined as CSS custom properties at the top of `style.css` and are easy to change.
- The site is fully responsive and works on mobile.
