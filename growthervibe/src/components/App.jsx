import Header from './Header'
import Footer from './Footer'
import '../styles/app.css'

const services = [
  'Brand strategy and market positioning',
  'High-converting website design and development',
  'Performance marketing and funnel optimization',
  'Content systems for organic growth',
]

const caseStudies = [
  {
    title: 'SaaS pipeline acceleration',
    result: '3.2x demo bookings in 90 days',
    text: 'We rebuilt the messaging, landing flow, and paid creative system to turn cold traffic into qualified pipeline.',
  },
  {
    title: 'D2C launch momentum',
    result: '182% jump in repeat purchases',
    text: 'Growther Vibe paired retention journeys with a premium storefront refresh to keep the brand memorable and shoppable.',
  },
  {
    title: 'Local service expansion',
    result: '5-city rollout with one playbook',
    text: 'We designed a scalable lead-gen site and localized acquisition engine that could expand without losing consistency.',
  },
]

const team = [
  { name: 'Strategy Lead', detail: 'Turns research into sharp growth direction.' },
  { name: 'Creative Studio', detail: 'Builds design systems, ads, and motion-first visuals.' },
  { name: 'Performance Team', detail: 'Owns acquisition, testing, and reporting clarity.' },
  { name: 'Web Engineers', detail: 'Ship fast, polished websites built for conversion.' },
]

const industries = [
  'Technology',
  'Healthcare',
  'Real estate',
  'Education',
  'Hospitality',
  'E-commerce',
]

const blogPosts = [
  'How storytelling lifts conversion on modern landing pages',
  'What growing brands should measure beyond clicks',
  'Why speed, clarity, and trust decide most website wins',
]

function App() {
  return (
    <div className="page-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="ambient ambient-three" aria-hidden="true" />

      <Header />

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Creative growth agency</p>
            <h1>
              We build bold websites and campaigns that help brands grow with
              real momentum.
            </h1>
            <p className="hero-text">
              Growther Vibe blends strategy, design, storytelling, and
              performance marketing into one high-energy digital presence.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#website">
                Explore our website approach
              </a>
              <a className="button button-secondary" href="#case-studies">
                View case studies
              </a>
            </div>

            <div className="hero-stats">
              <article>
                <strong>120+</strong>
                <span>campaign launches supported</span>
              </article>
              <article>
                <strong>38%</strong>
                <span>average lift in conversion focus</span>
              </article>
              <article>
                <strong>24/7</strong>
                <span>creative iteration mindset</span>
              </article>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="orbit-card card-large">
              <span>Brand</span>
              <strong>Strategy</strong>
            </div>
            <div className="orbit-card card-mid">
              <span>Web</span>
              <strong>Experience</strong>
            </div>
            <div className="orbit-card card-small">
              <span>Growth</span>
              <strong>Engine</strong>
            </div>
            <div className="pulse-ring pulse-one" />
            <div className="pulse-ring pulse-two" />
            <div className="hero-core">
              <p>Growther Vibe</p>
              <strong>Designing growth with style and speed</strong>
            </div>
          </div>
        </section>

        <section className="content-section" id="case-studies">
          <div className="section-heading">
            <p className="eyebrow">Case studies</p>
            <h2>Proof that strategy and visuals can move together.</h2>
          </div>

          <div className="card-grid three-up">
            {caseStudies.map((item) => (
              <article className="info-card" key={item.title}>
                <p className="card-kicker">{item.result}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section split-layout" id="our-team">
          <div className="section-heading">
            <p className="eyebrow">Our team</p>
            <h2>The people behind the energy, systems, and execution.</h2>
            <p>
              Our team works across growth strategy, content, design, media,
              and web delivery so every launch feels connected instead of
              stitched together.
            </p>
          </div>

          <div className="stack-list">
            {team.map((item) => (
              <article className="stack-item" key={item.name}>
                <h3>{item.name}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="services">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>Everything needed to turn attention into demand.</h2>
          </div>

          <div className="service-strip">
            {services.map((service) => (
              <div className="service-pill" key={service}>
                {service}
              </div>
            ))}
          </div>
        </section>

        <section className="content-section split-layout" id="industries">
          <div className="section-heading">
            <p className="eyebrow">Industries</p>
            <h2>Built for ambitious brands across fast-moving sectors.</h2>
          </div>

          <div className="industry-grid">
            {industries.map((industry) => (
              <article className="industry-card" key={industry}>
                <span />
                <h3>{industry}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section split-layout" id="blog">
          <div className="section-heading">
            <p className="eyebrow">Blog</p>
            <h2>Ideas, experiments, and website lessons worth sharing.</h2>
          </div>

          <div className="stack-list">
            {blogPosts.map((post) => (
              <article className="stack-item" key={post}>
                <h3>{post}</h3>
                <p>
                  Short-form insight pieces designed to help growing brands make
                  smarter digital decisions.
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section website-cta" id="website">
          <div className="section-heading">
            <p className="eyebrow">Website</p>
            <h2>Your website should look premium and work hard.</h2>
            <p>
              We design responsive, animated websites with strong storytelling,
              conversion structure, and a polished brand voice from the first
              scroll to the final click.
            </p>
          </div>

          <div className="website-panel">
            <div>
              <h3>What Growther Vibe websites focus on</h3>
              <ul>
                <li>Fast-loading sections with clear user journeys</li>
                <li>Animated highlights that make the brand feel alive</li>
                <li>Trust-building content blocks and sharper calls to action</li>
              </ul>
            </div>
            <a className="button button-primary" href="#home">
              Back to top
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
