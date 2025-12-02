// src/components/home/InfoSection.tsx
"use client";

import React from 'react';

interface InfoSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InfoSection({ isOpen, onClose }: InfoSectionProps) {
  if (!isOpen) return null;

  return (
    <>
      <div className="overlay" onClick={onClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          {/* Botón cerrar */}
          <button className="close-btn" onClick={onClose}>✕</button>

          {/* Contenido */}
          <div className="modal-content">
            <h2 className="modal-title">Nuestra Misión</h2>
            <p className="modal-intro">
              Transformamos la ganadería tradicional en un modelo sostenible que beneficia 
              al medio ambiente, los animales y las comunidades rurales.
            </p>

            {/* Grid de información */}
            <div className="info-grid">
              <div className="info-card">
                <div className="info-icon">🌍</div>
                <h3 className="info-title">Sostenibilidad</h3>
                <p className="info-text">
                  Implementamos prácticas que reducen la huella de carbono y protegen 
                  los recursos naturales para las futuras generaciones.
                </p>
              </div>

              <div className="info-card">
                <div className="info-icon">🔬</div>
                <h3 className="info-title">Tecnología</h3>
                <p className="info-text">
                  Utilizamos sistemas de monitoreo inteligente, análisis de datos y 
                  herramientas digitales para optimizar el bienestar animal.
                </p>
              </div>

              <div className="info-card">
                <div className="info-icon">🌾</div>
                <h3 className="info-title">Alimentación Natural</h3>
                <p className="info-text">
                  Nuestro ganado se alimenta con pastos orgánicos y suplementos naturales, 
                  garantizando productos saludables y de alta calidad.
                </p>
              </div>

              <div className="info-card">
                <div className="info-icon">❤️</div>
                <h3 className="info-title">Bienestar Animal</h3>
                <p className="info-text">
                  Priorizamos espacios amplios, cuidado veterinario preventivo y 
                  condiciones que respetan el comportamiento natural del ganado.
                </p>
              </div>

              <div className="info-card">
                <div className="info-icon">👥</div>
                <h3 className="info-title">Comunidad</h3>
                <p className="info-text">
                  Apoyamos a productores locales con capacitación, recursos y precios 
                  justos que fortalecen la economía rural.
                </p>
              </div>

              <div className="info-card">
                <div className="info-icon">✨</div>
                <h3 className="info-title">Calidad Certificada</h3>
                <p className="info-text">
                  Todos nuestros productos cumplen con estándares internacionales de 
                  calidad, seguridad alimentaria y trazabilidad.
                </p>
              </div>
            </div>

            {/* Estadísticas */}
            <div className="stats">
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Años de experiencia</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Productores asociados</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Trazabilidad garantizada</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(5px);
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.3s ease-out;
          overflow-y: auto;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal {
          background: linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%);
          border-radius: 24px;
          max-width: 1100px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          animation: slideUp 0.4s ease-out;
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

        .close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(6, 78, 59, 0.1);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          font-size: 24px;
          color: #064e3b;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }

        .close-btn:hover {
          background: #064e3b;
          color: white;
          transform: rotate(90deg);
        }

        .modal-content {
          padding: 50px 40px;
        }

        .modal-title {
          font-size: 36px;
          font-weight: 700;
          color: #064e3b;
          text-align: center;
          margin-bottom: 20px;
        }

        .modal-intro {
          font-size: 18px;
          color: #065f46;
          text-align: center;
          max-width: 700px;
          margin: 0 auto 50px;
          line-height: 1.7;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
          margin-bottom: 50px;
        }

        .info-card {
          background: white;
          border-radius: 16px;
          padding: 30px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
          border-color: #10b981;
        }

        .info-icon {
          font-size: 48px;
          margin-bottom: 15px;
        }

        .info-title {
          font-size: 20px;
          font-weight: 600;
          color: #064e3b;
          margin-bottom: 12px;
        }

        .info-text {
          font-size: 15px;
          color: #065f46;
          line-height: 1.6;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          background: linear-gradient(135deg, #064e3b 0%, #059669 100%);
          border-radius: 20px;
          padding: 40px;
          text-align: center;
        }

        .stat-item {
          color: white;
        }

        .stat-number {
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 8px;
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
        }

        .stat-label {
          font-size: 16px;
          opacity: 0.95;
          font-weight: 500;
        }

        /* Scrollbar personalizado */
        .modal::-webkit-scrollbar {
          width: 8px;
        }

        .modal::-webkit-scrollbar-track {
          background: rgba(16, 185, 129, 0.1);
          border-radius: 10px;
        }

        .modal::-webkit-scrollbar-thumb {
          background: #10b981;
          border-radius: 10px;
        }

        @media (max-width: 768px) {
          .modal-content {
            padding: 40px 25px;
          }

          .modal-title {
            font-size: 28px;
          }

          .modal-intro {
            font-size: 16px;
            margin-bottom: 35px;
          }

          .info-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .info-card {
            padding: 25px;
          }

          .stats {
            padding: 30px 20px;
            gap: 25px;
          }

          .stat-number {
            font-size: 36px;
          }

          .stat-label {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
}