import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useShop } from "../context/ShopContext";

export default function Navbar() {
  const { favorites, cartCount } = useShop();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="announcement">
        <div className="announcement-content">
          <div className="announcement-group">
            <span>A little care goes a long way</span>
            <span>✦</span>
            <span>Free shipping on orders over $50</span>
            <span>✦</span>
            <span>Discover your everyday favorites</span>
            <span>✦</span>
          </div>

          <div className="announcement-group" aria-hidden="true">
            <span>A little care goes a long way</span>
            <span>✦</span>
            <span>Free shipping on orders over $50</span>
            <span>✦</span>
            <span>Discover your everyday favorites</span>
            <span>✦</span>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg glow-nav">
        <div className="container">
          <Link className="navbar-brand glow-logo" to="/" onClick={closeMenu}>
            glow<span>.</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-controls="glowNav"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`} id="glowNav" >
            <div className="navbar-nav mx-auto gap-lg-3">
              <NavLink className="nav-link" to="/" end onClick={closeMenu}>Home</NavLink>
              <NavLink className="nav-link" to="/shop" onClick={closeMenu}>Shop</NavLink>
              <NavLink className="nav-link" to="/about" onClick={closeMenu}>About</NavLink>
              <NavLink className="nav-link" to="/faqs" onClick={closeMenu}>FAQs</NavLink>
              <NavLink className="nav-link" to="/contact" onClick={closeMenu}>Contact</NavLink>
            </div>

            <div className="nav-actions">
              <NavLink to="/login" className="nav-icon-link" onClick={closeMenu}>
                <i className="bi bi-person"></i>
              </NavLink>

              <Link to="/favorites" className="nav-icon-link" onClick={closeMenu}>
                <i className="bi bi-heart"></i>
                <span className="nav-count">{favorites.length}</span>
              </Link>

              <Link to="/cart" className="nav-icon-link" onClick={closeMenu}>
                <i className="bi bi-bag"></i>
                <span className="nav-count">{cartCount}</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
