import './style.css'
import brandLogo from './assets/logo/gr png logo.png'
import sampleMarketplaceAd from './assets/homepage/images/sample-marketplace-ad.svg'
import sampleUgcAd from './assets/homepage/images/sample-ugc-ad.svg'
import sampleQuickCommerceAd from './assets/homepage/images/sample-quick-commerce-ad.svg'

const page = document.body.dataset.page || 'home'
const STORAGE_KEY = 'growth-vibe-site-data'
const ADMIN_SESSION_KEY = 'growth-vibe-admin-auth'
const ADMIN_PASSWORD = 'growthvibeadmin'
let navDropdownController

const sampleVideoReel = [
  {
    tag: 'Meta UGC',
    title: 'Hook-first product storytelling',
    caption: 'Sample motion reel for short-form ad concepts and creator-led edits.',
    image: sampleUgcAd,
  },
  {
    tag: 'Marketplace',
    title: 'Product benefits in fast cuts',
    caption: 'Sample showcase card for catalog creatives, before-after frames, and CTA sequences.',
    image: sampleMarketplaceAd,
  },
  {
    tag: 'Quick Commerce',
    title: 'Speed, offer, urgency, repeat',
    caption: 'Sample looping visual for quick commerce promos and conversion-led launch edits.',
    image: sampleQuickCommerceAd,
  },
]

