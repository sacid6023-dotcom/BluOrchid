import React, { useEffect, useState } from "react";

import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Download,
  Heart,
  Maximize2,
  Menu,
  Share2,
  X
} from "lucide-react";

import logo from "./assets/logo.png";
import "./Gallery.css";


const galleryImages = [
  {
    src: "/images/gallery/room-1.jpg",
    title: "Deluxe Room",
    category: "Rooms"
  },
  {
    src: "/images/gallery/room-2.jpg",
    title: "Premium Room",
    category: "Rooms"
  },
  {
    src: "/images/gallery/suite-1.jpg",
    title: "Executive Suite",
    category: "Rooms"
  },
  {
    src: "/images/gallery/lobby-1.jpg",
    title: "Grand Lobby",
    category: "Property"
  },
  {
    src: "/images/gallery/property-1.jpg",
    title: "Hotel Blu Orchid",
    category: "Property"
  },
  {
    src: "/images/gallery/dining-1.jpg",
    title: "Dining Experience",
    category: "Dining"
  },
  {
    src: "/images/gallery/dining-2.jpg",
    title: "A Taste to Remember",
    category: "Dining"
  },
  {
    src: "/images/gallery/event-1.jpg",
    title: "Celebrations",
    category: "Events"
  },
  {
    src: "/images/gallery/event-2.jpg",
    title: "Special Occasions",
    category: "Events"
  }
];


const categories = [
  "All",
  "Rooms",
  "Property",
  "Dining",
  "Events"
];


