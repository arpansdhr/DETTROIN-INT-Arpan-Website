import React, { useState, useEffect } from 'react';
import { ShieldCheck, Monitor, Cpu, Trophy, Bus, BookOpen, Eye, X, CheckCircle2 } from 'lucide-react';

export default function FacilitiesSection({ onOpenAdmission }) {
  const [facilities, setFacilities] = useState([]);
  const [activeFacility, setActiveFacility] = useState(null);

  useEffect(() => {
    fetch('/api/facilities')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setFacilities(data);
      })
      .catch(err => console.error('Failed to fetch facilities', err));
  }, []);

  const getIconComponent = (iconName) => {
    switch (iconName) {
      case 'Monitor': return Monitor;
      case 'Cpu': return Cpu;
      case 'Trophy': return Trophy;
      case 'ShieldCheck': return ShieldCheck;
      case 'Bus': return Bus;
      case 'BookOpen': return BookOpen;
      default: return Monitor;
    }
  };

  return (
    <section id="facilities" className="section-padding" style={{ background: 'var(--bg-white)', position: 'relative' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="sub-tag">World-Class Infrastructure</span>
          <h2>Campus Facilities Designed for Excellence</h2>
          <p>
            Our modern campus at Ramghat Road provides safe, inspiring, and technologically equipped spaces to foster every child's growth.
          </p>
        </div>

        {/* Facilities Card Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
          {facilities.map((fac) => {
            const IconComp = getIconComponent(fac.icon);
            return (
              <div 
                key={fac.id} 
                className="glass-card" 
                style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <img 
                    src={fac.image} 
                    alt={fac.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'var(--transition)' }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  />
                  <span className="badge-pill" style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    background: 'rgba(15,56,44,0.85)',
                    color: '#ffffff',
                    backdropFilter: 'blur(8px)',
                    fontSize: '0.8rem'
                  }}>
                    {fac.category}
                  </span>
                </div>

                <div style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                      <div style={{
                        padding: '10px',
                        borderRadius: '12px',
                        background: 'var(--accent-gold-light)',
                        color: 'var(--accent-gold-hover)'
                      }}>
                        <IconComp size={22} />
                      </div>
                      <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-emerald)' }}>{fac.name}</h3>
                    </div>

                    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
                      {fac.description}
                    </p>
                  </div>

                  <button 
                    onClick={() => setActiveFacility(fac)}
                    className="btn-outline" 
                    style={{ padding: '8px 18px', fontSize: '0.85rem', alignSelf: 'flex-start' }}
                  >
                    View Facility Details <Eye size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal Popup */}
      {activeFacility && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 2000,
          background: 'rgba(9, 26, 20, 0.75)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div className="glass-card" style={{
            maxWidth: '600px',
            width: '100%',
            background: '#ffffff',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <div style={{ position: 'relative', height: '240px' }}>
              <img src={activeFacility.image} alt={activeFacility.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <button 
                onClick={() => setActiveFacility(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(0,0,0,0.6)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ padding: '32px' }}>
              <span className="badge-pill" style={{ marginBottom: '12px' }}>{activeFacility.category}</span>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-emerald)', marginBottom: '12px' }}>{activeFacility.name}</h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
                {activeFacility.description}
              </p>

              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                <button className="btn-outline" onClick={() => setActiveFacility(null)}>Close</button>
                <button className="btn-primary" onClick={() => { setActiveFacility(null); onOpenAdmission(); }}>
                  Apply For Admission
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
