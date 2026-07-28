import React from 'react';
import { GraduationCap, Phone, Mail, MapPin, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ onOpenAdmission }) {
  return (
    <footer style={{ background: 'var(--primary-emerald)', color: '#ffffff', paddingTop: '80px', paddingBottom: '32px' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.8fr 0.8fr 1fr', gap: '40px', marginBottom: '64px' }} className="footer-grid">
          
          {/* Column 1: School Branding */}
          <div>
            <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', marginBottom: '20px' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'var(--accent-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0f172a'
              }}>
                <GraduationCap size={26} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800, color: '#ffffff' }}>
                  EXCELLENCE
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
                  International School • Aligarh
                </div>
              </div>
            </a>

            <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px', maxWidth: '340px' }}>
              Committed to providing holistic, STREAM-integrated education, modern values, and physical excellence in Aligarh, Uttar Pradesh.
            </p>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button 
                onClick={onOpenAdmission}
                className="btn-primary" 
                style={{ padding: '8px 18px', fontSize: '0.85rem' }}
              >
                Apply Admission 2026-27 <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.15rem', color: 'var(--accent-gold)', marginBottom: '20px', fontWeight: 700 }}>Quick Navigation</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.95rem', color: '#cbd5e1' }}>
              <li><a href="#hero" style={{ transition: 'var(--transition)' }}>Home Overview</a></li>
              <li><a href="#about" style={{ transition: 'var(--transition)' }}>About School & Vision</a></li>
              <li><a href="#academics" style={{ transition: 'var(--transition)' }}>STREAM Academics</a></li>
              <li><a href="#facilities" style={{ transition: 'var(--transition)' }}>Campus Facilities</a></li>
              <li><a href="#notices" style={{ transition: 'var(--transition)' }}>Notice Board & Events</a></li>
              <li><a href="#faqs" style={{ transition: 'var(--transition)' }}>Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Column 3: Academic Programs */}
          <div>
            <h4 style={{ fontSize: '1.15rem', color: 'var(--accent-gold)', marginBottom: '20px', fontWeight: 700 }}>Academic Stages</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.95rem', color: '#cbd5e1' }}>
              <li>Play Group & Nursery</li>
              <li>Kindergarten (KG)</li>
              <li>Primary School (1st-5th)</li>
              <li>Middle School (6th-8th)</li>
              <li>After-School Daycare</li>
              <li>STREAM & Robotics Lab</li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div>
            <h4 style={{ fontSize: '1.15rem', color: 'var(--accent-gold)', marginBottom: '20px', fontWeight: 700 }}>Campus Address</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem', color: '#cbd5e1' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <MapPin size={18} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Ramghat Road, Aligarh 202001, Uttar Pradesh, India</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Phone size={18} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                <span>+91 7055582117</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Mail size={18} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                <span style={{ wordBreak: 'break-all' }}>info@excellenceinternationalschool.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div style={{
          paddingTop: '32px',
          borderTop: '1px solid rgba(255,255,255,0.12)',
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.85rem',
          color: '#94a3b8'
        }}>
          <div>
            © {new Date().getFullYear()} Excellence International School, Aligarh. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Designed with</span> <Heart size={14} color="#ef4444" fill="#ef4444" /> <span>for Educational Excellence</span>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 576px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