function Gallery() {

  const [activeCategory, setActiveCategory] =
    useState("All");

  const [selectedImage, setSelectedImage] =
    useState(null);

  const [likedImages, setLikedImages] =
    useState(() => {
      try {
        return JSON.parse(
          localStorage.getItem("bluOrchidGalleryLikes")
        ) || [];
      } catch {
        return [];
      }
    });

  const [menuOpen, setMenuOpen] =
    useState(false);


  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter(
          (image) =>
            image.category === activeCategory
        );


  /* =====================================================
     LIKE
     ===================================================== */

  const toggleLike = (src) => {

    setLikedImages((current) => {

      const alreadyLiked =
        current.includes(src);

      const updated =
        alreadyLiked
          ? current.filter((item) => item !== src)
          : [...current, src];

      localStorage.setItem(
        "bluOrchidGalleryLikes",
        JSON.stringify(updated)
      );

      return updated;
    });
  };


  /* =====================================================
     SHARE
     ===================================================== */

  const shareImage = async (image) => {

    const shareData = {
      title:
        `${image.title} — Hotel Blu Orchid`,
      text:
        `Explore ${image.title} at Hotel Blu Orchid, Moradabad.`,
      url:
        window.location.origin +
        "/gallery"
    };


    try {

      if (
        navigator.share
      ) {

        await navigator.share(
          shareData
        );

      } else {

        await navigator.clipboard.writeText(
          shareData.url
        );

        alert(
          "Gallery link copied!"
        );
      }

    } catch (error) {

      if (
        error?.name !==
        "AbortError"
      ) {
        console.error(
          "Share failed:",
          error
        );
      }

    }
  };


  /* =====================================================
     DOWNLOAD
     ===================================================== */

  const downloadImage = (image) => {

    const link =
      document.createElement("a");

    link.href = image.src;

    link.download =
      `hotel-blu-orchid-${image.title
        .toLowerCase()
        .replace(/\s+/g, "-")}.jpg`;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };


  /* =====================================================
     LIGHTBOX NAVIGATION
     ===================================================== */

  const selectedIndex =
    selectedImage
      ? filteredImages.findIndex(
          (image) =>
            image.src === selectedImage.src
        )
      : -1;


  const showPrevious = () => {

    if (
      selectedIndex === -1
    ) return;

    const previousIndex =
      (
        selectedIndex -
        1 +
        filteredImages.length
      ) %
      filteredImages.length;

    setSelectedImage(
      filteredImages[previousIndex]
    );
  };


  const showNext = () => {

    if (
      selectedIndex === -1
    ) return;

    const nextIndex =
      (
        selectedIndex +
        1
      ) %
      filteredImages.length;

    setSelectedImage(
      filteredImages[nextIndex]
    );
  };


  /* =====================================================
     KEYBOARD CONTROLS
     ===================================================== */

  useEffect(() => {

    const handleKeyDown = (event) => {

      if (!selectedImage)
        return;

      if (
        event.key === "Escape"
      ) {
        setSelectedImage(null);
      }

      if (
        event.key === "ArrowLeft"
      ) {
        showPrevious();
      }

      if (
        event.key === "ArrowRight"
      ) {
        showNext();
      }

    };


    window.addEventListener(
      "keydown",
      handleKeyDown
    );


    return () => {

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

    };

  }, [
    selectedImage,
    selectedIndex,
    filteredImages
  ]);


  /* =====================================================
     LOCK BODY WHEN LIGHTBOX OPEN
     ===================================================== */

  useEffect(() => {

    document.body.style.overflow =
      selectedImage
        ? "hidden"
        : "";


    return () => {
      document.body.style.overflow =
        "";
    };

  }, [selectedImage]);


  /* =====================================================
     NAVIGATION
     ===================================================== */

  const navigateTo = (section) => {

    setMenuOpen(false);

    window.location.href =
      `/#${section}`;
  };


  const goHome = () => {

    window.location.href = "/";
  };


  return (

    <div className="gallery-page">


      {/* =================================================
          HEADER
      ================================================= */}

      <header className="gallery-header">

        <button
          className="gallery-brand"
          onClick={goHome}
          aria-label="Hotel Blu Orchid Home"
        >
          <img
            src={logo}
            alt="Hotel Blu Orchid"
          />
        </button>


        <nav
          className={
            `gallery-nav ${
              menuOpen
                ? "open"
                : ""
            }`
          }
        >

          <button
            onClick={goHome}
          >
            Home
          </button>

          <button
            onClick={() =>
              navigateTo("about")
            }
          >
            About
          </button>


          {/* ROOMS DROPDOWN */}

          <div className="gallery-nav-dropdown">

            <button
              className="gallery-nav-dropdown-trigger"
            >
              <span>Rooms</span>
              <ChevronDown size={13} />
            </button>


            <div className="gallery-nav-dropdown-menu">

              <button
                onClick={() =>
                  navigateTo("rooms")
                }
              >
                <span>01</span>
                <div>
                  <strong>
                    Deluxe Room
                  </strong>
                  <small>
                    Elegant comfort
                  </small>
                </div>
              </button>


              <button
                onClick={() =>
                  navigateTo("rooms")
                }
              >
                <span>02</span>
                <div>
                  <strong>
                    Premium Room
                  </strong>
                  <small>
                    Refined luxury
                  </small>
                </div>
              </button>


              <button
                onClick={() =>
                  navigateTo("rooms")
                }
              >
                <span>03</span>
                <div>
                  <strong>
                    Executive Suite
                  </strong>
                  <small>
                    Spacious experience
                  </small>
                </div>
              </button>

            </div>

          </div>


          <button
            onClick={() =>
              navigateTo("experience")
            }
          >
            Experience
          </button>


          <button
            className="gallery-nav-active"
          >
            Gallery
          </button>


          <button
            onClick={() =>
              navigateTo("contact")
            }
          >
            Contact
          </button>


          <button
            className="gallery-nav-cta"
            onClick={() =>
              navigateTo("booking")
            }
          >
            <span>
              Book Your Stay
            </span>

            <ArrowRight
              size={15}
            />

          </button>

        </nav>


        <button
          className="gallery-menu-btn"
          onClick={() =>
            setMenuOpen(
              !menuOpen
            )
          }
          aria-label="Toggle navigation"
        >

          {menuOpen ? (
            <X size={23} />
          ) : (
            <Menu size={23} />
          )}

        </button>

      </header>


      {/* =================================================
          HERO
      ================================================= */}

      <section className="gallery-hero">

        <div className="gallery-hero-number">
          01
        </div>


        <div className="gallery-hero-content">

          <span className="gallery-eyebrow">
            A GLIMPSE INTO OUR WORLD
          </span>


          <h1>
            Moments worth
            <em>
              remembering.
            </em>
          </h1>


          <p>
            Discover the spaces, details
            and experiences that make every
            stay at Hotel Blu Orchid
            beautifully memorable.
          </p>

        </div>


        <div className="gallery-hero-line"></div>

      </section>


      {/* =================================================
          GALLERY CONTENT
      ================================================= */}

      <section className="gallery-content">


        <div className="gallery-toolbar">

          <div className="gallery-toolbar-title">

            <span>
              EXPLORE
            </span>

            <h2>
              Our Gallery
            </h2>

          </div>


          <div className="gallery-filters">

            {categories.map(
              (category) => (

                <button
                  key={category}
                  className={
                    activeCategory ===
                    category
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setActiveCategory(
                      category
                    )
                  }
                >
                  {category}
                </button>

              )
            )}

          </div>

        </div>


        {/* =================================================
            IMAGE GRID
        ================================================= */}

        <div className="modern-gallery-grid">

          {filteredImages.map(
            (image, index) => {

              const isLiked =
                likedImages.includes(
                  image.src
                );


              return (

                <article
                  key={image.src}
                  className={
                    `modern-gallery-item gallery-item-${
                      index + 1
                    }`
                  }
                >

                  <img
                    src={image.src}
                    alt={image.title}
                    loading="lazy"
                  />


                  {/* IMAGE OVERLAY */}

                  <div className="gallery-image-overlay">

                    <div className="gallery-image-info">

                      <span>
                        {image.category}
                      </span>

                      <h3>
                        {image.title}
                      </h3>

                    </div>


                    <button
                      className="gallery-expand"
                      onClick={() =>
                        setSelectedImage(
                          image
                        )
                      }
                      aria-label="Open image"
                    >
                      <Maximize2
                        size={16}
                      />
                    </button>

                  </div>


                  {/* =================================================
                      IMAGE ACTION BAR
                  ================================================= */}

                  <div className="gallery-image-actions">

                    <button
                      className={
                        `gallery-action ${
                          isLiked
                            ? "liked"
                            : ""
                        }`
                      }
                      onClick={() =>
                        toggleLike(
                          image.src
                        )
                      }
                      aria-label={
                        isLiked
                          ? "Unlike image"
                          : "Like image"
                      }
                    >

                      <Heart
                        size={17}
                        fill={
                          isLiked
                            ? "currentColor"
                            : "none"
                        }
                      />

                    </button>


                    <button
                      className="gallery-action"
                      onClick={() =>
                        shareImage(
                          image
                        )
                      }
                      aria-label="Share image"
                    >

                      <Share2
                        size={17}
                      />

                    </button>


                    <button
                      className="gallery-action"
                      onClick={() =>
                        downloadImage(
                          image
                        )
                      }
                      aria-label="Download image"
                    >

                      <Download
                        size={17}
                      />

                    </button>

                  </div>

                </article>

              );

            }
          )}

        </div>


        {/* =================================================
            BOTTOM
        ================================================= */}

        <div className="gallery-bottom">

          <span className="gallery-bottom-line"></span>

          <p>
            Every corner has a story.
          </p>

          <span className="gallery-bottom-line"></span>

        </div>

      </section>


      {/* =================================================
          LIGHTBOX
      ================================================= */}

      {selectedImage && (

        <div
          className="gallery-lightbox"
          onClick={() =>
            setSelectedImage(null)
          }
        >


          <button
            className="gallery-lightbox-close"
            onClick={() =>
              setSelectedImage(null)
            }
          >
            <X size={24} />
          </button>


          <button
            className="gallery-lightbox-arrow gallery-lightbox-prev"
            onClick={(event) => {

              event.stopPropagation();

              showPrevious();

            }}
          >
            <ChevronLeft
              size={28}
            />
          </button>


          <div
            className="gallery-lightbox-image-wrap"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <img
              src={selectedImage.src}
              alt={selectedImage.title}
            />


            <div className="gallery-lightbox-caption">

              <div>

                <span>
                  {selectedImage.category}
                </span>

                <h3>
                  {selectedImage.title}
                </h3>

              </div>


              <div className="gallery-counter">

                {String(
                  selectedIndex + 1
                ).padStart(2, "0")}

                {" / "}

                {String(
                  filteredImages.length
                ).padStart(2, "0")}

              </div>

            </div>


            {/* LIGHTBOX ACTIONS */}

            <div className="gallery-lightbox-actions">

              <button
                className={
                  `lightbox-action ${
                    likedImages.includes(
                      selectedImage.src
                    )
                      ? "liked"
                      : ""
                  }`
                }
                onClick={() =>
                  toggleLike(
                    selectedImage.src
                  )
                }
              >

                <Heart
                  size={18}
                  fill={
                    likedImages.includes(
                      selectedImage.src
                    )
                      ? "currentColor"
                      : "none"
                  }
                />

                <span>
                  {likedImages.includes(
                    selectedImage.src
                  )
                    ? "Liked"
                    : "Like"}
                </span>

              </button>


              <button
                className="lightbox-action"
                onClick={() =>
                  shareImage(
                    selectedImage
                  )
                }
              >

                <Share2
                  size={18}
                />

                <span>
                  Share
                </span>

              </button>


              <button
                className="lightbox-action"
                onClick={() =>
                  downloadImage(
                    selectedImage
                  )
                }
              >

                <Download
                  size={18}
                />

                <span>
                  Download
                </span>

              </button>

            </div>

          </div>


          <button
            className="gallery-lightbox-arrow gallery-lightbox-next"
            onClick={(event) => {

              event.stopPropagation();

              showNext();

            }}
          >
            <ChevronRight
              size={28}
            />
          </button>

        </div>

      )}

    </div>
  );
}


export default Gallery;