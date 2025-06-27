import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = {
  Background: [{ name: 'Shooting Stars', path: '/background/stars' }],
  Canvas: [
    { name: 'Simple Canvas', path: '/canvas/simple' },
    { name: 'Star Canvas', path: '/canvas/ss' },
  ],
  Loading: [
    { name: 'HIC Loader', path: '/loading/hic' },
    { name: 'HICT Loader', path: '/loading/hict' },
    { name: 'Horizontal Loader', path: '/loading/horload' },
    { name: 'PH Loader', path: '/loading/phl' },
    { name: 'Simple Loader', path: '/loading/simple' },
  ],
  Logo: [{ name: 'Logo', path: '/logo' }],
  Switch: [{ name: 'Toggle Switch', path: '/switch' }],
};

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const toggleSidebar = () => setOpen(!open);

  return (
    <div style={{
      width: open ? '220px' : '60px',
      background: '#1f1f1f',
      color: '#fff',
      height: '100vh',
      transition: 'width 0.3s ease',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <button
        onClick={toggleSidebar}
        style={{
          background: '#00b0ff',
          border: 'none',
          color: '#fff',
          padding: '0.5rem',
          cursor: 'pointer',
        }}
      >
        {open ? '⏴ Close' : '⏵'}
      </button>

      <div style={{ padding: open ? '1rem' : '0.5rem' }}>
        {Object.entries(categories).map(([group, routes]) => (
          <div key={group} style={{ marginBottom: '1rem' }}>
            {open && <h4 style={{ color: '#0ff' }}>{group}</h4>}
            {routes.map(({ name, path }) => (
              <Link
                key={path}
                to={path}
                style={{
                  display: 'block',
                  color: '#ccc',
                  textDecoration: 'none',
                  fontSize: open ? '1rem' : '0',
                  padding: '0.25rem 0',
                  transition: 'font-size 0.2s ease',
                }}
              >
                {open ? `• ${name}` : '•'}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
