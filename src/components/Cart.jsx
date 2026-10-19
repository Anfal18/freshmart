
import React from "react";

function Cart({
  products,
  cart,
  onAddToCart,
  onRemoveFromCart,
  onContinueShopping,
  onCheckout
}) {
  const cartItems = products.filter(
    (product) => (cart[product.id] || 0) > 0
  );

  const totalQuantity = cartItems.reduce(
    (sum, product) => sum + cart[product.id],
    0
  );

  const totalPrice = cartItems.reduce(
    (sum, product) => sum + product.price * cart[product.id],
    0
  );

  return (
    <section className="cart-page" id="cart">
      <h1>Your Shopping Cart</h1>
      <p className="cart-intro">
        Review your fresh fruits and vegetables.
      </p>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Add some fresh products to get started.</p>
          <button onClick={onContinueShopping}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cartItems.map((product) => (
              <article className="cart-item" key={product.id}>
                <img src={product.image} alt={product.name} />

                <div className="cart-item-info">
                  <h3>{product.name}</h3>
                  <p>
                    ₹{product.price} / {product.unit}
                  </p>

                  <div className="quantity-control cart-quantity">
                    <button
                      aria-label={`Remove one ${product.name}`}
                      onClick={() => onRemoveFromCart(product.id)}
                    >
                      −
                    </button>

                    <span>{cart[product.id]}</span>

                    <button
                      aria-label={`Add one ${product.name}`}
                      onClick={() => onAddToCart(product)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="cart-item-end">
                  <strong>
                    ₹{product.price * cart[product.id]}
                  </strong>

                  <button
                    className="remove-item"
                    onClick={() => {
                      for (
                        let i = 0;
                        i < cart[product.id];
                        i++
                      ) {
                        onRemoveFromCart(product.id);
                      }
                    }}
                  >
                    Remove
                  </button>
                </div>
              </article>
            ))}
          </div>

          <aside className="order-summary">
            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Total items</span>
              <span>{totalQuantity}</span>
            </div>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{totalPrice}</span>
            </div>

            <div className="summary-row">
              <span>Delivery charge</span>
              <span>Calculated at checkout</span>
            </div>

            <div className="summary-total">
              <span>Product total</span>
              <strong>₹{totalPrice}</strong>
            </div>

            <button
              className="checkout-btn"
              onClick={onCheckout}
            >
              Proceed to Checkout →
            </button>

            <button
              className="continue-btn"
              onClick={onContinueShopping}
            >
              Continue Shopping
            </button>
          </aside>
        </div>
      )}
    </section>
  );
}

export default Cart;
