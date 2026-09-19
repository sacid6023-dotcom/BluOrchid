import React from "react";
import {
  ArrowRight,
  BedDouble,
  Car,
  Clock3,
  Coffee,
  ConciergeBell,
  GlassWater,
  ShieldCheck,
  Sparkles,
  Tv,
  Users,
  UtensilsCrossed,
  Wifi
} from "lucide-react";

const allFacilities = [
  {
    icon: UtensilsCrossed,
    title: "In-House Dining & Cuisine",
    desc: "Savor a wide selection of freshly prepared Indian, Continental, and local delicacies cooked with passion and authentic ingredients."
  },
  {
    icon: Clock3,
    title: "24/7 Front Desk & Assistance",
    desc: "Our friendly concierge desk is staffed around the clock to assist you with check-ins, local travel arrangements, and special requests."
  },
  {
    icon: BedDouble,
    title: "Luxury Rooms & Suites",
    desc: "Ergonomically designed rooms featuring plush mattresses, ambient light controls, and quiet air conditioning for deep sleep."
  },
  {
    icon: Users,
    title: "Banquets & Event Spaces",
    desc: "Celebrate life's special occasions, weddings, birthday parties, or host seamless corporate meetings in our stylish event hall."
  },
  {
    icon: Wifi,
    title: "High-Speed Wi-Fi",
    desc: "Stay connected seamlessly throughout your stay with complimentary high-speed fiber internet access across all rooms and common areas."
  },
  {
    icon: Car,
    title: "Secure Parking Facility",
    desc: "Enjoy hassle-free, secure on-site parking spaces guarded 24/7 for all our staying and dining guests."
  },
  {
    icon: ConciergeBell,
    title: "24-Hour Room Service",
    desc: "Craving a late-night snack or early morning coffee? Our room service team is just a call away from your bedside phone."
  },
  {
    icon: ShieldCheck,
    title: "Power Backup & Security",
    desc: "Equipped with 100% automatic power backup generators and round-the-clock CCTV surveillance for your peace of mind."
  }
];

export default function FacilitiesPage({ navigate }) {
  return (
    <div className="page-container facilities-page">
      {/* PAGE HERO */}
      <section className="page-hero page-hero-facilities">
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <span className="eyebrow"><Sparkles size={14} /> HOSPITALITY & SERVICES</span>
          <h1>Facilities & Experience</h1>
          <p>Explore the array of premier services designed to ensure your stay is seamless, relaxing, and enjoyable.</p>
        </div>
      </section>

      {/* FACILITIES GRID */}
      <section className="section facilities-main-section">
        <div className="section-head text-center">
          <div className="section-kicker">CURATED FOR YOUR COMFORT</div>
          <h2>World-Class Amenities at Hotel Blu Orchid</h2>
        </div>

        <div className="facilities-detail-grid">
          {allFacilities.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <div key={idx} className="fac-card">
                <div className="fac-icon-wrap">
                  <Icon size={32} strokeWidth={1.4} />
                </div>
                <h3>{fac.title}</h3>
                <p>{fac.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* EVENT BANQUET HIGHLIGHT */}
      <section className="section banquet-highlight-section">
        <div className="banquet-card">
          <div className="banquet-text">
            <span className="section-kicker">HOST YOUR EVENT</span>
            <h2>Celebrations & Corporate Gatherings</h2>
            <p>
              Looking to host a wedding, reception, anniversary, or business conference in Moradabad? Hotel Blu Orchid provides customizable banquet arrangements, catering services, audio-visual setups, and dedicated event coordinators.
            </p>
            <button
              className="gold-btn"
              onClick={() => {
                const message = "Hello Hotel Blu Orchid, I would like to enquire about banquet/event hall booking.";
                window.open(`https://wa.me/917819002872?text=${encodeURIComponent(message)}`, "_blank");
              }}
            >
              <span>Enquire Event Booking</span>
              <ArrowRight size={16} />
            </button>
          </div>
          <div className="banquet-img">
            <img src="/images/carousel/12x18.jpg.jpeg" alt="Event Hall Hotel Blu Orchid" />
          </div>
        </div>
      </section>
    </div>
  );
}
