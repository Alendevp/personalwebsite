import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact — Personal Space';
  }, []);

  return (
    <section className="container section reveal-up">
      <header className="section-header">
        <h1>Let’s Connect</h1>
        <p className="muted">
          {`I am not interested in managing each and all social media accounts I have, and I don't have the time to manage unnecessary chats and so on, so i created this personal website.`}
        </p>
      </header>

      <div className="contact-grid">
        <a className="card glass contact-card reveal" href="mailto:alendev66@gmail.com">
          <h3>Email</h3>
          <p className="muted">alendev66@gmail.com</p>
        </a>
        <a
          className="card glass contact-card reveal"
          href="https://www.linkedin.com/in/alen-dev-726a0a332"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>LinkedIn</h3>
          <div style={{ marginTop: '12px' }}>
            <span className="button primary">Connect on LinkedIn</span>
          </div>
        </a>
      </div>
    </section>
  );
}
