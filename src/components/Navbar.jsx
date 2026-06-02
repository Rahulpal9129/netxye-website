
import React, { useEffect, useState } from "react";
import { LOGO } from "../assets/assets";

export default function Navbar({
  menuOpen,
  setMenuOpen,
  activeNav,
  scrollTo,
  formRef,
}) {
  const [isMobile, setIsMobile] =
    useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(
        window.innerWidth <= 1024
      );
    };

    handleResize();

    window.addEventListener(
      "resize",
      handleResize
    );

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, []);

  const handleGetLeads = () => {
    setMenuOpen(false);

    if (formRef?.current) {
      formRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const styles = {
    navbar: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 1000,

      padding: isMobile
        ? "8px 18px"
        : "8px 32px",

      background:
        "rgba(10,32,89,0.82)",

      backdropFilter: "blur(14px)",
      WebkitBackdropFilter:
        "blur(14px)",

      boxSizing: "border-box",
    },

    navInner: {
      display: "flex",
      justifyContent:
        "space-between",
      alignItems: "center",
    },

    /* LOGO */
    logo: {
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
    },

    logoImg: {
      width: isMobile
        ? "80px"
        : "105px",

      height: "auto",
      objectFit: "contain",
    },

    logoText: {
      display: "flex",
      flexDirection: "column",
      marginLeft: "8px",
    },

    brand: {
      color: "#fff",
      fontSize: isMobile
        ? "18px"
        : "30px",

      fontWeight: "700",
      lineHeight: "1",
    },

    sub: {
      color: "#ffb400",
      fontSize: isMobile
        ? "10px"
        : "13px",

      fontWeight: "600",
      letterSpacing: "2px",
    },

    /* DESKTOP MENU */
    desktopMenu: {
      display: "flex",
      alignItems: "center",
      gap: "24px",
    },

    desktopLink: {
      color: "#fff",
      textDecoration: "none",
      fontSize: "15px",
      fontWeight: "500",
      cursor: "pointer",
      transition: "0.3s",
    },

    activeLink: {
      color: "#ffb400",
    },

    /* BUTTON BACK */
    ctaButton: {
      padding: "10px 18px",
      border: "none",
      borderRadius: "10px",
      background: "#ffb400",
      color: "#000",
      fontWeight: "700",
      cursor: "pointer",
      fontSize: "13px",
    },

    /* HAMBURGER FIX */
    hamburger: {
      width: "50px",
      height: "50px",

      background:
        "rgba(33,67,158,0.55)",

      border:
        "1px solid rgba(255,255,255,0.08)",

      borderRadius: "12px",

      display: "flex",
      flexDirection: "column",

      justifyContent: "center",
      alignItems: "center",

      gap: "6px",

      cursor: "pointer",
    },

    line: {
      width: "24px",
      height: "3px",
      background: "#fff",
      borderRadius: "10px",
    },

    /* MOBILE MENU */
    mobileMenu: {
      position: "fixed",

      top: "78px",

      right: menuOpen
        ? "14px"
        : "-100%",

      width: "52%",
      height: "52vh",

      borderRadius: "22px",

      background:
        "rgba(13,42,110,0.98)",

      backdropFilter:
        "blur(18px)",

      transition:
        "0.35s ease",

      display: "flex",
      justifyContent:
        "center",
      alignItems: "center",

      zIndex: 999,

      padding: "20px",
    },

    mobileNav: {
      display: "flex",
      flexDirection:
        "column",
      gap: "22px",
      textAlign: "center",
      width: "100%",
    },

    mobileLink: {
      color: "#fff",
      textDecoration: "none",
      fontSize: "22px",
      fontWeight: "600",
    },
  };

  const navItems = [
    "home",
    "services",
    "about",
    "contact",
  ];

  return (
    <>
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
            <img
              src={LOGO}
              alt="Netxye Logo"
              style={styles.logoImg}
            />

            <div
              style={styles.logoText}
            >
              <span
                style={styles.brand}
              >
                Netxye
              </span>

              <span style={styles.sub}>
                AUTOMATION
              </span>
            </div>
          </a>

          {/* DESKTOP MENU */}
          {!isMobile ? (
            <div
              style={
                styles.desktopMenu
              }
            >
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  style={{
                    ...styles.desktopLink,
                    ...(activeNav ===
                    item
                      ? styles.activeLink
                      : {}),
                  }}
                  onClick={(e) =>
                    scrollTo(e, item)
                  }
                >
                  {item ===
                  "contact"
                    ? "Contact Us"
                    : item
                        .charAt(0)
                        .toUpperCase() +
                      item.slice(1)}
                </a>
              ))}

              {/* BUTTON FIXED */}
              <button
                style={
                  styles.ctaButton
                }
                onClick={
                  handleGetLeads
                }
              >
                Get Leads 🚀
              </button>
            </div>
          ) : (
            <button
              style={
                styles.hamburger
              }
              onClick={() =>
                setMenuOpen(
                  !menuOpen
                )
              }
            >
              <span
                style={
                  styles.line
                }
              />
              <span
                style={
                  styles.line
                }
              />
              <span
                style={
                  styles.line
                }
              />
            </button>
          )}
        </div>
      </header>

      {/* MOBILE MENU */}
      {isMobile && (
        <div
          style={
            styles.mobileMenu
          }
        >
          <nav
            style={
              styles.mobileNav
            }
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                style={
                  styles.mobileLink
                }
                onClick={(e) => {
                  scrollTo(e, item);
                  setMenuOpen(false);
                }}
              >
                {item ===
                "contact"
                  ? "Contact Us"
                  : item
                      .charAt(0)
                      .toUpperCase() +
                    item.slice(1)}
              </a>
            ))}

            <button
              style={
                styles.ctaButton
              }
              onClick={
                handleGetLeads
              }
            >
              Get Leads 🚀
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
