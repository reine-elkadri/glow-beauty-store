import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products, categories } from "../data/products";

export default function Shop() {
  const { category } = useParams();
  const navigate = useNavigate();

  const [selectedBrand, setSelectedBrand] = useState("All");
  const [sortPrice, setSortPrice] = useState("default");
  const [openFilter, setOpenFilter] = useState("");

  const brands = [...new Set(products.map(product => product.brand))];

  let displayedProducts = products;

  if (category) {
    displayedProducts = displayedProducts.filter(
      product => product.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (selectedBrand !== "All") {
    displayedProducts = displayedProducts.filter(
      product => product.brand === selectedBrand
    );
  }

  if (sortPrice === "low") {
    displayedProducts = [...displayedProducts].sort(
      (a, b) => a.price - b.price
    );
  } else if (sortPrice === "high") {
    displayedProducts = [...displayedProducts].sort(
      (a, b) => b.price - a.price
    );
  }

  function changeCategory(value) {
    setSelectedBrand("All");
    setSortPrice("default");
    setOpenFilter("");

    if (value === "All") {
      navigate("/shop");
    } else {
      navigate(`/shop/${value}`);
    }
  }

  function clearFilters() {
    setSelectedBrand("All");
    setSortPrice("default");
    setOpenFilter("");
    navigate("/shop");
  }

  return (
    <main className="container page-container">

      <div className="page-heading">
        <span className="eyebrow">
          FIND YOUR FEEL-GOOD ESSENTIALS
        </span>

        <h1>
          {category ? (
            <>
              {category} <em>collection.</em>
            </>
          ) : (
            <>
              The skincare <em>shelf.</em>
            </>
          )}
        </h1>

        <p>Little rituals, lovely ingredients and everyday favorites.</p>
      </div>

      <div className="shop-filters">

        <div className="filter-circles">

          <div className="filter-circle-wrapper">
            <button
              className="filter-circle"
              onClick={() =>
                setOpenFilter(openFilter === "category" ? "" : "category")
              }
            >
              <i className="bi bi-grid"></i>
              <span>Category</span>
            </button>

            {openFilter === "category" && (
              <div className="filter-dropdown">
                <button onClick={() => changeCategory("All")}>
                  All Categories
                </button>

                {categories.map(item => (
                  <button
                    key={item}
                    onClick={() => changeCategory(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="filter-circle-wrapper">
            <button
              className="filter-circle"
              onClick={() =>
                setOpenFilter(openFilter === "brand" ? "" : "brand")
              }
            >
              <i className="bi bi-tags"></i>
              <span>Brands</span>
            </button>

            {openFilter === "brand" && (
              <div className="filter-dropdown">
                <button
                  onClick={() => {
                    setSelectedBrand("All");
                    setOpenFilter("");
                  }}
                >
                  All Brands
                </button>

                {brands.map(item => (
                  <button
                    key={item}
                    onClick={() => {
                      setSelectedBrand(item);
                      setOpenFilter("");
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="filter-circle-wrapper">
            <button
              className="filter-circle"
              onClick={() =>
                setOpenFilter(openFilter === "price" ? "" : "price")
              }
            >
              <i className="bi bi-sort-down"></i>
              <span>Price</span>
            </button>

            {openFilter === "price" && (
              <div className="filter-dropdown">
                <button
                  onClick={() => {
                    setSortPrice("default");
                    setOpenFilter("");
                  }}
                >
                  Default
                </button>

                <button
                  onClick={() => {
                    setSortPrice("low");
                    setOpenFilter("");
                  }}
                >
                  Low to High
                </button>

                <button
                  onClick={() => {
                    setSortPrice("high");
                    setOpenFilter("");
                  }}
                >
                  High to Low
                </button>
              </div>
            )}
          </div>

        </div>

        <button className="clear-filters" onClick={clearFilters}>
          Clear filters
        </button>

      </div>

      <div className="results-line">
        <span>{displayedProducts.length} products</span>

        <span>
          Find something you'll love
          <i className="bi bi-heart"></i>
        </span>
      </div>

      {displayedProducts.length > 0 ? (
        <div className="product-grid">
          {displayedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h3>No products found</h3>
          <p>Try changing your filters to find products.</p>
        </div>
      )}

    </main>
  );
}
