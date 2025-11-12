import React, { useEffect, useRef } from "react";
import "../CanvasDots/CanvasDots.css";

const CanvasDots = ({ density = 1.0 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const colorDot = [
      "rgb(81, 162, 233)",
      "rgb(81, 162, 233)",
      "rgb(81, 162, 233)",
      "rgb(255, 77, 90)",
    ];

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      
      // Get the parent section's full scroll height
      const parentSection = canvas.closest('.projects-section');
      const displayWidth = parentSection ? parentSection.scrollWidth : document.body.scrollWidth;
      const displayHeight = parentSection ? parentSection.scrollHeight : window.innerHeight;

      // Set internal resolution scaled by DPR
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;

      // Reset transform, then scale
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      // Match visual size in CSS pixels
      canvas.style.width = `${displayWidth}px`;
      canvas.style.height = `${displayHeight}px`;
      
      return { width: displayWidth, height: displayHeight };
    };

    const { width: canvasWidth, height: canvasHeight } = resizeCanvas();
    
    let currentCanvasHeight = canvasHeight;
    let currentCanvasWidth = canvasWidth;

    const handleResize = () => {
      const dimensions = resizeCanvas();
      currentCanvasHeight = dimensions.height;
      currentCanvasWidth = dimensions.width;
      
      // Reset dots array to regenerate with new bounds
      dots.array = [];
    };

    window.addEventListener("resize", handleResize);

    let mousePosition = {
      x: (30 * currentCanvasWidth) / 100,
      y: (30 * currentCanvasHeight) / 100,
    };

    const windowSize = window.innerWidth;
    let dots;

    if (windowSize > 1600) dots = { nb: 25, distance: 0, d_radius: 0, array: [] };
    else if (windowSize > 1300) dots = { nb: 20, distance: 0, d_radius: 0, array: [] };
    else if (windowSize > 1100) dots = { nb: 15, distance: 0, d_radius: 0, array: [] };
    else dots = { nb: 1, distance: 0, d_radius: 0, array: [] };

    if (windowSize <= 1100) ctx.globalAlpha = 0;

    function Dot() {
      this.x = Math.random() * currentCanvasWidth;
      this.y = Math.random() * currentCanvasHeight;
      this.vx = -0.5 + Math.random();
      this.vy = -0.5 + Math.random();
      this.radius = Math.random() * 1.5;
      this.colour = colorDot[Math.floor(Math.random() * colorDot.length)];
    }

    Dot.prototype.create = function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = this.colour;
      ctx.fill();
    };

    const createDots = () => {
      // Clear full canvas using current dimensions
      ctx.clearRect(0, 0, currentCanvasWidth, currentCanvasHeight);

      if (dots.array.length === 0) {
        for (let i = 0; i < dots.nb; i++) dots.array.push(new Dot());
      }

      for (let dot of dots.array) dot.create();

      // Animate with bounds based on actual canvas size
      for (let i = 0; i < dots.nb; i++) {
        const dot = dots.array[i];
        if (dot.y < 0 || dot.y > currentCanvasHeight) dot.vy = -dot.vy;
        if (dot.x < 0 || dot.x > currentCanvasWidth) dot.vx = -dot.vx;
        dot.x += dot.vx;
        dot.y += dot.vy;
      }
    };

    const drawInterval = setInterval(createDots, 1000 / 30);

    window.onscroll = () => {
      mousePosition.x = currentCanvasWidth / 2;
      mousePosition.y = currentCanvasHeight / 2 + window.scrollY;
    };

    return () => {
      clearInterval(drawInterval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="canvas-2"></canvas>;
};

export default CanvasDots;