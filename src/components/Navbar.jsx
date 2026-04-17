import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header glass sticky">
      <nav className="nav">
        <Link className="brand" to="/" onClick={closeMenu}>
          Personal Space
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
