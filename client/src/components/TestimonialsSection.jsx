import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { apiUrl } from '../apiClient';

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch(apiUrl('/api/testimonials'))
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setTestimonials(data);
      })
      .catch(err => console.error('Failed to fetch testimonials', err));
  }, []);

  if (testimonials.length === 0) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="section-padding" style={{ background: 'var(--bg-white)', position: 'relative' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="sub-tag">Parent Testimonials</span>
          <h2>What Parents Say About Excellence International School</h2>
          <p>
            Hear from families who have experienced our nurturing environment, academic growth, and character building.
          </p>
        </div>

        {/* Carousel View */}
        <div className="glass-card" style={{
          maxWidth: '860px',
          margin: '0 auto',
          padding: '48px',
          borderRadius: '32px',
          position: 'relative',
          borderTop: '6px solid var(--accent-gold)'
        }}>
          <Quote size={48} color="var(--accent-gold)" style={{ opacity: 0.3, position: 'absolute', top: '24px', right: '32px' }} />

          <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} size={20} fill="var(--accent-gold)" color="var(--accent-gold)" />
            ))}
          </div>

          <p style={{
            fontSize: '1.25rem',
            lineHeight: 1.7,
            color: 'var(--text-dark)',
            fontStyle: 'italic',
            marginBottom: '32px',
            fontFamily: 'var(--font-heading)'
          }}>
            "{current.text}"
          </p>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'var(--primary-emerald)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '1.2rem'
              }}>
                {current.name[0]}
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--primary-emerald)' }}>{current.name}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{current.role}</div>
              </div>
            </div>

            {/* Navigation controls */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <button 
                onClick={handlePrev} 
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  border: '1px solid var(--border-light)',
                  background: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <ChevronLeft size={20} color="var(--primary-emerald)" />
              </button>
              <button 
                onClick={handleNext} 
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  border: '1px solid var(--border-light)',
                  background: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <ChevronRight size={20} color="var(--primary-emerald)" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
