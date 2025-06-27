import React, { useEffect, useRef } from 'react';

const InfiniteStarfield = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const createStar = () => {
      const star = document.createElement('div');
      const size = Math.random() * 2 + 1;
      const duration = Math.random() * 3 + 2;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const color = `hsl(${Math.random() * 360}, 100%, 80%)`;

      Object.assign(star.style, {
        position: 'absolute',
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        background: color,
        left: `${left}%`,
        top: `${top}%`,
        opacity: 0.8,
        animation: `shoot ${duration}s linear forwards`,
        pointerEvents: 'none',
      });

      star.classList.add('star');
      container.appendChild(star);

      setTimeout(() => {
        container.removeChild(star);
      }, duration * 1000);
    };

    const interval = setInterval(createStar, 100); // Adjust frequency here
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: -1,
        background: 'radial-gradient(ellipse at bottom, #0d1b2a 0%, #000 100%)',
      }}
    >
      <style>
        {`
          @keyframes shoot {
            0% {
              transform: translate(0, 0) scale(1);
              opacity: 1;
            }
            100% {
              transform: translate(-100vw, 100vh) scale(0.3);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default InfiniteStarfield;
