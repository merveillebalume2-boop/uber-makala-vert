"use client";
import Image from 'next/image';
import { useCart } from './CartContext';
import { useLang } from './LanguageContext';

export default function ProductCatalog() {
  const { addToCart } = useCart();
  const { t } = useLang();
  const products = t.products;

  return (
    <section id="catalog" className="section-padding" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '56px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ color: 'var(--primary-green)', fontWeight: 800, fontSize: '13px', letterSpacing: '2px', marginBottom: '10px' }}>
              {t.catalog.badge}
            </div>
            <h2 style={{ fontSize: '44px' }}>{t.catalog.title}</h2>
          </div>
          <button
            style={{ color: 'var(--primary-green)', fontWeight: 700, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'gap 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.gap = '14px')}
            onMouseLeave={e => (e.currentTarget.style.gap = '8px')}
          >
            {t.catalog.viewAll} →
          </button>
        </div>

        <div className="catalog-grid">
          {products.map((product) => (
            <div key={product.id} className="card" style={{ padding: '24px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', height: '260px', background: 'var(--background-alt)', borderRadius: '12px', marginBottom: '22px', overflow: 'hidden' }}>
                <Image src={product.image} alt={product.name} fill style={{ objectFit: 'contain', padding: '36px' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                <h3 style={{ fontSize: '18px', color: 'var(--text-dark)' }}>{product.name}</h3>
                <span style={{ fontSize: '20px', fontWeight: 800, color: 'var(--primary-green)', whiteSpace: 'nowrap' }}>${product.price.toFixed(2)}</span>
              </div>
              <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '14px', flex: 1 }}>{product.description}</p>
              <button
                onClick={() => addToCart(product)}
                className="premium-gradient"
                style={{ width: '100%', height: '50px', color: 'white', borderRadius: '12px', fontWeight: 700, fontSize: '15px', transition: 'opacity 0.2s, transform 0.15s', cursor: 'pointer' }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'scale(0.98)'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1)'; }}
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
