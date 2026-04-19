import './style.css'

const page = document.body.dataset.page || 'home'

const navItems = [
  { key: 'home', label: 'Home', href: './index.html' },
  { key: 'about', label: 'About Us', href: './about.html' },
  { key: 'services', label: 'Services', href: './services.html' },
  { key: 'case-studies', label: 'Case Studies', href: './case-studies.html' },
  { key: 'contact', label: 'Contact Us', href: './contact.html' },
]

const pageContent = {
  home: `
    <section class="hero-section section page-hero page-hero-home">
      <div class="hero-copy reveal-up">
        <span class="eyebrow">Performance-first digital marketing studio</span>
        <h1>We turn attention into momentum for ambitious brands.</h1>
        <p class="hero-text">
          Growth Vibe blends SEO, creative direction, performance marketing, and conversion design
          into campaigns that look sharp, rank well, and move people to act.
        </p>

        <div class="hero-actions">
          <a class="button button-primary" href="./contact.html">Book a strategy call</a>
          <a class="button button-secondary" href="./case-studies.html">See case studies</a>
        </div>

        <div class="hero-metrics">
          <article class="reveal-up">
            <strong>120%</strong>
            <span>average organic visibility growth across recent launches</span>
          </article>
          <article class="reveal-up" style="transition-delay: 120ms;">
            <strong>4.7x</strong>
            <span>return on focused funnel and campaign optimization</span>
          </article>
          <article class="reveal-up" style="transition-delay: 240ms;">
            <strong>90 days</strong>
            <span>to move from strategy gap to measurable demand generation</span>
          </article>
        </div>
      </div>

      <div class="hero-visual reveal-up" aria-hidden="true">
        <div class="orbital-grid"></div>
        <div class="signal-card signal-main">
          <span>Organic search</span>
          <strong>+184%</strong>
          <p>Keyword lift powered by technical SEO and content clusters.</p>
        </div>
        <div class="signal-card signal-side">
          <span>Paid social</span>
          <strong>32% lower CPA</strong>
          <p>Sharper creatives, cleaner landing journeys, faster learning loops.</p>
        </div>
        <div class="signal-card signal-bottom">
          <span>Brand recall</span>
          <strong>Creative that sticks</strong>
          <p>Visual campaigns designed to feel premium without losing clarity.</p>
        </div>
        <div class="halo-ring ring-one"></div>
        <div class="halo-ring ring-two"></div>
      </div>
    </section>

    <section class="trust-strip section reveal-up">
      <p>Built for modern growth across SEO, social, content, analytics, and conversion systems.</p>
      <div class="trust-items" aria-label="Capabilities">
        <span>Search visibility</span>
        <span>Performance campaigns</span>
        <span>Content strategy</span>
        <span>Landing page optimization</span>
        <span>Brand storytelling</span>
      </div>
    </section>

    <section class="feature-band section">
      <div class="feature-intro reveal-up">
        <span class="eyebrow">Why Growth Vibe</span>
        <h2>Creative enough to stand out. Structured enough to scale.</h2>
      </div>
      <div class="about-grid">
        <article class="glass-card reveal-up">
          <h3>Search-first brand strategy</h3>
          <p>We shape websites and campaigns around real demand, so your visibility starts compounding instead of restarting each month.</p>
        </article>
        <article class="glass-card reveal-up" style="transition-delay: 120ms;">
          <h3>Premium creative systems</h3>
          <p>Design, copy, and campaign concepts are built to feel modern, memorable, and strong enough to support premium positioning.</p>
        </article>
        <article class="glass-card reveal-up" style="transition-delay: 240ms;">
          <h3>Clear growth accountability</h3>
          <p>Every page and campaign is tied back to visibility, lead quality, engagement, and conversion signals that matter.</p>
        </article>
      </div>
    </section>

    <section class="marquee-section section reveal-up" aria-label="Marketing services ticker">
      <div class="marquee-track">
        <span>SEO Strategy</span>
        <span>Paid Growth</span>
        <span>Content Marketing</span>
        <span>Creative Direction</span>
        <span>Analytics</span>
        <span>Conversion Design</span>
        <span>SEO Strategy</span>
        <span>Paid Growth</span>
        <span>Content Marketing</span>
        <span>Creative Direction</span>
        <span>Analytics</span>
        <span>Conversion Design</span>
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
      <h1>Marketing services designed to grow traffic, trust, and revenue together.</h1>
      <p>
        From SEO foundations to paid performance and conversion refinement, we build systems that make your digital presence work harder.
      </p>
    </section>

    <section class="section">
      <div class="services-grid">
        <article class="service-card reveal-up">
          <div class="service-icon">01</div>
          <h3>SEO Strategy</h3>
          <p>Technical audits, information architecture, keyword planning, and on-page systems.</p>
        </article>
        <article class="service-card reveal-up" style="transition-delay: 80ms;">
          <div class="service-icon">02</div>
          <h3>Content Marketing</h3>
          <p>Topic clusters, thought-leadership planning, and search-informed editorial direction.</p>
        </article>
        <article class="service-card reveal-up" style="transition-delay: 160ms;">
          <div class="service-icon">03</div>
          <h3>Paid Campaigns</h3>
          <p>Creative testing, landing page alignment, and better paid acquisition efficiency.</p>
        </article>
        <article class="service-card reveal-up">
          <div class="service-icon">04</div>
          <h3>Brand Positioning</h3>
          <p>Sharper messaging, clearer offers, and premium-facing communication systems.</p>
        </article>
        <article class="service-card reveal-up" style="transition-delay: 80ms;">
          <div class="service-icon">05</div>
          <h3>Conversion Optimization</h3>
          <p>CTA systems, page structure improvements, and more confident journeys from click to inquiry.</p>
        </article>
        <article class="service-card reveal-up" style="transition-delay: 160ms;">
          <div class="service-icon">06</div>
          <h3>Marketing Analytics</h3>
          <p>Measurement frameworks that show what is driving visibility, leads, and real growth.</p>
        </article>
      </div>
    </section>

    <section class="pricing-showcase section">
      <div class="section-heading reveal-up">
        <span class="eyebrow">Engagement style</span>
        <h2>Flexible ways to work together depending on what your business needs now.</h2>
      </div>
      <div class="package-grid">
        <article class="package-card reveal-up">
          <h3>Foundation Sprint</h3>
          <p>For businesses that need clear positioning, page structure, and a sharper online base.</p>
        </article>
        <article class="package-card reveal-up" style="transition-delay: 140ms;">
          <h3>Growth Engine</h3>
          <p>For brands ready to combine SEO, content, and campaign execution into one system.</p>
        </article>
        <article class="package-card reveal-up" style="transition-delay: 280ms;">
          <h3>Ongoing Partner</h3>
          <p>For teams that want a strategic creative partner refining performance month after month.</p>
        </article>
      </div>
    </section>
  `,
  'case-studies': `
    <section class="page-banner section reveal-up">
      <span class="eyebrow">Case studies</span>
      <h1>Selected work showing how strategy and presentation can lift performance together.</h1>
      <p>
        These examples are framed around visibility, lead quality, and perception shifts rather than vanity metrics alone.
      </p>
    </section>

    <section class="case-study-stack section">
      <article class="case-deep-dive reveal-up">
        <div class="case-meta">
          <span class="case-tag">B2B SaaS</span>
          <strong>Search-led repositioning</strong>
        </div>
        <h2>From unclear messaging to a search system that produced more qualified demos.</h2>
        <p>Growth Vibe reworked the homepage story, clarified service language, and aligned content with high-intent search demand.</p>
        <ul class="case-points">
          <li>+184% organic impressions</li>
          <li>+71% demo requests from non-brand search</li>
          <li>38% lower bounce on key solution pages</li>
        </ul>
      </article>

      <article class="case-deep-dive alt reveal-up">
        <div class="case-meta">
          <span class="case-tag">E-commerce</span>
          <strong>Paid creative optimization</strong>
        </div>
        <h2>Lower customer acquisition costs through sharper creative framing and landing-page flow.</h2>
        <p>We tightened audience-message fit, refreshed visual hooks, and removed friction between ad promise and product page experience.</p>
        <ul class="case-points">
          <li>32% lower CPA</li>
          <li>+48% higher add-to-cart rate</li>
          <li>More efficient spend across best-performing campaigns</li>
        </ul>
      </article>

      <article class="case-deep-dive reveal-up">
        <div class="case-meta">
          <span class="case-tag">Local services</span>
          <strong>Regional discovery growth</strong>
        </div>
        <h2>Better local visibility without making the brand feel small or generic.</h2>
        <p>We created location-led landing structure, optimized service pages, and supported trust-building with cleaner proof and stronger CTAs.</p>
        <ul class="case-points">
          <li>Significant Maps and local search improvement</li>
          <li>Higher lead quality from location pages</li>
          <li>Stronger premium perception at first visit</li>
        </ul>
      </article>
    </section>
  `,
  contact: `
    <section class="page-banner section reveal-up">
      <span class="eyebrow">Contact us</span>
      <h1>Let’s build a digital presence that feels stronger and performs better.</h1>
      <p>
        Reach out if you want help with SEO, campaigns, content, or a cleaner growth story across your website.
      </p>
    </section>

    <section class="contact-layout section">
      <div class="contact-panel reveal-up">
        <div class="contact-item">
          <span>Email</span>
          <a href="mailto:hello@grothervibe.com">hello@grothervibe.com</a>
        </div>
        <div class="contact-item">
          <span>Phone</span>
          <a href="tel:+910000000000">+91 00000 00000</a>
        </div>
        <div class="contact-item">
          <span>Services</span>
          <p>SEO, content strategy, paid campaigns, conversion design, and growth positioning.</p>
        </div>
        <a class="button button-primary contact-cta" href="mailto:hello@grothervibe.com">Start your project</a>
      </div>

      <div class="faq-panel reveal-up" style="transition-delay: 140ms;">
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
    </section>
  `,
}

