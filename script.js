/* ============================================================
   INVITATION DE MARIAGE — Celia & Arthur

   ① TOUS LES TEXTES À MODIFIER SONT ICI, dans l'objet SITE.
   ② Plus bas : le code du site (inutile d'y toucher).
   ============================================================ */

const SITE = {
  // --- Les mariés ---
  prenom1: "Aicha",
  prenom2: "Ahmed",
  hashtag: "#Aicha&Ahmed",

  // --- Le jour J (heure d'Abidjan = GMT) ---
  date: "2026-12-20",   // format AAAA-MM-JJ
  heure: "14:30",       // heure de la cérémonie (sert au compte à rebours)

  // --- L'enveloppe ---
  ouverture: {
    indice: "Vous avez reçu une invitation",
    bouton: "Ouvrir notre invitation",
    carte: "Mariage"
  },

  // --- 1. Accueil ---
  accueil: {
    kicker: "Nous nous marions",
    phrase: "Avec une immense joie, nous vous invitons à célébrer le plus beau jour de notre vie.",
    labels: ["Jours", "Heures", "Minutes", "Secondes"],
    apres: "Le grand jour est arrivé"
  },

  // --- 2. Notre histoire (dates et textes à adapter) ---
  histoire: {
    kicker: "Depuis le début",
    titre: "Notre histoire",
    intro: "Quelques instants qui ont dessiné le chemin jusqu'à vous.",
    etapes: [
      { date: "2019", titre: "La rencontre",
        texte: "Un regard, un sourire, et sans le savoir, le début de notre plus belle histoire." },
      { date: "2020", titre: "Le premier rendez-vous",
        texte: "Des heures de conversation, des rires, et la certitude que nous étions faits pour avancer ensemble." },
      { date: "2025", titre: "La demande en mariage",
        texte: "Une question, un « oui » plein de larmes de joie, et le début d'un nouveau chapitre." }
    ]
  },

  // --- 3. Galerie (remplacez les images dans le dossier « photos ») ---
  galerie: {
    kicker: "Souvenirs",
    titre: "Nos moments",
    photos: [
      { src: "photos/galerie-1.jpg", alt: "Celia et Arthur, souvenir 1" },
      { src: "photos/galerie-2.jpg", alt: "Celia et Arthur, souvenir 2" },
      { src: "photos/galerie-3.jpg", alt: "Celia et Arthur, souvenir 3" },
      { src: "photos/galerie-4.jpg", alt: "Celia et Arthur, souvenir 4" },
      { src: "photos/galerie-5.jpg", alt: "Celia et Arthur, souvenir 5" },
      { src: "photos/galerie-6.jpg", alt: "Celia et Arthur, souvenir 6" }
    ]
  },

  // --- 4. Le programme (horaires à adapter) ---
  programme: {
    kicker: "Le grand jour",
    titre: "Le programme",
    etapes: [
      { heure: "13h30", titre: "Accueil des invités",   texte: "Installation et premières retrouvailles." },
      { heure: "14h30", titre: "Cérémonie",             texte: "Le moment de nous dire « oui »." },
      { heure: "16h30", titre: "Séance photos",         texte: "Des souvenirs avec vous, en famille et entre amis." },
      { heure: "18h00", titre: "Repas et festivités",   texte: "Un repas partagé, de la musique et de la joie." },
      { heure: "22h00", titre: "Remerciements",         texte: "Un dernier mot pour vous dire merci." }
    ]
  },

  // --- 5. Le lieu ---
  lieu: {
    kicker: "Où nous retrouver",
    titre: "Le lieu",
    nom: "Temple de la Restauration Promise",
    adresse: "Adjamé, 220 logements",
    ville: "Abidjan, Côte d'Ivoire",
    // Texte envoyé à Google Maps pour la carte et l'itinéraire (vérifiez qu'il trouve le bon endroit)
    recherche: "Temple de la Restauration Promise, Adjamé 220 logements, Abidjan",
    bouton: "Ouvrir l'itinéraire"
  },

  // --- 6. Tenue ---
  tenue: {
    kicker: "Dress code",
    titre: "La tenue",
    texte: "Élégance et douceur : nous vous invitons à porter les teintes de notre palette. Merci de laisser le blanc à la mariée.",
    couleurs: [
      { nom: "Terracotta",   hex: "#B35A3D" },
      { nom: "Crème",        hex: "#F1E6D2" },
      { nom: "Brun profond", hex: "#3A2218" }
    ]
  },

  // --- 7. Confirmer sa présence ---
  rsvp: {
    kicker: "Réponse",
    titre: "Confirmer ma présence",
    texte: "Votre présence nous ferait un immense plaisir. Merci de nous confirmer votre venue en quelques instants.",
    bouton: "Confirmer ma présence",
    lien: "https://docs.google.com/forms/d/e/1FAIpQLSfR-i2XVT5koVsGiQh9cftgDCDTswNozyEkAE9hghA9UMsWvg/viewform?usp=publish-editor",          // ← collez ici le lien de votre formulaire
    limite: "Réponse souhaitée avant le 30 Novembre 2026"
  },

  // --- 8. Pied de page ---
  pied: {
    message: "Merci de faire partie de notre histoire"
  }
};


