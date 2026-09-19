import React from "react";
import { MapPin, Phone, MessageSquare } from "lucide-react";
import { FaInstagram, FaFacebookF, FaGoogle } from "react-icons/fa";
import { SiBookingdotcom } from "react-icons/si";
import logo from "../assets/logo.png";

export default function Footer({ navigate }) {
  const handleNavClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="luxury-footer">
      <div className="footer-main">
        {/* BRAND COLUMN */}
        <div className="footer-brand">
          <img src={logo} alt="Hotel Blu Orchid" className="footer-logo" />
          <p>
            A refined hospitality experience in Moradabad — created for comfortable stays, thoughtful service and memorable moments.
          </p>
        </div>

        {/* CONTACT COLUMN */}
        <div className="footer-column">
          <div className="footer-title">VISIT & CONTACT</div>
          <div className="footer-contact">
            <div className="footer-contact-item">
              <MapPin size={19} strokeWidth={1.4} />
              <span>
                <strong>LOCATION</strong>
                Moradabad, Uttar Pradesh
              </span>
            </div>

            <div className="footer-contact-item">
              <Phone size={19} strokeWidth={1.4} />
              <span>
                <strong>PHONE</strong>
                <a href="tel:+917819002872">+91 78190 02872</a>
              </span>
            </div>

            <div className="footer-contact-item">
              <span className="footer-mail-icon">@</span>
              <a href="mailto:hotelbluorchidmbd01@gmail.com">
                hotelbluorchidmbd01@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* EXPLORE COLUMN */}
        <div className="footer-column">
          <div className="footer-title">EXPLORE</div>
          <div className="footer-links">
            <button onClick={() => handleNavClick("/")}>Overview</button>
            <button onClick={() => handleNavClick("/about")}>About Blu Orchid</button>
            <button onClick={() => handleNavClick("/rooms")}>Rooms & Suites</button>
            <button onClick={() => handleNavClick("/facilities")}>Facilities & Experience</button>
            <button onClick={() => handleNavClick("/gallery")}>Gallery</button>
            <button onClick={() => handleNavClick("/contact")}>Contact Us</button>
          </div>
        </div>

        {/* FOLLOW & REVIEWS */}
        <div className="footer-column">
          <div className="footer-title">FOLLOW US</div>
          <div className="social-links">
            <a href="#" className="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={19} />
            </a>
            <a href="#" className="social-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={17} />
            </a>
          </div>

          <div className="footer-title reviews-title">GUEST REVIEWS</div>
          <div className="review-portals">
            <a href="#" target="_blank" rel="noopener noreferrer" className="review-link">
              <FaGoogle className="portal-icon google-icon" />
              <span>Google Reviews</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="review-link">
              <SiBookingdotcom className="portal-icon booking-icon" />
              <span>Booking.com</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="review-link">
              <div className="makemytrip-logo" aria-hidden="true">M</div>
              <span>MakeMyTrip</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="review-link">
              <div className="goibibo-logo" aria-hidden="true">go</div>
              <span>Goibibo</span>
            </a>
          </div>
        </div>
      </div>

      {/* BRAND & LEGAL BOTTOM BAR */}
      <div className="footer-brands">
        <span className="brands-label">OUR BRAND</span>
        <div className="brand-list">
          <span className="active-brand">HOTEL BLU ORCHID</span>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} HOTEL BLU ORCHID. ALL RIGHTS RESERVED.</span>
        <div className="footer-legal">
          <button onClick={() => handleNavClick("/privacy-policy")} className="footer-legal-btn">
            PRIVACY POLICY
          </button>
          <b>·</b>
          <button onClick={() => handleNavClick("/terms-and-conditions")} className="footer-legal-btn">
            TERMS & CONDITIONS
          </button>
          <b>·</b>
          <button onClick={() => handleNavClick("/disclaimer")} className="footer-legal-btn">
            DISCLAIMER
          </button>
        </div>
        <span>
          Developed by{" "}
          <a
            href="https://xgro.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-dev-link"
          >
            XGRO Team
          </a>
        </span>
      </div>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        className="footer-whatsapp"
        href="https://wa.me/917819002872?text=Hello%20Hotel%20Blu%20Orchid,%20I%20would%20like%20to%20enquire%20about%20room%20availability."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageSquare size={24} />
      </a>
    </footer>
  );
}
