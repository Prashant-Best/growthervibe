import './style.css'
import brandLogo from './assets/logo/gr png logo.png'
import sampleMarketplaceAd from './assets/homepage/images/sample-marketplace-ad.svg'
import sampleUgcAd from './assets/homepage/images/sample-ugc-ad.svg'
import sampleQuickCommerceAd from './assets/homepage/images/sample-quick-commerce-ad.svg'
import showcaseVideo from './assets/homepage/videos/Outie Tool Fuse Aligner (1).mp4'
import video1 from './assets/homepage/videos/big news file (1).mp4'
import video2 from './assets/homepage/videos/FlowVeda_video.mp4'
import video3 from './assets/homepage/videos/Mandi Joinbrands Girls Witch 9.16 (1).mp4'
import video4 from './assets/homepage/videos/Morph Reel With Caption File.mp4'
import video5 from './assets/homepage/videos/no mercy website (1).mp4'
import video6 from './assets/homepage/videos/preworkout (1).mp4'
import video7 from './assets/homepage/videos/whey protein motion graphic (1).mp4'
import image1 from './assets/homepage/images/Ads ag ai 2 (3).png'
import image2 from './assets/homepage/images/Frame 54 (3).png'
import image3 from './assets/homepage/images/hydro gain launching post copy.jpg.jpeg'
import image4 from './assets/homepage/images/image_2024_10_17T07_15_09_614Z.png'
import image5 from './assets/homepage/images/muscle whey 1kg aad copy.jpg.jpeg'
import image6 from './assets/homepage/images/prex island crush ad copy.jpg.jpeg'

const page = document.body.dataset.page || 'home'
const STORAGE_KEY = 'growth-vibe-site-data'
const PLANE_INTRO_SEEN_KEY = 'growth-revive-plane-intro-seen'
const PORTFOLIO_BOOK_STATE_KEY = 'growth-revive-portfolio-book-state'
const CONTACT_ENDPOINT = './contact-handler.php'
let navDropdownController

const sampleVideoReel = [
  {
    tag: 'Meta UGC',
    title: 'Hook-first product storytelling',
    caption: 'Sample motion reel for short-form ad concepts and creator-led edits.',
    video: showcaseVideo,
  },
  {
    tag: 'Marketplace',
    title: 'Product benefits in fast cuts',
    caption: 'Sample showcase card for catalog creatives, before-after frames, and CTA sequences.',
    video: showcaseVideo,
  },
  {
    tag: 'Quick Commerce',
    title: 'Speed, offer, urgency, repeat',
    caption: 'Sample looping visual for quick commerce promos and conversion-led launch edits.',
    video: showcaseVideo,
  },
]

const homePortfolioEntries = [
  {
    badge: 'Marketplace Ads',
    title: 'Before / after creatives, A+ content, and product frames built for shelf clicks.',
    description: 'Scroll-stopping creatives designed for high CTR on marketplaces.',
    detail: 'Page 1 explores cover-ready product storytelling for catalog and shelf performance.',
  },
  {
    badge: 'Performance Ads',
    title: 'UGC ads, static variations, hooks, and testing-ready ad sets.',
    description: 'Creative testing engine behind profitable scaling.',
    detail: 'Page 2 focuses on ad systems that help ambitious brands learn faster and scale cleaner.',
  },
  {
    badge: 'Quick Commerce Ads',
    title: 'Urgency-led motion, offer-first cuts, and fast conversion creatives.',
    description: 'Built for instant clicks and impulse buys.',
    detail: 'Page 3 captures fast-turn offers, hard-stop edits, and conversion pressure built for speed.',
  },
  {
    badge: 'Video + Photography',
    title: 'Studio shots, lifestyle frames, and product storytelling in one system.',
    description: 'Product shoots with a studio + UGC mix.',
    detail: 'Page 4 blends image direction and motion planning so every visual page feels cohesive.',
  },
  {
    badge: 'AI UGC Ads',
    title: 'AI avatars, voiceover creatives, and scalable ad iterations.',
    description: 'Scale content without scaling production cost.',
    detail: 'Page 5 shows modern creative workflows that keep production nimble without losing polish.',
  },
]

const navItems = [
  { key: 'home', label: 'Home', href: './index.html' },
  { key: 'about', label: 'About Us', href: './about.html' },
  { key: 'services', label: 'Services', href: './services.html' },
  { key: 'case-studies', label: 'Case Studies', href: './case-studies.html' },
  { key: 'contact', label: 'Contact Us', href: './contact.html' },
]

const serviceIcons = {
  'demand-generation': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`,
  'content-marketing': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,
  'marketing-automation': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 0 1 10 10"/><path d="M12 6v6l4 2"/><path d="M2 12a10 10 0 0 0 10 10"/></svg>`,
  'seo': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  'saas-ppc-agency': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/></svg>`,
  'account-based-marketing': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  'ai-seo': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
  'geo': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>`,
}

const serviceCatalog = [
  {
    key: 'demand-generation',
    title: 'Demand generation',
    description: 'Qualified pipeline, every week',
    href: './demand-generation.html',
    eyebrow: 'Demand generation',
    headline: 'Build a consistent pipeline with campaigns engineered for qualified demand.',
    intro:
      'We connect positioning, media, landing flow, and reporting so demand generation turns into a weekly operating system instead of random launch activity.',
    outcomes: ['Predictable lead flow', 'Higher intent pipeline', 'Clear weekly reporting'],
    deliverables: [
      'Offer and campaign angle planning',
      'Channel mix across search, social, and outbound support',
      'Landing page and funnel alignment',
    ],
  },
  {
    key: 'content-marketing',
    title: 'Content Marketing',
    description: 'Content that drives pipeline',
    href: './content-marketing.html',
    eyebrow: 'Content marketing',
    headline: 'Create content that compounds visibility and supports revenue conversations.',
    intro:
      'We plan content around buying journeys, category education, and search intent so every asset helps your team build trust before the sales call.',
    outcomes: ['Stronger topical authority', 'Higher inbound quality', 'More reusable campaign assets'],
    deliverables: [
      'Editorial strategy and topic clusters',
      'Bottom-funnel pages and comparison content',
      'Repurposing systems for social, email, and sales',
    ],
  },
  {
    key: 'marketing-automation',
    title: 'Marketing Automation',
    description: 'Route, nurture, & convert faster',
    href: './marketing-automation.html',
    eyebrow: 'Marketing automation',
    headline: 'Automate handoffs, nurture flows, and lead routing without losing the human feel.',
    intro:
      'We design automation that helps leads move faster through your funnel while keeping message timing, segmentation, and follow-up logic clean.',
    outcomes: ['Faster lead response', 'Better nurture sequencing', 'Less leakage between stages'],
    deliverables: [
      'CRM and lifecycle mapping',
      'Nurture workflow and trigger design',
      'Lead scoring and routing logic',
    ],
  },
  {
    key: 'seo',
    title: 'SEO',
    description: 'Search that goes beyond rankings',
    href: './seo.html',
    eyebrow: 'SEO strategy',
    headline: 'Grow organic visibility with structure, content, and technical fixes that support real revenue.',
    intro:
      'Our SEO work blends technical cleanup, topic strategy, and conversion thinking so search traffic translates into stronger business outcomes.',
    outcomes: ['More qualified organic traffic', 'Sharper site architecture', 'Pages built for ranking and conversion'],
    deliverables: [
      'Technical audits and implementation priorities',
      'Keyword mapping and information architecture',
      'On-page optimization and content planning',
    ],
  },
  {
    key: 'saas-ppc-agency',
    title: 'SaaS PPC Agency',
    description: 'Scale smarter across Google, LinkedIn & Meta',
    href: './saas-ppc-agency.html',
    eyebrow: 'SaaS PPC',
    headline: 'Run paid acquisition for SaaS with tighter creative loops and stronger conversion economics.',
    intro:
      'We manage paid search and paid social for SaaS teams that need faster learning cycles, sharper segmentation, and clearer CAC efficiency.',
    outcomes: ['Lower wasted spend', 'Faster creative learning', 'More sales-ready trial and demo volume'],
    deliverables: [
      'Campaign structure across Google, LinkedIn, and Meta',
      'Audience and message testing plans',
      'Landing page and conversion path alignment',
    ],
  },
  {
    key: 'account-based-marketing',
    title: 'Account based Marketing',
    description: 'Campaigns that win key deals',
    href: './account-based-marketing.html',
    eyebrow: 'Account based marketing',
    headline: 'Focus campaign spend and messaging around the accounts most likely to become your best customers.',
    intro:
      'We help teams coordinate targeting, personalization, and sales enablement so ABM campaigns feel relevant, premium, and commercially focused.',
    outcomes: ['Better target account engagement', 'Stronger deal support', 'More aligned marketing and sales activity'],
    deliverables: [
      'Target account segmentation',
      'Message frameworks by buying committee',
      'Campaign and sales touchpoint planning',
    ],
  },
  {
    key: 'ai-seo',
    title: 'AI SEO',
    description: 'Enhance visibility and capture AI-driven traffic',
    href: './ai-seo.html',
    eyebrow: 'AI SEO',
    headline: 'Prepare your site to win visibility in AI-assisted discovery, summaries, and answer engines.',
    intro:
      'We shape content and site signals so your brand is easier for AI systems to understand, cite, and surface across emerging search behavior.',
    outcomes: ['Better AI answer visibility', 'Stronger entity clarity', 'Content built for new search journeys'],
    deliverables: [
      'Entity and semantic content improvements',
      'FAQ, schema, and answer-oriented formatting',
      'AI search opportunity mapping',
    ],
  },
  {
    key: 'geo',
    title: 'GEO',
    description: 'Increase conversions by appearing in Gen AI answers',
    href: './geo.html',
    eyebrow: 'Generative engine optimization',
    headline: 'Show up in generative answers with content designed for authority, clarity, and conversion.',
    intro:
      'GEO work helps your brand earn mention-worthy coverage in AI responses by strengthening how your offer, evidence, and expertise are presented online.',
    outcomes: ['More branded discovery', 'Better answer-engine presence', 'Higher trust from first touch'],
    deliverables: [
      'Source-worthy page restructuring',
      'Authority and proof asset development',
      'Generative answer visibility reviews',
    ],
  },
]

