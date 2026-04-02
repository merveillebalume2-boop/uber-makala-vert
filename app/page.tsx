"use client";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductCatalog from '../components/ProductCatalog';
import { useLang } from '../components/LanguageContext';
import { useState } from 'react';

function DecorativeBlob({ top, left, size, color, delay }: any) {
  return (
    <div className="hide-mobile" style={{
      position: 'absolute', top, left, width: size, height: size,
      background: color, filter: 'blur(80px)', opacity: 0.12,
      zIndex: 0, animation: `pulse-soft 8s infinite ${delay}s`,
      pointerEvents: 'none', borderRadius: '50%'
    }} />
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  const [h, setH] = useState(false);
  return (
    <li style={{ marginBottom: '14px' }}>
      <a href={href}
        style={{
          opacity: h ? 1 : 0.6,
          color: h ? 'var(--accent-green)' : 'white',
          textDecoration: 'none',
          transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
          display: 'flex', alignItems: 'center', gap: '8px',
          fontWeight: h ? 600 : 400,
          transform: h ? 'translateX(6px)' : 'translateX(0)'
        }}
        onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
        {h && <span style={{ fontSize: '12px' }}>→</span>}{label}
      </a>
    </li>
  );
}

function SocialBtn({ href, label, icon }: { href: string; label: string; icon: string }) {
  const [h, setH] = useState(false);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      style={{
        display: 'flex', alignItems: 'center', gap: '10px',
        padding: '12px 20px', borderRadius: '50px',
        border: `1px solid ${h ? 'var(--accent-green)' : 'rgba(255,255,255,0.1)'}`,
        background: h ? 'rgba(74,222,128,0.08)' : 'rgba(255,255,255,0.03)',
        color: h ? 'var(--accent-green)' : 'rgba(255,255,255,0.7)',
        textDecoration: 'none', fontSize: '14px', fontWeight: 600,
        transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
        transform: h ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: h ? '0 10px 20px rgba(0,0,0,0.2)' : 'none'
      }}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
      <span style={{ fontSize: '18px' }}>{icon}</span>{label}
    </a>
  );
}

function ContactForm() {
  const { t } = useLang();
  const c = t.contact;
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setSent(true);
    setLoading(false);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '18px 22px', borderRadius: '16px',
    border: '1px solid rgba(255,255,255,0.1)',
    background: 'rgba(255,255,255,0.04)', color: 'white',
    fontSize: '16px', fontFamily: 'inherit', outline: 'none',
    transition: 'all 0.3s ease',
  };

  if (sent) return (
    <div className="animate-fade-in" style={{ textAlign: 'center', padding: '80px 20px', background: 'rgba(74,222,128,0.05)', borderRadius: '32px', border: '1px dashed var(--accent-green)' }}>
      <div style={{ fontSize: '72px', marginBottom: '24px' }}>✨</div>
      <h3 style={{ fontSize: '28px', color: 'var(--accent-green)', marginBottom: '16px' }}>{c.successTitle}</h3>
      <p style={{ opacity: 0.8, maxWidth: '400px', margin: '0 auto', lineHeight: 1.6 }}>{c.successBody}</p>
      <button onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }}
        className="btn-premium"
        style={{ marginTop: '32px', padding: '14px 40px', borderRadius: '50px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontWeight: 700 }}>
        {c.sendAnother}
      </button>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '700px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
      <div className="contact-form-grid">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '0.5px', opacity: 0.9, color: 'var(--accent-green)' }}>{c.name.toUpperCase()}</label>
          <input required type="text" placeholder={c.namePlaceholder} value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })} style={inputStyle}
            onFocus={e => { e.target.style.borderColor = 'var(--accent-green)'; e.target.style.background = 'rgba(255,255,255,0.08)'; }}
            onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.background = 'rgba(255,255,255,0.04)'; }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '0.5px', opacity: 0.9, color: 'var(--accent-green)' }}>{c.email.toUpperCase()}</label>
          <input required type="email" placeholder={c.emailPlaceholder} value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })} style={inputStyle}
            onFocus={e => { e.target.style.borderColor = 'var(--accent-green)'; e.target.style.background = 'rgba(255,255,255,0.08)'; }}
            onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.background = 'rgba(255,255,255,0.04)'; }} />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '0.5px', opacity: 0.9, color: 'var(--accent-green)' }}>{c.message.toUpperCase()}</label>
        <textarea required rows={6} placeholder={c.messagePlaceholder} value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          style={{ ...inputStyle, resize: 'none' } as React.CSSProperties}
          onFocus={e => { e.target.style.borderColor = 'var(--accent-green)'; e.target.style.background = 'rgba(255,255,255,0.08)'; }}
          onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.background = 'rgba(255,255,255,0.04)'; }} />
      </div>
      <button type="submit" disabled={loading} className="premium-gradient btn-premium"
        style={{ height: '60px', borderRadius: '16px', color: 'white', fontWeight: 800, fontSize: '18px', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1, transition: 'all 0.3s', border: 'none', boxShadow: '0 10px 30px rgba(0,109,68,0.3)' }}>
        {loading ? c.sending : c.submit}
      </button>
    </form>
  );
}

