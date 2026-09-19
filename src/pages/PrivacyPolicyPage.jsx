import React from "react";
import { ShieldCheck, Sparkles } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="page-container legal-page">
      <section className="page-hero">
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <span className="eyebrow"><Sparkles size={14} /> LEGAL & COMPLIANCE</span>
          <h1>Privacy Policy</h1>
          <p>Last Updated: September 2026 • Hotel Blu Orchid, Moradabad</p>
        </div>
      </section>

      <section className="section legal-content-section">
        <div className="legal-card">
          <h2>1. Information We Collect</h2>
          <p>
            At Hotel Blu Orchid, we prioritize the privacy and security of our guests. When you make a reservation, submit an enquiry via our website, or contact us through WhatsApp or telephone, we may collect personal details including:
          </p>
          <ul>
            <li>Full Name & Government ID details (as required by local regulation during check-in).</li>
            <li>Contact details including phone number, email address, and mailing address.</li>
            <li>Booking preferences, check-in/check-out dates, and special requests.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the collected information solely for legitimate hospitality and service operations:</p>
          <ul>
            <li>Processing room reservations, check-ins, and billing details.</li>
            <li>Sending booking confirmations, arrival guidelines, and customer support via phone or WhatsApp.</li>
            <li>Enhancing our hospitality services and customizing guest preferences for future visits.</li>
            <li>Complying with statutory guest registration laws in Uttar Pradesh, India.</li>
          </ul>

          <h2>3. Data Security & Third-Party Disclosure</h2>
          <p>
            We enforce strict security protocols to prevent unauthorized access, loss, or disclosure of guest information. We do not sell, rent, or trade your personal information to third-party marketing companies. Information is shared only with mandatory regulatory authorities when required by applicable law.
          </p>

          <h2>4. Cookies & Website Analytics</h2>
          <p>
            Our website uses basic session cookies to ensure smooth navigation, fast page loads, and responsive user experience. You may choose to disable cookies through your browser settings.
          </p>

          <h2>5. Contact Us Regarding Your Privacy</h2>
          <p>
            If you have any questions or concerns regarding our Privacy Policy or your data, please reach out to us:
          </p>
          <div className="legal-contact-box">
            <p><strong>Hotel Blu Orchid</strong></p>
            <p>Moradabad, Uttar Pradesh, India</p>
            <p>Email: <a href="mailto:hotelbluorchidmbd01@gmail.com">hotelbluorchidmbd01@gmail.com</a></p>
            <p>Phone: <a href="tel:+917819002872">+91 78190 02872</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}
