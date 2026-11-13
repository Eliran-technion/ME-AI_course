# CLAUDE.md: context for ME-AI_course

Read this first in any new session working on this repo.

## Owner
- Eliran Dayan, Mechanical Engineering student at the Technion. Ops & Technology Development Coordinator, Mehudar Center for Inventors.
- Always explain to him in Hebrew. Site content is bilingual (EN + HE). In Hebrew math explanations use LaTeX ($...$).
- New to git: give him exact terminal commands. He works in VS Code on Windows.

## Repo & hosting
- GitHub: Eliran-technion/ME-AI_course, served by GitHub Pages at https://eliran-technion.github.io/ME-AI_course/
- Local folder: C:\Users\Elira\projects\ME-AI_course
- Course: TryAI (https://avisalmon.github.io/tryai/). Each assignment = a site in this repo.
- Claude has NO push access. Workflow: Claude writes files directly into the local folder (device bridge), then tells him to run:
  `git add .` → `git commit -m "..."` → `git push`. He then waits for the green check in the Actions tab and hard-refreshes (Ctrl+Shift+R).
- Known pitfall: if a file is open/dirty in VS Code, his editor can overwrite Claude's write. After writing, re-stage the file and verify the content landed; tell him to close the editor tabs before committing.

## Landing page (root of repo), done
- `index.html`: structure. Loads `style.css?v=N` and `script.js?v=N`. **Bump N on every CSS/JS change** (GitHub Pages + browsers cache aggressively). Current: v=12.
- `style.css`: dark drafting-table theme, animated aurora background (orange/magenta/blue/teal), JetBrains Mono labels, responsive. Fonts: Unbounded, Rubik, Secular One (HE headings).
- `script.js`: all content and logic.
  - `LINKS`: LinkedIn, Instagram (elirandayan12), email, WhatsApp (972508512727).
  - Hero is always English; then a language gate (phone: swipe right = Hebrew, left = English; desktop: buttons/arrow keys). Choice stored in localStorage.
  - `TIMELINE`: expandable titles (`<details>`), each with text + optional links/logo. Professional third-person wording ("קבלה ל-", never "התקבלתי").
  - `PHYSICAL`: project cards with a detail sheet (gallery + problem/solution/specs). Status: `wip` | `done`.
  - `TECH`: cards; `url` makes the card a link. Status: `live` | `done` | `wip` | `soon`.
  - Motion: desktop = mouse-driven grid glow, photo tilt, magnetic buttons, card tilt. Touch = no finger tracking; scroll-driven perspective + optional gyro.
- `assets/`: images (studio-composited project photos, H.U.B renders, PSU AI render).
- Facts to respect: P2G was never founded as a company; it was the framing of the Sandbox challenge. Don't call him CTO/co-founder.

## API project (bonus: API + phone sensors), built
- `api-project/`: "Object Compass". User picks ONE target, only it shows on the dial. Bilingual (reads the same `lang` localStorage key as the landing page).
- Files: `index.html`, `style.css`, `app.js` (all logic), `config.js` (FLIGHT_PROXY, radius, magnetic declination +5°). Bump their `?v=` too on changes.
- Sensors: Geolocation + DeviceOrientation (iOS `webkitCompassHeading` after `requestPermission`; Android `deviceorientationabsolute` → rotation matrix, back-camera axis). No sensor → manual slider.
- Targets: places + user-saved points (localStorage), Sun/Moon (computed), satellites (CelesTrak TLE cached 6h + satellite.js, next pass), aircraft (adsb.lol via Cloudflare Worker `worker/flights-proxy.js`, route from adsbdb), Hermon/Meron visibility from Open-Meteo.
- Tested from the live origin: adsb.lol/OpenSky/airplanes.live/adsb.fi have NO CORS; public CORS proxies are dead or need keys. CelesTrak, Open-Meteo, adsbdb work directly.
- Ships: not built (AIS needs a private key); would go through the same worker.

## Related repos
- Eliran-technion/silver-robotics: FRC team structure site.
- Eliran-technion/desktop-calendar-widget: Python/PySide6 Windows calendar widget. `config.json` holds secret iCal URLs and is gitignored; only `config.example.json` is committed.
