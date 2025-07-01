import React from 'react';

const WaveTexth = ({
  text,
  fontSize = '4rem',
  fontWeight = 'bold',
  fontFamily = 'sans-serif',
  color = '#000',
  gradient = null, // e.g., 'linear-gradient(to right, #ff7e5f, #feb47b)'
}) => {
  const handleMouseEnter = (e, i) => {
    e.target.style.animation = `wave 1s ease ${i * 0.01}s forwards`;
  };

  const handleAnimationEnd = (e) => {
    e.target.style.animation = '';
  };

  const baseCharStyle = {
    display: 'inline-block',
    transition: 'transform 0.9s ease',
    whiteSpace: 'pre',
  };

  const wrapperStyle = {
    cursor: 'pointer',
    display: 'inline-block',
    margin: 0,
    fontSize,
    fontWeight,
    fontFamily,
    background: gradient,
    color: gradient ? 'transparent' : color,
    backgroundClip: gradient ? 'text' : 'unset',
    WebkitBackgroundClip: gradient ? 'text' : 'unset',
    WebkitTextFillColor: gradient ? 'transparent' : color,
  };

  return (
    <>
      <p style={wrapperStyle}>
        {Array.from(text).map((char, i) => (
          <span
            key={i}
            style={baseCharStyle}
            onMouseEnter={(e) => handleMouseEnter(e, i)}
            onAnimationEnd={handleAnimationEnd}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </p>

      <style>{`
        @keyframes wave {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </>
  );
};


export default WaveTexth;
