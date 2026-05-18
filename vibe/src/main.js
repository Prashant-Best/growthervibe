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

const homeReelPlaylist = [
  { src: showcaseVideo, title: 'Outie Tool' },
  { src: video1, title: 'Big News' },
  { src: video2, title: 'FlowVeda' },
  { src: video3, title: 'Mandi Joinbrands' },
  { src: video4, title: 'Morph Reel' },
  { src: video5, title: 'No Mercy' },
  { src: video6, title: 'Preworkout' },
  { src: video7, title: 'Whey Protein' },
]

const homePortfolioEntries = [
  {
    badge: 'Marketplace Ads',
    title: 'Before / after creatives, A+ content, and product frames built for shelf clicks.',
    description: 'Scroll-stopping creatives designed for high CTR on marketplaces.',
    detail: 'Page 1 explores cover-ready product storytelling for catalog and shelf performance.',
    note: 'Catalog storytelling arranged with the feel of a premium product book.',
    bullets: ['Shelf-first hooks', 'A+ detail framing', 'Better click intent'],
    footer: 'Every page is designed to move a viewer from product glance to stronger purchase intent.',
  },
  {
    badge: 'Performance Ads',
    title: 'UGC ads, static variations, hooks, and testing-ready ad sets.',
    description: 'Creative testing engine behind profitable scaling.',
    detail: 'Page 2 focuses on ad systems that help ambitious brands learn faster and scale cleaner.',
    note: 'Testing pages that feel strategic, sharp, and ready for iteration.',
    bullets: ['Hook expansion', 'Offer testing', 'Scale-ready ad sets'],
    footer: 'The spread reflects a testing system where each creative angle has a job inside the funnel.',
  },
  {
    badge: 'Quick Commerce Ads',
    title: 'Urgency-led motion, offer-first cuts, and fast conversion creatives.',
    description: 'Built for instant clicks and impulse buys.',
    detail: 'Page 3 captures fast-turn offers, hard-stop edits, and conversion pressure built for speed.',
    note: 'Fast-moving layouts made to carry urgency across every spread.',
    bullets: ['Offer pressure', 'Speed-led edits', 'Impulse conversion'],
    footer: 'Quick commerce pages are shaped around urgency, clarity, and immediate click behavior.',
  },
  {
    badge: 'Video + Photography',
    title: 'Studio shots, lifestyle frames, and product storytelling in one system.',
    description: 'Product shoots with a studio + UGC mix.',
    detail: 'Page 4 blends image direction and motion planning so every visual page feels cohesive.',
    note: 'A richer editorial spread for products that need both polish and motion.',
    bullets: ['Studio visuals', 'Lifestyle moments', 'Motion continuity'],
    footer: 'Photography and motion are treated like one system so the brand story stays consistent.',
  },
  {
    badge: 'AI UGC Ads',
    title: 'AI avatars, voiceover creatives, and scalable ad iterations.',
    description: 'Scale content without scaling production cost.',
    detail: 'Page 5 shows modern creative workflows that keep production nimble without losing polish.',
    note: 'Forward-looking pages that still read like crafted creative direction.',
    bullets: ['AI avatars', 'Voice-led scripts', 'Efficient iteration'],
    footer: 'The result is a modern production workflow that still feels human, sharp, and conversion aware.',
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
  'performance-marketing': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg>`,
  'ai-creative-studio': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 4 5 5-9 9H6v-5z"/><path d="M13 6l5 5"/><path d="M4 20h16"/></svg>`,
  'ai-ugc-videos': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m10 9 5 3-5 3z"/></svg>`,
  'cro-landing-pages': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8"/><path d="M8 12h5"/><path d="M8 16h8"/></svg>`,
  'ai-marketing-strategy': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93 7.76 7.76"/><path d="m16.24 16.24 2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><circle cx="12" cy="12" r="4"/></svg>`,
  'ecommerce-growth-retainer': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h8.95a2 2 0 0 0 1.95-1.57L21 7H5.12"/></svg>`,
  'social-media-optimization': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a3 3 0 1 0-2.83-4"/><path d="M6 16a3 3 0 1 0 2.83 4"/><path d="M12 7v10"/><path d="M8.8 9.2 15.2 14.8"/><path d="m15.2 9.2-6.4 5.6"/></svg>`,
}

const serviceCatalog = [
  {
    key: 'performance-marketing',
    title: 'Performance Marketing',
    description: 'Paid campaigns built to scale revenue',
    href: './performance-marketing.html',
    eyebrow: 'Performance marketing',
    headline: 'Performance marketing that pays for itself.',
    intro:
      'We turn ad spend into measurable revenue for eCommerce and growth-focused brands with full-funnel paid campaigns, faster creative testing, and clear reporting.',
    outcomes: ['Profitable ad scaling', 'Lower wasted spend', 'Clear ROAS visibility'],
    deliverables: [
      'Google, Meta, TikTok, Shopping, and retargeting campaign management',
      'Audience segmentation, budget allocation, and bid strategy',
      'Weekly reporting around ROAS, CAC, MER, CTR, and revenue',
    ],
    metrics: ['4.8x average ROAS delivered', '120+ eCommerce brands scaled', 'Weekly performance dashboard'],
    features: [
      { title: 'Paid media management', text: 'Full campaign buildout across Google, Meta, TikTok, and YouTube with a unified performance lens.' },
      { title: 'Creative testing engine', text: 'Fresh hooks, angles, statics, and videos tested quickly so winning creative does not go stale.' },
      { title: 'Conversion alignment', text: 'Ad promises, landing pages, product pages, and checkout flow stay connected.' },
      { title: 'Revenue reporting', text: 'Plain-English dashboards focused on business outcomes instead of vanity metrics.' },
    ],
    process: [
      'Audit ad accounts, creatives, funnel gaps, tracking, and current revenue economics.',
      'Build a 90-day channel, audience, offer, and creative testing roadmap.',
      'Launch structured campaigns and validate winning creative-audience combinations.',
      'Scale winners, cut waste fast, and refresh creative every month.',
    ],
    faqs: [
      { question: 'What makes Growth Revibe different from a standard performance agency?', answer: 'We manage media and build the creative system around it, so campaigns keep getting fresh hooks, statics, AI UGC, and landing page improvements.' },
      { question: 'What ad spend do you recommend?', answer: 'We usually recommend enough monthly spend to produce meaningful learning across Meta and Google, then scale once the data is stable.' },
      { question: 'How quickly can we see early signals?', answer: 'Most accounts show useful learning inside the first two weeks, with stronger performance patterns usually visible by week six to eight.' },
    ],
  },
  {
    key: 'ai-creative-studio',
    title: 'AI Creative Studio',
    description: 'High-volume ad creatives, fast',
    href: './ai-creative-studio.html',
    eyebrow: 'AI creative studio',
    headline: 'AI creatives that capture attention and drive results.',
    intro:
      'We create scroll-stopping visuals, performance ad designs, product promos, motion graphics, and short-form assets built for faster launch cycles.',
    outcomes: ['Faster creative production', 'Lower production cost', 'More angles to test'],
    deliverables: [
      'AI ad creatives, social statics, carousels, and product promo designs',
      'Short-form reels, AI voiceovers, and motion graphics',
      'Creative strategy built around platform behavior and conversion intent',
    ],
    metrics: ['Static creatives', 'Short-form reels', 'Product promo videos'],
    features: [
      { title: 'AI ad creatives', text: 'Conversion-focused graphics built around offers, proof, objections, and thumb-stop hooks.' },
      { title: 'Social media creatives', text: 'Platform-ready visuals for Instagram, Facebook, LinkedIn, YouTube, and commerce placements.' },
      { title: 'Motion and voiceover', text: 'AI voiceover, lightweight motion graphics, and short video concepts for campaign testing.' },
      { title: 'Creative testing plan', text: 'Every asset is grouped by hook, audience, offer, and funnel stage so media teams know what to test.' },
    ],
    process: [
      'Clarify audience, offer, platform, and the performance goal for each asset batch.',
      'Build creative angles using competitor research, customer pain points, and proof.',
      'Produce static, motion, and short-form variants for rapid campaign testing.',
      'Review performance data and turn winners into the next creative sprint.',
    ],
    faqs: [
      { question: 'Can you create creatives without a full production shoot?', answer: 'Yes. The studio is designed for fast AI-assisted production, product-led layouts, motion, and voiceover when traditional shoots are too slow.' },
      { question: 'Will creatives match our brand?', answer: 'Yes. We build around your colors, tone, product hierarchy, and campaign goals so assets feel consistent, not generic.' },
    ],
  },
  {
    key: 'ai-ugc-videos',
    title: 'AI UGC Videos',
    description: 'Creator-style videos without slow shoots',
    href: './ai-ugc-videos.html',
    eyebrow: 'AI UGC videos',
    headline: 'Realistic AI UGC videos built for performance campaigns.',
    intro:
      'We produce realistic spokesperson videos, voice-led product explainers, hooks, and short-form ad scripts so your campaigns never run dry on fresh angles.',
    outcomes: ['Faster video output', 'More hooks to test', 'Lower creator dependency'],
    deliverables: [
      'AI spokesperson or avatar videos for product-led ads',
      'Hook-first scripts for TikTok, Reels, YouTube Shorts, and Meta',
      'Voiceover, captions, product overlays, and CTA variations',
    ],
    metrics: ['AI spokesperson ads', 'Hook-first scripts', 'Fast iteration cycles'],
    features: [
      { title: 'AI spokesperson videos', text: 'Real-person style product videos made without influencer hiring, shoot logistics, or long approval cycles.' },
      { title: 'Script and hook system', text: 'We write variants around pain points, outcomes, objections, offers, and proof.' },
      { title: 'Platform formatting', text: 'Videos are sized and paced for Reels, Shorts, TikTok, and paid social placements.' },
      { title: 'Testing batches', text: 'Multiple hooks and CTAs make it easier to find the angle that actually converts.' },
    ],
    process: [
      'Map the product promise, objections, customer language, and offer.',
      'Write scripts with multiple hooks, proof points, and CTA options.',
      'Produce AI UGC variants with captions, product frames, and voiceover.',
      'Use performance data to refresh hooks and build the next batch.',
    ],
    faqs: [
      { question: 'Does AI UGC work for paid ads?', answer: 'It can, especially when the script and offer are strong. We treat it as a testing format and measure the result against standard statics and videos.' },
      { question: 'Can you make videos for multiple products?', answer: 'Yes. We can structure batches by product, angle, audience segment, or funnel stage.' },
    ],
  },
  {
    key: 'cro-landing-pages',
    title: 'CRO & Landing Pages',
    description: 'Fix the funnel after the click',
    href: './cro-landing-pages.html',
    eyebrow: 'CRO and landing pages',
    headline: 'Landing pages and funnels built to convert more of the traffic you already have.',
    intro:
      'Traffic means very little if the page after the click leaks intent. We audit, write, design, and improve landing pages so campaigns convert cleaner.',
    outcomes: ['Higher conversion rate', 'Lower CAC', 'Better ad-to-page match'],
    deliverables: [
      'Landing page audit, copy structure, wireframe, and redesign direction',
      'Offer hierarchy, proof blocks, objections, FAQs, and CTA flow',
      'A/B testing ideas, heatmap review, checkout and product page recommendations',
    ],
    metrics: ['Landing page audit', 'Copy and layout', 'Testing roadmap'],
    features: [
      { title: 'Conversion audit', text: 'We identify where visitors lose trust, get confused, or fail to move to the next step.' },
      { title: 'Message match', text: 'Ads, offers, pages, proof, and CTA language stay aligned from first click to form or checkout.' },
      { title: 'Page copy and structure', text: 'Sharper headlines, stronger proof, better section flow, and cleaner decision paths.' },
      { title: 'Testing priorities', text: 'We turn findings into practical test ideas instead of vague recommendations.' },
    ],
    process: [
      'Review campaign promises, analytics, page behavior, and conversion barriers.',
      'Restructure the landing page around clarity, proof, offer, and action.',
      'Create copy and design direction that matches traffic intent.',
      'Track outcomes and iterate the highest-impact sections first.',
    ],
    faqs: [
      { question: 'Do you build the page or only audit it?', answer: 'We can do either. The service can include audit-only recommendations or full page copy and design direction depending on what you need.' },
      { question: 'Is this only for eCommerce?', answer: 'No. It works for product pages, lead generation pages, SaaS landing pages, and campaign-specific funnels.' },
    ],
  },
  {
    key: 'ai-marketing-strategy',
    title: 'AI Marketing Strategy',
    description: 'Smarter research, sharper campaigns',
    href: './ai-marketing-strategy.html',
    eyebrow: 'AI marketing strategy',
    headline: 'AI-powered strategy for brands ready to move faster with more clarity.',
    intro:
      'We combine AI-assisted research, competitor analysis, audience mapping, and creative planning so campaigns start with stronger intelligence and cleaner direction.',
    outcomes: ['Sharper audience insight', 'Faster planning cycles', 'Better campaign angles'],
    deliverables: [
      'Audience, competitor, offer, and category research',
      'Creative angle maps, campaign themes, and messaging frameworks',
      'Channel roadmap for content, paid ads, social, and conversion priorities',
    ],
    metrics: ['Audience research', 'Competitor mapping', 'Campaign roadmap'],
    features: [
      { title: 'AI-assisted research', text: 'We use AI workflows to analyze audience language, competitor patterns, and category opportunities faster.' },
      { title: 'Messaging architecture', text: 'Core promises, objections, proof points, and CTA language get organized before execution starts.' },
      { title: 'Campaign planning', text: 'We translate research into concrete creative angles, channel priorities, and testing sequences.' },
      { title: 'Growth system view', text: 'SEO, SMO, paid ads, content, and CRO are planned together instead of in disconnected lanes.' },
    ],
    process: [
      'Gather business goals, audience context, funnel assets, and competitor references.',
      'Run research sprints to identify opportunities, gaps, and message patterns.',
      'Build a prioritized strategy across content, social, paid, creative, and conversion.',
      'Convert strategy into a practical execution roadmap with clear next moves.',
    ],
    faqs: [
      { question: 'Is this a one-time strategy or ongoing support?', answer: 'It can be either. Many brands start with a focused strategy sprint, then keep us involved for implementation and optimization.' },
      { question: 'Do you use AI to replace strategy?', answer: 'No. AI speeds research and pattern detection, while the final strategy is shaped by human judgment, brand context, and performance logic.' },
    ],
  },
  {
    key: 'ecommerce-growth-retainer',
    title: 'eCommerce Growth Retainer',
    description: 'Ads, creatives, CRO, and reporting together',
    href: './ecommerce-growth-retainer.html',
    eyebrow: 'eCommerce growth retainer',
    headline: 'An all-in-one growth partnership for eCommerce brands that want cleaner scale.',
    intro:
      'We combine paid media, creative production, AI UGC, CRO, and growth reporting into one monthly operating system for brands that need one accountable team.',
    outcomes: ['One growth team', 'Faster campaign cycles', 'Cleaner revenue visibility'],
    deliverables: [
      'Paid ads management across key acquisition channels',
      'Monthly creative batches including statics, motion, and AI UGC',
      'CRO recommendations, growth calls, and performance dashboards',
    ],
    metrics: ['Ads + creatives', 'Monthly optimization', 'Growth dashboard'],
    features: [
      { title: 'Integrated acquisition', text: 'Media buying, creatives, landing pages, and reporting are planned together every month.' },
      { title: 'Creative refreshes', text: 'New angles, statics, videos, and AI UGC keep campaigns moving instead of depending on old winners.' },
      { title: 'Conversion support', text: 'Product page, landing page, offer, and checkout insights help reduce wasted spend.' },
      { title: 'Clear operating rhythm', text: 'Weekly performance checks and monthly strategy reviews keep priorities visible.' },
    ],
    process: [
      'Audit your store, traffic sources, ad accounts, creatives, and conversion data.',
      'Set monthly acquisition, creative, CRO, and reporting priorities.',
      'Launch campaigns and creative batches in focused growth sprints.',
      'Review what worked, scale winners, and refresh the next month roadmap.',
    ],
    faqs: [
      { question: 'Who is this retainer best for?', answer: 'It is best for eCommerce brands that already have a product-market signal and want a single partner across ads, creative, CRO, and reporting.' },
      { question: 'Can we start with one service first?', answer: 'Yes. Many brands begin with performance marketing or creative production, then move into the full retainer once the operating rhythm is clear.' },
    ],
  },
  {
    key: 'social-media-optimization',
    title: 'Social Media Optimization',
    description: 'Organic social that builds real momentum',
    href: './social-media-optimization.html',
    eyebrow: 'SMO services',
    headline: 'Social media that actually grows your brand.',
    intro:
      'We do not just post and hope. We build platform-specific SMO systems that improve visibility, engagement, community, traffic, and long-term brand trust.',
    outcomes: ['Stronger organic reach', 'More engaged audience', 'Better social-to-site traffic'],
    deliverables: [
      'Social media audit, profile optimization, and platform roadmap',
      'Content themes, posting cadence, hashtag research, and creative planning',
      'Community engagement, publishing support, analytics, and reporting',
    ],
    metrics: ['Instagram, Facebook, LinkedIn, YouTube', '60-90 day organic growth windows', 'Monthly SMO reporting'],
    features: [
      { title: 'Profile optimization', text: 'Bios, visuals, links, keywords, and trust signals are sharpened across every active platform.' },
      { title: 'Content planning', text: 'We build themes, cadence, formats, captions, hashtags, and creative direction around your audience.' },
      { title: 'Community management', text: 'Thoughtful engagement helps followers feel connected instead of ignored after the post goes live.' },
      { title: 'Analytics and reporting', text: 'You see what is growing, what needs adjustment, and where social is creating business value.' },
    ],
    process: [
      'Research your brand, competitors, audience behavior, and current social presence.',
      'Build a scalable roadmap across the platforms that matter most.',
      'Create and optimize content, profiles, captions, hashtags, and publishing flow.',
      'Track reach, engagement, community growth, traffic, and conversion signals.',
    ],
    faqs: [
      { question: 'What exactly is Social Media Optimization?', answer: 'SMO is the process of improving your social profiles, content, hashtags, engagement, and publishing system so your organic presence grows more consistently.' },
      { question: 'How is SMO different from paid social media marketing?', answer: 'Paid social uses ad spend to reach people. SMO strengthens your organic presence so your brand looks credible, active, and discoverable even without paid media.' },
      { question: 'Which platforms do you work on?', answer: 'We work across Instagram, Facebook, LinkedIn, YouTube, and other platforms when they match your audience and brand goals.' },
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

function serviceMetricMarkup(service) {
  if (!Array.isArray(service.metrics) || !service.metrics.length) {
    return ''
  }

  return `
    <section class="service-metric-strip section">
      ${service.metrics
        .map(
          (metric, index) => `
            <article class="service-metric-card reveal-up" style="transition-delay: ${index * 80}ms;">
              <span>${String(index + 1).padStart(2, '0')}</span>
              <strong>${escapeHtml(metric)}</strong>
            </article>
          `,
        )
        .join('')}
    </section>
  `
}

function serviceFeatureMarkup(service) {
  if (!Array.isArray(service.features) || !service.features.length) {
    return ''
  }

  return `
    <section class="service-feature-section section">
      <div class="section-heading reveal-up">
        <span class="eyebrow">What's included</span>
        <h2>Every lever we pull for this service.</h2>
      </div>
      <div class="service-feature-grid">
        ${service.features
          .map(
            (feature, index) => `
              <article class="service-detail-card reveal-up" style="transition-delay: ${index * 70}ms;">
                <span class="service-detail-label">${String(index + 1).padStart(2, '0')}</span>
                <h3>${escapeHtml(feature.title)}</h3>
                <p>${escapeHtml(feature.text)}</p>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>
  `
}

function serviceProcessMarkup(service) {
  if (!Array.isArray(service.process) || !service.process.length) {
    return ''
  }

  return `
    <section class="service-process-section section">
      <div class="section-heading reveal-up">
        <span class="eyebrow">Our process</span>
        <h2>How we take the work from clarity to scale.</h2>
      </div>
      <div class="service-process-list">
        ${service.process
          .map(
            (step, index) => `
              <article class="service-process-step reveal-up" style="transition-delay: ${index * 80}ms;">
                <span>${String(index + 1).padStart(2, '0')}</span>
                <p>${escapeHtml(step)}</p>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>
  `
}

function serviceFaqMarkup(service) {
  if (!Array.isArray(service.faqs) || !service.faqs.length) {
    return ''
  }

  return `
    <section class="service-faq-section section">
      <div class="section-heading reveal-up">
        <span class="eyebrow">FAQs</span>
        <h2>Questions people ask before they start.</h2>
      </div>
      <div class="service-faq-list">
        ${service.faqs
          .map(
            (faq, index) => `
              <article class="faq-item reveal-up" style="transition-delay: ${index * 70}ms;">
                <h3>${escapeHtml(faq.question)}</h3>
                <p>${escapeHtml(faq.answer)}</p>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>
  `
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
        <div class="service-detail-signal service-signal-${(index % 4) + 1}" aria-hidden="true">
          <div class="service-signal-topline">
            <span>Growth signal</span>
            <strong>Live system</strong>
          </div>
          <div class="service-signal-chart">
            <span style="--signal-height: 42%;"></span>
            <span style="--signal-height: 68%;"></span>
            <span style="--signal-height: 54%;"></span>
            <span style="--signal-height: 82%;"></span>
            <span style="--signal-height: 72%;"></span>
            <span style="--signal-height: 94%;"></span>
          </div>
          <div class="service-signal-flow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
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

    ${serviceMetricMarkup(service)}
    ${serviceFeatureMarkup(service)}
    ${serviceProcessMarkup(service)}
    ${serviceFaqMarkup(service)}

    <section class="cta-banner section reveal-up">
      <div class="cta-copy">
        <span class="eyebrow">Ready to grow</span>
        <h2>Get a focused audit for ${escapeHtml(service.title)}.</h2>
        <p>We will review where you are today, show the clearest opportunities, and map the next moves for cleaner growth.</p>
      </div>
      <a class="button button-primary" href="./contact.html">Book a free audit</a>
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
            <div class="case-thumb-sigil" aria-hidden="true">
              <img src="${brandLogo}" alt="" />
            </div>
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
          <button
            type="button"
            class="video-rail-open"
            data-media-lightbox-trigger
            data-media-type="video"
            data-media-src="${item.video}"
            data-media-title="${escapeHtml(item.title)}"
            data-media-tag="${escapeHtml(item.tag)}"
            data-media-caption="${escapeHtml(item.caption)}"
            aria-label="Open ${escapeHtml(item.title)} video in popup view"
          >
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
          </button>
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
  const carouselItemsMarkup = videos.map((video) => `
    <button
      type="button"
      class="carousel-item"
      data-media-lightbox-trigger
      data-media-type="video"
      data-media-src="${video.src}"
      data-media-title="${escapeHtml(video.title)}"
      data-media-tag="Video gallery"
      data-media-caption="Selected creative from the Growth Revibe video gallery."
      aria-label="Open ${escapeHtml(video.title)} video"
    >
      <video class="carousel-video" src="${video.src}" autoplay muted loop playsinline preload="metadata"></video>
      <span class="carousel-label">${escapeHtml(video.title)}</span>
    </button>
  `).join('')

  return `
    <div class="carousel-section reveal-up">
      <div class="carousel-row carousel-row-ltr">
        <div class="carousel-track carousel-track-ltr">
          ${carouselItemsMarkup}
          ${carouselItemsMarkup}
        </div>
      </div>

      <div class="carousel-row carousel-row-rtl">
        <div class="carousel-track carousel-track-rtl">
          ${carouselItemsMarkup}
          ${carouselItemsMarkup}
        </div>
      </div>
    </div>
  `
}

function imageGalleryMarkup() {
  const images = [
    { src: image1, title: 'Ad Showcase', tag: 'Static creatives', caption: 'Designed frames that keep the product and offer readable at a glance.' },
    { src: image2, title: 'Frame Design', tag: 'Creative systems', caption: 'Sharper visual systems for campaigns that need fast iteration.' },
    { src: image3, title: 'Hydro Gain', tag: 'Launch campaign', caption: 'Launch-ready art direction built to carry hooks, proof, and CTA.' },
    { src: image4, title: 'Product Image', tag: 'Marketplace design', caption: 'Marketplace-first image treatment with cleaner product hierarchy.' },
    { src: image5, title: 'Muscle Whey', tag: 'Performance ad', caption: 'High-contrast static design for better thumb-stop and recall.' },
    { src: image6, title: 'Prex Island', tag: 'Commerce creative', caption: 'Product-led compositions shaped for conversion-focused placements.' },
  ]

  return `
    <section class="video-rail-section image-rail-section">
      <div class="section-heading section-heading-centered reveal-up">
        <span class="eyebrow">Image gallery</span>
        <h2>Static creatives presented with the same showroom energy as the reel section.</h2>
        <p>Frames, marketplace images, and performance statics arranged in a cleaner horizontal rail.</p>
      </div>
      <div class="video-rail-wrap reveal-up">
        <div class="video-rail-track image-rail-track">
          ${[...images, ...images]
            .map(
              (img, index) => `
          <article class="video-rail-card image-rail-card" aria-label="${escapeHtml(img.title)} sample image card">
            <button
              type="button"
              class="image-rail-open"
              data-image-lightbox-trigger
              data-image-src="${img.src}"
              data-image-title="${escapeHtml(img.title)}"
              data-image-tag="${escapeHtml(img.tag)}"
              data-image-caption="${escapeHtml(img.caption)}"
              aria-label="Open ${escapeHtml(img.title)} in popup view"
            >
              <div class="video-rail-shell image-rail-shell">
                <div class="video-rail-chrome">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div class="video-rail-screen image-rail-screen video-theme-${(index % 3) + 1}">
                  <img class="video-rail-media image-rail-media" src="${img.src}" alt="${escapeHtml(img.title)}" loading="lazy" />
                  <div class="video-rail-glow" aria-hidden="true"></div>
                  <div class="video-rail-progress" aria-hidden="true"><span></span></div>
                </div>
              </div>
            </button>
            <div class="video-rail-copy image-rail-copy">
              <span>${escapeHtml(img.tag)}</span>
              <strong>${escapeHtml(img.title)}</strong>
              <p>${escapeHtml(img.caption)}</p>
            </div>
          </article>
        `,
            )
            .join('')}
        </div>
      </div>
    </section>
  `
}

function imageLightboxMarkup() {
  return `
    <div class="image-lightbox" data-image-lightbox hidden>
      <div class="image-lightbox-backdrop" data-image-lightbox-close></div>
      <div class="image-lightbox-dialog" role="dialog" aria-modal="true" aria-labelledby="image-lightbox-title">
        <button type="button" class="image-lightbox-close" data-image-lightbox-close aria-label="Close image popup">&times;</button>
        <div class="image-lightbox-media-wrap">
          <div class="image-lightbox-media-shell">
            <img class="image-lightbox-media" data-image-lightbox-media src="" alt="" />
            <video class="image-lightbox-video" data-image-lightbox-video src="" controls playsinline hidden></video>
            <div class="image-lightbox-video-badge" aria-hidden="true">
              <span></span>
            </div>
          </div>
        </div>
        <div class="image-lightbox-copy">
          <span class="image-lightbox-tag" data-image-lightbox-tag></span>
          <h3 id="image-lightbox-title" data-image-lightbox-title></h3>
          <p data-image-lightbox-caption></p>
        </div>
      </div>
    </div>
  `
}

function homePortfolioBookMarkup() {
  const firstEntry = homePortfolioEntries[0]
  const navArrowLeft = `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M14.5 5.5 8 12l6.5 6.5"></path>
      <path d="M9 12h7"></path>
    </svg>
  `
  const navArrowRight = `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M9.5 5.5 16 12l-6.5 6.5"></path>
      <path d="M15 12H8"></path>
    </svg>
  `

  return `
    <div class="portfolio-stack-stage reveal-up">
      <article class="portfolio-stack" data-portfolio-book data-page-index="0" aria-label="Interactive portfolio cards">
        <button class="portfolio-stack-nav portfolio-stack-nav-prev" type="button" data-portfolio-book-nav="prev" aria-label="Show previous card">
          <span aria-hidden="true">${navArrowLeft}</span>
        </button>
        <div class="portfolio-stack-scene">
          <div class="portfolio-stack-orbit" aria-hidden="true"></div>
          <div class="portfolio-stack-card portfolio-stack-card-back portfolio-stack-card-back-one" data-portfolio-layer="one"></div>
          <div class="portfolio-stack-card portfolio-stack-card-back portfolio-stack-card-back-two" data-portfolio-layer="two"></div>
          <div class="portfolio-stack-card portfolio-stack-card-front">
            <div class="portfolio-stack-card-top">
              <span class="portfolio-stack-badge" data-portfolio-badge>${escapeHtml(firstEntry.badge)}</span>
              <small class="portfolio-stack-counter" data-portfolio-counter>0${1} / 0${homePortfolioEntries.length}</small>
            </div>
            <div class="portfolio-stack-card-copy">
              <h3 data-portfolio-detail>${escapeHtml(firstEntry.detail)}</h3>
              <p data-portfolio-description>${escapeHtml(firstEntry.description)}</p>
            </div>
            <div class="portfolio-stack-card-meta">
              <strong data-portfolio-title>${escapeHtml(firstEntry.title)}</strong>
              <div class="portfolio-stack-bullets" data-portfolio-page-bullets>
                ${firstEntry.bullets.map((bullet) => `<span>${escapeHtml(bullet)}</span>`).join('')}
              </div>
            </div>
          </div>
        </div>
        <button class="portfolio-stack-nav portfolio-stack-nav-next" type="button" data-portfolio-book-nav="next" aria-label="Show next card">
          <span aria-hidden="true">${navArrowRight}</span>
        </button>
        <div class="portfolio-stack-footer">
          <p class="portfolio-stack-note" data-portfolio-page-note>${escapeHtml(firstEntry.note)}</p>
          <p class="portfolio-stack-status" data-portfolio-book-status aria-live="polite">${escapeHtml(firstEntry.footer)}</p>
        </div>
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
        <div class="answers-intro-card">
          <span class="eyebrow">What clients ask</span>
          <h2>We already know the questions serious brands ask before they move.</h2>
        </div>
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
  const introActions = [
    {
      label: 'Grow',
      icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 18h16"></path><path d="M7 15v-4"></path><path d="M12 15V7"></path><path d="M17 15v-6"></path><path d="m8 8 4-4 4 4"></path></svg>`,
    },
    {
      label: 'Optimize',
      icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="6.5"></circle><circle cx="12" cy="12" r="2.5"></circle><path d="M12 2.5v3"></path><path d="M12 18.5v3"></path><path d="M2.5 12h3"></path><path d="M18.5 12h3"></path></svg>`,
    },
    {
      label: 'Launch',
      icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 4.5c2.2 0 4 1.8 4 4v2.2L13 16.2 7.8 11 13.3 5.5h1.2Z"></path><path d="m7.8 11-2.3.8 1.5 1.5-.8 2.3 2.3-.8 1.5 1.5.8-2.3"></path><path d="M14.3 9.7 18 6"></path></svg>`,
    },
    {
      label: 'Scale',
      icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 18h16"></path><path d="M6.5 15.5 11 11l3 3 4.5-5"></path><path d="M18.5 9V6h-3"></path></svg>`,
    },
  ]

  return `
    <div class="plane-intro" data-plane-intro aria-hidden="true">
      <div class="plane-intro-sky"></div>
      <div class="plane-intro-grid"></div>
      <div class="plane-intro-glow plane-intro-glow-top"></div>
      <div class="plane-intro-glow plane-intro-glow-bottom"></div>
      <div class="plane-intro-card">
        <div class="plane-intro-brand">
          <span class="plane-intro-logo">
            <img src="${brandLogo}" alt="Growth Revibe logo" />
          </span>
          <div class="plane-intro-copy">
            <strong class="plane-intro-wordmark">Growth Revibe</strong>
            <span class="plane-intro-kicker">Grow • Optimize • Scale</span>
          </div>
        </div>
        <div class="plane-intro-actions">
          ${introActions
            .map(
              (item) => `
                <span class="plane-intro-action">
                  <span class="plane-intro-action-icon">${item.icon}</span>
                  <span class="plane-intro-action-label">${escapeHtml(item.label)}</span>
                </span>
              `,
            )
            .join('')}
        </div>
      </div>
      <div class="plane-intro-plane">
        <div class="plane-trail"></div>
        <div class="plane-rocket-flame"></div>
        <div class="plane-rocket-body"></div>
        <div class="plane-rocket-window"></div>
        <div class="plane-rocket-fin plane-rocket-fin-top"></div>
        <div class="plane-rocket-fin plane-rocket-fin-bottom"></div>
        <div class="plane-rocket-fin plane-rocket-fin-tail"></div>
        <div class="plane-rocket-wing plane-rocket-wing-main"></div>
        <div class="plane-nose"></div>
      </div>
    </div>
  `
}

function footerSocialLinksMarkup() {
  const socials = [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/growthrevibe',
      icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"></rect><circle cx="12" cy="12" r="3.8"></circle><circle cx="17.4" cy="6.6" r="1"></circle></svg>`,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/growthrevibe',
      icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="6.5" cy="6.5" r="1.2"></circle><path d="M6.5 10v7.5"></path><path d="M11.5 17.5V13c0-1.7 1-2.8 2.6-2.8 1.5 0 2.4 1 2.4 2.8v4.5"></path><path d="M11.5 10v1.2"></path></svg>`,
    },
    {
      label: 'YouTube',
      href: 'https://www.youtube.com/@growthrevibe',
      icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 8.2c-.2-1.2-1.1-2.2-2.3-2.4C16.8 5.5 12 5.5 12 5.5s-4.8 0-6.7.3C4.1 6 3.2 7 3 8.2c-.3 1.7-.3 3.8-.3 3.8s0 2.1.3 3.8c.2 1.2 1.1 2.2 2.3 2.4 1.9.3 6.7.3 6.7.3s4.8 0 6.7-.3c1.2-.2 2.1-1.2 2.3-2.4.3-1.7.3-3.8.3-3.8s0-2.1-.3-3.8Z"></path><path d="m10 15.2 5-3.2-5-3.2z"></path></svg>`,
    },
  ]

  return socials
    .map(
      (item) =>
        `<a class="footer-social-link" href="${item.href}" target="_blank" rel="noreferrer" aria-label="${escapeHtml(item.label)}">${item.icon}<span class="sr-only">${escapeHtml(item.label)}</span></a>`,
    )
    .join('')
}

function footerNavLinksMarkup() {
  const footerNavItems = navItems.filter((item) => item.key !== 'services')

  return footerNavItems
    .map((item) => `<a href="${item.href}">${escapeHtml(item.label)}</a>`)
    .join('')
}

function footerServiceLinksMarkup() {
  return serviceCatalog
    .slice(0, 6)
    .map((service) => `<a href="${service.href}">${escapeHtml(service.title)}</a>`)
    .join('')
}

function homePartnerSectionMarkup() {
  const partners = [
    {
      badge: 'Meta',
      title: 'Meta Business Partner',
      detail: 'Paid social systems',
      theme: 'meta',
    },
    {
      badge: 'Shopify',
      title: 'Shopify Partner',
      detail: 'Commerce growth',
      theme: 'shopify',
    },
    {
      badge: 'Google',
      title: 'Google Partner',
      detail: 'Search and demand',
      theme: 'google',
    },
    {
      badge: 'GA',
      title: 'Google Analytics',
      detail: 'Tracking clarity',
      theme: 'analytics',
    },
  ]

  return `
    <section class="partner-section section">
      <div class="partner-section-heading reveal-up">
        <span class="partner-title-chip">Certified Partner With</span>
      </div>
      <div class="partner-grid reveal-up" aria-label="Partner platforms">
        ${partners
          .map(
            (partner) => `
              <article class="partner-card partner-card-${partner.theme}">
                <div class="partner-mark" aria-hidden="true">${escapeHtml(partner.badge)}</div>
                <div class="partner-copy">
                  <strong>${escapeHtml(partner.title)}</strong>
                  <p>${escapeHtml(partner.detail)}</p>
                </div>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>
  `
}

function homeClientsSectionMarkup() {
  const clients = [
    { name: 'Healthffarm Nutrition', badge: 'HN' },
    { name: 'Torque Pharma', badge: 'TP' },
    { name: 'Morph Costumes', badge: 'MC', highlight: true },
    { name: 'Outie Too', badge: 'OT', highlight: true },
  ]

  return `
    <section class="client-trust-section section">
      <div class="section-heading reveal-up">
        <span class="eyebrow">Client network</span>
        <h2>Trusted by Global Brands Ecommerce and Lead Generation</h2>
      </div>
      <div class="client-trust-marquee reveal-up" aria-label="Client brands">
        ${['ltr', 'rtl']
          .map(
            (direction) => `
              <div class="client-trust-row client-trust-row-${direction}">
                <div class="client-trust-track client-trust-track-${direction}">
                  ${[...clients, ...clients]
                    .map(
                      (client) => `
                        <article class="client-trust-card${client.highlight ? ' is-highlighted' : ''}">
                          <span class="client-trust-mark" aria-hidden="true">${escapeHtml(client.badge)}</span>
                          <strong>${escapeHtml(client.name)}</strong>
                        </article>
                      `,
                    )
                    .join('')}
                </div>
              </div>
            `,
          )
          .join('')}
      </div>
    </section>
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
          <div class="hero-logo-lockup">
            <span class="hero-logo-badge">
              <img src="${brandLogo}" alt="Growth Revibe logo" />
            </span>
            <span class="hero-logo-wordmark">Growth Revibe</span>
          </div>
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
            <div class="reel-phone-frame reel-phone-frame-back">
              <div class="reel-phone-notch"></div>
              <div class="reel-phone-screen">
                <video class="reel-video" src="${homeReelPlaylist[4].src}" autoplay muted playsinline preload="metadata" data-home-reel-video data-reel-index="4" aria-label="Secondary Instagram reel showcase video"></video>
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
            <div class="reel-phone-frame reel-phone-frame-front">
              <div class="reel-phone-notch"></div>
              <div class="reel-phone-screen">
                <video class="reel-video" src="${homeReelPlaylist[0].src}" autoplay muted playsinline preload="metadata" data-home-reel-video data-reel-index="0" aria-label="Instagram reel style showcase video"></video>
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

      ${homeClientsSectionMarkup()}

      ${homePartnerSectionMarkup()}

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
        <div class="home-form-copy reveal-up">
          <span class="eyebrow">Start here</span>
          <h2>Need creatives that perform, not just fill the feed?</h2>
          <p>Share the platform, product angle, and the kind of creative support you need. We’ll map the right production and performance mix without overcomplicating it.</p>
          <div class="home-form-points">
            <span>Meta and marketplace friendly</span>
            <span>UGC, statics, hooks, and product angles</span>
            <span>Fast review with a practical next step</span>
          </div>
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
      <section class="page-banner section reveal-up services-page-hero">
        <span class="eyebrow">Services</span>
        <h1>Explore the services behind our creative growth work.</h1>
        <p>
          Pick the area you want help with and jump into a dedicated page built around that service, its outcomes, and how Growth Revibe approaches the work.
        </p>
      </section>

      <section class="service-accordion-section section reveal-up services-page-panel">
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

      <section class="pricing-showcase section services-page-panel">
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
        <div class="brand-sigil brand-sigil-one">
          <img src="${brandLogo}" alt="" />
        </div>
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
          <div class="footer-socials" aria-label="Social media links">
            ${footerSocialLinksMarkup()}
          </div>
        </div>
        <div class="footer-details">
          <div>
            <span>Navigation</span>
            <div class="footer-link-list">
              ${footerNavLinksMarkup()}
            </div>
          </div>
          <div>
            <span>Contact</span>
            <p><a href="mailto:${escapeHtml(siteData.contact.email)}">${escapeHtml(siteData.contact.email)}</a><br /><a href="mailto:${escapeHtml(siteData.contact.secondaryEmail)}">${escapeHtml(siteData.contact.secondaryEmail)}</a><br /><a href="tel:${escapeHtml(siteData.contact.phone.replaceAll(' ', ''))}">${escapeHtml(siteData.contact.phone)}</a></p>
          </div>
          <div>
            <span>Services</span>
            <div class="footer-link-list">
              ${footerServiceLinksMarkup()}
            </div>
          </div>
        </div>
        <p class="footer-note">${escapeHtml(siteData.footer.note)}</p>
      </footer>
      ${imageLightboxMarkup()}
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
  initHomeReelFeed()
  initPortfolioBook()
  initContactScheduler()
  initContactForms()
  initServiceAccordion()
  initMediaLightbox()
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
  const pageNote = book.querySelector('[data-portfolio-page-note]')
  const detail = book.querySelector('[data-portfolio-detail]')
  const description = book.querySelector('[data-portfolio-description]')
  const bullets = book.querySelector('[data-portfolio-page-bullets]')
  const status = book.querySelector('[data-portfolio-book-status]')
  const counter = book.querySelector('[data-portfolio-counter]')
  const layerOne = book.querySelector('[data-portfolio-layer="one"]')
  const layerTwo = book.querySelector('[data-portfolio-layer="two"]')
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
  let isAnimating = false
  const STACK_TRANSITION_DURATION = 820
  const STACK_CONTENT_SWAP_DELAY = 360

  const persistState = () => {
    localStorage.setItem(
      PORTFOLIO_BOOK_STATE_KEY,
      JSON.stringify({
        pageIndex: currentIndex,
      }),
    )
  }

  const setControlsDisabled = (disabled) => {
    buttons.forEach((button) => {
      button.disabled = disabled
      button.setAttribute('aria-disabled', String(disabled))
    })
  }

  const getEntry = (index) => homePortfolioEntries[(index + homePortfolioEntries.length) % homePortfolioEntries.length]

  const renderEntry = (index) => {
    const entry = getEntry(index)
    const nextEntry = getEntry(index + 1)
    const afterNextEntry = getEntry(index + 2)

    if (badge) badge.textContent = entry.badge
    if (title) title.textContent = entry.title
    if (pageNote) pageNote.textContent = entry.note || ''
    if (detail) detail.textContent = entry.detail
    if (description) description.textContent = entry.description
    if (bullets) {
      bullets.innerHTML = (entry.bullets || []).map((bullet) => `<span>${escapeHtml(bullet)}</span>`).join('')
    }
    if (status) {
      status.textContent = entry.footer || ''
    }
    if (counter) {
      counter.textContent = `${String(index + 1).padStart(2, '0')} / ${String(homePortfolioEntries.length).padStart(2, '0')}`
    }
    if (layerOne) {
      layerOne.innerHTML = `
        <span>${escapeHtml(nextEntry.badge)}</span>
        <strong>${escapeHtml(nextEntry.title)}</strong>
      `
    }
    if (layerTwo) {
      layerTwo.innerHTML = `
        <span>${escapeHtml(afterNextEntry.badge)}</span>
        <strong>${escapeHtml(afterNextEntry.title)}</strong>
      `
    }
    book.setAttribute('data-page-index', String(index))
    persistState()
  }

  const stepTo = (direction) => {
    if (isAnimating) {
      return
    }

    isAnimating = true
    setControlsDisabled(true)
    book.classList.remove('is-prev', 'is-next')
    book.classList.add(direction === 'prev' ? 'is-prev' : 'is-next', 'is-transitioning')

    const nextIndex =
      direction === 'next'
        ? (currentIndex + 1) % homePortfolioEntries.length
        : (currentIndex - 1 + homePortfolioEntries.length) % homePortfolioEntries.length

    window.setTimeout(() => {
      currentIndex = nextIndex
      renderEntry(currentIndex)
    }, STACK_CONTENT_SWAP_DELAY)

    window.setTimeout(() => {
      book.classList.remove('is-transitioning', 'is-prev', 'is-next')
      setControlsDisabled(false)
      isAnimating = false
    }, STACK_TRANSITION_DURATION)
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const navValue = button.getAttribute('data-portfolio-book-nav')
      stepTo(navValue === 'prev' ? 'prev' : 'next')
    })
  })

  book.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      stepTo('next')
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      stepTo('prev')
    }
  })

  renderEntry(currentIndex)
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

