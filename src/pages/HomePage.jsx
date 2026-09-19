import React, { useState, useEffect } from "react";
import HeroCarousel from "../components/HeroCarousel";
import {
  ArrowRight,
  BedDouble,
  CalendarDays,
  ChevronDown,
  Clock3,
  ConciergeBell,
  MapPin,
  Phone,
  Sparkles,
  UtensilsCrossed
} from "lucide-react";

const rooms = [
  {
    title: "Deluxe Room",
    text: "A refined stay with elegant interiors, modern comforts and a calm atmosphere.",
    image: "/images/carousel/DSC_2816.JPG.jpeg",
    features: ["King Size Bed", "Free High-Speed Wi-Fi", "Air Conditioning", "24/7 Room Service"]
  },
  {
    title: "Premium Room",
    text: "Thoughtfully designed for guests who appreciate space, comfort and understated luxury.",
    image: "/images/carousel/DSC_2846.JPG.jpeg",
    features: ["City View", "Smart LED TV", "Work Desk", "Luxury Toiletries"]
  },
  {
    title: "Executive Suite",
    text: "A spacious experience created for longer stays, business travel and special occasions.",
    image: "/images/carousel/DSC_2858.JPG.jpeg",
    features: ["Living Lounge Area", "Premium Minibar", "Bathtub & Rain Shower", "Express Check-in"]
  }
];

const facilities = [
  [BedDouble, "Comfortable Rooms", "Designed for restful stays"],
  [UtensilsCrossed, "Dining", "A delightful culinary experience"],
  [ConciergeBell, "Hospitality", "Attentive service, every time"],
  [Clock3, "24/7 Assistance", "Support whenever you need it"]
];

const reviews = [
  {
    text: "A very comfortable stay with beautiful rooms and warm hospitality. The team was courteous and attentive throughout our visit.",
    name: "Verified Guest",
    location: "Moradabad"
  },
  {
    text: "The ambience was elegant, the room was comfortable and the overall experience was excellent. Would definitely visit again.",
    name: "Verified Guest",
    location: "Moradabad"
  },
  {
    text: "A peaceful and welcoming place to stay. The hospitality and attention to detail really made our experience memorable.",
    name: "Verified Guest",
    location: "Moradabad"
  },
  {
    text: "Everything felt thoughtfully arranged, from the room to the service. A wonderful experience for a comfortable stay.",
    name: "Verified Guest",
    location: "Moradabad"
  }
];

