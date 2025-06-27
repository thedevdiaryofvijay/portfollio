import React from 'react';

const HorizontalLoader = ({
  dotCount = 5,
  dotSize = 16,
  color = '#CD7070',
  spacing = 15,
  animationDuration = 0.6
}) => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: `${spacing}px`,
    height: `${dotSize * 2}px`
  };

  const dotStyle = (index) => ({
    width: `${dotSize}px`,
    height: `${dotSize}px`,
    backgroundColor: color,
    borderRadius: '50%',
    animation: `pulse ${animationDuration}s ease-in-out infinite`,
    animationDelay: `${(animationDuration / dotCount) * index}s`
  });

  return (
    <div style={containerStyle}>
      {[...Array(dotCount)].map((_, i) => (
        <div key={i} style={dotStyle(i)} />
      ))}

      <style>
        {`
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.4); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default HorizontalLoader;