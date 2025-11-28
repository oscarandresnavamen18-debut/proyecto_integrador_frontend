"use client";

import LiquidEther from "./components/LiquidEther";

export default function TiendaAgricolaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-white">
      <LiquidEther
        colors={['#10b981', '#34d399', '#6ee7b7']}
        mouseForce={20}
        cursorSize={100}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
