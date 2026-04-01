import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductCatalog from '../components/ProductCatalog';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <ProductCatalog />
      
      <section id="mission" className="section-padding">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '80px' }}>
          <div style={{ position: 'relative', height: '600px', borderRadius: '24px', overflow: 'hidden', background: 'var(--background-alt)' }}>
             <div className="premium-gradient" style={{ position: 'absolute', inset: 0, opacity: 0.1 }}></div>
             <div style={{ padding: '60px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
                <div style={{ fontSize: '100px', opacity: 0.1, position: 'absolute', top: '20px', left: '40px' }}>🌿</div>
                <h2 style={{ fontSize: '42px', marginBottom: '32px' }}>Regenerating<br/>Our Ecosystem</h2>
                <p style={{ fontSize: '18px', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '24px' }}>
                  Our mission is to end deforestation for fuel in the Virunga region. By providing regenerative charcoal made from agricultural waste, we save hectares of precious forests every month.
                </p>
                <div style={{ display: 'flex', gap: '40px' }}>
                  <div>
                    <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--primary-green)' }}>5,000+</div>
                    <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Hectares Saved</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--secondary-blue)' }}>12k+</div>
                    <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Orders Delivered</div>
                  </div>
                </div>
             </div>
          </div>
          <div>
            <div style={{ borderLeft: '4px solid var(--primary-green)', paddingLeft: '32px', marginBottom: '40px' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>Impact Driven</h3>
              <p style={{ color: 'var(--text-muted)' }}>
                Every gram of Makala Vert you buy supports a local farmer and protects a mountain gorilla. We are the ecosystem-conscious fuel provider for a modern Nord-Kivu.
              </p>
            </div>
            <div style={{ borderLeft: '4px solid var(--secondary-blue)', paddingLeft: '32px' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>Zero Waste</h3>
              <p style={{ color: 'var(--text-muted)' }}>
                Our production process is entirely circular, turning agricultural residue into premium, long-burning energy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ background: 'var(--text-dark)', color: 'white', padding: '100px 0 50px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '60px', marginBottom: '80px' }}>
            <div>
              <h3 style={{ fontSize: '24px', marginBottom: '24px', color: 'var(--accent-green)' }}>MAKALA VERT</h3>
              <p style={{ opacity: 0.6, lineHeight: 1.8, maxWidth: '300px' }}>
                Eco-conscious energy for the future of Nord-Kivu. Regenerative, reliable, and accessible.
              </p>
            </div>
            <div>
              <h4 style={{ marginBottom: '24px' }}>Our Services</h4>
              <ul style={{ listStyle: 'none', opacity: 0.6 }}>
                <li style={{ marginBottom: '12px' }}>LPG Gas Home Delivery</li>
                <li style={{ marginBottom: '12px' }}>Commercial Gas Solutions</li>
                <li style={{ marginBottom: '12px' }}>Regenerative Charcoal</li>
                <li>Carbon Credits</li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '24px' }}>Company</h4>
              <ul style={{ listStyle: 'none', opacity: 0.6 }}>
                <li style={{ marginBottom: '12px' }}>Our Mission</li>
                <li style={{ marginBottom: '12px' }}>Vision 2030</li>
                <li style={{ marginBottom: '12px' }}>Sustainability</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '24px' }}>Legal</h4>
              <ul style={{ listStyle: 'none', opacity: 0.6 }}>
                <li style={{ marginBottom: '12px' }}>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', opacity: 0.4, fontSize: '14px' }}>
            <div>© 2026 Virunga Eco-Flow. All rights reserved.</div>
            <div style={{ display: 'flex', gap: '32px' }}>
              <span>Twitter / X</span>
              <span>Instagram</span>
              <span>Facebook</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
