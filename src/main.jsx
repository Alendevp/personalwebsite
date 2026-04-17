import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/modern.css';

const rootEl = document.getElementById('root');
if (!rootEl) {
  throw new Error('Missing #root element in index.html');
}

createRoot(rootEl).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
