# Stefan Olafsson — Academic Homepage

A minimal academic homepage built with plain HTML and CSS. No frameworks, no build step, no dependencies.

## Structure

```
index.html        Main page (bio, research interests, events, teaching, selected pubs)
research.html     Full publications list
consulting.html   Consulting services
style.css         Shared stylesheet
photo.jpg         Profile photo (add your own)
```

## Getting Started

1. **Add a profile photo**: Place a square photo named `photo.jpg` in the root directory. A 400×400px or larger image works well.
2. **Fill in placeholders**: Search for `[` in the HTML files to find placeholder items (events, courses) that need your real content.
3. **Update contact info**: The email and social links in `index.html` should be updated with your actual details.
4. **Add publications**: The research page includes 20 papers from Google Scholar. Add any missing publications directly to `research.html`.

## Deploying

This site works with any static hosting:

- **GitHub Pages**: Push to a repo, enable Pages in Settings, and point it to the `main` branch root.
- **Netlify / Vercel**: Connect the repo and deploy — no build command needed.
- **Any web server**: Just copy the files to your web root.

## Customization

- Colors and fonts are defined as CSS custom properties at the top of `style.css` and are easy to change.
- The site is fully responsive and works on mobile.
