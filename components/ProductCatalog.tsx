"use client";
import Image from 'next/image';
import { useCart } from './CartContext';

const products = [
  {
    id: 1,
    name: "Standard Home Tank",
    price: 40.00,
    description: "20kg • Home Safety Valve",
    image: "/images/gas_tank.png",
    color: "var(--secondary-blue)"
  },
  {
    id: 2,
    name: "Commercial Cylinder",
    price: 85.00,
    description: "50kg • High Capacity Valve",
    image: "/images/gas_tank.png",
    color: "var(--primary-green)"
  },
  {
    id: 3,
    name: "Makala Vert Charcoal",
    price: 15.00,
    description: "10kg • Regenerative Agri-charcoal",
    image: "/images/charcoal.png",
    color: "var(--accent-green)"
  }
];

export default function ProductCatalog() {
  const { addToCart } = useCart();

  return (
    <section id="catalog" className="section-padding" style={{ background: 'var(--background-alt)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
          <div>
            <div style={{ color: 'var(--primary-green)', fontWeight: 800, fontSize: '14px', letterSpacing: '2px', marginBottom: '12px' }}>
              OUR CATALOG
            </div>
            <h2 style={{ fontSize: '48px' }}>Sustainable Solutions</h2>
          </div>
          <button style={{ color: 'var(--primary-green)', fontWeight: 700, fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            View Full List
            <div style={{ width: '32px', height: '32px', border: '1px solid currentColor', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>→</div>
          </button>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
          {products.map(product => (
            <div key={product.id} className="card" style={{ padding: '24px' }}>
              <div style={{ position: 'relative', height: '300px', background: 'var(--background-alt)', borderRadius: '12px', marginBottom: '24px' }}>
                <Image src={product.image} alt={product.name} fill style={{ objectFit: 'contain', padding: '40px' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <h3 style={{ fontSize: '20px' }}>{product.name}</h3>
                <span style={{ fontSize: '20px', fontWeight: 800, color: 'var(--primary-green)' }}>${product.price.toFixed(2)}</span>
              </div>
              <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>{product.description}</p>
              <button 
                onClick={() => addToCart(product)}
                className="premium-gradient" 
                style={{ width: '100%', height: '52px', color: 'white', borderRadius: '12px', fontWeight: 700, fontSize: '16px', transition: 'transform 0.1s active' }}>
                Add to Order
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
