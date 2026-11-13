/* =========================================================
   Eliran Dayan · personal landing site
   Edit LINKS below — everything else reads from here.
   ========================================================= */
const LINKS = {
  linkedin: "https://www.linkedin.com/in/%D7%90%D7%9C%D7%99%D7%A8%D7%9F-%D7%93%D7%99%D7%99%D7%9F-2aa1a1344/",
  instagram: "https://www.instagram.com/elirandayan12/",
  email: "eli.dayan.biz@gmail.com",
  whatsapp: "972508512727",       // international format, digits only
};

/* ---------------- content (EN / HE) ---------------- */
const T = {
  en: {
    switchTo: "עברית",
    tagJourney: "02 · Path",
    journeyTitle: "Programs, milestones and the road so far",
    tagPhysical: "03 · Built by hand",
    physicalTitle: "Physical projects",
    physicalLede: "Things I designed, modeled and manufactured. Tap a card for the problem, the engineering and the numbers.",
    tagTech: "04 · Code & tools",
    techTitle: "Tech projects",
    techLede: "Software I build around hardware, teams and labs, mostly with AI as a co‑pilot.",
    footerLine: "Designed and coded with AI as part of the TryAI course · © Eliran Dayan",
    toTop: "Back to top ↑",
    more: "Details →",
    open: "Open site ↗",
    problem: "The problem", solution: "The engineering", build: "Build & numbers", challenge: "The challenge",
    wip: "Under construction", done: "Completed", soon: "Coming next", live: "Live",
  },
  he: {
    switchTo: "English",
    tagJourney: "02 · מסלול",
    journeyTitle: "תוכניות, אבני דרך והדרך עד כאן",
    tagPhysical: "03 · נבנה בידיים",
    physicalTitle: "פרויקטים פיזיים",
    physicalLede: "דברים שתכננתי, מידלתי וייצרתי. לחצו על כרטיס כדי לראות את הבעיה, ההנדסה והמספרים.",
    tagTech: "04 · קוד וכלים",
    techTitle: "פרויקטים טכנולוגיים",
    techLede: "תוכנה שאני בונה סביב חומרה, צוותים ומעבדות, לרוב עם בינה מלאכותית כשותפה לעבודה.",
    footerLine: "עוצב ונכתב בעזרת AI כחלק מקורס TryAI · © אלירן דיין",
    toTop: "חזרה למעלה ↑",
    more: "← לפרטים",
    open: "↗ לאתר",
    problem: "הבעיה", solution: "הפתרון ההנדסי", build: "ייצור ומספרים", challenge: "האתגר",
    wip: "בבנייה", done: "הושלם", soon: "בקרוב", live: "באוויר",
  },
};

const NOW = [
  { kind: { en: "Startup", he: "סטארט‑אפ" },
    title: { en: "The Sandbox · Technion — P2G", he: "The Sandbox בטכניון — P2G" },
    text: { en: "Co‑founder & CTO. Presented our portable printer prototype at Sandbox Demo Day (08/2026).",
            he: "מייסד שותף ו‑CTO. הצגתי את אב הטיפוס של המדפסת הניידת ב‑Sandbox Demo Day (08/2026)." } },
  { kind: { en: "Program", he: "תוכנית" },
    title: { en: "Shulich Leaders scholarship", he: "מלגת מנהיגי שוליך" },
    text: { en: "Accepted in October 2026: scholarship, leadership and a weekly entrepreneurship track.", he: "התקבלתי באוקטובר 2026: מלגה, מנהיגות ומפגש יזמות שבועי." } },
  { kind: { en: "Program", he: "תוכנית" },
    title: { en: "Aneir program", he: "תוכנית אנייר" },
    text: { en: "Student leadership and community program.", he: "תוכנית סטודנטים, מנהיגות וקהילה." } },
  { kind: { en: "Mentoring", he: "הדרכה" },
    title: { en: "FRC robotics mentor", he: "מנטור רובוטיקה FRC" },
    text: { en: "Mentored team #1580 The Blue Monkeys; now mentoring the new Kfar Silver team in its rookie season.",
            he: "ליוויתי את קבוצה 1580 The Blue Monkeys, וכעת מלווה את הקבוצה החדשה של כפר סילבר בעונת הבכורה שלה." } },
  { kind: { en: "Program", he: "תוכנית" },
    title: { en: "RoboPhysics · first cohort", he: "רובופיזיקה · מחזור א׳" },
    text: { en: "Graduated the program's first cohort, April 2024.", he: "בוגר המחזור הראשון של התוכנית, אפריל 2024." } },
  { kind: { en: "Award", he: "פרס" }, award: true,
    title: { en: "Ashkelon Mayor's Award", he: "פרס ראש העיר אשקלון" },
    text: { en: "For volunteering in the community.", he: "על התנדבות בקהילה." } },
  { kind: { en: "Track", he: "מסלול" },
    title: { en: "IDF Atuda (academic reserve)", he: "עתודה אקדמית" },
    text: { en: "Mechanical Engineering B.Sc. as an Atuda cadet.", he: "תואר ראשון בהנדסת מכונות במסלול העתודה." } },
];

