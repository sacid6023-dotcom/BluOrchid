import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const carouselSlides = [
  {
    image: "/images/carousel/DSC_2816.JPG.jpeg",
    eyebrow: "COMFORT • HOSPITALITY • MEMORIES",
    title: "A beautiful stay,\nbeautifully remembered.",
    subtitle: "Welcome to Hotel Blu Orchid — an elegant destination for comfortable stays, warm hospitality and memorable moments in Moradabad."
  },
  {
    image: "/images/carousel/DSC_2817.JPG.jpeg",
    eyebrow: "LUXURY & REFINEMENT",
    title: "Unmatched Comfort & Elegant Interiors",
    subtitle: "Experience thoughtfully curated rooms, soothing aesthetics, and world-class service tailored for your relaxation."
  },
  {
    image: "/images/carousel/DSC_2846.JPG.jpeg",
    eyebrow: "EXECUTIVE SUITES & DELUXE ROOMS",
    title: "Designed For Restful Nights & Easy Mornings",
    subtitle: "Spacious rooms with modern amenities, crisp linens, and calm ambiences designed for business and leisure travel."
  },
  {
    image: "/images/carousel/DSC_2858.JPG.jpeg",
    eyebrow: "WARM HOSPITALITY IN MORADABAD",
    title: "Your Sanctuary of Peace & Serenity",
    subtitle: "Immerse yourself in our attentive 24/7 service, exquisite dining, and peaceful environment."
  },
  {
    image: "/images/carousel/12x18.jpg.jpeg",
    eyebrow: "EXCEPTIONAL DESTINATION",
    title: "Elevated Living in the Heart of the City",
    subtitle: "Conveniently located with seamless access, elegant banquets, and unforgettable guest experiences."
  },
  {
    image: "/images/carousel/WhatsApp Image 2026-09-06 at 11.36.07 AM.jpeg",
    eyebrow: "SPECIAL MEMORIES",
    title: "Every Detail Crafted Around Your Comfort",
    subtitle: "From arrival to checkout, let our team make your stay at Blu Orchid effortless and delightful."
  }
];

export default function HeroCarousel({ navigate }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance in px
  const minSwipeDistance = 50;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselSlides.length);
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrev();
    }
  };

  const currentSlide = carouselSlides[currentIndex];

  return (
    <section
      id="home"
      className="hero-carousel-container"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* SLIDES BACKDROP */}
      {carouselSlides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentIndex ? "active" : ""}`}
          style={{ backgroundImage: `url("${slide.image}")` }}
        >
          {/* DARK GRADIENT OVERLAY */}
          <div className="hero-dark-overlay" />
        </div>
      ))}

      {/* OVERLAY CONTENT */}
      <div className="hero-content">
        <span className="eyebrow">
          <Sparkles size={15} /> {currentSlide.eyebrow}
        </span>

        <h1 className="hero-title">
          {currentSlide.title.split("\n").map((line, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && <br />}
              {line}
            </React.Fragment>
          ))}
        </h1>

        <p className="hero-description">{currentSlide.subtitle}</p>

        <div className="hero-actions">
          <button
            className="gold-btn"
            onClick={() => {
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
            <span>Book Your Stay</span>
            <ArrowRight size={17} />
          </button>

          <button
            className="outline-btn hero-outline"
            onClick={() => navigate("/rooms")}
          >
            <span>Explore Rooms & Suites</span>
          </button>
        </div>
      </div>
    </section>
  );
}
