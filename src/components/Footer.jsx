import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link to="/" className="glow-logo footer-logo">
            glow<span>.</span>
          </Link>
          <p>Thoughtful skincare, feel-good rituals.</p>
        </div>

        <div className="footer-links">
          <Link to="/shop">Shop</Link>
          <Link to="/about">Our story</Link>
          <Link to="/faqs">FAQs</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-bottom">
          <small>© 2026 Glow Beauty. All rights reserved.</small>

          <div className="social-links">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <i className="bi bi-facebook"></i>
            </a>

            <a
              href="https://wa.me/96100000000"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <i className="bi bi-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
