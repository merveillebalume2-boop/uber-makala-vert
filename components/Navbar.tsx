"use client";
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from './CartContext';
import CartDrawer from './CartDrawer';

export default function Navbar() {
  const { totalItems } = useCart();
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <nav className="glass" style={{ position: 'sticky', top: 0, zIndex: 1000, padding: '16px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 800, fontSize: '22px', color: 'var(--primary-green)', textDecoration: 'none' }}>
            <div style={{
              width: '34px', height: '34px',
              background: 'linear-gradient(135deg, var(--primary-green) 0%, #004d30 100%)',
              borderRadius: '8px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '18px'
            }}>🌿</div>
            MAKALA VERT
          </Link>

          {/* Menu Links */}
          <div style={{ display: 'flex', gap: '32px', fontWeight: 500, fontSize: '15px' }}>
            <a
              href="/#catalog"
              style={{ color: 'var(--text-dark)', textDecoration: 'none', cursor: 'pointer', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary-green)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-dark)')}
            >
              Catalogue
            </a>
            <a
              href="/#mission"
              style={{ color: 'var(--text-dark)', textDecoration: 'none', cursor: 'pointer', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary-green)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-dark)')}
            >
              Notre Mission
            </a>
            <Link
              href="/track"
              style={{ color: 'var(--text-dark)', textDecoration: 'none', cursor: 'pointer', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary-green)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-dark)')}
            >
              Suivi Commande
            </Link>
            <a
              href="/#contact"
              style={{ color: 'var(--text-dark)', textDecoration: 'none', cursor: 'pointer', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary-green)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-dark)')}
            >
              Contact
            </a>
          </div>

          {/* Cart + Checkout */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={() => setCartOpen(true)}
              style={{ position: 'relative', background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
              aria-label="Ouvrir le panier"
            >
              <span style={{ fontSize: '26px' }}>🛒</span>
              {totalItems > 0 && (
                <div style={{
                  position: 'absolute', top: '2px', right: '2px',
                  background: 'var(--secondary-blue)', color: 'white',
                  borderRadius: '50%', width: '20px', height: '20px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '11px', fontWeight: 800,
                  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                  animation: 'fadeIn 0.3s'
                }}>
                  {totalItems}
                </div>
              )}
            </button>

            <button
              onClick={() => setCartOpen(true)}
              className="blue-gradient"
              style={{ color: 'white', padding: '12px 28px', borderRadius: '40px', fontWeight: 700, fontSize: '15px', cursor: 'pointer', border: 'none', transition: 'opacity 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.9')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Checkout {totalItems > 0 ? `(${totalItems})` : ''}
            </button>
          </div>
        </div>
      </nav>

      {/* Slide-in cart drawer */}
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
