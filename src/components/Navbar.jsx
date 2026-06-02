import { LOGO } from "../assets/assets";

export default function Navbar({
  scrolled,
  menuOpen,
  setMenuOpen,
  activeNav,
  scrollTo,
  formRef,
}) {
  const styles = {
    navbar: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 1000,
      padding: "15px 40px",
      background: scrolled
        ? "rgba(0,0,0,0.75)"
        : "rgba(255,255,255,0.08)",
      backdropFilter: "blur(15px)",
      WebkitBackdropFilter: "blur(15px)",
      boxSizing: "border-box",
    },

    navInner: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },

    logo: {
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
    },

    logoImg: {
      width: "65px",
      height: "65px",
      objectFit: "contain",
    },

    logoText: {
      display: "flex",
      flexDirection: "column",
      marginLeft: "10px",
    },

    brand: {
      color: "#fff",
      fontSize: "36px",
      fontWeight: "700",
      lineHeight: "1",
    },

    sub: {
      color: "#ffb400",
      fontSize: "16px",
      fontWeight: "600",
      letterSpacing: "2px",
      marginTop: "2px",
    },

    hamburger: {
      width: "45px",
      height: "45px",
      background: "transparent",
      border: "none",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "6px",
      cursor: "pointer",
      zIndex: 9999,
    },

    line: {
      width: "30px",
      height: "3px",
      background: "#fff",
      borderRadius: "10px",
      transition: "all 0.3s ease",
    },

    fullMenu: {
      position: "fixed",
      top: 0,
      right: menuOpen ? "0" : "-100%",
      width: "100%",
      height: "100vh",
      background: "#111",
      transition: "0.4s ease",
      zIndex: 999,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    navLinks: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      textAlign: "center",
    },

    link: {
      color: "#fff",
      textDecoration: "none",
      fontSize: "28px",
      fontWeight: "600",
    },

    activeLink: {
      color: "#ffb400",
    },

    ctaButton: {
      padding: "14px 30px",
      border: "none",
      borderRadius: "10px",
      background: "#ffb400",
      color: "#000",
      fontSize: "18px",
      fontWeight: "600",
      cursor: "pointer",
      marginTop: "10px",
    },
  };

  return (
    <>
      {/* NAVBAR */}
      <header style={styles.navbar}>
        <div style={styles.navInner}>
          {/* LOGO */}
          <a
            href="#home"
            style={styles.logo}
            onClick={(e) => {
              scrollTo(e, "home");
              setMenuOpen(false);
            }}
          >
            <img src={LOGO} alt="Netxye" style={styles.logoImg} />

            <div style={styles.logoText}>
              <span style={styles.brand}>Netxye</span>
              <span style={styles.sub}>AUTOMATION</span>
            </div>
          </a>

          {/* HAMBURGER MENU */}
          <button
            style={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <span
              style={{
                ...styles.line,
                transform: menuOpen
                  ? "translateY(9px) rotate(45deg)"
                  : "none",
              }}
            />

            <span
              style={{
                ...styles.line,
                opacity: menuOpen ? 0 : 1,
              }}
            />

            <span
              style={{
                ...styles.line,
                transform: menuOpen
                  ? "translateY(-9px) rotate(-45deg)"
                  : "none",
              }}
            />
          </button>
        </div>
      </header>

      {/* FULL SCREEN MENU */}
      <div style={styles.fullMenu}>
        <nav style={styles.navLinks}>
          {["home", "services", "about", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              style={{
                ...styles.link,
                ...(activeNav === item
                  ? styles.activeLink
                  : {}),
              }}
              onClick={(e) => {
                scrollTo(e, item);
                setMenuOpen(false);
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

          <button
            style={styles.ctaButton}
            onClick={() => {
              setMenuOpen(false);

              setTimeout(() => {
                if (formRef?.current) {
                  formRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });

                  const input =
                    formRef.current.querySelector("input");

                  if (input) input.focus();
                }
              }, 300);
            }}
          >
            Get Leads 🚀
          </button>
        </nav>
      </div>
    </>
  );
}