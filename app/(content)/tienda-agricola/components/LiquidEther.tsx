"use client";

import { useEffect, useRef } from 'react';
import './LiquidEther.css';

interface LiquidEtherProps {
  colors?: string[];
  style?: React.CSSProperties;
  className?: string;
  [key: string]: any;
}

export default function LiquidEther({
  colors = ['#10b981', '#34d399', '#6ee7b7'],
  style = {},
  className = ''
}: LiquidEtherProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    // Animación de fondo líquido simple
    let time = 0;
    const animate = () => {
      time += 0.01;

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, colors[0] + '20');
      gradient.addColorStop(0.5, colors[1] + '15');
      gradient.addColorStop(1, colors[2] + '20');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Círculos animados
      for (let i = 0; i < 3; i++) {
        const x = canvas.width / 2 + Math.sin(time + i) * 200;
        const y = canvas.height / 2 + Math.cos(time + i * 1.5) * 150;
        const radius = 100 + Math.sin(time * 2 + i) * 30;

        const circleGradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        circleGradient.addColorStop(0, colors[i % colors.length] + '40');
        circleGradient.addColorStop(1, colors[i % colors.length] + '00');

        ctx.fillStyle = circleGradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [colors]);

  return (
    <div className={`liquid-ether-container ${className}`}>
      <canvas ref={canvasRef} className="liquid-ether-canvas" />
    </div>
  );
}
