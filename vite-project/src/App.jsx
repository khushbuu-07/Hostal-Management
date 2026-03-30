import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './shared/components/layout/Navbar';
import Sidebar from './shared/components/layout/Sidebar';
import RoutesConfig from './routes';
import './shared/styles/global.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [zoomScale, setZoomScale] = useState(1);
  const [theme, setTheme] = useState('dark');

  const zoomIn = () => setZoomScale((prev) => Math.min(1.3, +(prev + 0.05).toFixed(2)));
  const zoomOut = () => setZoomScale((prev) => Math.max(0.8, +(prev - 0.05).toFixed(2)));
  const resetZoom = () => setZoomScale(1);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  return (
    <BrowserRouter>
      <div className="app-shell" style={{
        display: 'grid',
        gridTemplateColumns: isSidebarOpen ? (isSidebarExpanded ? '280px 1fr' : '88px 1fr') : '0px 1fr',
        minHeight: '100vh',
        transition: 'grid-template-columns 0.25s ease',
        transform: `scale(${zoomScale})`,
        transformOrigin: 'top left',
        backgroundColor: 'var(--bg)',
        color: 'var(--text)'
      }}>
        <Sidebar
          isOpen={isSidebarOpen}
          isExpanded={isSidebarExpanded}
          setIsExpanded={setIsSidebarExpanded}
        />


        <div>
          <Navbar
            onSidebarToggle={() => setIsSidebarOpen((prev) => !prev)}
            isSidebarOpen={isSidebarOpen}
            onThemeToggle={toggleTheme}
            theme={theme}
            onZoomIn={zoomIn}
            onZoomOut={zoomOut}
            onZoomReset={resetZoom}
          />
          <main style={{ padding: '16px' }}>
            <RoutesConfig />
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
