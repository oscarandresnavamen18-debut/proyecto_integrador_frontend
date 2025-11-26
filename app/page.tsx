// src/app/page.tsx
"use client";

import { useEffect, useState } from "react";
import { HeroTitle } from "./Components/home/HeroTitle";
import { Background } from "./Components/home/Background";
import { Navbar } from "./Components/layout/Navbar";

export default function HomePage() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Background>
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="main-content">
        {showText && (
          <div className="content-container">
            {/* Hero Section */}
            <HeroTitle
              title="Ganadería Sostenible"
              subtitle="Tecnología e Innovación para el campo"
            />

            {/* CTA Buttons */}
            <div className="buttons-container">
              <button className="btn-primary">
                Conocer Más →
              </button>
              <button className="btn-secondary">
                Contactar
              </button>
            </div>

            {/* Features Section - Tarjetas compactas */}
            <div className="features-grid">
              <div className="feature-card">
                <div className="card-inner">
                  <div className="feature-icon">🌱</div>
                  <div className="feature-content">
                    <h3 className="feature-title">100% Sostenible</h3>
                    <p className="feature-description">Prácticas ecológicas comprometidas</p>
                  </div>
                </div>
              </div>

              <div className="feature-card">
                <div className="card-inner">
                  <div className="feature-icon">🏆</div>
                  <div className="feature-content">
                    <h3 className="feature-title">Calidad Premium</h3>
                    <p className="feature-description">Productos de excelencia</p>
                  </div>
                </div>
              </div>

              <div className="feature-card">
                <div className="card-inner">
                  <div className="feature-icon">💚</div>
                  <div className="feature-content">
                    <h3 className="feature-title">Bienestar Animal</h3>
                    <p className="feature-description">Cuidado responsable</p>
                    <p className = 'feature-description'>🐄</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <style jsx>{`
        .main-content {
          position: relative;
          height: calc(100vh - 60px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px 20px 30px;
          z-index: 10;
          overflow: hidden;
        }

        .content-container {
          width: 100%;
          max-width: 1200px;
          animation: fadeIn 1s ease-out;
        }

        .buttons-container {
          display: flex;
          gap: 18px;
          justify-content: center;
          margin-top: 30px;
          flex-wrap: wrap;
        }

        .btn-primary {
          padding: 13px 35px;
          background-color: white;
          color: #064e3b;
          font-weight: 600;
          font-size: 16px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .btn-secondary {
          padding: 13px 35px;
          background-color: transparent;
          color: white;
          font-weight: 600;
          font-size: 16px;
          border-radius: 50px;
          border: 2.5px solid white;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background-color: white;
          color: #064e3b;
          transform: translateY(-2px) scale(1.02);
        }

        /* Tarjetas compactas */
        .features-grid {
          margin-top: 50px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
          padding: 0 20px;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border-radius: 18px;
          padding: 25px 20px;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.1);
          cursor: pointer;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.22);
          border: 1px solid rgba(255, 255, 255, 0.35);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
        }

        .card-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .feature-icon {
          font-size: 55px;
          margin-bottom: 15px;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.25));
          transition: transform 0.3s ease;
        }

        .feature-card:hover .feature-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .feature-content {
          width: 100%;
        }

        .feature-title {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 8px;
          color: white;
          text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
        }

        .feature-description {
          font-size: 14px;
          line-height: 1.4;
          color: rgba(255, 255, 255, 0.95);
          font-weight: 400;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @media (max-width: 968px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin-top: 40px;
          }

          .feature-card {
            padding: 22px 18px;
          }

          .feature-icon {
            font-size: 50px;
            margin-bottom: 12px;
          }

          .feature-title {
            font-size: 18px;
          }

          .feature-description {
            font-size: 13px;
          }
        }

        @media (max-width: 768px) {
          .main-content {
            height: auto;
            min-height: 100vh;
            padding: 15px 15px 40px;
          }

          .buttons-container {
            flex-direction: column;
            align-items: center;
            margin-top: 25px;
            gap: 12px;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
            max-width: 300px;
            padding: 13px 30px;
            font-size: 15px;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 18px;
            margin-top: 35px;
            padding: 0 15px;
          }

          .feature-card {
            padding: 20px 18px;
          }

          .feature-icon {
            font-size: 48px;
            margin-bottom: 12px;
          }

          .feature-title {
            font-size: 19px;
            margin-bottom: 7px;
          }

          .feature-description {
            font-size: 13px;
          }
        }
      `}</style>
    </Background>
  );
}