(function () {
  var $ = function (id) { return document.getElementById(id); };
  var SIGNS = window.TMBOL_SIGNS || [], LAWS = window.TMBOL_LAWS || [], PRIORITY = window.TMBOL_PRIORITY || [];
  var MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var DAYS = [31,29,31,30,31,30,31,31,30,31,30,31];

  // Mobile menu
  var btn = document.querySelector(".menu-btn"), nav = $("nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) { if (e.target.tagName === "A") nav.classList.remove("open"); });
  }
  document.querySelectorAll(".yr").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  // Law for today — same law for everyone on a given day
  if ($("law-today") && LAWS.length) {
    var now = new Date();
    var dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 864e5);
    $("law-today").textContent = "“" + LAWS[dayOfYear % LAWS.length] + ".”";
    $("law-date").textContent = now.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
  }

  function inRange(m, d, r) {
    var v = m * 100 + d, a = r[0] * 100 + r[1], b = r[2] * 100 + r[3];
    return v >= a && v <= b;
  }
  function signFor(m, d) {
    var hits = SIGNS.filter(function (s) { return s.ranges.some(function (r) { return inRange(m, d, r); }); });
    if (!hits.length) return null;
    for (var i = 0; i < PRIORITY.length; i++) {
      var p = hits.filter(function (s) { return s.name === PRIORITY[i]; })[0];
      if (p) return p;
    }
    return hits[0];
  }
  function buyLinks(s) {
    if (s.status !== "released") return '<span class="tag soon">In production</span>';
    var h = "";
    if (s.payhip) h += '<a class="btn btn-gold btn-sm" href="' + s.payhip + '" target="_blank" rel="noopener">Get my volume</a>';
    if (s.kindle) h += '<a class="btn btn-ghost-light btn-sm" href="' + s.kindle + '" target="_blank" rel="noopener">Kindle</a>';
    return h;
  }

  // Sign finder
  var mSel = $("f-month"), dSel = $("f-day");
  if (mSel && dSel) {
    MONTHS.forEach(function (m, i) { mSel.add(new Option(m, i + 1)); });
    var fillDays = function () {
      var keep = dSel.value; dSel.innerHTML = "";
      for (var d = 1; d <= DAYS[mSel.value - 1]; d++) dSel.add(new Option(d, d));
      if (keep && keep <= DAYS[mSel.value - 1]) dSel.value = keep;
    };
    mSel.addEventListener("change", fillDays); fillDays();
    $("finder").addEventListener("submit", function (e) {
      e.preventDefault();
      var s = signFor(+mSel.value, +dSel.value), out = $("reveal");
      if (!s) { out.innerHTML = "<p>That date isn't in the calendar. Please check the month and day.</p>"; return; }
      out.innerHTML =
        '<div class="sym" aria-hidden="true">' + s.symbol + '</div>' +
        '<div class="vol">Your Nile sign · Volume ' + s.vol + '</div>' +
        '<h3>' + s.name + '</h3>' +
        '<p>' + s.text + '</p>' +
        '<div class="links">' + buyLinks(s) +
        (s.status !== "released" ? ' <a class="btn btn-ghost-light btn-sm" href="#path-updates">Notify me at release</a>' : "") + '</div>';
      var sel = $("news-sign"); if (sel) sel.value = s.name;
      out.focus();
    });
  }

  // All-signs grid
  var grid = $("signs-grid");
  if (grid) {
    grid.innerHTML = SIGNS.map(function (s) {
      var action = s.status === "released"
        ? '<a href="' + (s.payhip || s.kindle) + '" target="_blank" rel="noopener">Get Vol. ' + s.vol + ' →</a>'
        : '<span class="tag soon">In production</span>';
      return '<div class="sign"><span class="s" aria-hidden="true">' + s.symbol + '</span><div><strong>' + s.name +
        '</strong><small>Vol. ' + s.vol + ' · ' + s.label + '</small>' + action + '</div></div>';
    }).join("");
  }

  // Newsletter sign dropdown
  var ns = $("news-sign");
  if (ns) SIGNS.forEach(function (s) { ns.add(new Option(s.name, s.name)); });
})();