/* ============================================================
   CODE DU SITE — inutile d'y toucher
   ============================================================ */
(() => {
  "use strict";

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const e = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Données dérivées ---------- */
  const target = new Date(`${SITE.date}T${SITE.heure}:00+00:00`);
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  const dateLongue = cap(new Intl.DateTimeFormat("fr-FR", {
    timeZone: "UTC", weekday: "long", day: "numeric", month: "long", year: "numeric"
  }).format(target));
  const n1 = SITE.prenom1, n2 = SITE.prenom2;
  const i1 = n1.charAt(0).toUpperCase(), i2 = n2.charAt(0).toUpperCase();

  /* Un titre découpé mot par mot (chaque mot s'élève à son tour) */
  const words = (text, start = 0) =>
    e(text).split(" ").map((w, i) => `<span class="w"><span class="wi" style="--i:${i + start}">${w}</span></span>`).join(" ");

  const enc = encodeURIComponent(SITE.lieu.recherche);
  const mapSrc = `https://www.google.com/maps?q=${enc}&output=embed`;
  const routeHref = `https://www.google.com/maps/dir/?api=1&destination=${enc}`;

  /* ---------- Enveloppe : textes ---------- */
  document.title = `${n1} & ${n2} · Invitation de mariage`;
  $("#introHint").textContent = SITE.ouverture.indice;
  $("#openBtn").textContent = SITE.ouverture.bouton;
  $("#sealText").textContent = `${i1}&${i2}`;
  $("#card").innerHTML = `
    <p class="card__k">${e(SITE.ouverture.carte)}</p>
    <p class="card__names">${e(n1)} &amp; ${e(n2)}</p>
    <span class="card__line"></span>
    <p class="card__date">${e(dateLongue)}</p>`;

  /* ---------- Le site ---------- */
  const A = SITE.accueil, H = SITE.histoire, G = SITE.galerie, P = SITE.programme,
        L = SITE.lieu, T = SITE.tenue, R = SITE.rsvp;

  const head = (kicker, titre, extra = "") => `
    <header class="sec__head">
      <p class="kicker" data-reveal="fade">${e(kicker)}</p>
      <h2 class="title" data-reveal="words">${words(titre)}</h2>
      <span class="orn" data-reveal="fade" style="--d:.3s"></span>
      ${extra}
    </header>`;

  $("#site").innerHTML = `
    <!-- 1. ACCUEIL -->
    <section class="hero" id="accueil">
      <div class="hero__media" id="heroMedia">
        <img class="hero__img" src="photos/hero.jpg" alt="${e(n1)} et ${e(n2)}" fetchpriority="high" decoding="async">
      </div>
      <div class="hero__shade"></div>
      <div class="hero__inner">
        <p class="kicker kicker--light" data-reveal="fade" style="--d:.1s">${e(A.kicker)}</p>
        <h1 class="names" data-reveal="words" style="--d:.3s">
          <span class="names__a">${words(n1, 0)}</span>
          <span class="names__amp"><span class="w"><span class="wi" style="--i:1">&amp;</span></span></span>
          <span class="names__b">${words(n2, 2)}</span>
        </h1>
        <p class="hero__date" data-reveal="fade" style="--d:1.2s">${e(dateLongue)}</p>
        <p class="hero__phrase" data-reveal="fade" style="--d:1.4s">${e(A.phrase)}</p>
        <div class="cd" id="cd" data-reveal="fade" style="--d:1.7s" role="timer">
          ${["D", "H", "M", "S"].map((k, i) => `
            <div class="cd__c"><span class="cd__n" id="cd${k}">00</span><span class="cd__l">${e(A.labels[i])}</span></div>`).join("")}
        </div>
        <p class="cd__note" id="cdNote" aria-live="polite"></p>
      </div>
      <a class="hero__cue" href="#histoire" aria-label="Descendre"></a>
    </section>

    <!-- 2. NOTRE HISTOIRE -->
    <section class="sec" id="histoire">
      <div class="wrap">
        ${head(H.kicker, H.titre, `<p class="lead" data-reveal="fade" style="--d:.4s">${e(H.intro)}</p>`)}
        <ol class="timeline" id="timeline">
          ${H.etapes.map((s) => `
            <li class="tl-item">
              <span class="tl-dot"></span>
              <div class="tl-body">
                <p class="tl-date">${e(s.date)}</p>
                <h3 class="tl-title">${e(s.titre)}</h3>
                <p>${e(s.texte)}</p>
              </div>
            </li>`).join("")}
        </ol>
      </div>
    </section>

    <!-- 3. GALERIE -->
    <section class="sec sec--brown" id="galerie">
      <div class="wrap wrap--wide">
        ${head(G.kicker, G.titre)}
        <div class="gallery" id="gallery">
          ${G.photos.map((p) => `
            <figure class="gal" data-reveal="fade">
              <img src="${e(p.src)}" alt="${e(p.alt)}" width="900" height="1125" loading="lazy" decoding="async">
            </figure>`).join("")}
        </div>
      </div>
    </section>

    <!-- 4. PROGRAMME -->
    <section class="sec" id="programme">
      <div class="wrap">
        ${head(P.kicker, P.titre)}
        <ul class="program">
          ${P.etapes.map((s) => `
            <li class="pg" data-reveal="fade">
              <span class="pg__time">${e(s.heure)}</span>
              <div><h3>${e(s.titre)}</h3><p>${e(s.texte)}</p></div>
            </li>`).join("")}
        </ul>
      </div>
    </section>

    <!-- 5. LE LIEU -->
    <section class="sec sec--sand" id="lieu">
      <div class="wrap place">
        ${head(L.kicker, L.titre)}
        <h3 class="place__name" data-reveal="fade">${e(L.nom)}</h3>
        <p class="place__addr" data-reveal="fade" style="--d:.15s">${e(L.adresse)}<br>${e(L.ville)}</p>
        <div class="map" data-reveal="fade">
          <iframe title="Carte Google Maps" src="${mapSrc}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
        </div>
        <a class="btn" href="${routeHref}" target="_blank" rel="noopener" data-reveal="fade">${e(L.bouton)}</a>
      </div>
    </section>

    <!-- 6. TENUE -->
    <section class="sec" id="tenue">
      <div class="wrap dress">
        ${head(T.kicker, T.titre, `<p class="lead" data-reveal="fade" style="--d:.4s">${e(T.texte)}</p>`)}
        <ul class="swatches">
          ${T.couleurs.map((c, i) => `
            <li data-reveal="fade" style="--d:${(i * 0.18).toFixed(2)}s">
              <span class="sw" style="--c:${e(c.hex)}"></span>
              <span class="sw__n">${e(c.nom)}</span>
            </li>`).join("")}
        </ul>
      </div>
    </section>

    <!-- 7. CONFIRMER MA PRÉSENCE -->
    <section class="sec sec--terra" id="rsvp">
      <div class="wrap rsvp">
        ${head(R.kicker, R.titre, `<p class="lead" data-reveal="fade" style="--d:.4s">${e(R.texte)}</p>`)}
        <p class="deadline" data-reveal="fade">${e(R.limite)}</p>
        <a class="btn btn--light" href="${e(R.lien)}" target="_blank" rel="noopener" data-reveal="fade">${e(R.bouton)}</a>
      </div>
    </section>

    <!-- 8. PIED DE PAGE -->
    <footer class="foot">
      <div class="foot__ring" data-reveal="fade"><span>${e(i1)} &amp; ${e(i2)}</span></div>
      <h2 class="foot__msg" data-reveal="words">${words(SITE.pied.message)}</h2>
      <p class="foot__tag" data-reveal="fade" style="--d:.5s">${e(SITE.hashtag)}</p>
    </footer>`;

  /* ---------- Compte à rebours ---------- */
  const cdEls = { D: $("#cdD"), H: $("#cdH"), M: $("#cdM"), S: $("#cdS") };
  const pad = (n) => String(n).padStart(2, "0");
  function tick() {
    const left = Math.max(0, target - Date.now());
    const s = Math.floor(left / 1000);
    cdEls.D.textContent = pad(Math.floor(s / 86400));
    cdEls.H.textContent = pad(Math.floor((s % 86400) / 3600));
    cdEls.M.textContent = pad(Math.floor((s % 3600) / 60));
    cdEls.S.textContent = pad(s % 60);
    $("#cdNote").textContent = left === 0 ? SITE.accueil.apres : "";
  }
  tick();
  setInterval(tick, 1000);

  /* ---------- Apparition douce au défilement ---------- */
  let io = null;
  const pending = new Set();
  function startReveals() {
    const els = $$("[data-reveal]");
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("in"); pending.delete(en.target); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -5% 0px" });
    els.forEach((el) => { pending.add(el); io.observe(el); });
  }
  // Tout en bas de la page : on révèle ce qui reste (le dernier bloc ne peut plus monter)
  function revealRemainingAtBottom() {
    if (!io || !pending.size) return;
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      pending.forEach((el) => { el.classList.add("in"); io.unobserve(el); });
      pending.clear();
    }
  }

  /* ---------- Défilement : frise, profondeur de la galerie, fond de l'accueil ---------- */
  const heroMedia = $("#heroMedia");
  const timeline = $("#timeline");
  const tlItems = $$(".tl-item");
  const gals = $$(".gal");
  let ticking = false;

  function update() {
    ticking = false;
    const vh = window.innerHeight;
    const y = window.scrollY;
    revealRemainingAtBottom();

    // Accueil : la photo glisse légèrement plus lentement que la page
    if (!reduce && y < vh * 1.3) heroMedia.style.transform = `translate3d(0, ${(y * 0.22).toFixed(1)}px, 0)`;

    // Frise : le trait se dessine à mesure qu'on descend
    const tr = timeline.getBoundingClientRect();
    const p = reduce ? 1 : clamp((vh * 0.72 - tr.top) / tr.height, 0, 1);
    timeline.style.setProperty("--p", p.toFixed(3));
    tlItems.forEach((li) => {
      if (reduce || li.getBoundingClientRect().top + 24 < vh * 0.74) li.classList.add("on");
    });

    // Galerie : chaque photo se déplace un peu dans son cadre (effet de profondeur)
    if (!reduce) {
      gals.forEach((g) => {
        const r = g.getBoundingClientRect();
        if (r.bottom < -120 || r.top > vh + 120) return;
        const k = ((r.top + r.height / 2) - vh / 2) / (vh / 2 + r.height / 2); // -1 … 1
        g.style.setProperty("--y", `${(k * -r.height * 0.07).toFixed(1)}px`);
      });
    }
  }
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);

  /* ---------- Ouverture de l'enveloppe ---------- */
  const intro = $("#intro");
  const site = $("#site");
  const btn = $("#openBtn");

  function revealSite() {
    document.documentElement.classList.remove("locked");
    window.scrollTo(0, 0);
    site.classList.add("on");
    site.focus({ preventScroll: true });
    startReveals();
    update();
  }

  function open() {
    btn.disabled = true;

    if (reduce) {                              // mouvement réduit : simple fondu
      intro.classList.add("is-done");
      setTimeout(revealSite, 250);
      setTimeout(() => intro.remove(), 900);
      return;
    }

    const steps = [
      [0,    "is-seal"],   // le cachet s'efface
      [350,  "is-open"],   // le rabat s'ouvre
      [1250, "is-rise"],   // la carte sort de l'enveloppe
      [2750, "is-out"]     // la carte s'avance
    ];
    steps.forEach(([t, cls]) => setTimeout(() => intro.classList.add(cls), t));

    setTimeout(() => { intro.classList.add("is-done"); revealSite(); }, 3300); // le site apparaît en fondu
    setTimeout(() => intro.remove(), 5000);
  }
  btn.addEventListener("click", open, { once: true });
})();
