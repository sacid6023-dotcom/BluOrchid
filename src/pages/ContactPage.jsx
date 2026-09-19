import React, { useState } from "react";
import { ArrowRight, Mail, MapPin, MessageSquare, Phone, Send, Sparkles } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Room Booking Enquiry",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please enter your name and phone number");
      return;
    }

    const whatsappMessage = `Hello Hotel Blu Orchid,

New Enquiry from Website Contact Form:
• Name: ${formData.name}
• Phone: ${formData.phone}
• Email: ${formData.email || "N/A"}
• Subject: ${formData.subject}
• Message: ${formData.message || "Requesting details regarding availability."}`;

    window.open(`https://wa.me/917819002872?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
  };

  return (
    <div className="page-container contact-page">
      {/* PAGE HERO */}
      <section className="page-hero page-hero-contact">
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <span className="eyebrow"><Sparkles size={14} /> GET IN TOUCH</span>
          <h1>Contact Hotel Blu Orchid</h1>
          <p>We are here to assist you with room reservations, event bookings, and general inquiries.</p>
        </div>
      </section>

      {/* CONTACT INFO & FORM SECTION */}
      <section className="section contact-main-section">
        <div className="contact-grid-wrapper">
          {/* CONTACT DETAILS CARDS */}
          <div className="contact-info-col">
            <div className="section-kicker">DIRECT CONTACT</div>
            <h2>Reach Out To Us</h2>
            <p className="contact-lead">
              Our front desk and reservation team operates 24/7 to ensure your queries are addressed promptly.
            </p>

            <div className="contact-cards-list">
              <a href="tel:+917819002872" className="contact-item-card">
                <div className="contact-icon"><Phone size={24} /></div>
                <div>
                  <strong>Phone Number</strong>
                  <span>+91 78190 02872</span>
                  <small>Available 24 Hours a Day</small>
                </div>
              </a>

              <a href="mailto:hotelbluorchidmbd01@gmail.com" className="contact-item-card">
                <div className="contact-icon"><Mail size={24} /></div>
                <div>
                  <strong>Email Address</strong>
                  <span>hotelbluorchidmbd01@gmail.com</span>
                  <small>Send us an email anytime</small>
                </div>
              </a>

              <div className="contact-item-card">
                <div className="contact-icon"><MapPin size={24} /></div>
                <div>
                  <strong>Hotel Address</strong>
                  <span>Hotel Blu Orchid, Moradabad</span>
                  <small>Uttar Pradesh, India</small>
                </div>
              </div>

              <a
                href="https://wa.me/917819002872"
                target="_blank"
                rel="noreferrer"
                className="contact-item-card whatsapp-card"
              >
                <div className="contact-icon"><MessageSquare size={24} /></div>
                <div>
                  <strong>WhatsApp Reservations</strong>
                  <span>Instant Chat & Room Availability</span>
                  <small>Tap to open WhatsApp</small>
                </div>
              </a>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="contact-form-col">
            <form className="luxury-contact-form" onSubmit={handleSubmit}>
              <h3>Send Us a Message</h3>
              <p>Fill in the form below to connect directly with our reservation team.</p>

              <div className="form-group">
                <label>Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Subject</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                >
                  <option value="Room Booking Enquiry">Room Booking Enquiry</option>
                  <option value="Banquet & Event Booking">Banquet & Event Booking</option>
                  <option value="Corporate Rates Request">Corporate Rates Request</option>
                  <option value="General Information">General Information</option>
                </select>
              </div>

              <div className="form-group">
                <label>Your Message / Preferred Dates</label>
                <textarea
                  rows={4}
                  placeholder="Tell us your check-in date, number of guests, or special requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button type="submit" className="gold-btn btn-full">
                <span>Send Enquiry via WhatsApp</span>
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* MAP EMBED SECTION */}
      <section className="section map-section">
        <div className="section-head text-center">
          <div className="section-kicker">FIND US ON THE MAP</div>
          <h2>Location & Directions</h2>
        </div>
        <div className="map-container">
          <iframe
            title="Hotel Blu Orchid Moradabad Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111666.3094895821!2d78.7067822972656!3d28.838634899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390afb0a68d0d4cd%3A0x8bb8bbbbbbbbbbbb!2sMoradabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}