export default function HomePage({ navigate }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2 Adults");
  const [activeReview, setActiveReview] = useState(0);

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReview((current) => (current + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleCheckAvailability = () => {
    if (!checkIn) {
      alert("Please select check-in date");
      return;
    }
    if (!checkOut) {
      alert("Please select check-out date");
      return;
    }
    if (checkOut <= checkIn) {
      alert("Check-out date must be after check-in date");
      return;
    }

    const message = `Hello Hotel Blu Orchid,

I would like to check room availability.

Check-in: ${checkIn}
Check-out: ${checkOut}
Guests: ${guests}

Please share available rooms and tariff.`;

    window.open(
      `https://wa.me/917819002872?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="page-container home-page">
      {/* HERO CAROUSEL */}
      <HeroCarousel navigate={navigate} />

      {/* BOOKING AVAILABILITY BAR */}
      <div id="booking" className="booking-bar">
        {/* CHECK-IN */}
        <div className="booking-field">
          <CalendarDays className="booking-icon" size={28} strokeWidth={1.6} />
          <div className="booking-input-wrap">
            <small>CHECK-IN</small>
            <div className="booking-value">
              {checkIn
                ? new Date(`${checkIn}T00:00:00`).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric"
                  })
                : "Choose date"}
            </div>
            <input
              type="date"
              value={checkIn}
              min={today}
              onChange={(e) => {
                setCheckIn(e.target.value);
                if (checkOut && e.target.value >= checkOut) {
                  setCheckOut("");
                }
              }}
              aria-label="Check-in date"
            />
          </div>
        </div>

        {/* CHECK-OUT */}
        <div className="booking-field">
          <CalendarDays className="booking-icon" size={28} strokeWidth={1.6} />
          <div className="booking-input-wrap">
            <small>CHECK-OUT</small>
            <div className="booking-value">
              {checkOut
                ? new Date(`${checkOut}T00:00:00`).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric"
                  })
                : "Choose date"}
            </div>
            <input
              type="date"
              value={checkOut}
              min={checkIn || today}
              onChange={(e) => setCheckOut(e.target.value)}
              aria-label="Check-out date"
            />
          </div>
        </div>

        {/* GUESTS */}
        <div className="booking-field">
          <BedDouble className="booking-icon" size={28} strokeWidth={1.6} />
          <div className="booking-input-wrap">
            <small>GUESTS</small>
            <div className="booking-value">{guests}</div>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              aria-label="Number of guests"
            >
              <option value="1 Adult">1 Adult</option>
              <option value="2 Adults">2 Adults</option>
              <option value="3 Adults">3 Adults</option>
              <option value="4 Adults">4 Adults</option>
              <option value="5 Adults">5 Adults</option>
              <option value="6+ Adults">6+ Adults</option>
            </select>
          </div>
        </div>

        {/* CHECK AVAILABILITY BUTTON */}
        <button
          type="button"
          className="booking-btn"
          onClick={handleCheckAvailability}
        >
          <span>CHECK AVAILABILITY</span>
          <ArrowRight size={18} strokeWidth={1.7} />
        </button>
      </div>

      {/* ABOUT SECTION */}
      <section id="about" className="section about">
        <div className="section-kicker">THE BLU ORCHID EXPERIENCE</div>
        <div className="about-grid">
          <div>
            <h2>Where comfort meets <em>elegance.</em></h2>
            <p className="lead">
              Every detail at Hotel Blu Orchid is created around one simple idea: your stay should feel effortless.
            </p>
          </div>
          <div className="about-copy">
            <p>
              From the moment you arrive, our focus is on thoughtful hospitality, comfortable spaces and a welcoming atmosphere. Whether you are visiting for business, a celebration or a relaxed getaway, Blu Orchid gives you a place to slow down and feel at home.
            </p>
            <button className="outline-btn" onClick={() => navigate("/about")}>
              Discover Our Story <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ROOMS SHOWCASE */}
      <section id="rooms" className="section rooms">
        <div className="section-head">
          <div>
            <div className="section-kicker">STAY YOUR WAY</div>
            <h2>Rooms designed for <em>rest.</em></h2>
          </div>
          <p>Elegant interiors, modern amenities and the comfort you expect from a memorable hotel stay.</p>
        </div>

        <div className="room-grid">
          {rooms.map((room) => (
            <article className="room-card" key={room.title}>
              <div className="room-image">
                <img src={room.image} alt={room.title} loading="lazy" />
                <span className="room-badge">BLU ORCHID</span>
              </div>
              <div className="room-body">
                <h3>{room.title}</h3>
                <p>{room.text}</p>
                <div className="room-features">
                  {room.features.map((feat, idx) => (
                    <span key={idx} className="feat-chip">• {feat}</span>
                  ))}
                </div>
                <button className="room-card-btn" onClick={() => navigate("/rooms")}>
                  <span>View Details & Tariff</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* AMENITIES & EXPERIENCE */}
      <section id="experience" className="section experience-section-wrapper">
        <div className="experience-top-row">
          <div className="experience-intro">
            <div className="section-kicker">MORE THAN A ROOM</div>
            <h2>Thoughtful details.<br /><em>Warm hospitality.</em></h2>
            <p>Everything you need for a comfortable and convenient stay, brought together under one roof.</p>
          </div>

          <div className="facility-grid">
            {facilities.map(([Icon, title, text]) => (
              <div className="facility" key={title}>
                <div className="fac-icon-circle">
                  <Icon size={26} strokeWidth={1.4} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="experience-action-bar">
          <button className="gold-btn" onClick={() => navigate("/facilities")}>
            <span>View All Facilities & Services</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section id="gallery" className="gallery-section-wrapper">
        <div className="gallery-preview-grid">
          <div className="gallery-copy-box">
            <div className="section-kicker">A GLIMPSE OF BLU ORCHID</div>
            <h2>Moments worth <em>remembering.</em></h2>
            <p>Explore the atmosphere, details and spaces that make Hotel Blu Orchid special.</p>
            <button className="outline-btn" onClick={() => navigate("/gallery")}>
              View Full Gallery <ArrowRight size={16} />
            </button>
          </div>

          <div className="gallery-preview-images">
            <div className="preview-img-card">
              <img src="/images/carousel/DSC_2817.JPG.jpeg" alt="Hotel room" />
            </div>
            <div className="preview-img-card">
              <img src="/images/gallery/DSC_2853.JPG.jpeg" alt="Luxury hotel interior" />
            </div>
            <div className="preview-img-card">
              <img src="/images/gallery/DSC_2881.JPG.jpeg" alt="Hotel reception hall" />
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS CAROUSEL */}
      <section className="reviews-section">
        <div className="reviews-top">
          <div className="section-kicker">GUEST EXPERIENCES</div>
          <div className="reviews-counter">
            <span>{String(activeReview + 1).padStart(2, "0")}</span>
            <i></i>
            <span>{String(reviews.length).padStart(2, "0")}</span>
          </div>
        </div>

        <div className="reviews-carousel">
          <button
            className="review-arrow review-prev"
            onClick={() => setActiveReview((activeReview - 1 + reviews.length) % reviews.length)}
            aria-label="Previous review"
          >
            ←
          </button>

          <div className="review-content">
            <div className="review-quote-mark">“</div>
            <div className="review-stars">★ ★ ★ ★ ★</div>
            <blockquote key={activeReview}>{reviews[activeReview].text}</blockquote>
            <div className="review-author">
              <span className="review-line"></span>
              <div>
                <strong>{reviews[activeReview].name}</strong>
                <small>{reviews[activeReview].location}</small>
              </div>
              <span className="review-line"></span>
            </div>
          </div>

          <button
            className="review-arrow review-next"
            onClick={() => setActiveReview((activeReview + 1) % reviews.length)}
            aria-label="Next review"
          >
            →
          </button>
        </div>

        <div className="review-dots">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={index === activeReview ? "active" : ""}
              onClick={() => setActiveReview(index)}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="contact section">
        <div className="contact-card">
          <div>
            <div className="section-kicker">PLAN YOUR STAY</div>
            <h2>Your next memorable stay<br /><em>starts here.</em></h2>
            <p>For reservations, room enquiries and event bookings, speak with our team.</p>
          </div>
          <div className="contact-details">
            <a href="tel:+917819002872"><Phone size={18} /> +91 78190 02872</a>
            <a href="mailto:hotelbluorchidmbd01@gmail.com">hotelbluorchidmbd01@gmail.com</a>
            <span><MapPin size={18} /> Moradabad, Uttar Pradesh</span>
            <button className="gold-btn" onClick={() => window.open("https://wa.me/917819002872", "_blank")}>
              Enquire on WhatsApp <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
