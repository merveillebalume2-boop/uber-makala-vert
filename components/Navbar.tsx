"use client";
import Link from 'next/link';
import { useCart } from './CartContext';

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="glass" style={{ position: 'sticky', top: 0, zIndex: 1000, padding: '16px 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800, fontSize: '24px', color: 'var(--primary-green)' }}>
          <div style={{ width: '32px', height: '32px', background: 'var(--primary-green)', borderRadius: '8px' }}></div>
          MAKALA VERT
        </Link>
        <div style={{ display: 'flex', gap: '32px', fontWeight: 500 }}>
          <Link href="/#catalog">Catalog</Link>
          <Link href="/#mission">Our Mission</Link>
          <Link href="/track">Track Orders</Link>
          <Link href="#contact">Contact</Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ position: 'relative', cursor: 'pointer' }}>
            <span style={{ fontSize: '24px' }}>🛒</span>
            {totalItems > 0 && (
              <div style={{ 
                position: 'absolute', 
                top: '-8px', 
                right: '-8px', 
                background: 'var(--secondary-blue)', 
                color: 'white', 
                borderRadius: '50%', 
                width: '20px', 
                height: '20px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '10px', 
                fontWeight: 800,
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}>
                {totalItems}
              </div>
            )}
          </div>
          <button className="blue-gradient" style={{ color: 'white', padding: '12px 24px', borderRadius: '40px', fontWeight: 600 }}>
            Checkout
          </button>
        </div>
      </div>
    </nav>
  );
}
