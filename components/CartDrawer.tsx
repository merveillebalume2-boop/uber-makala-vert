"use client";
import { useCart } from './CartContext';
import { useLang } from './LanguageContext';

type CartDrawerProps = { isOpen: boolean; onClose: () => void };

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cart, removeFromCart, clearCart, totalPrice, totalItems } = useCart();
  const { t } = useLang();
  const c = t.cart;

  const handleOrder = async () => {
    if (cart.length === 0) return;
    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cart, total: totalPrice }),
      });
      const data = await res.json();
      alert(`✅ ${c.confirm.replace(' →', '')} — ID: ${data.orderId}`);
      clearCart();
      onClose();
    } catch {
      alert('Erreur. Réessayez.');
    }
  };

  return (
    <>
      {isOpen && <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 2000, backdropFilter: 'blur(4px)' }} />}

      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0,
        width: '420px', maxWidth: '100vw',
        background: 'var(--card-bg)', color: 'var(--text-dark)',
        zIndex: 2001,
        transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
        boxShadow: '-8px 0 40px rgba(0,0,0,0.2)',
        display: 'flex', flexDirection: 'column',
      }}>
        {/* Header */}
        <div style={{ padding: '24px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '20px' }}>
            {c.title}
            {totalItems > 0 && <span style={{ marginLeft: '8px', background: 'var(--secondary-blue)', color: 'white', borderRadius: '40px', padding: '2px 10px', fontSize: '13px' }}>{totalItems}</span>}
          </h2>
          <button onClick={onClose} style={{ fontSize: '22px', color: 'var(--text-muted)', cursor: 'pointer' }}>✕</button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', paddingTop: '80px', color: 'var(--text-muted)' }}>
              <div style={{ fontSize: '56px', marginBottom: '16px' }}>🛒</div>
              <p style={{ fontWeight: 600, fontSize: '17px' }}>{c.empty}</p>
              <p style={{ marginTop: '8px', fontSize: '14px' }}>{c.emptyBody}</p>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: '1px solid var(--border)' }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '15px' }}>{item.name}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '13px' }}>{c.qty}: {item.quantity}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span style={{ fontWeight: 800, color: 'var(--primary-green)' }}>${(item.price * item.quantity).toFixed(2)}</span>
                  <button onClick={() => removeFromCart(item.id)} style={{ color: '#f55', background: 'rgba(255,80,80,0.08)', borderRadius: '8px', padding: '4px 10px', cursor: 'pointer', fontWeight: 700, fontSize: '13px' }}>✕</button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div style={{ padding: '20px', borderTop: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '18px', fontSize: '17px' }}>
              <span style={{ fontWeight: 600 }}>{c.total}</span>
              <span style={{ fontWeight: 800, color: 'var(--primary-green)', fontSize: '22px' }}>${totalPrice.toFixed(2)}</span>
            </div>
            <button onClick={handleOrder} className="premium-gradient"
              style={{ width: '100%', height: '54px', color: 'white', borderRadius: '14px', fontWeight: 800, fontSize: '17px', cursor: 'pointer', transition: 'opacity 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.9')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
              {c.confirm}
            </button>
            <button onClick={clearCart}
              style={{ width: '100%', marginTop: '10px', padding: '10px', color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px' }}>
              {c.clear}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
