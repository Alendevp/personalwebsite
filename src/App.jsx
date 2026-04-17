import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Projects = lazy(() => import('./pages/Projects.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));

export default function App() {
  return (
    <Suspense fallback={<div className="page-transition" style={{ transform: 'translateY(0%)' }} />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
