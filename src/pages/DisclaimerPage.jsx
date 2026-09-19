import React from "react";
import { AlertCircle, Sparkles } from "lucide-react";

export default function DisclaimerPage() {
  return (
    <div className="page-container legal-page">
      <section className="page-hero">
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <span className="eyebrow"><Sparkles size={14} /> SITE DISCLAIMER</span>
          <h1>Website Disclaimer</h1>
          <p>Hotel Blu Orchid • Moradabad, Uttar Pradesh</p>
        </div>
      </section>

      <section className="section legal-content-section">
        <div className="legal-card">
          <h2>1. General Information</h2>
          <p>
            The information provided on this website is for general informational and reservation purposes only. While Hotel Blu Orchid strives to ensure all room details, amenities, tariffs, and photographs are accurate and up-to-date, minor variations may occur.
          </p>

          <h2>2. Accuracy of Visual Content</h2>
          <p>
            Photographs displayed on the website represent actual room categories and facilities at Hotel Blu Orchid. Actual room layout, lighting, soft furnishings, or views may vary depending on room allocation upon check-in.
          </p>

          <h2>3. External Links & Third-Party Platforms</h2>
          <p>
            This website may contain links to external booking portals (Google Reviews, Booking.com, MakeMyTrip, Goibibo) or messaging platforms (WhatsApp). Hotel Blu Orchid is not responsible for the privacy policies or content of external third-party sites.
          </p>

          <h2>4. Limitation of Liability</h2>
          <p>
            Hotel Blu Orchid is not liable for any direct or indirect loss or inconvenience arising from technical downtime, temporary website maintenance, or internet connectivity interruptions.
          </p>

          <h2>5. Contact Information</h2>
          <div className="legal-contact-box">
            <p><strong>Hotel Blu Orchid Management</strong></p>
            <p>Moradabad, Uttar Pradesh, India</p>
            <p>Phone: <a href="tel:+917819002872">+91 78190 02872</a></p>
            <p>Email: <a href="mailto:hotelbluorchidmbd01@gmail.com">hotelbluorchidmbd01@gmail.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}