const servicePageKeys = new Set(serviceCatalog.map((service) => service.key))
const isServicePage = page === 'services' || servicePageKeys.has(page)

const defaultSiteData = {
  home: {
    eyebrow: 'Creative-first performance marketing studio',
    title: 'We turn attention into momentum for ambitious brands.',
    text: 'Amazon. Meta. Quick Commerce. We design creatives that convert, not just look good.',
    ctaTitle: 'Bring creative production, performance thinking, and conversion-focused execution into one team.',
  },
  contact: {
    email: 'business@grothervibe.com',
    secondaryEmail: 'info@growthrevibe.com',
    phone: '+91 9056721993',
  },
  footer: {
    note: 'Creative-first campaigns for brands that want stronger hooks, better click-through rates, and cleaner scaling.',
  },
  caseStudies: [
    {
      id: 'saas-search',
      category: 'B2B SaaS',
      label: 'Search-led repositioning',
      title: 'From unclear messaging to a search system that produced more qualified demos.',
      description:
        'Growth Revibe reworked the homepage story, clarified service language, and aligned content with high-intent search demand.',
      metrics: ['+184% organic impressions', '+71% demo requests', '38% lower bounce'],
    },
    {
      id: 'ecommerce-paid',
      category: 'E-commerce',
      label: 'Paid creative optimization',
      title: 'Lower customer acquisition costs through sharper creative framing and landing-page flow.',
      description:
        'We tightened audience-message fit, refreshed visual hooks, and removed friction between ad promise and product page experience.',
      metrics: ['32% lower CPA', '+48% add-to-cart rate', 'Higher ROAS efficiency'],
    },
    {
      id: 'local-growth',
      category: 'Local services',
      label: 'Regional discovery growth',
      title: 'Better local visibility without making the brand feel small or generic.',
      description:
        'We created location-led landing structure, optimized service pages, and supported trust-building with cleaner proof and stronger CTAs.',
      metrics: ['Maps visibility up', 'Higher lead quality', 'Stronger first-visit trust'],
    },
  ],
}

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function formatHeroTitle(title = '') {
  const trimmedTitle = String(title).trim()

  if (trimmedTitle === 'We turn attention into momentum for ambitious brands.') {
    return `
      <span class="hero-title-line">We turn attention</span>
      <span class="hero-title-line">into momentum for</span>
      <span class="hero-title-line">ambitious brands.</span>
    `
  }

  return escapeHtml(trimmedTitle)
}

function mergeSiteData(storedData = {}) {
  return {
    home: {
      ...defaultSiteData.home,
      ...(storedData.home || {}),
    },
    contact: { ...defaultSiteData.contact },
    footer: {
      ...defaultSiteData.footer,
      ...(storedData.footer || {}),
    },
    caseStudies: Array.isArray(storedData.caseStudies) && storedData.caseStudies.length
      ? storedData.caseStudies.map((study, index) => ({
          ...defaultSiteData.caseStudies[index % defaultSiteData.caseStudies.length],
          ...study,
          id: study.id || `case-${index + 1}`,
          metrics: Array.isArray(study.metrics) ? study.metrics.filter(Boolean).slice(0, 3) : [],
        }))
      : defaultSiteData.caseStudies.map((study) => ({ ...study })),
  }
}

function getSiteData() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return mergeSiteData(stored ? JSON.parse(stored) : {})
  } catch {
    return mergeSiteData()
  }
}

function saveSiteData(siteData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(siteData))
}

function serviceOverviewCardsMarkup() {
  return serviceCatalog
    .map(
      (service, index) => `
        <a href="${service.href}" class="service-overview-card reveal-up" style="transition-delay: ${index * 70}ms;">
          <span class="service-overview-index">${String(index + 1).padStart(2, '0')}</span>
          <strong>${escapeHtml(service.title)}</strong>
          <p>${escapeHtml(service.description)}</p>
        </a>
      `,
    )
    .join('')
}

function serviceSelectOptionsMarkup() {
  return serviceCatalog
    .map((service) => `<option value="${escapeHtml(service.title)}">${escapeHtml(service.title)}</option>`)
    .join('')
}

function timezoneOptionsMarkup() {
  const timezones = [
    'Asia/Kolkata',
    'UTC',
    'Europe/London',
    'America/New_York',
    'America/Los_Angeles',
    'Asia/Dubai',
    'Asia/Singapore',
    'Australia/Sydney',
  ]

  return timezones
    .map(
      (timezone) =>
        `<button type="button" class="appointment-timezone-option${timezone === 'Asia/Kolkata' ? ' is-selected' : ''}" data-timezone-option="${escapeHtml(timezone)}">${escapeHtml(timezone)}</button>`,
    )
    .join('')
}

function servicePageMarkup(service, index) {
  return `
    <section class="service-detail-hero section reveal-up">
      <div class="service-detail-copy">
        <span class="eyebrow">${escapeHtml(service.eyebrow)}</span>
        <h1>${escapeHtml(service.headline)}</h1>
        <p>${escapeHtml(service.intro)}</p>
        <div class="hero-actions">
          <a class="button button-primary" href="./contact.html">Talk to Growth Revibe</a>
          <a class="button button-secondary" href="./services.html">View all services</a>
        </div>
      </div>
      <div class="service-detail-panel reveal-up" style="transition-delay: 120ms;">
        <span class="service-detail-label">What this service drives</span>
        <div class="service-detail-outcomes">
          ${service.outcomes
            .map((outcome) => `<span>${escapeHtml(outcome)}</span>`)
            .join('')}
        </div>
        <div class="service-detail-accent service-accent-${(index % 4) + 1}"></div>
      </div>
    </section>

    <section class="service-detail-layout section">
      <article class="service-detail-card reveal-up">
        <span class="service-detail-label">Deliverables</span>
        <ul class="service-detail-list">
          ${service.deliverables
            .map((item) => `<li>${escapeHtml(item)}</li>`)
            .join('')}
        </ul>
      </article>

      <article class="service-detail-card reveal-up" style="transition-delay: 120ms;">
        <span class="service-detail-label">Why teams choose it</span>
        <p>Growth Revibe combines strategy, messaging, and execution so this service strengthens both visibility and conversion instead of optimizing one at the expense of the other.</p>
        <p>Every engagement is designed to create a clearer path from attention to inquiry, with reporting that keeps priorities visible.</p>
      </article>
    </section>
  `
}

