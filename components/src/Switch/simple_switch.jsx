import React, { useState } from 'react';

const SimpleSwitch = ({
  size = 10,
  colorOn = '#ACCD70',
  colorOff = '#CD7070',
  labelOn = 'ON',
  labelOff = 'OFF',
  defaultToggled = false,
  onToggle = () => {}
}) => {
  const clampedSize = Math.max(1, Math.min(size, 50));
  const width = clampedSize * 10;
  const height = width / (8 / 3);
  const circleSize = height * 0.8;
  const margin = (height - circleSize) / 2;
  const leftStart = margin;
  const leftEnd = width - circleSize - margin;

  const [toggled, setToggled] = useState(defaultToggled);

  const handleClick = () => {
    setToggled((prev) => {
      const newValue = !prev;
      onToggle(newValue);
      return newValue;
    });
  };

  const switchStyle = {
    width: `${width}px`,
    height: `${height}px`,
    background: '#D9D9D9',
    borderRadius: '100px',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    position: 'relative',
    overflow: 'hidden'
  };

  const circleStyle = {
    width: `${circleSize}px`,
    height: `${circleSize}px`,
    position: 'absolute',
    top: `${margin}px`,
    left: toggled ? `${leftEnd}px` : `${leftStart}px`,
    background: toggled ? colorOn : colorOff,
    borderRadius: '50%',
    transition: 'all 0.4s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: `${circleSize * 0.3}px`,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    userSelect: 'none'
  };

  return (
    <button
      type="button"
      aria-pressed={toggled}
      onClick={handleClick}
      style={switchStyle}
    >
      <div style={circleStyle}>
        {toggled ? labelOn : labelOff}
      </div>
    </button>
  );
};

export default SimpleSwitch;