/* when = label shown on the timeline (edit years freely) */
const TIMELINE = [
  { when: { en: "2018 · Grade 7", he: "2018 · כיתה ז׳" },
    title: { en: "Accepted to a Mofet excellence class", he: "התקבלתי לכיתת מופת" },
    text: { en: "An accelerated science and technology track, where the habit of building things started.",
            he: "מסלול מואץ למדע וטכנולוגיה, ושם התחיל ההרגל לבנות דברים." } },
  { when: { en: "2021 · Grade 10", he: "2021 · כיתה י׳" },
    title: { en: "Head of grade cohort in the Israeli Scouts", he: "רשג״ד בצופים" },
    text: { en: "Leading a cohort of counselors and the kids they guide.", he: "הובלת שכבת מדריכים והחניכים שלהם." } },
  { when: { en: "Oct 2023", he: "אוקטובר 2023" },
    title: { en: "Volunteering in Ashkelon's shelters", he: "התנדבות במקלטים באשקלון" },
    text: { en: "When the Swords of Iron war began, I spent the days with children in the city's shelters.",
            he: "כשפרצה מלחמת חרבות ברזל, העברתי את הימים עם ילדים במקלטים בעיר." } },
  { when: { en: "2023–24", he: "2023–24" },
    title: { en: "Robotics program coordinator, Ashkelon Municipality", he: "רכז תוכנית הרובוטיקה בעיריית אשקלון" },
    text: { en: "Same year: running the city's robotics program for students.", he: "באותה שנה: ניהול תוכנית הרובוטיקה העירונית לתלמידים." } },
  { when: { en: "Apr 2024", he: "אפריל 2024" },
    title: { en: "Completed the RoboPhysics program, first cohort", he: "סיימתי את תוכנית רובופיזיקה, מחזור א׳" },
    text: { en: "Part of the program's very first cohort, combining physics with hands-on robotics.",
            he: "חלק מהמחזור הראשון של התוכנית, שמשלבת פיזיקה עם רובוטיקה מעשית." } },
  { when: { en: "Jun 2024", he: "יוני 2024" },
    title: { en: "Mayor's Award for community volunteering", he: "פרס ראש העיר על התנדבות בקהילה" },
    text: { en: "Recognition from the city of Ashkelon.", he: "הוקרה מעיריית אשקלון." } },
  { when: { en: "Jun 2024", he: "יוני 2024" },
    title: { en: "Finished high school", he: "סיימתי את התיכון" },
    text: { en: "", he: "" } },
  { when: { en: "2024–25 · Ariel University", he: "2024–25 · אוניברסיטת אריאל" },
    title: { en: "Atuda · Mechanical Engineering", he: "עתודה · הנדסת מכונות" },
    text: { en: "Enlisted to the IDF academic reserve and became a mentor for a Unistream youth entrepreneurship group.",
            he: "התגייסתי לעתודה האקדמית והפכתי למנטור של קבוצת יוניסטרים ליזמות בני נוער." } },
  { when: { en: "2025 · Technion", he: "2025 · הטכניון" },
    title: { en: "Moved to the Technion, still Mechanical Engineering", he: "עברתי לטכניון, נשארתי בהנדסת מכונות" },
    text: { en: "Chose to start over at the Technion in pursuit of academic excellence.",
            he: "בחרתי להתחיל מחדש בטכניון מתוך שאיפה למצוינות אקדמית." } },
  { when: { en: "Aug 2026 · today", he: "אוגוסט 2026 · היום" },
    title: { en: "Mehudar Center for Inventors", he: "מרכז מהודר לממציאים" },
    text: { en: "Operations & technology development: I run the lab and support inventors' engineering and technology needs.",
            he: "רכז תפעול ופיתוח טכנולוגי: מנהל את המעבדה ותומך בצרכים ההנדסיים והטכנולוגיים של הממציאים." } },
  { when: { en: "Oct 2026", he: "אוקטובר 2026" },
    title: { en: "Accepted to the Shulich Leaders scholarship", he: "התקבלתי למלגת מנהיגי שוליך" },
    text: { en: "A scholarship for outstanding students who combine academic excellence with leadership.",
            he: "מלגה לסטודנטים מצטיינים שמשלבים הצטיינות אקדמית עם מנהיגות." } },
  { when: { en: "Next", he: "הבא בתור" }, next: true,
    title: { en: "…waiting for the next achievement", he: "…ורק מחכה להישג הבא" },
    text: { en: "", he: "" } },
];

