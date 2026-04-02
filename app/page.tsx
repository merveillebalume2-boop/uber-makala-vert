"use client";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductCatalog from '../components/ProductCatalog';
import { useState } from 'react';

// ---- Footer Link with hover ----
function FooterLink({ href, children }: { href: string; children: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <li style={{ marginBottom: '12px' }}>
      <a
        href={href}
        style={{
          opacity: hovered ? 1 : 0.55,
          color: hovered ? 'var(--accent-green)' : 'white',
          textDecoration: 'none',
          transition: 'all 0.2s',
          display: 'flex', alignItems: 'center', gap: '6px',
          fontWeight: hovered ? 600 : 400,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {hovered && <span style={{ fontSize: '12px' }}>→</span>}
        {children}
      </a>
    </li>
  );
}

// ---- Social Button ----
function SocialBtn({ href, label, icon }: { href: string; label: string; icon: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex', alignItems: 'center', gap: '8px',
        padding: '10px 18px', borderRadius: '40px',
        border: `1px solid ${hovered ? 'var(--accent-green)' : 'rgba(255,255,255,0.15)'}`,
        background: hovered ? 'rgba(74,222,128,0.1)' : 'transparent',
        color: hovered ? 'var(--accent-green)' : 'rgba(255,255,255,0.6)',
        textDecoration: 'none', fontSize: '14px', fontWeight: 600,
        transition: 'all 0.25s', cursor: 'pointer',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={{ fontSize: '16px' }}>{icon}</span>
      {label}
    </a>
  );
}

// ---- Contact Form ----
function ContactForm() {
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

  const inputStyle = {
    width: '100%', padding: '14px 18px',
    borderRadius: '12px', border: '1px solid rgba(255,255,255,0.12)',
    background: 'rgba(255,255,255,0.05)', color: 'white',
    fontSize: '16px', fontFamily: 'inherit', outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <div style={{ maxWidth: '640px', margin: '0 auto' }}>
      {sent ? (
        <div className="animate-fade-in" style={{ textAlign: 'center', padding: '60px 0' }}>
          <div style={{ fontSize: '60px', marginBottom: '16px' }}>✅</div>
          <h3 style={{ fontSize: '24px', color: 'var(--accent-green)', marginBottom: '12px' }}>Message envoyé !</h3>
          <p style={{ opacity: 0.7 }}>Nous vous répondrons dans les 24h. Merci de nous contacter.</p>
          <button
            onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }}
            style={{ marginTop: '24px', padding: '12px 28px', borderRadius: '40px', border: '1px solid rgba(255,255,255,0.2)', background: 'transparent', color: 'white', cursor: 'pointer', fontWeight: 600 }}
          >
            Envoyer un autre message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 600, opacity: 0.8 }}>Votre nom *</label>
              <input
                required
                type="text"
                placeholder="Ex: Jean Mwamba"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'var(--accent-green)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 600, opacity: 0.8 }}>Email *</label>
              <input
                required
                type="email"
                placeholder="votre@email.com"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'var(--accent-green)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
              />
            </div>
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 600, opacity: 0.8 }}>Votre message *</label>
            <textarea
              required
              rows={5}
              placeholder="Décrivez votre besoin en énergie, commande spéciale ou partenariat..."
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              style={{ ...inputStyle, resize: 'vertical' }}
              onFocus={e => e.target.style.borderColor = 'var(--accent-green)'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="premium-gradient"
            style={{ height: '56px', borderRadius: '12px', color: 'white', fontWeight: 800, fontSize: '18px', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1, transition: 'all 0.2s', border: 'none' }}
          >
            {loading ? '⏳ Envoi en cours...' : '📩 Envoyer le Message'}
          </button>
        </form>
      )}
    </div>
  );
}

