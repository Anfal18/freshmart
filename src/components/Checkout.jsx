
import React, { useState } from "react";

function Checkout({ products, cart, onBack, onOrderPlaced }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    pincode: "",
  });

  const [error, setError] = useState("");

  const items = products.filter(
    (product) => (cart[product.id] || 0) > 0
  );

  const total = items.reduce(
    (sum, product) =>
      sum + product.price * cart[product.id],
    0
  );

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (items.length === 0) {
      setError("Your cart is empty. Please add products first.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
      setError("Enter a valid 10-digit Indian mobile number.");
      return;
    }

    if (!/^\d{6}$/.test(form.pincode.trim())) {
      setError("Enter a valid 6-digit PIN code.");
      return;
    }

    onOrderPlaced({
      customer: form,
      items: items.map((product) => ({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: cart[product.id],
        unit: product.unit,
      })),
      total,
    });
  }

  return (
    <section className="checkout-page">
      <button className="continue-btn" onClick={onBack}>
        ← Back to Cart
      </button>

      <h1>Checkout</h1>
      <p className="checkout-description">
        Where should we deliver your fresh products?
      </p>

      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Delivery Details</h2>

          <label htmlFor="customer-name">Full Name</label>
          <input
            id="customer-name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            autoComplete="name"
            required
            maxLength={100}
          />

          <label htmlFor="customer-phone">Mobile Number</label>
          <input
            id="customer-phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="10-digit mobile number"
            autoComplete="tel"
            inputMode="numeric"
            required
          />

          <label htmlFor="customer-address">Delivery Address</label>
          <textarea
            id="customer-address"
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="House number, street, town"
            autoComplete="street-address"
            rows={4}
            maxLength={500}
            required
          />

          <label htmlFor="customer-pincode">PIN Code</label>
          <input
            id="customer-pincode"
            name="pincode"
            value={form.pincode}
            onChange={handleChange}
            placeholder="6-digit PIN code"
            inputMode="numeric"
            autoComplete="postal-code"
            required
          />

          {error && <p className="checkout-error">{error}</p>}

          <button className="checkout-btn" type="submit">
            Confirm Demo Order
          </button>

          <p className="demo-note">
            Demo only. This form does not arrange real delivery
            or process payment.
          </p>
        </form>

        <aside className="checkout-summary">
          <h2>Order Summary</h2>

          {items.map((product) => (
            <div className="summary-row" key={product.id}>
              <span>
                {product.name} × {cart[product.id]}
              </span>
              <strong>
                ₹{product.price * cart[product.id]}
              </strong>
            </div>
          ))}

          <div className="summary-total">
            <span>Total</span>
            <strong>₹{total}</strong>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Checkout;
