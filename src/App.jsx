
import { useState } from 'react'
import './App.css'

function PinIcon() {
  return (
    <svg className="info-icon" viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg className="info-icon" viewBox="0 0 24 24">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg className="info-icon" viewBox="0 0 24 24">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg className="info-icon" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function GameIcon() {
  return (
    <svg className="info-icon" viewBox="0 0 24 24">
      <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 1.99-.9 1.99-2L23 8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
    </svg>
  )
}

function AboutIcon() {
  return (
    <svg className="channel-icon" viewBox="0 0 24 24">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function ProjectsIcon() {
  return (
    <svg className="channel-icon" viewBox="0 0 24 24">
      <path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </svg>
  )
}

function ExperienceIcon() {
  return (
    <svg className="channel-icon" viewBox="0 0 24 24">
      <rect x="3" y="7" width="18" height="14" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18M10 12v2h4v-2" />
    </svg>
  )
}

function ContactIcon() {
  return (
    <svg className="channel-icon" viewBox="0 0 24 24">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 7L2 7" />
    </svg>
  )
}

const projects = [
  {
    title: 'Escape Phoebus',
    image: '/images/EscapePhoebusThumbnail.png',
    featured: true,
    badge: '🏆 11th Place — 130 Entries',
    description:
      'A first-person dungeon crawler with over 50 skills and a turn system built around hitting enemy weaknesses. I programmed the combat system, menus, and enemy AI.',
    tech: 'Godot ・ GDScript ・ NES Game Jam 2026',
    link: 'https://macer-d.itch.io/escape-phoebus',
    linkText: 'Play Game ❯',
  },
  {
    title: 'And The World Kept Spinning',
    image: 'images/SpinningWorldThumbnail.gif',
    featured: true,
    badge: '🏆 Honorable Mention — Climate Jam 2026',
    description:
      'A microgame collection with a warning about climate inaction. Every task you finish harms the environment a little more.',
    tech: 'Godot ・ GDScript ・ IndieCade Climate Jam 2026',
    link: 'https://worldwarwarren.itch.io/and-the-world-kept-spinning',
    linkText: 'Play Game ❯',
  },
  {
    title: 'Morningstar',
    image: 'https://img.itch.zone/aW1nLzI3MzA5MzI0LnBuZw==/315x250%23c/LGXekS.png',
    description:
      'A being of light crosses a land of chaos, collecting Flags of Light in maze-like levels while shifting tremors fight your every step.',
    tech: 'Godot ・ GDScript ・ Jame Gam #58',
    link: 'https://worldwarwarren.itch.io/morningstar',
    linkText: 'Play Game ❯',
  },
  {
    title: 'Sando The Outlaw Angel',
    image: 'https://img.itch.zone/aW1nLzI5MTAzODY5LnBuZw==/315x250%23c/i7eTVG.png',
    description:
      'The Wild West meets the divine. As a disgraced angel with a heavenly revolver, you travel through troubled landscapes to stop corrupted angels.',
    tech: 'Unity ・ Class Project',
    link: 'https://worldwarwarren.itch.io/sando-the-outlaw-angel',
    linkText: 'Play Game ❯',
  },
  {
    title: 'Keep Climbing',
    image: 'https://img.itch.zone/aW1nLzI3MTU0NzU3LnBuZw==/315x250%23c/0XSYhE.png',
    description:
      'A platformer where you climb towers while avoiding rising lava.',
    tech: 'Unity ・ Class Project',
    link: 'https://worldwarwarren.itch.io/keepclimbing',
    linkText: 'Play Game ❯',
  },
  {
    title: 'HabitTracker',
    image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/003/791/894/datas/medium.png',
    description:
      'A habit tracking application built using HTML, CSS, and JavaScript.',
    tech: 'HTML ・ CSS ・ JavaScript',
    link: 'https://github.com/abekkary/HabitTracker',
    linkText: 'View on GitHub ❯',
  },
]

const experiences = [
  {
    company: 'The Agency',
    role: 'Full Stack Developer',
    date: 'Nov 2025 – Present',
    description:
      'Developed client web applications and contributed to projects supporting marketing and user experience.',
  },
  {
    company: 'IndieCade',
    role: 'Game Design Intern',
    date: 'Jun 2026 – Aug 2026',
    description:
      'Developed core gameplay systems and audio using Godot and GDScript for the Climate Jam 2026, earning an Honorable Mention.',
  },
  {
    company: 'UF Design-A-Thon',
    role: 'Internal Outreach',
    date: 'Oct 2025 – Mar 2026',
    description:
      'Promoted a 24-hour UI/UX and product design competition, reaching over 200 students.',
  },
]

function App() {
  const [activeTab, setActiveTab] = useState('About');

  return (
    <div>
      <header>
        <svg
          className="header-wave"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            className="wave-fill"
            d="M0 96 L620 96 C740 96 760 22 880 22 L1000 22 L1000 96 Z"
          />
          <path
            className="wave-line"
            d="M0 96 L620 96 C740 96 760 22 880 22 L1000 22"
          />
        </svg>

        <div className="header-info">
          <h1>Warren George</h1>
          <p>Software Developer ・ Game Designer ・ Creative</p>
        </div>

        <div className="social-links">
          <a href="mailto:warren.george09@gmail.com" aria-label="Email">✉</a>

          <a
            href="https://www.linkedin.com/in/warren-george"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            in
          </a>

          <a
            href="https://worldwarwarren.itch.io/"
            target="_blank"
            rel="noreferrer"
            aria-label="Itch Page"
          >
            🎮
          </a>
        </div>
      </header>

      <nav>
        <button
          className={activeTab === 'About' ? 'active' : ''}
          onClick={() => setActiveTab('About')}
        >
          <AboutIcon />
          <strong>About Me</strong>
        </button>

        <button
          className={activeTab === 'Projects' ? 'active' : ''}
          onClick={() => setActiveTab('Projects')}
        >
          <ProjectsIcon />
          <strong>Projects</strong>
        </button>

        <button
          className={activeTab === 'Experience' ? 'active' : ''}
          onClick={() => setActiveTab('Experience')}
        >
          <ExperienceIcon />
          <strong>Experience</strong>
        </button>

        <button
          className={activeTab === 'Contact' ? 'active' : ''}
          onClick={() => setActiveTab('Contact')}
        >
          <ContactIcon />
          <strong>Contact</strong>
        </button>
      </nav>

      <main className="dashboard">
        {activeTab === 'About' && (
          <>
            <section className="panel about-panel">
              <h2>About Me</h2>

              <div className="about-content">
                <div className="about-picture">
                  <img src="/images/headshot.jpg" alt="Warren George" />
                </div>

                <p>
                  Hi! I'm Warren George, a developer and designer
                  based in Orlando, FL. I love games, creative
                  projects, and building things on the web.
                </p>
              </div>
              <a
                className="learn-more"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>View Resume ❯</span>
              </a>
            </section>

            <div className="right-panels">
              <section className="panel">
                <h2>Quick Info</h2>
                <ul className="info-list">
                  <li><PinIcon /> Orlando, FL</li>
                  <li><PhoneIcon /> 407-692-6731</li>
                  <li><MailIcon /> warren.george09@gmail.com</li>
                  <li><LinkedInIcon /> /in/warren-george</li>
                </ul>
              </section>

              <section className="panel">
                <h2>Skills</h2>
                <div className="skill-list">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>Python</span>
                  <span>Godot</span>
                  <span>GDScript</span>
                  <span>Adobe Suite</span>
                  <span>Unity</span>
                </div>
              </section>
            </div>
          </>
        )}

        {activeTab === 'Projects' && (
          <section className="panel wide-panel">
            <h2>My Projects</h2>

            <div className="projects-grid">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className={
                    project.featured
                      ? 'project-card featured-project'
                      : 'project-card'
                  }
                >
                  <div className="project-thumbnail">
                    {project.image ? (
                      <img src={project.image} alt={`${project.title} thumbnail`} />
                    ) : (
                      project.emoji
                    )}
                  </div>

                  <div className="project-info">
                    <h3>{project.title}</h3>

                    {project.badge && (
                      <span className="achievement">{project.badge}</span>
                    )}

                    <p>{project.description}</p>
                    <p className="project-tech">{project.tech}</p>

                    <a href={project.link} target="_blank" rel="noreferrer">
                      {project.linkText}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'Experience' && (
  <section className="panel wide-panel">
    <h2>Experience</h2>

    {experiences.map((experience, index) => (
      <div className="experience-card" key={index}>
        <h3>
          {experience.company} — {experience.role}
        </h3>

        <span className="experience-date">
          {experience.date}
        </span>

        {experience.achievement && (
          <span className="achievement">
            {experience.achievement}
          </span>
        )}

        <p>{experience.description}</p>
      </div>
    ))}
  </section>
)}

        {activeTab === 'Contact' && (
          <section className="panel wide-panel">
            <h2>Get In Touch!</h2>
            <p>Interested in working together? Let's connect!</p>

            <div className="contact-links">
              <a className="contact-link" href="mailto:warren.george09@gmail.com">
                <MailIcon />
                <div>
                  <strong>Email</strong>
                  <span>warren.george09@gmail.com</span>
                </div>
              </a>

              <a
                className="contact-link"
                href="https://www.linkedin.com/in/warren-george"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
                <div>
                  <strong>LinkedIn</strong>
                  <span>/in/warren-george</span>
                </div>
              </a>

              <a
                className="contact-link"
                href="https://worldwarwarren.itch.io/"
                target="_blank"
                rel="noreferrer"
              >
                <GameIcon />
                <div>
                  <strong>itch.io</strong>
                  <span>Game portfolio</span>
                </div>
              </a>
            </div>
          </section>
        )}
      </main>

      <svg
        className="bottom-waves"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
      >
        <path
          className="wave-back"
          d="M0 90 C240 20 480 20 720 80 C960 140 1200 140 1440 60 L1440 200 L0 200 Z"
        />
        <path
          className="wave-front"
          d="M0 130 C200 80 420 90 640 130 C880 170 1160 150 1440 100 L1440 200 L0 200 Z"
        />
      </svg>
    </div>
  );
}

export default App