// ---- Main Page ----
export default function Home() {
  return (
    <main style={{ minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <ProductCatalog />

      {/* Mission Section */}
      <section id="mission" className="section-padding">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '80px' }}>
          <div style={{ position: 'relative', height: '600px', borderRadius: '24px', overflow: 'hidden', background: 'var(--background-alt)' }}>
            <div className="premium-gradient" style={{ position: 'absolute', inset: 0, opacity: 0.08 }}></div>
            <div style={{ padding: '60px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
              <div style={{ fontSize: '100px', opacity: 0.07, position: 'absolute', top: '20px', left: '40px', userSelect: 'none' }}>🌿</div>
              <h2 style={{ fontSize: '42px', marginBottom: '32px' }}>Régénérer<br />Notre Écosystème</h2>
              <p style={{ fontSize: '18px', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '32px' }}>
                Notre mission est de mettre fin à la déforestation pour le combustible dans la région des Virunga. En fournissant du charbon régénératif à partir de déchets agricoles, nous sauvons des hectares de forêts précieuses chaque mois.
              </p>
              <div style={{ display: 'flex', gap: '40px' }}>
                <div>
                  <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--primary-green)' }}>5 000+</div>
                  <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Hectares Sauvés</div>
                </div>
                <div>
                  <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--secondary-blue)' }}>12k+</div>
                  <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Commandes Livrées</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div style={{ borderLeft: '4px solid var(--primary-green)', paddingLeft: '32px', marginBottom: '40px' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>Impact Environnemental</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
                Chaque gramme de Makala Vert acheté soutient un agriculteur local et protège un gorille de montagne. Nous sommes le fournisseur d&apos;énergie éco-responsable pour un Nord-Kivu moderne.
              </p>
            </div>
            <div style={{ borderLeft: '4px solid var(--secondary-blue)', paddingLeft: '32px' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>Zéro Déchet</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
                Notre processus de production est entièrement circulaire, transformant les résidus agricoles en énergie premium à longue combustion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section style={{ background: 'var(--text-dark)', color: 'white', padding: '100px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{ color: 'var(--accent-green)', fontWeight: 800, fontSize: '14px', letterSpacing: '2px', marginBottom: '12px' }}>CONTACTEZ-NOUS</div>
            <h2 style={{ fontSize: '48px', marginBottom: '16px' }}>Parlons Énergie</h2>
            <p style={{ opacity: 0.6, fontSize: '18px', maxWidth: '500px', margin: '0 auto' }}>
              Commande professionnelle, partenariat ou simple question — notre équipe à Goma vous répond rapidement.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" style={{ background: '#0F1211', color: 'white', padding: '80px 0 40px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '60px', marginBottom: '60px' }}>

            {/* Brand Card */}
            <div>
              <h3 style={{ fontSize: '22px', marginBottom: '16px', color: 'var(--accent-green)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                🌿 MAKALA VERT
              </h3>
              <p style={{ opacity: 0.55, lineHeight: 1.9, maxWidth: '280px', fontSize: '15px' }}>
                Énergie éco-responsable pour l&apos;avenir du Nord-Kivu. Régénératif, fiable et accessible.
              </p>
              {/* Social Links */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '28px' }}>
                <SocialBtn href="https://github.com/merveillebalume2-boop" label="GitHub" icon="💻" />
                <SocialBtn href="https://twitter.com/merveillebalume" label="Twitter / X" icon="🐦" />
                <SocialBtn href="https://instagram.com/merveillebalume" label="Instagram" icon="📸" />
                <SocialBtn href="https://facebook.com/merveillebalume" label="Facebook" icon="📘" />
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 style={{ marginBottom: '20px', fontSize: '16px', letterSpacing: '1px', opacity: 0.9 }}>NOS SERVICES</h4>
              <ul style={{ listStyle: 'none' }}>
                <FooterLink href="/#catalog">Livraison Gaz LPG</FooterLink>
                <FooterLink href="/#catalog">Solutions Commerciales</FooterLink>
                <FooterLink href="/#catalog">Charbon Régénératif</FooterLink>
                <FooterLink href="/#catalog">Crédits Carbone</FooterLink>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 style={{ marginBottom: '20px', fontSize: '16px', letterSpacing: '1px', opacity: 0.9 }}>ENTREPRISE</h4>
              <ul style={{ listStyle: 'none' }}>
                <FooterLink href="/#mission">Notre Mission</FooterLink>
                <FooterLink href="/#mission">Vision 2030</FooterLink>
                <FooterLink href="/#mission">Durabilité</FooterLink>
                <FooterLink href="/track">Suivi Commande</FooterLink>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 style={{ marginBottom: '20px', fontSize: '16px', letterSpacing: '1px', opacity: 0.9 }}>LÉGAL</h4>
              <ul style={{ listStyle: 'none' }}>
                <FooterLink href="#">Politique de Confidentialité</FooterLink>
                <FooterLink href="#">Conditions Générales</FooterLink>
                <FooterLink href="#">Cookies</FooterLink>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: 0.4, fontSize: '13px' }}>
            <div>© 2026 Virunga Eco-Flow — All rights reserved.</div>
            <div>Made with 🌿 in Goma, Nord-Kivu, DRC</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