/* ---------- drawings for projects without photos yet ---------- */
const SVG = {
  hub: `<svg viewBox="0 0 400 250" role="img" aria-label="Concept drawing of a 3D printer folding into a suitcase">
    <rect width="400" height="250" fill="#0e1a26"/><g stroke="#6fb6ff" stroke-opacity=".12">${Array.from({length:20},(_,i)=>`<line x1="${i*20}" y1="0" x2="${i*20}" y2="250"/>`).join("")}${Array.from({length:13},(_,i)=>`<line x1="0" y1="${i*20}" x2="400" y2="${i*20}"/>`).join("")}</g>
    <g fill="none" stroke="#9fd0ff" stroke-width="1.6">
      <path d="M70 200 L330 200 L345 175 L85 175 Z"/><path d="M70 200 L70 214 L330 214 L330 200"/>
      <path d="M85 175 L95 70 L335 70 L345 175" stroke-dasharray="5 4"/>
      <rect x="120" y="160" width="160" height="10" rx="2"/>
      <path d="M140 160 L200 128 L260 160 M140 128 L200 160 L260 128" stroke="#ff8a3d"/>
      <rect x="125" y="118" width="150" height="10"/>
      <path d="M110 118 L110 92 L290 92 L290 118"/><rect x="190" y="92" width="22" height="20" rx="3" stroke="#ff8a3d"/>
      <path d="M185 70 a15 6 0 0 1 30 0"/><path d="M190 200 l0 14 M210 200 l0 14"/>
    </g>
    <g font-family="JetBrains Mono, monospace" font-size="9" fill="#9fd0ff">
      <text x="300" y="150">scissor Z</text><text x="220" y="88">tool head</text><text x="20" y="236">200 × 200 mm bed · sealed case · one‑soldier carry</text>
    </g></svg>`,
  psu: `<svg viewBox="0 0 400 250" role="img" aria-label="Concept drawing of a bench power supply front panel">
    <rect width="400" height="250" fill="#14171a"/>
    <rect x="60" y="45" width="280" height="160" rx="10" fill="#1e2226" stroke="#3a4047"/>
    <rect x="80" y="65" width="120" height="44" rx="4" fill="#0b0d0e"/><rect x="80" y="117" width="120" height="44" rx="4" fill="#0b0d0e"/>
    <text x="190" y="98" text-anchor="end" font-family="JetBrains Mono, monospace" font-size="26" fill="#ff8a3d">12.00</text>
    <text x="190" y="150" text-anchor="end" font-family="JetBrains Mono, monospace" font-size="26" fill="#6fb6ff">1.500</text>
    <text x="206" y="98" font-family="JetBrains Mono, monospace" font-size="12" fill="#9ba0a5">V</text>
    <text x="206" y="150" font-family="JetBrains Mono, monospace" font-size="12" fill="#9ba0a5">A</text>
    <circle cx="260" cy="88" r="20" fill="#2b3035" stroke="#4a5158"/><line x1="260" y1="88" x2="260" y2="72" stroke="#ecebe6" stroke-width="3" stroke-linecap="round"/>
    <circle cx="310" cy="88" r="20" fill="#2b3035" stroke="#4a5158"/><line x1="310" y1="88" x2="322" y2="77" stroke="#ecebe6" stroke-width="3" stroke-linecap="round"/>
    <circle cx="255" cy="160" r="11" fill="#c0392b"/><circle cx="290" cy="160" r="11" fill="#111"/><circle cx="320" cy="160" r="8" fill="#2e7d4f"/>
    <text x="80" y="190" font-family="JetBrains Mono, monospace" font-size="10" fill="#9ba0a5">CV / CC · current limit · 24 V in</text></svg>`,
  robotics: `<svg viewBox="0 0 400 175" role="img" aria-label="Team structure diagram">
    <rect width="400" height="175" fill="#101820"/><g stroke="#3a4a5a" stroke-width="1.5"><path d="M200 45 V70 M80 70 H320 M80 70 V95 M160 70 V95 M240 70 V95 M320 70 V95"/></g>
    <rect x="160" y="18" width="80" height="27" rx="6" fill="#ff8a3d"/><text x="200" y="36" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="11" fill="#111">CAPTAINS</text>
    ${["MECH","ELEC","CODE","BIZ"].map((t,i)=>`<rect x="${50+i*80}" y="95" width="60" height="26" rx="6" fill="#1e2a36" stroke="#6fb6ff"/><text x="${80+i*80}" y="112" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="#9fd0ff">${t}</text>`).join("")}
    <text x="200" y="155" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="#9ba0a5">FRC rookie team · role map</text></svg>`,
  control: `<svg viewBox="0 0 400 175" role="img" aria-label="Tablet control app">
    <rect width="400" height="175" fill="#1a1012"/><rect x="110" y="20" width="180" height="128" rx="12" fill="#0d0f11" stroke="#4a3035"/>
    ${[0,1,2,3,4,5].map(i=>`<rect x="${124+(i%3)*54}" y="${34+Math.floor(i/3)*54}" width="46" height="46" rx="8" fill="${i===0?"#c8102e":"#2a1d20"}"/>`).join("")}
    <text x="200" y="166" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="#9ba0a5">TVs · A/C · casting — one screen</text></svg>`,
  hubweb: `<svg viewBox="0 0 400 175" role="img" aria-label="Exploded view illustration">
    <rect width="400" height="175" fill="#0f1215"/>
    <g fill="none" stroke="#ecebe6" stroke-opacity=".8"><path d="M150 130 l50 20 l50 -20 l-50 -20 z"/><path d="M150 95 l50 20 l50 -20 l-50 -20 z" stroke="#ff8a3d"/><path d="M150 60 l50 20 l50 -20 l-50 -20 z"/><path d="M150 25 l50 20 l50 -20 l-50 -20 z" stroke="#6fb6ff"/></g>
    <g stroke="#9ba0a5" stroke-dasharray="3 4"><line x1="200" y1="45" x2="200" y2="55"/><line x1="200" y1="80" x2="200" y2="90"/><line x1="200" y1="115" x2="200" y2="125"/></g>
    <text x="270" y="100" font-family="JetBrains Mono, monospace" font-size="10" fill="#9ba0a5">CAD → web · 3 modules</text></svg>`,
  api: `<svg viewBox="0 0 400 175" role="img" aria-label="API project placeholder">
    <rect width="400" height="175" fill="#0f141b"/><text x="200" y="100" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="44" fill="#6fb6ff">{ api }</text>
    <text x="200" y="138" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="#9ba0a5">GET /next-project → 202 Accepted</text></svg>`,
};

const PHYSICAL = [
  { id: "hub", status: "wip", img: "assets/hub-field.jpg", gallery: ["assets/hub-field.jpg", "assets/hub-bunker.jpg", "assets/hub-case.jpg", "assets/hub-cad.jpg", "assets/hub-cad-closed.jpg", "assets/hub-prototype.jpg", "assets/hub-prototype-lab.jpg"],
    title: { en: "H.U.B — a 3D printer in a suitcase", he: "H.U.B — מדפסת תלת‑ממד במזוודה" },
    short: { en: "The challenge: a full FDM printer that one soldier can carry, sealed, deployed in minutes.",
             he: "האתגר: מדפסת FDM מלאה שחייל אחד נושא לבד, אטומה, ונפרסת תוך דקות." },
    chips: ["SolidWorks", "Klipper", "MGN7", "Scissor lift"],
    detail: {
      en: [["challenge", "Field units wait days for a broken plastic part. The question we set: can a complete 3D printer fold into a hard case small and light enough for one person, with no holes in the shell so it stays sealed, and still print a 200 × 200 mm bed? Every decision fights volume, weight and power at once."],
           ["solution", "A scissor mechanism lifts the bed instead of tall Z towers, three MGN7 rails carry the motion, and all controls (screen, knob, USB, power) sit at bed level so they're only exposed when the case is open. The latest revision removed the bearings from the scissor joints entirely."],
           ["build", "Prototype built for under 2,000 ₪ and shown at Sandbox Demo Day (08/2026). Next: a T10 lead screw for Z, power‑draw and print‑speed work, and a full MIL‑qualification path."]],
      he: [["challenge", "יחידות בשטח מחכות ימים לחלק פלסטיק שנשבר. השאלה שהצבנו: האם מדפסת תלת‑ממד שלמה יכולה להתקפל לתוך מזוודה קשיחה, קטנה וקלה מספיק לאדם אחד, בלי חורים במעטפת כדי שתישאר אטומה, ועדיין להדפיס על משטח 20 × 20 ס״מ? כל החלטה נאבקת בנפח, במשקל ובצריכת החשמל בבת אחת."],
           ["solution", "מנגנון מספריים מרים את המשטח במקום מגדלי Z גבוהים, שלוש מסילות MGN7 נושאות את התנועה, וכל הממשקים (מסך, כפתור, USB וחשמל) יושבים בגובה המשטח, כך שהם חשופים רק כשהמזוודה פתוחה. בגרסה האחרונה ויתרנו לגמרי על המסבים בצירי המספריים."],
           ["build", "אב טיפוס שנבנה בפחות מ‑2,000 ₪ והוצג ב‑Sandbox Demo Day (08/2026). הבא בתור: בורג T10 לציר Z, עבודה על צריכת חשמל ומהירות הדפסה, ומסלול להסמכה צבאית מלאה."]],
    } },
  { id: "psu", status: "wip", img: "assets/psu-render.jpg", gallery: ["assets/psu-render.jpg"],
    title: { en: "Bench power supply from scratch", he: "ספק כוח מעבדתי מאפס" },
    short: { en: "The challenge: designing my own voltage regulation and current limiting instead of buying a ready module.",
             he: "האתגר: לתכנן בעצמי ייצוב מתח והגבלת זרם במקום לקנות מודול מוכן." },
    chips: ["Power electronics", "CV / CC", "Concept render"],
    detail: {
      en: [["challenge", "Every lab needs a supply you can trust when a prototype shorts out. Buying a module would take an afternoon; designing the regulation and current‑limit loop myself is the real lesson, and the harder path."],
           ["solution", "Start from a 24 V supply I already own, design adjustable constant‑voltage and constant‑current stages, add clear V/A readouts and protection, and package it in a printed enclosure built for a workbench."],
           ["build", "In design. Parts for the first version are being ordered (11/2026)."]],
      he: [["challenge", "כל מעבדה צריכה ספק שאפשר לסמוך עליו ברגע שאב טיפוס עושה קצר. לקנות מודול זה עניין של אחר צהריים; לתכנן בעצמי את לולאת הייצוב והגבלת הזרם זה השיעור האמיתי, והדרך הקשה יותר."],
           ["solution", "יוצאים מספק 24V שכבר יש לי, מתכננים שלבי מתח קבוע וזרם קבוע מתכווננים, מוסיפים תצוגת V/A ברורה והגנות, ואורזים הכול במארז מודפס שמתאים לשולחן עבודה."],
           ["build", "בשלב התכנון. החלקים לגרסה הראשונה בהזמנה (11/2026)."]],
    } },
  { id: "taxi", status: "done", img: "assets/taxi-arm.jpg", gallery: ["assets/taxi-arm.jpg", "assets/taxi-cad.jpg"],
    title: { en: "Rigid articulating taxi‑meter mount", he: "זרוע מפרקית קשיחה למונה מונית" },
    short: { en: "A flexible gooseneck let the meter wobble on every bump. I replaced it with a 5‑joint arm that locks solid.",
             he: "זרוע חוליות גמישה גרמה למונה להתנדנד בכל מהמורה. החלפתי אותה בזרוע 5 מפרקים שננעלת לגמרי." },
    chips: ["SolidWorks", "3D printing", "Lock nuts"],
    detail: {
      en: [["problem", "The meter sat on a flexible segmented arm. The arm's moment and vibration made the meter swing sideways while driving, which made it uncomfortable and unreliable to use."],
           ["solution", "A rigid adjustable arm with 5 joints: controlled degrees of freedom to place the meter exactly where the driver needs it, then lock everything in place."],
           ["build", "Four dedicated models: a meter‑mount adapter, a vacuum‑base interface that fits the existing windshield suction mount, 2 directional male‑female extension links, and a female‑female bridge link that adds a reach axis. Final locking with bolts, lock nuts and Loctite so road vibration can't loosen it."]],
      he: [["problem", "המונה ישב על זרוע חוליות גמישה. המומנט והתנודתיות של הזרוע גרמו למונה לזוז לצדדים בזמן נסיעה, מה שפגע בנוחות וביציבות."],
           ["solution", "זרוע קשיחה מתכווננת עם 5 מפרקים: דרגות חופש נשלטות כדי למקם את המונה בדיוק איפה שהנהג צריך, ואז לנעול את הכול."],
           ["build", "ארבעה מודלים ייעודיים: מתאם לתושבת המונה, תושבת שמתלבשת על בסיס הוואקום הקיים בשמשה, 2 חוליות הארכה כיווניות (זכר‑נקבה), וחוליית גישור (נקבה‑נקבה) שמוסיפה ציר קירוב והרחקה. קיבוע סופי בברגים, אומי נעילה ולוקטייט, כדי שהרעידות בדרך לא ישחררו אותה."]],
    },
    specs: [["5", { en: "joints", he: "מפרקים" }], ["4", { en: "custom parts", he: "חלקים ייעודיים" }]] },
  { id: "shower", status: "done", img: "assets/shower-installed.jpg", gallery: ["assets/shower-installed.jpg", "assets/shower-cad.jpg"],
    title: { en: "Shower bracket retrofit", he: "מתקן חלופי לדוש מקלחת" },
    short: { en: "The holder broke and the showerhead kept falling. Measured, reverse‑engineered and printed a replacement.",
             he: "המחזיק נשבר והדוש המשיך ליפול. מדדתי, הנדסתי לאחור והדפסתי חלק חלופי." },
    chips: ["Reverse engineering", "ABS", "Bambu Lab P1S"],
    detail: {
      en: [["problem", "The part that holds the showerhead broke, so the head kept falling and couldn't be fixed in place."],
           ["solution", "Precise caliper measurements of the broken part, then a new 3D model: one side clamps the existing rail, the other gives the showerhead a rigid seat. Geometry optimized for printing without losing strength."],
           ["build", "Printed in ABS on a Bambu Lab P1S, chosen for its resistance to heat and humidity. Installed directly on the rail with no glue or extra fasteners."]],
      he: [["problem", "החלק שמחזיק את הדוש נשבר, הדוש נפל כל הזמן ואי אפשר היה לקבע אותו."],
           ["solution", "מדידה מדויקת של החלק השבור בקליבר ומידול תלת‑ממדי מחדש: צד אחד חובק את המוט הקיים, והצד השני נותן לדוש מושב קשיח. הגיאומטריה עברה אופטימיזציה להדפסה בלי לוותר על חוזק."],
           ["build", "הודפס מ‑ABS במדפסת Bambu Lab P1S, בזכות העמידות שלו לחום וללחות. מורכב ישירות על המוט, בלי הדבקה ובלי מחברים נוספים."]],
    },
    specs: [["45:19", { en: "min print time", he: "דק׳ הדפסה" }], ["15.26 g", { en: "final part", he: "משקל החלק" }]] },
];

const TECH = [
  { id: "robotics", status: "live", art: SVG.robotics, url: "https://eliran-technion.github.io/silver-robotics/",
    title: { en: "Silver Robotics · team structure site", he: "Silver Robotics · אתר מבנה הקבוצה" },
    short: { en: "A web page that maps every role in a new FRC team, so students choose their path before placement talks with the captains.",
             he: "דף אינטרנט שממפה כל תפקיד בקבוצת FRC חדשה, כדי שכל תלמיד יכוון את עצמו לפני שיחות השיבוץ עם הקפטנים." },
    chips: ["HTML/CSS", "GitHub Pages", "Built with AI"] },
  { id: "control", status: "wip", art: SVG.control,
    title: { en: "MehudarControl · one‑screen lab control", he: "MehudarControl · שליטה על המרכז ממסך אחד" },
    short: { en: "An Android tablet app to run the Mehudar center's TVs, casting and air conditioners from one place.",
             he: "אפליקציית אנדרואיד לטאבלט שמפעילה את המסכים, השידור והמזגנים של מרכז מהודר ממקום אחד." },
    chips: ["Android", "Smart home", "v0.3"] },
  { id: "hubweb", status: "wip", art: SVG.hubweb,
    title: { en: "H.U.B tech hub · interactive exploded view", he: "האב הטכנולוגי של H.U.B · מבט מפוצץ אינטראקטיבי" },
    short: { en: "Real CAD geometry turned into a scroll‑driven 3D story that takes the printer apart module by module.",
             he: "גיאומטריית CAD אמיתית שהופכת לסיפור תלת‑ממדי בגלילה, שמפרק את המדפסת מודול אחרי מודול." },
    chips: ["Three.js", "STEP → GLB", "CAD"] },
  { id: "api", status: "soon", art: SVG.api,
    title: { en: "API project", he: "פרויקט API" },
    short: { en: "The next assignment in the course: a project built around a live API. Stay tuned.",
             he: "המטלה הבאה בקורס: פרויקט שבנוי סביב API חי. בקרוב." },
    chips: ["REST", "fetch()", "TryAI"] },
];

/* ======================= helpers ======================= */
const $ = (s, el = document) => el.querySelector(s);
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const isTouch = matchMedia("(hover: none) and (pointer: coarse)").matches || navigator.maxTouchPoints > 0 || "ontouchstart" in window;
if (isTouch) document.documentElement.classList.add("touch");
let lang = null;
const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch {} },
};
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

/* ======================= contact links ======================= */
function setupLinks() {
  const map = {
    linkedin: LINKS.linkedin,
    instagram: LINKS.instagram,
    email: LINKS.email ? `mailto:${LINKS.email}?subject=${encodeURIComponent("Hi Eliran")}` : "",
    whatsapp: LINKS.whatsapp ? `https://wa.me/${LINKS.whatsapp.replace(/\D/g, "")}` : "",
  };
  document.querySelectorAll("[data-link]").forEach((a) => {
    const url = map[a.dataset.link];
    if (url) a.href = url;
    else { a.classList.add("is-missing"); a.removeAttribute("href"); a.setAttribute("aria-disabled", "true"); }
  });
  if (LINKS.email) $("#contactPlain").textContent = LINKS.email;
}

