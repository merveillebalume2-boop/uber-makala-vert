"use client";
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="premium-gradient animate-fade-in" style={{ padding: '80px 0', color: 'white', overflow: 'hidden' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '60px' }}>
        <div>
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '40px', fontSize: '14px', fontWeight: 600, marginBottom: '24px' }}>
            BY VIRUNGA ECO-FLOW
          </div>
          <h1 style={{ fontSize: '72px', lineHeight: 1.1, marginBottom: '24px' }}>
            Regenerative Energy for <span style={{ color: 'var(--accent-green)' }}>Nord-Kivu</span>
          </h1>
          <p style={{ fontSize: '20px', lineHeight: 1.6, opacity: 0.9, marginBottom: '40px', maxWidth: '500px' }}>
            Uber for Gas & Makala Vert. Regenerative charcoal made from agricultural waste. Zero deforestation, high caloric value.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <button className="blue-gradient" style={{ height: '56px', padding: '0 32px', borderRadius: '12px', fontWeight: 800, fontSize: '18px' }}>
              Explore Catalog →
            </button>
            <button style={{ height: '56px', padding: '0 32px', borderRadius: '12px', fontWeight: 700, fontSize: '18px', border: '1px solid rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.05)' }}>
              Watch Mission
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
