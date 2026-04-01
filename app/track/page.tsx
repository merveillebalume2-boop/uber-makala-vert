"use client";
import Navbar from '../../components/Navbar';
import { useState } from 'react';

export default function TrackOrder() {
  const [orderId, setOrderId] = useState('');
  const [status, setStatus] = useState<any>(null);

  const handleTrack = () => {
    // Mock tracking status
    setStatus({
      id: orderId || 'MV-482910',
      step: 3,
      steps: [
        { name: 'Order Received', time: '10:45 AM', active: true },
        { name: 'Producer Processing', time: '11:15 AM', active: true },
        { name: 'Driver Out for Delivery', time: '11:30 AM', active: true },
        { name: 'Delivered', time: '--:--', active: false },
      ],
      location: 'Route de Sake, Goma',
      eta: '12:00 PM'
    });
  };

  return (
    <main style={{ minHeight: '100vh', background: 'var(--background-alt)' }}>
      <Navbar />
      <div className="section-padding">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="card" style={{ padding: '60px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '42px', marginBottom: '16px' }}>Track Your Delivery</h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>Enter your order ID to see the real-time status of your energy delivery.</p>
            
            <div style={{ display: 'flex', gap: '16px', marginBottom: '60px' }}>
              <input 
                type="text" 
                placeholder="Order ID (e.g., MV-12345)" 
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                style={{ flex: 1, height: '56px', padding: '0 24px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)', fontSize: '16px' }} 
              />
              <button 
                onClick={handleTrack}
                className="premium-gradient" 
                style={{ padding: '0 40px', borderRadius: '12px', color: 'white', fontWeight: 700 }}>
                Track Now
              </button>
            </div>

            {status && (
               <div className="animate-fade-in" style={{ textAlign: 'left' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', paddingBottom: '24px', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                    <div>
                      <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '4px' }}>ORDER ID</div>
                      <div style={{ fontWeight: 800, fontSize: '20px' }}>{status.id}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '4px' }}>ESTIMATED ARRIVAL</div>
                      <div style={{ fontWeight: 800, fontSize: '20px', color: 'var(--secondary-blue)' }}>{status.eta}</div>
                    </div>
                  </div>

                  <div style={{ position: 'relative', paddingLeft: '40px' }}>
                    <div style={{ position: 'absolute', left: '19px', top: '10px', bottom: '10px', width: '2px', background: 'rgba(0,0,0,0.05)' }}></div>
                    {status.steps.map((step: any, i: number) => (
                       <div key={i} style={{ position: 'relative', marginBottom: '32px' }}>
                          <div style={{ 
                            position: 'absolute', 
                            left: '-32px', 
                            top: '4px', 
                            width: '24px', 
                            height: '24px', 
                            borderRadius: '50%', 
                            background: step.active ? 'var(--primary-green)' : 'white', 
                            border: '2px solid' + (step.active ? 'var(--primary-green)' : 'rgba(0,0,0,0.1)'),
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1
                          }}>
                            {step.active && <span style={{ color: 'white', fontSize: '12px' }}>✓</span>}
                          </div>
                          <div>
                            <div style={{ fontWeight: 700, color: step.active ? 'var(--text-dark)' : 'var(--text-muted)' }}>{step.name}</div>
                            <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{step.time}</div>
                          </div>
                       </div>
                    ))}
                  </div>

                  <div style={{ marginTop: '40px', padding: '24px', borderRadius: '12px', background: 'rgba(0, 163, 255, 0.05)', border: '1px solid rgba(0, 163, 255, 0.1)' }}>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                      <div style={{ fontSize: '24px' }}>📍</div>
                      <div>
                        <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>CURRENT LOCATION</div>
                        <div style={{ fontWeight: 700 }}>{status.location}</div>
                      </div>
                    </div>
                  </div>
               </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
