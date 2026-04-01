"use client";
import { useCart } from './CartContext';

type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cart, removeFromCart, clearCart, totalPrice, totalItems } = useCart();

  const handleOrder = async () => {
    if (cart.length === 0) return;
    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cart, total: totalPrice }),
      });
      const data = await res.json();
      alert(`✅ Commande confirmée ! Votre ID de suivi: ${data.orderId}`);
      clearCart();
      onClose();
    } catch {
      alert('Erreur lors de la commande. Réessayez.');
    }
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
            zIndex: 2000, backdropFilter: 'blur(4px)',
          }}
        />
      )}

      {/* Drawer panel */}
      <div style={{
        position: 'fixed',
        top: 0, right: 0, bottom: 0,
        width: '420px',
        maxWidth: '100vw',
        background: 'white',
        zIndex: 2001,
        transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: '-8px 0 32px rgba(0,0,0,0.15)',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Header */}
        <div style={{ padding: '24px', borderBottom: '1px solid rgba(0,0,0,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '22px' }}>
            Votre Panier
            {totalItems > 0 && (
              <span style={{ marginLeft: '8px', background: 'var(--secondary-blue)', color: 'white', borderRadius: '40px', padding: '2px 10px', fontSize: '14px' }}>
                {totalItems}
              </span>
            )}
          </h2>
          <button
            onClick={onClose}
            style={{ fontSize: '24px', cursor: 'pointer', background: 'none', border: 'none', color: 'var(--text-muted)', lineHeight: 1 }}
          >
            ✕
          </button>
        </div>

        {/* Cart items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', paddingTop: '80px', color: 'var(--text-muted)' }}>
              <div style={{ fontSize: '60px', marginBottom: '16px' }}>🛒</div>
              <p style={{ fontWeight: 600, fontSize: '18px' }}>Votre panier est vide</p>
              <p style={{ marginTop: '8px' }}>Ajoutez des produits depuis le catalogue.</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 0', borderBottom: '1px solid rgba(0,0,0,0.06)',
              }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '16px' }}>{item.name}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Qté: {item.quantity}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span style={{ fontWeight: 800, color: 'var(--primary-green)' }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{ color: '#f44', background: 'rgba(255,68,68,0.08)', border: 'none', borderRadius: '8px', padding: '4px 10px', cursor: 'pointer', fontWeight: 700 }}
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div style={{ padding: '24px', borderTop: '1px solid rgba(0,0,0,0.07)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', fontSize: '18px' }}>
              <span style={{ fontWeight: 600 }}>Total</span>
              <span style={{ fontWeight: 800, color: 'var(--primary-green)', fontSize: '22px' }}>
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <button
              onClick={handleOrder}
              className="premium-gradient"
              style={{ width: '100%', height: '56px', color: 'white', borderRadius: '14px', fontWeight: 800, fontSize: '18px', cursor: 'pointer' }}
            >
              Confirmer la Commande →
            </button>
            <button
              onClick={clearCart}
              style={{ width: '100%', marginTop: '12px', padding: '12px', color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px' }}
            >
              Vider le panier
            </button>
          </div>
        )}
      </div>
    </>
  );
}
