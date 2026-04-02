"use client";
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from './CartContext';
import { useTheme } from './ThemeContext';
import { useLang, Lang } from './LanguageContext';
import CartDrawer from './CartDrawer';

export default function Navbar() {
  const { totalItems } = useCart();
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, t } = useLang();
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isDark = theme === 'dark';
  const langs: Lang[] = ['fr', 'en', 'sw'];

  return (
    <>
      <nav className="glass" style={{ position: 'sticky', top: 0, zIndex: 1000, padding: '14px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 800, fontSize: '20px', color: 'var(--primary-green)' }}>
            <div style={{ width: '34px', height: '34px', background: 'linear-gradient(135deg,#006D44,#004d30)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>🌿</div>
            <span>MAKALA VERT</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="nav-links" style={{ display: 'flex', gap: '28px', fontWeight: 500, fontSize: '15px' }}>
            {([
              { href: '/#catalog', label: t.nav.catalog },
              { href: '/#mission', label: t.nav.mission },
              { href: '/track', label: t.nav.track },
              { href: '/#contact', label: t.nav.contact },
            ] as { href: string; label: string }[]).map(link => (
              <a key={link.href} href={link.href} style={{ color: 'var(--text-dark)', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary-green)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-dark)')}>
                {link.label}
              </a>
            ))}
          </div>

          {/* Right controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>

            {/* Language Switcher */}
            <div style={{ display: 'flex', gap: '4px', background: 'var(--surface)', borderRadius: '40px', padding: '4px', border: '1px solid var(--border)' }}>
              {langs.map(l => (
                <button key={l} onClick={() => setLang(l)}
                  style={{
                    padding: '5px 12px', borderRadius: '40px', fontSize: '12px', fontWeight: 700,
                    background: lang === l ? 'var(--primary-green)' : 'transparent',
                    color: lang === l ? 'white' : 'var(--text-muted)',
                    transition: 'all 0.2s', cursor: 'pointer',
                    textTransform: 'uppercase',
                  }}>
                  {l}
                </button>
              ))}
            </div>

            {/* Theme Toggle */}
            <button onClick={toggleTheme}
              title={isDark ? 'Mode Jour' : 'Mode Nuit'}
              style={{
                width: '40px', height: '40px', borderRadius: '50%',
                background: 'var(--surface)', border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '18px', cursor: 'pointer', transition: 'all 0.2s',
              }}>
              {isDark ? '☀️' : '🌙'}
            </button>

            {/* Cart Icon */}
            <button onClick={() => setCartOpen(true)}
              style={{ position: 'relative', background: 'none', border: 'none', cursor: 'pointer', padding: '6px' }}>
              <span style={{ fontSize: '22px' }}>🛒</span>
              {totalItems > 0 && (
                <div style={{ position: 'absolute', top: '0', right: '0', background: 'var(--secondary-blue)', color: 'white', borderRadius: '50%', width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 800 }}>
                  {totalItems}
                </div>
              )}
            </button>

            {/* Checkout button (hide on small screens) */}
            <button onClick={() => setCartOpen(true)}
              className="blue-gradient hide-mobile"
              style={{ color: 'white', padding: '10px 22px', borderRadius: '40px', fontWeight: 700, fontSize: '14px', transition: 'opacity 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
              {t.nav.checkout} {totalItems > 0 ? `(${totalItems})` : ''}
            </button>

            {/* Mobile Hamburger */}
            <button onClick={() => setMenuOpen(!menuOpen)}
              style={{ display: 'none', flexDirection: 'column', gap: '5px', cursor: 'pointer', padding: '4px' }}
              className="hamburger">
              <span style={{ width: '22px', height: '2px', background: 'var(--text-dark)', display: 'block', transition: 'all 0.2s' }}></span>
              <span style={{ width: '22px', height: '2px', background: 'var(--text-dark)', display: 'block', transition: 'all 0.2s' }}></span>
              <span style={{ width: '22px', height: '2px', background: 'var(--text-dark)', display: 'block', transition: 'all 0.2s' }}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div style={{ background: 'var(--card-bg)', borderTop: '1px solid var(--border)', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { href: '/#catalog', label: t.nav.catalog },
              { href: '/#mission', label: t.nav.mission },
              { href: '/track', label: t.nav.track },
              { href: '/#contact', label: t.nav.contact },
            ].map(link => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                style={{ color: 'var(--text-dark)', fontWeight: 600, fontSize: '16px', padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                {link.label}
              </a>
            ))}
            <button onClick={() => { setCartOpen(true); setMenuOpen(false); }}
              className="blue-gradient"
              style={{ color: 'white', padding: '14px', borderRadius: '12px', fontWeight: 700, marginTop: '8px' }}>
              {t.nav.checkout} {totalItems > 0 ? `(${totalItems})` : ''}
            </button>
          </div>
        )}
      </nav>

      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />

      <style>{`
        @media (max-width: 640px) {
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
