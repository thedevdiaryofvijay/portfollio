import React from 'react';

const PulsingHollowLoader = ({
  dotCount = 5,
  dotSize = 24,
  ringThickness = 4,
  borderColors = ['#CD7070'],
  spacing = 10,
  animationDuration = 0.6,
  pulseScale = 1.4,
  baseOpacity = 0.6
}) => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: `${spacing}px`,
    height: `${dotSize * 2}px`
  };

  const dotStyle = (i) => ({
    width: `${dotSize}px`,
    height: `${dotSize}px`,
    borderRadius: '50%',
    backgroundColor: 'transparent',
    border: `${ringThickness}px solid ${
      borderColors[i % borderColors.length]
    }`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    animation: `pulse ${animationDuration}s ease-in-out infinite`,
    animationDelay: `${(animationDuration / dotCount) * i}s`,
    boxSizing: 'border-box'
  });

  return (
    <div style={containerStyle}>
      {[...Array(dotCount)].map((_, i) => (
        <div key={i} style={dotStyle(i)} />
      ))}

      <style>
        {`
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
              opacity: ${baseOpacity};
            }
            50% {
              transform: scale(${pulseScale});
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default PulsingHollowLoader;