import { useEffect } from 'react';
import Experience from '../components/Experience.jsx';

export default function About() {
  useEffect(() => {
    document.title = 'About — Personal Space';
  }, []);

  return (
    <>
      <section className="container section reveal-up">
        <header className="section-header">
          <h1>About Me</h1>
          <p className="muted">My journey, passion, and what drives me.</p>
        </header>
        <div style={{ marginBottom: '40px', maxWidth: '700px' }}>
          <p>
            I'm a Student, Builder, Analyst, and Artist. I'm passionate about technology, business ideas, and creative projects.
            This space showcases my work, the clubs I’ve been part of, the companies I’ve worked with, and things I enjoy doing in my free time.
          </p>
        </div>
      </section>
      
      <Experience />
    </>
  );
}
