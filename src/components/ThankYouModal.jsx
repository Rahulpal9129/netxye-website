export default function ThankYouModal({ thankYou, setThankYou }) {
  return (
    <div
      className={`nx-thankyou-overlay${thankYou.show ? " show" : ""}`}
      onClick={e => {
        if (e.target.classList.contains("nx-thankyou-overlay"))
          setThankYou({ show: false, name: "" });
      }}
    >
      <div className="nx-thankyou-card">
        <span className="nx-ty-emoji">🎉</span>
        <div className="nx-ty-title">Thank You!</div>
        <div className="nx-ty-sub">
          Hey <span className="nx-ty-name">{thankYou.name}</span>, your message has been received.<br />
          Our team will get back to you within <strong style={{ color: "#ffb400" }}>24 hours</strong>.
        </div>
        <button className="nx-ty-close" onClick={() => setThankYou({ show: false, name: "" })}>
          Got it! 👍
        </button>
        <div className="nx-ty-info">📧 A copy has been sent to netxye@gmail.com</div>
      </div>
    </div>
  );
}
