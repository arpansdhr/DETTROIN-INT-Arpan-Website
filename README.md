# 🎓 Excellence International School – Website Redesign

A complete redesign and modernization of the **Excellence International School, Aligarh** website, built as part of the internship assignment. This project transforms the legacy website into a modern, responsive, and interactive school web portal using React.js and Node.js.

---

# 👨‍💻 Project Information

| Field | Details |
|--------|----------|
| **Full Name** | Arpan Sutradhar |
| **Intern ID** | NA |
| **Email Address** | sendmail2arpansutradhar@gmail.com |
| **GitHub Username** | arpansdhr |
| **Selected Website** | https://excellenceinternationalschool.com/ |
| **Live Demo** | https://excellenceinternationalschool.up.railway.app/ |

---

# 🛠 Technologies Used

### Frontend
- React.js
- Vite
- JavaScript (ES6+)
- HTML5
- CSS3
- Responsive Design
- Glassmorphism UI

### Backend
- Node.js
- Express.js
- REST API

### Development Tools
- Git
- GitHub
- Railway
- npm

---

# 🚀 Key Improvements Made

- Complete UI/UX redesign with a modern visual identity.
- Implemented a responsive layout for Desktop, Tablet, and Mobile devices.
- Introduced elegant Glassmorphism styling with emerald and gold color themes.
- Added smooth animations and micro-interactions.
- Developed an interactive multi-step admission wizard.
- Created a dynamic fee estimation interface.
- Designed an interactive curriculum explorer.
- Added facility cards with modal pop-up previews.
- Implemented a live announcement ticker.
- Built an Express.js REST API for dynamic data.
- Created searchable FAQ functionality.
- Added interactive gallery with lightbox support.
- Implemented parent testimonials carousel.
- Added responsive navigation and improved accessibility.
- Enhanced performance and maintainability using React component architecture.

---

# 📖 Walkthrough – Excellence International School Redesign

We have successfully replicated, modernized, and redesigned the website for **Excellence International School, Aligarh**.

The redesigned application transforms the legacy website into a modern, interactive, responsive, and high-converting school web portal built using:

- React.js
- Node.js
- Express.js
- JavaScript
- CSS3

The project focuses on improving user experience, visual appeal, responsiveness, and backend integration while preserving the institution's identity.

---

# 🌟 Visual Showcase

### Hero Campus Entrance

- Modern hero section
- Interactive statistics
- Quick enquiry form
- Responsive layout
- Animated call-to-action buttons

---

# 🚀 Key Improvements & Innovations

| Feature | Legacy Website | Redesigned Portal |
|----------|---------------|-------------------|
| **Design Aesthetics** | Generic WordPress theme with basic green/yellow styling | Deep Emerald & Gold Glassmorphism with lighting effects and modern micro-interactions |
| **Admissions Experience** | Basic static form | Interactive Multi-step Admission Wizard with Fee Breakdown Calculator |
| **Curriculum Showcase** | Text bullet lists | Interactive STREAM Explorer with Stage-wise Navigation |
| **Facilities Preview** | Plain images | Interactive Facility Grid with Modal Viewers |
| **Notice Board & Events** | Static page | Live Announcement Ticker with Express API-powered Events Feed |
| **Backend Integration** | Contact plugin | Custom Express REST API (`/api/admissions/enquiry`, `/api/contact`, `/api/events`, `/api/faqs`) |
| **Responsiveness** | Basic mobile layout | Fully responsive across Desktop, Tablet, and Mobile |

---

# 🏗 Project Architecture

```text
DETTROIN-INT-Arpan-Website/
├── package.json                   # Unified root npm runner
├── server/                        # Express API Backend
│   ├── package.json
│   ├── server.js                  # Main server entry (Port 5000)
│   ├── routes/
│   │   └── api.js                 # API endpoints
│   └── data/
│       └── schoolData.js          # Mock data store
└── client/                        # React Frontend (Vite)
    ├── package.json
    ├── vite.config.js             # Vite configuration with API proxy
    ├── index.html                 # HTML template with Google Fonts
    ├── public/
    │   └── images/                # High-resolution photorealistic assets
    └── src/
        ├── index.css              # Glassmorphism & design system tokens
        ├── main.jsx               # React DOM renderer
        ├── App.jsx                # Core application wrapper & modal state
        ├── assets/
        └── components/
            ├── Navbar.jsx                 # Glassmorphic header & announcement bar
            ├── HeroSection.jsx            # Hero section with live stats & quick enquiry
            ├── AboutSection.jsx           # Tabbed Vision, Mission & Philosophy
            ├── AcademicsSection.jsx       # Stage switcher & STREAM explorer
            ├── AdmissionWizard.jsx        # Multi-step admission & fee estimator
            ├── FacilitiesSection.jsx      # Interactive campus facilities
            ├── EventsNoticeBoard.jsx      # Live announcements & events feed
            ├── GallerySection.jsx         # Filterable gallery with lightbox
            ├── TestimonialsSection.jsx    # Parent testimonials carousel
            ├── FaqSection.jsx             # Searchable FAQ accordion
            ├── ContactSection.jsx         # Contact form, map & enquiry
            └── Footer.jsx                 # Footer with sitemap & quick links
```

---

# ⚡ Running the Project Locally

## 1. Clone the Repository

```bash
git clone https://github.com/arpansdhr/DETTROIN-INT-Arpan-Website.git
cd DETTROIN-INT-Arpan-Website
```

---

## 2. Install Dependencies

### Root

```bash
npm install
```

### Client

```bash
cd client
npm install
```

### Server

```bash
cd ../server
npm install
```

---

## 3. Start the Backend

```bash
cd server
npm start
```

Backend runs at:

```
http://localhost:5000/api
```

---

## 4. Start the Frontend

```bash
cd client
npm run dev
```

Frontend runs at:

```
http://localhost:3000
```

---

## Alternative (Run Separately from Root)

```bash
npm run server
npm run client
```

---

# 🔍 Verification & Testing Results

✅ Frontend production build successfully completed using Vite.

✅ Backend Express API endpoints verified:

- `GET /api/health`
- `GET /api/stats`

✅ Form submissions successfully validated:

- `POST /api/admissions/enquiry`
- `POST /api/contact`

✅ Responsive layout verified on:

- Desktop (1440px)
- Tablet (768px)
- Mobile (375px)

✅ Cross-browser compatibility tested.

---

# 📁 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/health` | Health Check |
| GET | `/api/stats` | School Statistics |
| GET | `/api/events` | Events Feed |
| GET | `/api/faqs` | Frequently Asked Questions |
| POST | `/api/contact` | Contact Form |
| POST | `/api/admissions/enquiry` | Admission Enquiry |

---

# 🌐 Live Demo

**Website:**

https://excellenceinternationalschool.up.railway.app/

---

# 🔗 Original Website

https://excellenceinternationalschool.com/

---

# 👨‍💻 Developed By

**Arpan Sutradhar**

GitHub: https://github.com/arpansdhr

Email: sendmail2arpansutradhar@gmail.com

---

## 📄 License

This project was developed as part of an internship assignment for educational and evaluation purposes.