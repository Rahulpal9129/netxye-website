import { ABOUT_IMG } from "../assets/assets";

export default function About({ mvRef, mvVisible }) {
  return (
    <section className="nx-about" id="about">
      <div className="nx-wrap">
        <h2 className="nx-section-title">About Us</h2>
        <div className="nx-divider" />

        {/* 1. Company Intro */}
        <div className="nx-about-grid" style={{ marginBottom: "60px" }}>
          <img src={ABOUT_IMG} alt="About Netxye" className="nx-about-img" />
          <div className="nx-about-text">
            <div className="nx-about-tag">Company Introduction</div>
            <h2>Netxye – Real Estate Digital Marketing Solutions</h2>
            <p>
              Netxye is a Real Estate digital marketing solutions company. From generating
              high-intent buyer leads to strategic branding, CRM automation, and premium
              property content, we help real estate businesses attract, engage, and convert
              serious buyers faster.
            </p>
          </div>
        </div>

        {/* 2. What We Do */}
        <div className="nx-about-block">
          <h3 className="nx-block-title">What We Do</h3>
          <div className="nx-whatwedo-grid">
            {[
              { icon: "🏠", label: "Hot Leads Generation" },
              { icon: "📢", label: "Digital Marketing" },
              { icon: "🤖", label: "CRM & Automation" },
              { icon: "🎥", label: "Video Production" },
              { icon: "💬", label: "WhatsApp Automation" },
              { icon: "✂️", label: "Video Editing" },
            ].map((item, i) => (
              <div key={i} className="nx-wwd-item">
                <span className="nx-wwd-icon">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Why Choose Netxye */}
        <div className="nx-about-block">
          <h3 className="nx-block-title">Why Choose Netxye</h3>
          <div className="nx-why-grid">
            {[
              { title: "Real Estate Only",      desc: "We work in one industry — so we know it deeply." },
              { title: "Result-Driven",         desc: "Every campaign is built around leads, conversions & ROI." },
              { title: "End-to-End Solution",   desc: "From leads to videos to automation — all under one roof." },
              { title: "Smart Automation",      desc: "Save time with WhatsApp, CRM & follow-up automation." },
            ].map((item, i) => (
              <div key={i} className="nx-why-card">
                <div className="nx-why-check">✔</div>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. What Makes Netxye Different */}
        <div className="nx-about-block">
          <h3 className="nx-block-title">What Makes Netxye Different</h3>
          <div className="nx-diff-grid">
            {[
              { icon: "🏢", title: "Real Estate Only",       desc: "Just for real estate – that's our biggest strength." },
              { icon: "✅", title: "Verified Hot Leads",     desc: "High-intent buyers, not just clicks." },
              { icon: "🔄", title: "360° Under One Roof",    desc: "Leads, videos, ratings – all in one place." },
              { icon: "⚡", title: "Smart Automation",       desc: "Never miss a lead with WhatsApp & CRM." },
              { icon: "🎬", title: "Property-First Content", desc: "Videos that convert." },
              { icon: "📈", title: "ROI-Driven",             desc: "Think in results, not just impressions." },
            ].map((item, i) => (
              <div key={i} className="nx-diff-card">
                <div className="nx-diff-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Mission & Vision */}
        <div className="nx-mv-grid" ref={mvRef}>
          <div className={`nx-mv-card nx-mission${mvVisible ? " visible" : ""}`}>
            <div className="nx-mv-header">
              <span className="nx-mv-emoji">🎯</span>
              <h3>Our Mission</h3>
            </div>
            <ul>
              {[
                "Empower every real estate business with smart digital marketing strategies that generate real results.",
                "Deliver high-quality, verified leads that help builders, developers and agents close more deals faster.",
                "Provide end-to-end digital solutions — from lead generation to automation — all under one roof.",
                "Make advanced digital tools accessible and affordable for every real estate professional in India.",
              ].map((item, i) => (
                <li key={i}><span className="nx-mv-dot" />{item}</li>
              ))}
            </ul>
          </div>
          <div className={`nx-mv-card nx-vision${mvVisible ? " visible" : ""}`}>
            <div className="nx-mv-header">
              <span className="nx-mv-emoji">🚀</span>
              <h3>Our Vision</h3>
            </div>
            <ul>
              {[
                "Become India's #1 trusted digital marketing brand exclusively for the real estate industry.",
                "Be the first name that comes to mind when any real estate developer thinks about digital growth.",
                "Build a brand that stands for trust, technology, and measurable results.",
                "Expand Netxye's impact across every major real estate market in India.",
              ].map((item, i) => (
                <li key={i}><span className="nx-mv-dot" />{item}</li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
