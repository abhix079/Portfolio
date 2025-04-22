import React, { useRef, useEffect } from 'react';

const NoiseCanvasBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const imageData = ctx.createImageData(width, height);
    const buffer = new Uint32Array(imageData.data.buffer);
    const drawNoise = () => {
        ctx.fillStyle = 'rgba(0, 0, 0, 1)'; 
        ctx.fillRect(0, 0, width, height);
      
        for (let i = 0; i < buffer.length; i++) {
          const grayscale = Math.random() * 255;
          const alpha = 20; // Subtle dots
          buffer[i] =
            (alpha << 24) |
            (grayscale << 16) |
            (grayscale << 8) |
            grayscale;
        }
      
        ctx.putImageData(imageData, 0, 0);
        requestAnimationFrame(drawNoise);
      };
      
    drawNoise();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100vw',
        height: '100vh',
        background: '#000', // Deep black base
        imageRendering: 'pixelated', // Gives retro/fine-grain feel
      }}
    />
  );
};

export default NoiseCanvasBackground;
