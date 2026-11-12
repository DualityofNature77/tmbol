/* ============================================================
   NILE SIGN DATA — edit here only. Every page reads from this file.
   status: "released" | "soon"
   dates use month/day; ranges are inclusive.
   PRIORITY: when a date appears in two signs, the sign listed in
   window.TMBOL_PRIORITY wins (default: The Hidden Sign).
   ============================================================ */
window.TMBOL_PRIORITY = ["The Hidden Sign"];

window.TMBOL_SIGNS = [
  { name: "Geb", vol: "I", symbol: "⊕", status: "released",
    ranges: [[2,12,2,29],[8,20,8,31]], label: "Feb 12–29 · Aug 20–31",
    payhip: "https://payhip.com/b/t3Tw1", kindle: "https://a.co/d/07w6idox",
    text: "You are the foundation. Geb signs carry the earth's memory — stable, enduring, and deeply connected to the physical world and ancestral knowledge." },
  { name: "The Nile", vol: "II", symbol: "〰", status: "released",
    ranges: [[1,1,1,7],[6,19,6,28],[9,1,9,7],[11,18,11,26]], label: "Jan 1–7 · Jun 19–28 · Sep 1–7 · Nov 18–26",
    payhip: "https://payhip.com/b/pIkrs", kindle: "https://a.co/d/0gZRjM7c",
    text: "You are the origin — the source from which all life flows. You carry the energy of renewal, patience, and deep cyclical wisdom. Your path is one of constant return and rebirth." },
  { name: "Mut", vol: "III", symbol: "☾", status: "released",
    ranges: [[1,22,1,31],[9,8,9,22]], label: "Jan 22–31 · Sep 8–22",
    payhip: "https://payhip.com/b/IkZNA", kindle: "https://a.co/d/01jYPUff",
    text: "You are the great mother — not in the domestic sense, but in the cosmic one. You hold, protect, and create. Your strength is the kind that builds civilizations." },
  { name: "Amun-Ra", vol: "IV", symbol: "☀", status: "released",
    ranges: [[1,8,1,21],[2,1,2,11]], label: "Jan 8–21 · Feb 1–11",
    payhip: "https://payhip.com/b/yX5Gs", kindle: "https://a.co/d/0j2HTdlF",
    text: "You carry the hidden light made manifest. Amun-Ra signs are leaders who illuminate without domination — your power is quiet, vast, and self-sustaining." },
  { name: "Osiris", vol: "V", symbol: "⟁", status: "released",
    ranges: [[3,1,3,10],[11,27,12,18]], label: "Mar 1–10 · Nov 27–Dec 18",
    payhip: "https://payhip.com/b/oEz54", kindle: "https://a.co/d/0j0BJHc4",
    text: "You carry the wisdom of transformation. Osiris signs understand death and resurrection — not as endings, but as the necessary passage into higher form." },
  { name: "Seth", vol: "VI", symbol: "⚡", status: "soon",
    ranges: [[5,28,6,18],[9,28,10,2]], label: "May 28–Jun 18 · Sep 28–Oct 2",
    text: "You carry the energy of necessary disruption. Seth signs are not destroyers — you are the force that breaks what must be broken so that something true can grow." },
  { name: "Thoth", vol: "VII", symbol: "𓂀", status: "released", /* CONFIRM: press site says in production */
    ranges: [[4,1,4,19],[11,8,11,17]], label: "Apr 1–19 · Nov 8–17",
    payhip: "https://payhip.com/b/HxFoE",
    text: "You are the keeper of divine record. Thoth signs carry the weight of truth — your purpose is to document, transmit, and protect the sacred knowledge of your time." },
  { name: "Sekhmet", vol: "VIII", symbol: "☼", status: "soon",
    ranges: [[7,29,8,11],[10,30,11,7]], label: "Jul 29–Aug 11 · Oct 30–Nov 7",
    text: "You carry the fire of divine justice. Sekhmet signs are the healers who understand that sometimes the cure requires the wound to be fully opened first." },
  { name: "The Hidden Sign", vol: "IX", symbol: "◉", status: "soon",
    ranges: [[2,29,2,29],[7,28,8,1],[9,23,9,27]], label: "Feb 29 · Jul 28–Aug 1 · Sep 23–27",
    text: "You carry the energy of the liminal — the space between cycles. Hidden Sign souls are the rarest in the system: you exist at the intersection of all signs and belong fully to none." },
  { name: "Horus", vol: "X", symbol: "◎", status: "soon",
    ranges: [[4,20,5,7],[8,12,8,19]], label: "Apr 20–May 7 · Aug 12–19",
    text: "You are the warrior of divine order. Horus signs are born to restore what has been broken — your life is a reclamation of what is rightfully yours." },
  { name: "Bastet", vol: "XI", symbol: "◈", status: "soon",
    ranges: [[7,14,7,28],[10,3,10,17]], label: "Jul 14–28 · Oct 3–17",
    text: "You are the sacred protector. Bastet signs carry fierce, precise, and joyful energy — you guard what you love with absolute clarity and without apology." },
  { name: "Anubis", vol: "XII", symbol: "⌖", status: "soon",
    ranges: [[5,8,5,27],[6,29,7,13]], label: "May 8–27 · Jun 29–Jul 13",
    text: "You are the guardian of thresholds. Anubis signs navigate the space between worlds — you see what others cannot, and you guide what others fear." },
  { name: "Isis", vol: "XIII", symbol: "✦", status: "released", /* CONFIRM: volume number + release */
    ranges: [[3,11,3,31],[10,18,10,29],[12,19,12,31]], label: "Mar 11–31 · Oct 18–29 · Dec 19–31",
    payhip: "https://payhip.com/b/O4dnB",
    text: "You are the master of sacred knowledge and strategic love. Isis signs are the most resourceful in the system — you find the way when there is no way." }
];

/* Laws shown in the "Law for today" card — from The Modern Day Book of Life */
window.TMBOL_LAWS = [
  "I have not uttered lies",
  "I have not acted deceitfully",
  "I have not caused pain",
  "I have not caused tears",
  "I have not stolen",
  "I have not killed",
  "I have not spoken in anger",
  "I have not been unjust",
  "I have not been greedy",
  "I have not violated the sacred",
  "I have not acted with haste",
  "I have not been impatient"
];
