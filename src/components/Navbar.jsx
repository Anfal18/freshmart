
import React from "react";

function Navbar({
  cartCount,
  onSearch,
  onCategoryChange,
  onCartClick,
}) {
  return (
    <header className="navbar">
      <a
        href="#home"
        className="logo"
        onClick={() => onCategoryChange("All")}
      >
        🥬 FreshMart
      </a>

      <nav className="nav-links">
        <a
          href="#home"
          onClick={() => onCategoryChange("All")}
        >
          Home
        </a>

        <a
          href="#products"
          onClick={() => onCategoryChange("Vegetables")}
        >
          Vegetables
        </a>

        <a
          href="#products"
          onClick={() => onCategoryChange("Fruits")}
        >
          Fruits
        </a>
      </nav>

      <div className="nav-actions">
        <input
          type="search"
          placeholder="Search fruits, vegetables..."
          aria-label="Search products"
          onChange={(event) => onSearch(event.target.value)}
        />

        <button
          type="button"
          className="cart-link cart-nav-button"
          onClick={onCartClick}
        >
          🛒 <span>Cart ({cartCount})</span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
