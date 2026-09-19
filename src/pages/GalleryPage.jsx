import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Maximize2,
  Sparkles,
  X
} from "lucide-react";
import "../Gallery.css";

const galleryImages = [
  {
    src: "/images/carousel/DSC_2816.JPG.jpeg",
    title: "Deluxe Bedroom Comfort",
    category: "Rooms"
  },
  {
    src: "/images/carousel/DSC_2817.JPG.jpeg",
    title: "Premium Suite Ambience",
    category: "Rooms"
  },
  {
    src: "/images/carousel/DSC_2846.JPG.jpeg",
    title: "Executive Suite Interiors",
    category: "Rooms"
  },
  {
    src: "/images/carousel/DSC_2858.JPG.jpeg",
    title: "Luxury Room View",
    category: "Rooms"
  },
  {
    src: "/images/carousel/12x18.jpg.jpeg",
    title: "Banquet & Event Space",
    category: "Events"
  },
  {
    src: "/images/gallery/DSC_2839.JPG.jpeg",
    title: "Hotel Property Architecture",
    category: "Property"
  },
  {
    src: "/images/gallery/DSC_2853.JPG.jpeg",
    title: "Hotel Blu Orchid Experience",
    category: "Property"
  },
  {
    src: "/images/gallery/DSC_2881.JPG.jpeg",
    title: "Elegant Reception Hall",
    category: "Property"
  },
  {
    src: "/images/carousel/WhatsApp Image 2026-09-06 at 11.36.07 AM.jpeg",
    title: "Dining & Hospitality",
    category: "Dining"
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-09-06 at 11.36.06 AM.jpeg",
    title: "Special Guests & Events",
    category: "Events"
  }
];

const categories = ["All", "Rooms", "Property", "Dining", "Events"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [likedMap, setLikedMap] = useState({});

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const toggleLike = (src) => {
    setLikedMap((prev) => ({ ...prev, [src]: !prev[src] }));
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + filteredImages.length) % filteredImages.length
      );
    }
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredImages.length);
    }
  };

  return (
    <div className="page-container gallery-page-container">
      {/* PAGE HERO */}
      <section className="page-hero page-hero-gallery">
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <span className="eyebrow"><Sparkles size={14} /> PHOTO GALLERY</span>
          <h1>Moments at Blu Orchid</h1>
          <p>Immerse yourself in our collection of photography showcasing our rooms, events, and property.</p>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="section gallery-main-section">
        <div className="gallery-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`gallery-filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* IMAGE GRID */}
        <div className="gallery-masonry-grid">
          {filteredImages.map((img, idx) => (
            <div className="gallery-card" key={idx}>
              <div className="gallery-card-img">
                <img src={img.src} alt={img.title} loading="lazy" />
                <div className="gallery-card-overlay">
                  <div className="gallery-card-info">
                    <span className="gallery-cat-tag">{img.category}</span>
                    <h3>{img.title}</h3>
                  </div>
                  <div className="gallery-card-actions">
                    <button
                      className={`like-icon-btn ${likedMap[img.src] ? "liked" : ""}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(img.src);
                      }}
                      title="Like photo"
                    >
                      <Heart size={18} fill={likedMap[img.src] ? "#c8a45d" : "none"} />
                    </button>
                    <button
                      className="zoom-icon-btn"
                      onClick={() => setSelectedImageIndex(idx)}
                      title="View Fullsize"
                    >
                      <Maximize2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {selectedImageIndex !== null && (
        <div className="gallery-lightbox-modal" onClick={() => setSelectedImageIndex(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close-btn"
              onClick={() => setSelectedImageIndex(null)}
              aria-label="Close modal"
            >
              <X size={26} />
            </button>

            <button
              className="lightbox-arrow lightbox-prev"
              onClick={handlePrev}
              aria-label="Previous image"
            >
              <ChevronLeft size={36} />
            </button>

            <div className="lightbox-img-wrap">
              <img
                src={filteredImages[selectedImageIndex].src}
                alt={filteredImages[selectedImageIndex].title}
              />
              <div className="lightbox-caption">
                <span className="lightbox-cat">
                  {filteredImages[selectedImageIndex].category}
                </span>
                <h3>{filteredImages[selectedImageIndex].title}</h3>
              </div>
            </div>

            <button
              className="lightbox-arrow lightbox-next"
              onClick={handleNext}
              aria-label="Next image"
            >
              <ChevronRight size={36} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
