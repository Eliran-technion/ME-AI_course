/* =====================================================================
   Object Compass · מצפן אובייקטים
   Phone sensors (GPS + orientation) + live APIs → point at one thing.

   Data sources (all called from the browser):
   - CelesTrak TLE sets         → satellites, propagated locally with satellite.js
   - adsb.lol (through a small Cloudflare Worker, see worker/) → live aircraft
   - adsbdb                     → flight route (origin → destination)
   - Open-Meteo                 → current visibility / cloud cover (can I see the Hermon?)
   - Sun & Moon                 → computed here, no API needed
   ===================================================================== */
(() => {
"use strict";
const CFG = Object.assign({ FLIGHT_PROXY: "", FLIGHT_RADIUS_NM: 60, MAG_DECLINATION: 5 }, window.OC_CONFIG || {});

/* ============================ strings ============================ */
const T = {
  he: {
    back: "← לאתר הראשי", brand: "Object Compass", switchTo: "EN",
    eyebrow: "חיישני הטלפון × API חי", title: "מצפן אובייקטים",
    lede: "בוחרים דבר אחד בעולם: הכותל, החרמון, המטוס שמעיר אותך בלילה או תחנת החלל. הטלפון מראה לאן להסתכל.",
    start: "הפעל מצפן",
    startFine: "האתר יבקש גישה למיקום ולחיישני התנועה. המיקום נשלח רק לשירותי הנתונים (מזג אוויר, מטוסים) כדי לחשב מה סביבך. האתר עצמו לא שומר אותו בשום שרת.",
    change: "החלף יעד", elev: "גובה",
    manualLabel: "אין חיישן מצפן במכשיר הזה. סובב ידנית לאן אתה מסתכל:",
    calib: "המצפן קופץ? הזז את הטלפון בתנועת 8 באוויר כמה פעמים, והתרחק ממתכת.",
    pickTitle: "לאן מכוונים?",
    tabPlaces: "מקומות", tabPlanes: "מטוסים", tabSpace: "חלל", tabShips: "ספינות",
    locTitle: "לא הצלחתי לקבל מיקום",
    locText: "אפשר לאשר גישה למיקום בהגדרות הדפדפן, או לבחור עיר קרובה:",
    kPlace: "מקום", kSaved: "נקודה ששמרת", kSky: "שמיים", kSat: "לוויין", kPlane: "מטוס",
    bearing: "כיוון", dist: "מרחק", elevR: "זווית גובה", range: "טווח", alt: "גובה טיסה", speed: "מהירות",
    onTarget: "על הכוונת", turnR: "סובב ימינה", turnL: "סובב שמאלה",
    below: "מתחת לאופק", liftPhone: "הרם את הטלפון כדי לכוון גם לגובה",
    sensIOS: "מצפן: iOS", sensAbs: "מצפן: פעיל", sensNone: "מצפן: ידני", sensWait: "מצפן: מחכה לחיישן…",
    gpsWait: "מחכה ל-GPS…", gpsAcc: (m) => `GPS ±${m} מ׳`, gpsManual: (c) => `מיקום ידני: ${c}`,
    savedH: "נקודות ששמרת", savePlaceholder: "שם לנקודה (למשל: הרכב)", saveBtn: "שמור כאן",
    savedHint: "שומר את המיקום הנוכחי שלך, כדי למצוא אותו אחר כך. למשל איפה חנית.",
    placesH: "ציוני דרך",
    nearestPlane: "המטוס הקרוב אליי עכשיו", nearestPlaneSub: "מתחלף לבד: מי שעובר הכי קרוב",
    planesNoProxy: "מיקומי מטוסים בזמן אמת דורשים שרת ביניים קטן (מקורות המטוסים חוסמים קריאה ישירה מדפדפן). צריך להעלות את <code>worker/flights-proxy.js</code> ל-Cloudflare ולהדביק את הכתובת ב-<code>config.js</code>.",
    planesErr: "לא הצלחתי למשוך מטוסים כרגע. אנסה שוב עוד רגע.",
    planesNone: "אין כרגע מטוסים בטווח.", loading: "טוען…",
    skyH: "שמש וירח", satPicksH: "מומלצים", satVisH: "לוויינים מעליך עכשיו",
    satNone: "אין כרגע לוויינים בהירים מעל האופק.", satErr: "לא הצלחתי לטעון נתוני לוויינים.",
    shipsText: "ספינות בזמן אמת (AIS) זמינות רק דרך שירותים שדורשים מפתח פרטי, ומפתח כזה לא שמים בקוד של אתר. זה השלב הבא: אותו שרת ביניים של המטוסים יכול להחזיק את המפתח בצורה בטוחה.",
    sun: "השמש", moon: "הירח",
    iss: "תחנת החלל הבינלאומית", css: "תחנת החלל הסינית טיאנגונג", hst: "טלסקופ החלל האבל",
    nextPass: (t, az, mx) => `המעבר הבא: <b>${t}</b>, יעלה מכיוון ${az}, ויגיע לגובה ${mx}°`,
    passNow: (mx) => `<b>עובר מעליך עכשיו!</b> גובה מקסימלי במעבר: ${mx}°`,
    noPass: "אין מעבר מעל 10° ב-24 השעות הקרובות.",
    satEye: "חשוך אצלך והלוויין גבוה. אם הוא מואר בשמש, אפשר לראות אותו בעין כנקודה שזזה.",
    orbitAlt: (km, v) => `גובה מסלול ${km} ק״מ · מהירות כ-${v} קמ״ש`,
    moonPhase: (p) => `מואר ${p}%`,
    route: (a, b) => `<bdi dir="ltr"><b>${a}</b> → <b>${b}</b></bdi>`, routeUnknown: "מסלול לא ידוע",
    planeLost: "המטוס יצא מהטווח או הפסיק לשדר.",
    acType: (t, r) => [t, r].filter(Boolean).join(" · "),
    visGood: "סיכוי טוב לראות. האוויר צלול והשמיים כמעט בלי עננים.",
    visMid: "סיכוי בינוני. יש קצת אובך או עננים.",
    visLow: (km) => `סיכוי נמוך. הראות כרגע כ-${km} ק״מ.`,
    visNight: "חשוך עכשיו. בלילה לא תראה את ההר עצמו.",
    visGeo: "ההר מתחת לאופק מהנקודה שלך. בגלל עקמומיות כדור הארץ לא תראה אותו מכאן.",
    visSmall: (vk, cc) => `ראות ${vk} ק״מ · עננות ${cc}% · לא מחושבים הרים שחוסמים בדרך`,
    cityH: "ערים",
    km: "ק״מ", m: "מ׳",
    updated: (s) => `עודכן לפני ${s} שנ׳`,
  },
  en: {
    back: "← Main site", brand: "Object Compass", switchTo: "עב",
    eyebrow: "Phone sensors × live APIs", title: "Object Compass",
    lede: "Pick one thing in the world: the Western Wall, Mount Hermon, the plane that wakes you up at night, the space station. Your phone shows where to look.",
    start: "Start compass",
    startFine: "The site will ask for location and motion sensors. Your location goes only to the data services (weather, aircraft) to find what is around you. The site itself stores it on no server.",
    change: "Change", elev: "ELEV",
    manualLabel: "No compass sensor on this device. Set the direction you face by hand:",
    calib: "Compass jumping? Wave the phone in a figure 8 a few times and step away from metal.",
    pickTitle: "Point at what?",
    tabPlaces: "Places", tabPlanes: "Aircraft", tabSpace: "Space", tabShips: "Ships",
    locTitle: "Couldn't get your location",
    locText: "Allow location in the browser settings, or pick a nearby city:",
    kPlace: "Place", kSaved: "Saved point", kSky: "Sky", kSat: "Satellite", kPlane: "Aircraft",
    bearing: "Bearing", dist: "Distance", elevR: "Elevation", range: "Range", alt: "Altitude", speed: "Speed",
    onTarget: "On target", turnR: "Turn right", turnL: "Turn left",
    below: "Below the horizon", liftPhone: "Raise the phone to aim up or down too",
    sensIOS: "Compass: iOS", sensAbs: "Compass: on", sensNone: "Compass: manual", sensWait: "Compass: waiting for sensor…",
    gpsWait: "Waiting for GPS…", gpsAcc: (m) => `GPS ±${m} m`, gpsManual: (c) => `Manual location: ${c}`,
    savedH: "Your saved points", savePlaceholder: "Name it (e.g. my car)", saveBtn: "Save here",
    savedHint: "Saves where you are now so you can find it later, like where you parked.",
    placesH: "Landmarks",
    nearestPlane: "The plane closest to me", nearestPlaneSub: "Switches on its own to whatever passes closest",
    planesNoProxy: "Live aircraft positions need a tiny proxy (the flight sources block direct browser calls). Deploy <code>worker/flights-proxy.js</code> to Cloudflare and paste its URL into <code>config.js</code>.",
    planesErr: "Couldn't load aircraft right now. Retrying shortly.",
    planesNone: "No aircraft in range right now.", loading: "Loading…",
    skyH: "Sun & Moon", satPicksH: "Highlights", satVisH: "Satellites above you now",
    satNone: "No bright satellites above the horizon right now.", satErr: "Couldn't load satellite data.",
    shipsText: "Live ships (AIS) are only available from services that need a private key, and a key never goes into a website's code. Next step: the same proxy used for aircraft can hold that key safely.",
    sun: "The Sun", moon: "The Moon",
    iss: "International Space Station", css: "Tiangong space station", hst: "Hubble Space Telescope",
    nextPass: (t, az, mx) => `Next pass: <b>${t}</b>, rising in the ${az}, up to ${mx}°`,
    passNow: (mx) => `<b>Passing over you now!</b> Max elevation this pass: ${mx}°`,
    noPass: "No pass above 10° in the next 24 hours.",
    satEye: "It's dark where you are and the satellite is high. If it's sunlit you may see it as a moving dot.",
    orbitAlt: (km, v) => `Orbit ${km} km up · about ${v} km/h`,
    moonPhase: (p) => `${p}% lit`,
    route: (a, b) => `<bdi dir="ltr"><b>${a}</b> → <b>${b}</b></bdi>`, routeUnknown: "Route unknown",
    planeLost: "This aircraft left the range or stopped transmitting.",
    acType: (t, r) => [t, r].filter(Boolean).join(" · "),
    visGood: "Good chance to see it. Clear air and almost no clouds.",
    visMid: "Fair chance. Some haze or clouds.",
    visLow: (km) => `Low chance. Visibility is about ${km} km right now.`,
    visNight: "It's dark now. You won't see the mountain itself at night.",
    visGeo: "The mountain is below your horizon. Earth's curvature hides it from here.",
    visSmall: (vk, cc) => `Visibility ${vk} km · clouds ${cc}% · mountains in between are not checked`,
    cityH: "Cities",
    km: "km", m: "m",
    updated: (s) => `updated ${s}s ago`,
  },
};

/* ============================ data ============================ */
// h = height above sea level in meters (used for elevation angle and line-of-sight)
const PLACES = [
  { id: "kotel",   lat: 31.7767, lon: 35.2345, h: 750,  name: { he: "הכותל המערבי", en: "Western Wall" } },
  { id: "hermon",  lat: 33.4164, lon: 35.8573, h: 2814, peak: true, name: { he: "החרמון", en: "Mount Hermon" } },
  { id: "meron",   lat: 32.9980, lon: 35.4100, h: 1208, peak: true, name: { he: "הר מירון", en: "Mount Meron" } },
  { id: "kinneret",lat: 32.8231, lon: 35.5831, h: -210, name: { he: "הכנרת (טבריה)", en: "Sea of Galilee" } },
  { id: "bahai",   lat: 32.8144, lon: 34.9870, h: 150,  name: { he: "הגנים הבהאיים, חיפה", en: "Bahá'í Gardens, Haifa" } },
  { id: "technion",lat: 32.7767, lon: 35.0231, h: 200,  name: { he: "הטכניון", en: "Technion" } },
  { id: "azrieli", lat: 32.0744, lon: 34.7920, h: 50,   name: { he: "מגדלי עזריאלי, תל אביב", en: "Azrieli Towers, Tel Aviv" } },
  { id: "ashkelon",lat: 31.6688, lon: 34.5743, h: 30,   name: { he: "אשקלון", en: "Ashkelon" } },
  { id: "masada",  lat: 31.3156, lon: 35.3536, h: 60,   name: { he: "מצדה", en: "Masada" } },
  { id: "eilat",   lat: 29.5577, lon: 34.9519, h: 0,    name: { he: "אילת", en: "Eilat" } },
  { id: "mecca",   lat: 21.4225, lon: 39.8262, h: 300,  name: { he: "מכה (כיוון הקיבלה)", en: "Mecca (Qibla)" } },
];
const CITIES = [
  { id: "haifa", lat: 32.7940, lon: 34.9896, name: { he: "חיפה", en: "Haifa" } },
  { id: "ta", lat: 32.0853, lon: 34.7818, name: { he: "תל אביב", en: "Tel Aviv" } },
  { id: "jlm", lat: 31.7683, lon: 35.2137, name: { he: "ירושלים", en: "Jerusalem" } },
  { id: "ashk", lat: 31.6688, lon: 34.5743, name: { he: "אשקלון", en: "Ashkelon" } },
  { id: "b7", lat: 31.2520, lon: 34.7915, name: { he: "באר שבע", en: "Beersheba" } },
];
const SAT_PICKS = [
  { id: 25544, key: "iss" },
  { id: 48274, key: "css" },
  { id: 20580, key: "hst" },
];
const TLE_URLS = {
  stations: "https://celestrak.org/NORAD/elements/gp.php?GROUP=stations&FORMAT=tle",
  visual: "https://celestrak.org/NORAD/elements/gp.php?GROUP=visual&FORMAT=tle",
};

/* ============================ helpers ============================ */
const $ = (s, el = document) => el.querySelector(s);
const R_EARTH = 6371;
const rad = (d) => d * Math.PI / 180, deg = (r) => r * 180 / Math.PI;
const norm = (a) => ((a % 360) + 360) % 360;
const angDiff = (a, b) => ((a - b + 540) % 360) - 180;          // a minus b, in −180..180
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const store = {
  get(k, fb = null) { try { const v = localStorage.getItem(k); return v == null ? fb : JSON.parse(v); } catch { return fb; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
  raw(k) { try { return localStorage.getItem(k); } catch { return null; } },
  rawSet(k, v) { try { localStorage.setItem(k, v); } catch {} },
};

// great-circle initial bearing and distance
function bearingTo(lat1, lon1, lat2, lon2) {
  const p1 = rad(lat1), p2 = rad(lat2), dl = rad(lon2 - lon1);
  return norm(deg(Math.atan2(Math.sin(dl) * Math.cos(p2), Math.cos(p1) * Math.sin(p2) - Math.sin(p1) * Math.cos(p2) * Math.cos(dl))));
}
function distKm(lat1, lon1, lat2, lon2) {
  const p1 = rad(lat1), p2 = rad(lat2), dp = p2 - p1, dl = rad(lon2 - lon1);
  const a = Math.sin(dp / 2) ** 2 + Math.cos(p1) * Math.cos(p2) * Math.sin(dl / 2) ** 2;
  return 2 * R_EARTH * Math.asin(Math.min(1, Math.sqrt(a)));
}
function movePoint(lat, lon, brgDeg, dKm) {
  const d = dKm / R_EARTH, b = rad(brgDeg), p1 = rad(lat), l1 = rad(lon);
  const p2 = Math.asin(Math.sin(p1) * Math.cos(d) + Math.cos(p1) * Math.sin(d) * Math.cos(b));
  const l2 = l1 + Math.atan2(Math.sin(b) * Math.sin(d) * Math.cos(p1), Math.cos(d) - Math.sin(p1) * Math.sin(p2));
  return [deg(p2), deg(l2)];
}
// elevation angle to something dKm away and hRelKm higher, including Earth's curvature
const elevAngle = (dKm, hRelKm) => deg(Math.atan2(hRelKm - (dKm * dKm) / (2 * R_EARTH), Math.max(dKm, 0.001)));

const CARD_HE = ["צפון", "צפון-מזרח", "מזרח", "דרום-מזרח", "דרום", "דרום-מערב", "מערב", "צפון-מערב"];
const CARD_EN = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
const CARD_EN_LONG = ["north", "northeast", "east", "southeast", "south", "southwest", "west", "northwest"];
const cardinal = (a, long) => { const i = Math.round(norm(a) / 45) % 8; return lang === "he" ? CARD_HE[i] : long ? CARD_EN_LONG[i] : CARD_EN[i]; };
const fmtKm = (k) => k < 1 ? `${Math.round(k * 1000)} ${t().m}` : k < 100 ? `${k.toFixed(1)} ${t().km}` : `${Math.round(k).toLocaleString()} ${t().km}`;
const fmtTime = (d) => d.toLocaleTimeString(lang === "he" ? "he-IL" : "en-GB", { hour: "2-digit", minute: "2-digit" });
const fmtWhen = (d) => {
  const today = new Date().toDateString() === d.toDateString();
  return today ? fmtTime(d) : `${d.toLocaleDateString(lang === "he" ? "he-IL" : "en-GB", { weekday: "short" })} ${fmtTime(d)}`;
};

/* ============================ state ============================ */
let lang = store.raw("lang") || ((navigator.language || "").startsWith("he") ? "he" : "en");
const t = () => T[lang];
const S = {
  loc: (() => { const l = store.get("oc.lastLoc"); return l ? { ...l, acc: null, stale: true } : null; })(),  // last known spot until GPS answers
  heading: 0, headingRaw: null, pitch: null,
  sensor: "wait",                       // wait | ios | abs | none
  target: store.get("oc.target", { kind: "place", id: "kotel" }),
  saved: store.get("oc.saved", []),
  sats: new Map(),                      // catnr → {name, rec, groups}
  satStatus: "idle",                    // idle | loading | ok | err
  passCache: new Map(),
  planes: [], planesAt: 0, planesStatus: CFG.FLIGHT_PROXY ? "idle" : "noproxy",
  routes: new Map(),
  weather: null, weatherAt: 0,
  aligned: false,
  tab: "places",
};

/* ============================ i18n ============================ */
function applyLang() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach((el) => { const v = t()[el.dataset.i18n]; if (typeof v === "string") el.textContent = v; });
  $("#langBtn").textContent = `⇆ ${t().switchTo}`;
  $("#manualHeading").setAttribute("aria-label", t().manualLabel);
  if ($("#picker").open) renderList();
  renderTargetBtn();
}
$("#langBtn").addEventListener("click", () => { lang = lang === "he" ? "en" : "he"; store.rawSet("lang", lang); applyLang(); });

/* ============================ location ============================ */
let geoWatch = null;
function startLocation() {
  if (!("geolocation" in navigator)) return askManualLocation();
  geoWatch = navigator.geolocation.watchPosition((p) => {
    S.loc = { lat: p.coords.latitude, lon: p.coords.longitude, altKm: (p.coords.altitude ?? 10) / 1000, acc: Math.round(p.coords.accuracy) };
    store.set("oc.lastLoc", { lat: S.loc.lat, lon: S.loc.lon, altKm: S.loc.altKm });
    maybeRefreshWeather();
  }, () => { if (!S.loc || S.loc.stale) askManualLocation(); },
  { enableHighAccuracy: true, maximumAge: 5000, timeout: 20000 });
}
function askManualLocation() {
  $("#locList").innerHTML = CITIES.map((c) => `<button type="button" class="item" data-city="${c.id}"><b>${esc(c.name[lang])}</b></button>`).join("");
  $("#locSheet").showModal();
}
$("#locList").addEventListener("click", (e) => {
  const b = e.target.closest("[data-city]"); if (!b) return;
  const c = CITIES.find((x) => x.id === b.dataset.city);
  S.loc = { lat: c.lat, lon: c.lon, altKm: 0.05, acc: null, manual: c.name };
  $("#locSheet").close();
  maybeRefreshWeather();
});

/* ============================ orientation ============================ */
let lastSensorAt = 0;
function smoothHeading(h) {
  if (S.headingRaw == null) S.headingRaw = h;
  else S.headingRaw = norm(S.headingRaw + 0.25 * angDiff(h, S.headingRaw));
  S.heading = norm(S.headingRaw + CFG.MAG_DECLINATION);
  lastSensorAt = performance.now();
}
function onOrientation(e) {
  if (typeof e.webkitCompassHeading === "number" && !isNaN(e.webkitCompassHeading)) {
    // iOS: magnetic heading of the device; add screen rotation
    const scr = (screen.orientation && screen.orientation.angle) || window.orientation || 0;
    S.sensor = "ios";
    smoothHeading(norm(e.webkitCompassHeading + scr));
    S.pitch = e.beta > 45 ? clamp(e.beta - 90, -90, 90) : null;
    return;
  }
  const absolute = e.type === "deviceorientationabsolute" || e.absolute === true;
  if (!absolute || e.alpha == null) return;
  S.sensor = "abs";
  // full rotation matrix (W3C Z-X'-Y''), then take the back-camera axis (−Z) in Earth frame
  const a = rad(e.alpha), b = rad(e.beta || 0), g = rad(e.gamma || 0);
  const cA = Math.cos(a), sA = Math.sin(a), cB = Math.cos(b), sB = Math.sin(b), cG = Math.cos(g), sG = Math.sin(g);
  const back = [-(cA * sG + cG * sA * sB), -(sA * sG - cA * cG * sB), -(cB * cG)];
  const camEl = deg(Math.asin(clamp(back[2], -1, 1)));
  if (camEl > -45) {                     // phone held up: aim with the camera
    smoothHeading(norm(deg(Math.atan2(back[0], back[1]))));
    S.pitch = camEl;
  } else {                                // phone lying flat: aim with the top edge
    const top = [-cB * sA, cA * cB, sB];
    smoothHeading(norm(deg(Math.atan2(top[0], top[1]))));
    S.pitch = null;
  }
}
async function startOrientation() {
  try {
    if (typeof DeviceOrientationEvent !== "undefined" && typeof DeviceOrientationEvent.requestPermission === "function") {
      const r = await DeviceOrientationEvent.requestPermission();
      if (r !== "granted") throw new Error("denied");
    }
  } catch { goManual(); return; }
  if ("ondeviceorientationabsolute" in window) window.addEventListener("deviceorientationabsolute", onOrientation);
  window.addEventListener("deviceorientation", onOrientation);
  setTimeout(() => { if (!lastSensorAt) goManual(); }, 2500);
}
function goManual() {
  S.sensor = "none";
  $("#manual").hidden = false;
  $("#hint").hidden = true;
  S.heading = +$("#manualHeading").value;
}
$("#manualHeading").addEventListener("input", (e) => { if (S.sensor === "none") S.heading = +e.target.value; });
document.addEventListener("keydown", (e) => {
  if (S.sensor !== "none" || $("#picker").open) return;
  if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
    S.heading = norm(S.heading + (e.key === "ArrowRight" ? 5 : -5));
    $("#manualHeading").value = Math.round(S.heading);
  }
});

/* ============================ sky: Sun & Moon ============================ */
function raDecToAzEl(raDeg, decDeg, lat, lon, d) {
  const gmst = norm(280.46061837 + 360.98564736629 * d);
  const H = rad(norm(gmst + lon - raDeg)), phi = rad(lat), dec = rad(decDeg);
  const el = Math.asin(Math.sin(phi) * Math.sin(dec) + Math.cos(phi) * Math.cos(dec) * Math.cos(H));
  const az = Math.atan2(-Math.sin(H) * Math.cos(dec), Math.sin(dec) * Math.cos(phi) - Math.cos(dec) * Math.sin(phi) * Math.cos(H));
  return { az: norm(deg(az)), el: deg(el) };
}
const daysJ2000 = (date) => date.getTime() / 86400000 + 2440587.5 - 2451545.0;
function sunPos(date, lat, lon) {
  const d = daysJ2000(date);
  const g = rad(357.529 + 0.98560028 * d), q = 280.459 + 0.98564736 * d;
  const L = rad(q + 1.915 * Math.sin(g) + 0.020 * Math.sin(2 * g)), e = rad(23.439 - 0.00000036 * d);
  const ra = norm(deg(Math.atan2(Math.cos(e) * Math.sin(L), Math.cos(L)))), dec = deg(Math.asin(Math.sin(e) * Math.sin(L)));
  return { ...raDecToAzEl(ra, dec, lat, lon, d), lonEcl: deg(L), distKm: 149.6e6 };
}
function moonPos(date, lat, lon) {
  const d = daysJ2000(date), e = rad(23.439 - 0.00000036 * d);
  const Lm = 218.316 + 13.176396 * d, M = rad(134.963 + 13.064993 * d), F = rad(93.272 + 13.229350 * d);
  const lam = rad(Lm + 6.289 * Math.sin(M)), bet = rad(5.128 * Math.sin(F));
  const dist = 385001 - 20905 * Math.cos(M);
  const ra = norm(deg(Math.atan2(Math.sin(lam) * Math.cos(e) - Math.tan(bet) * Math.sin(e), Math.cos(lam))));
  const dec = deg(Math.asin(Math.sin(bet) * Math.cos(e) + Math.cos(bet) * Math.sin(e) * Math.sin(lam)));
  const p = raDecToAzEl(ra, dec, lat, lon, d);
  p.el -= deg(Math.asin((R_EARTH / dist) * Math.cos(rad(p.el))));   // parallax: we stand on the surface, not the centre
  const sun = sunPos(date, lat, lon);
  const lit = Math.round(50 * (1 - Math.cos(lam - rad(sun.lonEcl))));
  return { ...p, distKm: dist, lit };
}

/* ============================ satellites ============================ */
function parseTLE(text, group) {
  const lines = text.split(/\r?\n/).map((l) => l.trimEnd()).filter(Boolean);
  for (let i = 0; i + 2 < lines.length + 0; i += 3) {
    const [n, l1, l2] = [lines[i], lines[i + 1], lines[i + 2]];
    if (!l1 || !l2 || l1[0] !== "1" || l2[0] !== "2") continue;
    const id = parseInt(l1.slice(2, 7), 10);
    if (S.sats.has(id)) { S.sats.get(id).groups.add(group); continue; }
    try { S.sats.set(id, { id, name: n.trim(), rec: satellite.twoline2satrec(l1, l2), groups: new Set([group]) }); } catch {}
  }
}
async function loadSats() {
  if (S.satStatus === "loading" || S.satStatus === "ok") return;
  if (typeof satellite === "undefined") { S.satStatus = "err"; return; }
  S.satStatus = "loading";
  const cache = store.get("oc.tle");
  const fresh = cache && Date.now() - cache.t < 6 * 3600e3;      // CelesTrak asks: don't refetch more than needed
  let data = fresh ? cache : null;
  if (!data) {
    try {
      const [st, vi] = await Promise.all(Object.values(TLE_URLS).map((u) => fetch(u).then((r) => { if (!r.ok) throw 0; return r.text(); })));
      data = { t: Date.now(), stations: st, visual: vi };
      store.set("oc.tle", data);
    } catch { data = cache; }
  }
  if (!data) { S.satStatus = "err"; refreshListIf("space"); return; }
  parseTLE(data.stations, "stations"); parseTLE(data.visual, "visual");
  S.satStatus = "ok";
  refreshListIf("space");
}
function satLook(sat, date, loc) {
  const pv = satellite.propagate(sat.rec, date);
  if (!pv || !pv.position) return null;
  const gmst = satellite.gstime(date);
  const obs = { latitude: rad(loc.lat), longitude: rad(loc.lon), height: loc.altKm || 0 };
  const la = satellite.ecfToLookAngles(obs, satellite.eciToEcf(pv.position, gmst));
  const geo = satellite.eciToGeodetic(pv.position, gmst);
  const v = pv.velocity ? Math.hypot(pv.velocity.x, pv.velocity.y, pv.velocity.z) * 3600 : 0;
  return { az: norm(deg(la.azimuth)), el: deg(la.elevation), distKm: la.rangeSat, altKm: geo.height, kmh: v };
}
// next time the satellite climbs above 10°, and how high it gets
function nextPass(sat, loc) {
  const key = sat.id, now = Date.now(), c = S.passCache.get(key);
  if (c && c.until > now && Math.abs(c.lat - loc.lat) < 0.2 && Math.abs(c.lon - loc.lon) < 0.2) return c;
  const MIN = 10, step = 30e3;
  let start = null, max = -90, rise = null, riseAz = 0, t0 = now;
  const elNow = satLook(sat, new Date(now), loc);
  if (elNow && elNow.el > MIN) { start = now; rise = null; }
  for (let ts = now; ts < now + 24 * 3600e3; ts += step) {
    const l = satLook(sat, new Date(ts), loc); if (!l) break;
    if (start == null && l.el > MIN) { start = ts; rise = new Date(ts); riseAz = l.az; }
    if (start != null) {
      if (l.el > max) max = l.el;
      if (l.el < MIN) { t0 = ts; break; }
    }
  }
  const res = start == null
    ? { none: true, until: now + 10 * 60e3 }
    : { now: rise == null, rise, riseAz, max: Math.round(max), until: rise == null ? t0 : Math.min(t0, rise.getTime() + 60e3) };
  Object.assign(res, { lat: loc.lat, lon: loc.lon });
  S.passCache.set(key, res);
  return res;
}
const satLabel = (id, fallback) => { const p = SAT_PICKS.find((x) => x.id === id); return p ? t()[p.key] : fallback; };

/* ============================ aircraft ============================ */
let planeTimer = null;
async function fetchPlanes() {
  if (!CFG.FLIGHT_PROXY || !S.loc) return;
  const url = `${CFG.FLIGHT_PROXY.replace(/\/$/, "")}/?lat=${S.loc.lat.toFixed(3)}&lon=${S.loc.lon.toFixed(3)}&r=${Math.min(250, CFG.FLIGHT_RADIUS_NM)}`;
  if (S.planesStatus !== "ok") S.planesStatus = "loading";
  try {
    const r = await fetch(url); if (!r.ok) throw 0;
    const j = await r.json();
    S.planes = (j.ac || []).filter((a) => typeof a.lat === "number" && typeof a.lon === "number" && a.alt_baro !== "ground").map((a) => ({
      id: a.hex, call: (a.flight || "").trim(), lat: a.lat, lon: a.lon,
      altFt: typeof a.alt_geom === "number" ? a.alt_geom : (typeof a.alt_baro === "number" ? a.alt_baro : 0),
      gs: a.gs || 0, track: a.track ?? a.true_heading ?? 0, type: a.t || "", reg: a.r || "",
      seenAt: Date.now() - (a.seen_pos || 0) * 1000,
    }));
    S.planesAt = Date.now(); S.planesStatus = "ok";
  } catch { S.planesStatus = "err"; }
  refreshListIf("planes");
}
function planesNeeded() { return (S.target.kind === "plane") || ($("#picker").open && S.tab === "planes"); }
function schedulePlanes() {
  clearInterval(planeTimer);
  if (!CFG.FLIGHT_PROXY) return;
  if (planesNeeded()) { fetchPlanes(); planeTimer = setInterval(() => { if (planesNeeded()) fetchPlanes(); }, 10000); }
}
// dead reckoning between API refreshes so the marker glides instead of jumping
function planeNow(p, now) {
  const dtH = Math.max(0, now - p.seenAt) / 3600e3;
  const [lat, lon] = dtH > 0 && p.gs ? movePoint(p.lat, p.lon, p.track, p.gs * 1.852 * dtH) : [p.lat, p.lon];
  return { lat, lon };
}
function planeLook(p, now, loc) {
  const pos = planeNow(p, now);
  const d = distKm(loc.lat, loc.lon, pos.lat, pos.lon), hRel = p.altFt * 0.0003048 - (loc.altKm || 0);
  return { az: bearingTo(loc.lat, loc.lon, pos.lat, pos.lon), el: elevAngle(d, hRel), distKm: Math.hypot(d, hRel), ground: d };
}
async function lookupRoute(call) {
  if (!call || S.routes.has(call)) return;
  S.routes.set(call, null);
  try {
    const r = await fetch(`https://api.adsbdb.com/v0/callsign/${encodeURIComponent(call)}`);
    const j = await r.json();
    const fr = j && j.response && j.response.flightroute;
    S.routes.set(call, fr ? { from: fr.origin.municipality || fr.origin.name, to: fr.destination.municipality || fr.destination.name } : false);
  } catch { S.routes.set(call, false); }
}

/* ============================ weather (for far views) ============================ */
async function maybeRefreshWeather() {
  if (!S.loc || Date.now() - S.weatherAt < 20 * 60e3) return;
  S.weatherAt = Date.now();
  try {
    const u = `https://api.open-meteo.com/v1/forecast?latitude=${S.loc.lat.toFixed(3)}&longitude=${S.loc.lon.toFixed(3)}&current=visibility,cloud_cover,is_day`;
    const j = await (await fetch(u)).json();
    S.weather = j.current;
  } catch { S.weatherAt = 0; }
}

/* ============================ resolve the one target ============================ */
function resolveTarget(now) {
  const tg = S.target, loc = S.loc;
  if (!loc) return null;
  const date = new Date(now);
  if (tg.kind === "place" || tg.kind === "saved") {
    const p = tg.kind === "place" ? PLACES.find((x) => x.id === tg.id) : S.saved.find((x) => x.id === tg.id);
    if (!p) return null;
    const d = distKm(loc.lat, loc.lon, p.lat, p.lon);
    return { kindLabel: tg.kind === "place" ? t().kPlace : t().kSaved, name: p.name[lang] ?? p.name,
      az: bearingTo(loc.lat, loc.lon, p.lat, p.lon), el: elevAngle(d, ((p.h ?? 0) / 1000) - (loc.altKm || 0)), distKm: d, place: p };
  }
  if (tg.kind === "sky") {
    const pos = tg.id === "sun" ? sunPos(date, loc.lat, loc.lon) : moonPos(date, loc.lat, loc.lon);
    return { kindLabel: t().kSky, name: t()[tg.id], ...pos, sky: tg.id };
  }
  if (tg.kind === "sat") {
    const sat = S.sats.get(tg.id);
    if (!sat) return { kindLabel: t().kSat, name: tg.name || "…", pending: true };
    const l = satLook(sat, date, loc);
    return l && { kindLabel: t().kSat, name: satLabel(sat.id, sat.name), ...l, sat };
  }
  if (tg.kind === "plane") {
    let p;
    if (tg.id === "nearest") {
      p = S.planes.map((x) => [x, planeLook(x, now, loc).ground]).sort((a, b) => a[1] - b[1])[0]?.[0];
    } else p = S.planes.find((x) => x.id === tg.id);
    const name = tg.id === "nearest" ? t().nearestPlane : (tg.name || tg.id);
    if (!p) return { kindLabel: t().kPlane, name, pending: true, lost: tg.id !== "nearest" && S.planesStatus === "ok" && S.planesAt > 0 };
    const l = planeLook(p, now, loc);
    lookupRoute(p.call);
    return { kindLabel: t().kPlane, name: tg.id === "nearest" ? `${t().nearestPlane} · ${p.call || p.id}` : (p.call || p.id), ...l, plane: p };
  }
  return null;
}
function setTarget(tg) {
  S.target = tg; store.set("oc.target", tg);
  S.aligned = false;
  if (tg.kind === "sat") loadSats();
  schedulePlanes();
  renderTargetBtn();
  lastExtraKey = "";
}

/* ============================ dial ============================ */
function buildDial() {
  const g = $("#rose");
  let h = "";
  for (let a = 0; a < 360; a += 5) {
    const major = a % 30 === 0, r1 = 186, r2 = major ? 166 : 176;
    const s = Math.sin(rad(a)), c = Math.cos(rad(a));
    h += `<line class="tick${major ? " major" : ""}" x1="${200 + r1 * s}" y1="${200 - r1 * c}" x2="${200 + r2 * s}" y2="${200 - r2 * c}"/>`;
    if (major && a % 90 !== 0) h += `<text class="deg-lbl" x="${200 + 150 * s}" y="${200 - 150 * c}" transform="rotate(${a} ${200 + 150 * s} ${200 - 150 * c})">${a}</text>`;
  }
  [["N", 0], ["E", 90], ["S", 180], ["W", 270]].forEach(([l, a]) => {
    const s = Math.sin(rad(a)), c = Math.cos(rad(a)), x = 200 + 146 * s, y = 200 - 146 * c;
    h += `<text class="card-pt${l === "N" ? " n" : ""}" x="${x}" y="${y}" transform="rotate(${a} ${x} ${y})">${l}</text>`;
  });
  g.innerHTML = h;
  $("#dial svg defs").insertAdjacentHTML("beforeend",
    `<linearGradient id="beamGrad" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="#ff8a3d" stop-opacity="0"/><stop offset="100%" stop-color="#ff8a3d" stop-opacity=".35"/></linearGradient>`);
  $("#marker").innerHTML = `<path class="beam" d="M200 200 L186 40 A160 160 0 0 1 214 40 Z"/><circle class="ring" cx="200" cy="34" r="16"/><circle class="dot" cx="200" cy="34" r="13"/>`;
}

/* ============================ render ============================ */
let lastExtraKey = "", lastSlow = 0, cur = null;
function renderTargetBtn() {
  const r = cur || resolveTarget(Date.now());
  $("#tKind").textContent = r ? r.kindLabel : "";
  $("#tName").textContent = r ? r.name : "…";
}
function frame() {
  const now = Date.now();
  if (now - lastSlow > 1000 || !cur) {                       // heavy math once a second is plenty
    lastSlow = now;
    cur = resolveTarget(now);
    renderReadouts(cur);
    renderExtra(cur, now);
    renderStatus();
    renderTargetBtn();
  }
  const rose = $("#rose"), mk = $("#marker"), dial = $("#dial");
  rose.setAttribute("transform", `rotate(${-S.heading} 200 200)`);
  if (cur && cur.az != null) {
    mk.style.display = "";
    mk.setAttribute("transform", `rotate(${cur.az - S.heading} 200 200)`);
    mk.classList.toggle("below", cur.el < 0 && !cur.place);
    const dlt = angDiff(cur.az, S.heading), ad = Math.abs(dlt);
    const aligned = ad <= 6;
    if (aligned && !S.aligned && navigator.vibrate) navigator.vibrate(35);
    S.aligned = aligned;
    dial.classList.toggle("aligned", aligned);
    $("#delta").textContent = aligned ? "✓" : `${dlt > 0 ? "→" : "←"} ${Math.round(ad)}°`;
    let sub = aligned ? t().onTarget : dlt > 0 ? t().turnR : t().turnL;
    if (cur.el < -0.5 && !cur.place) sub += ` · ${t().below}`;
    else if (S.pitch == null && S.sensor !== "none" && (cur.sky || cur.sat || cur.plane) && aligned) sub = t().liftPhone;
    $("#deltaSub").textContent = sub;
    $("#elTarget").style.bottom = `${clamp((cur.el + 10), 0, 100)}%`;
    $("#elTarget").style.display = "";
  } else {
    mk.style.display = "none"; dial.classList.remove("aligned");
    $("#delta").textContent = "—";
    $("#deltaSub").textContent = cur && cur.lost ? t().planeLost : !S.loc ? t().gpsWait : t().loading;
    $("#elTarget").style.display = "none";
  }
  const ph = $("#elPhone");
  if (S.pitch != null) { ph.style.display = ""; ph.style.bottom = `${clamp(S.pitch + 10, 0, 100)}%`; } else ph.style.display = "none";
  requestAnimationFrame(frame);
}
function ro(label, val) { return `<div class="ro"><b>${val}</b><span>${esc(label)}</span></div>`; }
function renderReadouts(r) {
  if (!r || r.az == null) { $("#readouts").innerHTML = ""; return; }
  const cells = [ro(t().bearing, `${Math.round(r.az)}° ${esc(cardinal(r.az))}`)];
  if (r.plane) {
    cells.push(ro(t().dist, fmtKm(r.ground)));
    cells.push(ro(t().alt, `${Math.round(r.plane.altFt * 0.3048).toLocaleString()} ${t().m}`));
  } else {
    cells.push(ro(r.sat ? t().range : t().dist, fmtKm(r.distKm)));
    cells.push(ro(t().elevR, `${r.el.toFixed(1)}°`));
  }
  $("#readouts").innerHTML = cells.join("");
}
function note(html, cls = "", small = "") { return `<p class="note ${cls}">${html}${small ? `<small>${small}</small>` : ""}</p>`; }
function renderExtra(r, now) {
  let html = "";
  if (r && r.place && r.place.peak) {
    const w = S.weather, P = r.place;
    const dGeo = 3.86 * (Math.sqrt(Math.max(1, (S.loc.altKm || 0.01) * 1000)) + Math.sqrt(P.h));
    if (r.distKm > dGeo) html += note(t().visGeo, "warn");
    else if (w) {
      const vk = Math.round((w.visibility || 0) / 1000), cc = Math.round(w.cloud_cover ?? 0);
      const small = t().visSmall(vk, cc);
      if (!w.is_day) html += note(t().visNight, "warn", small);
      else if (vk >= 30 && cc < 40) html += note(t().visGood, "good", small);
      else if (vk >= 15 && cc < 75) html += note(t().visMid, "", small);
      else html += note(t().visLow(vk), "warn", small);
    }
  }
  if (r && r.sky === "moon") html += note(t().moonPhase(r.lit));
  if (r && r.sat) {
    const pass = nextPass(r.sat, S.loc);
    if (pass.none) html += note(t().noPass, "warn");
    else if (pass.now) html += note(t().passNow(pass.max), "good");
    else html += note(t().nextPass(fmtWhen(pass.rise), esc(cardinal(pass.riseAz, true)), pass.max));
    html += note(t().orbitAlt(Math.round(r.altKm).toLocaleString(), (Math.round(r.kmh / 100) * 100).toLocaleString()));
    if (r.el > 10 && S.loc && sunPos(new Date(now), S.loc.lat, S.loc.lon).el < -6) html += note(t().satEye, "good");
  }
  if (r && r.plane) {
    const p = r.plane, rt = S.routes.get(p.call);
    const routeHtml = rt ? t().route(esc(rt.from), esc(rt.to)) : rt === false ? t().routeUnknown : t().loading;
    html += note(routeHtml, "", [t().acType(esc(p.type), esc(p.reg)), `${Math.round(p.gs * 1.852)} km/h`, t().updated(Math.round((now - S.planesAt) / 1000))].filter(Boolean).join(" · "));
  }
  if (r && r.pending && S.target.kind === "plane" && !CFG.FLIGHT_PROXY) html += note(t().planesNoProxy, "warn");
  if (html !== lastExtraKey) { $("#extra").innerHTML = html; lastExtraKey = html; }
}
function renderStatus() {
  const g = !S.loc ? t().gpsWait : S.loc.manual ? t().gpsManual(S.loc.manual[lang] || "") : S.loc.acc != null ? t().gpsAcc(S.loc.acc) : t().gpsWait;
  const s = { ios: t().sensIOS, abs: t().sensAbs, none: t().sensNone, wait: t().sensWait }[S.sensor];
  $("#status").textContent = `${g} · ${s}`;
}

/* ============================ picker ============================ */
const TABS = ["places", "planes", "space", "ships"];
function renderTabs() {
  const label = { places: t().tabPlaces, planes: t().tabPlanes, space: t().tabSpace, ships: t().tabShips };
  $("#tabs").innerHTML = TABS.map((k) => `<button type="button" class="tab" role="tab" aria-selected="${S.tab === k}" data-tab="${k}">${label[k]}</button>`).join("");
}
function isOn(kind, id) { return S.target.kind === kind && String(S.target.id) === String(id); }
function item({ kind, id, title, sub = "", meta = "", dim = false, name, extra = "" }) {
  return `<button type="button" class="item${isOn(kind, id) ? " on" : ""}${dim ? " dim" : ""}" data-kind="${kind}" data-id="${esc(id)}" data-name="${esc(name || title)}">
    <b>${esc(title)}</b>${sub ? `<small>${esc(sub)}</small>` : ""}${meta ? `<span class="meta">${meta}</span>` : ""}${extra}</button>`;
}
function metaFor(az, d, el) {
  const a = `${Math.round(az)}° ${esc(cardinal(az))}`;
  return [a, d != null ? fmtKm(d) : "", el != null ? `${el.toFixed(0)}°↑` : ""].filter(Boolean).join("<br>");
}
function renderList() {
  renderTabs();
  const L = S.loc, now = Date.now(), date = new Date(now);
  let h = "";
  if (S.tab === "places") {
    h += `<p class="group-h">${esc(t().savedH)}</p>`;
    h += S.saved.map((p) => {
      const meta = L ? metaFor(bearingTo(L.lat, L.lon, p.lat, p.lon), distKm(L.lat, L.lon, p.lat, p.lon)) : "";
      return `<div class="save-row">${item({ kind: "saved", id: p.id, title: p.name, meta })}<button type="button" class="del" data-del="${esc(p.id)}" aria-label="Delete">✕</button></div>`;
    }).join("");
    h += `<form class="save-row" id="saveForm"><input id="saveName" maxlength="40" placeholder="${esc(t().savePlaceholder)}" aria-label="${esc(t().savePlaceholder)}"><button class="small-btn" ${L && !L.manual && !L.stale ? "" : "disabled"}>${esc(t().saveBtn)}</button></form>`;
    h += `<p class="empty" style="margin-top:0">${esc(t().savedHint)}</p>`;
    h += `<p class="group-h">${esc(t().placesH)}</p>`;
    const rows = PLACES.map((p) => ({ p, d: L ? distKm(L.lat, L.lon, p.lat, p.lon) : 0 }));
    h += rows.map(({ p, d }) => item({ kind: "place", id: p.id, title: p.name[lang], meta: L ? metaFor(bearingTo(L.lat, L.lon, p.lat, p.lon), d) : "" })).join("");
  }
  if (S.tab === "planes") {
    if (!CFG.FLIGHT_PROXY) h += `<p class="empty">${t().planesNoProxy}</p>`;
    else {
      h += item({ kind: "plane", id: "nearest", title: t().nearestPlane, sub: t().nearestPlaneSub, name: t().nearestPlane });
      if (S.planesStatus === "loading" && !S.planes.length) h += `<p class="empty">${esc(t().loading)}</p>`;
      else if (S.planesStatus === "err" && !S.planes.length) h += `<p class="empty">${esc(t().planesErr)}</p>`;
      else if (!S.planes.length) h += `<p class="empty">${esc(t().planesNone)}</p>`;
      else if (L) {
        const rows = S.planes.map((p) => ({ p, l: planeLook(p, now, L) })).sort((a, b) => a.l.ground - b.l.ground).slice(0, 40);
        h += rows.map(({ p, l }) => item({ kind: "plane", id: p.id, title: p.call || p.id.toUpperCase(), name: p.call || p.id,
          sub: [p.type, `${Math.round(p.altFt * 0.3048).toLocaleString()} ${t().m}`].filter(Boolean).join(" · "),
          meta: metaFor(l.az, l.ground, l.el) })).join("");
      }
    }
  }
  if (S.tab === "space") {
    h += `<p class="group-h">${esc(t().skyH)}</p>`;
    ["sun", "moon"].forEach((k) => {
      const p = L ? (k === "sun" ? sunPos(date, L.lat, L.lon) : moonPos(date, L.lat, L.lon)) : null;
      h += item({ kind: "sky", id: k, title: t()[k], meta: p ? metaFor(p.az, null, p.el) : "", dim: p && p.el < 0 });
    });
    if (S.satStatus === "err") h += `<p class="empty">${esc(t().satErr)}</p>`;
    else if (S.satStatus !== "ok") h += `<p class="empty">${esc(t().loading)}</p>`;
    else if (L) {
      h += `<p class="group-h">${esc(t().satPicksH)}</p>`;
      SAT_PICKS.forEach((sp) => {
        const s = S.sats.get(sp.id); if (!s) return;
        const l = satLook(s, date, L);
        h += item({ kind: "sat", id: sp.id, title: t()[sp.key], sub: s.name, name: t()[sp.key], meta: l ? metaFor(l.az, null, l.el) : "", dim: l && l.el < 0 });
      });
      const vis = [...S.sats.values()].filter((s) => !SAT_PICKS.some((p) => p.id === s.id))
        .map((s) => ({ s, l: satLook(s, date, L) })).filter((x) => x.l && x.l.el > 5).sort((a, b) => b.l.el - a.l.el).slice(0, 30);
      h += `<p class="group-h">${esc(t().satVisH)}</p>`;
      h += vis.length ? vis.map(({ s, l }) => item({ kind: "sat", id: s.id, title: s.name, sub: `${Math.round(l.altKm)} ${t().km}`, meta: metaFor(l.az, null, l.el) })).join("")
                      : `<p class="empty">${esc(t().satNone)}</p>`;
    }
  }
  if (S.tab === "ships") h += `<p class="empty">${esc(t().shipsText)}</p>`;
  $("#list").innerHTML = h;
}
function refreshListIf(tab) { if ($("#picker").open && S.tab === tab) renderList(); }
let listTimer = null;
function openPicker() {
  if (S.target.kind === "plane") S.tab = "planes"; else if (S.target.kind === "sat" || S.target.kind === "sky") S.tab = "space"; else S.tab = "places";
  renderList();
  $("#picker").showModal();
  if (S.tab === "space") loadSats();
  schedulePlanes();
  clearInterval(listTimer);
  listTimer = setInterval(() => { if ($("#picker").open && S.tab !== "places") renderList(); }, 3000);
}
$("#pickBtn").addEventListener("click", openPicker);
$("#pickClose").addEventListener("click", () => $("#picker").close());
$("#picker").addEventListener("close", () => { clearInterval(listTimer); schedulePlanes(); });
$("#picker").addEventListener("click", (e) => { if (e.target === $("#picker")) $("#picker").close(); });
$("#tabs").addEventListener("click", (e) => {
  const b = e.target.closest("[data-tab]"); if (!b) return;
  S.tab = b.dataset.tab;
  if (S.tab === "space") loadSats();
  renderList(); schedulePlanes();
});
$("#list").addEventListener("click", (e) => {
  const del = e.target.closest("[data-del]");
  if (del) { S.saved = S.saved.filter((p) => p.id !== del.dataset.del); store.set("oc.saved", S.saved);
    if (S.target.kind === "saved" && S.target.id === del.dataset.del) setTarget({ kind: "place", id: "kotel" }); renderList(); return; }
  const b = e.target.closest(".item[data-kind]"); if (!b) return;
  const kind = b.dataset.kind, id = kind === "sat" ? +b.dataset.id : b.dataset.id;
  setTarget({ kind, id, name: b.dataset.name });
  $("#picker").close();
});
$("#list").addEventListener("submit", (e) => {
  if (e.target.id !== "saveForm") return;
  e.preventDefault();
  if (!S.loc || S.loc.manual || S.loc.stale) return;
  const name = ($("#saveName").value || "").trim() || (lang === "he" ? "נקודה" : "Point");
  const p = { id: "s" + Date.now().toString(36), name, lat: S.loc.lat, lon: S.loc.lon, h: Math.round((S.loc.altKm || 0) * 1000) };
  S.saved.push(p); store.set("oc.saved", S.saved);
  renderList();
});

/* ============================ start ============================ */
$("#startBtn").addEventListener("click", async () => {
  $("#start").hidden = true;
  $("#compassWrap").hidden = false;
  await startOrientation();                           // must be inside the tap for iOS
  startLocation();
  if (S.target.kind === "sat") loadSats();
  schedulePlanes();
  requestAnimationFrame(frame);
});

buildDial();
applyLang();
})();
