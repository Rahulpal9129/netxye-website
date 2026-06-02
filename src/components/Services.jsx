import { SERVICES } from "../assets/assets";

export default function Services({ statsRef, counts, statsVisible }) {
  return (
    <>
      {/* ── SERVICES ── */}
      <section className="nx-services" id="services">
        <div className="nx-wrap">
          <h2 className="nx-section-title">Our Services</h2>
          <div className="nx-divider" />
          <div className="nx-svc-grid">
            {SERVICES.map((s, i) => (
              <div key={i} className="nx-svc-card">
                <div className="nx-svc-top">
                  <div className="nx-svc-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                </div>
                <div className="nx-svc-hr" />
                <ul>
                  {s.points.map((pt, j) => (
                    <li key={j}><span className="nx-bullet" /><span>{pt}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="nx-stats" ref={statsRef}>
        <div className="nx-wrap">
          <div className="nx-stats-grid">
            {[
              { icon: "👥", label: "Active Clients",  num: counts[0], suffix: "+" },
              { icon: "🏆", label: "Projects Done",   num: counts[1], suffix: "+" },
              { icon: "☁️", label: "Success Rate",    num: counts[2], suffix: "%" },
              { icon: "⭐", label: "Awards",           num: counts[3], suffix: "+" },
            ].map((s, i) => (
              <div key={i} className={`nx-stat-item${statsVisible ? " visible" : ""}`}>
                <div className="nx-stat-icon">{s.icon}</div>
                <div className="nx-stat-label">{s.label}</div>
                <div className="nx-stat-num">{s.num}<sup>{s.suffix}</sup></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
