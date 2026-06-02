# Netxye Website — Split Component Project

## 📁 Project Structure

```
Netxye-Split-Project/
│
├── package.json                  ← Dependencies & scripts
├── public/
│   └── index.html                ← HTML entry point
│
└── src/
    ├── index.js                  ← React DOM root
    ├── App.jsx                   ← 🔗 MAIN FILE — connects all components
    │
    ├── assets/
    │   ├── assets.js             ← Logo, hero images, services data, contact info
    │   └── styles.js             ← All CSS (injected as <style> tag)
    │
    └── components/
        ├── Navbar.jsx            ← Top navbar + fullscreen menu overlay
        ├── Hero.jsx              ← Hero slideshow + consultation form
        ├── Services.jsx          ← Services grid + animated stats counters
        ├── About.jsx             ← About us, What We Do, Why Us, Mission/Vision
        ├── Contact.jsx           ← Contact cards + Send Message form
        ├── Footer.jsx            ← Footer with links, social icons, contact
        └── ThankYouModal.jsx     ← Thank you popup after form submission
```

---

## 🚀 How to Run

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start

# 3. Open in browser
# http://localhost:3000
```

## 📦 How to Build for Deployment

```bash
npm run build
# Upload the /build folder to your hosting (Vercel, Netlify, etc.)
```

---

## 🔗 Component Connection Map

```
App.jsx
  ├── <style>{css}</style>        ← from assets/styles.js
  │
  ├── <Navbar />                  ← props: scrolled, menuOpen, activeNav, scrollTo, formRef
  ├── <Hero />                    ← props: slide, bgRef, formRef, heroForm, sendEmail
  ├── <Services />                ← props: statsRef, counts, statsVisible
  ├── <About />                   ← props: mvRef, mvVisible
  ├── <Contact />                 ← props: msgForm, sendEmail
  ├── <Footer />                  ← props: scrollTo
  └── <ThankYouModal />           ← props: thankYou, setThankYou
```

---

## ⚙️ EmailJS Setup

To enable real email sending, update these 3 values in `App.jsx` (lines 46–48):

```js
service_id:  "service_netxye",    // ← from emailjs.com dashboard
template_id: "template_netxye",   // ← your email template ID
user_id:     "YOUR_PUBLIC_KEY",   // ← your public API key
```

Until configured, clicking submit will open a `mailto:` fallback.

---

## 🎨 Changing Content

| What to change        | File                            |
|----------------------|---------------------------------|
| Logo image           | `src/assets/assets.js` → LOGO  |
| Hero background imgs | `src/assets/assets.js` → HERO_IMAGES |
| Services list        | `src/assets/assets.js` → SERVICES |
| Contact info         | `src/assets/assets.js` → CONTACT_INFO |
| All styling/CSS      | `src/assets/styles.js`          |
| Navbar links         | `src/components/Navbar.jsx`     |
| Hero text/form       | `src/components/Hero.jsx`       |
| Footer links         | `src/components/Footer.jsx`     |

---

*© 2026 Netxye Automation. All rights reserved.*
