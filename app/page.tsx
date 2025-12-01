// src/app/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { HeroTitle } from "./Components/home/HeroTitle";
import { Background } from "./Components/home/Background";
import { Navbar } from "./Components/layout/Navbar";
import InfoSection from "@/app/Components/home/InfoSection";
import { FeatureModal } from "./Components/home/FeatureModal";

// Datos de las características
const featuresData = [
  {
    icon: "🌱",
    title: "100% Sostenible",
    description: "Prácticas ecológicas comprometidas con el medio ambiente",
    detailedInfo: [
      "Implementamos sistemas de rotación de pasturas que permiten la regeneración natural del suelo y mejoran su fertilidad",
      "Utilizamos energías renovables en nuestras instalaciones para reducir la huella de carbono",
      "Gestionamos los recursos hídricos de manera eficiente con sistemas de captación de agua lluvia",
      "Mantenemos corredores biológicos que protegen la biodiversidad local y los ecosistemas"
    ],
    benefits: [
      "Suelos más fértiles y saludables",
      "Reducción de costos energéticos",
      "Conservación del agua",
      "Protección de fauna silvestre"
    ]
  },
  {
    icon: "⭐",
    title: "Calidad Premium",
    description: "Productos de excelencia que superan estándares internacionales",
    detailedInfo: [
      "Contamos con certificaciones internacionales de calidad que garantizan nuestros procesos",
      "Realizamos controles veterinarios constantes para asegurar la salud de nuestro ganado",
      "Alimentamos nuestros animales con dietas balanceadas y suplementos nutricionales de alta calidad",
      "Aplicamos trazabilidad completa desde el nacimiento hasta la comercialización del producto"
    ],
    benefits: [
      "Productos certificados",
      "Animales más saludables",
      "Mayor valor nutricional",
      "Garantía de origen"
    ]
  },
  {
    icon: "🐄",
    title: "Bienestar Animal",
    description: "Cuidado responsable y ético en todas nuestras prácticas",
    detailedInfo: [
      "Proporcionamos espacios amplios para el libre pastoreo y movimiento natural de los animales",
      "Ofrecemos atención veterinaria preventiva y curativa permanente con profesionales especializados",
      "Garantizamos condiciones de confort con sombra, agua fresca y áreas de descanso adecuadas",
      "Aplicamos protocolos de manejo de bajo estrés que respetan el comportamiento natural del ganado"
    ],
    benefits: [
      "Animales menos estresados",
      "Mayor productividad",
      "Reducción de enfermedades",
      "Mejor calidad de vida"
    ]
  }
];

