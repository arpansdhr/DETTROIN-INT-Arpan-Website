import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, GraduationCap, ChevronRight, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenAdmission }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Notice Board', href: '#notices' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, transition: 'var(--transition)' }}>
      {/* Top Announcement Bar */}
      <div style={{
        background: 'var(--primary-emerald)',
        color: '#e2e8f0',
        fontSize: '0.85rem',
        padding: '8px 0',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Phone size={14} color="var(--accent-gold)" /> +91 7055582117
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Mail size={14} color="var(--accent-gold)" /> info@excellenceinternationalschool.com
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', opacity: 0.9 }}>
              <MapPin size={14} color="var(--accent-gold)" /> Ramghat Road, Aligarh, UP
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="badge-pill" style={{ padding: '2px 10px', fontSize: '0.75rem', background: 'rgba(245,158,11,0.2)', color: '#fbbf24' }}>
              <Sparkles size={12} /> Admissions Open 2026-2027
            </span>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navbar */}
      <nav style={{
        background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        boxShadow: isScrolled ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        borderBottom: '1px solid var(--border-light)',
        padding: isScrolled ? '12px 0' : '18px 0',
        transition: 'var(--transition)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Logo & Brand Name */}
          <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, var(--primary-emerald), var(--primary-emerald-light))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-gold)',
              boxShadow: '0 4px 12px rgba(15, 56, 44, 0.25)'
            }}>
              <GraduationCap size={28} />
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.35rem',
                fontWeight: 800,
                color: 'var(--primary-emerald)',
                lineHeight: 1.1
              }}>
                EXCELLENCE
              </div>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', color: 'var(--accent-gold-hover)', textTransform: 'uppercase' }}>
                International School • Aligarh
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="desktop-links">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  color: 'var(--text-dark)',
                  transition: 'var(--transition)',
                  position: 'relative'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--accent-gold-hover)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-dark)'}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button 
              className="btn-primary" 
              onClick={onOpenAdmission} 
              style={{ padding: '10px 22px', fontSize: '0.9rem' }}
            >
              Apply Now <ChevronRight size={16} />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'none',
                background: 'transparent',
                border: 'none',
                color: 'var(--primary-emerald)',
                padding: '4px'
              }}
              className="mobile-toggle"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div style={{
            background: 'var(--bg-white)',
            borderTop: '1px solid var(--border-light)',
            padding: '20px',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: 'var(--primary-emerald)',
                    padding: '8px 0',
                    borderBottom: '1px solid #f1f5f9'
                  }}
                >
                  {link.name}
                </a>
              ))}
              <button 
                className="btn-primary" 
                onClick={() => { setMobileMenuOpen(false); onOpenAdmission(); }}
                style={{ width: '100%', marginTop: '10px', justifyContent: 'center' }}
              >
                Apply for Admission 2026-2027
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Inline styling helper for mobile query */}
      <style>{`
        @media (max-width: 992px) {
          .desktop-links { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}
