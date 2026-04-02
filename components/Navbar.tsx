"use client";
import { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import { useLang } from './LanguageContext';
import { useCart } from './CartContext';
import CartDrawer from './CartDrawer';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, t } = useLang();
  const { totalItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItemStyle = (h: boolean) => ({
    fontSize: '15px', fontWeight: 600, color: h ? 'var(--primary-green)' : 'var(--text-dark)', opacity: h ? 1 : 0.8,
    transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px'
  });

  return (
    <>
      <nav className="glass" style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 1000,
        height: isScrolled ? '72px' : '90px', transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
        display: 'flex', alignItems: 'center',
        padding: '0 5%',
        background: isScrolled ? 'var(--glass-bg)' : 'transparent',
        boxShadow: isScrolled ? '0 10px 40px rgba(0,0,0,0.05)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border)' : '1px solid transparent'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: '1400px', margin: '0 auto' }}>
          
          {/* Logo */}
          <div style={{ fontSize: '22px', fontWeight: 900, color: 'var(--primary-green)', letterSpacing: '-1px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            🌿 <span className="hide-mobile">MAKALA VERT</span>
          </div>

          {/* Desktop Nav */}
          <div className="nav-links" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <a href="#catalog" style={navItemStyle(false)}>{t.nav.catalog}</a>
            <a href="#mission" style={navItemStyle(false)}>{t.nav.mission}</a>
            <a href="#contact" style={navItemStyle(false)}>{t.nav.contact}</a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            
            {/* Lang Switcher (Pills) */}
            <div style={{ display: 'flex', background: 'var(--background-alt)', padding: '4px', borderRadius: '40px', gap: '2px', border: '1px solid var(--border)' }}>
              {(['fr', 'en', 'sw'] as const).map(l => (
                <button key={l} onClick={() => setLang(l)} style={{
                  padding: '6px 12px', borderRadius: '40px', fontSize: '13px', fontWeight: 800,
                  background: lang === l ? 'var(--primary-green)' : 'transparent',
                  color: lang === l ? 'white' : 'var(--text-muted)',
                  transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)'
                }}>
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Theme Toggle */}
            <button onClick={toggleTheme} className="glass-card" style={{
              width: '44px', height: '44px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '20px', transition: 'all 0.3s ease', boxShadow: 'none'
            }}>
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            {/* Cart Button */}
            <button onClick={() => setIsCartOpen(true)} className="premium-gradient" style={{
              height: '44px', padding: '0 20px', borderRadius: '12px', color: 'white', fontWeight: 700,
              display: 'flex', alignItems: 'center', gap: '10px', transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
              boxShadow: '0 4px 15px rgba(0,109,68,0.25)'
            }}>
              🛍️ <span className="hide-mobile">{t.nav.checkout}</span>
              {totalItems > 0 && <span style={{ background: 'white', color: 'var(--primary-green)', padding: '2px 8px', borderRadius: '20px', fontSize: '12px', fontWeight: 900 }}>{totalItems}</span>}
            </button>

            {/* Mobile Menu Toggle */}
            <button className="hide-desktop" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ padding: '8px', fontSize: '24px', color: 'var(--text-dark)' }}>
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="animate-fade-in" style={{
            position: 'absolute', top: '100%', left: 0, width: '100%', background: 'var(--glass-bg)',
            backdropFilter: 'blur(16px)', borderTop: '1px solid var(--border)', padding: '24px',
            display: 'flex', flexDirection: 'column', gap: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
          }}>
            <a href="#catalog" onClick={() => setIsMenuOpen(false)} style={{ fontSize: '18px', fontWeight: 700 }}>{t.nav.catalog}</a>
            <a href="#mission" onClick={() => setIsMenuOpen(false)} style={{ fontSize: '18px', fontWeight: 700 }}>{t.nav.mission}</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} style={{ fontSize: '18px', fontWeight: 700 }}>{t.nav.contact}</a>
            <div style={{ padding: '16px', background: 'var(--background-alt)', borderRadius: '12px', fontSize: '14px', color: 'var(--text-muted)' }}>
              {theme === 'dark' ? 'Mode Sombre' : 'Mode Clair'} • {lang.toUpperCase()}
            </div>
          </div>
        )}
      </nav>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