const navItems = [
  { key: 'home', label: 'Home', href: './index.html' },
  { key: 'about', label: 'About Us', href: './about.html' },
  { key: 'services', label: 'Services', href: './services.html' },
  { key: 'case-studies', label: 'Case Studies', href: './case-studies.html' },
  { key: 'contact', label: 'Contact Us', href: './contact.html' },
]

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
    title: "We create ads people don't skip.",
    text: 'Amazon. Meta. Quick Commerce. We design creatives that convert, not just look good.',
    ctaTitle: 'Bring creative production, performance thinking, and conversion-focused execution into one team.',
  },
  contact: {
    email: 'hello@grothervibe.com',
    phone: '+91 00000 00000',
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
        'Growth Vibe reworked the homepage story, clarified service language, and aligned content with high-intent search demand.',
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

function mergeSiteData(storedData = {}) {
  return {
    home: {
      ...defaultSiteData.home,
      ...(storedData.home || {}),
    },
    contact: {
      ...defaultSiteData.contact,
      ...(storedData.contact || {}),
    },
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
          <a class="button button-primary" href="./contact.html">Talk to Growth Vibe</a>
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
        <p>Growth Vibe combines strategy, messaging, and execution so this service strengthens both visibility and conversion instead of optimizing one at the expense of the other.</p>
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
                  <span class="service-mega-kicker">Service menu</span>
                  <strong>Choose a service page</strong>
                </div>
                <a href="${item.href}" class="service-mega-link">All services</a>
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
                        <strong>${escapeHtml(service.title)}</strong>
                      </a>
                    `,
                  )
                  .join('')}
              </div>
            </div>
          </div>
        `
      }

      return `<a href="${item.href}" class="${item.key === page ? 'is-active' : ''}">${item.label}</a>`
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
            <div class="case-thumb-sigil" aria-hidden="true">GV</div>
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
              <img src="${item.image}" alt="${escapeHtml(item.title)} sample creative frame" />
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

function sitePages(siteData) {
  const serviceDetailPages = Object.fromEntries(
    serviceCatalog.map((service, index) => [service.key, servicePageMarkup(service, index)]),
  )

  return {
    home: `
      <section class="hero-section section page-hero page-hero-home">
        <div class="hero-copy reveal-up">
          <span class="eyebrow">${escapeHtml(siteData.home.eyebrow)}</span>
          <h1>${escapeHtml(siteData.home.title)}</h1>
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
          <div class="creative-stage">
            <div class="creative-grid-plane"></div>
            <div class="creative-beam creative-beam-one"></div>
            <div class="creative-beam creative-beam-two"></div>
            <div class="creative-float creative-float-main">
              <span>Creative stack</span>
              <strong>Hook. Product. Motion.</strong>
            </div>
            <div class="creative-float creative-float-side">
              <span>Testing loop</span>
              <strong>Angles that keep evolving</strong>
            </div>
            <div class="creative-orb creative-orb-one"></div>
            <div class="creative-orb creative-orb-two"></div>
          </div>
          <div class="hero-preview-wall">
            <article class="preview-card preview-card-video">
              <img class="preview-art" src="${sampleUgcAd}" alt="Sample UGC ad concept artwork" />
              <span>Looping ad videos</span>
              <strong>Fast hooks and hard stops</strong>
              <p>Using a self-made sample ad visual here until you add real videos in <code>src/assets/homepage/videos</code></p>
            </article>
            <article class="preview-card preview-card-static">
              <img class="preview-art" src="${sampleMarketplaceAd}" alt="Sample marketplace ad concept artwork" />
              <span>Static creatives</span>
              <strong>Product-led frames built for CTR</strong>
              <p>Sample image from <code>src/assets/homepage/images</code></p>
            </article>
            <article class="preview-card preview-card-motion">
              <img class="preview-art" src="${sampleQuickCommerceAd}" alt="Sample quick commerce ad concept artwork" />
              <span>Animations</span>
              <strong>Fast cuts, urgency, and motion</strong>
              <p>Sample visual placeholder for future motion concepts</p>
            </article>
            <article class="preview-card preview-card-growth">
              <img class="preview-art" src="${sampleMarketplaceAd}" alt="Sample performance creative storyboard artwork" />
              <span>Campaign systems</span>
              <strong>Testing-ready variations for scale</strong>
              <p>Sample storyboard card for adding one more real work preview on the homepage.</p>
            </article>
          </div>
          <div class="hero-proof-badges">
            <span>Hooks</span>
            <span>UGC</span>
            <span>Product shots</span>
            <span>Performance edits</span>
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
        <div class="portfolio-grid">
          <article class="portfolio-card reveal-up">
            <div class="portfolio-media portfolio-marketplace">
              <div class="portfolio-glow" aria-hidden="true"></div>
              <div class="portfolio-orbit portfolio-orbit-one" aria-hidden="true"></div>
              <div class="portfolio-orbit portfolio-orbit-two" aria-hidden="true"></div>
              <div class="portfolio-scanline" aria-hidden="true">
                <span>Growth</span>
                <span>Vibe</span>
              </div>
              <span class="portfolio-badge">Marketplace Ads</span>
              <strong>Before / after creatives, A+ content, and product frames built for shelf clicks.</strong>
            </div>
            <p>Scroll-stopping creatives designed for high CTR on marketplaces.</p>
          </article>
          <article class="portfolio-card reveal-up" style="transition-delay: 90ms;">
            <div class="portfolio-media portfolio-performance">
              <div class="portfolio-glow" aria-hidden="true"></div>
              <div class="portfolio-orbit portfolio-orbit-one" aria-hidden="true"></div>
              <div class="portfolio-orbit portfolio-orbit-two" aria-hidden="true"></div>
              <div class="portfolio-scanline" aria-hidden="true">
                <span>Growth</span>
                <span>Vibe</span>
              </div>
              <span class="portfolio-badge">Performance Ads</span>
              <strong>UGC ads, static variations, hooks, and testing-ready ad sets.</strong>
            </div>
            <p>Creative testing engine behind profitable scaling.</p>
          </article>
          <article class="portfolio-card reveal-up" style="transition-delay: 180ms;">
            <div class="portfolio-media portfolio-commerce">
              <div class="portfolio-glow" aria-hidden="true"></div>
              <div class="portfolio-orbit portfolio-orbit-one" aria-hidden="true"></div>
              <div class="portfolio-orbit portfolio-orbit-two" aria-hidden="true"></div>
              <div class="portfolio-scanline" aria-hidden="true">
                <span>Growth</span>
                <span>Vibe</span>
              </div>
              <span class="portfolio-badge">Quick Commerce Ads</span>
              <strong>Urgency-led motion, offer-first cuts, and fast conversion creatives.</strong>
            </div>
            <p>Built for instant clicks and impulse buys.</p>
          </article>
          <article class="portfolio-card reveal-up" style="transition-delay: 270ms;">
            <div class="portfolio-media portfolio-photo">
              <div class="portfolio-glow" aria-hidden="true"></div>
              <div class="portfolio-orbit portfolio-orbit-one" aria-hidden="true"></div>
              <div class="portfolio-orbit portfolio-orbit-two" aria-hidden="true"></div>
              <div class="portfolio-scanline" aria-hidden="true">
                <span>Growth</span>
                <span>Vibe</span>
              </div>
              <span class="portfolio-badge">Video + Photography</span>
              <strong>Studio shots, lifestyle frames, and product storytelling in one system.</strong>
            </div>
            <p>Product shoots with a studio + UGC mix.</p>
          </article>
          <article class="portfolio-card reveal-up" style="transition-delay: 360ms;">
            <div class="portfolio-media portfolio-ai">
              <div class="portfolio-glow" aria-hidden="true"></div>
              <div class="portfolio-orbit portfolio-orbit-one" aria-hidden="true"></div>
              <div class="portfolio-orbit portfolio-orbit-two" aria-hidden="true"></div>
              <div class="portfolio-scanline" aria-hidden="true">
                <span>Growth</span>
                <span>Vibe</span>
              </div>
              <span class="portfolio-badge">AI UGC Ads</span>
              <strong>AI avatars, voiceover creatives, and scalable ad iterations.</strong>
            </div>
            <p>Scale content without scaling production cost.</p>
          </article>
        </div>
      </section>

      <section class="video-rail-section section reveal-up" aria-label="Work video showcase">
        <div class="section-heading">
          <span class="eyebrow">Video Showcase</span>
          <h2>A moving wall for your work videos.</h2>
          <p>Right now this uses sample creative frames. Later we can replace each one with your real ad videos from <code>src/assets/homepage/videos</code>.</p>
        </div>
        <div class="video-rail-wrap">
          <div class="video-rail-track">
            ${homeVideoRailMarkup()}
          </div>
        </div>
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
          <form class="lead-form home-lead-form" action="mailto:${escapeHtml(siteData.contact.email)}" method="post" enctype="text/plain">
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
          </form>
        </div>
      </section>
    `,
    about: `
      <section class="page-banner section reveal-up">
        <span class="eyebrow">About us</span>
        <h1>Growth Vibe is a creative growth partner for brands that want better visibility and sharper presentation.</h1>
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
        <h1>Explore focused service pages for each growth offering.</h1>
        <p>
          Pick the area you want help with and jump into a dedicated page built around that service, its outcomes, and how Growth Vibe approaches the work.
        </p>
      </section>

      <section class="service-overview-grid section">
        ${serviceOverviewCardsMarkup()}
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
          </div>
          <form class="lead-form contact-form" action="mailto:${escapeHtml(siteData.contact.email)}" method="post" enctype="text/plain">
            <input type="hidden" name="appointment_date" data-appointment-date-input />
            <input type="hidden" name="appointment_time" data-appointment-time-input />
            <input type="hidden" name="appointment_timezone" data-appointment-timezone-input />
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
          </form>
        </div>

        <div class="appointment-panel reveal-up" style="transition-delay: 140ms;" data-appointment-panel>
          <div class="appointment-intro">
            <span class="eyebrow">Appointment</span>
            <h2>Book a meeting with a cleaner scheduling flow.</h2>
            <p>Choose your timezone, pick a date, select a time slot, and check mutual availability before you send the inquiry.</p>
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

            <button class="button button-primary appointment-availability-button" type="button" data-check-availability>
              Check mutual availability
            </button>
            <p class="appointment-status" data-availability-status>Select a date and time to see the meeting summary.</p>
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
    admin: `
      <section class="admin-shell">
        <section class="admin-auth-card" data-admin-auth-card>
          <span class="admin-kicker">Private admin</span>
          <h1>Admin controls for updating website content.</h1>
          <p>Enter the password to unlock content editing. This page stays off the public navigation and is only available at the admin URL.</p>
          <form class="admin-auth-form" data-admin-auth-form>
            <label>
              <span>Password</span>
              <input type="password" name="password" placeholder="Enter password" required />
            </label>
            <button class="admin-button admin-button-dark" type="submit">Unlock admin</button>
          </form>
          <p class="admin-message" data-admin-message></p>
        </section>

        <section class="admin-panel" data-admin-panel hidden>
          <div class="admin-topbar">
            <div>
              <span class="admin-kicker">Content manager</span>
              <h2>Update core website text and case studies.</h2>
            </div>
            <button class="admin-button" type="button" data-admin-logout>Log out</button>
          </div>

          <div class="admin-grid">
            <form class="admin-card admin-site-form" data-admin-site-form>
              <h3>Site information</h3>
              <label>
                <span>Home eyebrow</span>
                <input type="text" name="homeEyebrow" value="${escapeHtml(siteData.home.eyebrow)}" />
              </label>
              <label>
                <span>Home title</span>
                <textarea name="homeTitle" rows="3">${escapeHtml(siteData.home.title)}</textarea>
              </label>
              <label>
                <span>Home description</span>
                <textarea name="homeText" rows="4">${escapeHtml(siteData.home.text)}</textarea>
              </label>
              <label>
                <span>CTA heading</span>
                <textarea name="ctaTitle" rows="3">${escapeHtml(siteData.home.ctaTitle)}</textarea>
              </label>
              <label>
                <span>Contact email</span>
                <input type="email" name="contactEmail" value="${escapeHtml(siteData.contact.email)}" />
              </label>
              <label>
                <span>Contact phone</span>
                <input type="text" name="contactPhone" value="${escapeHtml(siteData.contact.phone)}" />
              </label>
              <label>
                <span>Footer note</span>
                <textarea name="footerNote" rows="3">${escapeHtml(siteData.footer.note)}</textarea>
              </label>
              <button class="admin-button admin-button-dark" type="submit">Save site info</button>
            </form>

            <div class="admin-card">
              <form class="admin-case-form" data-admin-case-form>
                <input type="hidden" name="caseId" value="" />
                <h3>Add or edit case study</h3>
                <label>
                  <span>Category</span>
                  <input type="text" name="category" placeholder="B2B SaaS" required />
                </label>
                <label>
                  <span>Small label</span>
                  <input type="text" name="label" placeholder="Search-led repositioning" required />
                </label>
                <label>
                  <span>Thumbnail headline</span>
                  <textarea name="title" rows="3" placeholder="Big headline shown on the case study card" required></textarea>
                </label>
                <label>
                  <span>Description</span>
                  <textarea name="description" rows="4" placeholder="Short summary below the thumbnail" required></textarea>
                </label>
                <label>
                  <span>Metric 1</span>
                  <input type="text" name="metricOne" placeholder="+184% organic impressions" />
                </label>
                <label>
                  <span>Metric 2</span>
                  <input type="text" name="metricTwo" placeholder="+71% demo requests" />
                </label>
                <label>
                  <span>Metric 3</span>
                  <input type="text" name="metricThree" placeholder="38% lower bounce" />
                </label>
                <div class="admin-actions">
                  <button class="admin-button admin-button-dark" type="submit">Save case study</button>
                  <button class="admin-button" type="button" data-admin-clear-form>Clear form</button>
                </div>
              </form>
            </div>
          </div>

          <section class="admin-card admin-case-list">
            <div class="admin-list-head">
              <h3>Current case studies</h3>
              <button class="admin-button" type="button" data-admin-reset>Reset to defaults</button>
            </div>
            <div class="admin-case-items" data-admin-case-items>
              ${siteData.caseStudies
                .map(
                  (study) => `
                    <article class="admin-case-item">
                      <div>
                        <span>${escapeHtml(study.category)}</span>
                        <h4>${escapeHtml(study.title)}</h4>
                        <p>${escapeHtml(study.description)}</p>
                      </div>
                      <div class="admin-actions">
                        <button class="admin-button" type="button" data-edit-case="${escapeHtml(study.id)}">Edit</button>
                        <button class="admin-button admin-button-danger" type="button" data-delete-case="${escapeHtml(study.id)}">Delete</button>
                      </div>
                    </article>
                  `,
                )
                .join('')}
            </div>
          </section>
        </section>
      </section>
    `,
    ...serviceDetailPages,
  }
}

function appMarkup(siteData) {
  const pages = sitePages(siteData)

  if (page === 'admin') {
    return `
      <div class="admin-site-shell">
        <main class="admin-main">
          ${pages.admin}
        </main>
      </div>
    `
  }

  return `
    <div class="site-shell">
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
        <div class="brand-sigil brand-sigil-one">GV</div>
        <div class="brand-sigil brand-sigil-two">Growth Vibe</div>
      </div>

      <header class="top-ribbon">
        <a class="brand" href="./index.html" aria-label="Growth Vibe home">
          <span class="brand-mark">
            <img src="${brandLogo}" alt="Growth Vibe logo" />
          </span>
          <span class="brand-text">
            <strong>Growth Vibe</strong>
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
            <img src="${brandLogo}" alt="Growth Vibe logo" />
          </span>
          <strong>Growth Vibe</strong>
          <p>Growth Vibe is a creative marketing studio focused on ad creatives, performance campaigns, marketplace assets, and conversion-led brand growth.</p>
        </div>
        <div class="footer-details">
          <div>
            <span>Focus</span>
            <p>UGC ads, Meta and Google creatives, marketplace design systems, product shoots, and quick commerce formats.</p>
          </div>
          <div>
            <span>Contact</span>
            <p><a href="mailto:${escapeHtml(siteData.contact.email)}">${escapeHtml(siteData.contact.email)}</a><br /><a href="tel:${escapeHtml(siteData.contact.phone.replaceAll(' ', ''))}">${escapeHtml(siteData.contact.phone)}</a></p>
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

function renderApp() {
  const siteData = getSiteData()
  document.querySelector('#app').innerHTML = appMarkup(siteData)
  initRevealObserver()
  initNavDropdown()
  initContactScheduler()

  if (page === 'admin') {
    initAdminPage()
  }
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
  const availabilityButton = panel.querySelector('[data-check-availability]')
  const dateInput = document.querySelector('[data-appointment-date-input]')
  const timeInput = document.querySelector('[data-appointment-time-input]')
  const timezoneInput = document.querySelector('[data-appointment-timezone-input]')

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
    timezoneInput.value = timezone
  }

  const updateSelectionLabels = () => {
    const timezone = selectedTimezone
    selectedDateLabel.textContent = selectedDate ? dateFormatter(timezone).format(selectedDate) : 'Choose a date'
    selectedTimeLabel.textContent = selectedTime || 'No time selected'
    dateInput.value = selectedDate ? selectedDate.toISOString().slice(0, 10) : ''
    timeInput.value = selectedTime
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

  availabilityButton.addEventListener('click', () => {
    if (!selectedDate || !selectedTime) {
      availabilityStatus.textContent = 'Choose a date and time first to check mutual availability.'
      return
    }

    availabilityStatus.textContent = `Mutual availability request ready for ${dateFormatter(selectedTimezone).format(selectedDate)} at ${selectedTime} (${selectedTimezone}).`
  })

  updateClock()
  updateSelectionLabels()
  renderCalendar()
  window.setInterval(updateClock, 1000)
}

function initAdminPage() {
  const authCard = document.querySelector('[data-admin-auth-card]')
  const authForm = document.querySelector('[data-admin-auth-form]')
  const adminPanel = document.querySelector('[data-admin-panel]')
  const message = document.querySelector('[data-admin-message]')
  const siteForm = document.querySelector('[data-admin-site-form]')
  const caseForm = document.querySelector('[data-admin-case-form]')
  const logoutButton = document.querySelector('[data-admin-logout]')
  const resetButton = document.querySelector('[data-admin-reset]')
  const clearFormButton = document.querySelector('[data-admin-clear-form]')

  const toggleAdminState = () => {
    const unlocked = sessionStorage.getItem(ADMIN_SESSION_KEY) === 'true'
    authCard.hidden = unlocked
    adminPanel.hidden = !unlocked
  }

  toggleAdminState()

  authForm?.addEventListener('submit', (event) => {
    event.preventDefault()
    const password = new FormData(authForm).get('password')

    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem(ADMIN_SESSION_KEY, 'true')
      toggleAdminState()
      authForm.reset()
      if (message) {
        message.textContent = ''
      }
      return
    }

    if (message) {
      message.textContent = 'Incorrect password. Please try again.'
    }
  })

  logoutButton?.addEventListener('click', () => {
    sessionStorage.removeItem(ADMIN_SESSION_KEY)
    renderApp()
  })

  siteForm?.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(siteForm)
    const siteData = getSiteData()

    siteData.home.eyebrow = String(formData.get('homeEyebrow') || '').trim()
    siteData.home.title = String(formData.get('homeTitle') || '').trim()
    siteData.home.text = String(formData.get('homeText') || '').trim()
    siteData.home.ctaTitle = String(formData.get('ctaTitle') || '').trim()
    siteData.contact.email = String(formData.get('contactEmail') || '').trim()
    siteData.contact.phone = String(formData.get('contactPhone') || '').trim()
    siteData.footer.note = String(formData.get('footerNote') || '').trim()

    saveSiteData(siteData)
    renderApp()
  })

  caseForm?.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(caseForm)
    const siteData = getSiteData()
    const caseId = String(formData.get('caseId') || '').trim()
    const nextStudy = {
      id: caseId || `case-${Date.now()}`,
      category: String(formData.get('category') || '').trim(),
      label: String(formData.get('label') || '').trim(),
      title: String(formData.get('title') || '').trim(),
      description: String(formData.get('description') || '').trim(),
      metrics: [
        String(formData.get('metricOne') || '').trim(),
        String(formData.get('metricTwo') || '').trim(),
        String(formData.get('metricThree') || '').trim(),
      ].filter(Boolean),
    }

    const existingIndex = siteData.caseStudies.findIndex((study) => study.id === nextStudy.id)

    if (existingIndex >= 0) {
      siteData.caseStudies[existingIndex] = nextStudy
    } else {
      siteData.caseStudies.unshift(nextStudy)
    }

    saveSiteData(siteData)
    renderApp()
  })

  clearFormButton?.addEventListener('click', () => {
    caseForm?.reset()
    const hiddenField = caseForm?.querySelector('[name="caseId"]')
    if (hiddenField) {
      hiddenField.value = ''
    }
  })

  resetButton?.addEventListener('click', () => {
    localStorage.removeItem(STORAGE_KEY)
    renderApp()
  })

  document.querySelectorAll('[data-edit-case]').forEach((button) => {
    button.addEventListener('click', () => {
      const caseId = button.getAttribute('data-edit-case')
      const study = getSiteData().caseStudies.find((entry) => entry.id === caseId)

      if (!study || !caseForm) {
        return
      }

      caseForm.querySelector('[name="caseId"]').value = study.id
      caseForm.querySelector('[name="category"]').value = study.category
      caseForm.querySelector('[name="label"]').value = study.label
      caseForm.querySelector('[name="title"]').value = study.title
      caseForm.querySelector('[name="description"]').value = study.description
      caseForm.querySelector('[name="metricOne"]').value = study.metrics?.[0] || ''
      caseForm.querySelector('[name="metricTwo"]').value = study.metrics?.[1] || ''
      caseForm.querySelector('[name="metricThree"]').value = study.metrics?.[2] || ''
      caseForm.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  })

  document.querySelectorAll('[data-delete-case]').forEach((button) => {
    button.addEventListener('click', () => {
      const caseId = button.getAttribute('data-delete-case')
      const siteData = getSiteData()
      siteData.caseStudies = siteData.caseStudies.filter((study) => study.id !== caseId)
      saveSiteData(siteData)
      renderApp()
    })
  })
}

renderApp()
