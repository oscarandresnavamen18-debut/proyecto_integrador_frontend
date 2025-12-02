// src/app/Components/home/FeatureModal.tsx
"use client";

import { useEffect } from "react";

interface FeatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  feature: {
    icon: string;
    title: string;
    description: string;
    detailedInfo: string[];
    benefits: string[];
  } | null;
}

export function FeatureModal({ isOpen, onClose, feature }: FeatureModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !feature) return null;

  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {/* Header */}
          <div className="modal-header">
            <div className="modal-icon">{feature.icon}</div>
            <h2 className="modal-title">{feature.title}</h2>
            <button className="close-button" onClick={onClose}>
              ✕
            </button>
          </div>

          {/* Body */}
          <div className="modal-body">
            <p className="modal-description">{feature.description}</p>

            <div className="info-section">
              <h3 className="section-title">¿Qué significa esto?</h3>
              <div className="info-list">
                {feature.detailedInfo.map((info, index) => (
                  <div key={index} className="info-item">
                    <span className="bullet">•</span>
                    <p>{info}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="benefits-section">
              <h3 className="section-title">Beneficios clave</h3>
              <div className="benefits-grid">
                {feature.benefits.map((benefit, index) => (
                  <div key={index} className="benefit-card">
                    <span className="check-icon">✓</span>
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="modal-footer">
            <button className="action-button" onClick={onClose}>
              Entendido
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
          animation: fadeIn 0.3s ease-out;
        }

        .modal-content {
          background: linear-gradient(135deg, #ffffff 0%, #f8fffe 100%);
          border-radius: 24px;
          max-width: 600px;
          width: 100%;
          max-height: 85vh;
          overflow-y: auto;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          animation: slideUp 0.3s ease-out;
          position: relative;
        }

        .modal-header {
          position: sticky;
          top: 0;
          background: linear-gradient(135deg, #064e3b 0%, #047857 100%);
          padding: 30px;
          border-radius: 24px 24px 0 0;
          text-align: center;
          position: relative;
        }

        .modal-icon {
          font-size: 64px;
          margin-bottom: 15px;
          filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2));
          animation: bounce 2s ease-in-out infinite;
        }

        .modal-title {
          font-size: 28px;
          font-weight: 800;
          color: white;
          margin: 0;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        }

        .close-button {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          font-size: 24px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .close-button:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: rotate(90deg);
        }

        .modal-body {
          padding: 30px;
        }

        .modal-description {
          font-size: 16px;
          line-height: 1.6;
          color: #374151;
          margin-bottom: 30px;
          text-align: center;
          font-weight: 500;
        }

        .info-section,
        .benefits-section {
          margin-bottom: 30px;
        }

        .section-title {
          font-size: 20px;
          font-weight: 700;
          color: #064e3b;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .section-title::before {
          content: "";
          width: 4px;
          height: 24px;
          background: linear-gradient(to bottom, #064e3b, #047857);
          border-radius: 2px;
        }

        .info-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .info-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          background: rgba(6, 78, 59, 0.05);
          padding: 12px 16px;
          border-radius: 12px;
          border-left: 3px solid #064e3b;
        }

        .bullet {
          color: #064e3b;
          font-size: 24px;
          font-weight: bold;
          line-height: 1;
        }

        .info-item p {
          margin: 0;
          color: #374151;
          line-height: 1.6;
          font-size: 14px;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 12px;
        }

        .benefit-card {
          background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
          padding: 16px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 12px;
          border: 1px solid #a7f3d0;
          transition: all 0.3s ease;
        }

        .benefit-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(6, 78, 59, 0.15);
        }

        .check-icon {
          background: #064e3b;
          color: white;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 14px;
          flex-shrink: 0;
        }

        .benefit-card p {
          margin: 0;
          color: #064e3b;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.4;
        }

        .modal-footer {
          padding: 20px 30px 30px;
          display: flex;
          justify-content: center;
        }

        .action-button {
          background: linear-gradient(135deg, #064e3b 0%, #047857 100%);
          color: white;
          border: none;
          padding: 14px 40px;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(6, 78, 59, 0.3);
        }

        .action-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(6, 78, 59, 0.4);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        /* Scrollbar personalizado */
        .modal-content::-webkit-scrollbar {
          width: 8px;
        }

        .modal-content::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        .modal-content::-webkit-scrollbar-thumb {
          background: #064e3b;
          border-radius: 10px;
        }

        .modal-content::-webkit-scrollbar-thumb:hover {
          background: #047857;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .modal-content {
            max-height: 90vh;
            margin: 10px;
          }

          .modal-header {
            padding: 24px 20px;
          }

          .modal-icon {
            font-size: 52px;
          }

          .modal-title {
            font-size: 24px;
          }

          .modal-body {
            padding: 20px;
          }

          .section-title {
            font-size: 18px;
          }

          .benefits-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}