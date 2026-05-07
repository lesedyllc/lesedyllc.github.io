/**
 * Philly Salsa Tonight
 * Event data sourced from: Eventbrite, Facebook, Instagram, X (Twitter),
 * DanceUs.org, Salsa Vida, GO Latin Dance, Brasil's Nightclub, Albasario
 * Dance Co., Society Hill Dance Academy, Laurel Card Latin Dance,
 * Fairmount Park Conservancy — verified May 2026
 */

const EVENTS = [

  // ── SOCIAL DANCING ─────────────────────────────────────────────────────

  {
    id: 1,
    type: 'social',
    relevance: 10,
    name: "Latin Night @ Brasil's Nightclub",
    venue: "Brasil's Nightclub",
    address: "112 Chestnut St, Philadelphia, PA 19106",
    neighborhood: "Old City",
    date: "Every Thursday, Friday & Saturday",
    time: "8:30 PM – 12:00 AM (Thu) · 8:30 PM – 2:00 AM (Fri & Sat)",
    cost: "Cover charge applies · Free beginner lesson included nightly",
    costType: "paid",
    phone: "(267) 314-7798",
    email: "",
    website: "https://brasilsnightclub-philly.com",
    facebook: "https://www.facebook.com/brasilsnightclub/",
    instagram: "https://www.instagram.com/brasilsnightclub/",
    description: "Philadelphia's premier salsa venue since 1997. Every night opens with a FREE beginner-friendly lesson — no partner needed — before the floor opens for salsa & bachata until close. World Salsa Champion Sonya Elmore teaches Wednesdays. Top Philly studio instructors lead Friday lessons.",
    tags: ["Tonight", "Lesson Included", "No Partner Needed", "Est. 1997", "Old City"],
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=720&q=82",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=320&q=80"
    ],
    sources: [
      { label: "🌐 Website",  url: "https://brasilsnightclub-philly.com" },
      { label: "📋 Yelp",     url: "https://www.yelp.com/biz/brasils-nightclub-philadelphia" },
      { label: "🎟 Events",   url: "https://golatindance.com/venue/brasils-nightclub/" }
    ]
  },

  {
    id: 2,
    type: 'social',
    relevance: 9,
    name: "Salsa & Bachata Dance Party @ Love Park",
    venue: "LOVE Park (JFK Plaza)",
    address: "1599 JFK Blvd, Philadelphia, PA 19102",
    neighborhood: "Center City",
    date: "Every Friday · June through September",
    time: "7:00 PM Lesson · Dancing follows until late",
    cost: "FREE — no tickets required",
    costType: "free",
    phone: "",
    email: "",
    website: "https://www.salsavida.com/event/pennsylvania/philadelphia/salsa-bachata-dance-party-love-park/",
    facebook: "https://www.facebook.com/siempresalsaphilly/",
    instagram: "https://www.instagram.com/siempresalsaphilly/",
    description: "Philly's most beloved outdoor Latin dance party returns every Friday all summer long at the iconic LOVE Park fountain plaza. DJ Kevin Ngo spins salsa, bachata & merengue under the open sky. Free lesson at 7 PM for all levels — no partner required. Bring your friends!",
    tags: ["FREE", "Outdoors", "Lesson at 7 PM", "All Levels", "No Partner Needed", "Iconic Venue"],
    images: [
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=720&q=82",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=320&q=80"
    ],
    sources: [
      { label: "🌐 Salsa Vida", url: "https://www.salsavida.com/event/pennsylvania/philadelphia/salsa-bachata-dance-party-love-park/" },
      { label: "📘 Facebook",   url: "https://www.facebook.com/siempresalsaphilly/" },
      { label: "📸 Instagram",  url: "https://www.instagram.com/siempresalsaphilly/" }
    ]
  },

  {
    id: 3,
    type: 'social',
    relevance: 8,
    name: "Latin Takeover Dance Social",
    venue: "Laurel Card Latin Dance",
    address: "2103 Sansom St, Philadelphia, PA 19103",
    neighborhood: "Center City",
    date: "Select Saturdays — see events calendar",
    time: "9:00 PM – Late",
    cost: "$15 general admission · $10 if you arrive before 9:30 PM",
    costType: "paid",
    phone: "(267) 641-9951",
    email: "info@laurelcardlatindance.com",
    website: "https://laurelcardlatindance.com/social",
    facebook: "https://www.facebook.com/laurelcard/",
    instagram: "https://www.instagram.com/laurelcardlatindance/",
    description: "Hosted by Philly's premier woman-owned Latin dance studio. A vibrant, welcoming atmosphere featuring Salsa On1, Bachata and more — with top instructors on the dance floor all night. One of the best-curated social scenes in the city.",
    tags: ["Salsa On1", "Bachata", "Woman-Owned", "Center City", "Saturday"],
    images: [
      "https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?w=720&q=82",
      "https://images.unsplash.com/photo-1547153760-18fc86324498?w=320&q=80"
    ],
    sources: [
      { label: "🌐 Website",   url: "https://laurelcardlatindance.com/social" },
      { label: "📘 Facebook",  url: "https://www.facebook.com/laurelcard/" },
      { label: "📸 Instagram", url: "https://www.instagram.com/laurelcardlatindance/" }
    ]
  },

  {
    id: 4,
    type: 'social',
    relevance: 7,
    name: "¡Bailar en FDR! Salsa Social Dance",
    venue: "FDR Park Boathouse",
    address: "1500 Pattison Ave, Philadelphia, PA 19145",
    neighborhood: "South Philadelphia",
    date: "2nd & 4th Fridays · Season: April – September 2026",
    time: "7:30 PM – 11:30 PM · Free lesson 7:30–8:30 PM",
    cost: "Pay What You Can — $10 / $15 / $20",
    costType: "paid",
    phone: "",
    email: "",
    website: "https://myphillypark.org/bl_events/bailar-en-fdr-salsa-class-and-social-dance/",
    facebook: "https://www.facebook.com/FairmountParkConservancy/",
    instagram: "https://www.instagram.com/fairmountpark/",
    description: "Presented by Fairmount Park Conservancy at the beautiful historic FDR Park Boathouse. DJ Valentin Flores provides the soundtrack. Beginner lesson from 7:30–8:30 PM followed by social dancing until 11:30 PM. All levels welcome, no partner needed.",
    tags: ["Historic Venue", "Lesson Included", "Pay What You Can", "Outdoor", "South Philly"],
    images: [
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=720&q=82",
      "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=320&q=80"
    ],
    sources: [
      { label: "🌐 Philly Park", url: "https://myphillypark.org/bl_events/bailar-en-fdr-salsa-class-and-social-dance/" },
      { label: "🎟 Tickets",     url: "https://fairmountpark.ticketleap.com/bailar-en-fdr-salsa-class--social-dance/" },
      { label: "📘 Facebook",    url: "https://www.facebook.com/siempresalsaphilly/" }
    ]
  },

  // ── DANCE CLASSES ───────────────────────────────────────────────────────

  {
    id: 5,
    type: 'class',
    relevance: 10,
    name: "NY-Style On2 Salsa — All Levels",
    venue: "Albasario Dance Company",
    address: "1637 Germantown Ave, 2nd Floor, Philadelphia, PA 19122",
    neighborhood: "North Philadelphia / Brewerytown",
    date: "Mondays & Tuesdays (ongoing)",
    time: "6:30 PM – 7:30 PM Salsa · Optional 7:30–8:30 PM Bachata",
    cost: "$150 per person cycle class · Drop-in rates available",
    costType: "paid",
    phone: "(267) 403-4020",
    email: "info@albasario.com",
    website: "https://www.albasario.com",
    facebook: "https://www.facebook.com/albasariodancecompany/",
    instagram: "https://www.instagram.com/albasariodancecompany/",
    description: "Philadelphia's only dedicated NY-style On2 Salsa school. Structured, welcoming curriculum that builds confidence from beginner to advanced. No partner needed. Pay online or at the door — arrive a few minutes early for registration.",
    tags: ["NY Style On2", "Structured Curriculum", "Beginner–Advanced", "No Partner Needed", "Mon & Tue"],
    images: [
      "https://images.unsplash.com/photo-1547153760-18fc86324498?w=720&q=82",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=320&q=80"
    ],
    sources: [
      { label: "🌐 Website",   url: "https://www.albasario.com" },
      { label: "📅 Calendar",  url: "https://www.albasario.com/in-studioreservations" },
      { label: "📸 Instagram", url: "https://www.instagram.com/albasariodancecompany/" }
    ]
  },

  {
    id: 6,
    type: 'class',
    relevance: 9,
    name: "Salsa & Bachata Classes — All Levels",
    venue: "Laurel Card Latin Dance",
    address: "2103 Sansom St, Philadelphia, PA 19103",
    neighborhood: "Center City",
    date: "Multiple classes weekly — see schedule",
    time: "Various times — visit website for current schedule",
    cost: "Varies by class level — see online schedule",
    costType: "paid",
    phone: "(267) 641-9951",
    email: "info@laurelcardlatindance.com",
    website: "https://laurelcardlatindance.com/schedule",
    facebook: "https://www.facebook.com/laurelcard/",
    instagram: "https://www.instagram.com/laurelcardlatindance/",
    description: "Philly's most celebrated woman-owned Latin dance school, led by Laurel Card with 20+ years of expertise. Salsa On1, Bachata, Reggaeton & Latin House classes for all levels. Monthly technique workshops for dancers looking to level up.",
    tags: ["Salsa On1", "Bachata", "Reggaeton", "Women-Owned", "20+ Years", "Center City"],
    images: [
      "https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?w=720&q=82",
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=320&q=80"
    ],
    sources: [
      { label: "🌐 Schedule",  url: "https://laurelcardlatindance.com/schedule" },
      { label: "📘 Facebook",  url: "https://www.facebook.com/laurelcard/" },
      { label: "📸 Instagram", url: "https://www.instagram.com/laurelcardlatindance/" }
    ]
  },

  {
    id: 7,
    type: 'class',
    relevance: 8,
    name: "6-Week Salsa Group Class Series",
    venue: "Society Hill Dance Academy",
    address: "1919 E Passyunk Ave, Philadelphia, PA 19148",
    neighborhood: "South Philadelphia",
    date: "New sessions starting regularly — call to enroll",
    time: "Mon–Fri: 1:00 PM – 10:00 PM · Sat: 10:00 AM – 4:00 PM",
    cost: "Call for current session pricing",
    costType: "paid",
    phone: "(215) 574-3574",
    email: "",
    website: "https://societyhilldance.com/group-dance-classes-philadelphia.php",
    facebook: "https://www.facebook.com/shdaphilly",
    instagram: "",
    description: "Philadelphia's beloved neighborhood dance academy since 2002. The 6-week salsa series includes membership to Monday, Wednesday & Friday Social Ease classes AND Friday night dance parties. No partner or prior experience required — open to complete beginners.",
    tags: ["6-Week Series", "Includes Social Classes", "Since 2002", "All Levels", "No Partner", "South Philly"],
    images: [
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=720&q=82",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=320&q=80"
    ],
    sources: [
      { label: "🌐 Classes",  url: "https://societyhilldance.com/group-dance-classes-philadelphia.php" },
      { label: "📘 Facebook", url: "https://www.facebook.com/shdaphilly" },
      { label: "📋 Yelp",     url: "https://www.yelp.com/biz/society-hill-dance-academy-philadelphia" }
    ]
  },

  {
    id: 8,
    type: 'class',
    relevance: 7,
    name: "Free Beginner Salsa Lesson — Learn & Dance",
    venue: "Brasil's Nightclub",
    address: "112 Chestnut St, Philadelphia, PA 19106",
    neighborhood: "Old City",
    date: "Wednesday, Thursday, Friday & Saturday",
    time: "Lesson: 8:30 PM · Social dancing: 9:30 PM – Close",
    cost: "Free lesson included with regular cover charge",
    costType: "paid",
    phone: "(267) 314-7798",
    email: "",
    website: "https://brasilsnightclub-philly.com",
    facebook: "https://www.facebook.com/brasilsnightclub/",
    instagram: "https://www.instagram.com/brasilsnightclub/",
    description: "The best way to learn salsa in Philly — take a free lesson then immediately put it into practice on the dance floor. World Salsa Champion Sonya Elmore leads two-level classes on Wednesdays. Philadelphia's top studio instructors rotate on Fridays. No partner needed.",
    tags: ["Free Lesson", "World Champion Instructor", "4 Nights/Week", "No Partner Needed", "Old City"],
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=720&q=82",
      "https://images.unsplash.com/photo-1547153760-18fc86324498?w=320&q=80"
    ],
    sources: [
      { label: "🌐 Website",  url: "https://brasilsnightclub-philly.com" },
      { label: "🎟 Eventbrite", url: "https://www.eventbrite.com/d/pa--philadelphia/salsa/" },
      { label: "🗺 Map",       url: "https://golatindance.com/venue/brasils-nightclub/" }
    ]
  }

];


