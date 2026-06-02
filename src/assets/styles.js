const css = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

  *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
  html { scroll-behavior:smooth; }
  body { font-family:'Poppins',sans-serif; -webkit-tap-highlight-color:transparent; }
  /* Prevent iOS zoom on input focus */
  input, textarea, select { font-size:16px !important; }
  /* Smooth scrolling for iOS */
  * { -webkit-overflow-scrolling:touch; }

  /* NAVBAR – glass */
  .nx-navbar {
    position:fixed; top:0; left:0; right:0; z-index:1000;
    background:rgba(255,255,255,0.18);
    backdrop-filter:blur(16px);
    -webkit-backdrop-filter:blur(16px);
    border-bottom:1px solid rgba(255,255,255,0.25);
    box-shadow:0 4px 24px rgba(31,60,136,0.10);
    transition:background 0.3s;
  }
  .nx-navbar.scrolled {
    background:rgba(10,20,50,0.92);
    backdrop-filter:blur(20px);
    -webkit-backdrop-filter:blur(20px);
    box-shadow:0 2px 16px rgba(0,0,0,0.35);
  }
  .nx-nav-inner {
    width:min(1200px,92%); margin:auto;
    display:flex; justify-content:space-between; align-items:center;
    height:80px;
  }
  .nx-logo { display:flex; align-items:center; gap:14px; text-decoration:none; }
  .nx-logo img {
    height:72px; width:72px;
    border-radius:0;
    object-fit:contain;
    background:transparent;
    border:none;
    box-shadow:none;
    filter:drop-shadow(0 0 8px rgba(100,140,255,0.5));
  }
  .nx-logo-text { display:flex; flex-direction:column; line-height:1.15; gap:1px; }
  .nx-logo-text .brand { font-size:28px; font-weight:900; letter-spacing:2px; color:#fff; text-shadow:0 2px 10px rgba(31,60,136,0.5); }
  .nx-logo-text .sub   { font-size:13px; font-weight:700; color:#ffb400; letter-spacing:3px; text-transform:uppercase; }
  /* ── FULLSCREEN OVERLAY MENU ── */
  .nx-menu-toggle {
    background:none; border:none; cursor:pointer;
    color:#fff; font-size:32px; line-height:1;
    padding:4px 8px; z-index:1001; position:relative;
    display:flex; align-items:center; justify-content:center;
  }

  /* Full-screen overlay */
  .nx-fullmenu {
    position:fixed; inset:0; z-index:2000;
    background:#000;
    display:flex; flex-direction:column;
    align-items:center; justify-content:center;
    opacity:0; pointer-events:none;
    transition:opacity 0.35s ease;
  }
  .nx-fullmenu.open {
    opacity:1; pointer-events:all;
  }

  /* Close button */
  .nx-fullmenu-close {
    position:absolute; top:24px; right:28px;
    background:none; border:none; color:#fff;
    font-size:38px; cursor:pointer; line-height:1;
    opacity:0.8; transition:opacity 0.2s, transform 0.2s;
    font-weight:300;
  }
  .nx-fullmenu-close:hover { opacity:1; transform:rotate(90deg); }

  /* Logo top-left inside overlay */
  .nx-fullmenu-logo {
    position:absolute; top:20px; left:24px;
    display:flex; align-items:center; gap:10px;
    text-decoration:none;
  }
  .nx-fullmenu-logo img {
    height:52px; width:52px; border-radius:50%;
    background:#060d20; object-fit:cover;
    border:2px solid rgba(255,180,0,0.4);
    box-shadow:0 0 0 3px rgba(31,60,136,0.3);
    filter:saturate(1.1) brightness(1.05);
  }
  .nx-fullmenu-logo .brand { font-size:20px; font-weight:900; color:#fff; letter-spacing:2px; }
  .nx-fullmenu-logo .sub   { font-size:11px; font-weight:700; color:#ffb400; letter-spacing:3px; }

  /* Nav links list */
  .nx-fullmenu-links {
    display:flex; flex-direction:column;
    align-items:center; gap:0;
    width:100%;
  }
  .nx-fullmenu-links a {
    color:#fff; text-decoration:none;
    font-size:clamp(28px,5vw,52px); font-weight:700;
    letter-spacing:1px; padding:14px 40px;
    width:100%; text-align:center;
    transition:color 0.2s, background 0.2s;
    border-bottom:1px solid rgba(255,255,255,0.07);
    position:relative;
  }
  .nx-fullmenu-links a:first-child { border-top:1px solid rgba(255,255,255,0.07); }
  .nx-fullmenu-links a:hover { color:#ffb400; background:rgba(255,180,0,0.06); }
  .nx-fullmenu-links a.active { color:#ffb400; }
  .nx-fullmenu-links a.active::after {
    content:''; position:absolute; left:50%; top:50%;
    transform:translate(-50%,-50%);
    width:6px; height:6px; background:#ffb400; border-radius:50%;
    margin-left:calc(clamp(28px,5vw,52px) * 2.2);
  }

  /* CTA button inside overlay */
  .nx-fullmenu-cta {
    margin-top:36px;
    background:linear-gradient(135deg,#ffb400,#e09900);
    color:#000 !important; font-weight:800 !important;
    font-size:18px !important; letter-spacing:0.5px;
    padding:16px 52px !important;
    border-radius:50px; border:none !important;
    box-shadow:0 8px 28px rgba(255,180,0,0.45);
    transition:transform 0.2s, box-shadow 0.2s;
    width:auto !important;
  }
  .nx-fullmenu-cta:hover {
    transform:translateY(-3px);
    box-shadow:0 14px 36px rgba(255,180,0,0.6);
    background:rgba(255,180,0,0.06) !important;
    color:#ffb400 !important;
  }

  /* Hide old nav links on desktop (we use fullscreen now) */
  .nx-nav-links { display:none !important; }

  /* HERO */
  .nx-hero {
    height:100vh; min-height:600px;
    position:relative; display:flex; align-items:center;
    overflow:hidden; padding-top:72px;
  }
  .nx-hero-bg {
    position:absolute; top:-20%; left:0; right:0; bottom:-20%;
    will-change:transform;
  }
  .nx-hero-slide {
    position:absolute; inset:0;
    background-size:cover; background-position:center;
    background-repeat:no-repeat;
    transition:opacity 1s ease-in-out;
  }
  .nx-hero-overlay {
    position:absolute; inset:0;
    background:linear-gradient(
      to right,
      rgba(10,20,50,0.82) 0%,
      rgba(10,20,50,0.55) 55%,
      rgba(10,20,50,0.20) 100%
    );
  }
  .nx-hero-content {
    position:relative; z-index:2;
    width:min(1200px,92%); margin:auto;
    display:grid; grid-template-columns:1fr 390px;
    gap:40px; align-items:center;
  }
  .nx-hero-text h1 {
    color:#fff; font-size:clamp(34px,5vw,60px); font-weight:800;
    line-height:1.15; margin-bottom:14px;
  }
  .nx-hero-text h1 span { color:#ffb400; }
  .nx-hero-text p { color:rgba(255,255,255,0.88); font-size:17px; margin-bottom:28px; line-height:1.6; }
  .nx-hero-badges { display:flex; gap:12px; flex-wrap:wrap; }
  .nx-badge {
    background:rgba(255,180,0,0.18); border:1px solid rgba(255,180,0,0.5);
    color:#ffb400; padding:6px 16px; border-radius:20px; font-size:13px; font-weight:500;
  }

  /* SLIDE DOTS */
  .nx-slide-dots {
    position:absolute; bottom:22px; left:50%; transform:translateX(-50%);
    display:flex; gap:8px; z-index:10;
  }
  .nx-dot {
    width:10px; height:10px; border-radius:50%;
    background:rgba(255,255,255,0.35); border:2px solid rgba(255,255,255,0.7);
    cursor:pointer; transition:all 0.3s;
  }
  .nx-dot.active { background:#ffb400; border-color:#ffb400; transform:scale(1.3); }

  /* FORM BOX */
  .nx-form-box {
    background:#1f3c88; border-radius:10px;
    padding:28px 26px; box-shadow:0 20px 60px rgba(0,0,0,0.35);
  }
  .nx-form-box h3 {
    color:#fff; font-size:17px; font-weight:700; margin-bottom:18px;
    text-align:center; padding-bottom:14px;
    border-bottom:1px solid rgba(255,255,255,0.2);
  }
  .nx-form-box input, .nx-form-box textarea {
    width:100%; padding:11px 14px; margin-bottom:10px;
    border:none; border-radius:6px;
    font-family:'Poppins',sans-serif; font-size:14px;
    outline:none; background:#fff; color:#333;
  }
  .nx-form-box textarea { height:80px; resize:none; }
  .nx-form-btn {
    width:100%; background:#ffb400; color:#000; border:none;
    padding:13px; border-radius:6px; font-size:15px; font-weight:700;
    cursor:pointer; font-family:'Poppins',sans-serif;
    transition:background 0.2s,transform 0.1s;
  }
  .nx-form-btn:hover { background:#e0a000; transform:translateY(-1px); }

  /* SECTION COMMON */
  .nx-wrap { width:min(1200px,92%); margin:auto; }
  .nx-section-title {
    font-size:28px; font-weight:700; color:#1f3c88;
    text-align:center; margin-bottom:6px;
  }
  .nx-divider {
    display:flex; align-items:center; justify-content:center;
    gap:14px; margin-bottom:40px;
  }
  .nx-divider::before, .nx-divider::after {
    content:''; flex:0 0 60px; height:2px; background:#c8cfe8;
  }

  /* SERVICES */
  .nx-services { background:#f0f2f7; padding:65px 0; text-align:center; }
  .nx-svc-grid {
    display:grid; grid-template-columns:repeat(3,1fr); gap:22px;
  }
  .nx-svc-card {
    background:linear-gradient(135deg,#1f3c88 0%,#162d6e 100%); padding:30px 22px 26px; border-radius:12px;
    box-shadow:0 3px 16px rgba(31,60,136,0.25);
    transition:transform 0.22s, box-shadow 0.22s, border-left 0.22s;
    border-left:4px solid rgba(255,180,0,0.4); text-align:left; cursor:default;
  }
  .nx-svc-card:hover {
    transform:translateY(-5px);
    box-shadow:0 12px 30px rgba(31,60,136,0.45);
    border-left:4px solid #ffb400;
  }
  .nx-svc-top { display:flex; align-items:center; gap:14px; margin-bottom:16px; }
  .nx-svc-icon {
    width:54px; height:54px; flex-shrink:0;
    background:rgba(255,255,255,0.15); border-radius:12px;
    display:flex; align-items:center; justify-content:center; font-size:26px;
  }
  .nx-svc-card h3 { color:#fff; font-size:15px; font-weight:700; line-height:1.3; }
  .nx-svc-hr { width:100%; height:1px; background:rgba(255,255,255,0.2); margin-bottom:14px; }
  .nx-svc-card ul { list-style:none; padding:0; }
  .nx-svc-card li {
    display:flex; align-items:flex-start; gap:10px;
    color:rgba(255,255,255,0.82); font-size:13.5px; padding:5px 0;
    border-bottom:1px solid rgba(255,255,255,0.1);
  }
  .nx-svc-card li:last-child { border-bottom:none; }
  .nx-bullet {
    width:6px; height:6px; border-radius:50%;
    background:#ffb400; margin-top:7px; flex-shrink:0;
  }


  /* ABOUT EXTENDED */
  .nx-about { background:#f8f9fc; padding:65px 0; }
  .nx-about-grid {
    display:grid; grid-template-columns:1fr 1fr; gap:50px; align-items:center;
  }
  .nx-about-img {
    width:100%; border-radius:12px;
    box-shadow:0 10px 40px rgba(0,0,0,0.12);
    object-fit:cover; object-position:center top;
    height:360px;
  }
  .nx-about-tag {
    display:inline-block; background:#fff3cd; color:#856404;
    font-size:11px; font-weight:700; padding:4px 12px; border-radius:20px;
    text-transform:uppercase; letter-spacing:1px; margin-bottom:12px;
  }
  .nx-about-text h2 { color:#1f3c88; font-size:22px; font-weight:700; margin-bottom:14px; }
  .nx-about-text p  { color:#555; font-size:15px; line-height:1.75; }

  .nx-about-block { margin-bottom:50px; }
  .nx-block-title {
    font-size:20px; font-weight:700; color:#1f3c88;
    margin-bottom:22px; padding-bottom:10px;
    border-bottom:2px solid #e8ecf5;
    display:flex; align-items:center; gap:10px;
  }
  .nx-block-title::before { content:''; width:4px; height:22px; background:#ffb400; border-radius:2px; display:inline-block; }

  /* What We Do */
  .nx-whatwedo-grid {
    display:grid; grid-template-columns:repeat(3,1fr); gap:14px;
  }
  .nx-wwd-item {
    display:flex; align-items:center; gap:12px;
    background:linear-gradient(135deg,#1f3c88,#162d6e); border:1.5px solid rgba(255,180,0,0.3); border-radius:10px;
    padding:14px 16px; font-size:14px; font-weight:600; color:#fff;
    transition:all 0.2s;
  }
  .nx-wwd-item:hover { border-color:#ffb400; background:linear-gradient(135deg,#162d6e,#0f1e50); transform:translateY(-2px); box-shadow:0 6px 20px rgba(31,60,136,0.4); }
  .nx-wwd-icon { font-size:22px; }

  /* Why Choose */
  .nx-why-grid { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
  .nx-why-card {
    display:flex; gap:14px; align-items:flex-start;
    background:linear-gradient(135deg,#1f3c88,#162d6e); border-radius:10px; padding:18px;
    border:1.5px solid rgba(255,180,0,0.3);
    transition:box-shadow 0.2s, border-color 0.2s;
  }
  .nx-why-card:hover { box-shadow:0 6px 20px rgba(31,60,136,0.5); border-color:#ffb400; }
  .nx-why-check {
    width:28px; height:28px; border-radius:50%; background:#ffb400;
    display:flex; align-items:center; justify-content:center;
    color:#fff; font-size:13px; flex-shrink:0; font-weight:700;
  }
  .nx-why-card strong { color:#ffb400; font-size:14px; display:block; margin-bottom:4px; }
  .nx-why-card p { color:rgba(255,255,255,0.8); font-size:13px; line-height:1.5; margin:0; }

  /* What Makes Different */
  .nx-diff-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; }
  .nx-diff-card {
    background:#fff; border-radius:12px; padding:22px 18px;
    border:1.5px solid #e8ecf5; text-align:center;
    transition:all 0.25s;
  }
  .nx-diff-card:hover { transform:translateY(-4px); box-shadow:0 10px 28px rgba(31,60,136,0.12); border-color:#ffb400; }
  .nx-diff-icon { font-size:30px; margin-bottom:10px; }
  .nx-diff-card h4 { color:#1f3c88; font-size:14px; font-weight:700; margin-bottom:6px; }
  .nx-diff-card p  { color:#666; font-size:13px; line-height:1.5; margin:0; }

  /* Mission & Vision */
  .nx-mv-grid { display:grid; grid-template-columns:1fr 1fr; gap:24px; }
  .nx-mv-card {
    border-radius:14px; padding:28px 26px;
    border:1.5px solid transparent;
    opacity:0; transform:translateY(40px);
    transition:opacity 0.7s ease, transform 0.7s ease, box-shadow 0.3s ease, border-color 0.3s ease;
    cursor:default;
  }
  .nx-mv-card.visible { opacity:1; transform:translateY(0); }
  .nx-mv-card:nth-child(2) { transition-delay:0.2s; }
  .nx-mission { background:linear-gradient(135deg,#fff8e1,#fffde7); border-color:#ffe082; }
  .nx-vision  { background:linear-gradient(135deg,#e8edf8,#eef1fb); border-color:#c5cfe8; }
  .nx-mv-card:hover {
    transform:translateY(-6px) !important;
    box-shadow:0 20px 50px rgba(255,180,0,0.18), 0 4px 20px rgba(31,60,136,0.12);
    border-color:#ffb400;
  }
  .nx-mv-card:hover .nx-mv-header h3 { color:#ffb400; }
  .nx-mv-card:hover .nx-mv-dot { background:#1f3c88; transform:scale(1.3); }
  .nx-mv-dot { transition:background 0.3s, transform 0.3s; }
  .nx-mv-card:hover .nx-mv-emoji { animation:bounce 0.5s ease infinite alternate; }
  @keyframes bounce { from { transform:translateY(0); } to { transform:translateY(-6px); } }
  .nx-mv-header { display:flex; align-items:center; gap:12px; margin-bottom:18px; }
  .nx-mv-emoji { font-size:28px; }
  .nx-mv-header h3 { color:#1f3c88; font-size:18px; font-weight:700; margin:0; }
  .nx-mv-card ul { list-style:none; padding:0; display:flex; flex-direction:column; gap:12px; }
  .nx-mv-card li { display:flex; align-items:flex-start; gap:10px; color:#444; font-size:14px; line-height:1.6; }
  .nx-mv-dot {
    width:8px; height:8px; border-radius:50%; background:#ffb400;
    margin-top:6px; flex-shrink:0;
  }

  @media(max-width:900px) {
    .nx-about-grid   { grid-template-columns:1fr; }
    .nx-whatwedo-grid{ grid-template-columns:1fr 1fr; }
    .nx-why-grid     { grid-template-columns:1fr; }
    .nx-diff-grid    { grid-template-columns:1fr 1fr; }
    .nx-mv-grid      { grid-template-columns:1fr; }
  }
  @media(max-width:600px) {
    .nx-whatwedo-grid{ grid-template-columns:1fr; }
    .nx-diff-grid    { grid-template-columns:1fr; }
  }


  /* CONTACT */
  .nx-contact {
    background:linear-gradient(135deg,#1f3c88 0%,#0d1b2a 100%);
    padding:65px 0; color:#fff;
  }
  .nx-contact-cards {
    display:grid; grid-template-columns:repeat(3,1fr);
    border:1px solid rgba(255,255,255,0.15); border-radius:12px;
    overflow:hidden; margin-bottom:44px;
    box-shadow:0 4px 20px rgba(0,0,0,0.2);
  }
  .nx-contact-card {
    text-align:center; padding:28px 20px;
    border-right:1px solid rgba(255,255,255,0.15);
    background:#fff;
    transition:background 0.2s, transform 0.2s;
  }
  .nx-contact-card:hover { background:#f8f9ff; transform:translateY(-2px); }
  .nx-contact-card:last-child { border-right:none; }
  .nx-contact-card .ci { font-size:30px; margin-bottom:8px; }
  .nx-contact-card h4 {
    font-size:12px; font-weight:600; color:#888;
    margin-bottom:5px; text-transform:uppercase; letter-spacing:1px;
  }
  .nx-contact-card p { font-size:15px; font-weight:600; color:#1f3c88; }
  .nx-contact-link {
    font-size:15px; font-weight:600; color:#1f3c88;
    text-decoration:none; transition:color 0.2s;
  }
  .nx-contact-link:hover { color:#ffb400; text-decoration:underline; }
  .nx-msg-box {
    background:#ffffff;
    border:1px solid rgba(255,255,255,0.2);
    border-radius:12px; padding:36px;
  }
  .nx-msg-title {
    text-align:center; font-size:20px; font-weight:700; margin-bottom:22px;
    display:flex; align-items:center; justify-content:center; gap:14px;
    color:#1f3c88;
  }
  .nx-msg-title::before, .nx-msg-title::after {
    content:''; flex:0 0 60px; height:1px; background:#c8cfe8;
  }
  .nx-msg-row {
    display:grid; grid-template-columns:1fr 1fr 1fr; gap:14px; margin-bottom:14px;
  }
  .nx-msg-box input {
    padding:12px 16px; border-radius:6px;
    border:1.5px solid #dde2ef;
    background:#f8f9fc; color:#333;
    font-family:'Poppins',sans-serif; font-size:14px; outline:none;
    transition:border-color 0.2s; width:100%;
  }
  .nx-msg-box input::placeholder { color:#999; }
  .nx-msg-box input:focus { border-color:#1f3c88; background:#fff; }
  .nx-send-btn {
    display:block; margin:0 auto;
    background:#ffb400; color:#000; font-weight:700;
    padding:13px 44px; border-radius:6px; border:none;
    font-family:'Poppins',sans-serif; font-size:15px; cursor:pointer;
    transition:background 0.2s, transform 0.1s;
  }
  .nx-send-btn:hover { background:#e0a000; transform:translateY(-1px); }

  /* FOOTER */
  .nx-footer {
    background:#060e1a; color:rgba(255,255,255,0.45);
    text-align:center; padding:18px; font-size:13px;
  }


  /* STATS COUNTER */
  .nx-stats {
    background:#0a0f1e; padding:60px 0;
    border-bottom:1px solid #1a2340;
  }
  .nx-stats-grid {
    display:grid; grid-template-columns:repeat(4,1fr);
    gap:0; text-align:center;
  }
  .nx-stat-item {
    padding:28px 20px;
    border-right:1px solid rgba(255,255,255,0.08);
    opacity:0; transform:translateY(30px);
    transition:opacity 0.6s ease, transform 0.6s ease;
  }
  .nx-stat-item.visible { opacity:1; transform:translateY(0); }
  .nx-stat-item:nth-child(2) { transition-delay:0.1s; }
  .nx-stat-item:nth-child(3) { transition-delay:0.2s; }
  .nx-stat-item:nth-child(4) { transition-delay:0.3s; }
  .nx-stat-item:last-child { border-right:none; }
  .nx-stat-icon { font-size:44px; margin-bottom:14px; }
  .nx-stat-label { font-size:14px; font-weight:600; color:rgba(255,255,255,0.65); margin-bottom:8px; letter-spacing:0.5px; }
  .nx-stat-num {
    font-size:48px; font-weight:800; line-height:1;
    background:linear-gradient(135deg,#ffb400,#ff8c00);
    -webkit-background-clip:text; -webkit-text-fill-color:transparent;
    background-clip:text;
    filter:drop-shadow(0 0 8px rgba(255,180,0,0.4));
  }
  .nx-stat-num sup { font-size:24px; font-weight:700; vertical-align:super; }

  @media(max-width:700px) {
    .nx-stats-grid { grid-template-columns:repeat(2,1fr); }
    .nx-stat-item:nth-child(2) { border-right:none; }
    .nx-stat-item { border-bottom:1px solid rgba(255,255,255,0.08); }
  }

  /* FOOTER */
  .nx-footer-main {
    background:#0a0f1e; color:#fff; padding:56px 0 0;
  }
  .nx-footer-grid {
    display:grid; grid-template-columns:1.6fr 1fr 1fr 1fr;
    gap:40px; width:min(1200px,92%); margin:auto; padding-bottom:40px;
  }
  .nx-footer-brand img {
    height:80px; width:80px; border-radius:50%; object-fit:cover;
    margin-bottom:12px;
  }
  .nx-footer-brand-name { font-size:24px; font-weight:800; color:#1f3c88; letter-spacing:1px; }
  .nx-footer-brand-sub  { font-size:13px; font-weight:600; color:#ffb400; letter-spacing:2px; text-transform:uppercase; margin-bottom:14px; }
  .nx-footer-brand p { color:rgba(255,255,255,0.55); font-size:13px; line-height:1.7; max-width:240px; }
  .nx-footer-col h4 {
    font-size:15px; font-weight:700; color:#fff;
    margin-bottom:18px; padding-bottom:8px;
    border-bottom:2px solid #ffb400; display:inline-block;
  }
  .nx-footer-col ul { list-style:none; padding:0; display:flex; flex-direction:column; gap:10px; }
  .nx-footer-col ul li a {
    color:rgba(255,255,255,0.6); text-decoration:none; font-size:14px;
    transition:color 0.2s; display:flex; align-items:center; gap:8px;
  }
  .nx-footer-col ul li a::before { content:'›'; color:#ffb400; font-size:16px; }
  .nx-footer-col ul li a:hover { color:#ffb400; }
  .nx-footer-contact-item { display:flex; align-items:center; gap:10px; margin-bottom:12px; }
  .nx-footer-contact-item a { color:rgba(255,255,255,0.75); text-decoration:none; font-size:14px; transition:color 0.2s; }
  .nx-footer-contact-item a:hover { color:#ffb400; }
  .nx-footer-contact-icon { font-size:18px; }
  .nx-social-row { display:flex; gap:12px; margin-top:16px; }
  .nx-social-btn {
    width:40px; height:40px; border-radius:50%;
    display:flex; align-items:center; justify-content:center;
    font-size:18px; text-decoration:none; transition:transform 0.2s, opacity 0.2s;
  }
  .nx-social-btn:hover { transform:translateY(-3px); opacity:0.85; }
  .nx-social-fb { background:#1877f2; }
  .nx-social-ig { background:linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888); }
  .nx-social-yt { background:#ff0000; }
  .nx-footer-bottom {
    background:#060e1a; color:rgba(255,255,255,0.35);
    text-align:center; padding:16px; font-size:13px;
    border-top:1px solid rgba(255,255,255,0.06);
  }

  @media(max-width:900px) {
    .nx-footer-grid { grid-template-columns:1fr 1fr; }
  }
  @media(max-width:560px) {
    .nx-footer-grid { grid-template-columns:1fr; }
    .nx-stats-grid  { grid-template-columns:repeat(2,1fr); }
  }
  /* ═══════════════════════════════
     RESPONSIVE – MOBILE FIRST
  ═══════════════════════════════ */

  /* Tablet landscape – 1024px */
  @media (max-width:1024px) {
    .nx-svc-grid  { grid-template-columns:1fr 1fr; }
    .nx-diff-grid { grid-template-columns:1fr 1fr; }
  }

  /* Tablet portrait – 900px */
  @media (max-width:900px) {
    .nx-nav-inner        { height:80px; }
    .nx-logo img         { height:66px; width:66px; border-radius:0; object-fit:contain; }
    .nx-logo-text .brand { font-size:22px; }
    .nx-logo-text .sub   { font-size:10px; }
    .nx-hero             { padding-top:68px; }
    .nx-hero-content     { grid-template-columns:1fr; gap:20px; padding:28px 0; }
    .nx-hero-text h1     { font-size:clamp(26px,5vw,42px); }
    .nx-form-box         { max-width:100%; }
    .nx-stats-grid       { grid-template-columns:repeat(2,1fr); }
    .nx-stat-item:nth-child(2) { border-right:none; }
    .nx-stat-item        { border-bottom:1px solid rgba(255,255,255,0.08); }
    .nx-svc-grid         { grid-template-columns:1fr 1fr; gap:16px; }
    .nx-about-grid       { grid-template-columns:1fr; gap:24px; }
    .nx-about-img        { height:240px; }
    .nx-whatwedo-grid    { grid-template-columns:1fr 1fr; }
    .nx-why-grid         { grid-template-columns:1fr; }
    .nx-diff-grid        { grid-template-columns:1fr 1fr; }
    .nx-mv-grid          { grid-template-columns:1fr; }
    .nx-contact-cards    { grid-template-columns:1fr; }
    .nx-contact-card     { border-right:none; border-bottom:1px solid rgba(255,255,255,0.15); }
    .nx-msg-row          { grid-template-columns:1fr; }
    .nx-footer-grid      { grid-template-columns:1fr 1fr; gap:24px; }
  }

  /* Phone – 600px (KEY FIXES) */
  @media (max-width:600px) {

    /* ── Navbar ── */
    .nx-nav-inner {
      height:64px;
      padding:0 16px;
    }
    .nx-logo img        { height:60px; width:60px; border-radius:0; object-fit:contain; }
    .nx-logo-text .brand{ font-size:20px; letter-spacing:1px; }
    .nx-logo-text .sub  { font-size:9px; }

    .nx-menu-toggle { display:block; }

    /* ── Hero ── */
    .nx-hero {
      height:auto;
      min-height:auto;
      padding-top:64px;
      align-items:flex-start;
    }
    .nx-hero-content {
      padding:24px 0 60px;
      gap:20px;
      align-items:flex-start;
    }
    .nx-hero-text h1    { font-size:clamp(22px,6.5vw,32px); line-height:1.2; margin-bottom:10px; }
    .nx-hero-text p     { font-size:14px; margin-bottom:14px; }
    .nx-hero-badges     { gap:8px; flex-wrap:wrap; }
    .nx-badge           { font-size:12px; padding:5px 12px; }
    .nx-form-box        { padding:20px 16px; border-radius:12px; margin-bottom:16px; }
    .nx-form-box h3     { font-size:15px; margin-bottom:14px; }
    .nx-form-box input,
    .nx-form-box textarea { padding:12px 14px; margin-bottom:10px; border-radius:8px; }
    .nx-form-btn        { padding:14px; font-size:15px; border-radius:8px; margin-top:4px; }
    .nx-slide-dots      { bottom:8px; gap:6px; }
    .nx-dot             { width:8px; height:8px; }

    /* ── Stats ── */
    .nx-stats           { padding:36px 0; }
    .nx-stats-grid      { grid-template-columns:repeat(2,1fr); }
    .nx-stat-item       { padding:18px 10px; }
    .nx-stat-icon       { font-size:32px; margin-bottom:8px; }
    .nx-stat-label      { font-size:11.5px; margin-bottom:6px; }
    .nx-stat-num        { font-size:30px; }
    .nx-stat-num sup    { font-size:16px; }

    /* ── Services ── */
    .nx-services        { padding:44px 0; }
    .nx-svc-grid        { grid-template-columns:1fr; gap:12px; }
    .nx-svc-card        { padding:20px 16px; }
    .nx-svc-top         { gap:10px; margin-bottom:12px; }
    .nx-svc-icon        { width:46px; height:46px; font-size:22px; }
    .nx-svc-card h3     { font-size:14px; }
    .nx-svc-card li     { font-size:13px; }

    /* ── Section common ── */
    .nx-section-title   { font-size:22px; }
    .nx-divider         { margin-bottom:24px; }
    .nx-divider::before,
    .nx-divider::after  { flex:0 0 36px; }
    .nx-wrap            { width:92%; }

    /* ── About ── */
    .nx-about           { padding:44px 0; }
    .nx-about-img       { height:260px; object-position:center top; }
    .nx-about-tag       { font-size:10px; padding:3px 10px; }
    .nx-about-text h2   { font-size:17px; }
    .nx-about-text p    { font-size:13.5px; line-height:1.65; }
    .nx-about-block     { margin-bottom:32px; }
    .nx-block-title     { font-size:16px; margin-bottom:16px; }
    .nx-whatwedo-grid   { grid-template-columns:1fr; gap:8px; }
    .nx-wwd-item        { padding:11px 14px; font-size:13px; }
    .nx-wwd-icon        { font-size:19px; }
    .nx-why-card        { padding:14px; gap:10px; }
    .nx-why-check       { width:24px; height:24px; font-size:11px; flex-shrink:0; }
    .nx-why-card strong { font-size:13px; }
    .nx-why-card p      { font-size:12px; }
    .nx-diff-grid       { grid-template-columns:1fr 1fr; gap:10px; }
    .nx-diff-card       { padding:16px 10px; }
    .nx-diff-icon       { font-size:22px; margin-bottom:6px; }
    .nx-diff-card h4    { font-size:12px; margin-bottom:4px; }
    .nx-diff-card p     { font-size:11px; }
    .nx-mv-grid         { gap:14px; }
    .nx-mv-card         { padding:20px 16px; }
    .nx-mv-header       { gap:10px; margin-bottom:14px; }
    .nx-mv-emoji        { font-size:24px; }
    .nx-mv-header h3    { font-size:16px; }
    .nx-mv-card li      { font-size:13px; line-height:1.55; }

    /* ── Contact ── */
    .nx-contact         { padding:44px 0; }
    .nx-contact-cards   { border-radius:10px; }
    .nx-contact-card    { padding:18px 14px; }
    .nx-contact-card .ci{ font-size:24px; margin-bottom:6px; }
    .nx-contact-card h4 { font-size:11px; }
    .nx-contact-card p,
    .nx-contact-link    { font-size:14px; }
    .nx-msg-box         { padding:20px 14px; border-radius:10px; }
    .nx-msg-title       { font-size:16px; gap:10px; }
    .nx-msg-title::before,
    .nx-msg-title::after{ flex:0 0 30px; }
    .nx-msg-box input   { padding:11px 12px; }
    .nx-send-btn        { width:100%; padding:13px; font-size:14px; border-radius:8px; }

    /* ── Footer ── */
    .nx-footer-main     { padding:36px 0 0; }
    .nx-footer-grid     { grid-template-columns:1fr; gap:24px; padding-bottom:24px; }
    .nx-footer-brand img{ height:64px; width:64px; border-radius:0; object-fit:contain; }
    .nx-footer-brand-name{ font-size:18px; }
    .nx-footer-brand-sub { font-size:11px; }
    .nx-footer-brand p  { font-size:12.5px; }
    .nx-footer-col h4   { font-size:13px; margin-bottom:14px; }
    .nx-footer-col ul   { gap:8px; }
    .nx-footer-col ul li a { font-size:13px; }
    .nx-footer-contact-item a { font-size:13px; }
    .nx-social-btn      { width:36px; height:36px; font-size:16px; }
    .nx-footer-bottom   { font-size:11px; padding:14px 16px; line-height:1.5; }
  }

  /* Tiny phones – 400px */
  @media (max-width:400px) {
    .nx-logo img        { height:54px; width:54px; border-radius:0; object-fit:contain; }
    .nx-logo-text .brand{ font-size:18px; }
    .nx-hero-text h1    { font-size:20px; }
    .nx-stat-num        { font-size:26px; }
    .nx-diff-grid       { grid-template-columns:1fr; }
    .nx-form-box        { padding:16px 12px; }
  }

  /* ── THANK YOU MODAL ── */
  .nx-thankyou-overlay {
    position:fixed; inset:0; z-index:9999;
    background:rgba(0,0,0,0.85);
    backdrop-filter:blur(8px);
    display:flex; align-items:center; justify-content:center;
    opacity:0; pointer-events:none;
    transition:opacity 0.35s ease;
  }
  .nx-thankyou-overlay.show {
    opacity:1; pointer-events:all;
  }
  .nx-thankyou-card {
    background:linear-gradient(135deg,#0a1432,#1f3c88);
    border:2px solid rgba(255,180,0,0.5);
    border-radius:24px;
    padding:52px 48px;
    text-align:center;
    max-width:480px; width:90%;
    box-shadow:0 30px 80px rgba(0,0,0,0.5);
    transform:scale(0.85) translateY(20px);
    transition:transform 0.35s ease;
  }
  .nx-thankyou-overlay.show .nx-thankyou-card {
    transform:scale(1) translateY(0);
  }
  .nx-ty-emoji { font-size:64px; margin-bottom:16px; display:block; animation:ty-bounce 0.8s ease; }
  @keyframes ty-bounce {
    0%   { transform:scale(0); }
    60%  { transform:scale(1.2); }
    100% { transform:scale(1); }
  }
  .nx-ty-title {
    color:#ffb400; font-size:28px; font-weight:800;
    margin-bottom:12px; letter-spacing:0.5px;
  }
  .nx-ty-sub {
    color:rgba(255,255,255,0.8); font-size:15px; line-height:1.7;
    margin-bottom:28px;
  }
  .nx-ty-name { color:#fff; font-weight:700; }
  .nx-ty-close {
    background:linear-gradient(135deg,#ffb400,#e09900);
    color:#000; border:none; border-radius:50px;
    padding:13px 40px; font-size:15px; font-weight:800;
    cursor:pointer; font-family:'Poppins',sans-serif;
    box-shadow:0 6px 20px rgba(255,180,0,0.4);
    transition:transform 0.2s, box-shadow 0.2s;
  }
  .nx-ty-close:hover { transform:translateY(-2px); box-shadow:0 10px 28px rgba(255,180,0,0.6); }
  .nx-ty-info { margin-top:18px; color:rgba(255,255,255,0.45); font-size:12px; }

`;


export default css;
