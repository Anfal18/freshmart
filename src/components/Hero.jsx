
import React from "react";

function Hero({ onCategoryChange }) {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-content">
          <span className="hero-tag">FRESH • HEALTHY • NATURAL</span>

          <h1>Freshness Delivered to Your Door!</h1>

          <p>
            Shop fresh fruits and vegetables every day.
            Healthy choices for a better tomorrow.
          </p>

          <a href="#products" className="shop-btn">
            Shop Now →
          </a>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=85"
            alt="Fresh vegetables and produce"
          />
        </div>
      </section>

      <section className="categories" id="categories">
        <h2>Shop by Category</h2>
        <p className="category-subtitle">
          Choose your favourite fresh produce
        </p>

        <div className="category-grid">
          <article className="category-card vegetables-card">
            <img
              src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
              alt="Fresh vegetables"
            />

            <div className="category-info">
              <h3>Vegetables</h3>
              <p>Fresh and healthy vegetables for everyday meals.</p>

              <a
                href="#products"
                className="category-btn"
                onClick={() => onCategoryChange("Vegetables")}
              >
                Shop Vegetables →
              </a>
            </div>
          </article>

          <article className="category-card fruits-card">
            <img
              src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=600&q=80"
              alt="Fresh fruits"
            />

            <div className="category-info">
              <h3>Fruits</h3>
              <p>Juicy and delicious fruits picked just for you.</p>

              <a
                href="#products"
                className="category-btn"
                onClick={() => onCategoryChange("Fruits")}
              >
                Shop Fruits →
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default Hero;
