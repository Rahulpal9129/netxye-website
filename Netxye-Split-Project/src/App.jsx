import { useState, useEffect, useRef } from "react";
import { HERO_IMAGES } from "./assets/assets";
import css from "./assets/styles";

// ── Components ────────────────────────────────────────────────
import Navbar       from "./components/Navbar";
import Hero         from "./components/Hero";
import Services     from "./components/Services";
import About        from "./components/About";
import Contact      from "./components/Contact";
import Footer       from "./components/Footer";
import ThankYouModal from "./components/ThankYouModal";

export default function App() {

  // ── State ────────────────────────────────────────────────────
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [activeNav,     setActiveNav]     = useState("home");
  const [scrolled,      setScrolled]      = useState(false);
  const [counts,        setCounts]        = useState([0, 0, 0, 0]);
  const [mvVisible,     setMvVisible]     = useState(false);
  const [statsVisible,  setStatsVisible]  = useState(false);
  const [slide,         setSlide]         = useState(0);
  const [heroForm,      setHeroForm]      = useState({ name: "", phone: "", email: "", details: "" });
  const [msgForm,       setMsgForm]       = useState({ name: "", email: "", message: "" });
  const [thankYou,      setThankYou]      = useState({ show: false, name: "" });
  const [sending,       setSending]       = useState(false);

  // ── Refs ─────────────────────────────────────────────────────
  const bgRef        = useRef(null);
  const mvRef        = useRef(null);
  const statsRef     = useRef(null);
  const formRef      = useRef(null);
  const touchStartX  = useRef(null);

  // ── EmailJS Sender ───────────────────────────────────────────
  const sendEmail = async (templateParams, senderName) => {
    setSending(true);
    try {
      const payload = {
        service_id:      "service_netxye",    // ← your EmailJS Service ID
        template_id:     "template_netxye",   // ← your EmailJS Template ID
        user_id:         "YOUR_PUBLIC_KEY",   // ← your EmailJS Public Key
        template_params: templateParams,
      };
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(payload),
      });
      if (res.ok || res.status === 200) {
        setThankYou({ show: true, name: senderName || "there" });
      } else {
        throw new Error("EmailJS not configured");
      }
    } catch (err) {
      // Mailto fallback until EmailJS is configured
      const subject = encodeURIComponent("New Inquiry - Netxye");
      const body    = encodeURIComponent(
        Object.entries(templateParams).map(([k, v]) => `${k}: ${v}`).join("\n")
      );
      window.open(`mailto:netxye@gmail.com?subject=${subject}&body=${body}`);
      setThankYou({ show: true, name: senderName || "there" });
    } finally {
      setSending(false);
    }
  };

  // ── Touch Swipe Handler ───────────────────────────────────────
  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd   = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      setSlide(p => diff > 0
        ? (p + 1) % HERO_IMAGES.length
        : (p - 1 + HERO_IMAGES.length) % HERO_IMAGES.length
      );
    }
    touchStartX.current = null;
  };

  // ── Auto Slideshow ────────────────────────────────────────────
  useEffect(() => {
    const t = setInterval(() => setSlide(p => (p + 1) % HERO_IMAGES.length), 3000);
    return () => clearInterval(t);
  }, []);

  // ── Mission/Vision Scroll Animation ──────────────────────────
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setMvVisible(true); },
      { threshold: 0.2 }
    );
    if (mvRef.current) observer.observe(mvRef.current);
    return () => observer.disconnect();
  }, []);

  // ── Stats Scroll Animation ────────────────────────────────────
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.2 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  // ── Counter Animation ─────────────────────────────────────────
  const STAT_TARGETS = [488, 1059, 99, 90];
  useEffect(() => {
    if (!statsVisible) return;
    const duration = 2200;
    const steps    = 70;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const ease     = 1 - Math.pow(1 - progress, 3);
      setCounts(STAT_TARGETS.map(t => Math.round(t * ease)));
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, [statsVisible]);

  // ── Parallax + Active Nav + Scroll State ──────────────────────
  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current)
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`;

      const sections = ["home", "services", "about", "contact"];
      let current = "home";
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 80) current = id;
      });
      setActiveNav(current);
      setScrolled(window.scrollY > 60);
      if (window.scrollY > 10) setMenuOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Smooth Scroll Helper ──────────────────────────────────────
  const scrollTo = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // ── Render ────────────────────────────────────────────────────
  return (
    <>
      <style>{css}</style>

      <Navbar
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activeNav={activeNav}
        scrollTo={scrollTo}
        formRef={formRef}
      />

      <Hero
        slide={slide}
        setSlide={setSlide}
        bgRef={bgRef}
        formRef={formRef}
        heroForm={heroForm}
        setHeroForm={setHeroForm}
        sending={sending}
        sendEmail={sendEmail}
        handleTouchStart={handleTouchStart}
        handleTouchEnd={handleTouchEnd}
      />

      <Services
        statsRef={statsRef}
        counts={counts}
        statsVisible={statsVisible}
      />

      <About
        mvRef={mvRef}
        mvVisible={mvVisible}
      />

      <Contact
        msgForm={msgForm}
        setMsgForm={setMsgForm}
        sending={sending}
        sendEmail={sendEmail}
      />

      <Footer scrollTo={scrollTo} />

      <ThankYouModal
        thankYou={thankYou}
        setThankYou={setThankYou}
      />
    </>
  );
}
