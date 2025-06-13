import { useState, useEffect, useRef } from "react";
import {
  FaStar,
  FaStarHalfAlt,
  FaYoutube,
  FaTwitter,
  FaDiscord,
  FaSteam,
  FaChevronDown,
  FaChevronUp,
  FaPlay,
  FaDownload,
  FaExclamationTriangle,
} from "react-icons/fa";
import { BiDownload, BiComment, BiNews, BiMenu, BiX } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

// Import all images
import logoText from "./assets/images/logoText.png";
import thumbnail1 from "./assets/images/hqdefault (5).jpg";
import thumbnail2 from "./assets/images/hqdefault (6).jpg";
import thumbnail3 from "./assets/images/hqdefault (7).jpg";
import thumbnail4 from "./assets/images/hqdefault (8).jpg";
import thumbnail5 from "./assets/images/hqdefault (9).jpg";
import thumbnail6 from "./assets/images/hqdefault (10).jpg";
import thumbnail7 from "./assets/images/hqdefault (11).jpg";
import thumbnail8 from "./assets/images/hqdefault (12).jpg";
import thumbnail9 from "./assets/images/hqdefault (13).jpg";
import thumbnail10 from "./assets/images/hqdefault (14).jpg";
import thumbnail11 from "./assets/images/hqdefault (15).jpg";
import thumbnail12 from "./assets/images/hqdefault (16).jpg";
import thumbnail13 from "./assets/images/hqdefault (17).jpg";
import thumbnail14 from "./assets/images/hqdefault (18).jpg";
import thumbnail15 from "./assets/images/hqdefault (19).jpg";
import thumbnail16 from "./assets/images/hqdefault (20).jpg";
import thumbnail17 from "./assets/images/hqdefault (21).jpg";
import thumbnail18 from "./assets/images/hqdefault (22).jpg";
import thumbnail19 from "./assets/images/hqdefault (23).jpg";
import thumbnail20 from "./assets/images/hqdefault (24).jpg";
import thumbnail21 from "./assets/images/hqdefault (25).jpg";
import thumbnail22 from "./assets/images/hqdefault (26).jpg";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [activeSection, setActiveSection] = useState("hero");
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const sectionRefs = {
    hero: useRef(null),
    features: useRef(null),
    screenshots: useRef(null),
    download: useRef(null),
    comments: useRef(null),
  };

  // All thumbnails in an array for easy access
  const allThumbnails = [
    thumbnail1,
    thumbnail2,
    thumbnail3,
    thumbnail4,
    thumbnail5,
    thumbnail6,
    thumbnail7,
    thumbnail8,
    thumbnail9,
    thumbnail10,
    thumbnail11,
    thumbnail12,
    thumbnail13,
    thumbnail14,
    thumbnail15,
    thumbnail16,
    thumbnail17,
    thumbnail18,
    thumbnail19,
    thumbnail20,
    thumbnail21,
    thumbnail22,
  ];

  // Select single static images for each section
  const staticImages = {
    feature1: thumbnail1,
    feature2: thumbnail2,
    download: thumbnail3,
    devlog1: thumbnail4,
    devlog2: thumbnail5,
    comment1: thumbnail6,
    comment2: thumbnail7,
  };

  // Featured screenshots (first 6 static images)
  const featuredScreenshots = [
    thumbnail8,
    thumbnail9,
    thumbnail10,
    thumbnail11,
    thumbnail12,
    thumbnail13,
  ];

  // Gallery screenshots (all static images)
  const galleryScreenshots = allThumbnails;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);

      // Determine active section based on scroll position
      const sections = [
        "hero",
        "features",
        "screenshots",
        "download",
        "comments",
      ];
      for (const section of sections) {
        const element = sectionRefs[section].current;
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openGallery = (image) => {
    setSelectedImage(image);
    setShowGalleryModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeGallery = () => {
    setShowGalleryModal(false);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    const currentIndex = galleryScreenshots.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % galleryScreenshots.length;
    setSelectedImage(galleryScreenshots[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = galleryScreenshots.indexOf(selectedImage);
    const prevIndex =
      (currentIndex - 1 + galleryScreenshots.length) %
      galleryScreenshots.length;
    setSelectedImage(galleryScreenshots[prevIndex]);
  };

  const toggleDetails = () => {
    setIsDetailsOpen(!isDetailsOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = sectionRefs[sectionId].current;
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="app dark-theme">
      <header
        className={`header ${scrollPosition > 50 ? "header-scrolled" : ""}`}
      >
        <div className="header-container">
          <div className="logo-container">
            <img
              src={logoText || "/placeholder.svg"}
              alt="Game Logo"
              className="logo"
            />
            {/* <h1 className="game-title">Abodtion</h1> */}
          </div>
          {isMobile ? (
            <button
              className="menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <BiX size={28} /> : <BiMenu size={28} />}
            </button>
          ) : (
            <nav className="nav-desktop">
              <a
                href="#hero"
                className={activeSection === "hero" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("hero");
                }}
              >
                Home
              </a>
              <a
                href="#features"
                className={activeSection === "features" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("features");
                }}
              >
                Features
              </a>
              <a
                href="#screenshots"
                className={activeSection === "screenshots" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("screenshots");
                }}
              >
                Screenshots
              </a>
              <a
                href="#download"
                className={activeSection === "download" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("download");
                }}
              >
                Download
              </a>
              <a
                href="#comments"
                className={activeSection === "comments" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("comments");
                }}
              >
                Comments
              </a>
            </nav>
          )}
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="nav-mobile"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("hero");
                }}
              >
                Home
              </a>
              <a
                href="#features"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("features");
                }}
              >
                Features
              </a>
              <a
                href="#screenshots"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("screenshots");
                }}
              >
                Screenshots
              </a>
              <a
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("download");
                }}
              >
                Download
              </a>
              <a
                href="#comments"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("comments");
                }}
              >
                Comments
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section ref={sectionRefs.hero} id="hero" className="hero">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <motion.div
              className="hero-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="hero-tagline">
                Every reflection looks familiar —until it blinks.
              </h2>
              <div className="rating">
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStarHalfAlt className="star" />
                <span className="rating-count">(254 ratings)</span>
              </div>
              <p className="game-type">
                A psychological horror experience for Windows
              </p>
              <div className="content-warning">
                <FaExclamationTriangle className="warning-icon" />
                <span>This game contains disturbing content</span>
              </div>
            </motion.div>

            <motion.div
              className="trailer-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="trailer-wrapper">
                <div className="trailer-overlay">
                  <button
                    className="play-button"
                    onClick={() =>
                      (document.querySelector(".trailer").src += "?autoplay=1")
                    }
                  >
                    <FaPlay size={24} />
                  </button>
                </div>
                <iframe
                  src="https://www.youtube.com/embed/tebO-nuY3PQ"
                  title="Game Trailer"
                  allowFullScreen
                  frameBorder="0"
                  className="trailer"
                ></iframe>
              </div>
              {/* <div className="cta-buttons">
                <a
                  href="#download"
                  className="btn btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("download");
                  }}
                >
                  <FaDownload /> Download Now
                </a>
                <p className="price-info">Name your own price</p>
              </div> */}
            </motion.div>
          </div>

          <div
            className="scroll-indicator"
            onClick={() => scrollToSection("features")}
          >
            <span>Discover More</span>
            <FaChevronDown className="scroll-arrow" />
          </div>
        </section>

        <section
          ref={sectionRefs.features}
          id="features"
          className="features-section"
        >
          <div className="container">
            <div className="section-header">
              <h2>About the Game</h2>
              <div className="section-divider"></div>
            </div>

            <div className="features-grid">
              <motion.div
                className="feature-text"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="feature-quote">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    The incidents require you to move out.
                    <br />
                    Let's start unpacking stuff and cozy up our new abode!
                  </motion.p>
                </div>
                <motion.p
                  className="feature-description"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <strong>Abodtion</strong> is a short first-person
                  psychological game about what remains when something is lost
                  before it begins.
                </motion.p>
                <motion.p
                  className="feature-description"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Every action feels normal —until it doesn't.
                  <br />
                  Every reflection looks familiar —until it blinks.
                  <br />
                  Every sound is real —even if no one is there.
                </motion.p>
              </motion.div>

              <motion.div
                className="feature-image"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={staticImages.feature1 || "/placeholder.svg"}
                  alt="Game Screenshot"
                  className="feature-img"
                />
              </motion.div>
            </div>

            <motion.div
              className="feature-quote-block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <blockquote>
                unpack the past
                <br />
                reheat what's left
                <br />
                live with the echo
              </blockquote>
            </motion.div>

            <div className="features-grid reverse">
              <motion.div
                className="feature-image"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={staticImages.feature2 || "/placeholder.svg"}
                  alt="Game Screenshot"
                  className="feature-img"
                />
              </motion.div>

              <motion.div
                className="feature-text"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3>Key Features</h3>
                <ul className="feature-list">
                  <li>
                    <span className="feature-icon">🏠</span> Home objects as
                    emotional triggers
                  </li>
                  <li>
                    <span className="feature-icon">🔄</span> Microwave as
                    narrative core
                  </li>
                  <li>
                    <span className="feature-icon">⏱️</span> ~15 minutes
                    playtime
                  </li>
                  <li>
                    <span className="feature-icon">🎮</span> Immersive
                    first-person experience
                  </li>
                  <li>
                    <span className="feature-icon">🔊</span> Atmospheric sound
                    design
                  </li>
                </ul>

                <h3>Controls</h3>
                <div className="controls-grid">
                  <div className="control-item">
                    <div className="control-key">WASD</div>
                    <div className="control-action">move</div>
                  </div>
                  <div className="control-item">
                    <div className="control-key">Ctrl</div>
                    <div className="control-action">crouch</div>
                  </div>
                  <div className="control-item">
                    <div className="control-key">LMB / RMB</div>
                    <div className="control-action">grab objects</div>
                  </div>
                  <div className="control-item">
                    <div className="control-key">E</div>
                    <div className="control-action">interact</div>
                  </div>
                  <div className="control-item">
                    <div className="control-key">Esc</div>
                    <div className="control-action">pause</div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="credits-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* <h3>Credits</h3>
              <div className="credits-grid">
                <div className="credit-item">
                  <div className="credit-role">Idea, Art, Code</div>
                  <div className="credit-name">koro.games team</div>
                </div>
                <div className="credit-item">
                  <div className="credit-role">Music</div>
                  <div className="credit-name">muyo5438</div>
                </div>
                <div className="credit-item">
                  <div className="credit-role">Business/Cooperation</div>
                  <div className="credit-name">
                    <a href="mailto:work@koro.games">work@koro.games</a>
                  </div>
                </div>
              </div> */}

              <div className="warning-box">
                <div className="warning-icon-container">
                  <FaExclamationTriangle className="warning-icon-large" />
                </div>
                <div className="warning-content">
                  <h4>Content Warning</h4>
                  <p>
                    This game is not suitable for children
                    <br />
                    or those who are easily disturbed.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="game-details-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <button className="details-toggle" onClick={toggleDetails}>
                Game Details
                <span className="toggle-icon">
                  {isDetailsOpen ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>

              <AnimatePresence>
                {isDetailsOpen && (
                  <motion.div
                    className="details-panel"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="details-grid">
                      <div className="detail-item">
                        <div className="detail-label">Updated</div>
                        <div className="detail-value">1 day ago</div>
                      </div>
                      <div className="detail-item">
                        <div className="detail-label">Published</div>
                        <div className="detail-value">29 days ago</div>
                      </div>
                      <div className="detail-item">
                        <div className="detail-label">Status</div>
                        <div className="detail-value">Released</div>
                      </div>
                      <div className="detail-item">
                        <div className="detail-label">Platforms</div>
                        <div className="detail-value">Windows</div>
                      </div>
                      <div className="detail-item">
                        <div className="detail-label">Rating</div>
                        <div className="detail-value">
                          <div className="stars">
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStarHalfAlt className="star" />
                            <span>(254)</span>
                          </div>
                        </div>
                      </div>
                      <div className="detail-item">
                        <div className="detail-label">Authors</div>
                        <div className="detail-value">koro.games, IRoRoI</div>
                      </div>
                      <div className="detail-item">
                        <div className="detail-label">Genre</div>
                        <div className="detail-value">
                          Adventure, Simulation
                        </div>
                      </div>
                      <div className="detail-item">
                        <div className="detail-label">Tags</div>
                        <div className="detail-value">
                          <div className="tags-list">
                            <span className="tag">3D</span>
                            <span className="tag">Creepy</span>
                            <span className="tag">First-Person</span>
                            <span className="tag">Horror</span>
                            <span className="tag">Psychological Horror</span>
                            <span className="tag">Short</span>
                            <span className="tag">Singleplayer</span>
                          </div>
                        </div>
                      </div>
                      <div className="detail-item">
                        <div className="detail-label">Average session</div>
                        <div className="detail-value">About a half-hour</div>
                      </div>
                      <div className="detail-item">
                        <div className="detail-label">Languages</div>
                        <div className="detail-value">English</div>
                      </div>
                      <div className="detail-item">
                        <div className="detail-label">Inputs</div>
                        <div className="detail-value">Keyboard, Mouse</div>
                      </div>
                      <div className="detail-item">
                        <div className="detail-label">Accessibility</div>
                        <div className="detail-value">
                          Subtitles, Interactive tutorial
                        </div>
                      </div>
                    </div>

                    <div className="social-links-container">
                      <h4>Follow Us</h4>
                      <div className="social-links">
                        <a
                          href="https://store.steampowered.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link"
                        >
                          <FaSteam /> Steam
                        </a>
                        <a
                          href="https://twitter.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link"
                        >
                          <FaTwitter /> Twitter
                        </a>
                        <a
                          href="https://youtube.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link"
                        >
                          <FaYoutube /> YouTube
                        </a>
                        <a
                          href="https://discord.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link"
                        >
                          <FaDiscord /> Discord
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        <section
          ref={sectionRefs.screenshots}
          id="screenshots"
          className="screenshots-section"
        >
          <div className="container">
            <div className="section-header">
              <h2>Screenshots</h2>
              <div className="section-divider"></div>
            </div>

            <div className="screenshots-grid">
              {featuredScreenshots.map((screenshot, index) => (
                <motion.div
                  key={index}
                  className="screenshot-item"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => openGallery(screenshot)}
                >
                  <div className="screenshot-overlay">
                    <FaPlay className="view-icon" />
                    <span className="screenshot-number">
                      {index + 1}/{featuredScreenshots.length}
                    </span>
                  </div>
                  <img
                    src={screenshot || "/placeholder.svg"}
                    alt={`Game Screenshot ${index + 1}`}
                    className="screenshot-img"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>

            <div className="view-all-container">
              <motion.button
                className="btn"
                onClick={() => openGallery(galleryScreenshots[0])}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Screenshots
              </motion.button>
            </div>
          </div>
        </section>

        <section
          ref={sectionRefs.download}
          id="download"
          className="download-section"
        >
          <div className="container">
            {/* <div className="section-header">
              <h2>Download Now</h2>
              <div className="section-divider"></div>
            </div> */}

            <motion.div
              className="download-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="download-content">
                <div className="download-info">
                  <h3>Abodtion</h3>
                  <p>A psychological horror experience</p>
                  <div className="download-meta">
                    <div className="meta-item">
                      <span className="meta-label">Version:</span>
                      <span className="meta-value">1.2</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Size:</span>
                      <span className="meta-value">80 MB</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Platform:</span>
                      <span className="meta-value">Windows</span>
                    </div>
                  </div>
                </div>

                <div className="download-image">
                  <img
                    src={staticImages.download || "/placeholder.svg"}
                    alt="Game Screenshot"
                    className="download-img"
                  />
                </div>
              </div>

              <div className="download-actions">
                {/* <a href="#" className="btn btn-primary btn-large">
                  <FaDownload /> Download Now
                </a> */}
                <div className="price-container">
                  <p className="price-info">Name your own price</p>
                  <div className="price-options">
                    <button className="price-option">$0</button>
                    <button className="price-option">$5</button>
                    <button className="price-option active">$10</button>
                    <button className="price-option">$15</button>
                    <button className="price-option">Custom</button>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="devlog-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3>Development Updates</h3>
              <div className="devlog-grid">
                <div className="devlog-item">
                  <div className="devlog-image">
                    <img
                      src={staticImages.devlog1 || "/placeholder.svg"}
                      alt="Update Screenshot"
                    />
                  </div>
                  <div className="devlog-content">
                    <h4>Abodtion v1.2 fixes &amp; New Trailer</h4>
                    <p className="devlog-date">21 days ago</p>
                    <p className="devlog-excerpt">
                      We've fixed several bugs reported by the community and
                      released a brand new trailer showcasing the atmospheric
                      horror elements...
                    </p>
                    <a href="#" className="devlog-link">
                      Read More
                    </a>
                  </div>
                </div>

                <div className="devlog-item">
                  <div className="devlog-image">
                    <img
                      src={staticImages.devlog2 || "/placeholder.svg"}
                      alt="Update Screenshot"
                    />
                  </div>
                  <div className="devlog-content">
                    <h4>Abodtion — Devlog v1.1</h4>
                    <p className="devlog-date">26 days ago</p>
                    <p className="devlog-excerpt">
                      Our first major update is here! We've improved
                      performance, added new interactive elements, and enhanced
                      the sound design...
                    </p>
                    <a href="#" className="devlog-link">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section
          ref={sectionRefs.comments}
          id="comments"
          className="comments-section"
        >
          <div className="container">
            <div className="section-header">
              <h2>Player Feedback</h2>
              <div className="section-divider"></div>
            </div>

            <div className="comments-container">
              <motion.div
                className="comment-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="comment-header">
                  <div className="comment-avatar">
                    <div className="avatar-placeholder">S</div>
                  </div>
                  <div className="comment-meta">
                    <h4 className="comment-author">SneakyVladimir</h4>
                    <div className="comment-date">12 hours ago</div>
                  </div>
                </div>
                <div className="comment-body">
                  <p>Marked as trojan, I would be aware</p>
                </div>
                <div className="comment-footer">
                  <button className="comment-action">
                    <BiComment /> Reply
                  </button>
                </div>
              </motion.div>

              <motion.div
                className="comment-card featured"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="comment-header">
                  <div className="comment-avatar">
                    <div className="avatar-placeholder">S</div>
                  </div>
                  <div className="comment-meta">
                    <h4 className="comment-author">SLUSHIE</h4>
                    <div className="comment-date">1 day ago</div>
                  </div>
                </div>
                <div className="comment-body">
                  <p>
                    Really dark game assuming it is indeed about an aborted baby
                    or a miscarriage or something of the like. I thought it was
                    well pieced together for a short horror game!
                  </p>
                  <div
                    className="comment-media"
                    onClick={() => openGallery(staticImages.comment1)}
                  >
                    <img
                      src={staticImages.comment1 || "/placeholder.svg"}
                      alt="Comment Media"
                    />
                    <div className="media-overlay">
                      <FaPlay className="play-icon" />
                    </div>
                  </div>
                </div>
                <div className="comment-footer">
                  <button className="comment-action">
                    <BiComment /> Reply
                  </button>
                </div>
              </motion.div>

              <motion.div
                className="comment-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="comment-header">
                  <div className="comment-avatar">
                    <div className="avatar-placeholder">J</div>
                  </div>
                  <div className="comment-meta">
                    <h4 className="comment-author">jinx</h4>
                    <div className="comment-date">1 day ago</div>
                  </div>
                </div>
                <div className="comment-body">
                  <p>
                    interesting game! i definitely got scared a few times lol.
                    thanks korogames!
                  </p>
                  <div
                    className="comment-media"
                    onClick={() => openGallery(staticImages.comment2)}
                  >
                    <img
                      src={staticImages.comment2 || "/placeholder.svg"}
                      alt="Comment Media"
                    />
                    <div className="media-overlay">
                      <FaPlay className="play-icon" />
                    </div>
                  </div>
                </div>
                <div className="comment-footer">
                  <button className="comment-action">
                    <BiComment /> Reply
                  </button>
                </div>
              </motion.div>
            </div>

            <div className="comments-pagination">
              <div className="pagination-info">
                Viewing most recent comments 1 to 3 of 202
              </div>
              <div className="pagination-actions">
                <button className="pagination-btn">Next Page</button>
                <button className="pagination-btn">Last Page</button>
              </div>
            </div>

            <div className="add-comment">
              <button className="btn btn-secondary">
                Log in to leave a comment
              </button>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <motion.div
              className="cta-container"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="cta-content">
                <h2>Ready to Experience the Horror?</h2>
                <p>
                  Download Abodtion now and uncover what remains when something
                  is lost before it begins.
                </p>
              </div>
              {/* <div className="cta-actions">
                <a
                  href="#download"
                  className="btn btn-primary btn-large"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("download");
                  }}
                >
                  <FaDownload /> Download Now
                </a>
                <div className="social-share">
                  <span>Share:</span>
                  <div className="share-buttons">
                    <button className="share-btn">
                      <FaTwitter />
                    </button>
                    <button className="share-btn">
                      <FaDiscord />
                    </button>
                    <button className="share-btn">
                      <FaSteam />
                    </button>
                  </div>
                </div>
              </div> */}
            </motion.div>
          </div>
        </section>
      </main>

      {/* <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <img
                  src={logoText || "/placeholder.svg"}
                  alt="Logo"
                  className="footer-logo-img"
                />
                <span>koro.games</span>
              </div>
              <p className="footer-tagline">
                Creating unforgettable psychological experiences
              </p>
            </div>

            <div className="footer-links">
              <h4>Links</h4>
              <ul>
                <li>
                  <a href="#">View all games</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Report an issue</a>
                </li>
              </ul>
            </div>

            <div className="footer-social">
              <h4>Follow Us</h4>
              <div className="footer-social-links">
                <a
                  href="https://store.steampowered.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                >
                  <FaSteam />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                >
                  <FaDiscord />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-info">
              <div className="update-time">Updated 1 day ago</div>
              <div className="copyright">
                &copy; {new Date().getFullYear()} koro.games. All rights
                reserved.
              </div>
            </div>
          </div>
        </div>
      </footer> */}

      {/* Image Gallery Modal */}
      {showGalleryModal && (
        <motion.div
          className="gallery-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="gallery-overlay"
            onClick={closeGallery}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ></motion.div>
          <motion.div
            className="gallery-content"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <motion.button
              className="gallery-close"
              onClick={closeGallery}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <BiX size={24} />
            </motion.button>
            <div className="gallery-image-container">
              <motion.img
                key={selectedImage}
                src={selectedImage || "/placeholder.svg"}
                alt="Gallery Image"
                className="gallery-image"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="gallery-controls">
              <motion.button
                className="gallery-nav gallery-prev"
                onClick={prevImage}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                &lt;
              </motion.button>
              <motion.button
                className="gallery-nav gallery-next"
                onClick={nextImage}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                &gt;
              </motion.button>
            </div>
            <div className="gallery-info">
              <span className="gallery-counter">
                {galleryScreenshots.indexOf(selectedImage) + 1} /{" "}
                {galleryScreenshots.length}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default App;
