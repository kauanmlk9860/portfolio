"use client";

import { useEffect, useRef } from "react";

type Point = { x: number; y: number; time: number };

const LIFETIME_MS = 700;

export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReducedMotion || isCoarsePointer) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let points: Point[] = [];
    let frame = 0;

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function handleMove(event: MouseEvent) {
      points.push({ x: event.clientX, y: event.clientY, time: performance.now() });
    }
    window.addEventListener("mousemove", handleMove);

    function draw() {
      const now = performance.now();
      points = points.filter((point) => now - point.time < LIFETIME_MS);
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      for (const point of points) {
        const life = 1 - (now - point.time) / LIFETIME_MS;
        const radius = 6 + 28 * life;
        const gradient = ctx!.createRadialGradient(
          point.x,
          point.y,
          0,
          point.x,
          point.y,
          radius,
        );
        gradient.addColorStop(0, `rgba(192,132,252,${0.5 * life})`);
        gradient.addColorStop(1, "rgba(168,85,247,0)");
        ctx!.fillStyle = gradient;
        ctx!.beginPath();
        ctx!.arc(point.x, point.y, radius, 0, Math.PI * 2);
        ctx!.fill();
      }

      frame = requestAnimationFrame(draw);
    }
    frame = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-40 mix-blend-screen"
    />
  );
}
