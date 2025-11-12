import React, { useRef, useEffect } from "react";

export default function HeroBg() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const colorDot = [
      "rgb(81, 162, 233)",
      "rgb(81, 162, 233)",
      "rgb(81, 162, 233)",
      "rgb(81, 162, 233)",
      "rgb(255, 77, 90)",
    ];
    const color = "rgb(81, 162, 233)";

    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = window.innerHeight;
    canvas.style.display = "block";
    ctx.lineWidth = 0.3;
    ctx.strokeStyle = color;

    let mousePosition = {
      x: (30 * canvas.width) / 100,
      y: (30 * canvas.height) / 100,
    };

    const windowSize = window.innerWidth;
    let dots = windowSize > 1600
      ? { nb: 600, distance: 70, d_radius: 300, array: [] }
      : windowSize > 1300
      ? { nb: 575, distance: 60, d_radius: 280, array: [] }
      : windowSize > 1100
      ? { nb: 500, distance: 55, d_radius: 250, array: [] }
      : windowSize > 800
      ? { nb: 300, distance: 0, d_radius: 0, array: [] }
      : windowSize > 600
      ? { nb: 200, distance: 0, d_radius: 0, array: [] }
      : { nb: 100, distance: 0, d_radius: 0, array: [] };

    function Dot() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = -0.5 + Math.random();
      this.vy = -0.5 + Math.random();
      this.radius = Math.random() * 1.5;
      this.colour = colorDot[Math.floor(Math.random() * colorDot.length)];
    }

    Dot.prototype.create = function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      const dotDistance = ((this.x - mousePosition.x) ** 2 + (this.y - mousePosition.y) ** 2) ** 0.5;
      const distanceRatio = dotDistance / (windowSize / 1.7);
      ctx.fillStyle = this.colour.slice(0, -1) + `,${1 - distanceRatio})`;
      ctx.fill();
    };

    Dot.prototype.animate = function () {
      for (let i = 1; i < dots.nb; i++) {
        const dot = dots.array[i];
        if (dot.y < 0 || dot.y > canvas.height) dot.vy = -dot.vy;
        if (dot.x < 0 || dot.x > canvas.width) dot.vx = -dot.vx;
        dot.x += dot.vx;
        dot.y += dot.vy;
      }
    };

    Dot.prototype.line = function () {
      for (let i = 0; i < dots.nb; i++) {
        for (let j = 0; j < dots.nb; j++) {
          const i_dot = dots.array[i];
          const j_dot = dots.array[j];
          if (
            Math.abs(i_dot.x - j_dot.x) < dots.distance &&
            Math.abs(i_dot.y - j_dot.y) < dots.distance
          ) {
            if (
              Math.abs(i_dot.x - mousePosition.x) < dots.d_radius &&
              Math.abs(i_dot.y - mousePosition.y) < dots.d_radius
            ) {
              ctx.beginPath();
              ctx.moveTo(i_dot.x, i_dot.y);
              ctx.lineTo(j_dot.x, j_dot.y);
              const dotDistance = ((i_dot.x - mousePosition.x) ** 2 + (i_dot.y - mousePosition.y) ** 2) ** 0.5;
              let distanceRatio = dotDistance / dots.d_radius;
              distanceRatio = Math.max(distanceRatio - 0.3, 0);
              ctx.strokeStyle = `rgb(81, 162, 233, ${1 - distanceRatio})`;
              ctx.stroke();
              ctx.closePath();
            }
          }
        }
      }
    };

    function createDots() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (!dots.array.length) {
        for (let i = 0; i < dots.nb; i++) {
          dots.array.push(new Dot());
        }
        dots.array[0].radius = 1.5;
        dots.array[0].colour = "#51a2e9";
      }
      dots.array.forEach((dot) => dot.create());
      dots.array[0].line();
      dots.array[0].animate();
    }

    const handleMouseMove = (e) => {
      mousePosition.x = e.pageX;
      mousePosition.y = e.pageY;
      if (dots.array[0]) {
        dots.array[0].x = e.pageX;
        dots.array[0].y = e.pageY;
      }
    };

    const handleResize = () => {
      clearInterval(draw);
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    const draw = setInterval(createDots, 1000 / 30);

    return () => {
      clearInterval(draw);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef}></canvas>;
}
