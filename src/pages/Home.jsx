import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { categories } from "../data/products";

const categoryImages = {
  Cleansers: "https://images.unsplash.com/photo-1745565610492-b70156cec381?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  Moisturizers: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=85",
  Serums: "https://images.unsplash.com/photo-1643747394944-89b11e7fb616?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  Sunscreens: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqa29TYsx2wJIvPz8u7E3o7lY6vrMr-tKCKxYTho4U-A&s=10",
  Toners: "https://blog.caretobeauty.com/wp-content/uploads/2025/04/best-milky-toners-essences-2026.jpg",
  Masks: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=85"
};

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              YOUR SKIN, YOUR KIND OF GLOW
            </span>

            <h1> Make time for<br /><em>yourself.</em></h1>

            <p>Discover feel-good skincare essentials selected to make your
              everyday routine a little more special.</p>

            <Link to="/shop" className="btn btn-dark rounded-pill hero-cta">
              Explore the collection
              <i className="bi bi-arrow-up-right"></i>
            </Link>
          </div>

          <div className="hero-visual">
            <img
              src="https://i.pinimg.com/736x/3c/fd/79/3cfd79be94504ed852e0ae298976947b.jpg"
              alt="Skincare products"
            />

            <div className="hero-sticker">
              <span>THE DAILY</span>
              <strong>glow<br />routine</strong>
              <i className="bi bi-stars"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block container">
        <SectionTitle
          eyebrow="FIND YOUR FAVORITES"
          title="Shop by category"
          subtitle="Explore the essentials for your everyday skincare routine." />

        <div className="category-grid">
          {categories.map((category) => (
            <Link to={`/shop/${category}`} className="category-card" key={category} >
              <img src={categoryImages[category]} alt={`${category} skincare`} className="category-image" />
              <div className="category-card-content">
                <h3>{category}</h3>
                <span> Explore <i className="bi bi-arrow-up-right"></i></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="brand-band">
        <div className="container">
          <SectionTitle
            eyebrow="GOOD COMPANY"
            title="Brands we love"
            centered
          />

          <div className="brand-list">
            <span className="brand-word">CeraVe</span>
            <span className="brand-word">The Ordinary</span>
            <span className="brand-word">La Roche-Posay</span>
            <span className="brand-word">COSRX</span>
            <span className="brand-word">Glow Recipe</span>
          </div>
        </div>
      </section>
    </>
  );
}