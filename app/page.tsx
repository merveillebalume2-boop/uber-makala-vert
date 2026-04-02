"use client";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductCatalog from '../components/ProductCatalog';
import { useLang } from '../components/LanguageContext';
import { useState } from 'react';

function FooterLink({ href, label }: { href: string; label: string }) {
  const [h, setH] = useState(false);
  return (
    <li style={{ marginBottom: '12px' }}>
      <a href={href}
        style={{ opacity: h ? 1 : 0.55, color: h ? 'var(--accent-green)' : 'white', textDecoration: 'none', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: h ? 600 : 400 }}
        onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
        {h && <span style={{ fontSize: '11px' }}>→</span>}{label}
      </a>
    </li>
  );
}

function SocialBtn({ href, label, icon }: { href: string; label: string; icon: string }) {
  const [h, setH] = useState(false);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '9px 16px', borderRadius: '40px', border: `1px solid ${h ? 'var(--accent-green)' : 'rgba(255,255,255,0.15)'}`, background: h ? 'rgba(74,222,128,0.1)' : 'transparent', color: h ? 'var(--accent-green)' : 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '13px', fontWeight: 600, transition: 'all 0.22s', transform: h ? 'translateY(-2px)' : 'translateY(0)' }}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
      <span style={{ fontSize: '15px' }}>{icon}</span>{label}
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
    await new Promise(r => setTimeout(r, 1200));
    setSent(true);
    setLoading(false);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '14px 18px', borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.12)',
    background: 'rgba(255,255,255,0.06)', color: 'white',
    fontSize: '16px', fontFamily: 'inherit', outline: 'none', transition: 'border-color 0.2s',
  };

  if (sent) return (
    <div className="animate-fade-in" style={{ textAlign: 'center', padding: '60px 0' }}>
      <div style={{ fontSize: '56px', marginBottom: '16px' }}>✅</div>
      <h3 style={{ fontSize: '22px', color: 'var(--accent-green)', marginBottom: '10px' }}>{c.successTitle}</h3>
      <p style={{ opacity: 0.7 }}>{c.successBody}</p>
      <button onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }}
        style={{ marginTop: '24px', padding: '12px 28px', borderRadius: '40px', border: '1px solid rgba(255,255,255,0.2)', background: 'transparent', color: 'white', cursor: 'pointer', fontWeight: 600 }}>
        {c.sendAnother}
      </button>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '640px', margin: '0 auto' }}>
      <div className="contact-form-grid">
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 600, opacity: 0.8 }}>{c.name}</label>
          <input required type="text" placeholder={c.namePlaceholder} value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })} style={inputStyle}
            onFocus={e => (e.target.style.borderColor = 'var(--accent-green)')}
            onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 600, opacity: 0.8 }}>{c.email}</label>
          <input required type="email" placeholder={c.emailPlaceholder} value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })} style={inputStyle}
            onFocus={e => (e.target.style.borderColor = 'var(--accent-green)')}
            onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')} />
        </div>
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 600, opacity: 0.8 }}>{c.message}</label>
        <textarea required rows={5} placeholder={c.messagePlaceholder} value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          style={{ ...inputStyle, resize: 'vertical' } as React.CSSProperties}
          onFocus={e => (e.target.style.borderColor = 'var(--accent-green)')}
          onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')} />
      </div>
      <button type="submit" disabled={loading} className="premium-gradient"
        style={{ height: '54px', borderRadius: '12px', color: 'white', fontWeight: 800, fontSize: '17px', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1, transition: 'all 0.2s', border: 'none' }}>
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
    <main style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <Navbar />
      <Hero />
      <ProductCatalog />

      {/* Mission Section */}
      <section id="mission" className="section-padding" style={{ background: 'var(--bg)' }}>
        <div className="container mission-grid">
          <div style={{ position: 'relative', minHeight: '480px', borderRadius: '24px', overflow: 'hidden', background: 'var(--surface)' }}>
            <div className="premium-gradient" style={{ position: 'absolute', inset: 0, opacity: 0.07 }}></div>
            <div style={{ padding: '52px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
              <div style={{ fontSize: 'clamp(14px, 2vw, 13px)', color: 'var(--primary-green)', fontWeight: 800, letterSpacing: '2px', marginBottom: '16px' }}>{m.badge}</div>
              <h2 style={{ marginBottom: '24px', color: 'var(--text-dark)' }}>{m.title}</h2>
              <p style={{ fontSize: '17px', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '32px' }}>{m.body}</p>
              <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontSize: '30px', fontWeight: 800, color: 'var(--primary-green)' }}>5 000+</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{m.stat1}</div>
                </div>
                <div>
                  <div style={{ fontSize: '30px', fontWeight: 800, color: 'var(--secondary-blue)' }}>12k+</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{m.stat2}</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div style={{ borderLeft: '4px solid var(--primary-green)', paddingLeft: '28px', marginBottom: '40px' }}>
              <h3 style={{ fontSize: '22px', marginBottom: '14px', color: 'var(--text-dark)' }}>{m.impact}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>{m.impactText}</p>
            </div>
            <div style={{ borderLeft: '4px solid var(--secondary-blue)', paddingLeft: '28px' }}>
              <h3 style={{ fontSize: '22px', marginBottom: '14px', color: 'var(--text-dark)' }}>{m.zeroWaste}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>{m.zeroWasteText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section style={{ background: 'var(--text-dark)', color: 'white', padding: '100px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ color: 'var(--accent-green)', fontWeight: 800, fontSize: '13px', letterSpacing: '2px', marginBottom: '12px' }}>{t.contact.badge}</div>
            <h2 style={{ fontSize: '44px', marginBottom: '14px' }}>{t.contact.title}</h2>
            <p style={{ opacity: 0.6, fontSize: '17px', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>{t.contact.subtitle}</p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" style={{ background: 'var(--footer-dark)', color: 'white', padding: '80px 0 40px 0' }}>
        <div className="container">
          <div className="footer-grid" style={{ marginBottom: '56px' }}>

            {/* Brand */}
            <div>
              <h3 style={{ fontSize: '20px', marginBottom: '14px', color: 'var(--accent-green)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                🌿 MAKALA VERT
              </h3>
              <p style={{ opacity: 0.55, lineHeight: 1.9, maxWidth: '270px', fontSize: '14px' }}>{f.tagline}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '24px' }}>
                <SocialBtn href="https://github.com/merveillebalume2-boop" label="GitHub" icon="💻" />
                <SocialBtn href="https://twitter.com/merveillebalume" label="Twitter" icon="🐦" />
                <SocialBtn href="https://instagram.com/merveillebalume" label="Instagram" icon="📸" />
                <SocialBtn href="https://facebook.com/merveillebalume" label="Facebook" icon="📘" />
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 style={{ marginBottom: '18px', fontSize: '13px', letterSpacing: '1.5px', opacity: 0.85 }}>{f.services}</h4>
              <ul style={{ listStyle: 'none' }}>
                <FooterLink href="/#catalog" label={f.service1} />
                <FooterLink href="/#catalog" label={f.service2} />
                <FooterLink href="/#catalog" label={f.service3} />
                <FooterLink href="/#catalog" label={f.service4} />
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 style={{ marginBottom: '18px', fontSize: '13px', letterSpacing: '1.5px', opacity: 0.85 }}>{f.company}</h4>
              <ul style={{ listStyle: 'none' }}>
                <FooterLink href="/#mission" label={f.company1} />
                <FooterLink href="/#mission" label={f.company2} />
                <FooterLink href="/#mission" label={f.company3} />
                <FooterLink href="/track" label={f.company4} />
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 style={{ marginBottom: '18px', fontSize: '13px', letterSpacing: '1.5px', opacity: 0.85 }}>{f.legal}</h4>
              <ul style={{ listStyle: 'none' }}>
                <FooterLink href="#" label={f.legal1} />
                <FooterLink href="#" label={f.legal2} />
                <FooterLink href="#" label={f.legal3} />
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '28px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '12px', opacity: 0.4, fontSize: '14px' }}>
            <div>{f.copyright}</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
