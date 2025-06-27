import React from 'react';

const HorizontalLoaderic = ({
  dotCount = 5,
  dotSize = 16,
  outerColor = '#CD7070',
  innerColor = '#1E1E1E',
  spacing = 10,
  animationDuration = 0.6,
  innerSizeOffset = 6
}) => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: `${spacing}px`,
    height: `${dotSize * 2}px`
  };

  const dotWrapperStyle = {
    width: `${dotSize}px`,
    height: `${dotSize}px`,
    borderRadius: '50%',
    backgroundColor: outerColor,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    animation: `pulse ${animationDuration}s ease-in-out infinite`
  };

  const innerCircleStyle = {
    width: `${dotSize - innerSizeOffset}px`,
    height: `${dotSize - innerSizeOffset}px`,
    borderRadius: '50%',
    backgroundColor: innerColor
  };

  return (
    <div style={containerStyle}>
      {[...Array(dotCount)].map((_, i) => (
        <div
          key={i}
          style={{
            ...dotWrapperStyle,
            animationDelay: `${(animationDuration / dotCount) * i}s`
          }}
        >
          <div style={innerCircleStyle} />
        </div>
      ))}

      <style>
        {`
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.6; }
            50% { transform: scale(1.4); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default HorizontalLoaderic;