function navMarkup() {
  return navItems
    .map(
      (item) =>
        `<a href="${item.href}" class="${item.key === page ? 'is-active' : ''}">${item.label}</a>`,
    )
    .join('')
}

document.querySelector('#app').innerHTML = `
  <div class="site-shell">
    <div class="ambient ambient-one"></div>
    <div class="ambient ambient-two"></div>
    <div class="ambient ambient-three"></div>
    <div class="ambient ambient-four"></div>

    <header class="top-ribbon">
      <a class="brand" href="./index.html" aria-label="Growth Vibe home">
        <span class="brand-mark">GV</span>
        <span class="brand-text">
          <strong>Growth Vibe</strong>
          <small>SEO and growth marketing</small>
        </span>
      </a>

      <nav class="ribbon-nav" aria-label="Primary">
        ${navMarkup()}
      </nav>
    </header>

    <main>
      ${pageContent[page] ?? pageContent.home}

      <section class="cta-banner section reveal-up">
        <div class="cta-copy">
          <span class="eyebrow">Ready to grow</span>
          <h2>Bring clarity, creativity, and measurable momentum into the same website.</h2>
        </div>
        <a class="button button-primary" href="./contact.html">Talk to Growth Vibe</a>
      </section>
    </main>

    <footer class="site-footer">
      <div>
        <strong>Growth Vibe</strong>
        <p>Creative marketing systems for brands that want to be seen and remembered.</p>
      </div>
      <div class="footer-links">
        <a href="./index.html">Home</a>
        <a href="./about.html">About Us</a>
        <a href="./services.html">Services</a>
        <a href="./case-studies.html">Case Studies</a>
        <a href="./contact.html">Contact</a>
      </div>
      <p class="footer-note">Built for visibility, storytelling, and conversion.</p>
    </footer>
  </div>
`

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

document.querySelectorAll('.reveal-up').forEach((element) => observer.observe(element))
