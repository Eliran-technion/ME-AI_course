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
- `index.html`: structure. Loads `style.css?v=N` and `script.js?v=N`. **Bump N on every CSS/JS change** (GitHub Pages + browsers cache aggressively). Current: v=11.
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

## Next assignment: API project
- Build in `api-project/` (own index.html/css/js), same visual language as the landing page, mobile-first.
- Static only (no server): call APIs from the browser with `fetch()`. Never put a private API key in client code. API must allow CORS.
- When live: in root `script.js`, set the `TECH` item `id: "api"` to `status: "live"` and add `url: "api-project/"`, then bump `?v=` in root `index.html`.
- Idea shortlist (no key needed): Open-Meteo (field weather for a portable printer), Frankfurter (filament cost with currency conversion), GitHub REST API (my projects activity). Final choice comes from the course requirements.

## Related repos
- Eliran-technion/silver-robotics: FRC team structure site.
- Eliran-technion/desktop-calendar-widget: Python/PySide6 Windows calendar widget. `config.json` holds secret iCal URLs and is gitignored; only `config.example.json` is committed.
