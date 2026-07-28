import React, { useState, useEffect } from 'react';
import { Image as ImageIcon, Eye, X } from 'lucide-react';

export default function GallerySection() {
  const [items, setItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    fetch('/api/gallery')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setItems(data);
      })
      .catch(err => console.error('Failed to fetch gallery', err));
  }, []);

  const categories = ['All', 'Academics', 'Campus', 'Sports', 'Events'];

  const filteredItems = activeCategory === 'All' 
    ? items 
    : items.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="gallery" className="section-padding" style={{ background: 'var(--bg-cream)', position: 'relative' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="sub-tag">Life at Excellence</span>
          <h2>Campus Life & Activity Gallery</h2>
          <p>
            Glimpses of daily classroom innovation, athletic tournaments, robotics workshops, and cultural celebrations.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '10px 24px',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '0.9rem',
                border: activeCategory === cat ? 'none' : '1px solid var(--border-light)',
                background: activeCategory === cat ? 'var(--primary-emerald)' : '#ffffff',
                color: activeCategory === cat ? '#ffffff' : 'var(--text-dark)',
                boxShadow: activeCategory === cat ? 'var(--shadow-sm)' : 'none',
                transition: 'var(--transition)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="glass-card animate-fade-in"
              style={{ overflow: 'hidden', cursor: 'pointer', borderRadius: '20px' }}
              onClick={() => setLightboxImage(item)}
            >
              <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'var(--transition)' }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.08)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(15,56,44,0.8), transparent 60%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '20px',
                  color: '#ffffff'
                }}>
                  <span className="badge-pill" style={{
                    alignSelf: 'flex-start',
                    fontSize: '0.75rem',
                    padding: '2px 10px',
                    background: 'rgba(245,158,11,0.9)',
                    color: '#0f172a',
                    marginBottom: '6px'
                  }}>
                    {item.category}
                  </span>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff' }}>{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal Viewer */}
      {lightboxImage && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 2000,
          background: 'rgba(0, 0, 0, 0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }} onClick={() => setLightboxImage(null)}>
          <div style={{ maxWidth: '900px', width: '100%', position: 'relative' }} onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setLightboxImage(null)}
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                background: 'transparent',
                color: '#ffffff',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <X size={32} />
            </button>
            <img src={lightboxImage.image} alt={lightboxImage.title} style={{ width: '100%', maxHeight: '75vh', objectFit: 'contain', borderRadius: '16px' }} />
            <div style={{ color: '#ffffff', textAlign: 'center', marginTop: '16px' }}>
              <h3 style={{ fontSize: '1.4rem' }}>{lightboxImage.title}</h3>
              <span style={{ fontSize: '0.9rem', color: 'var(--accent-gold)' }}>Category: {lightboxImage.category}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