function navMarkup() {
  return navItems
    .map((item) => {
      if (item.key === 'services') {
        return `
          <div class="nav-dropdown ${isServicePage ? 'is-active' : ''}" data-nav-dropdown>
            <button
              type="button"
              class="nav-dropdown-trigger ${isServicePage ? 'is-active' : ''}"
              aria-haspopup="true"
              aria-expanded="false"
              aria-controls="services-menu"
              data-nav-dropdown-trigger
            >
              <span>${item.label}</span>
              <span class="nav-caret" aria-hidden="true"></span>
            </button>
            <div class="service-mega-menu" id="services-menu" role="menu" aria-label="Services menu" hidden>
              <div class="service-mega-head">
                <div>
                  <span class="service-mega-kicker">Our Services</span>
                  <strong>What we do for you</strong>
                </div>
                <a href="${item.href}" class="service-mega-link">All services &rarr;</a>
              </div>
              <div class="service-mega-grid">
                ${serviceCatalog
                  .map(
                    (service) => `
                      <a
                        href="${service.href}"
                        class="service-mega-item"
                        role="menuitem"
                      >
                        <span class="service-mega-icon" aria-hidden="true">${serviceIcons[service.key] || ''}</span>
                        <span class="service-mega-text">
                          <strong>${escapeHtml(service.title)}</strong>
                          <span class="service-mega-desc">${escapeHtml(service.description)}</span>
                        </span>
                      </a>
                    `,
                  )
                  .join('')}
              </div>
            </div>
          </div>
        `
      }

      return `<a href="${item.href}" class="${item.key === page ? 'is-active' : ''}">${ item.label}</a>`
    })
    .join('')
}

function caseStudyCardsMarkup(caseStudies) {
  return caseStudies
    .map(
      (study, index) => `
        <article class="case-thumb-card reveal-up" style="transition-delay: ${index * 90}ms;">
          <div class="case-thumb-media case-theme-${(index % 4) + 1}">
            <div class="case-thumb-gridline" aria-hidden="true"></div>
            <div class="case-thumb-sigil" aria-hidden="true">GR</div>
            <div class="case-thumb-overlay">
              <div class="case-meta">
                <span class="case-tag">${escapeHtml(study.category)}</span>
                <strong>${escapeHtml(study.label)}</strong>
              </div>
              <h2>${escapeHtml(study.title)}</h2>
              <div class="case-thumb-metrics">
                ${(study.metrics || [])
                  .map((metric) => `<span>${escapeHtml(metric)}</span>`)
                  .join('')}
              </div>
            </div>
          </div>
          <div class="case-thumb-copy">
            <p>${escapeHtml(study.description)}</p>
          </div>
        </article>
      `,
    )
    .join('')
}

function homeVideoRailMarkup() {
  const items = [...sampleVideoReel, ...sampleVideoReel]

  return items
    .map(
      (item, index) => `
        <article class="video-rail-card" aria-label="${escapeHtml(item.title)} sample video card">
          <div class="video-rail-shell">
            <div class="video-rail-chrome">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="video-rail-screen video-theme-${(index % sampleVideoReel.length) + 1}">
              <video class="video-rail-media" src="${item.video}" autoplay muted loop playsinline preload="metadata" aria-label="${escapeHtml(item.title)} sample creative video"></video>
              <div class="video-rail-glow" aria-hidden="true"></div>
              <div class="video-rail-play" aria-hidden="true"></div>
              <div class="video-rail-timecode" aria-hidden="true">00:${18 + (index % 3) * 7}</div>
              <div class="video-rail-progress" aria-hidden="true"><span></span></div>
            </div>
          </div>
          <div class="video-rail-copy">
            <span>${escapeHtml(item.tag)}</span>
            <strong>${escapeHtml(item.title)}</strong>
            <p>${escapeHtml(item.caption)}</p>
          </div>
        </article>
      `,
    )
    .join('')
}