/* ======================= render content ======================= */
function statusBadge(s) {
  const t = T[lang];
  if (s === "wip") return `<span class="status wip"><span>🚧 ${t.wip}</span></span>`;
  if (s === "done") return `<span class="status done">✓ ${t.done}</span>`;
  if (s === "live") return `<span class="status done">● ${t.live}</span>`;
  return `<span class="status soon">${t.soon}</span>`;
}

function render() {
  const t = T[lang];
  const content = $("#content");
  content.lang = lang;
  content.dir = lang === "he" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = t[el.dataset.i18n]));
  $("#langSwitch").textContent = `⇆ ${t.switchTo}`;

  $("#nowGrid").innerHTML = NOW.map((n) => `
    <article class="now-card reveal ${n.award ? "award" : ""}">
      <span class="kind">${esc(n.kind[lang])}</span>
      <h3>${esc(n.title[lang])}</h3>
      <p>${esc(n.text[lang])}</p>
    </article>`).join("");

  const tl = $("#timeline");
  tl.querySelectorAll(".tl-item").forEach((li) => li.remove());
  tl.insertAdjacentHTML("beforeend", TIMELINE.map((e) => `
    <li class="tl-item reveal ${e.next ? "next" : ""}">
      <span class="tl-when">${esc(e.when[lang])}</span>
      <h3>${esc(e.title[lang])}</h3>
      ${e.text[lang] ? `<p>${esc(e.text[lang])}</p>` : ""}
    </li>`).join(""));

  $("#physicalCards").innerHTML = PHYSICAL.map((p) => `
    <button type="button" class="card reveal" data-id="${p.id}" data-group="physical">
      <div class="card-media">${statusBadge(p.status)}${p.img ? `<img src="${p.img}" alt="${esc(p.title[lang])}" loading="lazy">` : p.art}</div>
      <div class="card-body">
        <h3>${esc(p.title[lang])}</h3>
        <p>${esc(p.short[lang])}</p>
        <div class="chips">${p.chips.map((c) => `<span class="chip">${esc(c)}</span>`).join("")}</div>
        <span class="card-more">${t.more}</span>
      </div>
    </button>`).join("");

  $("#techCards").innerHTML = TECH.map((p) => {
    const inner = `
      <div class="card-media">${statusBadge(p.status)}${p.art}</div>
      <div class="card-body">
        <h3>${esc(p.title[lang])}</h3>
        <p>${esc(p.short[lang])}</p>
        <div class="chips">${p.chips.map((c) => `<span class="chip">${esc(c)}</span>`).join("")}</div>
        ${p.url ? `<span class="card-more">${t.open}</span>` : ""}
      </div>`;
    return p.url
      ? `<a class="card card-tech reveal" href="${p.url}" target="_blank" rel="noopener" style="text-decoration:none">${inner}</a>`
      : `<div class="card card-tech reveal">${inner}</div>`;
  }).join("");

  document.querySelectorAll('[data-group="physical"]').forEach((b) => b.addEventListener("click", () => openSheet(b.dataset.id)));
  observeReveal();
  bindCardTilt();
  updateTimeline();
}

