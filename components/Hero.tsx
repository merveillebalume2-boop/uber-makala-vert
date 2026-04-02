"use client";
import Image from 'next/image';
import { useLang } from './LanguageContext';

export default function Hero() {
  const { t } = useLang();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="premium-gradient animate-fade-in" style={{ padding: '80px 0', color: 'white', overflow: 'hidden' }}>
      <div className="container hero-grid">
        <div>
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.12)', padding: '8px 18px', borderRadius: '40px', fontSize: '13px', fontWeight: 700, marginBottom: '24px', letterSpacing: '1px' }}>
            {t.hero.badge}
          </div>
          <h1 style={{ fontSize: '68px', lineHeight: 1.1, marginBottom: '24px' }}>
            {t.hero.title}{' '}
            <span style={{ color: 'var(--accent-green)' }}>{t.hero.highlight}</span>
          </h1>
          <p style={{ fontSize: '19px', lineHeight: 1.7, opacity: 0.88, marginBottom: '40px', maxWidth: '520px' }}>
            {t.hero.subtitle}
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>

            {/* BTN 1 - Explorer le Catalogue (no icon) */}
            <button
              onClick={() => scrollTo('catalog')}
              className="blue-gradient"
              style={{ height: '54px', padding: '0 30px', borderRadius: '12px', fontWeight: 800, fontSize: '17px', cursor: 'pointer', color: 'white', border: 'none', transition: 'transform 0.2s, box-shadow 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(0,163,255,0.45)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              {t.hero.btn1}
            </button>

            {/* BTN 2 - Mission de Surveillance (no icon) */}
            <button
              onClick={() => scrollTo('mission')}
              style={{ height: '54px', padding: '0 30px', borderRadius: '12px', fontWeight: 700, fontSize: '17px', cursor: 'pointer', color: 'white', border: '1px solid rgba(255,255,255,0.35)', background: 'rgba(255,255,255,0.08)', transition: 'transform 0.2s, background 0.2s, box-shadow 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.background = 'rgba(255,255,255,0.18)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(255,255,255,0.12)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              {t.hero.btn2}
            </button>
          </div>
        </div>

        <div className="hero-image-wrap">
          <Image src="/images/hero.png" alt="Makala Vert Hero" fill priority style={{ objectFit: 'contain' }} />
        </div>
      </div>
    </section>
  );
}
