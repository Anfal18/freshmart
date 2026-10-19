
import React from "react";
import ProductCard from "./ProductCard";

function ProductList({
  products,
  cart,
  onAddToCart,
  onRemoveFromCart
}) {
  return (
    <section className="product-section" id="products">
      <div className="product-section-heading">
        <div>
          <h2>Our Fresh Products</h2>
          <p>Freshness and quality in every basket.</p>
        </div>

        <span className="product-count">
          {products.length} products
        </span>
      </div>

      {products.length === 0 ? (
        <div className="no-products">
          <span>🔎</span>
          <h3>No products found</h3>
          <p>Try another search term or category.</p>
        </div>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              quantity={cart[product.id] || 0}
              onAddToCart={onAddToCart}
              onRemoveFromCart={onRemoveFromCart}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductList;
