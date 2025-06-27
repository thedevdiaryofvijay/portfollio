import React, { useRef, useEffect } from 'react';

const ShootingStarCanvas = ({ width = 100, height = 100 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let stars = [];

    const createStar = () => {
      const size = Math.random() * 2 + 1;
      stars.push({
        x: Math.random() * canvas.width,
        y: 0,
        vx: -Math.random() * 3 - 1,
        vy: Math.random() * 3 + 1,
        size,
        opacity: 1,
        color: `hsl(${Math.random() * 360}, 100%, 80%)`,
      });
    };

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star, i) => {
        ctx.beginPath();
        ctx.globalAlpha = star.opacity;
        ctx.fillStyle = star.color;
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        star.x += star.vx;
        star.y += star.vy;
        star.opacity -= 0.015;

        if (star.opacity <= 0) stars.splice(i, 1);
      });

      ctx.globalAlpha = 1;
      requestAnimationFrame(draw);
    };

    const interval = setInterval(createStar, 200);
    draw();

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: `${width}vw`,
        height: `${height}vh`,
        background: 'radial-gradient(ellipse at bottom, #0d1b2a 0%, #000 100%)',
        overflow: 'hidden',
        position: 'relative',
        border: '2px solid #888',
        borderRadius:'1%'
      }}
    >
      <canvas
        ref={canvasRef}
        width={window.innerWidth * (width / 100)}
        height={window.innerHeight * (height / 100)}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
    </div>
  );
};

export default ShootingStarCanvas;
