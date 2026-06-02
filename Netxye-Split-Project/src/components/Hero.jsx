
import { HERO_IMAGES } from "../assets/assets";

export default function Hero({
  slide,
  setSlide,
  bgRef,
  formRef,
  heroForm,
  setHeroForm,
  sending,
  sendEmail,
  handleTouchStart,
  handleTouchEnd,
}) {
  return (
    <>
      <style>{`
        /* TABLET + MOBILE PERFECT CENTER */
        @media (max-width: 1024px) {

          .nx-hero {
            width: 100% !important;
            min-height: 120vh !important;
            height: auto !important;
            overflow: hidden !important;
            padding-bottom: 80px !important;
          }

          /* MAIN CONTENT CENTER */
          .nx-hero-content {
            width: 100% !important;
            max-width: 100% !important;

            display: flex !important;
            flex-direction: column !important;

            align-items: center !important;
            justify-content: center !important;

            text-align: center !important;

            padding: 120px 0 40px !important;
            gap: 24px !important;

            margin-left: auto !important;
            margin-right: auto !important;

            box-sizing: border-box !important;
          }

          /* TEXT CENTER */
          .nx-hero-text {
            width: 100% !important;
            max-width: 100% !important;

            display: flex !important;
            flex-direction: column !important;

            align-items: center !important;
            justify-content: center !important;

            text-align: center !important;

            margin-left: auto !important;
            margin-right: auto !important;

            padding: 0 16px !important;
          }

          .nx-hero-text h1 {
            font-size: 2rem !important;
            line-height: 1.2 !important;
            text-align: center !important;
            margin-bottom: 10px !important;
          }

          .nx-hero-text p {
            text-align: center !important;
            font-size: 1rem !important;
          }

          /* BADGES CENTER */
          .nx-hero-badges {
            width: 100% !important;

            display: flex !important;
            flex-direction: column !important;

            align-items: center !important;
            justify-content: center !important;

            gap: 12px !important;
          }

          .nx-badge {
            min-width: 260px !important;
            width: fit-content !important;

            display: flex !important;
            justify-content: center !important;
            align-items: center !important;

            text-align: center !important;

            padding: 12px 20px !important;
            margin: 0 auto !important;
          }

          /* FORM CENTER */
          .nx-form-box {
            width: 88% !important;
            max-width: 500px !important;

            margin-left: auto !important;
            margin-right: auto !important;

            padding: 28px !important;
            border-radius: 24px !important;

            box-sizing: border-box !important;

            display: flex !important;
            flex-direction: column !important;

            position: static !important;
            left: auto !important;
            transform: none !important;
          }

          .nx-form-box h3 {
            text-align: center !important;
            font-size: 2rem !important;
            margin-bottom: 20px !important;
          }

          .nx-form-box input,
          .nx-form-box textarea {
            width: 100% !important;
            box-sizing: border-box !important;
            padding: 18px !important;
          }

          .nx-form-btn {
            width: 100% !important;
            padding: 18px !important;
          }

          .nx-slide-dots {
            position: relative !important;
            bottom: 0 !important;
            margin-top: 20px !important;

            display: flex !important;
            justify-content: center !important;
          }
        }

        /* MOBILE */
        @media (max-width: 768px) {

          .nx-hero {
            min-height: 100vh !important;
          }

          .nx-hero-content {
            padding: 95px 0 30px !important;
          }

          .nx-hero-text h1 {
            font-size: 1.8rem !important;
          }

          .nx-form-box {
            width: 92% !important;
            max-width: 100% !important;
            padding: 22px !important;
          }

          .nx-form-box h3 {
            font-size: 1.7rem !important;
          }
        }
      `}</style>

      <section
        className="nx-hero"
        id="home"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="nx-hero-bg"
          ref={bgRef}
        >
          {HERO_IMAGES.map((img, i) => (
            <div
              key={i}
              className="nx-hero-slide"
              style={{
                backgroundImage: `url(${img})`,
                opacity: i === slide ? 1 : 0,
              }}
            />
          ))}
        </div>

        <div className="nx-hero-overlay" />

        <div className="nx-hero-content">
          <div className="nx-hero-text">
            <h1>
              We Turn <span>Traffic</span>
              <br />
              Into <span>Revenue</span>
            </h1>

            <p>
              Get Hot Leads for Your Real Estate Projects
            </p>

            <div className="nx-hero-badges">
              <span className="nx-badge">
                ✦ 100% Quality Leads
              </span>

              <span className="nx-badge">
                ✦ High ROI Guaranteed
              </span>
            </div>
          </div>

          <div
            className="nx-form-box"
            ref={formRef}
          >
            <h3>
              Get Your Free Consultation
            </h3>

            <input
              type="text"
              placeholder="Full Name"
              value={heroForm.name}
              onChange={(e) =>
                setHeroForm({
                  ...heroForm,
                  name: e.target.value,
                })
              }
            />

            <input
              type="text"
              placeholder="Phone Number"
              value={heroForm.phone}
              onChange={(e) =>
                setHeroForm({
                  ...heroForm,
                  phone: e.target.value,
                })
              }
            />

            <input
              type="email"
              placeholder="Email Address"
              value={heroForm.email}
              onChange={(e) =>
                setHeroForm({
                  ...heroForm,
                  email: e.target.value,
                })
              }
            />

            <textarea
              placeholder="Project Details"
              value={heroForm.details}
              onChange={(e) =>
                setHeroForm({
                  ...heroForm,
                  details: e.target.value,
                })
              }
            />

            <button
              className="nx-form-btn"
              disabled={sending}
              onClick={() => {
                if (
                  !heroForm.name.trim() ||
                  !heroForm.phone.trim()
                ) {
                  alert(
                    "Please enter your Name and Phone Number."
                  );
                  return;
                }

                sendEmail({}, heroForm.name);
              }}
            >
              {sending
                ? "Sending..."
                : "Get Leads Now"}
            </button>
          </div>
        </div>

        <div className="nx-slide-dots">
          {HERO_IMAGES.map((_, i) => (
            <div
              key={i}
              className={`nx-dot ${
                i === slide ? "active" : ""
              }`}
              onClick={() =>
                setSlide(i)
              }
            />
          ))}
        </div>
      </section>
    </>
  );
}
