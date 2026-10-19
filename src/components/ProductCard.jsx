
import React from "react";

function ProductCard({ product, quantity, onAddToCart, onRemoveFromCart }) {
  return (
    <article className="product-card">
      <div className="product-image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.style.display = "none";
            const fallback = event.currentTarget.nextElementSibling;
            if (fallback) fallback.style.display = "flex";
          }}
        />

        <div className="product-image-fallback">
          {product.category === "Fruits" ? "🍎" : "🥕"}
        </div>

        <span className="product-category">{product.category}</span>
      </div>

      <div className="product-details">
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>

        <p className="product-price">
          ₹{product.price}
          <span> / {product.unit}</span>
        </p>

        {quantity === 0 ? (
          <button
            className="add-cart-btn"
            onClick={() => onAddToCart(product)}
          >
            + Add to Cart
          </button>
        ) : (
          <div className="quantity-control">
            <button
              aria-label={`Remove one ${product.name}`}
              onClick={() => onRemoveFromCart(product.id)}
            >
              −
            </button>

            <span>{quantity}</span>

            <button
              aria-label={`Add one ${product.name}`}
              onClick={() => onAddToCart(product)}
            >
              +
            </button>
          </div>
        )}
      </div>
    </article>
  );
}

export default ProductCard;