export default function Home() {
  const { t } = useLang();
  const f = t.footer;
  const m = t.mission;

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      <Navbar />
      
      {/* Dynamic Backgrounds */}
      <DecorativeBlob top="-100px" left="-100px" size="500px" color="var(--primary-green)" delay="0" />
      <DecorativeBlob top="20%" left="80%" size="400px" color="var(--secondary-blue)" delay="2" />
      <DecorativeBlob top="60%" left="-150px" size="600px" color="var(--primary-green)" delay="4" />

      <Hero />
      <ProductCatalog />

      {/* Mission Section */}
      <section id="mission" className="section-padding" style={{ position: 'relative' }}>
        <div className="container mission-grid">
          <div className="glass-card animate-fade-in" style={{ position: 'relative', minHeight: '520px', padding: '60px', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="premium-gradient" style={{ position: 'absolute', inset: 0, opacity: 0.1 }}></div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontSize: '14px', color: 'var(--primary-green)', fontWeight: 800, letterSpacing: '2.5px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ width: '30px', height: '2px', background: 'currentColor' }}></span>
                {m.badge}
              </div>
              <h2 style={{ marginBottom: '28px', color: 'var(--text-dark)', fontSize: '48px', lineHeight: 1.1 }}>{m.title}</h2>
              <p style={{ fontSize: '18px', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '40px', fontWeight: 500 }}>{m.body}</p>
              <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
                <div className="animate-float">
                  <div style={{ fontSize: '38px', fontWeight: 800, color: 'var(--primary-green)', marginBottom: '4px' }}>5 000+</div>
                  <div style={{ fontSize: '14px', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>{m.stat1}</div>
                </div>
                <div className="animate-float" style={{ animationDelay: '0.5s' }}>
                  <div style={{ fontSize: '38px', fontWeight: 800, color: 'var(--secondary-blue)', marginBottom: '4px' }}>12k+</div>
                  <div style={{ fontSize: '14px', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>{m.stat2}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <div className="glass-card" style={{ padding: '40px', borderLeft: '6px solid var(--primary-green)', transition: 'all 0.3s ease' }}>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>🏔️</div>
              <h3 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--text-dark)' }}>{m.impact}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '16px' }}>{m.impactText}</p>
            </div>
            <div className="glass-card" style={{ padding: '40px', borderLeft: '6px solid var(--secondary-blue)', transition: 'all 0.3s ease' }}>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>♻️</div>
              <h3 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--text-dark)' }}>{m.zeroWaste}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '16px' }}>{m.zeroWasteText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ background: '#0F1211', color: 'white', padding: '140px 0', position: 'relative', overflow: 'hidden' }}>
        <DecorativeBlob top="40%" left="70%" size="400px" color="rgba(74,222,128,0.2)" delay="1" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }} className="animate-fade-in">
            <div style={{ color: 'var(--accent-green)', fontWeight: 800, fontSize: '14px', letterSpacing: '3px', marginBottom: '20px' }}>{t.contact.badge}</div>
            <h2 style={{ fontSize: '56px', marginBottom: '20px', letterSpacing: '-0.04em' }}>{t.contact.title}</h2>
            <p style={{ opacity: 0.6, fontSize: '19px', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7, fontWeight: 500 }}>{t.contact.subtitle}</p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" style={{ background: '#080C0A', color: 'white', padding: '100px 0 50px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div className="footer-grid" style={{ marginBottom: '80px' }}>
            {/* Brand */}
            <div>
              <h3 style={{ fontSize: '24px', marginBottom: '24px', color: 'var(--accent-green)', display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 900 }}>
                🌿 MAKALA VERT
              </h3>
              <p style={{ opacity: 0.5, lineHeight: 2, maxWidth: '300px', fontSize: '15px', marginBottom: '32px' }}>{f.tagline}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <SocialBtn href="https://github.com/merveillebalume2-boop" label="GitHub" icon="💻" />
                <SocialBtn href="https://twitter.com/merveillebalume" label="Twitter" icon="🐦" />
                <SocialBtn href="https://instagram.com/merveillebalume" label="Instagram" icon="📸" />
                <SocialBtn href="https://facebook.com/merveillebalume" label="Facebook" icon="📘" />
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 style={{ marginBottom: '28px', fontSize: '14px', letterSpacing: '2px', opacity: 0.4, fontWeight: 800 }}>{f.services}</h4>
              <ul style={{ listStyle: 'none' }}>
                <FooterLink href="/#catalog" label={f.service1} />
                <FooterLink href="/#catalog" label={f.service2} />
                <FooterLink href="/#catalog" label={f.service3} />
                <FooterLink href="/#catalog" label={f.service4} />
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 style={{ marginBottom: '28px', fontSize: '14px', letterSpacing: '2px', opacity: 0.4, fontWeight: 800 }}>{f.company}</h4>
              <ul style={{ listStyle: 'none' }}>
                <FooterLink href="/#mission" label={f.company1} />
                <FooterLink href="/#mission" label={f.company2} />
                <FooterLink href="/#mission" label={f.company3} />
                <FooterLink href="/track" label={f.company4} />
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 style={{ marginBottom: '28px', fontSize: '14px', letterSpacing: '2px', opacity: 0.4, fontWeight: 800 }}>{f.legal}</h4>
              <ul style={{ listStyle: 'none' }}>
                <FooterLink href="#" label={f.legal1} />
                <FooterLink href="#" label={f.legal2} />
                <FooterLink href="#" label={f.legal3} />
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: 0.3, fontSize: '14px', fontWeight: 500, letterSpacing: '0.5px' }}>
            <div>{f.copyright}</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