/* ======================= detail sheet ======================= */
function openSheet(id) {
  const p = PHYSICAL.find((x) => x.id === id);
  const t = T[lang];
  const sheet = $("#sheet");
  sheet.dir = lang === "he" ? "rtl" : "ltr";
  sheet.lang = lang;
  const gallery = p.gallery ? p.gallery.map((src) => `<img src="${src}" alt="" loading="lazy">`).join("") : p.art;
  $("#sheetBody").innerHTML = `
    <div class="sheet-gallery">${gallery}</div>
    <div class="sheet-content">
      ${statusBadge(p.status).replace("status", "status inline")}
      <h3>${esc(p.title[lang])}</h3>
      ${p.detail[lang].map(([k, v]) => `<h4>${t[k]}</h4><p>${esc(v)}</p>`).join("")}
      ${p.specs ? `<div class="specs">${p.specs.map(([v, l]) => `<div class="spec"><b>${esc(v)}</b><span>${esc(l[lang])}</span></div>`).join("")}</div>` : ""}
    </div>`;
  const badge = $(".status.inline", sheet);
  if (badge) badge.style.position = "static";
  if (sheet.showModal) sheet.showModal(); else sheet.setAttribute("open", "");
}
function closeSheet() { const s = $("#sheet"); if (s.close) s.close(); else s.removeAttribute("open"); }

