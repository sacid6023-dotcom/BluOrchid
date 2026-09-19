import React from "react";
import { FileText, Sparkles } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="page-container legal-page">
      <section className="page-hero">
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <span className="eyebrow"><Sparkles size={14} /> TERMS OF SERVICE</span>
          <h1>Terms & Conditions</h1>
          <p>Standard Hotel & Reservation Rules • Hotel Blu Orchid, Moradabad</p>
        </div>
      </section>

      <section className="section legal-content-section">
        <div className="legal-card">
          <h2>1. Check-In & Check-Out Policy</h2>
          <ul>
            <li>Standard Check-In time is 12:00 PM and Check-Out time is 11:00 AM.</li>
            <li>Early check-in or late check-out is subject to room availability and may incur additional charges.</li>
            <li>All guests must present a valid government-issued photo ID (Aadhaar Card, Passport, Driving License, or Voter ID) at check-in as mandated by local authorities.</li>
          </ul>

          <h2>2. Reservation & Payment Policy</h2>
          <ul>
            <li>Bookings can be made directly via our official contact numbers, WhatsApp reservation line, or accredited booking partners.</li>
            <li>Advance payment or card authorization may be required to confirm your booking during peak seasons or event dates.</li>
          </ul>

          <h2>3. Cancellation & Refund Policy</h2>
          <ul>
            <li>Cancellations made 48 hours prior to the check-in date will receive a full refund or credit voucher for future stays.</li>
            <li>Cancellations made within 24 hours of check-in or no-shows will be charged equivalent to one night's room tariff.</li>
          </ul>

          <h2>4. Hotel Rules & Guest Conduct</h2>
          <ul>
            <li>Guests are expected to maintain peaceful decorum. Loud music, unlawful activities, or disturbance to fellow guests is strictly prohibited.</li>
            <li>Damage to hotel property caused by negligence will be assessed and billed to the registered guest.</li>
            <li>Hotel Blu Orchid reserves the right to deny admission to any guest failing to present proper identification or adhering to safety guidelines.</li>
          </ul>

          <h2>5. Contact & Support</h2>
          <div className="legal-contact-box">
            <p><strong>Hotel Blu Orchid Reservations</strong></p>
            <p>Phone: <a href="tel:+917819002872">+91 78190 02872</a></p>
            <p>Email: <a href="mailto:hotelbluorchidmbd01@gmail.com">hotelbluorchidmbd01@gmail.com</a></p>
            <p>Location: Moradabad, Uttar Pradesh, India</p>
          </div>
        </div>
      </section>
    </div>
  );
}
