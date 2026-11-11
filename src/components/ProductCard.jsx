import React from "react";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

export default function ProductCard({ product }) {
  const { favorites, toggleFavorite, addToCart } = useShop();
  const favoriteProducts = favorites.filter(
    item => item.id === product.id
  );

  const isFavorite = favoriteProducts.length > 0;

  return (
    <article className="product-card">
      <div className="product-image-wrap">

        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
            loading="lazy"
          />
        </Link>

        {product.tag && (
          <span className="product-tag">
            {product.tag}
          </span>
        )}

        <button
          className={`favorite-btn ${isFavorite ? "is-favorite" : ""}`}
          onClick={() => toggleFavorite(product)}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          title={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <i className={`bi ${isFavorite ? "bi-heart-fill" : "bi-heart"}`}></i>
        </button>

      </div>

      <div className="product-info">

        <div className="product-brand">
          {product.brand}
        </div>

        <Link
          to={`/product/${product.id}`}
          className="product-name"
        >
          {product.name}
        </Link>

        <div className="product-bottom">

          <strong>${product.price.toFixed(2)}</strong>

          <span className="rating">
            <i className="bi bi-star-fill"></i>
            {product.rating}
          </span>

        </div>

        <button
          className="btn btn-outline-dark add-cart-btn"
          onClick={() => addToCart(product)}
        >
          Add to bag
          <i className="bi bi-arrow-right"></i>
        </button>

      </div>
    </article>
  );
}
