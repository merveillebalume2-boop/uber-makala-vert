"use client";
import Image from 'next/image';
import { useLang } from './LanguageContext';

export default function Hero() {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section style={{ 
      position: 'relative', 
      padding: '180px 0 100px 0', 
      background: 'var(--bg)', 
      overflow: 'hidden',
      zIndex: 1
    }}>
      <div className="container hero-grid">
        <div style={{ position: 'relative', zIndex: 10 }}>
          <div className="animate-fade-in" style={{ 
            color: 'var(--primary-green)', 
            fontWeight: 800, 
            fontSize: '14px', 
            letterSpacing: '3px', 
            marginBottom: '20px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <span style={{ width: '40px', height: '2px', background: 'currentColor' }}></span>
            {h.badge}
          </div>
          <h1 className="animate-fade-in" style={{ 
            fontSize: 'clamp(44px, 7vw, 76px)', 
            lineHeight: 1.05, 
            marginBottom: '28px',
            letterSpacing: '-0.05em',
            fontWeight: 900,
            animationDelay: '0.1s'
          }}>
            {h.title} <span style={{ 
              color: 'var(--primary-green)', 
              background: 'linear-gradient(135deg, var(--accent-green), var(--primary-green))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>{h.highlight}</span>
          </h1>
          <p className="animate-fade-in" style={{ 
            fontSize: '20px', 
            color: 'var(--text-muted)', 
            lineHeight: 1.7, 
            marginBottom: '48px', 
            maxWidth: '540px',
            fontWeight: 500,
            animationDelay: '0.2s'
          }}>
            {h.subtitle}
          </p>
          <div className="animate-fade-in" style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '20px',
            animationDelay: '0.3s'
          }}>
            <a href="#catalog" className="premium-gradient btn-premium" style={{ 
              padding: '20px 44px', 
              borderRadius: '50px', 
              color: 'white', 
              fontWeight: 800, 
              fontSize: '17px',
              boxShadow: '0 15px 35px rgba(0,109,68,0.3)',
              display: 'inline-block'
            }}>
              {h.btn1}
            </a>
            <a href="#mission" className="glass-card btn-premium" style={{ 
              padding: '20px 44px', 
              borderRadius: '50px', 
              color: 'var(--text-dark)', 
              fontWeight: 800, 
              fontSize: '17px',
              border: '2px solid var(--border)',
              display: 'inline-block'
            }}>
              {h.btn2}
            </a>
          </div>
        </div>

        <div className="hero-image-wrap animate-fade-in" style={{ 
          animationDelay: '0.4s',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative'
        }}>
          {/* Background Highlight */}
          <div className="organic-shape" style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, var(--accent-green) 0%, var(--primary-green) 100%)',
            opacity: 0.1,
            zIndex: -1,
            animation: 'float 8s ease-in-out infinite'
          }} />
          
          <div className="animate-float" style={{ 
            width: '100%', 
            height: '100%', 
            position: 'relative',
            filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.15))'
          }}>
            <Image src="/images/hero.png" alt="Makala Vert Fuel" fill style={{ objectFit: 'contain' }} priority />
          </div>
        </div>
      </div>
    </section>
  );
}
