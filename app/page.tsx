"use client";

import { FormEvent, useState } from "react";

const contactEmail = "";
const githubUrl = "";
const linkedinUrl = "";

const navigation = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Education", "education"],
  ["Certificates", "certifications"],
  ["Journey", "journey"],
  ["Services", "services"],
  ["Contact", "contact"],
] as const;

const skills = [
  {
    title: "Frontend",
    icon: "</>",
    items: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap", "Responsive design"],
  },
  {
    title: "Backend",
    icon: "{ }",
    items: ["Node.js", "Express.js", "REST APIs", "Authentication"],
  },
  {
    title: "Database",
    icon: "◈",
    items: ["MongoDB", "Mongoose", "Database design"],
  },
  {
    title: "Tools",
    icon: "⌘",
    items: ["Git", "GitHub", "VS Code", "Postman", "npm"],
  },
];

const projects = ["01", "02", "03", "04", "05"];

const journey = [
  {
    date: "THE BEGINNING",
    title: "Started my programming journey",
    description:
      "Began exploring programming fundamentals, web technologies, and the satisfaction of solving problems with code.",
  },
  {
    date: "OVER THE LAST 2 YEARS",
    title: "Learned full stack development",
    description:
      "Built a foundation in HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB.",
  },
  {
    date: "MAY 2026",
    title: "Joined HOC Tech Solutions",
    description:
      "Started gaining practical industry experience as a Software Development Intern in Karad.",
  },
  {
    date: "ALONG THE WAY",
    title: "Worked on five projects",
    description:
      "Put learning into practice through personal projects and continued to grow as a developer.",
  },
  {
    date: "WHAT'S NEXT",
    title: "Growing into a software engineer",
    description:
      "Keep learning, contribute to meaningful applications, and build a career in full stack software development.",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10 1.75v2m0 12.5v2m8.25-8.25h-2m-12.5 0h-2m14.08-5.83-1.41 1.41m-8.84 8.84-1.41 1.41m11.66 0-1.41-1.41M5.58 5.58 4.17 4.17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path
        d="M17.1 12.2A7.6 7.6 0 0 1 7.8 2.9a7.65 7.65 0 1 0 9.3 9.3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return open ? (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export default function Home() {
  const [lightMode, setLightMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!contactEmail) {
      setFormMessage("Add your email to the contactEmail setting near the top of app/page.tsx to activate the contact form.");
      return;
    }

    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(
      subject || `Portfolio enquiry from ${name}`,
    )}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailto;
    setFormMessage("Your email draft is ready. Review it and send it from your mail app.");
    event.currentTarget.reset();
  }

  return (
    <div className={`portfolio${lightMode ? " light-mode" : ""}`}>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Laxman Lokare, home">
          <span className="brand-mark">LL</span>
          <span className="brand-name">laxman<span>.</span></span>
        </a>

        <nav className={`main-nav${menuOpen ? " nav-open" : ""}`} aria-label="Main navigation">
          {navigation.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={() => setLightMode((mode) => !mode)}
            aria-label={`Switch to ${lightMode ? "dark" : "light"} mode`}
            title={`Switch to ${lightMode ? "dark" : "light"} mode`}
          >
            {lightMode ? <MoonIcon /> : <SunIcon />}
          </button>
          <a className="header-contact" href="#contact">
            Let&apos;s talk <ArrowIcon />
          </a>
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </header>

      <main>
        <section className="hero section-shell" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> FULL STACK DEVELOPER PORTFOLIO</div>
            <p className="hero-intro">Hello, I&apos;m</p>
            <h1>Laxman <span>Lokare</span><span className="hero-period">.</span></h1>
            <p className="hero-role">MERN Stack Developer <span className="role-slash">/</span> Software Engineer</p>
            <p className="hero-description">
              Building modern, scalable &amp; user-friendly web applications.
              <br className="desktop-break" /> Learning by building, growing with every line of code.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my projects <ArrowIcon /></a>
              <button className="button button-secondary" type="button" onClick={() => window.print()}>
                Download resume <span className="download-glyph">↓</span>
              </button>
            </div>
            <div className="hero-stats" aria-label="Career highlights">
              <div><strong>02<span>+</span></strong><span>Years learning &amp; building</span></div>
              <div><strong>05</strong><span>Projects explored</span></div>
              <div><strong>2026</strong><span>Internship since May</span></div>
            </div>
          </div>

          <div className="hero-art" aria-label="Decorative developer workspace illustration">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-glow" />
            <div className="code-window">
              <div className="window-top"><div className="window-dots"><i /><i /><i /></div><span>laxman.js</span><span className="window-menu">•••</span></div>
              <div className="code-lines" aria-hidden="true">
                <p><span className="code-muted">01</span> <span className="code-purple">const</span> <span className="code-blue">developer</span> = {"{"}</p>
                <p><span className="code-muted">02</span> &nbsp;name: <span className="code-green">&quot;Laxman Lokare&quot;</span>,</p>
                <p><span className="code-muted">03</span> &nbsp;focus: <span className="code-green">&quot;MERN stack&quot;</span>,</p>
                <p><span className="code-muted">04</span> &nbsp;learning: <span className="code-orange">true</span>,</p>
                <p><span className="code-muted">05</span> &nbsp;build() {"{"}</p>
                <p><span className="code-muted">06</span> &nbsp;&nbsp;<span className="code-purple">return</span> <span className="code-green">&quot;what&apos;s next?&quot;</span>;</p>
                <p><span className="code-muted">07</span> &nbsp;{"}"}</p>
                <p><span className="code-muted">08</span> {"}"}<span className="cursor-blink">_</span></p>
              </div>
              <div className="window-footer"><span><i /> JavaScript</span><span>UTF-8</span></div>
            </div>
            <div className="floating-chip chip-react"><span>⚛</span> React.js</div>
            <div className="floating-chip chip-node"><span>⬡</span> Node.js</div>
            <div className="art-caption"><span className="caption-line" /> CREATING WITH CURIOSITY</div>
          </div>
          <a href="#about" className="scroll-cue"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="section-shell about-section" id="about">
          <div className="section-heading">
            <span className="section-index">01 / ABOUT</span>
            <h2>Who am <span>I?</span></h2>
            <p>Passionate about code. Curious about technology.</p>
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <p className="lead-copy">
                I&apos;m Laxman, a full stack developer in the making from Karad, Maharashtra.
              </p>
              <p>
                I&apos;m currently in my final year of BCA at SGM College, Karad. Over the past two
                years, I&apos;ve been learning to build for the web with the MERN stack — MongoDB,
                Express.js, React.js, and Node.js.
              </p>
              <p>
                Since May 2026, I&apos;ve been gaining hands-on industry experience as a Software
                Development Intern at HOC Tech Solutions. I enjoy turning ideas into useful
                interfaces and keep working toward my goal: becoming a software engineer who
                builds reliable, thoughtful digital products.
              </p>
              <a className="text-link" href="#contact">A little more about me <ArrowIcon /></a>
            </div>
            <div className="profile-card">
              <div className="profile-card-top"><span className="profile-label">A QUICK INTRO</span><span className="profile-spark">✳</span></div>
              <div className="profile-monogram">S<span>P</span><i>.</i></div>
              <div className="profile-rule" />
              <dl className="profile-details">
                <div><dt>Based in</dt><dd>Karad, Maharashtra, India</dd></div>
                <div><dt>Currently</dt><dd>Final-year BCA student</dd></div>
                <div><dt>Speciality</dt><dd>MERN full stack development</dd></div>
                <div><dt>Working at</dt><dd>HOC Tech Solutions</dd></div>
                <div><dt>Looking toward</dt><dd>Full stack software engineering</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-shell">
            <div className="section-heading centered-heading">
              <span className="section-index">02 / TOOLKIT</span>
              <h2>Technologies I <span>work with</span></h2>
              <p>The tools I&apos;m learning, practicing, and building with.</p>
            </div>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <article className="skill-card" key={skill.title}>
                  <div className="skill-card-heading"><span className="skill-icon">{skill.icon}</span><span className="skill-number">0{index + 1}</span></div>
                  <h3>{skill.title}</h3>
                  <ul>{skill.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell experience-section" id="experience">
          <div className="section-heading">
            <span className="section-index">03 / EXPERIENCE</span>
            <h2>Where I&apos;ve <span>worked</span></h2>
            <p>Learning how software gets built in a real team.</p>
          </div>
          <article className="experience-card">
            <div className="experience-date"><span className="status-dot" /> MAY 2026 — PRESENT</div>
            <div className="experience-main">
              <span className="experience-type">INDUSTRY INTERNSHIP</span>
              <h3>Software Development Intern</h3>
              <p className="experience-company">HOC Tech Solutions Pvt. Ltd. <span>·</span> Karad, Maharashtra</p>
              <p className="experience-description">
                Gaining hands-on experience with web application development, frontend and backend
                integration, databases, and day-to-day software development workflows.
              </p>
              <div className="tag-list">
                <span>React.js</span><span>Node.js</span><span>Express.js</span><span>MongoDB</span><span>Git &amp; GitHub</span>
              </div>
            </div>
            <div className="experience-badge">01<span> CURRENT ROLE</span></div>
          </article>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-shell">
            <div className="section-heading projects-heading">
              <div><span className="section-index">04 / SELECTED WORK</span><h2>Things I&apos;ve <span>built</span></h2></div>
              <p>Small steps, real practice. Five project spots ready for your actual work.</p>
            </div>
            <div className="projects-grid">
              {projects.map((number, index) => (
                <article className={`project-card project-card-${index + 1}`} key={number}>
                  <div className="project-preview">
                    <div className="preview-frame">
                      <div className="preview-toolbar"><span /><span /><span /><i /></div>
                      <div className={`preview-art preview-art-${index + 1}`}>
                        <div className="preview-panel"><b /><i /><i /><i /></div>
                        <div className="preview-side"><span /><span /><span /></div>
                        <div className="preview-widget"><b /><span /></div>
                      </div>
                    </div>
                    <span className="project-count">PROJECT {number}</span>
                  </div>
                  <div className="project-info">
                    <div className="project-title-row"><h3>Project title goes here</h3><span className="project-arrow"><ArrowIcon /></span></div>
                    <p>Add a short, honest description of what this project does and the part you built.</p>
                    <div className="project-tags"><span>Your stack</span><span>Key features</span></div>
                  </div>
                </article>
              ))}
            </div>
            <p className="projects-note">
              Replace these placeholders with your five real projects, screenshots, and working GitHub or live-demo links.
            </p>
          </div>
        </section>

        <section className="section-shell education-section" id="education">
          <div className="section-heading">
            <span className="section-index">05 / EDUCATION</span>
            <h2>My academic <span>journey</span></h2>
            <p>A strong foundation, built one semester at a time.</p>
          </div>
          <article className="education-card">
            <div className="education-icon">BCA</div>
            <div className="education-info">
              <span className="education-status">CURRENTLY PURSUING · FINAL YEAR</span>
              <h3>Bachelor of Computer Applications</h3>
              <p>SGM College, Karad</p>
              <span className="education-note">Programming · Web development · Databases · Software engineering</span>
            </div>
            <span className="education-year">2026</span>
          </article>
        </section>

        <section className="cert-section" id="certifications">
          <div className="section-shell cert-inner">
            <div className="cert-icon">✳</div>
            <div>
              <span className="section-index">06 / LEARNING BEYOND THE CLASSROOM</span>
              <h2>Certifications &amp; <span>achievements</span></h2>
              <p>Add verified certificates, workshops, competitions, and awards here when you&apos;re ready.</p>
            </div>
            <a className="text-link" href="#contact">Have a question? <ArrowIcon /></a>
          </div>
        </section>

        <section className="section-shell journey-section" id="journey">
          <div className="section-heading centered-heading">
            <span className="section-index">07 / THE ROAD SO FAR</span>
            <h2>From learning <span>to building</span></h2>
            <p>Every project starts with a first step.</p>
          </div>
          <div className="timeline">
            {journey.map((item, index) => (
              <article className="timeline-item" key={item.title}>
                <div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
                <div className="timeline-content"><span className="timeline-date">{item.date}</span><h3>{item.title}</h3><p>{item.description}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="section-shell">
            <div className="section-heading centered-heading">
              <span className="section-index">08 / WHAT I CAN BUILD</span>
              <h2>Good ideas deserve <span>good websites</span></h2>
              <p>Areas I&apos;m developing my skills in and excited to take on.</p>
            </div>
            <div className="services-grid">
              <article><span className="service-index">01</span><h3>Website development</h3><p>Responsive websites for businesses and personal brands.</p><span className="service-arrow"><ArrowIcon /></span></article>
              <article><span className="service-index">02</span><h3>Full stack web apps</h3><p>Web applications with a React frontend and Node.js backend.</p><span className="service-arrow"><ArrowIcon /></span></article>
              <article><span className="service-index">03</span><h3>REST API development</h3><p>Backend endpoints and integrations for web applications.</p><span className="service-arrow"><ArrowIcon /></span></article>
              <article><span className="service-index">04</span><h3>Database integration</h3><p>MongoDB models and data handling for application features.</p><span className="service-arrow"><ArrowIcon /></span></article>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-shell contact-grid">
            <div className="contact-copy">
              <span className="section-index">09 / GET IN TOUCH</span>
              <h2>Let&apos;s build<br />something <span>great.</span></h2>
              <p>
                Have a project, opportunity, or idea? I&apos;m always happy to connect about
                software, collaboration, and what&apos;s next.
              </p>
              <div className="contact-details">
                <div><span className="contact-detail-icon">@</span><span><small>EMAIL</small><strong>Add your email address</strong></span></div>
                <div><span className="contact-detail-icon">⌖</span><span><small>LOCATION</small><strong>Karad, Maharashtra, India</strong></span></div>
              </div>
              <p className="contact-setup-note">Before publishing, add your email and social profile URLs to the contact details in this page.</p>
              <div className="social-links">
                {githubUrl && <a href={githubUrl} target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>}
                {linkedinUrl && <a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>}
              </div>
            </div>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="form-heading"><span>HAVE SOMETHING IN MIND?</span><span className="form-spark">✳</span></div>
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" type="text" placeholder="Jane Smith" autoComplete="name" required />
              <label htmlFor="email">Email address</label>
              <input id="email" name="email" type="email" placeholder="jane@example.com" autoComplete="email" required />
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" type="text" placeholder="What's this about?" required />
              <label htmlFor="message">Your message</label>
              <textarea id="message" name="message" rows={4} placeholder="Tell me a little about it..." required />
              <button className="button button-primary send-button" type="submit">Prepare email <ArrowIcon /></button>
              <p className="form-note" role="status">{formMessage || "This opens an email draft in your mail app; no information is stored on this website."}</p>
            </form>
          </div>
        </section>

        <section className="print-resume section-shell" aria-hidden="true">
          <p className="section-index">LAXMAN LOKARE · KARAD, MAHARASHTRA, INDIA</p>
          <h1>Laxman Lokare</h1>
          <h2>MERN Stack Developer | Software Engineer</h2>
          <p>
            Final-year Bachelor of Computer Applications student at SGM College, Karad, with
            approximately two years of learning and development experience. Software Development
            Intern at HOC Tech Solutions since May 2026. Interested in building reliable,
            user-friendly web applications.
          </p>
          <h3>Technical skills</h3>
          <p>HTML5 · CSS3 · JavaScript · React.js · Bootstrap · Node.js · Express.js · REST APIs · MongoDB · Mongoose · Git · GitHub · VS Code · Postman · npm</p>
          <h3>Experience</h3>
          <p><strong>Software Development Intern — HOC Tech Solutions Pvt. Ltd.</strong><br />Karad, Maharashtra · May 2026–Present<br />Gaining practical experience in web application development, frontend and backend integration, database management, and software development workflows.</p>
          <h3>Education</h3>
          <p><strong>Bachelor of Computer Applications (BCA), Final Year</strong><br />SGM College, Karad · Currently pursuing</p>
          <h3>Focus</h3>
          <p>MERN full stack development · Full stack software engineering</p>
          {(contactEmail || githubUrl || linkedinUrl) && <p className="print-links">{[contactEmail, githubUrl, linkedinUrl].filter(Boolean).join(" · ")}</p>}
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell footer-inner">
          <a className="brand" href="#home" aria-label="Laxman Lokare, back to top"><span className="brand-mark">LL</span><span className="brand-name">laxman<span>.</span></span></a>
          <p>MERN Stack Developer <span>·</span> Software Engineer in the making</p>
          <a className="back-top" href="#home">Back to top ↑</a>
        </div>
        <div className="section-shell footer-bottom"><span>© 2026 Laxman Lokare. Made with care &amp; curiosity.</span><span>DESIGNED TO KEEP GROWING <i>✳</i></span></div>
      </footer>
    </div>
  );
}
