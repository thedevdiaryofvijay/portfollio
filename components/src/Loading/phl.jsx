import React from 'react';

const PulsingHollowLoader = ({
  dotCount = 4,
  dotSize = 20,
  ringThickness = 2,
  borderColors = ['#CD7070'],
  spacing = 10,
  animationDuration = 0.6,
  pulseScale = 1.4,
  baseOpacity = 0.6,
  animationName = 'pulse',
  direction = 'row', // horizontal or vertical
  justify = 'center',
  align = 'center',
  backgroundColor = 'transparent',
  borderRadius = '0%',
  style = {}
}) => {
  const containerStyle = {
    display: 'flex',
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
    gap: `${spacing}px`,
    backgroundColor,
    ...style
  };

  const dotStyle = (i) => ({
    width: `${dotSize}px`,
    height: `${dotSize}px`,
    borderRadius,
    backgroundColor: 'transparent',
    border: `${ringThickness}px solid ${
      borderColors[i % borderColors.length]
    }`,
    animation: `${animationName} ${animationDuration}s ease-in-out infinite`,
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
          @keyframes ${animationName} {
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