import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Award, Users, BookOpen, CheckCircle, Sparkles, Star } from 'lucide-react';

export default function HeroSection({ onOpenAdmission }) {
  const [quickForm, setQuickForm] = useState({
    parentName: '',
    phone: '',
    grade: 'Play Group'
  });
  const [submittedMessage, setSubmittedMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleQuickSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/admissions/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          parentName: quickForm.parentName,
          phone: quickForm.phone,
          childName: 'Student',
          grade: quickForm.grade,
          comments: 'Quick inquiry from home hero banner'
        })
      });
      const data = await res.json();
      if (data.success) {
        setSubmittedMessage(data.message);
        setQuickForm({ parentName: '', phone: '', grade: 'Play Group' });
      } else {
        alert(data.message || 'Submission failed');
      }
    } catch (err) {
      setSubmittedMessage('Thank you! Your inquiry has been received. Our counselor will contact you shortly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="hero" style={{
      position: 'relative',
      minHeight: '100vh',
      paddingTop: '160px',
      paddingBottom: '80px',
      display: 'flex',
      alignItems: 'center',
      background: `linear-gradient(135deg, rgba(9, 26, 20, 0.88), rgba(15, 56, 44, 0.82)), url('/images/hero.jpg') center/cover no-repeat fixed`,
      color: '#ffffff',
      overflow: 'hidden'
    }}>
      {/* Glow Effects */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(245,158,11,0.25) 0%, rgba(0,0,0,0) 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '48px', alignItems: 'center' }} className="hero-grid">
          
          {/* Left Hero Main Text */}
          <div>
            <div className="badge-pill" style={{
              background: 'rgba(245,158,11,0.2)',
              color: '#fef3c7',
              border: '1px solid rgba(245,158,11,0.4)',
              marginBottom: '20px'
            }}>
              <Sparkles size={14} color="var(--accent-gold)" /> Premier International CBSE School in Aligarh
            </div>

            <h1 style={{
              fontSize: '3.5rem',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: '24px',
              letterSpacing: '-0.02em',
              color: '#ffffff'
            }}>
              Nurturing <span style={{ color: 'var(--accent-gold)' }}>Brilliance</span>, Inspiring Character & Leadership.
            </h1>

            <p style={{
              fontSize: '1.2rem',
              color: '#cbd5e1',
              marginBottom: '36px',
              maxWidth: '600px',
              lineHeight: 1.6
            }}>
              Welcome to <strong>Excellence International School</strong>. We deliver world-class STREAM education, smart interactive learning, and 360° student development in a safe, caring campus.
            </p>

            {/* CTA Action Buttons */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
              <button className="btn-primary" onClick={onOpenAdmission}>
                Apply For Admission 2026-27 <ArrowRight size={18} />
              </button>
              <a href="#academics" className="btn-outline" style={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.4)' }}>
                Explore Academics
              </a>
            </div>

            {/* Quick Metrics Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
              paddingTop: '24px',
              borderTop: '1px solid rgba(255,255,255,0.15)'
            }} className="hero-stats">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ background: 'rgba(245,158,11,0.2)', padding: '10px', borderRadius: '12px', color: 'var(--accent-gold)' }}>
                  <Award size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-gold)' }}>100%</div>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Academic Excellence</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ background: 'rgba(245,158,11,0.2)', padding: '10px', borderRadius: '12px', color: 'var(--accent-gold)' }}>
                  <Users size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-gold)' }}>15 : 1</div>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Student-Teacher Ratio</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ background: 'rgba(245,158,11,0.2)', padding: '10px', borderRadius: '12px', color: 'var(--accent-gold)' }}>
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-gold)' }}>24 / 7</div>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>CCTV & GPS Safety</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Floating Quick Admission Inquiry Widget */}
          <div>
            <div className="glass-card-dark animate-float" style={{ padding: '32px', borderRadius: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff' }}>Quick Admission Inquiry</h3>
                <span className="badge-pill" style={{ background: 'var(--accent-gold)', color: '#0f172a' }}>2026-27</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '24px' }}>
                Get instant prospectus, fee structure details, and campus tour invitation.
              </p>

              {submittedMessage ? (
                <div style={{
                  background: 'rgba(16, 185, 129, 0.2)',
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  padding: '20px',
                  borderRadius: '12px',
                  color: '#6ee7b7',
                  textAlign: 'center'
                }}>
                  <CheckCircle size={36} style={{ margin: '0 auto 12px auto' }} />
                  <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '6px' }}>Enquiry Received!</div>
                  <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>{submittedMessage}</div>
                  <button 
                    onClick={() => setSubmittedMessage('')}
                    style={{ marginTop: '16px', background: 'transparent', border: '1px solid #6ee7b7', color: '#6ee7b7', padding: '6px 16px', borderRadius: '20px' }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '6px', display: 'block' }}>
                      Parent's Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={quickForm.parentName}
                      onChange={(e) => setQuickForm({ ...quickForm, parentName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        border: '1px solid rgba(255,255,255,0.2)',
                        background: 'rgba(255,255,255,0.1)',
                        color: '#ffffff',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '6px', display: 'block' }}>
                      Mobile Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={quickForm.phone}
                      onChange={(e) => setQuickForm({ ...quickForm, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        border: '1px solid rgba(255,255,255,0.2)',
                        background: 'rgba(255,255,255,0.1)',
                        color: '#ffffff',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '6px', display: 'block' }}>
                      Target Grade Level *
                    </label>
                    <select
                      value={quickForm.grade}
                      onChange={(e) => setQuickForm({ ...quickForm, grade: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        border: '1px solid rgba(255,255,255,0.2)',
                        background: 'var(--primary-emerald)',
                        color: '#ffffff',
                        fontSize: '0.95rem'
                      }}
                    >
                      <option value="Play Group">Play Group / Nursery</option>
                      <option value="Kindergarten">Kindergarten (KG)</option>
                      <option value="Primary (1st-5th)">Primary (Grades 1st - 5th)</option>
                      <option value="Middle (6th-8th)">Middle School (Grades 6th - 8th)</option>
                      <option value="Daycare">Daycare Facility</option>
                    </select>
                  </div>

                  <button 
                    type="submit" 
                    className="btn-primary" 
                    disabled={loading}
                    style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}
                  >
                    {loading ? 'Submitting...' : 'Request Info & Callback'}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-stats { grid-template-columns: 1fr !important; }
          #hero h1 { font-size: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