/* ======================= language choice ======================= */
function chooseLang(l, scroll = true) {
  lang = l;
  store.set("lang", l);
  document.documentElement.lang = l;
  $("#content").hidden = false;
  document.querySelectorAll(".lang-btn").forEach((b) => b.classList.toggle("is-active", b.dataset.lang === l));
  render();
  if (scroll) requestAnimationFrame(() => $("#journey").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" }));
}

function setupSwipe() {
  const card = $("#swipeCard");
  const sideHe = $(".side-he"), sideEn = $(".side-en");
  let startX = 0, startY = 0, dx = 0, active = false, locked = null;
  const TH = 90;

  const set = (x) => {
    card.style.setProperty("--dx", `${x}px`);
    card.style.setProperty("--rot", `${x / 18}deg`);
    card.classList.toggle("to-he", x > 30);
    card.classList.toggle("to-en", x < -30);
    sideHe.classList.toggle("lit", x > TH);
    sideEn.classList.toggle("lit", x < -TH);
  };
  card.addEventListener("pointerdown", (e) => {
    active = true; locked = null; startX = e.clientX; startY = e.clientY; dx = 0;
    card.classList.add("dragging"); card.setPointerCapture(e.pointerId);
    askMotionPermission();
  });
  card.addEventListener("pointermove", (e) => {
    if (!active) return;
    const mx = e.clientX - startX, my = e.clientY - startY;
    if (locked === null && (Math.abs(mx) > 8 || Math.abs(my) > 8)) locked = Math.abs(mx) > Math.abs(my) ? "x" : "y";
    if (locked !== "x") return;
    dx = mx; set(dx);
  });
  const end = () => {
    if (!active) return;
    active = false; card.classList.remove("dragging");
    if (dx > TH) { set(window.innerWidth); vibrate(); setTimeout(() => { set(0); chooseLang("he"); }, 280); }
    else if (dx < -TH) { set(-window.innerWidth); vibrate(); setTimeout(() => { set(0); chooseLang("en"); }, 280); }
    else set(0);
    dx = 0;
  };
  card.addEventListener("pointerup", end);
  card.addEventListener("pointercancel", end);
  card.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") chooseLang("he");
    if (e.key === "ArrowLeft") chooseLang("en");
  });
}
function vibrate() { try { navigator.vibrate && navigator.vibrate(12); } catch {} }

