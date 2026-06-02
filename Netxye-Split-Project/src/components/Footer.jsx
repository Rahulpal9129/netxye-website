import { LOGO } from "../assets/assets";
import { Link } from "react-router-dom";

export default function Footer({ scrollTo }) {
  return (
    <footer className="nx-footer-main">
      <div className="nx-footer-grid">

        {/* Brand */}
        <div className="nx-footer-brand">
          <img src={LOGO} alt="Netxye" />
          <div className="nx-footer-brand-name">NETXYE</div>
          <div className="nx-footer-brand-sub">Automation</div>

          <p>
            India's #1 real estate digital marketing company — turning
            traffic into verified buyers.
          </p>
        </div>

        {/* Quick Links */}
        <div className="nx-footer-col">
          <h4>Quick Links</h4>
          <ul>
            {[
              ["home", "Home"],
              ["services", "Services"],
              ["about", "About Us"],
              ["contact", "Contact"],
            ].map(([id, label]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => scrollTo(e, id)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="nx-footer-col">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#">Careers</a>
            </li>

            <li>
              <Link to="/privacy-policy">
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link to="/terms-conditions">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="nx-footer-col">
          <h4>Contact</h4>

          <div className="nx-footer-contact-item">
            <span className="nx-footer-contact-icon">✉️</span>

            <a
              href="mailto:netxye@gmail.com"
              style={{
                color: "#ffb400",
                fontWeight: 600,
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseOver={(e) =>
                (e.target.style.opacity = "0.75")
              }
              onMouseOut={(e) =>
                (e.target.style.opacity = "1")
              }
            >
              netxye@gmail.com
            </a>
          </div>

          <div className="nx-footer-contact-item">
            <span className="nx-footer-contact-icon">📞</span>

            <a
              href="tel:+919129707834"
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "tel:+919129707834";
              }}
              style={{
                color: "#ffb400",
                fontWeight: 600,
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseOver={(e) =>
                (e.target.style.opacity = "0.75")
              }
              onMouseOut={(e) =>
                (e.target.style.opacity = "1")
              }
            >
              +91 91297 07834
            </a>
          </div>

          {/* Social Icons */}
          <div className="nx-social-row">

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61576395373106"
              target="_blank"
              rel="noopener noreferrer"
              className="nx-social-btn nx-social-fb"
              title="Facebook"
            >
              <svg
                width="18"
                height="18"
                fill="#fff"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/netxye/"
              target="_blank"
              rel="noopener noreferrer"
              className="nx-social-btn nx-social-ig"
              title="Instagram"
            >
              <svg
                width="18"
                height="18"
                fill="#fff"
                viewBox="0 0 24 24"
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                  ry="5"
                />
                <path
                  fill="#000"
                  d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                />
                <line
                  x1="17.5"
                  y1="6.5"
                  x2="17.51"
                  y2="6.5"
                  stroke="#000"
                  strokeWidth="2"
                />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/@netxye"
              target="_blank"
              rel="noopener noreferrer"
              className="nx-social-btn nx-social-yt"
              title="YouTube"
            >
              <svg
                width="18"
                height="18"
                fill="#fff"
                viewBox="0 0 24 24"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon
                  fill="#ff0000"
                  points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="nx-footer-bottom">
        © 2026 Netxye. All rights reserved. |
        India's Real Estate Lead Generation Experts
      </div>
    </footer>
  );
}