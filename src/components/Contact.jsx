import { CONTACT_INFO } from "../assets/assets";

export default function Contact({ msgForm, setMsgForm, sending, sendEmail }) {
  return (
    <section className="nx-contact" id="contact">
      <div className="nx-wrap">
        <h2 className="nx-section-title" style={{ color: "#fff" }}>Get in Touch</h2>
        <div className="nx-divider" />
        <div className="nx-contact-cards">
          {CONTACT_INFO.map((c, i) => (
            <div key={i} className="nx-contact-card" style={{ cursor: c.href ? "pointer" : "default" }}
              onClick={() => c.href && window.open(c.href, c.href.startsWith("mailto") ? "_blank" : "_self")}>
              <div className="ci">{c.icon}</div>
              <h4>{c.label}</h4>
              {c.href
                ? <a href={c.href}
                    target={c.href.startsWith("mailto") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    className="nx-contact-link"
                    style={{ color: "#1f3c88", fontWeight: 700, textDecoration: "none" }}>{c.value}</a>
                : <p>{c.value}</p>
              }
            </div>
          ))}
        </div>
        <div className="nx-msg-box">
          <div className="nx-msg-title">Send Us a Message</div>
          <div className="nx-msg-row">
            <input type="text" placeholder="Your Name" value={msgForm.name}
              onChange={e => setMsgForm({ ...msgForm, name: e.target.value })} />
            <input type="email" placeholder="Your Email" value={msgForm.email}
              onChange={e => setMsgForm({ ...msgForm, email: e.target.value })} />
            <input type="text" placeholder="Your Message" value={msgForm.message}
              onChange={e => setMsgForm({ ...msgForm, message: e.target.value })} />
          </div>
          <button className="nx-send-btn" disabled={sending} onClick={() => {
            if (!msgForm.name.trim() || !msgForm.message.trim()) {
              alert("Please enter your Name and Message.");
              return;
            }
            sendEmail({
              from_name:   msgForm.name,
              from_email:  msgForm.email,
              message:     msgForm.message,
              to_email:    "netxye@gmail.com",
              reply_to:    msgForm.email,
              form_source: "Contact Form",
            }, msgForm.name);
            setMsgForm({ name: "", email: "", message: "" });
          }}>{sending ? "Sending…" : "Send Message ✉️"}</button>
        </div>
      </div>
    </section>
  );
}
