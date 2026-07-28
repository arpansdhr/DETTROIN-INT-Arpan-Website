import React, { useState, useEffect } from 'react';
import { BookOpen, Sparkles, Brain, Code, Palette, Microscope, CheckCircle2, ChevronRight, Calculator } from 'lucide-react';
import { apiUrl } from '../apiClient';

export default function AcademicsSection({ onOpenAdmission }) {
  const [stages, setStages] = useState([]);
  const [selectedStageId, setSelectedStageId] = useState('pre-primary');

  useEffect(() => {
    fetch(apiUrl('/api/academics'))
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setStages(data);
          setSelectedStageId(data[0].id);
        }
      })
      .catch(err => console.error('Failed to fetch academic stages', err));
  }, []);

  const activeStage = stages.find(s => s.id === selectedStageId) || stages[0];

  const streamPillars = [
    { title: "Science & Discovery", desc: "Hands-on physics, chemistry & biology lab experiments.", icon: Microscope },
    { title: "Technology & Robotics", desc: "Coding, AI fundamentals, 3D printing & Lego robotics.", icon: Code },
    { title: "Reading & Linguistics", desc: "Phonics, vocabulary, bilingual fluency & literature.", icon: BookOpen },
    { title: "Engineering Logic", desc: "Design thinking, structural mechanics & spatial puzzles.", icon: Brain },
    { title: "Arts & Performing", desc: "Classical music, fine art, dance, drama & theater.", icon: Palette },
    { title: "Applied Mathematics", desc: "Mental math, Vedic techniques & analytical reasoning.", icon: Calculator }
  ];

  return (
    <section id="academics" className="section-padding" style={{ background: 'var(--bg-cream)', position: 'relative' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="sub-tag">Academic Excellence & Curriculum</span>
          <h2>Structured Stages for Every Developmental Milestone</h2>
          <p>
            From playful early discovery to rigorous middle-school analytical training, our curriculum fosters academic mastery, confidence, and lifelong learning.
          </p>
        </div>

        {/* Academic Stage Selector Bar */}
        {stages.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '40px' }}>
            {stages.map((stage) => {
              const isActive = stage.id === selectedStageId;
              return (
                <button
                  key={stage.id}
                  onClick={() => setSelectedStageId(stage.id)}
                  className="glass-card"
                  style={{
                    padding: '20px',
                    textAlign: 'left',
                    background: isActive ? 'var(--primary-emerald)' : 'rgba(255,255,255,0.85)',
                    color: isActive ? '#ffffff' : 'var(--text-dark)',
                    border: isActive ? '2px solid var(--accent-gold)' : '1px solid var(--border-light)',
                    borderRadius: '16px'
                  }}
                >
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: isActive ? 'var(--accent-gold)' : 'var(--accent-gold-hover)', textTransform: 'uppercase', marginBottom: '4px' }}>
                    {stage.ageGroup}
                  </div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                    {stage.title}
                  </div>
                  <div style={{ fontSize: '0.85rem', opacity: 0.8, marginTop: '4px' }}>
                    {stage.subTitle}
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* Selected Stage Detail Showcase */}
        {activeStage && (
          <div className="glass-card" style={{ padding: '40px', marginBottom: '80px', borderTop: '6px solid var(--accent-gold)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', alignItems: 'center' }} className="stage-detail-grid">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <span className="badge-pill">{activeStage.ageGroup}</span>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>{activeStage.subTitle}</span>
                </div>

                <h3 style={{ fontSize: '2rem', color: 'var(--primary-emerald)', marginBottom: '16px' }}>
                  {activeStage.title} Program
                </h3>

                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '28px' }}>
                  {activeStage.description}
                </p>

                <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-emerald)', marginBottom: '16px', fontWeight: 700 }}>
                  Key Curriculum Pillars:
                </h4>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px', marginBottom: '32px' }}>
                  {activeStage.features.map((feat, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.95rem', color: 'var(--text-dark)' }}>
                      <CheckCircle2 size={20} color="var(--primary-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <button className="btn-primary" onClick={onOpenAdmission}>
                  Apply for {activeStage.title} <ChevronRight size={18} />
                </button>
              </div>

              {/* Stage Image */}
              <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                <img 
                  src={activeStage.id === 'pre-primary' ? '/images/Pre-Primary-School.webp' : activeStage.id === 'middle' ? '/images/lab.jpg' : '/images/classroom.jpg'} 
                  alt={activeStage.title} 
                  style={{ width: '100%', height: '340px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        )}

        {/* STREAM Innovation Grid */}
        <div style={{ background: 'var(--primary-emerald)', color: '#ffffff', borderRadius: '32px', padding: '48px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', marginBottom: '36px' }}>
            <div>
              <span className="badge-pill" style={{ background: 'rgba(245,158,11,0.2)', color: '#fbbf24', marginBottom: '12px' }}>
                <Sparkles size={14} /> Next-Gen Learning
              </span>
              <h3 style={{ fontSize: '2.2rem', color: '#ffffff' }}>STREAM Integrated Education</h3>
            </div>
            <p style={{ maxWidth: '500px', color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.5 }}>
              Integrating Science, Technology, Reading, Engineering, Arts, and Mathematics to develop well-rounded, future-ready minds.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {streamPillars.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div key={index} style={{
                  background: 'rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(12px)',
                  padding: '24px',
                  borderRadius: '20px',
                  border: '1px solid rgba(255,255,255,0.12)',
                  transition: 'var(--transition)'
                }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'var(--accent-gold)',
                    color: '#0f172a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px'
                  }}>
                    <IconComp size={24} />
                  </div>
                  <h4 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '8px' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .stage-detail-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
