// src/components/home/HeroTitle.tsx
"use client";

import React from 'react';

interface HeroTitleProps {
  title: string;
  subtitle: string;
}

export function HeroTitle({ title, subtitle }: HeroTitleProps) {
  return (
    <>
      <div className="hero-container">
        {/* Título principal */}
        <h1 className="title">
          {title}
        </h1>

        {/* Subtítulo */}
        <p className="subtitle">
          {subtitle}
        </p>
      </div>

      <style jsx>{`
        .hero-container {
          text-align: center;
          color: white;
          margin-bottom: 30px;
        }

        .title {
          font-size: clamp(2.2rem, 6vw, 4rem);
          font-weight: bold;
          margin-bottom: 12px;
          text-shadow: 4px 4px 12px rgba(0, 0, 0, 0.5);
          color: white;
          animation: slideDown 1s ease-out;
          line-height: 1.1;
        }

        .subtitle {
          font-size: clamp(1rem, 2.5vw, 1.3rem);
          font-weight: 300;
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
          max-width: 650px;
          margin: 0 auto;
          padding: 0 20px;
          color: white;
          animation: slideUp 1s ease-out 0.3s both;
          line-height: 1.4;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}