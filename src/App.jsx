import React, { useState } from 'react';
import { Play, Code, LineChart, Users, CheckCircle2, Terminal } from 'lucide-react';
import './index.css';

function App() {
  const [navScrolled, setNavScrolled] = useState(false);

  // Add scroll listener for navbar background
  React.useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${navScrolled ? 'glass' : ''}`} style={navScrolled ? { padding: '15px 0' } : {}}>
        <div className="container">
          <div className="logo d-flex">
            <Terminal color="#00f2fe" size={28} style={{ marginRight: '8px', verticalAlign: 'middle', display: 'inline' }} />
            <span style={{ verticalAlign: 'middle' }}>GenZ Coder</span>
          </div>
          <ul className="nav-links">
            <li><a href="#courses">Courses</a></li>
            <li><a href="#community">Community</a></li>
            <li><a href="#pricing">Pricing</a></li>
          </ul>
          <button className="btn btn-outline" style={{ padding: '8px 20px' }}>Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">
            Level Up Your Skills <br />
            With <span className="text-gradient">GenZ Coder</span>
          </h1>
          <p className="hero-subtitle">
            कोडिंग, डेटा एनालिसिस और एक्सेल सीखें, दोस्तों के साथ डिस्कस करें और अपने करियर को बूस्ट करें। No boring lectures, only OP content.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <button className="btn btn-primary">
              Join for ₹99 <span style={{ fontSize: '1.2rem', marginLeft: '4px' }}>→</span>
            </button>
            <button className="btn btn-outline">
              <Play size={18} /> Watch Trailer
            </button>
          </div>
          
          {/* Dashboard Preview mockup */}
          <div className="glass" style={{ 
            marginTop: '80px', 
            height: '400px', 
            maxWidth: '900px', 
            margin: '80px auto 0',
            borderRadius: '24px',
            border: '1px solid rgba(255,255,255,0.1)',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
          }}>
            {/* Fake Mac Window header */}
            <div style={{ background: 'rgba(0,0,0,0.5)', padding: '12px 20px', display: 'flex', gap: '8px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
            </div>
            {/* Dashboard fake content */}
            <div style={{ display: 'flex', height: '100%', padding: '24px' }}>
               <div style={{ width: '250px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', padding: '20px' }}>
                 <div style={{ width: '60%', height: '20px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', marginBottom: '24px' }}></div>
                 <div style={{ width: '100%', height: '12px', background: 'rgba(0, 242, 254, 0.2)', borderRadius: '4px', marginBottom: '16px' }}></div>
                 <div style={{ width: '80%', height: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '16px' }}></div>
                 <div style={{ width: '90%', height: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '16px' }}></div>
               </div>
               <div style={{ flex: 1, paddingLeft: '24px' }}>
                 <div style={{ width: '100%', height: '200px', background: 'rgba(242, 34, 255, 0.05)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed rgba(255,255,255,0.1)' }}>
                   <Play size={48} color="rgba(255,255,255,0.4)" />
                 </div>
                 <div style={{ marginTop: '24px', display: 'flex', gap: '16px' }}>
                    <div style={{ flex: 1, height: '80px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}></div>
                    <div style={{ flex: 1, height: '80px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}></div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="features">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-tag">Premium Content</span>
          <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>Master the Matrix</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>Bite-sized, practical modules designed for the modern learner.</p>
          
          <div className="features-grid">
            <div className="feature-card glass">
              <div className="feature-icon" style={{ background: 'rgba(0, 242, 254, 0.1)', color: 'var(--accent-cyan)' }}>
                <LineChart size={28} />
              </div>
              <h3>Advanced Excel</h3>
              <p>Módules covering basic rows, formulas (VLOOKUP, IF), Pivot Tables, Macros, and Data Visualisation.</p>
            </div>
            <div className="feature-card glass">
              <div className="feature-icon" style={{ background: 'rgba(242, 34, 255, 0.1)', color: 'var(--accent-pink)' }}>
                <Code size={28} />
              </div>
              <h3>Coding Foundations</h3>
              <p>From zero to hero. Learn logic, syntax, and build real-world programs from scratch.</p>
            </div>
            <div className="feature-card glass">
              <div className="feature-icon" style={{ background: 'rgba(79, 172, 254, 0.1)', color: 'var(--accent-purple)' }}>
                <Users size={28} />
              </div>
              <h3>Active Community</h3>
              <p>Join a thriving discord-like forum. Ask doubts, share projects, and collaborate with peers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="container">
          <span className="section-tag">Unlock Everything</span>
          <h2 style={{ fontSize: '3rem' }}>One Price. Zero Cap.</h2>
          
          <div className="pricing-card glass">
            <h3 style={{ fontSize: '1.5rem', fontFamily: 'Space Grotesk' }}>Pro Access</h3>
            <div className="price">₹99<span> / lifetime</span></div>
            <p style={{ color: 'var(--text-muted)' }}>Get full access to the AI LMS Platform forever.</p>
            
            <ul className="feature-list">
              <li><CheckCircle2 className="check-icon" size={20} /> All Video Modules (Hindi, EN, DE)</li>
              <li><CheckCircle2 className="check-icon" size={20} /> Personal Student Dashboard</li>
              <li><CheckCircle2 className="check-icon" size={20} /> Community Forum Access</li>
              <li><CheckCircle2 className="check-icon" size={20} /> Progress Tracking</li>
              <li><CheckCircle2 className="check-icon" size={20} /> Doubt Solving via AI & Peers</li>
            </ul>
            
            <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '16px' }}>
              Subscribe via Razorpay
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '16px' }}>
            <Terminal color="#00f2fe" size={20} />
            <span style={{ fontFamily: 'Space Grotesk', fontWeight: '700' }}>GenZ Coder</span>
          </div>
          <p>© 2026 GenZ Coder. Built for the next generation.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
