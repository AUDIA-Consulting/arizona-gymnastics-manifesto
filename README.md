# Arizona Gymnastics — The GymCat Way

A static manifesto experience for University of Arizona Women’s Gymnastics.

Website design and development: [AUDIA Consulting](https://goaudia.com/).

## Files

- `index.html`: manifesto, Blueprint alignment, values, athlete stories and credits.
- `styles.css`: responsive layout, focus states, reduced motion and print styles.
- `fonts.css`: local font declarations.
- `script.js`: optional reading progress and restrained entrance motion.
- `assets/`: all required photography, marks, fonts, license and sharing image.
- `.nojekyll`: serves this as a static GitHub Pages site.

No build system, package installation, database, API key or third-party font service is required. All imagery and fonts are local. Native navigation and story disclosures work without JavaScript.

## Publish

This package is configured for:

https://audia-consulting.github.io/arizona-gymnastics-manifesto/

1. Create a public repository owned by `audia-consulting` named `arizona-gymnastics-manifesto`.
2. Upload the contents of this directory to the repository root. `index.html` and `assets/` must be at the top level, not inside an extra enclosing folder.
3. Commit the upload to `main`.
4. Open Settings → Pages. Under Build and deployment, select Deploy from a branch, `main`, and `/(root)`, then Save.
5. Wait for deployment; Settings → Pages will show the published address. Check the page on desktop and phone, the six value links, the Blueprint link, and full-story controls.

The dotfile `.nojekyll` may be hidden in Finder. Press Command–Shift–Period to reveal hidden files before uploading. If it is missing in GitHub, choose Add file → Create new file, name it `.nojekyll`, and commit it to main. Leave it empty if permitted; a single comment is harmless.

If using a different repository owner, repository name or custom domain, replace every occurrence of the configured URL in `index.html` (canonical, og:url, og:image and twitter:image) with the actual public address. Asset paths for the site itself are relative and work under a project subpath.

Official instructions: [GitHub Pages publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Local viewing and maintenance

Open index.html directly, or serve this folder with `python3 -m http.server 8000` and visit http://localhost:8000/.

Edit page content in index.html and presentation in styles.css. Keep logo proportions and credits intact. Recheck phone/desktop layout, enlarged text, keyboard focus and reduced motion after significant changes. After changing the hero or display title, update assets/social-preview.jpg to match.

## Content and assets

Approved manifesto language supplies the six gymnastics values, all 19 behaviors and four complete stories. The Blueprint section makes editorial connections between the athletics plan’s four pillars and existing manifesto language. Karin Wurm’s attribution was corrected with client approval to distinguish two NCAA All-American honors from four NCAA Academic All-American honors. Sophie Derr’s original scoring wording is preserved at the client’s direction.

Photography and university marks retain their respective owners’ rights; credits appear in the page footer and alongside value photographs. The Dependability huddle is credited to Scott Eklund / UW Athletics, via Arizona Athletics. Local Barlow fonts are open-license substitutes; Georgia is the system serif. The included font license applies only to font assets. No blanket open-source license is granted over photography, university marks or manifesto content.

## Validation

Local desktop/mobile visual review completed. Responsive checks at 320, 390, 768 and 1440px, including 200% text, passed without horizontal overflow. All local assets and value links resolve. Automated axe A/AA checks reported no violations at desktop and phone widths. Keyboard disclosures, skip navigation, reduced motion and no-JavaScript content were checked. Physical iOS/Safari testing has not been performed. Recheck the live URL after deployment.
