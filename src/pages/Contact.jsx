import React from "react";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (name.trim() === "") {
      validationErrors.name = "Name is required";
    }

    if (email.trim() === "") {
      validationErrors.email = "Email is required";
    } else if (!email.includes("@")) {
      validationErrors.email = "Enter a valid email";
    }

    if (phone.trim() === "") {
      validationErrors.phone = "Phone is required";
    }

    if (message.trim() === "") {
      validationErrors.message = "Message is required";
    }

    if (Object.keys(validationErrors).length > 0) {

      setErrors(validationErrors);
      setSuccess("");
    } else {
      const formData = {
        name,
        email,
        phone,
        message
      };

      console.log(formData);

      setSuccess("Your message has been submitted successfully!");
      setErrors({});
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }
  };

  return (
    <main className="container page-container">
      <div className="page-heading">
        <span className="eyebrow"> WE'D LOVE TO HEAR FROM YOU</span>
        <h1> Say <em>hello.</em></h1>
        <p> Questions, feedback or just a little note — our inbox is open. </p>
      </div>

      <div className="contact-layout">
        <div className="contact-aside">
          <h2>Let's talk skincare.</h2>
          <p>Send us a message using the form. This is a frontend
            demonstration, so messages are not sent to a real inbox.
          </p>

          <div>
            <i className="bi bi-envelope"></i>
            hello@glowbeauty.example
          </div>

          <div>
            <i className="bi bi-clock"></i>
            Monday – Friday, 9am – 5pm
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="row g-3">

            <div className="col-md-6">
              <label className="form-label">Your name</label>
              <input
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
              {errors.name && (
                <small className="text-danger">
                  {errors.name}
                </small>
              )}
            </div>

            <div className="col-md-6">
              <label className="form-label"> Email address</label>
              <input
                className="form-control"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
              {errors.email && (
                <small className="text-danger">
                  {errors.email}
                </small>
              )}
            </div>

            <div className="col-12">
              <label className="form-label">Phone number</label>
              <input
                className="form-control"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Your phone number"
              />
              {errors.phone && (
                <small className="text-danger">
                  {errors.phone}
                </small>
              )}

            </div>

            <div className="col-12">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message..."
              ></textarea>
              {errors.message && (
                <small className="text-danger">
                  {errors.message}
                </small>
              )}
            </div>

            <div className="col-12">
              <button
                className="btn btn-dark rounded-pill"
                type="submit"> Send message
                <i className="bi bi-arrow-right"></i>
              </button>
              {success && (
                <span className="form-success">
                  <i className="bi bi-check-circle"></i>
                  {success}
                </span>
              )}
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
