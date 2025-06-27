import React, { useState } from 'react';

const SimpleSwitch = ({
  size = 10,
  colorOn = '#ACCD70',
  colorOff = '#CD7070',
  labelOn = 'ON',
  labelOff = 'OFF',
}) => {
  const clampedSize = Math.max(1, Math.min(size, 50));
  const unit = 10;
  const width = clampedSize * unit;
  const aspectRatio = 8 / 3;
  const height = width / aspectRatio;

  const [toggled, setToggled] = useState(false);

  const circleSize = height * 0.8;
  const margin = (height - circleSize) / 2;
  const leftStart = margin;
  const leftEnd = width - circleSize - margin;

  const handleClick = () => setToggled(prev => !prev);

  const circleStyle = {
    width: `${circleSize}px`,
    height: `${circleSize}px`,
    position: 'absolute',
    top: `${margin}px`,
    left: toggled ? `${leftEnd}px` : `${leftStart}px`,
    background: toggled ? colorOn : colorOff,
    borderRadius: '9999px',
    transition: 'all 0.5s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    fontSize: `${circleSize * 0.25}px`,
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        position: 'relative',
        background: '#D9D9D9',
        borderRadius: '100px',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
    >
      <div style={circleStyle}>
        {toggled ? labelOn : labelOff}
      </div>
    </div>
  );
};

export default SimpleSwitch;