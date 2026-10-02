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

The program’s third value is deliberately named **Fierce**. The existing #fierceness section anchor and image filenames are retained for compatibility.

## September photo refresh

Opening: Team_Backs_to_Camera.jpeg (Rebecca Sasnett, confirmed in embedded credit). Fierce: Madison Farwell1625; Dependability: Amelia McAnear0098; Selflessness: Catherine Regan13648. Balance pairs Abby Martin at CATSYS (Madison Farwell0884) with Abby and Sophie Derr at Desert Gems (Rebecca Sasnett196). New photos supplied by the client; filenames identify photographers, and captions preserve those credits. Women and the approved manifesto language remain unchanged.

### Latest photo placement correction

Women now uses Amelia McAnear’s cheering-teammates photograph (0098). Dependability restores the hands-together regional huddle, credited to Scott Eklund / UW Athletics. Source: https://arizonawildcats.com/news/2025/4/6/gymcats-close-out-season-at-ncaa-regionals. Manifesto language is unchanged.

### Celebration crop and WE over ME

The quad-meet image is cropped from 24.5% to 97% of its original width, excluding the blonde person at the left edge as requested. Its full cropped proportions are preserved on desktop and mobile. User-supplied We_over_Me.png is paired with the community photograph in Selflessness; photographer attribution was not supplied. Existing approved “we over me” behavior remains unchanged.

## October 2: Coach story and women’s impact photos

Added John Court’s four-part narrative from john-court-story/addendum/README.md, preserving the draft wording and using the requested pointing photo uncropped. This local preview does not establish John’s approval of the narrative; source and review notes remain in john-court-story/research-and-approval.md. Added a Women photo sequence with young gymnasts, a fan high-five, and the meeting photograph. “Women investing in women” is an editorial heading based on the user’s direction; the supporting behavior is approved manifesto language. No identities or event details inferred for the meeting photo. Individual photographer credits for these four supplied photographs were not provided. The cheering portrait, additional autograph photo and older fan image were not needed in this pass. Existing photos and approved manifesto wording are preserved. Nothing published.

### Coach section: revised direction

Replaced the biographical narrative with two provisional editorial paragraphs based on Brian’s stated direction: John’s desire to invest in the community, guide the women in his program, develop character, and support their dreams. This is proposed third-person positioning for John’s review, not a quotation, verified interview, or a guarantee of outcomes. The longer researched narrative remains in john-court-story/ for later development.

### Latest photo arrangement

Replaced the meeting image in Women Investing in Women with the supplied older-fan photograph. Moved the meeting image below the Balance behaviors, keeping both existing Balance photos. Added the gray-suit John Court portrait beside his short narrative; the original pointing photograph is retained. New photograph credits were not supplied.

Coach working headline: “The routines end. The impact doesn’t.” Editorial placeholder requested by Brian, not a quotation from John; revisit after his interview.

Balance photo arrangement: removed the Desert Gems mascot photograph from the page and moved the microphone photograph beneath Abby’s podium photograph. Original assets retained locally.

### Foundation photography refinement

Added the supplied autograph-line photo beneath a navy gradient in Foundation, with a separate image area above the text on phones. Paired the existing cropped celebration photo with the new teammate high-five photo. Replaced the gray-suit portrait beside John’s narrative with the supplied black-and-white coach/athlete photograph; pointing photo retained. The gray-suit asset remains available. No new identities, quotations or biographical claims added; photographer credits for these supplied images remain unavailable.

Added the existing full-color Block A beside the Bear Down Blueprint heading, with proportions preserved and clear space. The mark sits above the heading at narrower widths.

Blueprint logo revision: per Brian’s explicit direction, removed the small heading mark and added an oversized decorative Block A behind the entire section at 6.5% opacity. This supersedes the prior full-color heading treatment.

Watermark optical alignment: centers the visible Block A at x=31.05 within the original 68-unit SVG canvas, compensating for registration-mark space. Original SVG paths and proportions unchanged.
