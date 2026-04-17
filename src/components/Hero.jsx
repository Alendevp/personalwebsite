import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero container reveal-up">
      <div className="hero-content">
        <p className="eyebrow">Welcome to my personal space</p>
        <h1 className="display">
          Hi, I’m <span className="accent-gradient name">Alen Dev P</span>
        </h1>
        <p className="subtitle">Student • Builder • Analyst • Artist</p>
        <p className="intro">
          {`I'm passionate about technology, business ideas, and creative projects.
This space showcases my work, the clubs I’ve been part of, the companies I’ve worked with, and things I enjoy doing in my free time.

Scroll down to explore my journey, my experiences, and the things that inspire me.`}
        </p>
        <div className="hero-cta">
          <Link className="button primary" to="/projects">
            See my projects
          </Link>
          <Link className="button ghost" to="/contact">
            Let’s connect
          </Link>
        </div>
      </div>
      <div className="hero-visual">
        <div className="profile-wrap glass">
          <img src="/assets/prof1.jpeg" alt="Profile photo" className="profile" loading="lazy" />
        </div>
        <div className="orbits" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </section>
  );
}
