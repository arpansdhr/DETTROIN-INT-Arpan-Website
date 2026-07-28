import React, { useState, useEffect } from 'react';
import { Bell, Calendar, MapPin, Sparkles, ArrowRight } from 'lucide-react';

export default function EventsNoticeBoard({ onOpenAdmission }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/api/events')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setEvents(data);
      })
      .catch(err => console.error('Failed to fetch events', err));
  }, []);

  return (
    <section id="notices" className="section-padding" style={{ background: 'var(--bg-white)', position: 'relative' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="sub-tag">School Notices & Events</span>
          <h2>Campus News & Upcoming Key Dates</h2>
          <p>
            Stay updated with academic schedules, inter-school competitions, sports tournaments, and parent workshops.
          </p>
        </div>

        {/* Live Announcement Ticker */}
        <div style={{
          background: 'linear-gradient(90deg, var(--primary-emerald), var(--primary-emerald-light))',
          color: '#ffffff',
          borderRadius: '16px',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '48px',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <div style={{
            background: 'var(--accent-gold)',
            color: '#0f172a',
            padding: '6px 12px',
            borderRadius: '8px',
            fontWeight: 800,
            fontSize: '0.8rem',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            flexShrink: 0
          }}>
            <Bell size={14} /> LIVE NOTICE
          </div>
          <div style={{ fontSize: '0.95rem', fontWeight: 500, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
            🎉 <strong>Admissions Open 2026-2027:</strong> Early registration fee discount applicable until end of August. Submit inquiry today!
          </div>
        </div>

        {/* Events Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
          {events.map((evt) => (
            <div key={evt.id} className="glass-card" style={{ padding: '28px', borderLeft: '4px solid var(--accent-gold)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span className="badge-pill" style={{ fontSize: '0.75rem', padding: '2px 10px' }}>{evt.category}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--accent-gold-hover)', fontWeight: 700 }}>
                    <Calendar size={14} /> {evt.date}
                  </div>
                </div>

                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-emerald)', marginBottom: '12px' }}>
                  {evt.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '16px' }}>
                  {evt.summary}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid #f1f5f9' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <MapPin size={12} /> {evt.location}
                </span>
                <button 
                  onClick={onOpenAdmission}
                  style={{ background: 'transparent', border: 'none', color: 'var(--primary-emerald)', fontWeight: 700, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                  Register <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
