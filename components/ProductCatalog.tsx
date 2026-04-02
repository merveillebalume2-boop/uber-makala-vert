"use client";
import Image from 'next/image';
import { useCart } from './CartContext';
import { useLang } from './LanguageContext';

export default function ProductCatalog() {
  const { addToCart } = useCart();
  const { t } = useLang();
  const products = t.products;

  return (
    <section id="catalog" className="section-padding" style={{ background: 'var(--surface)', position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px', flexWrap: 'wrap', gap: '24px' }} className="animate-fade-in">
          <div>
            <div style={{ color: 'var(--primary-green)', fontWeight: 800, fontSize: '13px', letterSpacing: '3px', marginBottom: '12px' }}>
              {t.catalog.badge}
            </div>
            <h2 style={{ fontSize: ' clamp(32px, 5vw, 48px)', letterSpacing: '-0.04em' }}>{t.catalog.title}</h2>
          </div>
          <button
            className="btn-premium"
            style={{ color: 'var(--primary-green)', fontWeight: 800, fontSize: '15px', display: 'flex', alignItems: 'center', gap: '10px', transition: 'all 0.3s ease', letterSpacing: '1px' }}
            onMouseEnter={e => (e.currentTarget.style.gap = '16px')}
            onMouseLeave={e => (e.currentTarget.style.gap = '10px')}
          >
            {t.catalog.viewAll.toUpperCase()} →
          </button>
        </div>

        <div className="catalog-grid">
          {products.map((product, idx) => (
            <div key={product.id} className="card animate-fade-in" style={{ padding: '28px', display: 'flex', flexDirection: 'column', animationDelay: `${idx * 0.1}s` }}>
              <div style={{ position: 'relative', height: '280px', background: 'var(--background-alt)', borderRadius: '16px', marginBottom: '24px', overflow: 'hidden', padding: '10%' }}>
                <div style={{ position: 'relative', width: '100%', height: '100%' }} className="animate-float">
                  <Image src={product.image} alt={product.name} fill style={{ objectFit: 'contain' }} />
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <h3 style={{ fontSize: '20px', color: 'var(--text-dark)', fontWeight: 800 }}>{product.name}</h3>
                <span style={{ fontSize: '22px', fontWeight: 900, color: 'var(--primary-green)', whiteSpace: 'nowrap' }}>${product.price.toFixed(2)}</span>
              </div>
              <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '15px', flex: 1, lineHeight: 1.6 }}>{product.description}</p>
              <button
                onClick={() => addToCart(product)}
                className="premium-gradient btn-premium"
                style={{ width: '100%', height: '56px', color: 'white', borderRadius: '14px', fontWeight: 800, fontSize: '16px', transition: 'all 0.3s ease', cursor: 'pointer' }}
              >
                {t.catalog.addToOrder}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
