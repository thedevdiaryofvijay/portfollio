import React from 'react';

const CircleLoader = ({
  size = 80,
  color = '#CD7070',
  duration = 1.2
}) => {
  const circleStyle = {
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: '50%',
    border: `${size * 0.1}px solid ${color}`,
    borderTop: `${size * 0.1}px solid transparent`,
    animation: `spin ${duration}s linear infinite`,
    boxSizing: 'border-box'
  };

  return (
    <div style={containerStyle}>
      <div style={circleStyle} />
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100px'
};

export default CircleLoader;