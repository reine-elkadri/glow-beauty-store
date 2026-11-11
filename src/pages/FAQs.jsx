import { Link } from "react-router-dom";
import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle";

const questions = [
  {
    question: "How do I choose the right skincare products?",
    answer: "You can browse our products by category or skin concern, such as dryness, blemishes, sensitivity, and dullness, to find products that suit your needs."
  },
  {
    question: "Which skincare brands are available at Glow?",
    answer: "Glow features products from brands such as CeraVe, The Ordinary, La Roche-Posay, COSRX, and Glow Recipe."
  },
  {
    question: "How can I save my favorite products?",
    answer: "Click the heart icon on any product to add it to your Favorites page. You can return to your saved products whenever you want."
  },
  {
    question: "How do I add products to my shopping bag?",
    answer: "Click the Add to Bag button on a product. You can then visit your shopping bag to update quantities or remove products."
  },
  {
    question: "Do you offer free shipping?",
    answer: "Yes! Shipping is free on orders over $50. A $5 shipping fee applies to orders below $50."
  },
  {
    question: "Can I change or cancel my order?",
    answer: "For assistance with an order, please contact our team through the Contact page."
  },
  {
    question: "How can I contact Glow?",
    answer: "You can visit our Contact page and fill out the contact form. We will be happy to help with your questions."
  }
];

export default function FAQs() {
  const [openQuestion, setOpenQuestion] = useState(0);

  const toggleQuestion = (index) => {
    if (openQuestion === index) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(index);
    }
  };

  return (
    <main className="container page-container">
      <div className="page-heading">
        <span className="eyebrow">HERE TO HELP</span>
        <h1>Frequently asked <em>questions.</em></h1>
        <p>Find answers to common questions about shopping at Glow.</p>
      </div>

      <section className="faq-section">
        <SectionTitle
          eyebrow="NEED TO KNOW"
          title="How can we help?"
          subtitle="Here are some answers to questions you may have."
          centered
        />

        <div className="faq-list">
          {questions.map((item, index) => (
            <div className="faq-item" key={index}>
              <button
                className={`faq-question ${openQuestion === index ? "active" : ""}`}
                onClick={() => toggleQuestion(index)}
              >
                <span>{item.question}</span>
                <i className={`bi ${openQuestion === index ? "bi-dash" : "bi-plus"}`}></i>
              </button>

              {openQuestion === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="faq-cta">
        <h2>Still have a <em>question?</em></h2>
        <p>We're happy to help you with anything you need.</p>
        <a href="/contact" className="btn btn-dark rounded-pill">
          Contact us <i className="bi bi-arrow-right"></i>
        </a>
      </section>
    </main>
  );
}