function horizontalVideoCarouselMarkup() {
  const videos = [
    { src: video1, title: 'Big News' },
    { src: video2, title: 'FlowVeda' },
    { src: video3, title: 'Mandi Joinbrands' },
    { src: video4, title: 'Morph Reel' },
    { src: video5, title: 'No Mercy' },
    { src: video6, title: 'Preworkout' },
    { src: video7, title: 'Whey Protein' },
    { src: showcaseVideo, title: 'Outie Tool' },
  ]

  return `
    <div class="carousel-section reveal-up">
      <div class="carousel-row carousel-row-ltr">
        <div class="carousel-track carousel-track-ltr">
          ${videos.map((video, i) => `
            <div class="carousel-item">
              <video class="carousel-video" src="${video.src}" autoplay muted loop playsinline preload="metadata"></video>
              <span class="carousel-label">${escapeHtml(video.title)}</span>
            </div>
          `).join('')}
          ${videos.map((video, i) => `
            <div class="carousel-item">
              <video class="carousel-video" src="${video.src}" autoplay muted loop playsinline preload="metadata"></video>
              <span class="carousel-label">${escapeHtml(video.title)}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="carousel-row carousel-row-rtl">
        <div class="carousel-track carousel-track-rtl">
          ${videos.map((video, i) => `
            <div class="carousel-item">
              <video class="carousel-video" src="${video.src}" autoplay muted loop playsinline preload="metadata"></video>
              <span class="carousel-label">${escapeHtml(video.title)}</span>
            </div>
          `).join('')}
          ${videos.map((video, i) => `
            <div class="carousel-item">
              <video class="carousel-video" src="${video.src}" autoplay muted loop playsinline preload="metadata"></video>
              <span class="carousel-label">${escapeHtml(video.title)}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `
}

function imageGalleryMarkup() {
  const images = [
    { src: image1, title: 'Ad Showcase' },
    { src: image2, title: 'Frame Design' },
    { src: image3, title: 'Hydro Gain' },
    { src: image4, title: 'Product Image' },
    { src: image5, title: 'Muscle Whey' },
    { src: image6, title: 'Prex Island' },
  ]

  return `
    <div class="gallery-section reveal-up">
      <div class="gallery-row gallery-row-ltr">
        <div class="gallery-track gallery-track-ltr">
          ${images.map((img, i) => `
            <div class="gallery-item">
              <img class="gallery-image" src="${img.src}" alt="${escapeHtml(img.title)}" loading="lazy" />
              <span class="gallery-label">${escapeHtml(img.title)}</span>
            </div>
          `).join('')}
          ${images.map((img, i) => `
            <div class="gallery-item">
              <img class="gallery-image" src="${img.src}" alt="${escapeHtml(img.title)}" loading="lazy" />
              <span class="gallery-label">${escapeHtml(img.title)}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="gallery-row gallery-row-rtl">
        <div class="gallery-track gallery-track-rtl">
          ${images.map((img, i) => `
            <div class="gallery-item">
              <img class="gallery-image" src="${img.src}" alt="${escapeHtml(img.title)}" loading="lazy" />
              <span class="gallery-label">${escapeHtml(img.title)}</span>
            </div>
          `).join('')}
          ${images.map((img, i) => `
            <div class="gallery-item">
              <img class="gallery-image" src="${img.src}" alt="${escapeHtml(img.title)}" loading="lazy" />
              <span class="gallery-label">${escapeHtml(img.title)}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `
}

function homePortfolioBookMarkup() {
  const firstEntry = homePortfolioEntries[0]

  return `
    <div class="portfolio-book-stage reveal-up">
      <article class="portfolio-book" data-portfolio-book data-page-index="0" aria-label="Interactive portfolio book">
        <div class="portfolio-book-shell">
          <div class="portfolio-book-shadow" aria-hidden="true"></div>
          <div class="portfolio-book-spine" aria-hidden="true"></div>
          <div class="portfolio-book-page-stack" aria-hidden="true"></div>
          <div class="portfolio-book-pages" aria-hidden="true"></div>
          <div class="portfolio-book-sheet portfolio-book-sheet-back" aria-hidden="true"></div>
          <div class="portfolio-book-sheet portfolio-book-sheet-front" aria-hidden="true"></div>
          <div class="portfolio-book-page" data-portfolio-page>
            <span class="portfolio-book-page-label">Inside page</span>
            <h3 data-portfolio-page-heading>${escapeHtml(firstEntry.badge)}</h3>
            <strong data-portfolio-detail>${escapeHtml(firstEntry.detail)}</strong>
            <p data-portfolio-description>${escapeHtml(firstEntry.description)}</p>
          </div>
          <div class="portfolio-book-cover" data-portfolio-cover tabindex="0" role="button" aria-label="Open the next portfolio page">
            <span class="portfolio-badge" data-portfolio-badge>${escapeHtml(firstEntry.badge)}</span>
            <strong data-portfolio-title>${escapeHtml(firstEntry.title)}</strong>
            <small data-portfolio-counter>Page 1 / ${homePortfolioEntries.length}</small>
          </div>
        </div>
        <div class="portfolio-book-controls">
          <button class="button button-secondary button-compact" type="button" data-portfolio-book-nav="prev">Previous page</button>
          <button class="button button-primary button-compact" type="button" data-portfolio-book-nav="next">Flip page</button>
          <button class="button button-secondary button-compact" type="button" data-portfolio-book-nav="close">Close book</button>
        </div>
        <p class="portfolio-book-status" data-portfolio-book-status aria-live="polite">Page 1 of ${homePortfolioEntries.length}. Use the buttons or click the cover to turn the page.</p>
      </article>
    </div>
  `
}

function homeAnswersSectionMarkup() {
  const answers = [
    {
      question: 'Do you create only videos, or complete ad systems too?',
      answer:
        'We build the full creative layer around performance: hooks, video edits, statics, product frames, and the testing direction behind them.',
    },
    {
      question: 'Can you work with our existing brand and product assets?',
      answer:
        'Yes. We can build from raw footage, existing brand kits, marketplace assets, or even half-finished campaign material and turn it into stronger output.',
    },
    {
      question: 'What kinds of brands are the best fit for Growth Revibe?',
      answer:
        'D2C, marketplace-first, and fast-moving consumer brands get the most value when they need sharper creative direction and faster campaign iteration.',
    },
    {
      question: 'How fast can we start seeing usable creative work?',
      answer:
        'Most projects begin with a clear direction and first deliverables quickly, so you can start reviewing concepts and launch-ready assets without a long ramp-up.',
    },
    {
      question: 'Can you support scaling after the first batch of creatives?',
      answer:
        'Yes. We do not stop at one-off assets. We keep extending winners into new hooks, formats, audiences, and platform placements.',
    },
  ]

  return `
    <section class="answers-section section">
      <div class="answers-intro reveal-up">
        <span class="eyebrow">What clients ask</span>
        <h2>We already know the questions serious brands ask before they move.</h2>
      </div>
      <div class="answers-list reveal-up">
        ${answers
          .map(
            (item, index) => `
              <details class="answer-item" ${index === 0 ? 'open' : ''}>
                <summary>
                  <span>${escapeHtml(item.question)}</span>
                  <span class="answer-caret" aria-hidden="true"></span>
                </summary>
                <div class="answer-body">
                  <p>${escapeHtml(item.answer)}</p>
                </div>
              </details>
            `,
          )
          .join('')}
      </div>
    </section>
  `
}

function planeIntroMarkup() {
  return `
    <div class="plane-intro" data-plane-intro aria-hidden="true">
      <div class="plane-intro-sky"></div>
      <div class="plane-intro-runway"></div>
      <div class="plane-intro-title">Growth Revive</div>
      <div class="plane-intro-plane">
        <div class="plane-trail"></div>
        <div class="plane-tail-fin"></div>
        <div class="plane-body"></div>
        <div class="plane-window-strip"></div>
        <div class="plane-door"></div>
        <div class="plane-cockpit"></div>
        <div class="plane-wing-root"></div>
        <div class="plane-wing plane-wing-main"></div>
        <div class="plane-engine plane-engine-one"></div>
        <div class="plane-engine plane-engine-two"></div>
        <div class="plane-wing plane-wing-tail"></div>
        <div class="plane-stabilizer"></div>
        <div class="plane-landing-gear plane-landing-gear-front"></div>
        <div class="plane-landing-gear plane-landing-gear-back"></div>
        <div class="plane-nose"></div>
      </div>
    </div>
  `
}

function sitePages(siteData) {
  const serviceDetailPages = Object.fromEntries(
    serviceCatalog.map((service, index) => [service.key, servicePageMarkup(service, index)]),
  )

  return {
    home: `
      <section class="hero-section section page-hero page-hero-home">
        <div class="hero-copy reveal-up">
          <span class="eyebrow">${escapeHtml(siteData.home.eyebrow)}</span>
          <h1>${formatHeroTitle(siteData.home.title)}</h1>
          <p class="hero-text">${escapeHtml(siteData.home.text)}</p>

          <div class="hero-actions">
            <a class="button button-primary" href="./case-studies.html">View Our Work</a>
            <a class="button button-secondary" href="./contact.html">Get Creatives That Convert</a>
          </div>

          <div class="hero-client-strip reveal-up">
            <span>Amazon creatives</span>
            <span>Meta performance ads</span>
            <span>Quick commerce launches</span>
            <span>UGC + product shoots</span>
          </div>
        </div>

        <div class="hero-visual reveal-up" aria-hidden="true">
          <div class="hero-background-motion">
            <div class="motion-ribbon motion-ribbon-one"></div>
            <div class="motion-ribbon motion-ribbon-two"></div>
            <div class="motion-ribbon motion-ribbon-three"></div>
            <div class="motion-pulse motion-pulse-one"></div>
            <div class="motion-pulse motion-pulse-two"></div>
            <div class="motion-particle motion-particle-one"></div>
            <div class="motion-particle motion-particle-two"></div>
            <div class="motion-particle motion-particle-three"></div>
          </div>
          <div class="hero-reel-stage">
            <div class="reel-phone-frame">
              <div class="reel-phone-notch"></div>
              <div class="reel-phone-screen">
                <video class="reel-video" src="${showcaseVideo}" autoplay muted loop playsinline preload="metadata" aria-label="Instagram reel style showcase video"></video>
                <div class="reel-overlay-gradient"></div>
                <div class="reel-controls">
                  <div class="reel-heart"></div>
                  <div class="reel-comment"></div>
                  <div class="reel-share"></div>
                </div>
                <div class="reel-progress"><span></span></div>
              </div>
              <div class="reel-phone-home"></div>
            </div>
            <div class="reel-glow" aria-hidden="true"></div>
            <div class="reel-shine" aria-hidden="true"></div>
          </div>
        </div>
      </section>

      <section class="trust-strip section reveal-up">
        <p>Creative production for brands that want stronger scroll-stopping ads and cleaner performance scaling.</p>
        <div class="trust-items" aria-label="Capabilities">
          <span>Amazon</span>
          <span>Meta</span>
          <span>Google</span>
          <span>Flipkart</span>
          <span>Meesho</span>
          <span>Quick commerce</span>
        </div>
      </section>

      <section class="portfolio-section section">
        <div class="section-heading reveal-up">
          <span class="eyebrow">Work / Portfolio</span>
          <h2>Visuals do the selling here.</h2>
        </div>
        ${homePortfolioBookMarkup()}
      </section>

      <section class="horizontal-carousel-section section">
        <div class="section-heading reveal-up">
          <span class="eyebrow">Video Gallery</span>
          <h2>Infinite scrolling creatives</h2>
        </div>
        ${horizontalVideoCarouselMarkup()}
      </section>

      <section class="horizontal-carousel-section section">
        <div class="section-heading reveal-up">
          <span class="eyebrow">Image Gallery</span>
          <h2>Creative assets flowing both ways</h2>
        </div>
        ${imageGalleryMarkup()}
      </section>

      <section class="feature-band section">
        <div class="section-heading reveal-up">
          <span class="eyebrow">Services</span>
          <h2>We don't run ads without strong creatives.</h2>
        </div>
        <div class="service-pillars">
          <article class="service-pillar reveal-up">
            <span>Creative Production</span>
            <h3>Ad videos, UGC, AI creatives, and product photography.</h3>
            <p>Built to give every campaign a stronger first impression.</p>
          </article>
          <article class="service-pillar reveal-up" style="transition-delay: 120ms;">
            <span>Performance Marketing</span>
            <h3>Meta ads, Google ads, and scaling strategies.</h3>
            <p>Creative and media work together so testing actually compounds.</p>
          </article>
          <article class="service-pillar reveal-up" style="transition-delay: 240ms;">
            <span>Marketplace Growth</span>
            <h3>Amazon, Flipkart, listing optimization, and catalog-first ad creatives.</h3>
            <p>Sharper product pages and better-performing marketplace assets.</p>
          </article>
          <article class="service-pillar reveal-up" style="transition-delay: 360ms;">
            <span>Quick Commerce</span>
            <h3>Blinkit and Zepto style creatives with speed and urgency built in.</h3>
            <p>Designed for fast conversion moments and impulse purchase behavior.</p>
          </article>
        </div>
      </section>

      <section class="process-band section">
        <div class="process-copy reveal-up">
          <span class="eyebrow">How we work</span>
          <h2>Creative-first performance means the visuals lead and the metrics follow.</h2>
          <p>We build ad systems around hooks, rapid testing, stronger product storytelling, and formats that fit the platform instead of fighting it.</p>
        </div>
        <div class="process-steps">
          <article class="process-step reveal-up">
            <span>01</span>
            <h3>Find the hook</h3>
            <p>We identify the angle, product moment, and audience trigger worth building around.</p>
          </article>
          <article class="process-step reveal-up" style="transition-delay: 120ms;">
            <span>02</span>
            <h3>Produce variations</h3>
            <p>We turn concepts into videos, statics, UGC, AI creatives, and marketplace-ready assets.</p>
          </article>
          <article class="process-step reveal-up" style="transition-delay: 240ms;">
            <span>03</span>
            <h3>Scale what converts</h3>
            <p>We keep the winning hooks moving into new audiences, placements, and offers.</p>
          </article>
        </div>
      </section>

      ${homeAnswersSectionMarkup()}

      <section class="marquee-section section reveal-up" aria-label="Marketing services ticker">
        <div class="marquee-track">
          <span>Marketplace creatives</span>
          <span>Meta ad videos</span>
          <span>UGC production</span>
          <span>AI UGC ads</span>
          <span>Quick commerce edits</span>
          <span>Product photography</span>
          <span>Marketplace creatives</span>
          <span>Meta ad videos</span>
          <span>UGC production</span>
          <span>AI UGC ads</span>
          <span>Quick commerce edits</span>
          <span>Product photography</span>
        </div>
      </section>

      <section class="home-form-section section">
        <div class="section-heading reveal-up">
          <span class="eyebrow">Start here</span>
          <h2>Need creatives that perform, not just fill the feed?</h2>
        </div>
        <div class="hero-form-card reveal-up">
          <div class="form-intro">
            <span class="eyebrow">Quick inquiry</span>
            <h2>Tell us what you want to scale.</h2>
            <p>Share the platform, product, and creative challenge. We’ll map the right production and performance mix.</p>
          </div>
          <form class="lead-form home-lead-form" data-contact-form data-form-type="homepage-inquiry">
            <label>
              <span>Name</span>
              <input type="text" name="name" placeholder="Your full name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="you@example.com" required />
            </label>
            <label>
              <span>Company</span>
              <input type="text" name="company" placeholder="Your company name" />
            </label>
            <label class="select-field">
              <span>Where do you need help?</span>
              <span class="select-glow" aria-hidden="true"></span>
              <select name="service">
                ${serviceSelectOptionsMarkup()}
              </select>
            </label>
            <label class="field-wide">
              <span>Project goals</span>
              <textarea name="message" rows="4" placeholder="Tell us about your business, audience, and what you want to improve."></textarea>
            </label>
            <button class="button button-primary button-compact button-inquiry" type="submit">Send inquiry</button>
            <p class="form-status field-wide" data-form-status aria-live="polite"></p>
          </form>
        </div>
      </section>
    `,
    about: `
      <section class="page-banner section reveal-up">
        <span class="eyebrow">About us</span>
        <h1>Growth Revibe helps brands grow with sharper creative and clearer positioning.</h1>
        <p>
          We connect search strategy, brand language, campaign design, and conversion thinking so your marketing feels cohesive instead of scattered.
        </p>
      </section>

      <section class="story-grid section">
        <article class="story-panel reveal-up">
          <h2>What we believe</h2>
          <p>Strong marketing should make a business easier to understand, easier to discover, and easier to trust.</p>
        </article>
        <article class="story-panel reveal-up" style="transition-delay: 140ms;">
          <h2>How we operate</h2>
          <p>We start with audience clarity, search opportunities, offer positioning, and messaging priorities before designing execution.</p>
        </article>
      </section>

      <section class="section">
        <div class="section-heading reveal-up">
          <span class="eyebrow">Our values</span>
          <h2>Everything we build is guided by clarity, momentum, and good taste.</h2>
        </div>
        <div class="services-grid">
          <article class="service-card reveal-up">
            <div class="service-icon">01</div>
            <h3>Clarity over noise</h3>
            <p>We simplify positioning so your audience understands the value faster.</p>
          </article>
          <article class="service-card reveal-up" style="transition-delay: 120ms;">
            <div class="service-icon">02</div>
            <h3>Momentum over random tactics</h3>
            <p>Each move is designed to stack on top of the last instead of chasing novelty.</p>
          </article>
          <article class="service-card reveal-up" style="transition-delay: 240ms;">
            <div class="service-icon">03</div>
            <h3>Design with purpose</h3>
            <p>We use visual direction to strengthen trust, recall, and conversion.</p>
          </article>
        </div>
      </section>

      <section class="timeline-section section">
        <div class="section-heading reveal-up">
          <span class="eyebrow">How we work</span>
          <h2>A process that keeps research, creativity, and execution connected.</h2>
        </div>
        <div class="timeline">
          <article class="timeline-item reveal-up">
            <span>01</span>
            <h3>Discovery</h3>
            <p>Audience research, competitor review, and visibility mapping.</p>
          </article>
          <article class="timeline-item reveal-up" style="transition-delay: 100ms;">
            <span>02</span>
            <h3>Positioning</h3>
            <p>Offer framing, messaging structure, and page hierarchy decisions.</p>
          </article>
          <article class="timeline-item reveal-up" style="transition-delay: 200ms;">
            <span>03</span>
            <h3>Activation</h3>
            <p>Campaign buildout, SEO implementation, and content rollout.</p>
          </article>
          <article class="timeline-item reveal-up" style="transition-delay: 300ms;">
            <span>04</span>
            <h3>Optimization</h3>
            <p>Iterative testing based on rankings, lead quality, and conversion patterns.</p>
          </article>
        </div>
      </section>
    `,
    services: `
      <section class="page-banner section reveal-up">
        <span class="eyebrow">Services</span>
        <h1>Explore the services behind our creative growth work.</h1>
        <p>
          Pick the area you want help with and jump into a dedicated page built around that service, its outcomes, and how Growth Revibe approaches the work.
        </p>
      </section>

      <section class="service-accordion-section section reveal-up">
        <div class="service-accordion-header">
          <span class="eyebrow">What we offer</span>
          <h2>Every service is designed to create a clearer path from attention to revenue.</h2>
        </div>
        <div class="service-accordion-list" data-service-accordion>
          ${serviceCatalog.map((service, index) => `
            <div class="service-accordion-item reveal-up" style="transition-delay: ${index * 60}ms;" data-accordion-item>
              <button class="service-accordion-trigger" type="button" data-accordion-trigger aria-expanded="false">
                <span class="service-accordion-icon-wrap" aria-hidden="true">${serviceIcons[service.key] || ''}</span>
                <span class="service-accordion-title-group">
                  <strong>${escapeHtml(service.title)}</strong>
                  <span class="service-accordion-subtitle">${escapeHtml(service.description)}</span>
                </span>
                <span class="service-accordion-caret" aria-hidden="true"></span>
              </button>
              <div class="service-accordion-body" data-accordion-body hidden>
                <p>${escapeHtml(service.intro)}</p>
                <div class="service-accordion-outcomes">
                  ${service.outcomes.map(o => `<span>${escapeHtml(o)}</span>`).join('')}
                </div>
                <a href="${service.href}" class="service-accordion-cta">Learn more &rarr;</a>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <section class="pricing-showcase section">
        <div class="section-heading reveal-up">
          <span class="eyebrow">How we engage</span>
          <h2>Choose one service or combine multiple areas into a single growth system.</h2>
        </div>
        <div class="package-grid">
          <article class="package-card reveal-up">
            <h3>Single-service focus</h3>
            <p>Best when you know exactly which growth function needs attention first.</p>
          </article>
          <article class="package-card reveal-up" style="transition-delay: 140ms;">
            <h3>Integrated growth program</h3>
            <p>Combine SEO, content, automation, and paid support into one connected roadmap.</p>
          </article>
          <article class="package-card reveal-up" style="transition-delay: 280ms;">
            <h3>Ongoing partner model</h3>
            <p>For teams that want a strategic operator refining growth channels month after month.</p>
          </article>
        </div>
      </section>
    `,
    'case-studies': `
      <section class="page-banner section reveal-up case-banner">
        <span class="eyebrow">Case studies</span>
        <h1>Case studies presented with stronger visual hooks and clear performance wins.</h1>
        <p>
          Each card is designed like a thumbnail preview so visitors can scan the category, big promise, and proof points at a glance.
        </p>
      </section>

      <section class="case-thumbnail-grid section">
        ${caseStudyCardsMarkup(siteData.caseStudies)}
      </section>
    `,
    contact: `
      <section class="page-banner section reveal-up">
        <span class="eyebrow">Contact us</span>
        <h1>Let's build a digital presence that feels stronger and performs better.</h1>
        <p>
          Reach out if you want help with SEO, campaigns, content, or a cleaner growth story across your website.
        </p>
      </section>

      <section class="contact-layout section">
        <div class="contact-panel reveal-up">
          <div class="form-intro">
            <span class="eyebrow">Project form</span>
            <h2>Send your project details directly to our team.</h2>
            <p>Use this form to share your goals, timeline, and the kind of marketing support you are looking for.</p>
            <p>Reach us directly at <a href="mailto:${escapeHtml(siteData.contact.email)}">${escapeHtml(siteData.contact.email)}</a>, <a href="mailto:${escapeHtml(siteData.contact.secondaryEmail)}">${escapeHtml(siteData.contact.secondaryEmail)}</a>, or <a href="tel:${escapeHtml(siteData.contact.phone.replaceAll(' ', ''))}">${escapeHtml(siteData.contact.phone)}</a>.</p>
          </div>

          <form class="lead-form contact-form" data-contact-form data-form-type="contact-inquiry">
            <label>
              <span>Name</span>
              <input type="text" name="name" placeholder="Your full name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="you@example.com" required />
            </label>
            <label>
              <span>Phone</span>
              <input type="tel" name="phone" placeholder="+91 98765 43210" />
            </label>
            <label>
              <span>Business name</span>
              <input type="text" name="business" placeholder="Your business name" />
            </label>
            <label class="select-field">
              <span>Primary service</span>
              <span class="select-glow" aria-hidden="true"></span>
              <select name="service">
                ${serviceSelectOptionsMarkup()}
              </select>
            </label>
            <label class="select-field">
              <span>Budget range</span>
              <span class="select-glow" aria-hidden="true"></span>
              <select name="budget">
                <option value="Under 25k">Under 25k</option>
                <option value="25k to 50k">25k to 50k</option>
                <option value="50k to 100k">50k to 100k</option>
                <option value="100k+">100k+</option>
              </select>
            </label>
            <label class="field-wide">
              <span>Project details</span>
              <textarea name="message" rows="5" placeholder="What are you trying to grow, and what would success look like for your business?"></textarea>
            </label>
            <button class="button button-primary field-wide" type="submit">Submit project inquiry</button>
            <p class="form-status field-wide" data-form-status aria-live="polite"></p>
          </form>
        </div>

        <div class="appointment-panel reveal-up" style="transition-delay: 140ms;" data-appointment-panel>
          <div class="appointment-intro">
            <span class="eyebrow">Meeting request</span>
            <h2>Add a meeting preference to your inquiry.</h2>
            <p>Pick your timezone, choose a date, and send a polished meeting request from this card. It keeps the right side useful without making the whole page feel crowded.</p>
          </div>

          <div class="appointment-topbar">
            <div class="appointment-timezone-field">
              <span class="appointment-mini-label">Time zone</span>
              <div class="appointment-timezone-list" data-timezone-list>
                ${timezoneOptionsMarkup()}
              </div>
            </div>

            <div class="appointment-clock" aria-live="polite">
              <span class="appointment-clock-label">Current time</span>
              <strong data-clock-time>--:--</strong>
              <small data-clock-zone>Asia/Kolkata</small>
            </div>
          </div>

          <div class="appointment-calendar-card">
            <div class="appointment-calendar-header">
              <button class="appointment-nav" type="button" data-calendar-nav="prev" aria-label="Previous month">‹</button>
              <strong data-calendar-title>Month</strong>
              <button class="appointment-nav" type="button" data-calendar-nav="next" aria-label="Next month">›</button>
            </div>
            <div class="appointment-weekdays">
              <span>Sun</span>
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
            </div>
            <div class="appointment-calendar-grid" data-calendar-grid></div>
          </div>

          <div class="appointment-slot-card">
            <div class="appointment-slot-head">
              <div>
                <span class="appointment-mini-label">Selected date</span>
                <strong data-selected-date>Choose a date</strong>
              </div>
              <div>
                <span class="appointment-mini-label">Selected time</span>
                <strong data-selected-time>No time selected</strong>
              </div>
            </div>

            <div class="appointment-slot-grid" data-slot-grid>
              <button type="button" data-slot-time="09:00">09:00</button>
              <button type="button" data-slot-time="10:30">10:30</button>
              <button type="button" data-slot-time="12:00">12:00</button>
              <button type="button" data-slot-time="14:00">14:00</button>
              <button type="button" data-slot-time="15:30">15:30</button>
              <button type="button" data-slot-time="17:00">17:00</button>
            </div>

            <p class="appointment-status" data-availability-status>Select a date and time if you want to include a meeting request with your main inquiry.</p>
          </div>

          <div class="appointment-request-card">
            <div class="appointment-request-intro">
              <span class="eyebrow">Your details</span>
              <h2>Add your contact details and send.</h2>
              <p>Share your name and email here so our team can review the selected slot and follow up quickly.</p>
            </div>

            <form class="lead-form availability-form appointment-form" data-contact-form data-form-type="availability-request">
              <input type="hidden" name="appointment_date" data-availability-date-input />
              <input type="hidden" name="appointment_time" data-availability-time-input />
              <input type="hidden" name="appointment_timezone" data-availability-timezone-input />
              <input type="hidden" name="selected_date_label" data-availability-date-label-input />
              <input type="hidden" name="selected_time_label" data-availability-time-label-input />
              <input type="hidden" name="selected_timezone_label" data-availability-timezone-label-input />
              <div class="panel-form-grid">
              <label>
                <span>Name</span>
                <input type="text" name="name" placeholder="Your full name" required />
              </label>
              <label>
                <span>Email</span>
                <input type="email" name="email" placeholder="you@example.com" required />
              </label>
              <label>
                <span>Phone</span>
                <input type="tel" name="phone" placeholder="+91 98765 43210" />
              </label>
              <label>
                <span>Business name</span>
                <input type="text" name="business" placeholder="Your business name" />
              </label>
              <button class="button button-primary field-wide" type="submit">Submit meeting request</button>
              <p class="form-status field-wide" data-form-status aria-live="polite"></p>
              </div>
            </form>
          </div>

          <div class="faq-panel appointment-faq">
            <h2>What usually happens next?</h2>
            <div class="faq-item">
              <h3>1. Discovery conversation</h3>
              <p>We understand your business, goals, audience, and what already exists.</p>
            </div>
            <div class="faq-item">
              <h3>2. Opportunity mapping</h3>
              <p>We identify where positioning, SEO, content, or paid performance can create the biggest lift.</p>
            </div>
            <div class="faq-item">
              <h3>3. Focused proposal</h3>
              <p>You get a clear direction for the work, not a generic menu of disconnected tasks.</p>
            </div>
          </div>
        </div>
      </section>
    `,
    ...serviceDetailPages,
  }
}

function appMarkup(siteData) {
  const pages = sitePages(siteData)

  return `
    <div class="site-shell">
      ${planeIntroMarkup()}
      <div class="ambient ambient-one"></div>
      <div class="ambient ambient-two"></div>
      <div class="ambient ambient-three"></div>
      <div class="ambient ambient-four"></div>
      <div class="site-visuals" aria-hidden="true">
        <div class="site-visual-grid"></div>
        <div class="site-ring site-ring-one"></div>
        <div class="site-ring site-ring-two"></div>
        <div class="site-ring site-ring-three"></div>
        <div class="site-light site-light-one"></div>
        <div class="site-light site-light-two"></div>
        <div class="site-light site-light-three"></div>
        <div class="site-streak site-streak-one"></div>
        <div class="site-streak site-streak-two"></div>
        <div class="site-particle site-particle-one"></div>
        <div class="site-particle site-particle-two"></div>
        <div class="site-particle site-particle-three"></div>
        <div class="site-particle site-particle-four"></div>
      </div>
      <div class="brand-atmosphere" aria-hidden="true">
        <div class="brand-orbit brand-orbit-one"></div>
        <div class="brand-orbit brand-orbit-two"></div>
        <div class="brand-orbit brand-orbit-three"></div>
        <div class="brand-wave brand-wave-one"></div>
        <div class="brand-wave brand-wave-two"></div>
        <div class="brand-sigil brand-sigil-one">GR</div>
        <div class="brand-sigil brand-sigil-two">Growth Revibe</div>
      </div>
      <header class="top-ribbon">
        <a class="brand" href="./index.html" aria-label="Growth Revibe home">
          <span class="brand-mark">
            <img src="${brandLogo}" alt="Growth Revibe logo" />
          </span>
          <span class="brand-text">
            <strong>Growth Revibe</strong>
            <small>Creative-first performance marketing</small>
          </span>
        </a>

        <nav class="ribbon-nav" aria-label="Primary">
          ${navMarkup()}
        </nav>
      </header>

      <main>
        ${pages[page] ?? pages.home}

        <section class="cta-banner section reveal-up">
          <div class="cta-copy">
            <span class="eyebrow">Ready to launch</span>
            <h2>${escapeHtml(siteData.home.ctaTitle)}</h2>
          </div>
          <a class="button button-primary" href="./contact.html">Get Creatives That Convert</a>
        </section>
      </main>

      <footer class="site-footer">
        <div class="footer-brand">
          <span class="footer-logo">
            <img src="${brandLogo}" alt="Growth Revibe logo" />
          </span>
          <strong>Growth Revibe</strong>
          <p>Growth Revibe is a creative marketing studio focused on ad creatives, performance campaigns, marketplace assets, and conversion-led brand growth.</p>
        </div>
        <div class="footer-details">
          <div>
            <span>Focus</span>
            <p>UGC ads, Meta and Google creatives, marketplace design systems, product shoots, and quick commerce formats.</p>
          </div>
          <div>
            <span>Contact</span>
            <p><a href="mailto:${escapeHtml(siteData.contact.email)}">${escapeHtml(siteData.contact.email)}</a><br /><a href="mailto:${escapeHtml(siteData.contact.secondaryEmail)}">${escapeHtml(siteData.contact.secondaryEmail)}</a><br /><a href="tel:${escapeHtml(siteData.contact.phone.replaceAll(' ', ''))}">${escapeHtml(siteData.contact.phone)}</a></p>
          </div>
          <div>
            <span>What clients get</span>
            <p>Stronger hooks, better-performing creatives, cleaner testing systems, and ad formats designed to scale.</p>
          </div>
        </div>
        <p class="footer-note">${escapeHtml(siteData.footer.note)}</p>
      </footer>
    </div>
  `
}

function initServiceAccordion() {
  const list = document.querySelector('[data-service-accordion]')
  if (!list) return

  list.querySelectorAll('[data-accordion-item]').forEach((item) => {
    const trigger = item.querySelector('[data-accordion-trigger]')
    const body = item.querySelector('[data-accordion-body]')
    if (!trigger || !body) return

    trigger.addEventListener('click', () => {
      const isOpen = !body.hidden

      // Close all others
      list.querySelectorAll('[data-accordion-item]').forEach((otherItem) => {
        const otherBody = otherItem.querySelector('[data-accordion-body]')
        const otherTrigger = otherItem.querySelector('[data-accordion-trigger]')
        if (otherBody && otherTrigger) {
          otherBody.hidden = true
          otherTrigger.setAttribute('aria-expanded', 'false')
          otherItem.classList.remove('is-open')
        }
      })

      if (!isOpen) {
        body.hidden = false
        trigger.setAttribute('aria-expanded', 'true')
        item.classList.add('is-open')
      }
    })
  })
}

function renderApp() {
  const siteData = getSiteData()
  document.querySelector('#app').innerHTML = appMarkup(siteData)
  initPlaneIntro()
  initRevealObserver()
  initNavDropdown()
  initPortfolioBook()
  initContactScheduler()
  initContactForms()
  initServiceAccordion()
}

function initPlaneIntro() {
  const intro = document.querySelector('[data-plane-intro]')

  if (!intro) {
    return
  }

  if (sessionStorage.getItem(PLANE_INTRO_SEEN_KEY) === 'true') {
    intro.remove()
    return
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const INTRO_DURATION = prefersReducedMotion ? 700 : 3600
  sessionStorage.setItem(PLANE_INTRO_SEEN_KEY, 'true')

  window.setTimeout(() => {
    intro.classList.add('is-complete')
  }, INTRO_DURATION)

  window.setTimeout(() => {
    intro.remove()
  }, INTRO_DURATION + 900)
}

function initPortfolioBook() {
  const book = document.querySelector('[data-portfolio-book]')

  if (!book) {
    return
  }

  const badge = book.querySelector('[data-portfolio-badge]')
  const title = book.querySelector('[data-portfolio-title]')
  const pageHeading = book.querySelector('[data-portfolio-page-heading]')
  const detail = book.querySelector('[data-portfolio-detail]')
  const description = book.querySelector('[data-portfolio-description]')
  const counter = book.querySelector('[data-portfolio-counter]')
  const cover = book.querySelector('[data-portfolio-cover]')
  const status = book.querySelector('[data-portfolio-book-status]')
  const buttons = [...book.querySelectorAll('[data-portfolio-book-nav]')]
  const savedState = (() => {
    try {
      return JSON.parse(localStorage.getItem(PORTFOLIO_BOOK_STATE_KEY) || '{}')
    } catch {
      return {}
    }
  })()
  let currentIndex = Number.isInteger(savedState.pageIndex)
    ? savedState.pageIndex % homePortfolioEntries.length
    : Number(book.getAttribute('data-page-index') || 0)
  let isOpen = savedState.isOpen === true
  let isFlipping = false
  const FLIP_DURATION = 2600
  const FLIP_MIDPOINT = 1320

  const persistState = () => {
    localStorage.setItem(
      PORTFOLIO_BOOK_STATE_KEY,
      JSON.stringify({
        pageIndex: currentIndex,
        isOpen,
      }),
    )
  }

  const setControlsDisabled = (disabled) => {
    buttons.forEach((button) => {
      button.disabled = disabled
      button.setAttribute('aria-disabled', String(disabled))
    })

    if (cover) {
      cover.setAttribute('aria-disabled', String(disabled))
      cover.tabIndex = disabled ? -1 : 0
    }
  }

  const syncBookState = () => {
    book.classList.toggle('is-open', isOpen)
    book.classList.toggle('is-closed', !isOpen)
  }

  const renderEntry = (index) => {
    const entry = homePortfolioEntries[index]
    badge.textContent = entry.badge
    title.textContent = entry.title
    if (pageHeading) {
      pageHeading.textContent = entry.badge
    }
    detail.textContent = entry.detail
    description.textContent = entry.description
    counter.textContent = `Page ${index + 1} / ${homePortfolioEntries.length}`
    cover?.setAttribute('aria-label', `Open the next portfolio page. Currently showing ${entry.badge}, page ${index + 1} of ${homePortfolioEntries.length}.`)
    if (status) {
      status.textContent = `Page ${index + 1} of ${homePortfolioEntries.length}. ${entry.badge}. ${entry.description}`
    }
    book.setAttribute('data-page-index', String(index))
    persistState()
  }

  const flipTo = (direction) => {
    if (isFlipping) {
      return
    }

    if (direction === 'close') {
      isOpen = false
      syncBookState()
      if (status) {
        status.textContent = `Book closed on page ${currentIndex + 1} of ${homePortfolioEntries.length}. Click the cover or Flip page to open it again.`
      }
      persistState()
      return
    }

    isFlipping = true
    isOpen = true
    syncBookState()
    setControlsDisabled(true)
    book.setAttribute('aria-busy', 'true')
    book.classList.remove('is-forward', 'is-reverse', 'is-resting')
    book.classList.add('is-flipping', direction === 'prev' ? 'is-reverse' : 'is-forward')

    const nextIndex =
      direction === 'next'
        ? (currentIndex + 1) % homePortfolioEntries.length
        : (currentIndex - 1 + homePortfolioEntries.length) % homePortfolioEntries.length

    window.setTimeout(() => {
      currentIndex = nextIndex
      renderEntry(currentIndex)
      book.classList.add('is-resting')
    }, FLIP_MIDPOINT)

    window.setTimeout(() => {
      book.classList.remove('is-flipping', 'is-forward', 'is-reverse', 'is-resting')
      book.removeAttribute('aria-busy')
      setControlsDisabled(false)
      isFlipping = false
      syncBookState()
    }, FLIP_DURATION)
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const navValue = button.getAttribute('data-portfolio-book-nav')
      const direction = navValue === 'prev' ? 'prev' : navValue === 'close' ? 'close' : 'next'
      flipTo(direction)
    })
  })

  cover?.addEventListener('click', () => {
    flipTo('next')
  })

  let touchStartX = 0
  let touchEndX = 0

  cover?.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0]?.clientX || 0
  }, { passive: true })

  cover?.addEventListener('touchend', (event) => {
    touchEndX = event.changedTouches[0]?.clientX || 0
    const deltaX = touchEndX - touchStartX

    if (Math.abs(deltaX) < 40) {
      return
    }

    flipTo(deltaX < 0 ? 'next' : 'prev')
  }, { passive: true })

  cover?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      flipTo('next')
      return
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault()
      flipTo('next')
      return
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      flipTo('prev')
    }
  })

  renderEntry(currentIndex)
  syncBookState()
}

function initRevealObserver() {
  const revealElements = document.querySelectorAll('.reveal-up')

  if (!revealElements.length) {
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    },
    { threshold: 0.18 },
  )

  revealElements.forEach((element) => observer.observe(element))
}

function initNavDropdown() {
  navDropdownController?.abort()
  const dropdown = document.querySelector('[data-nav-dropdown]')
  const trigger = document.querySelector('[data-nav-dropdown-trigger]')
  const menu = document.querySelector('#services-menu')

  if (!dropdown || !trigger || !menu) {
    return
  }

  navDropdownController = new AbortController()
  const { signal } = navDropdownController

  const closeMenu = () => {
    dropdown.classList.remove('is-open')
    trigger.setAttribute('aria-expanded', 'false')
    menu.hidden = true
  }

  const openMenu = () => {
    dropdown.classList.add('is-open')
    trigger.setAttribute('aria-expanded', 'true')
    menu.hidden = false
  }

  trigger.addEventListener('click', () => {
    if (dropdown.classList.contains('is-open')) {
      closeMenu()
    } else {
      openMenu()
    }
  }, { signal })

  document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target)) {
      closeMenu()
    }
  }, { signal })

  dropdown.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu()
      trigger.focus()
    }
  }, { signal })
}

function initContactScheduler() {
  const panel = document.querySelector('[data-appointment-panel]')

  if (!panel) {
    return
  }

  const timezoneButtons = [...panel.querySelectorAll('[data-timezone-option]')]
  const clockTime = panel.querySelector('[data-clock-time]')
  const clockZone = panel.querySelector('[data-clock-zone]')
  const calendarTitle = panel.querySelector('[data-calendar-title]')
  const calendarGrid = panel.querySelector('[data-calendar-grid]')
  const selectedDateLabel = panel.querySelector('[data-selected-date]')
  const selectedTimeLabel = panel.querySelector('[data-selected-time]')
  const availabilityStatus = panel.querySelector('[data-availability-status]')
  const availabilityDateInput = panel.querySelector('[data-availability-date-input]')
  const availabilityTimeInput = panel.querySelector('[data-availability-time-input]')
  const availabilityTimezoneInput = panel.querySelector('[data-availability-timezone-input]')
  const availabilityDateLabelInput = panel.querySelector('[data-availability-date-label-input]')
  const availabilityTimeLabelInput = panel.querySelector('[data-availability-time-label-input]')
  const availabilityTimezoneLabelInput = panel.querySelector('[data-availability-timezone-label-input]')

  let currentMonth = new Date()
  currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1)
  let selectedDate = null
  let selectedTime = ''
  let selectedTimezone =
    timezoneButtons.find((button) => button.classList.contains('is-selected'))?.getAttribute('data-timezone-option') ||
    'Asia/Kolkata'

  const monthFormatter = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  })

  const dateFormatter = (timezone) =>
    new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })

  const timeFormatter = (timezone) =>
    new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    })

  const updateClock = () => {
    const timezone = selectedTimezone
    const now = new Date()
    clockTime.textContent = timeFormatter(timezone).format(now)
    clockZone.textContent = timezone
    if (availabilityTimezoneInput) availabilityTimezoneInput.value = timezone
    if (availabilityTimezoneLabelInput) availabilityTimezoneLabelInput.value = timezone
  }

  const updateSelectionLabels = () => {
    const timezone = selectedTimezone
    const formattedDate = selectedDate ? dateFormatter(timezone).format(selectedDate) : ''
    selectedDateLabel.textContent = selectedDate ? dateFormatter(timezone).format(selectedDate) : 'Choose a date'
    selectedTimeLabel.textContent = selectedTime || 'No time selected'
    if (availabilityDateInput) availabilityDateInput.value = selectedDate ? selectedDate.toISOString().slice(0, 10) : ''
    if (availabilityTimeInput) availabilityTimeInput.value = selectedTime
    if (availabilityDateLabelInput) availabilityDateLabelInput.value = formattedDate
    if (availabilityTimeLabelInput) availabilityTimeLabelInput.value = selectedTime
    if (availabilityStatus) {
      availabilityStatus.textContent =
        selectedDate && selectedTime
          ? `Meeting request ready for ${formattedDate} at ${selectedTime} (${timezone}). Send the request below and our team will review it.`
          : 'Select a date and time, then send your meeting request below.'
    }
  }

  const renderCalendar = () => {
    const today = new Date()
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const startOffset = firstDay.getDay()

    calendarTitle.textContent = monthFormatter.format(firstDay)
    calendarGrid.innerHTML = ''

    for (let index = 0; index < startOffset; index += 1) {
      const filler = document.createElement('span')
      filler.className = 'calendar-filler'
      calendarGrid.append(filler)
    }

    for (let day = 1; day <= lastDay.getDate(); day += 1) {
      const date = new Date(year, month, day)
      const button = document.createElement('button')
      button.type = 'button'
      button.className = 'calendar-day'
      button.textContent = String(day)

      const isPast =
        date.getFullYear() < today.getFullYear() ||
        (date.getFullYear() === today.getFullYear() &&
          (date.getMonth() < today.getMonth() ||
            (date.getMonth() === today.getMonth() && date.getDate() < today.getDate())))

      if (isPast) {
        button.disabled = true
      } else {
        button.addEventListener('click', () => {
          selectedDate = date
          renderCalendar()
          updateSelectionLabels()
        })
      }

      if (
        selectedDate &&
        date.getFullYear() === selectedDate.getFullYear() &&
        date.getMonth() === selectedDate.getMonth() &&
        date.getDate() === selectedDate.getDate()
      ) {
        button.classList.add('is-selected')
      }

      calendarGrid.append(button)
    }
  }

  panel.querySelectorAll('[data-slot-time]').forEach((button) => {
    button.addEventListener('click', () => {
      selectedTime = button.getAttribute('data-slot-time') || ''
      panel.querySelectorAll('[data-slot-time]').forEach((slotButton) => {
        slotButton.classList.toggle('is-selected', slotButton === button)
      })
      updateSelectionLabels()
    })
  })

  panel.querySelectorAll('[data-calendar-nav]').forEach((button) => {
    button.addEventListener('click', () => {
      const direction = button.getAttribute('data-calendar-nav')
      currentMonth = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + (direction === 'next' ? 1 : -1),
        1,
      )
      renderCalendar()
    })
  })

  timezoneButtons.forEach((button) => {
    button.addEventListener('click', () => {
      selectedTimezone = button.getAttribute('data-timezone-option') || 'Asia/Kolkata'
      timezoneButtons.forEach((item) => {
        item.classList.toggle('is-selected', item === button)
      })
      updateClock()
      updateSelectionLabels()
    })
  })

  document.addEventListener('contact-scheduler:reset', () => {
    selectedDate = null
    selectedTime = ''
    panel.querySelectorAll('[data-slot-time]').forEach((button) => {
      button.classList.remove('is-selected')
    })
    renderCalendar()
    updateSelectionLabels()
  })

  updateClock()
  updateSelectionLabels()
  renderCalendar()
  window.setInterval(updateClock, 1000)
}

function initContactForms() {
  const forms = [...document.querySelectorAll('[data-contact-form]')]

  forms.forEach((form) => {
    const status = form.querySelector('[data-form-status]')

    form.addEventListener('submit', async (event) => {
      event.preventDefault()

      const submitButton = form.querySelector('button[type="submit"]')
      const formData = new FormData(form)
      formData.set('submission_type', form.getAttribute('data-form-type') || 'general-inquiry')

      if (form.getAttribute('data-form-type') === 'availability-request') {
        const appointmentDate = String(formData.get('appointment_date') || '').trim()
        const appointmentTime = String(formData.get('appointment_time') || '').trim()

        if (!appointmentDate || !appointmentTime) {
          if (status) {
            status.textContent = 'Please choose a date and time first, then send the meeting request.'
          }
          return
        }
      }

      if (status) {
        status.textContent = 'Sending your inquiry to the team...'
      }

      if (submitButton instanceof HTMLButtonElement) {
        submitButton.disabled = true
      }

      try {
        const response = await fetch(CONTACT_ENDPOINT, {
          method: 'POST',
          body: formData,
        })

        const result = await response.json()

        if (!response.ok || !result.ok) {
          throw new Error(result.message || 'Unable to send your inquiry right now.')
        }

        form.reset()
        document.dispatchEvent(new CustomEvent('contact-scheduler:reset'))

        if (status) {
          status.textContent = 'Your inquiry has been sent successfully. Our team will get back to you soon.'
        }
      } catch (error) {
        if (status) {
          status.textContent = error instanceof Error ? error.message : 'Unable to send your inquiry right now.'
        }
      } finally {
        if (submitButton instanceof HTMLButtonElement) {
          submitButton.disabled = false
        }
      }
    })
  })
}

renderApp()
