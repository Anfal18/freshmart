
import React, { useEffect, useMemo, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Bill from "./components/Bill";

import products from "./products";
import "./App.css";

function App() {
  // Load the previously saved cart
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("freshmart-cart");
      return savedCart ? JSON.parse(savedCart) : {};
    } catch (error) {
      console.error("Could not load saved cart:", error);
      return {};
    }
  });

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [showCartPage, setShowCartPage] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [placedOrder, setPlacedOrder] = useState(null);

  // Save the cart whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("freshmart-cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Could not save saved cart:", error);
    }
  }, [cart]);

  // Add a product to the cart
  function addToCart(product) {
    setCart((previousCart) => ({
      ...previousCart,
      [product.id]: (previousCart[product.id] || 0) + 1,
    }));
  }

  // Reduce quantity or remove a product
  function removeFromCart(productId) {
    setCart((previousCart) => {
      const updatedCart = { ...previousCart };
      const quantity = updatedCart[productId] || 0;

      if (quantity <= 1) {
        delete updatedCart[productId];
      } else {
        updatedCart[productId] = quantity - 1;
      }

      return updatedCart;
    });
  }

  // Total number of items
  const cartCount = Object.values(cart).reduce(
    (total, quantity) => total + quantity,
    0
  );

  // Total cart price
  const cartTotal = products.reduce(
    (total, product) =>
      total + product.price * (cart[product.id] || 0),
    0
  );

  // Search and filter products
  const filteredProducts = useMemo(() => {
    const searchTerm = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm);

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  // Navigate back to shopping
  function continueShopping() {
    setShowCartPage(false);
    setShowCheckout(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Handle category navigation
  function handleCategoryChange(selectedCategory) {
    setCategory(selectedCategory);
    setShowCartPage(false);
    setShowCheckout(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Handle demo order confirmation
  function handleOrderPlaced(order) {
    setPlacedOrder(order);
    setCart({});
    setShowCheckout(false);
    setShowCartPage(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="app">
      <Navbar
        cartCount={cartCount}
        onSearch={setSearch}
        onCategoryChange={handleCategoryChange}
        onCartClick={() => {
          setShowCartPage(true);
          setShowCheckout(false);
          setPlacedOrder(null);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />

      {/* Home page and products */}
      {!showCartPage && (
        <>
          {/* Existing hero with entrance animation */}
          <Hero onCategoryChange={handleCategoryChange} />

          {/* Product category filters */}
          <div className="filter-bar">
            <button
              className={
                category === "All"
                  ? "filter-btn active"
                  : "filter-btn"
              }
              onClick={() => setCategory("All")}
            >
              All Products
            </button>

            <button
              className={
                category === "Vegetables"
                  ? "filter-btn active"
                  : "filter-btn"
              }
              onClick={() => setCategory("Vegetables")}
            >
              🥦 Vegetables
            </button>

            <button
              className={
                category === "Fruits"
                  ? "filter-btn active"
                  : "filter-btn"
              }
              onClick={() => setCategory("Fruits")}
            >
              🍎 Fruits
            </button>
          </div>

          {/* Product list */}
          <ProductList
            products={filteredProducts}
            cart={cart}
            onAddToCart={addToCart}
            onRemoveFromCart={removeFromCart}
          />

          {/* View shopping cart */}
          <div className="view-cart-container">
            <button
              className="checkout-btn"
              onClick={() => {
                setShowCartPage(true);
                setShowCheckout(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              🛒 View Shopping Cart ({cartCount})
            </button>
          </div>
        </>
      )}

      {/* Cart and checkout pages */}
      {showCartPage &&
        (showCheckout ? (
          <Checkout
            products={products}
            cart={cart}
            onBack={() => setShowCheckout(false)}
            onOrderPlaced={handleOrderPlaced}
          />
        ) : (
          <Cart
            products={products}
            cart={cart}
            onAddToCart={addToCart}
            onRemoveFromCart={removeFromCart}
            onContinueShopping={continueShopping}
            onCheckout={() => {
              if (cartCount === 0) {
                alert(
                  "Your cart is empty. Please add products first."
                );
                return;
              }

              setShowCheckout(true);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        ))}

      {/* Final billing receipt after demo order confirmation */}
      {placedOrder && (
        <Bill
          items={placedOrder.items}
          customer={placedOrder.customer}
          onContinueShopping={() => {
            setPlacedOrder(null);
            continueShopping();
          }}
        />
      )}

      {/* Footer */}
      <footer className="site-footer">
        <p>🥬 FreshMart — Freshness delivered to your door.</p>
        <p>Fresh fruits and vegetables for every home.</p>
      </footer>
    </div>
  );
}

export default App;
