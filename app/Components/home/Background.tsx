// src/components/home/Background.tsx
"use client";

import React from 'react';

export function Background({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="background-container">
        {/* Fondo con degradado verde */}
        <div className="background-gradient" />
        
        {/* Capa de textura */}
        <div className="background-texture" />

        {/* Vacas flotantes */}
        <div className="cows-container">
          <div className="cow cow-1">🐄</div>
          <div className="cow cow-2">🐮</div>
          <div className="cow cow-3">🐄</div>
          <div className="cow cow-4">🐮</div>
        </div>

        {/* Overlay inferior */}
        <div className="grass-overlay" />

        {/* Contenido */}
        <div className="content-wrapper">
          {children}
        </div>
      </div>

      <style jsx>{`
        .background-container {
          position: relative;
          min-height: 100vh;
        }

        .background-gradient {
          position: fixed;
          inset: 0;
          background: linear-gradient(135deg, #064e3b 0%, #059669 50%, #10b981 100%);
          z-index: 0;
        }

        .background-texture {
          position: fixed;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1), transparent 50%);
          pointer-events: none;
          z-index: 1;
        }

        .cows-container {
          position: fixed;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 2;
        }

        .cow {
          position: absolute;
          font-size: 60px;
          opacity: 0.25;
        }

        .cow-1 {
          top: 15%;
          left: 10%;
          animation: float 20s ease-in-out infinite;
        }

        .cow-2 {
          top: 60%;
          right: 15%;
          animation: float 18s ease-in-out infinite;
          animation-delay: 5s;
        }

        .cow-3 {
          top: 40%;
          left: 70%;
          animation: float 22s ease-in-out infinite;
          animation-delay: 10s;
        }

        .cow-4 {
          top: 75%;
          left: 20%;
          animation: float 19s ease-in-out infinite;
          animation-delay: 15s;
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(15px, -25px) rotate(3deg);
          }
          66% {
            transform: translate(-10px, -35px) rotate(-2deg);
          }
        }

        .grass-overlay {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          height: 150px;
          background: linear-gradient(to top, rgba(6, 78, 59, 0.6), transparent);
          pointer-events: none;
          z-index: 3;
        }

        .content-wrapper {
          position: relative;
          z-index: 10;
        }
      `}</style>
    </>
  );
}