/* ======================= motion: background grid ======================= */
const pointer = { x: innerWidth / 2, y: innerHeight * 0.3, tx: innerWidth / 2, ty: innerHeight * 0.3, active: false };
function setupGrid() {
  const c = $("#grid"), ctx = c.getContext("2d");
  let w, h, dpr;
  const resize = () => {
    dpr = Math.min(devicePixelRatio || 1, 2);
    w = c.width = innerWidth * dpr; h = c.height = innerHeight * dpr;
  };
  resize(); addEventListener("resize", resize);
  const step = 34;
  const draw = () => {
    pointer.x += (pointer.tx - pointer.x) * 0.12;
    pointer.y += (pointer.ty - pointer.y) * 0.12;
    ctx.clearRect(0, 0, w, h);
    const px = pointer.x * dpr, py = pointer.y * dpr, R = 190 * dpr, s = step * dpr;
    const off = (scrollY * dpr * 0.3) % s;
    for (let y = -off; y < h + s; y += s) {
      for (let x = 0; x < w + s; x += s) {
        const d = Math.hypot(x - px, y - py);
        const k = Math.max(0, 1 - d / R);
        const pushX = k ? ((x - px) / (d || 1)) * k * 10 * dpr : 0;
        const pushY = k ? ((y - py) / (d || 1)) * k * 10 * dpr : 0;
        ctx.fillStyle = k > 0.02 ? `rgba(255,138,61,${0.12 + k * 0.7})` : "rgba(111,182,255,0.10)";
        ctx.fillRect(x + pushX - dpr, y + pushY - dpr, (1.6 + k * 2) * dpr, (1.6 + k * 2) * dpr);
      }
    }
    $("#glow").style.transform = `translate3d(${pointer.x - 260}px, ${pointer.y - 260}px, 0)`;
    if (!reduceMotion) requestAnimationFrame(draw);
  };
  draw();
  const move = (x, y) => { pointer.tx = x; pointer.ty = y; };
  addEventListener("pointermove", (e) => move(e.clientX, e.clientY), { passive: true });
  addEventListener("touchmove", (e) => { const t = e.touches[0]; if (t) move(t.clientX, t.clientY); }, { passive: true });
}

