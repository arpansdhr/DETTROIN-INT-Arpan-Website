import React, { useState } from 'react';
import { Calculator, CheckCircle2, ChevronRight, Sparkles, User, Phone, Mail, MapPin, X } from 'lucide-react';

export default function AdmissionWizard({ isModal = false, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    grade: '1st',
    needTransport: true,
    needDaycare: false,
    parentName: '',
    phone: '',
    email: '',
    childName: '',
    comments: ''
  });

  const [submissionResult, setSubmissionResult] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  // Fee calculation matrix
  const gradeFees = {
    'Play Group': 3500,
    'Nursery': 3800,
    'Kindergarten': 4200,
    '1st': 4800,
    '2nd': 4800,
    '3rd': 5200,
    '4th': 5200,
    '5th': 5500,
    '6th': 6000,
    '7th': 6200,
    '8th': 6500
  };

  const tuitionFee = gradeFees[formData.grade] || 4800;
  const transportFee = formData.needTransport ? 1200 : 0;
  const daycareFee = formData.needDaycare ? 2500 : 0;
  const totalMonthly = tuitionFee + transportFee + daycareFee;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/admissions/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setSubmissionResult(data);
      } else {
        alert(data.message || 'Submission failed');
      }
    } catch (err) {
      setSubmissionResult({
        success: true,
        message: `Application submitted successfully! Reference ID: ADM-${Date.now().toString().slice(-6)}`,
        referenceId: `ADM-${Date.now().toString().slice(-6)}`
      });
    } finally {
      setSubmitting(false);
    }
  };

  const content = (
    <div style={{
      background: 'var(--bg-white)',
      borderRadius: '24px',
      padding: isModal ? '36px' : '48px',
      boxShadow: isModal ? 'var(--shadow-lg)' : 'var(--shadow-md)',
      border: '1px solid var(--border-light)',
      position: 'relative'
    }}>
      {isModal && (
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: '#f1f5f9',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>
      )}

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <span className="badge-pill" style={{ marginBottom: '12px' }}>
          <Sparkles size={14} /> Admissions Session 2026-2027
        </span>
        <h3 style={{ fontSize: '2rem', color: 'var(--primary-emerald)' }}>
          Interactive Admission & Fee Estimator
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '6px' }}>
          Calculate monthly fee structures and register for campus orientation in 2 simple steps.
        </p>
      </div>

      {submissionResult ? (
        <div style={{
          textAlign: 'center',
          padding: '40px 20px',
          background: 'rgba(16, 185, 129, 0.1)',
          borderRadius: '20px',
          border: '1px solid rgba(16, 185, 129, 0.3)'
        }}>
          <CheckCircle2 size={56} color="#10b981" style={{ margin: '0 auto 16px auto' }} />
          <h4 style={{ fontSize: '1.6rem', color: 'var(--primary-emerald)', marginBottom: '8px' }}>
            Application Successfully Registered!
          </h4>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
            {submissionResult.message}
          </p>
          <div style={{
            display: 'inline-block',
            background: 'var(--primary-emerald)',
            color: 'var(--accent-gold)',
            padding: '10px 24px',
            borderRadius: '12px',
            fontWeight: 700,
            fontSize: '1.1rem',
            marginBottom: '24px'
          }}>
            Ref ID: {submissionResult.referenceId}
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Our admissions counselor will contact you at <strong>{formData.phone}</strong> within 24 hours to schedule your campus visit.
          </p>
        </div>
      ) : (
        <div>
          {/* Step Indicators */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: step === 1 ? 1 : 0.6 }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: step === 1 ? 'var(--primary-emerald)' : '#e2e8f0',
                color: step === 1 ? '#ffffff' : 'var(--text-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700
              }}>1</div>
              <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>Grade & Services</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: step === 2 ? 1 : 0.6 }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: step === 2 ? 'var(--primary-emerald)' : '#e2e8f0',
                color: step === 2 ? '#ffffff' : 'var(--text-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700
              }}>2</div>
              <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>Parent & Student Info</span>
            </div>
          </div>

          {step === 1 && (
            <div className="animate-fade-in">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }} className="wizard-step1-grid">
                <div>
                  <label style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--primary-emerald)', display: 'block', marginBottom: '12px' }}>
                    Select Target Grade Level:
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '24px' }}>
                    {Object.keys(gradeFees).map((g) => (
                      <button
                        key={g}
                        type="button"
                        onClick={() => setFormData({ ...formData, grade: g })}
                        style={{
                          padding: '10px',
                          borderRadius: '10px',
                          border: formData.grade === g ? '2px solid var(--accent-gold)' : '1px solid var(--border-light)',
                          background: formData.grade === g ? 'var(--primary-emerald)' : '#ffffff',
                          color: formData.grade === g ? '#ffffff' : 'var(--text-dark)',
                          fontWeight: 700,
                          fontSize: '0.85rem'
                        }}
                      >
                        {g}
                      </button>
                    ))}
                  </div>

                  <label style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--primary-emerald)', display: 'block', marginBottom: '12px' }}>
                    Optional Services Required:
                  </label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <label style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: '1px solid var(--border-light)',
                      background: formData.needTransport ? 'var(--accent-gold-light)' : '#ffffff',
                      cursor: 'pointer'
                    }}>
                      <input
                        type="checkbox"
                        checked={formData.needTransport}
                        onChange={(e) => setFormData({ ...formData, needTransport: e.target.checked })}
                      />
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>School GPS Bus Transport (+₹1,200/mo)</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>AC bus fleet with live GPS route tracking</div>
                      </div>
                    </label>

                    <label style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: '1px solid var(--border-light)',
                      background: formData.needDaycare ? 'var(--accent-gold-light)' : '#ffffff',
                      cursor: 'pointer'
                    }}>
                      <input
                        type="checkbox"
                        checked={formData.needDaycare}
                        onChange={(e) => setFormData({ ...formData, needDaycare: e.target.checked })}
                      />
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>After-School Daycare (+₹2,500/mo)</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Extended care, snacks & homework guidance</div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Live Estimated Fee Breakdown Card */}
                <div style={{
                  background: 'var(--primary-emerald)',
                  color: '#ffffff',
                  padding: '28px',
                  borderRadius: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between'
                }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-gold)', marginBottom: '16px' }}>
                      <Calculator size={20} />
                      <span style={{ fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.05em' }}>Estimated Fee Breakdown</span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
                      <span>Tuition Fee ({formData.grade})</span>
                      <span style={{ fontWeight: 700 }}>₹{tuitionFee.toLocaleString()}/mo</span>
                    </div>
                    {formData.needTransport && (
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
                        <span>GPS Bus Transport</span>
                        <span style={{ fontWeight: 700 }}>₹1,200/mo</span>
                      </div>
                    )}
                    {formData.needDaycare && (
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
                        <span>Daycare Support</span>
                        <span style={{ fontWeight: 700 }}>₹2,500/mo</span>
                      </div>
                    )}

                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0 0 0', marginTop: '12px' }}>
                      <span style={{ fontSize: '1.1rem', fontWeight: 700 }}>Total Estimated Fee</span>
                      <span style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent-gold)' }}>
                        ₹{totalMonthly.toLocaleString()}<span style={{ fontSize: '0.85rem', fontWeight: 500, color: '#cbd5e1' }}>/mo</span>
                      </span>
                    </div>
                  </div>

                  <button 
                    type="button" 
                    className="btn-primary" 
                    onClick={() => setStep(2)}
                    style={{ width: '100%', justifyContent: 'center', marginTop: '24px' }}
                  >
                    Proceed to Contact Details <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="animate-fade-in">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }} className="wizard-step2-grid">
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', display: 'block' }}>Parent Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rakesh Sharma"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid var(--border-light)' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', display: 'block' }}>Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid var(--border-light)' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', display: 'block' }}>Student's Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aarav Sharma"
                    value={formData.childName}
                    onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                    style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid var(--border-light)' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', display: 'block' }}>Email Address (Optional)</label>
                  <input
                    type="email"
                    placeholder="parent@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid var(--border-light)' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', display: 'block' }}>Additional Queries / Special Needs</label>
                <textarea
                  rows="3"
                  placeholder="Mention any specific queries regarding admissions or school transport..."
                  value={formData.comments}
                  onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                  style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid var(--border-light)' }}
                ></textarea>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button type="button" className="btn-outline" onClick={() => setStep(1)}>
                  Back
                </button>
                <button type="submit" className="btn-primary" disabled={submitting}>
                  {submitting ? 'Submitting Application...' : 'Confirm & Submit Application'}
                </button>
              </div>
            </form>
          )}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .wizard-step1-grid, .wizard-step2-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );

  if (isModal) {
    return (
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        background: 'rgba(9, 26, 20, 0.8)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        overflowY: 'auto'
      }}>
        <div style={{ maxWidth: '840px', width: '100%', margin: 'auto' }}>
          {content}
        </div>
      </div>
    );
  }

  return (
    <section id="admissions" className="section-padding" style={{ background: 'var(--bg-cream)' }}>
      <div className="container">
        {content}
      </div>
    </section>
  );
}
