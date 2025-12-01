'use client'

import React from 'react'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export default function InfoSection({ isOpen, onClose }: Props) {
  if (!isOpen) return null

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }} onClick={onClose}></div>
      <div style={{ background: 'white', color: '#064e3b', padding: 24, borderRadius: 12, maxWidth: 720, width: '90%', boxShadow: '0 8px 30px rgba(0,0,0,0.2)', zIndex: 60 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <h3 style={{ margin: 0 }}>Sobre Ganadería Sostenible</h3>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', fontSize: 18, cursor: 'pointer' }}>✕</button>
        </div>
        <div style={{ lineHeight: 1.6 }}>
          <p>Somos un proyecto comprometido con prácticas agropecuarias sostenibles, innovación y bienestar animal.</p>
          <p>Nuestros sistemas combinan trazabilidad, energías renovables y manejo responsable para ofrecer productos de alta calidad.</p>
        </div>
      </div>
    </div>
  )
}