/* ======================= motion: photo tilt (mouse + gyro) ======================= */
function tiltPhoto(nx, ny) { // nx, ny in [-1, 1]
  const el = $(".hero-photo");
  el.style.setProperty("--ry", `${nx * 10}deg`);
  el.style.setProperty("--rx", `${-ny * 10}deg`);
  el.style.setProperty("--sx", `${50 + nx * 40}%`);
  el.style.setProperty("--sy", `${40 + ny * 40}%`);
}
function setupTilt() {
  if (reduceMotion) return;
  addEventListener("pointermove", (e) => {
    if (e.pointerType === "touch") return;
    tiltPhoto((e.clientX / innerWidth) * 2 - 1, (e.clientY / innerHeight) * 2 - 1);
  }, { passive: true });
  // magnetic social buttons
  document.querySelectorAll(".social").forEach((a) => {
    a.addEventListener("pointermove", (e) => {
      if (e.pointerType === "touch") return;
      const r = a.getBoundingClientRect();
      a.style.setProperty("--mx", `${(e.clientX - r.left - r.width / 2) * 0.25}px`);
      a.style.setProperty("--my", `${(e.clientY - r.top - r.height / 2) * 0.35}px`);
    });
    a.addEventListener("pointerleave", () => { a.style.setProperty("--mx", "0px"); a.style.setProperty("--my", "0px"); });
  });
}
let gyroOn = false;
function onOrientation(e) {
  if (e.gamma == null) return;
  const nx = Math.max(-1, Math.min(1, e.gamma / 30));
  const ny = Math.max(-1, Math.min(1, (e.beta - 45) / 30));
  tiltPhoto(nx, ny);
  pointer.tx = innerWidth / 2 + nx * innerWidth * 0.4;
  pointer.ty = innerHeight / 2 + ny * innerHeight * 0.35;
}
function askMotionPermission() {
  if (gyroOn || reduceMotion || !isTouch) return;
  const D = window.DeviceOrientationEvent;
  if (!D) return;
  const start = () => { gyroOn = true; addEventListener("deviceorientation", onOrientation, { passive: true }); };
  if (typeof D.requestPermission === "function") {
    D.requestPermission().then((s) => s === "granted" && start()).catch(() => {});
  } else start();
}

/* ======================= motion: cards & scroll ======================= */
function bindCardTilt() {
  if (reduceMotion || isTouch) return;
  document.querySelectorAll(".card").forEach((c) => {
    c.addEventListener("pointermove", (e) => {
      const r = c.getBoundingClientRect();
      c.style.setProperty("--ry", `${((e.clientX - r.left) / r.width - 0.5) * 8}deg`);
      c.style.setProperty("--rx", `${-((e.clientY - r.top) / r.height - 0.5) * 8}deg`);
    });
    c.addEventListener("pointerleave", () => { c.style.setProperty("--rx", "0deg"); c.style.setProperty("--ry", "0deg"); });
  });
}
let io;
function observeReveal() {
  if (!("IntersectionObserver" in window) || reduceMotion) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
    return;
  }
  io = io || new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
  }), { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  document.querySelectorAll(".reveal:not(.in)").forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 70}ms`;
    io.observe(el);
  });
}
function updateTimeline() {
  const tl = $("#timeline");
  if (!tl || $("#content").hidden) return;
  const r = tl.getBoundingClientRect();
  const mark = innerHeight * 0.62;
  const p = Math.max(0, Math.min(1, (mark - r.top) / r.height));
  $("#timelineFill").style.setProperty("--fill", `${p * 100}%`);
  tl.querySelectorAll(".tl-item").forEach((li) => {
    li.classList.toggle("passed", li.getBoundingClientRect().top + 10 < mark);
  });
}

/* ======================= init ======================= */
function init() {
  setupLinks();
  setupGrid();
  setupTilt();
  setupSwipe();
  document.querySelectorAll(".lang-btn").forEach((b) => b.addEventListener("click", () => { askMotionPermission(); chooseLang(b.dataset.lang); }));
  $("#langSwitch").addEventListener("click", () => chooseLang(lang === "he" ? "en" : "he", false));
  $("#sheetClose").addEventListener("click", closeSheet);
  $("#sheet").addEventListener("click", (e) => { if (e.target.id === "sheet") closeSheet(); });
  addEventListener("scroll", () => requestAnimationFrame(updateTimeline), { passive: true });
  addEventListener("touchstart", askMotionPermission, { once: true, passive: true });

  const saved = store.get("lang");
  if (saved === "he" || saved === "en") chooseLang(saved, false);
}
init();
