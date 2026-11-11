import React from "react";
import SectionTitle from "../components/SectionTitle";

export default function About() {
  return (
    <main className="container page-container">

      <div className="about-hero">
        <div>
          <span className="eyebrow">
            A LITTLE ABOUT GLOW
          </span>
          <h1>Beauty in the <em>everyday.</em></h1>
          <p>We believe skincare doesn't need to be complicated.
            It can be a quiet moment, a familiar favorite, and
            a small way to show yourself some care.</p>
        </div>

        <img src="https://influx-site-assets.s3.us-west-2.amazonaws.com/riserejuvenationcenter.com/blog/the-crucial-link-between-skincare-and-medical-aesthetics-blog-featured-images-1024x683.jpg"
          alt="Skincare products" />
      </div>

      <section className="about-values">
        <SectionTitle eyebrow="OUR POINT OF VIEW"
          title="Less pressure. More care." centered />

        <div className="value-grid">
          <div>
            <i className="bi bi-flower1"></i>
            <h3>Thoughtful picks</h3>
            <p> A considered collection of everyday skincare essentials.</p>
          </div>

          <div>
            <i className="bi bi-heart"></i>
            <h3>Your own routine</h3>
            <p> Explore at your pace and choose what feels right for you. </p>
          </div>

          <div>
            <i className="bi bi-stars"></i>
            <h3>Everyday glow</h3>
            <p> Small rituals can make ordinary moments feel special.</p>
          </div>

        </div>
      </section>
    </main>
  );
}
