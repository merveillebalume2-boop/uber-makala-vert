"use client";
import Image from 'next/image';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="premium-gradient animate-fade-in" style={{ padding: '80px 0', color: 'white', overflow: 'hidden' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '60px' }}>
        <div>
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '40px', fontSize: '14px', fontWeight: 600, marginBottom: '24px' }}>
            BY VIRUNGA ECO-FLOW
          </div>
          <h1 style={{ fontSize: '68px', lineHeight: 1.1, marginBottom: '24px' }}>
            Énergie Régénérative pour <span style={{ color: 'var(--accent-green)' }}>Nord-Kivu</span>
          </h1>
          <p style={{ fontSize: '20px', lineHeight: 1.6, opacity: 0.9, marginBottom: '40px', maxWidth: '500px' }}>
            Uber pour le Gaz & Makala Vert. Charbon régénératif fabriqué à partir de déchets agricoles. Zéro déforestation, haute valeur calorifique.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {/* BTN 1: Explorer le Catalogue */}
            <button
              onClick={() => scrollTo('catalog')}
              className="blue-gradient"
              style={{
                height: '56px', padding: '0 32px', borderRadius: '12px',
                fontWeight: 800, fontSize: '18px', cursor: 'pointer', border: 'none',
                color: 'white', transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,163,255,0.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              🛒 Explorer le Catalogue
            </button>

            {/* BTN 2: Mission de Surveillance */}
            <button
              onClick={() => scrollTo('mission')}
              style={{
                height: '56px', padding: '0 32px', borderRadius: '12px',
                fontWeight: 700, fontSize: '18px', cursor: 'pointer',
                border: '1px solid rgba(255,255,255,0.4)',
                background: 'rgba(255,255,255,0.08)',
                color: 'white', transition: 'transform 0.2s, background 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.18)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,255,255,0.15)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              🌿 Mission de Surveillance
            </button>
          </div>
        </div>

        <div style={{ position: 'relative', height: '500px' }}>
          <Image
            src="/images/hero.png"
            alt="Makala Vert Hero"
            fill
            priority
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </section>
  );
}
