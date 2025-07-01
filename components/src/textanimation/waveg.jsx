import React, { useRef, useEffect, useState } from "react";

const WavyTextg = ({
  text = "Hover Me!",
  fontWeight = 900,
  fontSize = 50,
  noiseScale = 0.002,
  amplitude = 20,
  wordSpacing = 40,
  gradient = true,
  gradientStops = [
    { color: "#ff6f61", position: 0 },
    { color: "#6f61ff", position: 0.5 },
    { color: "#61ffd5", position: 1 },
  ],
  canvasHeight = 200,
  canvasWidth = 100, // in vw
  charSpacing = 1,
  background = "#000",
}) => {
  const canvasRef = useRef();
  const [mouseX, setMouseX] = useState(window.innerWidth / 2);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = canvasWidth * 16;
      canvas.height = canvasHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let animationFrameId;

    const draw = (t) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let optimalFontSize = Math.min(canvas.width / text.length, canvas.height * 0.2);
  ctx.font = `${fontWeight} ${optimalFontSize}px sans-serif`;
  ctx.textBaseline = "middle";
  ctx.textAlign = "left"; // ← updated for word placement

  // Handle gradient
  let fillStyle = gradientStops[0]?.color || "#fff";
  if (gradient && gradientStops.length > 1) {
    const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradientStops.forEach((stop) => {
      grad.addColorStop(stop.position, stop.color);
    });
    fillStyle = grad;
  }
  ctx.fillStyle = fillStyle;

  const words = text.split(" ");
  const wordSpacing = optimalFontSize * 0.6;
  const spaceWidth = ctx.measureText(" ").width;
  const time = t / 1000;

  // Calculate total text width
  const totalTextWidth =
    words.reduce((sum, word) => sum + ctx.measureText(word).width, 0) +
    spaceWidth * (words.length - 1);

  let cursorX = (canvas.width - totalTextWidth) / 2;

  words.forEach((word, wIndex) => {
    const wordWidth = ctx.measureText(word).width;
    const centerX = cursorX + wordWidth / 2;
    const distance = Math.abs(centerX - mouseX);

    const isWaving = isHovered && distance < canvas.width / 2;

    const waveOffset = isWaving
      ? Math.sin(time * 2 + wIndex * 0.3) * amplitude * (1 - distance / 600)
      : 0;

    word.split("").forEach((char) => {
      const charWidth = ctx.measureText(char).width;
      ctx.fillText(char, cursorX, canvas.height / 2 + waveOffset);
      cursorX += charWidth;
    });

    cursorX += spaceWidth; // space between words
  });

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
    gradient,
    gradientStops,
    mouseX,
    canvasHeight,
    canvasWidth,
    charSpacing,
    background,
    isHovered,
    wordSpacing,
  ]);

  useEffect(() => {
    const handleMouseMove = (e) => setMouseX(e.clientX);
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: "block",
        background: background,
        margin: "0 auto",
        width: `${canvasWidth}vw`,
        height: `${canvasHeight}px`,
        cursor: "pointer",
        
      }}
    />
  );
};

export default WavyTextg;
