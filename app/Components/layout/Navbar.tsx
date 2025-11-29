// src/components/layout/Navbar.tsx
"use client";

import React from 'react';

export function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <span className="logo-icon">🐄</span>
            <span className="logo-text">Ganadería</span>
          </div>

          {/* Links de navegación */}
          <div className="navbar-links">
         
            <a href="/login" className="nav-link">Login</a>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .navbar {
          position: relative;
          z-index: 50;
          padding: 12px 24px;
          background: rgba(6, 78, 59, 0.25);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .navbar-container {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          color: white;
          font-size: 20px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .navbar-logo:hover {
          transform: scale(1.05);
        }

        .logo-icon {
          font-size: 24px;
          animation: subtle-bounce 3s ease-in-out infinite;
        }

        .logo-text {
          letter-spacing: 0.3px;
        }

        .navbar-links {
          display: flex;
          gap: 24px;
          align-items: center;
        }

        .nav-link {
          color: rgba(255, 255, 255, 0.95);
          text-decoration: none;
          font-weight: 500;
          font-size: 15px;
          padding: 6px 14px;
          border-radius: 6px;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: white;
          transition: width 0.3s ease;
        }

        .nav-link:hover {
          background: rgba(255, 255, 255, 0.12);
          color: white;
          transform: translateY(-1px);
        }

        .nav-link:hover::after {
          width: 70%;
        }

        @keyframes subtle-bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }

        /* Responsive para móviles */
        @media (max-width: 768px) {
          .navbar {
            padding: 10px 20px;
          }

          .navbar-logo {
            font-size: 18px;
          }

          .logo-icon {
            font-size: 22px;
          }

          .navbar-links {
            gap: 16px;
          }

          .nav-link {
            font-size: 13px;
            padding: 5px 10px;
          }
        }

        @media (max-width: 480px) {
          .navbar {
            padding: 8px 16px;
          }

          .navbar-logo {
            font-size: 16px;
          }

          .logo-icon {
            font-size: 20px;
          }

          .navbar-links {
            gap: 10px;
          }

          .nav-link {
            font-size: 12px;
            padding: 4px 8px;
          }

          .logo-text {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
}