import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const banners = [1, 2, 3, 4]; // Placeholder IDs for now

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000); // 5 seconds interval
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">

          <h1 className="hero-title">
            Save Big with India’s Best Coupons, Promo Codes & Online Deals
          </h1>

          {/* Auto-Sliding Banner Section */}
          <div className="banner-carousel">
            <div
              className="banner-track"
              style={{ transform: `translateX(-${currentBanner * 100}%)` }}
            >
              {banners.map((id, index) => (
                <div key={id} className="banner-slide">
                  <div className={`hero-banner banner-${id}`}>
                    <span className="banner-placeholder-text">Banner {id} Space</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots Indicators */}
            <div className="banner-dots">
              {banners.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${currentBanner === index ? 'active' : ''}`}
                  onClick={() => setCurrentBanner(index)}
                  aria-label={`Go to banner ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="search-container">
            <div className="main-search">
              <input
                type="text"
                placeholder="Search for a brand... (e.g. Uber, Amazon, Dominos)"
                className="hero-input"
              />
              <button className="hero-search-btn">Search</button>
            </div>

            <div className="popular-tags">
              <span className="tag-label">Trending:</span>
              <a href="#" className="tag">Recharge</a>
              <a href="#" className="tag">Fashion</a>
              <a href="#" className="tag">Electronics</a>
              <a href="#" className="tag">Travel</a>
              <a href="#" className="tag">Food</a>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-bg"></div>

      <style>{`
        .hero {
          padding: 40px 0 60px;
          position: relative;
          text-align: center;
          background: linear-gradient(to bottom, var(--bg-main), #EBEAF8);
          overflow: hidden;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          margin: 0 auto;
        }

        /* Banner Carousel Styles */
        .banner-carousel {
          position: relative;
          width: 100%;
          height: 200px; /* Adjust height as needed */
          margin-bottom: 3rem;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: #e2e8f0;
          box-shadow: var(--shadow-md);
        }

        .banner-track {
          display: flex;
          height: 100%;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .banner-slide {
          min-width: 100%;
          height: 100%;
        }

        .hero-banner {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-size: cover;
          background-position: center;
          position: relative;
        }

        /* Distinct placeholder colors for demo */
        .banner-1 { background: linear-gradient(135deg, #3b82f6, #06b6d4); }
        .banner-2 { background: linear-gradient(135deg, #10b981, #3b82f6); }
        .banner-3 { background: linear-gradient(135deg, #f59e0b, #ec4899); }
        .banner-4 { background: linear-gradient(135deg, #6366f1, #8b5cf6); }

        .banner-placeholder-text {
          color: white;
          font-weight: 700;
          font-size: 1.5rem;
          text-shadow: 0 2px 4px rgba(0,0,0,0.2);
          opacity: 0.9;
        }

        .banner-dots {
          position: absolute;
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.5rem;
          z-index: 2;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          transition: var(--transition);
          padding: 0;
        }

        .dot.active {
          background: white;
          transform: scale(1.2);
        }

        .search-container {
          background: rgba(255, 255, 255, 0.6);
          padding: 2rem;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px);
          box-shadow: var(--shadow-lg);
        }

        .main-search {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .hero-input {
          flex: 1;
          background: white;
          border: 1px solid rgba(0,0,0,0.1);
          padding: 1rem 1.5rem;
          border-radius: var(--radius-md);
          color: var(--text-main);
          font-size: 1.1rem;
          outline: none;
          transition: var(--transition);
        }

        .hero-input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }

        .hero-search-btn {
          background: var(--primary);
          color: white;
          padding: 0 2rem;
          font-size: 1rem;
          font-weight: 600;
          border-radius: var(--radius-md);
          transition: var(--transition);
        }

        .hero-search-btn:hover {
          background: var(--primary-hover);
        }

        .popular-tags {
          display: flex;
          justify-content: center;
          gap: 0.8rem;
          flex-wrap: wrap;
          font-size: 0.9rem;
        }

        .tag-label {
          color: var(--text-muted);
        }

        .tag {
          color: var(--text-main);
          border-bottom: 1px dashed var(--text-muted);
          transition: var(--transition);
        }

        .tag:hover {
          color: var(--primary);
          border-color: var(--primary);
        }

        .hero-bg {
          position: absolute;
          top: -20%;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(37, 99, 235, 0.08) 0%, transparent 70%);
          z-index: 1;
          pointer-events: none;
        }

        @media (max-width: 640px) {
          .banner-carousel {
            height: 150px;
          }
          
          .main-search {
            flex-direction: column;
          }
          
          .hero-search-btn {
            padding: 1rem;
            width: 100%;
          }

          .hero-title {
            font-size: 1.8rem;
            font-weight: 800;
            margin-bottom: 2rem;
            line-height: 1.2;
            color: var(--text-main);
            padding: 0 1rem;
          }

          @media (min-width: 768px) {
            .hero-title {
              font-size: 2.5rem;
            }
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
