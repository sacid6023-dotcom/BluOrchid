import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar({ currentPath, navigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (path) => {
    navigate(path);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRoomSubClick = (roomId) => {
    navigate(`/rooms?room=${roomId}`);
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById("room-showcase");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100);
  };

  const isActive = (path) => {
    if (path === "/" && (currentPath === "/" || currentPath === "/home")) return true;
    return currentPath.startsWith(path);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* BRAND LOGO & TEXT BADGE */}
      <button
        className="brand"
        onClick={() => handleNavClick("/")}
        aria-label="Hotel Blu Orchid Home"
      >
        <div className="brand-logo-wrap">
          <img src={logo} alt="Hotel Blu Orchid" className="brand-logo-img" />
        </div>
        <div className="brand-text-clean">
          <span className="brand-name">HOTEL BLU ORCHID</span>
          <span className="brand-tagline">LUXURY & COMFORT</span>
        </div>
      </button>

      {/* NAVIGATION LINKS */}
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <button
          className={currentPath === "/" || currentPath === "/home" ? "active" : ""}
          onClick={() => handleNavClick("/")}
        >
          HOME
        </button>

        <button
          className={currentPath === "/about" ? "active" : ""}
          onClick={() => handleNavClick("/about")}
        >
          ABOUT US
        </button>

        {/* ROOMS DROPDOWN */}
        <div className="nav-dropdown">
          <button
            className={`nav-dropdown-trigger ${isActive("/rooms") ? "active" : ""}`}
            onClick={() => handleNavClick("/rooms")}
          >
            <span>ROOMS & SUITES</span>
            <ChevronDown size={14} />
          </button>

          <div className="nav-dropdown-menu">
            <button onClick={() => handleRoomSubClick("deluxe")}>
              <span className="dropdown-number">01</span>
              <span>
                <strong>Deluxe Room</strong>
                <small>Elegant comfort</small>
              </span>
            </button>

            <button onClick={() => handleRoomSubClick("premium")}>
              <span className="dropdown-number">02</span>
              <span>
                <strong>Premium Room</strong>
                <small>Refined luxury</small>
              </span>
            </button>

            <button onClick={() => handleRoomSubClick("suite")}>
              <span className="dropdown-number">03</span>
              <span>
                <strong>Executive Suite</strong>
                <small>Spacious experience</small>
              </span>
            </button>
          </div>
        </div>

        <button
          className={currentPath === "/facilities" ? "active" : ""}
          onClick={() => handleNavClick("/facilities")}
        >
          FACILITIES
        </button>

        <button
          className={currentPath === "/gallery" ? "active" : ""}
          onClick={() => handleNavClick("/gallery")}
        >
          GALLERY
        </button>

        <button
          className={currentPath === "/contact" ? "active" : ""}
          onClick={() => handleNavClick("/contact")}
        >
          CONTACT
        </button>

        {/* BOOKING CTA */}
        <button
          className="nav-cta"
          onClick={() => {
            setMenuOpen(false);
            const el = document.getElementById("booking");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            } else {
              window.open(
                "https://wa.me/917819002872?text=Hello%20Hotel%20Blu%20Orchid,%20I%20would%20like%20to%20book%20a%20stay.",
                "_blank"
              );
            }
          }}
        >
          <span>BOOK NOW</span>
          <ArrowRight size={15} />
        </button>
      </nav>

      {/* MOBILE MENU TOGGLE */}
      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </header>
  );
}