function initHomeReelFeed() {
  const reelVideos = [...document.querySelectorAll('[data-home-reel-video]')]

  if (!reelVideos.length) {
    return
  }

  const resetProgress = (video) => {
    const progress = video.parentElement?.querySelector('.reel-progress span')
    if (progress instanceof HTMLElement) {
      progress.style.animation = 'none'
      progress.offsetHeight
      progress.style.animation = ''
    }
  }

  const setNextVideo = (video) => {
    const currentIndex = Number(video.getAttribute('data-reel-index') || 0)
    const nextIndex = (currentIndex + 1) % homeReelPlaylist.length
    const nextReel = homeReelPlaylist[nextIndex]

    video.setAttribute('data-reel-index', String(nextIndex))
    video.setAttribute('src', nextReel.src)
    video.setAttribute('aria-label', `${nextReel.title} Instagram reel showcase video`)
    video.currentTime = 0
    resetProgress(video)
    void video.play().catch(() => {})
  }

  reelVideos.forEach((video) => {
    video.loop = false
    video.addEventListener('ended', () => setNextVideo(video))
    video.addEventListener('loadedmetadata', () => {
      const progress = video.parentElement?.querySelector('.reel-progress span')
      if (progress instanceof HTMLElement && Number.isFinite(video.duration) && video.duration > 0) {
        progress.style.animationDuration = `${video.duration}s`
      }
    })
    void video.play().catch(() => {})
  })
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

function initMediaLightbox() {
  const lightbox = document.querySelector('[data-image-lightbox]')
  const media = lightbox?.querySelector('[data-image-lightbox-media]')
  const video = lightbox?.querySelector('[data-image-lightbox-video]')
  const title = lightbox?.querySelector('[data-image-lightbox-title]')
  const tag = lightbox?.querySelector('[data-image-lightbox-tag]')
  const caption = lightbox?.querySelector('[data-image-lightbox-caption]')
  const triggers = document.querySelectorAll('[data-image-lightbox-trigger], [data-media-lightbox-trigger]')
  const closeButtons = lightbox?.querySelectorAll('[data-image-lightbox-close]')
  const closeButton = lightbox?.querySelector('.image-lightbox-close')

  if (!lightbox || !media || !video || !title || !tag || !caption || !triggers.length) {
    return
  }

  let lastTrigger = null
  let closeTimer = 0

  const closeLightbox = () => {
    lightbox.classList.remove('is-visible')
    lightbox.classList.remove('is-video')
    document.body.classList.remove('image-lightbox-open')
    window.clearTimeout(closeTimer)
    closeTimer = window.setTimeout(() => {
      lightbox.hidden = true
      media.setAttribute('src', '')
      media.hidden = false
      video.pause()
      video.setAttribute('src', '')
      video.hidden = true
    }, 320)
    if (lastTrigger instanceof HTMLElement) {
      lastTrigger.focus()
    }
  }

  const openLightbox = (trigger) => {
    lastTrigger = trigger
    const mediaType = trigger.getAttribute('data-media-type') || 'image'
    const src = trigger.getAttribute('data-image-src') || trigger.getAttribute('data-media-src') || ''
    const mediaTitle = trigger.getAttribute('data-image-title') || trigger.getAttribute('data-media-title') || ''
    const mediaTag = trigger.getAttribute('data-image-tag') || trigger.getAttribute('data-media-tag') || ''
    const mediaCaption = trigger.getAttribute('data-image-caption') || trigger.getAttribute('data-media-caption') || ''

    if (mediaType === 'video') {
      lightbox.classList.add('is-video')
      media.hidden = true
      video.hidden = false
      video.setAttribute('src', src)
      video.currentTime = 0
      void video.play().catch(() => {})
    } else {
      lightbox.classList.remove('is-video')
      video.pause()
      video.setAttribute('src', '')
      video.hidden = true
      media.hidden = false
      media.setAttribute('src', src)
      media.setAttribute('alt', mediaTitle || 'Creative image')
    }

    title.textContent = mediaTitle
    tag.textContent = mediaTag
    caption.textContent = mediaCaption
    window.clearTimeout(closeTimer)
    lightbox.hidden = false
    document.body.classList.add('image-lightbox-open')
    window.requestAnimationFrame(() => {
      lightbox.classList.add('is-visible')
      closeButton?.focus()
    })
  }

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      openLightbox(trigger)
    })
  })

  closeButtons?.forEach((button) => {
    button.addEventListener('click', closeLightbox)
  })

  lightbox.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeLightbox()
    }
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox.classList.contains('is-visible')) {
      closeLightbox()
    }
  })
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
