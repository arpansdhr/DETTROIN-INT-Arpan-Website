import React, { useState } from 'react';
import { Target, Compass, HeartHandshake, CheckCircle2, ShieldAlert, Award, Star, Quote } from 'lucide-react';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('vision');

  const coreValues = [
    { name: "Honesty & Integrity", desc: "Instilling moral truthfulness in every thought, word, and deed.", icon: "Shield" },
    { name: "Respect & Compassion", desc: "Fostering empathy, cultural acceptance, and mutual kindness.", icon: "Heart" },
    { name: "Discipline & Dedication", desc: "Building strong self-governance, punctual habits, and grit.", icon: "Award" },
    { name: "Curiosity & Innovation", desc: "Encouraging out-of-the-box thinking, STREAM experimentation, and passion.", icon: "Sparkles" }
  ];

  return (
    <section id="about" className="section-padding" style={{ background: 'var(--bg-white)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="sub-tag">About Excellence International School</span>
          <h2>Educating Minds, Nurturing Hearts</h2>
          <p>
            Located at Ramghat Road, Aligarh, Excellence International School is dedicated to providing modern education with a balanced approach to academic rigour, co-curricular mastery, and character development.
          </p>
        </div>

        {/* Vision, Mission & Philosophy Tab Switcher */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '48px', alignItems: 'center', marginBottom: '80px' }} className="about-grid">
          
          {/* Left Campus Showcase Card */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              border: '4px solid var(--bg-white)'
            }}>
              <img 
                src="/images/classroom.jpg" 
                alt="Excellence International School Classroom" 
                style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
              />
            </div>
            {/* Floating Quote Box */}
            <div style={{
              position: 'absolute',
              bottom: '-30px',
              right: '-20px',
              background: 'var(--primary-emerald)',
              color: '#ffffff',
              padding: '24px',
              borderRadius: '20px',
              maxWidth: '320px',
              boxShadow: 'var(--shadow-lg)'
            }} className="about-float-quote">
              <Quote size={28} color="var(--accent-gold)" style={{ marginBottom: '8px' }} />
              <p style={{ fontSize: '0.9rem', fontStyle: 'italic', lineHeight: 1.5 }}>
                "Education is not the learning of facts, but the training of the mind to think and innovate."
              </p>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-gold)', marginTop: '8px' }}>
                — Leadership Message
              </div>
            </div>
          </div>

          {/* Right Interactive Tabs */}
          <div>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', borderBottom: '2px solid #e2e8f0', paddingBottom: '12px' }}>
              <button
                onClick={() => setActiveTab('vision')}
                style={{
                  padding: '10px 20px',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '1rem',
                  background: activeTab === 'vision' ? 'var(--primary-emerald)' : 'transparent',
                  color: activeTab === 'vision' ? '#ffffff' : 'var(--text-muted)',
                  transition: 'var(--transition)'
                }}
              >
                Our Vision
              </button>
              <button
                onClick={() => setActiveTab('mission')}
                style={{
                  padding: '10px 20px',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '1rem',
                  background: activeTab === 'mission' ? 'var(--primary-emerald)' : 'transparent',
                  color: activeTab === 'mission' ? '#ffffff' : 'var(--text-muted)',
                  transition: 'var(--transition)'
                }}
              >
                Our Mission
              </button>
              <button
                onClick={() => setActiveTab('philosophy')}
                style={{
                  padding: '10px 20px',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '1rem',
                  background: activeTab === 'philosophy' ? 'var(--primary-emerald)' : 'transparent',
                  color: activeTab === 'philosophy' ? '#ffffff' : 'var(--text-muted)',
                  transition: 'var(--transition)'
                }}
              >
                Educational Philosophy
              </button>
            </div>

            {/* Tab Content */}
            <div className="glass-card" style={{ padding: '32px' }}>
              {activeTab === 'vision' && (
                <div className="animate-fade-in">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <Target size={28} color="var(--accent-gold)" />
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-emerald)' }}>To Create Confident & Global Innovators</h3>
                  </div>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '1.05rem', marginBottom: '20px' }}>
                    Our vision is to empower students with critical thinking, ethical leadership, and scientific curiosity so they emerge as compassionate global citizens capable of contributing meaningfully to society.
                  </p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600 }}>
                      <CheckCircle2 size={18} color="var(--primary-emerald)" /> World-class curriculum adapted to modern technological needs.
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600 }}>
                      <CheckCircle2 size={18} color="var(--primary-emerald)" /> Zero-tolerance safety policy with comprehensive support.
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === 'mission' && (
                <div className="animate-fade-in">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <Compass size={28} color="var(--accent-gold)" />
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-emerald)' }}>Empowering Every Student's Potential</h3>
                  </div>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '1.05rem', marginBottom: '20px' }}>
                    Deliver high-quality education through interactive classroom dynamics, personalized educator mentoring, concept-based mastery, and active physical & artistic development.
                  </p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600 }}>
                      <CheckCircle2 size={18} color="var(--primary-emerald)" /> STREAM (Science, Tech, Reading, Eng, Arts, Math) integration.
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600 }}>
                      <CheckCircle2 size={18} color="var(--primary-emerald)" /> Continuous performance tracking & parent involvement.
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === 'philosophy' && (
                <div className="animate-fade-in">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <HeartHandshake size={28} color="var(--accent-gold)" />
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-emerald)' }}>Holistic Child-Centered Learning</h3>
                  </div>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '1.05rem', marginBottom: '20px' }}>
                    We believe true education goes beyond rote memorization. We inspire children to ask "Why?", experiment fearlessly, and solve real-world problems while respecting moral values.
                  </p>
                </div>
              )}
            </div>

          </div>

        </div>

        {/* Core Values Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {coreValues.map((val, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '28px', borderLeft: '4px solid var(--accent-gold)' }}>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--primary-emerald)', marginBottom: '8px' }}>{val.name}</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{val.desc}</p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .about-float-quote { position: relative !important; right: 0 !important; bottom: 0 !important; margin-top: 16px; width: 100% !important; max-width: 100% !important; }
        }
      `}</style>
    </section>
  );
}
