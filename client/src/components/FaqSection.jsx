import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export default function FaqSection() {
  const [faqs, setFaqs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    fetch('/api/faqs')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setFaqs(data);
      })
      .catch(err => console.error('Failed to fetch FAQs', err));
  }, []);

  const filteredFaqs = faqs.filter(f => 
    f.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    f.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faqs" className="section-padding" style={{ background: 'var(--bg-cream)', position: 'relative' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="sub-tag">Have Questions?</span>
          <h2>Frequently Asked Questions</h2>
          <p>
            Find quick answers to common queries regarding admissions, transport, curriculum, and school facilities.
          </p>
        </div>

        {/* Search Bar */}
        <div style={{ maxWidth: '640px', margin: '0 auto 40px auto', position: 'relative' }}>
          <input
            type="text"
            placeholder="Search FAQs (e.g. transport, admissions, location)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '16px 20px 16px 52px',
              borderRadius: '9999px',
              border: '1px solid var(--border-light)',
              background: '#ffffff',
              boxShadow: 'var(--shadow-sm)',
              fontSize: '1rem'
            }}
          />
          <Search size={22} color="var(--primary-emerald)" style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)' }} />
        </div>

        {/* Accordion Container */}
        <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx} 
                  className="glass-card" 
                  style={{
                    borderRadius: '16px',
                    overflow: 'hidden',
                    borderLeft: isOpen ? '4px solid var(--accent-gold)' : '1px solid var(--border-light)'
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      background: 'transparent',
                      textAlign: 'left',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      color: 'var(--primary-emerald)'
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <HelpCircle size={20} color="var(--accent-gold-hover)" style={{ flexShrink: 0 }} />
                      {faq.question}
                    </span>
                    <ChevronDown size={20} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'var(--transition)' }} />
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 24px 24px 56px', color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.98rem' }} className="animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
              No matching questions found. Feel free to contact our school office!
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
