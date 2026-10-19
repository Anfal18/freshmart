import React from "react";

function Bill({ items = [], customer, onContinueShopping }) {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const billDate = new Date().toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <section className="bill-container" aria-labelledby="bill-title">
      <div className="bill">
        <div className="bill-heading">
          <span className="bill-mark" aria-hidden="true">🥬</span>
          <div>
            <h1 id="bill-title">FreshMart</h1>
            <p>Fresh Vegetables and Fruits</p>
          </div>
        </div>

        <div className="bill-success">
          <span aria-hidden="true">✓</span>
          <div>
            <h2>Order confirmed!</h2>
            <p>This is your demo purchase bill.</p>
          </div>
        </div>

        <div className="bill-meta">
          <p><strong>Bill date:</strong> {billDate}</p>
          <p><strong>Bill type:</strong> Demo order receipt</p>
        </div>

        {customer && (
          <section className="bill-customer">
            <h3>Delivery details</h3>
            <p><strong>Name:</strong> {customer.name}</p>
            <p><strong>Mobile:</strong> {customer.phone}</p>
            <p><strong>Address:</strong> {customer.address}</p>
            <p><strong>PIN code:</strong> {customer.pincode}</p>
          </section>
        )}

        <h3 className="bill-items-title">Purchase details</h3>
        <div className="bill-table-wrap">
          <table className="bill-table">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Qty</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>₹{Number(item.price).toFixed(2)}</td>
                  <td>{item.quantity} {item.unit || ""}</td>
                  <td>₹{(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bill-total-row">
          <span>Grand Total</span>
          <strong>₹{total.toFixed(2)}</strong>
        </div>

        <p className="bill-thank-you">Thank you for shopping with FreshMart!</p>
        <p className="demo-note bill-disclaimer">
          Demo only. No real payment has been processed and no delivery has been arranged.
        </p>

        <div className="bill-actions no-print">
          <button type="button" className="checkout-btn" onClick={() => window.print()}>
            Print / Save as PDF
          </button>
          <button type="button" className="continue-btn" onClick={onContinueShopping}>
            Continue Shopping
          </button>
        </div>
      </div>
    </section>
  );
}

export default Bill;
