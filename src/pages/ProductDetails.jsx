import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";
import { useShop } from "../context/ShopContext";

export default function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const { favorites, toggleFavorite, addToCart } = useShop();
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <main className="container page-container empty-state">
        <h2>Product not found</h2>
        <Link to="/shop" className="text-link">
          Back to shop
        </Link>
      </main>
    );
  }

  const isFavorite = favorites.some(
    (item) => item.id === product.id
  );

  return (
    <main className="container page-container">
      <div className="breadcrumbs">
        <Link to="/">Home</Link> /
        <Link to="/shop">Shop</Link> /
        {product.name}
      </div>

      <div className="detail-layout">
        <div className="detail-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="detail-copy">
          <span className="eyebrow">{product.brand}</span>

          <h1>{product.name}</h1>

          <div className="detail-rating">
            <i className="bi bi-star-fill"></i>
            {product.rating}
            <span>·</span>
            Customer favorite
          </div>

          <div className="detail-price">
            ${product.price.toFixed(2)}
          </div>

          <p>{product.description}</p>

          <div className="detail-meta">
            <span>Category</span>
            <strong>{product.category}</strong>
          </div>

          <div className="detail-buttons">
            <button
              className="btn btn-dark rounded-pill"
              onClick={() => {
                addToCart(product);
                setAdded(true);
              }}
            >
              {added ? "Added to bag ✓" : "Add to bag"}
            </button>

            <button
              className={`btn btn-favorite-detail ${isFavorite ? "active" : ""}`}
              onClick={() => toggleFavorite(product)}
            >
              {isFavorite ? "Saved" : "Add to favorites"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
