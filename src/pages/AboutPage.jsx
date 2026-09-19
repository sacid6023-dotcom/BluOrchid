import React from "react";
import { ArrowRight, Award, HeartHandshake, ShieldCheck, Sparkles, Star } from "lucide-react";

export default function AboutPage({ navigate }) {
  return (
    <div className="page-container about-page">
      {/* PAGE HERO */}
      <section className="page-hero page-hero-about">
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <span className="eyebrow"><Sparkles size={14} /> OUR STORY & VALUES</span>
          <h1>About Hotel Blu Orchid</h1>
          <p>Where warmth, luxury, and authentic Indian hospitality come together in Moradabad.</p>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="section story-section">
        <div className="story-grid">
          <div className="story-text">
            <div className="section-kicker">WELCOME TO BLU ORCHID</div>
            <h2>Crafted for comfort,<br /><em>built for memories.</em></h2>
            <p className="lead">
              At Hotel Blu Orchid, we believe that true luxury lies in the details — crisp linens, serene surroundings, attentive service, and an atmosphere that feels like home.
            </p>
            <p>
              Located conveniently in Moradabad, Uttar Pradesh, Hotel Blu Orchid was established to offer business travelers, families, and vacationers an elevated sanctuary. From our tastefully decorated Deluxe and Premium rooms to our spacious Executive Suites, every corner reflects thoughtful aesthetics and timeless comfort.
            </p>
            <div className="story-stats">
              <div className="stat-box">
                <span className="stat-num">24/7</span>
                <span className="stat-label">Personalized Care</span>
              </div>
              <div className="stat-box">
                <span className="stat-num">100%</span>
                <span className="stat-label">Guest Comfort</span>
              </div>
              <div className="stat-box">
                <span className="stat-num">4.9★</span>
                <span className="stat-label">Guest Rating</span>
              </div>
            </div>
          </div>
          <div className="story-media">
            <div className="story-image-wrap">
              <img src="/images/carousel/DSC_2816.JPG.jpeg" alt="Hotel Blu Orchid Room" />
            </div>
          </div>
        </div>
      </section>

      {/* CORE PILLARS */}
      <section className="section pillars-section">
        <div className="section-head text-center">
          <div className="section-kicker">OUR PROMISE</div>
          <h2>Why Guests Choose <em>Blu Orchid</em></h2>
        </div>

        <div className="pillars-grid">
          <div className="pillar-card">
            <div className="pillar-icon"><HeartHandshake size={32} /></div>
            <h3>Warm Indian Hospitality</h3>
            <p>Our dedicated staff takes pride in providing genuine, polite, and attentive service around the clock.</p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon"><ShieldCheck size={32} /></div>
            <h3>Unmatched Cleanliness</h3>
            <p>Rigorous hygiene standards, disinfected rooms, fresh linens, and pristine washrooms for your complete peace of mind.</p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon"><Award size={32} /></div>
            <h3>Modern Amenities</h3>
            <p>High-speed Wi-Fi, air conditioning, LED televisions, prompt room service, and power backup.</p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon"><Star size={32} /></div>
            <h3>Prime Location</h3>
            <p>Easily accessible from major transport hubs, shopping markets, and business centres across Moradabad.</p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="section about-cta-section">
        <div className="about-cta-card">
          <h2>Experience Blu Orchid Hospitality</h2>
          <p>Book your stay today or get in touch with our team for corporate and group reservations.</p>
          <div className="cta-actions">
            <button className="gold-btn" onClick={() => navigate("/rooms")}>
              <span>Explore Our Rooms</span>
              <ArrowRight size={16} />
            </button>
            <button className="outline-btn" onClick={() => navigate("/contact")}>
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
