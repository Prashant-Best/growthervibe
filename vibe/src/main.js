import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="site-shell">
    <div class="ambient ambient-one"></div>
    <div class="ambient ambient-two"></div>
    <div class="ambient ambient-three"></div>

    <header class="top-ribbon">
      <a class="brand" href="#home" aria-label="Grother Vibe home">
        <span class="brand-mark">GV</span>
        <span class="brand-text">
          <strong>Grother Vibe</strong>
          <small>SEO and growth marketing</small>
        </span>
      </a>

      <nav class="ribbon-nav" aria-label="Primary">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#case-studies">Case Studies</a>
        <a href="#contact">Contact Us</a>
      </nav>
    </header>

    <main>
      <section class="hero-section section" id="home">
        <div class="hero-copy">
          <span class="eyebrow">Performance-first digital marketing studio</span>
          <h1>We turn attention into momentum for ambitious brands.</h1>
          <p class="hero-text">
            Grother Vibe blends SEO, content strategy, paid growth, and brand storytelling
            into campaigns that look sharp, rank well, and convert with purpose.
          </p>

          <div class="hero-actions">
            <a class="button button-primary" href="#contact">Book a strategy call</a>
            <a class="button button-secondary" href="#case-studies">See case studies</a>
          </div>

          <div class="hero-metrics">
            <article>
              <strong>120%</strong>
              <span>average organic visibility growth across recent launches</span>
            </article>
            <article>
              <strong>4.7x</strong>
              <span>return on focused funnel and campaign optimization</span>
            </article>
            <article>
              <strong>90 days</strong>
              <span>to move from strategy gap to measurable demand generation</span>
            </article>
          </div>
        </div>

        <div class="hero-visual" aria-hidden="true">
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

      <section class="trust-strip section">
        <p>Built for modern growth across SEO, social, content, and conversion systems.</p>
        <div class="trust-items" aria-label="Capabilities">
          <span>Search visibility</span>
          <span>Performance campaigns</span>
          <span>Content strategy</span>
          <span>Landing page optimization</span>
          <span>Brand storytelling</span>
        </div>
      </section>

      <section class="about-section section" id="about">
        <div class="section-heading">
          <span class="eyebrow">About us</span>
          <h2>A creative growth partner that keeps strategy, design, and SEO in the same room.</h2>
        </div>

        <div class="about-grid">
          <article class="glass-card">
            <h3>What we do</h3>
            <p>
              We help companies grow through better discovery, stronger messaging, and cleaner
              conversion experiences. That means less guesswork and more systems that compound.
            </p>
          </article>
          <article class="glass-card">
            <h3>How we work</h3>
            <p>
              Every engagement starts with audience understanding, search opportunity mapping,
              and channel prioritization so the creative work has a real business target.
            </p>
          </article>
          <article class="glass-card">
            <h3>Why brands choose us</h3>
            <p>
              We combine a polished brand feel with measurable marketing execution, so your
              website works as both a flagship and a conversion engine.
            </p>
          </article>
        </div>
      </section>

      <section class="services-section section" id="services">
        <div class="section-heading">
          <span class="eyebrow">Services</span>
          <h2>Marketing services designed to grow traffic, trust, and revenue together.</h2>
        </div>

        <div class="services-grid">
          <article class="service-card">
            <div class="service-icon">01</div>
            <h3>SEO Strategy</h3>
            <p>Technical audits, keyword maps, on-page systems, and authority-focused roadmaps.</p>
          </article>
          <article class="service-card">
            <div class="service-icon">02</div>
            <h3>Content Marketing</h3>
            <p>Topic clusters, conversion-led copy, and editorial plans built around search intent.</p>
          </article>
          <article class="service-card">
            <div class="service-icon">03</div>
            <h3>Performance Campaigns</h3>
            <p>Paid media creatives and landing pages tuned for stronger acquisition economics.</p>
          </article>
          <article class="service-card">
            <div class="service-icon">04</div>
            <h3>Brand Positioning</h3>
            <p>Sharper messaging, offer clarity, and visual direction that feels confident and modern.</p>
          </article>
          <article class="service-card">
            <div class="service-icon">05</div>
            <h3>Conversion Optimization</h3>
            <p>Funnel fixes, CTA testing, and user journey refinement that turns visits into actions.</p>
          </article>
          <article class="service-card">
            <div class="service-icon">06</div>
            <h3>Marketing Analytics</h3>
            <p>Reporting frameworks that connect channel activity with leads, revenue, and retention.</p>
          </article>
        </div>
      </section>

      <section class="case-section section" id="case-studies">
        <div class="section-heading">
          <span class="eyebrow">Case studies</span>
          <h2>Results-focused campaigns with a more premium creative edge.</h2>
        </div>

        <div class="case-grid">
          <article class="case-card featured-case">
            <span class="case-tag">B2B SaaS</span>
            <h3>Search-led repositioning that lifted qualified traffic in one quarter.</h3>
            <p>
              Grother Vibe rebuilt the content architecture, refreshed the homepage story, and
              aligned landing pages with high-intent search clusters.
            </p>
            <ul class="case-points">
              <li>+184% organic impressions</li>
              <li>+71% demo requests from non-brand search</li>
              <li>38% lower bounce on key solution pages</li>
            </ul>
          </article>

          <article class="case-card">
            <span class="case-tag">E-commerce</span>
            <h3>Creative performance ads that cut cost per acquisition.</h3>
            <p>New messaging angles, faster landing pages, and creative testing across Meta and Google.</p>
          </article>

          <article class="case-card">
            <span class="case-tag">Local services</span>
            <h3>Localized SEO that made a regional brand look category-leading.</h3>
            <p>Location pages, review strategy, and technical fixes that improved maps and organic reach.</p>
          </article>
        </div>
      </section>

      <section class="contact-section section" id="contact">
        <div class="contact-copy">
          <span class="eyebrow">Contact us</span>
          <h2>Ready to build a sharper digital presence for Grother Vibe style growth?</h2>
          <p>
            Whether you need stronger SEO, better campaigns, or a website that feels more premium,
            we can shape a marketing system that actually moves.
          </p>
        </div>

        <div class="contact-panel">
          <div class="contact-item">
            <span>Email</span>
            <a href="mailto:hello@grothervibe.com">hello@grothervibe.com</a>
          </div>
          <div class="contact-item">
            <span>Phone</span>
            <a href="tel:+910000000000">+91 00000 00000</a>
          </div>
          <div class="contact-item">
            <span>Focus</span>
            <p>SEO, content, paid growth, web positioning, and case-study driven marketing.</p>
          </div>
          <a class="button button-primary contact-cta" href="mailto:hello@grothervibe.com">
            Start your project
          </a>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div>
        <strong>Grother Vibe</strong>
        <p>Creative marketing systems for brands that want to be seen and remembered.</p>
      </div>
      <div class="footer-links">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#case-studies">Case Studies</a>
        <a href="#contact">Contact</a>
      </div>
      <p class="footer-note">Built for visibility, storytelling, and conversion.</p>
    </footer>
  </div>
`
