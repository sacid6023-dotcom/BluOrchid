import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Bed,
  Check,
  Sparkles,
  Tv,
  Wifi,
  Wind
} from "lucide-react";

const roomDetails = [
  {
    id: "deluxe",
    title: "Deluxe Room",
    tagline: "Elegant Comfort for Business & Leisure",
    image: "/images/carousel/DSC_2816.JPG.jpeg",
    gallery: [
      "/images/carousel/DSC_2816.JPG.jpeg",
      "/images/carousel/DSC_2817.JPG.jpeg",
      "/images/carousel/DSC_2846.JPG.jpeg"
    ],
    description:
      "Our Deluxe Rooms are thoughtfully crafted to provide a calming sanctuary. Featuring plush bedding, warm ambient lighting, and modern conveniences, it is ideal for guests seeking comfort and efficiency.",
    amenities: [
      "King / Twin Comfort Bed",
      "High-Speed Wi-Fi",
      "Individually Controlled AC",
      "32\" HD Smart LED TV",
      "24/7 Hot & Cold Water",
      "Complimentary Mineral Water",
      "In-Room Dining Service",
      "Daily Housekeeping"
    ]
  },
  {
    id: "premium",
    title: "Premium Room",
    tagline: "Refined Luxury with Enhanced Space",
    image: "/images/carousel/DSC_2846.JPG.jpeg",
    gallery: [
      "/images/carousel/DSC_2846.JPG.jpeg",
      "/images/carousel/DSC_2858.JPG.jpeg",
      "/images/carousel/12x18.jpg.jpeg"
    ],
    description:
      "Designed for guests who value extra space and understated elegance. Premium Rooms feature upgraded furnishings, an ergonomic work desk, premium toiletries, and expansive window views.",
    amenities: [
      "Plush King-Size Bed",
      "High-Speed Wi-Fi",
      "Executive Work Desk",
      "43\" 4K Smart TV",
      "Tea & Coffee Maker",
      "Premium Toiletries",
      "24-Hour Room Assistance",
      "Laundry Service On Request"
    ]
  },
  {
    id: "suite",
    title: "Executive Suite",
    tagline: "Spacious Experience for Special Stays",
    image: "/images/carousel/DSC_2858.JPG.jpeg",
    gallery: [
      "/images/carousel/DSC_2858.JPG.jpeg",
      "/images/carousel/DSC_2816.JPG.jpeg",
      "/images/gallery/DSC_2839.JPG.jpeg"
    ],
    description:
      "Our flagship Executive Suite offers an extraordinary level of comfort. Complete with a separate seating lounge, luxurious bathroom, minibar options, and personalized hospitality services.",
    amenities: [
      "Luxury Master King Bed",
      "Separate Living Lounge",
      "High-Speed Wi-Fi",
      "50\" 4K Ultra HD TV",
      "Bathtub & Rain Shower",
      "Minibar & Refreshments",
      "Express Priority Check-In",
      "24/7 Dedicated Butler Service"
    ]
  }
];

export default function RoomsPage({ currentPath }) {
  const [selectedRoom, setSelectedRoom] = useState(roomDetails[0]);

  useEffect(() => {
    const searchStr = window.location.search || (currentPath && currentPath.includes("?") ? "?" + currentPath.split("?")[1] : "");
    const params = new URLSearchParams(searchStr);
    const roomParam = params.get("room");
    if (roomParam) {
      const matched = roomDetails.find((r) => r.id === roomParam.toLowerCase());
      if (matched) {
        setSelectedRoom(matched);
      }
    }
  }, [currentPath]);

  const handleBookRoom = (roomName) => {
    const message = `Hello Hotel Blu Orchid,\n\nI am interested in booking the *${roomName}*.\nPlease share current availability and best room rates.`;
    window.open(`https://wa.me/917819002872?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="page-container rooms-page">
      {/* PAGE HERO */}
      <section className="page-hero page-hero-rooms">
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <span className="eyebrow"><Sparkles size={14} /> LUXURY ACCOMMODATION</span>
          <h1>Rooms & Suites</h1>
          <p>Discover thoughtfully designed sanctuaries engineered for rest, productivity, and serenity.</p>
        </div>
      </section>

      {/* ROOM SELECTOR SHOWCASE */}
      <section id="room-showcase" className="section room-showcase-section">
        <div className="room-nav-tabs">
          {roomDetails.map((room) => (
            <button
              key={room.id}
              className={`room-tab-btn ${selectedRoom.id === room.id ? "active" : ""}`}
              onClick={() => {
                setSelectedRoom(room);
                window.history.replaceState({}, "", `/rooms?room=${room.id}`);
              }}
            >
              <span>{room.title}</span>
            </button>
          ))}
        </div>

        {/* FEATURED ROOM DETAIL CARD */}
        <div className="featured-room-display">
          <div className="room-media-col">
            <div className="main-room-img-wrap">
              <img src={selectedRoom.image} alt={selectedRoom.title} />
              <span className="room-price-badge">BLU ORCHID EXCLUSIVE</span>
            </div>
            <div className="room-thumbs-grid">
              {selectedRoom.gallery.map((img, idx) => (
                <button
                  key={idx}
                  className={`thumb-btn ${selectedRoom.image === img ? "active" : ""}`}
                  onClick={() => setSelectedRoom({ ...selectedRoom, image: img })}
                >
                  <img src={img} alt={`Room detail ${idx + 1}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="room-info-col">
            <span className="section-kicker">{selectedRoom.tagline}</span>
            <h2>{selectedRoom.title}</h2>
            <p className="room-desc">{selectedRoom.description}</p>

            <div className="room-highlights-row">
              <div className="hl-item"><Bed size={20} /> <span>King Bed</span></div>
              <div className="hl-item"><Wifi size={20} /> <span>Free Wi-Fi</span></div>
              <div className="hl-item"><Wind size={20} /> <span>AC</span></div>
              <div className="hl-item"><Tv size={20} /> <span>Smart TV</span></div>
            </div>

            <div className="amenities-box">
              <h3>Room Amenities & Comforts</h3>
              <div className="amenities-grid">
                {selectedRoom.amenities.map((item, idx) => (
                  <div key={idx} className="amenity-chip">
                    <Check size={16} className="check-icon" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="room-cta-row">
              <button
                className="gold-btn"
                onClick={() => handleBookRoom(selectedRoom.title)}
              >
                <span>Enquire & Book via WhatsApp</span>
                <ArrowRight size={17} />
              </button>
              <a href="tel:+917819002872" className="outline-btn">
                <span>Call +91 78190 02872</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ALL ROOM CARDS GRID */}
      <section className="section all-rooms-grid-section">
        <div className="section-head text-center">
          <div className="section-kicker">EXPLORE ALL ACCOMMODATIONS</div>
          <h2>Find Your Perfect Room</h2>
        </div>

        <div className="all-rooms-cards">
          {roomDetails.map((room) => (
            <div className="room-card-full" key={room.id} id={`room-${room.id}`}>
              <div className="card-img-wrap">
                <img src={room.image} alt={room.title} />
              </div>
              <div className="card-content">
                <h3>{room.title}</h3>
                <span className="card-subtitle">{room.tagline}</span>
                <p>{room.description}</p>
                <div className="card-bottom">
                  <button
                    className="gold-btn btn-sm"
                    onClick={() => {
                      setSelectedRoom(room);
                      document.getElementById("room-showcase")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <span>View Room Details</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
