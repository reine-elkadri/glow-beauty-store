import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useShop } from "../context/ShopContext";

export default function Favorites() {
  const { favorites } = useShop();

  return (
    <main className="container page-container">
      <div className="page-heading">

        <span className="eyebrow">YOUR PERSONAL EDIT</span>
        <h1>Your <em>favorites.</em></h1>
        <p>All the little things you've had your eye on.</p>
      </div>

      {favorites.length > 0 ? (
        <>
          <div className="results-line">
            <span>
              {favorites.length} saved{" "}
              {favorites.length === 1 ? "product" : "products"}
            </span>
          </div>

          <div className="product-grid">
            {favorites.map(product => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </>
      ) : (

        <div className="empty-state">
          <i className="bi bi-heart"></i>
          <h3>Your wishlist is waiting</h3>
          <p>Tap the heart on any product to save it here.</p>

          <Link to="/shop" className="btn btn-dark rounded-pill">
            Explore products
          </Link>
        </div>
      )}
    </main>
  );

}
