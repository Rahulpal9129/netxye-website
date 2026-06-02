import { HERO_IMAGES } from "../assets/assets";

export default function Hero({
  slide, setSlide, bgRef, formRef,
  heroForm, setHeroForm, sending, sendEmail,
  handleTouchStart, handleTouchEnd
}) {
  return (
    <section className="nx-hero" id="home" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className="nx-hero-bg" ref={bgRef}>
        {HERO_IMAGES.map((img, i) => (
          <div key={i} className="nx-hero-slide"
            style={{ backgroundImage: `url(${img})`, opacity: i === slide ? 1 : 0 }} />
        ))}
      </div>
      <div className="nx-hero-overlay" />
      <div className="nx-hero-content">
        <div className="nx-hero-text">
          <h1>We Turn <span>Traffic</span><br />Into <span>Revenue</span></h1>
          <p>Get Hot Leads for Your Real Estate Projects</p>
          <div className="nx-hero-badges">
            <span className="nx-badge">✦ 100% Quality Leads</span>
            <span className="nx-badge">✦ High ROI Guaranteed</span>
          </div>
        </div>
        <div className="nx-form-box" ref={formRef}>
          <h3>Get Your Free Consultation</h3>
          <input type="text" placeholder="Full Name" value={heroForm.name}
            onChange={e => setHeroForm({ ...heroForm, name: e.target.value })} />
          <input type="text" placeholder="Phone Number" value={heroForm.phone}
            onChange={e => setHeroForm({ ...heroForm, phone: e.target.value })} />
          <input type="email" placeholder="Email Address" value={heroForm.email}
            onChange={e => setHeroForm({ ...heroForm, email: e.target.value })} />
          <textarea placeholder="Project Details" value={heroForm.details}
            onChange={e => setHeroForm({ ...heroForm, details: e.target.value })} />
          <button className="nx-form-btn" disabled={sending} onClick={() => {
            if (!heroForm.name.trim() || !heroForm.phone.trim()) {
              alert("Please enter your Name and Phone number.");
              return;
            }
            sendEmail({
              from_name:   heroForm.name,
              phone:       heroForm.phone,
              from_email:  heroForm.email,
              project:     heroForm.details,
              to_email:    "netxye@gmail.com",
              reply_to:    heroForm.email,
              form_source: "Hero Form",
            }, heroForm.name);
            setHeroForm({ name: "", phone: "", email: "", details: "" });
          }}>{sending ? "Sending…" : "Get Leads Now"}</button>
        </div>
      </div>
      <div className="nx-slide-dots">
        {HERO_IMAGES.map((_, i) => (
          <div key={i} className={`nx-dot${i === slide ? " active" : ""}`}
            onClick={() => setSlide(i)} />
        ))}
      </div>
    </section>
  );
}
