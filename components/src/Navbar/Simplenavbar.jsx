import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const handleSelectChange = (e) => {
    const path = e.target.value;
    if (path) navigate(path);
    e.target.selectedIndex = 0; // Reset to placeholder
  };

  const toggleMenu = () => setIsOpen(prev => !prev);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    nav: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: '#222',
      color: '#fff',
      padding: '10px 0',
      fontFamily: 'Pacifico, cursive',
      zIndex: 999,
    },
    container: {
      maxWidth: '90vw',
      margin: '0 auto',
      padding: '0 1rem',
    },
    brand: {
      textAlign: 'center',
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    toggleBtn: {
      background: 'transparent',
      border: 'none',
      color: '#fff',
      fontSize: '1.5rem',
      cursor: 'pointer',
      display: isMobile ? 'block' : 'none',
      margin: '10px auto',
    },
    menu: {
      display: isMobile ? (isOpen ? 'block' : 'none') : 'flex',
      justifyContent: 'center',
      flexDirection: isMobile ? 'column' : 'row',
      gap: '1rem',
      textAlign: 'center',
      marginTop: isMobile ? '10px' : '0',
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '16px',
      padding: '8px 12px',
    },
    select: {
      fontSize: '16px',
      padding: '6px 10px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      backgroundColor: '#fff',
      color: '#222',
    },
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <div style={styles.brand}>Alien ball Reactmations</div>
        {isMobile && (
          <button onClick={toggleMenu} style={styles.toggleBtn}>☰</button>
        )}
        <div style={styles.menu}>
          {/* Static anchor links */}

          {/* Grouped route selectors */}
          <select style={styles.select} onChange={handleSelectChange}>
            <option value="">Background</option>
            <option value="/background/stars">Stars</option>
          </select>

          <select style={styles.select} onChange={handleSelectChange}>
            <option value="">Canvas</option>
            <option value="/canvas/simple">Simple</option>
            <option value="/canvas/ss">SS Canvas</option>
          </select>

          <select style={styles.select} onChange={handleSelectChange}>
            <option value="">Loading</option>
            <option value="/loading/hic">Hic</option>
            <option value="/loading/hict">Hict</option>
            <option value="/loading/horload">Horload</option>
            <option value="/loading/phl">PHL</option>
            <option value="/loading/simple">Simple Loader</option>
            <option value="/loading/circle">Circle</option>
          </select>

          <select style={styles.select} onChange={handleSelectChange}>
            <option value="">Switch</option>
            <option value="/switch">Simple Switch</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
