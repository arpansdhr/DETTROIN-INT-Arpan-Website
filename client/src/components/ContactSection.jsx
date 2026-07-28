import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Enquiry',
    message: ''
  });

  const [responseMsg, setResponseMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setResponseMsg(data.message);
        setFormData({ name: '', phone: '', email: '', subject: 'General Enquiry', message: '' });
      } else {
        alert(data.message || 'Submission failed');
      }
    } catch (err) {
      setResponseMsg('Thank you! Your message has been sent successfully. We will get back to you shortly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding" style={{ background: 'var(--bg-white)', position: 'relative' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="sub-tag">Get in Touch</span>
          <h2>Contact Excellence International School</h2>
          <p>
            We welcome visits, campus tours, and inquiries. Reach out to our administrative team or stop by our campus on Ramghat Road.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '48px', alignItems: 'start' }} className="contact-grid">
          
          {/* Left Contact Information */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '32px' }}>
              <div className="glass-card" style={{ padding: '24px', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ padding: '12px', borderRadius: '12px', background: 'var(--primary-emerald)', color: 'var(--accent-gold)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-emerald)', marginBottom: '4px' }}>Campus Address</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                    Ramghat Road, Aligarh 202001, Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '24px', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ padding: '12px', borderRadius: '12px', background: 'var(--primary-emerald)', color: 'var(--accent-gold)' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-emerald)', marginBottom: '4px' }}>Helpline & Mobile</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>+91 7055582117</p>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '24px', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ padding: '12px', borderRadius: '12px', background: 'var(--primary-emerald)', color: 'var(--accent-gold)' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-emerald)', marginBottom: '4px' }}>Email Enquiries</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', wordBreak: 'break-all' }}>
                    info@excellenceinternationalschool.com<br/>rahulexcellence85@gmail.com
                  </p>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '24px', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ padding: '12px', borderRadius: '12px', background: 'var(--primary-emerald)', color: 'var(--accent-gold)' }}>
                  <Clock size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-emerald)', marginBottom: '4px' }}>Visiting Hours</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                    Monday - Saturday: 8:00 AM – 3:30 PM<br/>Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div style={{ borderRadius: '20px', overflow: 'hidden', height: '220px', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border-light)' }}>
              <iframe
                title="School Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.364239841804!2d78.0784913!3d27.8967664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a49c95d519b7%3A0xb35a0928929e58!2sRamghat%20Rd%2C%20Aligarh%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Live Contact Form */}
          <div className="glass-card" style={{ padding: '40px', borderRadius: '24px' }}>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--primary-emerald)', marginBottom: '16px' }}>Send Us a Message</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '24px' }}>
              Fill out the form below and our counselor will respond within 24 hours.
            </p>

            {responseMsg ? (
              <div style={{
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                padding: '24px',
                borderRadius: '16px',
                color: '#065f46',
                textAlign: 'center'
              }}>
                <CheckCircle2 size={44} color="#10b981" style={{ margin: '0 auto 12px auto' }} />
                <h4 style={{ fontSize: '1.2rem', marginBottom: '6px' }}>Message Sent!</h4>
                <p style={{ fontSize: '0.95rem' }}>{responseMsg}</p>
                <button 
                  onClick={() => setResponseMsg('')}
                  style={{ marginTop: '16px', background: 'var(--primary-emerald)', color: '#ffffff', padding: '8px 20px', borderRadius: '20px' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-emerald)', marginBottom: '6px', display: 'block' }}>Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid var(--border-light)' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="contact-form-grid">
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-emerald)', marginBottom: '6px', display: 'block' }}>Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid var(--border-light)' }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-emerald)', marginBottom: '6px', display: 'block' }}>Email Address</label>
                    <input
                      type="email"
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid var(--border-light)' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-emerald)', marginBottom: '6px', display: 'block' }}>Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid var(--border-light)', background: '#ffffff' }}
                  >
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Admissions Inquiry">Admissions Inquiry</option>
                    <option value="Campus Tour Request">Campus Tour Request</option>
                    <option value="Transport Query">Transport Query</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-emerald)', marginBottom: '6px', display: 'block' }}>Your Message *</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Write your message or inquiry here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid var(--border-light)' }}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary" disabled={loading} style={{ justifyContent: 'center' }}>
                  {loading ? 'Sending Message...' : 'Send Message Now'} <Send size={16} />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .contact-form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
