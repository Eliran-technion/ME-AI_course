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

/* Timeline: each title opens to show details. links: [{label:{en,he}, url}], logo: optional image path */
const TIMELINE = [
  { when: { en: "2018 · Grade 7", he: "2018 · כיתה ז׳" },
    title: { en: "Admission to a Mofet excellence class", he: "קבלה לכיתת מופת" },
    text: { en: "An accelerated science and technology track for excellent students, and the starting point of hands-on building.",
            he: "מסלול מואץ למדע וטכנולוגיה לתלמידים מצטיינים, ונקודת המוצא לעשייה הנדסית מעשית." } },
  { when: { en: "2021 · Grade 10", he: "2021 · כיתה י׳" },
    title: { en: "Head of grade cohort (Rashgad), Israeli Scouts", he: "רשג״ד בתנועת הצופים" },
    text: { en: "Leadership of a counselor cohort and its members: activity planning, trip management and responsibility for an entire age group.",
            he: "הובלת שכבת מדריכים וחניכיה: תכנון פעולות, ניהול טיולים ואחריות על שכבת גיל שלמה." },
    links: [{ label: { en: "Israeli Scouts", he: "תנועת הצופים" }, url: "https://www.zofim.org.il/" }] },
  { when: { en: "Oct 2023", he: "אוקטובר 2023" },
    title: { en: "Volunteering in Ashkelon's shelters", he: "התנדבות במקלטים באשקלון" },
    text: { en: "Volunteer work with children in the city's public shelters from the first days of the Swords of Iron war, providing activities and emotional support.",
            he: "התנדבות עם ילדים במקלטים הציבוריים בעיר מהימים הראשונים של מלחמת חרבות ברזל, לצורך הפעלה ותמיכה רגשית." } },
  { when: { en: "2023–24", he: "2023–24" },
    title: { en: "Robotics program coordinator, Ashkelon Municipality", he: "רכז תוכנית הרובוטיקה בעיריית אשקלון" },
    text: { en: "Management of the municipal robotics program for school students.", he: "ניהול תוכנית הרובוטיקה העירונית לתלמידי בתי הספר." } },
  { when: { en: "Apr 2024", he: "אפריל 2024" },
    title: { en: "Graduate of the RoboPhysics program, first cohort", he: "בוגר תוכנית רובופיזיקה, מחזור א׳" },
    text: { en: "Member of the program's founding cohort, combining physics with applied robotics.",
            he: "חבר במחזור המייסד של התוכנית, המשלבת פיזיקה עם רובוטיקה יישומית." } },
  { when: { en: "Jun 2024", he: "יוני 2024" },
    title: { en: "Ashkelon Mayor's Award for community volunteering", he: "פרס ראש העיר אשקלון על התנדבות בקהילה" },
    text: { en: "Recognition from the city of Ashkelon for volunteering in the community.", he: "הוקרה מעיריית אשקלון על התנדבות בקהילה." } },
  { when: { en: "Jun 2024", he: "יוני 2024" },
    title: { en: "High school graduation", he: "סיום לימודים תיכוניים" },
    text: { en: "Completion of high school and a direct transition to engineering studies.", he: "סיום י״ב ומעבר ישיר ללימודי הנדסה." } },
  { when: { en: "Sep 2024", he: "ספטמבר 2024" },
    title: { en: "Mentor, FRC team #1580 The Blue Monkeys", he: "מנטור בקבוצת FRC 1580 The Blue Monkeys" },
    text: { en: "Guiding high‑school students through design, build and competition in FIRST Robotics.",
            he: "ליווי תלמידי תיכון בתכנון, בבנייה ובתחרות של FIRST Robotics." },
    links: [{ label: { en: "FIRST Israel", he: "FIRST ישראל" }, url: "https://www.firstisrael.org.il/" }] },
  { when: { en: "Oct 2024 · Ariel University", he: "אוקטובר 2024 · אוניברסיטת אריאל" },
    title: { en: "Start of the Atuda (IDF academic reserve), Ariel University · Mechanical Engineering", he: "תחילת העתודה האקדמית, אוניברסיטת אריאל · הנדסת מכונות" },
    text: { en: "B.Sc. in Mechanical Engineering within the IDF academic reserve track; first year completed with an average of about 90.",
            he: "תואר ראשון בהנדסת מכונות במסלול העתודה האקדמית; שנה א׳ הושלמה בממוצע של כ‑90." },
    links: [{ label: { en: "Ariel University", he: "אוניברסיטת אריאל" }, url: "https://www.ariel.ac.il/" }] },
  { when: { en: "Jan 2025", he: "ינואר 2025" },
    title: { en: "Mentor at Unistream", he: "מנטור ביוניסטרים" },
    text: { en: "Mentoring a group of teenagers in Unistream's youth entrepreneurship program, from an initial idea to a working venture.",
            he: "ליווי קבוצת בני נוער בתוכנית היזמות של יוניסטרים, מרעיון ראשוני ועד מיזם פועל." },
    links: [{ label: { en: "Unistream", he: "יוניסטרים" }, url: "https://www.unistream.co.il/" }] },
  { when: { en: "Oct 2025 · Technion", he: "אוקטובר 2025 · הטכניון" },
    title: { en: "Transfer to the Technion", he: "מעבר לטכניון" },
    text: { en: "A fresh start of the Mechanical Engineering degree at the Technion, driven by the pursuit of academic excellence.",
            he: "התחלה מחדש של התואר בהנדסת מכונות בטכניון, מתוך שאיפה למצוינות אקדמית." },
    links: [{ label: { en: "Technion", he: "הטכניון" }, url: "https://www.technion.ac.il/" }] },
  { when: { en: "Aug 2026", he: "אוגוסט 2026" },
    title: { en: "H.U.B presentation at Sandbox Demo Day", he: "הצגת H.U.B ב‑Sandbox Demo Day" },
    text: { en: "A working prototype of a portable 3D printer, developed as part of the challenge together with a venture concept, presented at the Technion's Sandbox Demo Day.",
            he: "אב טיפוס עובד של מדפסת תלת‑ממד ניידת, שפותח במסגרת האתגר יחד עם תפיסת מיזם, והוצג ב‑Sandbox Demo Day בטכניון." } },
  { when: { en: "Aug 2026 · today", he: "אוגוסט 2026 · היום" },
    title: { en: "Operations & Technology Development Coordinator, Mehudar Center for Inventors", he: "רכז תפעול ופיתוח טכנולוגי, מרכז מהודר לממציאים" },
    text: { en: "Lab management and engineering and technology support for the center's inventors.",
            he: "ניהול המעבדה ותמיכה בצרכים ההנדסיים והטכנולוגיים של ממציאי המרכז." },
    links: [{ label: { en: "T‑Hub · Mehudar", he: "T‑Hub · מהודר" }, url: "https://t-hub.technion.ac.il/" }] },
  { when: { en: "Oct 2026", he: "אוקטובר 2026" },
    title: { en: "Admission to the Schulich Leaders program, Technion", he: "קבלה למלגת מנהיגי שוליך בטכניון" },
    text: { en: "The Technion's flagship entrepreneurship program. Admission is reserved for students with a leadership and entrepreneurial character, and the program's goal is to encourage entrepreneurship and advance real projects.",
            he: "תוכנית היזמות המובילה של הטכניון. הקבלה מיועדת לסטודנטים בעלי אופי מנהיגותי ויזמי, ומטרת התוכנית היא לעודד יזמות ולקדם פרויקטים." },
    logo: "assets/shulich-logo.png",
    links: [{ label: { en: "Schulich Leaders Technion", he: "מנהיגי שוליך בטכניון" }, url: "https://schulichleaders.technion.ac.il/" }] },
  { when: { en: "Nov 2026", he: "נובמבר 2026" },
    title: { en: "Mentor, Kfar Silver rookie FRC team", he: "מנטור, קבוצת ה‑FRC החדשה של כפר סילבר" },
    text: { en: "Establishing a new robotics team from day one: team structure, role definition and a first competition season.",
            he: "הקמת קבוצת רובוטיקה חדשה מהיום הראשון: מבנה קבוצה, הגדרת תפקידים ועונת תחרות ראשונה." },
    links: [{ label: { en: "Team structure site", he: "אתר מבנה הקבוצה" }, url: "https://eliran-technion.github.io/silver-robotics/" }] },
  { when: { en: "Next", he: "הבא בתור" }, next: true,
    title: { en: "…waiting for the next achievement", he: "…ורק מחכה להישג הבא" } },
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
  calwidget: `<svg viewBox="0 0 400 175" role="img" aria-label="Weekly calendar widget">
    <rect width="400" height="175" fill="#101418"/>
    <rect x="70" y="18" width="260" height="140" rx="12" fill="#1b2026" stroke="#2e3640"/>
    ${[0,1,2,3,4].map(i=>`<text x="${103+i*48}" y="36" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="9" fill="#9ba0a5">${["SUN","MON","TUE","WED","THU"][i]}</text><line x1="${80+i*48}" y1="44" x2="${80+i*48}" y2="150" stroke="#2a3138"/>`).join("")}
    ${[0,1,2,3].map(i=>`<line x1="80" y1="${62+i*24}" x2="320" y2="${62+i*24}" stroke="#232a31"/>`).join("")}
    <rect x="84" y="48" width="40" height="30" rx="4" fill="#ff8a3d" opacity=".9"/><rect x="132" y="70" width="40" height="40" rx="4" fill="#6fb6ff" opacity=".9"/>
    <rect x="180" y="52" width="40" height="22" rx="4" fill="#12c4a8" opacity=".9"/><rect x="228" y="96" width="40" height="44" rx="4" fill="#c8102e" opacity=".9"/><rect x="276" y="60" width="40" height="28" rx="4" fill="#e0338f" opacity=".9"/>
    <text x="200" y="170" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="9" fill="#9ba0a5">auto-refresh · exam countdown</text></svg>`,
  printfarm: `<svg viewBox="0 0 400 175" role="img" aria-label="Print management system diagram">
    <rect width="400" height="175" fill="#14100f"/>
    <rect x="30" y="58" width="74" height="50" rx="6" fill="#1f2a1f" stroke="#6fbf73"/><text x="67" y="80" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="#9fe0a3">Raspberry</text><text x="67" y="94" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="#9fe0a3">Pi</text>
    ${[0,1,2,3].map(i=>`<rect x="${170+i*55}" y="54" width="44" height="54" rx="5" fill="#1e2226" stroke="#4a5158"/><rect x="${178+i*55}" y="62" width="28" height="18" rx="2" fill="${i<3?"#ff8a3d":"#6fb6ff"}" opacity=".85"/><line x1="104" y1="83" x2="${170+i*55}" y2="81" stroke="#3a4047" stroke-dasharray="3 3"/>`).join("")}
    <rect x="30" y="128" width="74" height="24" rx="4" fill="#c8102e"/><text x="67" y="144" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="#fff">APPROVE ✓</text>
    <text x="280" y="148" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="#9ba0a5">3× P1S · U1 · monthly report.xlsx</text>
    <text x="200" y="30" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="11" fill="#9ba0a5">upload → approve → print → report</text></svg>`,
  api: `<svg viewBox="0 0 400 175" role="img" aria-label="API project placeholder">
    <rect width="400" height="175" fill="#0f141b"/><text x="200" y="100" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="44" fill="#6fb6ff">{ api }</text>
    <text x="200" y="138" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="#9ba0a5">GET /next-project → 202 Accepted</text></svg>`,
};

const PHYSICAL = [
  { id: "hub", status: "wip", img: "assets/hub-hero.jpg", gallery: ["assets/hub-hero.jpg", "assets/hub-field.jpg", "assets/hub-bunker.jpg", "assets/hub-case.jpg", "assets/hub-cad.jpg", "assets/hub-cad-closed.jpg", "assets/hub-prototype.jpg", "assets/hub-prototype-lab.jpg"],
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
  { id: "taxi", status: "done", img: "assets/taxi-studio.jpg", gallery: ["assets/taxi-studio.jpg", "assets/taxi-cad-studio.jpg"],
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
  { id: "shower", status: "done", img: "assets/shower-studio.jpg", gallery: ["assets/shower-studio.jpg", "assets/shower-cad-studio.jpg"],
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
  { id: "calwidget", status: "done", art: SVG.calwidget, url: "https://github.com/Eliran-technion/desktop-calendar-widget",
    title: { en: "Live desktop calendar widget", he: "ווידג'ט יומן חי לשולחן העבודה" },
    short: { en: "A Python desktop widget for Windows that shows Google calendars as an iPad-style weekly grid, color-coded per calendar, with hover details, an exam countdown and automatic refresh every few minutes.",
             he: "ווידג'ט Python לשולחן העבודה ב-Windows שמציג את יומני Google בתצוגה שבועית בסגנון iPad, צבע לכל יומן, פרטים במעבר עכבר, ספירה לאחור למבחן הקרוב ורענון אוטומטי כל כמה דקות." },
    chips: ["Python", "PySide6", "iCal sync", "Windows"] },
  { id: "control", status: "wip", art: SVG.control,
    title: { en: "MehudarControl · one‑screen lab control", he: "MehudarControl · שליטה על המרכז ממסך אחד" },
    short: { en: "An Android tablet app to run the Mehudar center's TVs, casting and air conditioners from one place.",
             he: "אפליקציית אנדרואיד לטאבלט שמפעילה את המסכים, השידור והמזגנים של מרכז מהודר ממקום אחד." },
    chips: ["Android", "Smart home", "v0.3"] },
  { id: "hubweb", status: "wip", art: SVG.hubweb,
    title: { en: "Tech Hub · a Claude skill for inventors", he: "האב טכנולוגי · סקיל לקלוד עבור ממציאים" },
    short: { en: "A Claude skill that helps inventors explain their product and its problems in a simple, graphic and visual way, with an interactive exploded view built from real CAD. First tested on H.U.B.",
             he: "סקיל לקלוד שנותן לממציאים יכולת להסביר את המוצר שלהם ואת הבעיות שלו בצורה פשוטה, גרפית וויזואלית, כולל מבט מפוצץ אינטראקטיבי מתוך ה‑CAD האמיתי. נבדק לראשונה על H.U.B." },
    chips: ["Claude skill", "Three.js", "CAD → web"] },
  { id: "printfarm", status: "wip", art: SVG.printfarm,
    title: { en: "Remote print management for Mehudar", he: "מערכת שליטה מרחוק על המדפסות במהודר" },
    short: { en: "A Raspberry Pi web server for the center's 3D printers: inventors upload files, a manager approves each job, the system tracks printer status and filament, and sends a monthly print report.",
             he: "שרת אתר על Raspberry Pi למדפסות התלת‑ממד של המרכז: ממציאים מעלים קבצים, אחראי מאשר כל הדפסה, המערכת עוקבת אחרי מצב המדפסות והחומר, ומפיקה דוח הדפסות חודשי." },
    chips: ["Raspberry Pi", "Web server", "Bambu Lab P1S", "Monthly reports"] },
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

  const tl = $("#timeline");
  tl.querySelectorAll(".tl-item").forEach((li) => li.remove());
  tl.insertAdjacentHTML("beforeend", TIMELINE.map((e) => e.next ? `
    <li class="tl-item reveal next">
      <span class="tl-when">${esc(e.when[lang])}</span>
      <h3>${esc(e.title[lang])}</h3>
    </li>` : `
    <li class="tl-item reveal">
      <details>
        <summary>
          <span class="tl-when">${esc(e.when[lang])}</span>
          <span class="tl-title">${esc(e.title[lang])}<span class="tl-plus" aria-hidden="true"></span></span>
        </summary>
        <div class="tl-detail">
          ${e.logo ? `<img class="tl-logo" src="${e.logo}" alt="" onerror="this.remove()">` : ""}
          <p>${esc(e.text[lang])}</p>
          ${e.links ? `<p class="tl-links">${e.links.map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${esc(l.label[lang])} ↗</a>`).join("")}</p>` : ""}
        </div>
      </details>
    </li>`).join(""));

  $("#physicalCards").innerHTML = PHYSICAL.map((p) => `
    <button type="button" class="card reveal" data-id="${p.id}" data-group="physical">
      <div class="card-media">${statusBadge(p.status)}${p.img ? `<img src="${p.img}" alt="${esc(p.title[lang])}">` : p.art}</div>
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
  const t0 = performance.now();
  const draw = () => {
    const tt = (performance.now() - t0) / 1000;
    if (isTouch && !gyroOn) { // gentle autonomous drift instead of following the finger
      pointer.tx = innerWidth * (0.5 + 0.35 * Math.sin(tt * 0.35));
      pointer.ty = innerHeight * (0.45 + 0.3 * Math.sin(tt * 0.23 + 1.3));
    }
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
        const hue = (20 + (x / w) * 140 + (y / h) * 90 + tt * 12 + scrollY * 0.05) % 360;
        ctx.fillStyle = `hsla(${hue}, 95%, ${62 + k * 10}%, ${0.13 + k * 0.75})`;
        ctx.fillRect(x + pushX - dpr, y + pushY - dpr, (1.6 + k * 2) * dpr, (1.6 + k * 2) * dpr);
      }
    }
    $("#glow").style.transform = `translate3d(${pointer.x - 260}px, ${pointer.y - 260}px, 0)`;
    if (!reduceMotion) requestAnimationFrame(draw);
  };
  draw();
  const move = (x, y) => { pointer.tx = x; pointer.ty = y; };
  addEventListener("pointermove", (e) => { if (e.pointerType !== "touch") move(e.clientX, e.clientY); }, { passive: true });
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

/* ======================= touch: perspective follows scroll ======================= */
function updatePerspective() {
  document.documentElement.style.setProperty("--scroll", String(scrollY));
  if (!isTouch || reduceMotion) return;
  const vh = innerHeight;
  if (!gyroOn) {
    const p = Math.min(1, scrollY / (vh * 0.9));
    tiltPhoto(0, -p * 1.2);
  }
  document.querySelectorAll(".card, .tl-detail").forEach((c) => {
    const r = c.getBoundingClientRect();
    if (r.bottom < 0 || r.top > vh) return;
    const p = ((r.top + r.height / 2) - vh / 2) / vh; // -0.5 (top) .. 0.5 (bottom)
    c.style.setProperty("--rx", `${(-p * 14).toFixed(2)}deg`);
    c.style.setProperty("--ry", "0deg");
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
  addEventListener("scroll", () => requestAnimationFrame(() => { updateTimeline(); updatePerspective(); }), { passive: true });
  updatePerspective();
  addEventListener("touchstart", askMotionPermission, { once: true, passive: true });

  const saved = store.get("lang");
  if (saved === "he" || saved === "en") chooseLang(saved, false);
}
init();
