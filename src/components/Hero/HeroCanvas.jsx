import React, { useEffect, useRef, useState } from "react";

const HeroCanvas = () => {
	const canvasRef = useRef(null);
	const [isVisible, setIsVisible] = useState(true);
	const dots = useRef([]);
	const mousePosition = useRef({
		x: window.innerWidth / 2,
		y: window.innerHeight / 2
	});
	const dotCount = 300;
	const dotSpeed = 0.35;
	const opacityFocusDistance = 600;
	const colors = [
		"rgba(187, 134, 252, 1)",
		"rgba(169, 169, 169, 1)",
		"rgba(255, 255, 255, 1)"
	];

	const createDot = () => ({
		x: Math.random() * window.innerWidth,
		y: Math.random() * window.innerHeight,
		vx: (Math.random() - 0.5) * dotSpeed,
		vy: (Math.random() - 0.5) * dotSpeed,
		radius: Math.random() * 1.5,
		color: colors[Math.floor(Math.random() * colors.length)]
	});

	const drawDots = ctx => {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

		for (const dot of dots.current) {
			const isPurple = dot.color.includes("187, 134, 252");
			let fillColor;

			if (isPurple) {
				const distance = Math.hypot(
					dot.x - mousePosition.current.x,
					dot.y - mousePosition.current.y
				);
				const opacity = Math.max(0, 1 - distance / opacityFocusDistance);
				fillColor = dot.color.replace(
					/rgba\((.*?),\s*\d+\.?\d*\)/,
					`rgba($1, ${opacity})`
				);
			} else {
				const fixedOpacity = 0.35; // 👈 adjust this for more or less visibility
				fillColor = dot.color.replace(
					/rgba\((.*?),\s*\d+\.?\d*\)/,
					`rgba($1, ${fixedOpacity})`
				);
			}

			ctx.beginPath();
			ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
			ctx.fillStyle = fillColor;
			ctx.fill();
			ctx.closePath();

			dot.x += dot.vx;
			dot.y += dot.vy;

			if (dot.x < 0 || dot.x > ctx.canvas.width) dot.vx *= -1;
			if (dot.y < 0 || dot.y > ctx.canvas.height) dot.vy *= -1;
		}
	};

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		canvas.width = document.documentElement.clientWidth;
		canvas.height = document.documentElement.clientHeight;

		const isMobile = window.innerWidth <= 800;

		for (let i = 0; i < dotCount; i++) {
			dots.current.push(createDot());
		}

		let animationFrameId;
		const animate = () => {
			if (isVisible) {
				drawDots(ctx);
				animationFrameId = requestAnimationFrame(animate);
			}
		};

		animate();

		const handleMouseMove = event => {
			mousePosition.current = { x: event.clientX, y: event.clientY };
		};

		if (!isMobile) {
			window.addEventListener("mousemove", handleMouseMove);
		}

		window.addEventListener("resize", () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		});

		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.intersectionRatio > 0);
			},
			{ threshold: 0.1 }
		);

		observer.observe(canvas);

		return () => {
			cancelAnimationFrame(animationFrameId);
			if (!isMobile) {
				window.removeEventListener("mousemove", handleMouseMove);
			}
			observer.disconnect();
		};
	}, [isVisible]);

	return (
		<>
			<canvas ref={canvasRef} />
			<div className="canvas-fade-bottom" />
		</>
	);
};

export default HeroCanvas;
