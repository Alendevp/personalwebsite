import { useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import { useScrollReveal } from '../hooks/useScrollReveal.js';

function bodyPageClass(pathname) {
  if (pathname === '/projects') return 'page-life';
  if (pathname === '/about') return 'page-home';
  if (pathname === '/contact') return 'page-contact';
  return 'page-home';
}

export default function Layout() {
  const { pathname } = useLocation();
  useScrollReveal();

  useLayoutEffect(() => {
    const page = bodyPageClass(pathname);
    document.body.className = `page ${page}`;
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="page-transition" aria-hidden="true" />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
