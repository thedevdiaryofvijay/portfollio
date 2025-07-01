import React, { useRef, useEffect, useState } from "react";

const WavyText = ({
  text = "Wavy Vibes",
  fontWeight = 900,
  fontSize = 50,
  noiseScale = 0.002,
  amplitude = 20,
  animateColor = true,
  gradient = true,
  gradientStops = [
    { color: "#ff6f61", position: 0 },
    { color: "#6f61ff", position: 0.5 },
    { color: "#61ffd5", position: 1 },
  ],
  colorCycleInterval = 3000,
  canvasHeight = 200,
  canvasWidth = 100, // in vw
  charSpacing = 1,
  background = "null",
}) => {
  const canvasRef = useRef();
  const [mouseX, setMouseX] = useState(window.innerWidth / 2);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = canvasWidth * 16; // approximate vw to px
      canvas.height = canvasHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let colorIndex = 0;
    let currentColor = gradientStops[0]?.color || "#fff";
    let lastColorUpdate = Date.now();
    let animationFrameId;

    const draw = (t) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontWeight} ${fontSize}px sans-serif`;
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";

      let fillStyle = currentColor;

      if (gradient && gradientStops.length > 1) {
        const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradientStops.forEach(stop => {
          grad.addColorStop(stop.position, stop.color);
        });
        fillStyle = grad;
      }

      ctx.fillStyle = fillStyle;

      const chars = text.split("");
      const charWidth = (canvas.width / 2 * (charSpacing - 1)) / (chars.length + 1);
      const time = t / 1000;

      chars.forEach((char, i) => {
        const x = charWidth * (i + 1);
        const distance = Math.abs(x - mouseX);
        const waveOffset = Math.sin((distance + time * 500) * noiseScale) * amplitude;
        ctx.fillText(char, x, canvas.height / 2 + waveOffset);
      });

      if (animateColor && !gradient && Date.now() - lastColorUpdate > colorCycleInterval) {
        colorIndex = (colorIndex + 1) % gradientStops.length;
        currentColor = gradientStops[colorIndex].color;
        lastColorUpdate = Date.now();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [
    text,
    fontWeight,
    fontSize,
    noiseScale,
    amplitude,
    animateColor,
    gradient,
    gradientStops,
    colorCycleInterval,
    mouseX,
    canvasHeight,
    canvasWidth,
    charSpacing,
    background,
  ]);

  useEffect(() => {
    const handleMouseMove = (e) => setMouseX(e.clientX);
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        background: background,
        margin: "0 auto",
        width: `${canvasWidth}vw`,
        height: `${canvasHeight}px`,
      }}
    />
  );
};

export default WavyText;
