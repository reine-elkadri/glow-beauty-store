import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

export default function Cart() {
  const {
    cart,
    cartTotal,
    updateQuantity,
    removeFromCart
  } = useShop();

  const [checkout, setCheckout] = useState(false);

  const shipping = cartTotal >= 50 || cartTotal === 0 ? 0 : 5;

  return (
    <main className="container page-container">

      <div className="page-heading">
        <span className="eyebrow">ALMOST YOURS</span>
        <h1>Your shopping<em>bag.</em> </h1>
        <p>A little something for your everyday routine.</p>
      </div>

      {cart.length > 0 ? (
        <div className="cart-layout">
          <div className="cart-items">
            {cart.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-item-info">
                  <span className="product-brand">{item.brand}</span>
                  <strong>{item.name}</strong>
                  <span>${item.price.toFixed(2)}</span>

                  <div className="quantity-control">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label="Decrease quantity">−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label="Increase quantity">+</button>
                  </div>
                </div>

                <button className="remove-btn" onClick={() => removeFromCart(item.id)} aria-label={`Remove ${item.name}`}>
                  <i className="bi bi-trash3"></i>
                </button>
              </div>
            ))}
          </div>

          <aside className="order-summary">
            <h3>Order summary</h3>

            <div>
              <span>Subtotal</span>
              <strong>${cartTotal.toFixed(2)}</strong>
            </div>

            <div>
              <span>Shipping</span>
              <strong>
                {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
              </strong>
            </div>

            <div className="summary-total">
              <span>Total</span>
              <strong>
                ${(cartTotal + shipping).toFixed(2)}
              </strong>
            </div>

            <button className="btn btn-dark rounded-pill w-100" onClick={() => setCheckout(true)}>
              Continue to checkout
            </button>

            <p className="summary-note">
              Demo checkout only — no payment will be collected. </p>

            {checkout && (
              <div className="checkout-message">
                <i className="bi bi-check-circle"></i>
                Checkout demonstration complete! No payment was processed.
              </div>
            )}

          </aside>
        </div>
      ) : (

        <div className="empty-state">
          <i className="bi bi-bag"></i>
          <h3>Your bag is empty</h3>
          <p>Find something lovely for your routine.</p>

          <Link to="/shop" className="btn btn-dark rounded-pill">Start shopping</Link>
        </div>
      )}
    </main>
  );

}