export default function HomePage() {
  const router = useRouter();
  const [showText, setShowText] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<typeof featuresData[0] | null>(null);
  const [showFeatureModal, setShowFeatureModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleKnowMore = () => {
    setShowInfo(true);
  };

  const handleCloseInfo = () => {
    setShowInfo(false);
  };

  const handleFeatureClick = (feature: typeof featuresData[0]) => {
    setSelectedFeature(feature);
    setShowFeatureModal(true);
  };

  const handleCloseFeatureModal = () => {
    setShowFeatureModal(false);
    setTimeout(() => setSelectedFeature(null), 300);
  };

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
              <button className="btn-primary" onClick={handleKnowMore}>
                Conocer Más
              </button>
            </div>

            {/* 3 Mundos Principales */}
            <div className="worlds-section">
              <h2 className="worlds-title">Explora Nuestros Servicios</h2>
              <div className="worlds-grid">
                <div className="world-card world-green" onClick={() => router.push('/tienda-agricola')}>
                  <div className="world-icon">🛒</div>
                  <h3 className="world-name">Tienda Agrícola</h3>
                  <p className="world-description">
                    Productos de calidad para mascotas, ganadería, agricultura y ferretería
                  </p>
                  <div className="world-cta">
                    <span>Explorar Tienda</span>
                    <span className="arrow">→</span>
                  </div>
                </div>

                <div className="world-card world-blue" onClick={() => router.push('/conocimiento-ganadero')}>
                  <div className="world-icon">📚</div>
                  <h3 className="world-name">Conocimiento Ganadero</h3>
                  <p className="world-description">
                    Guías, tutoriales y mejores prácticas para el manejo del ganado
                  </p>
                  <div className="world-cta">
                    <span>Aprender Más</span>
                    <span className="arrow">→</span>
                  </div>
                </div>

                <div className="world-card world-red" onClick={() => router.push('/vacunas-enfermedades')}>
                  <div className="world-icon">💉</div>
                  <h3 className="world-name">Vacunas y Enfermedades</h3>
                  <p className="world-description">
                    Información sobre prevención, tratamiento y salud animal
                  </p>
                  <div className="world-cta">
                    <span>Ver Información</span>
                    <span className="arrow">→</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="features-grid">
              {featuresData.map((feature, index) => (
                <div
                  key={index}
                  className="feature-card"
                  onClick={() => handleFeatureClick(feature)}
                >
                  <div className="card-inner">
                    <div className="feature-icon">{feature.icon}</div>
                    <div className="feature-content">
                      <h3 className="feature-title">{feature.title}</h3>
                      <p className="feature-description">{feature.description}</p>
                      <span className="click-hint">Click para más info</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Modal de información general */}
      <InfoSection isOpen={showInfo} onClose={handleCloseInfo} />

      {/* Modal de características */}
      <FeatureModal
        isOpen={showFeatureModal}
        onClose={handleCloseFeatureModal}
        feature={selectedFeature}
      />

      <style jsx>{`
        .main-content {
          position: relative;
          min-height: calc(100vh - 60px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: 40px 20px 100px;
          z-index: 10;
          overflow-y: auto;
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

        /* Worlds Section */
        .worlds-section {
          margin-top: 60px;
          margin-bottom: 80px;
          width: 100%;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          padding: 0 20px;
        }

        .worlds-title {
          text-align: center;
          font-size: 32px;
          font-weight: 800;
          color: white;
          margin-bottom: 50px;
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
        }

        .worlds-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 35px;
          margin-bottom: 60px;
        }

        .world-card {
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(12px);
          border-radius: 24px;
          padding: 35px 25px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid rgba(255, 255, 255, 0.2);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .world-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .world-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .world-card:hover::before {
          opacity: 1;
        }

        .world-green:hover {
          background: rgba(16, 185, 129, 0.25);
          border-color: rgba(16, 185, 129, 0.5);
        }

        .world-blue:hover {
          background: rgba(59, 130, 246, 0.25);
          border-color: rgba(59, 130, 246, 0.5);
        }

        .world-red:hover {
          background: rgba(239, 68, 68, 0.25);
          border-color: rgba(239, 68, 68, 0.5);
        }

        .world-icon {
          font-size: 80px;
          margin-bottom: 20px;
          filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.3));
          transition: transform 0.4s ease;
        }

        .world-card:hover .world-icon {
          transform: scale(1.15) rotate(-5deg);
        }

        .world-name {
          font-size: 24px;
          font-weight: 800;
          color: white;
          margin-bottom: 12px;
          text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
          position: relative;
          z-index: 1;
        }

        .world-description {
          font-size: 15px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.95);
          margin-bottom: 20px;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
          position: relative;
          z-index: 1;
        }

        .world-cta {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 16px;
          font-weight: 700;
          color: white;
          padding: 12px 24px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .world-card:hover .world-cta {
          background: rgba(255, 255, 255, 0.3);
          gap: 12px;
        }

        .arrow {
          font-size: 20px;
          transition: transform 0.3s ease;
        }

        .world-card:hover .arrow {
          transform: translateX(4px);
        }

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
          position: relative;
          overflow: hidden;
        }

        .feature-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.22);
          border: 1px solid rgba(255, 255, 255, 0.35);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
        }

        .feature-card:hover::before {
          opacity: 1;
        }

        .card-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
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
          margin-bottom: 10px;
        }

        .click-hint {
          display: inline-block;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.8);
          background: rgba(255, 255, 255, 0.15);
          padding: 4px 12px;
          border-radius: 20px;
          margin-top: 8px;
          font-weight: 500;
          opacity: 0;
          transform: translateY(-5px);
          transition: all 0.3s ease;
        }

        .feature-card:hover .click-hint {
          opacity: 1;
          transform: translateY(0);
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
          .worlds-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .world-icon {
            font-size: 70px;
          }

          .world-name {
            font-size: 22px;
          }

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

          .worlds-section {
            margin-top: 40px;
            padding: 0 15px;
          }

          .worlds-title {
            font-size: 26px;
            margin-bottom: 30px;
          }

          .worlds-grid {
            gap: 20px;
          }

          .world-card {
            padding: 30px 20px;
          }

          .world-icon {
            font-size: 65px;
          }

          .world-name {
            font-size: 20px;
          }

          .world-description {
            font-size: 14px;
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

          .click-hint {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Background>
  );
}