// ── HELPERS ────────────────────────────────────────────────────────────────

function starsHtml(relevance) {
  const filled = Math.round(relevance / 2);
  return '★'.repeat(filled) + '☆'.repeat(5 - filled);
}

function tagClass(tag) {
  const t = tag.toLowerCase();
  if (t === 'tonight')          return 'tag-tonight';
  if (t === 'free')             return 'tag-free';
  return '';
}

function costClass(type) {
  return type === 'free' ? 'cost-free' : 'cost-paid';
}

function buildInfoRow(icon, content) {
  if (!content) return '';
  return `<div class="info-row">
    <span class="info-icon">${icon}</span>
    <span class="info-text">${content}</span>
  </div>`;
}

function buildCard(ev) {
  const badgeClass  = ev.type === 'social' ? 'badge-social' : 'badge-class';
  const badgeLabel  = ev.type === 'social' ? 'Social'       : 'Class';
  const ccost       = costClass(ev.costType);
  const tagsHtml    = ev.tags.map(t =>
    `<span class="tag ${tagClass(t)}">${t}</span>`
  ).join('');

  const phoneRow = ev.phone
    ? buildInfoRow('📞', `<a href="tel:${ev.phone}">${ev.phone}</a>`)
    : '';
  const emailRow = ev.email
    ? buildInfoRow('✉️', `<a href="mailto:${ev.email}">${ev.email}</a>`)
    : '';

  const sourcesHtml = ev.sources.map(s =>
    `<a class="btn-secondary" href="${s.url}" target="_blank" rel="noopener noreferrer">${s.label}</a>`
  ).join('');

  return `
<article class="card" data-type="${ev.type}" data-id="${ev.id}">

  <div class="card-images">
    <img
      class="card-img-primary"
      src="${ev.images[0]}"
      alt="${ev.name} at ${ev.venue}"
      loading="lazy"
      onerror="this.src='https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=720&q=80'"
    />
    <img
      class="card-img-thumb"
      src="${ev.images[1]}"
      alt="${ev.venue} flyer"
      loading="lazy"
      onerror="this.style.display='none'"
    />
    <div class="card-img-overlay"></div>
    <span class="card-type-badge ${badgeClass}">${badgeLabel}</span>
    <span class="card-stars" title="Relevance: ${ev.relevance}/10">${starsHtml(ev.relevance)}</span>
  </div>

  <div class="card-body">
    <div class="card-venue">${ev.venue} &middot; ${ev.neighborhood}</div>
    <h2 class="card-title">${ev.name}</h2>
    <p class="card-desc">${ev.description}</p>

    <div class="card-info">
      ${buildInfoRow('📍', ev.address)}
      ${buildInfoRow('📅', ev.date)}
      ${buildInfoRow('🕐', ev.time)}
      ${buildInfoRow('💵', `<span class="${ccost}">${ev.cost}</span>`)}
      ${phoneRow}
      ${emailRow}
    </div>

    <div class="card-tags">${tagsHtml}</div>

    <div class="card-actions">
      <a class="btn-primary" href="${ev.website}" target="_blank" rel="noopener noreferrer">
        🔗 More Info &amp; Tickets
      </a>
      ${ev.facebook ? `<a class="btn-secondary" href="${ev.facebook}" target="_blank" rel="noopener noreferrer">📘</a>` : ''}
      ${ev.instagram ? `<a class="btn-secondary" href="${ev.instagram}" target="_blank" rel="noopener noreferrer">📸</a>` : ''}
      ${ev.phone ? `<a class="btn-secondary" href="tel:${ev.phone}" title="Call ${ev.phone}">📞</a>` : ''}
    </div>
  </div>

</article>`;
}


// ── FILTER + RENDER ────────────────────────────────────────────────────────

let activeFilter = 'social';

function render(filter) {
  activeFilter = filter;
  const grid = document.getElementById('eventsGrid');

  const filtered = (filter === 'all' ? EVENTS : EVENTS.filter(e => e.type === filter))
    .slice()
    .sort((a, b) => b.relevance - a.relevance);

  grid.innerHTML = filtered.map(buildCard).join('');

  // Update stat badges
  const socials = EVENTS.filter(e => e.type === 'social').length;
  const classes = EVENTS.filter(e => e.type === 'class').length;
  document.getElementById('statSocials').textContent = socials;
  document.getElementById('statClasses').textContent = classes;
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');
    render(btn.dataset.filter);
  });
});


// ── LIVE CLOCK ─────────────────────────────────────────────────────────────

function tick() {
  const now  = new Date();
  const date = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const full = `${date} · ${time}`;

  const headerEl  = document.getElementById('headerDate');
  const updatedEl = document.getElementById('lastUpdated');
  if (headerEl)  headerEl.textContent  = full;
  if (updatedEl) updatedEl.textContent = full;
}


// ── INIT ────────────────────────────────────────────────────────────────────

tick();
setInterval(tick, 30000);
render('social');
