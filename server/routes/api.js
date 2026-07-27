import express from 'express';
import { 
  schoolInfo, 
  stats, 
  academicStages, 
  facilities, 
  events, 
  faqs, 
  testimonials, 
  galleryItems 
} from '../data/schoolData.js';

const router = express.Router();

// Health Check
router.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Excellence International School API is online', timestamp: new Date() });
});

// General School Info
router.get('/info', (req, res) => {
  res.json(schoolInfo);
});

// Statistics
router.get('/stats', (req, res) => {
  res.json(stats);
});

// Academic Stages
router.get('/academics', (req, res) => {
  res.json(academicStages);
});

// Facilities
router.get('/facilities', (req, res) => {
  res.json(facilities);
});

// School Events
router.get('/events', (req, res) => {
  res.json(events);
});

// FAQs (with optional query filter)
router.get('/faqs', (req, res) => {
  const { category, search } = req.query;
  let result = faqs;
  if (category && category !== 'All') {
    result = result.filter(f => f.category.toLowerCase() === category.toLowerCase());
  }
  if (search) {
    const q = search.toLowerCase();
    result = result.filter(f => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q));
  }
  res.json(result);
});

// Testimonials
router.get('/testimonials', (req, res) => {
  res.json(testimonials);
});

// Gallery Items
router.get('/gallery', (req, res) => {
  const { category } = req.query;
  if (category && category !== 'All') {
    res.json(galleryItems.filter(item => item.category.toLowerCase() === category.toLowerCase()));
  } else {
    res.json(galleryItems);
  }
});

// In-memory submissions store
const admissionSubmissions = [];
const contactSubmissions = [];

// Admission Enquiry API
router.post('/admissions/enquiry', (req, res) => {
  const { parentName, phone, email, childName, grade, comments } = req.body;
  
  if (!parentName || !phone || !childName || !grade) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please provide parent name, phone number, child name, and target grade.' 
    });
  }

  const newEnquiry = {
    id: 'ADM-' + Date.now().toString().slice(-6),
    parentName,
    phone,
    email: email || 'N/A',
    childName,
    grade,
    comments: comments || '',
    submittedAt: new Date().toISOString(),
    status: 'Received - Academic Advisor Will Contact'
  };

  admissionSubmissions.push(newEnquiry);

  return res.status(201).json({
    success: true,
    message: `Thank you, ${parentName}! Admission inquiry for ${childName} (Grade: ${grade}) has been successfully submitted. Reference ID: ${newEnquiry.id}.`,
    referenceId: newEnquiry.id,
    data: newEnquiry
  });
});

// Contact Us Form API
router.post('/contact', (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !phone || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please complete all required fields: Name, Phone number, and Message.'
    });
  }

  const newMessage = {
    id: 'MSG-' + Date.now().toString().slice(-6),
    name,
    email: email || 'N/A',
    phone,
    subject: subject || 'General Inquiry',
    message,
    receivedAt: new Date().toISOString()
  };

  contactSubmissions.push(newMessage);

  return res.status(200).json({
    success: true,
    message: `Thank you ${name}, your message has been received! Our school administration team will get back to you within 24 hours.`,
    referenceId: newMessage.id
  });
});

export default router;
