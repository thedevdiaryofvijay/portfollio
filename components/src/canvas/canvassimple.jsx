import React, { useRef, useEffect } from 'react';
import ShootingStarBackground from '../background/shootingstars'
const VariableCanvas = ({ width = 300, height = 150, background = '#111' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#0ff';
    ctx.font = '16px monospace';
    ctx.fillText(`Canvas: ${width}px x ${height}px`, 10, 30);
  }, [width, height]);

  return (
      <div style={{ position: 'relative'}}>
    <ShootingStarBackground />
    <canvas
      ref={canvasRef}
      style={{
        position: 'relative',
        zIndex: 1,
        display: 'block',
        background,
        width: `${width}px`,
        height: `${height}px`,
        margin: '0 auto',
        border: '2px dashed #888',
      }}
    />
  </div>
  );
};

export default VariableCanvas;
