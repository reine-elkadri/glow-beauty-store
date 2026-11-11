import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert("This is a demo login. Authentication is not connected yet.");
  };

  return (
    <main className="container page-container">
      <section className="login-section">
        <div className="login-card">
          <span className="eyebrow">WELCOME BACK</span>

          <h1>Login to your <em>account.</em></h1>

          <p className="login-description">
            Sign in to continue exploring your favorite skincare essentials.
          </p>

          <form onSubmit={handleLogin}>
            <div className="login-form-group">
              <label>Email address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="login-form-group">
              <label>Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="login-options">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <span>Forgot password?</span>
            </div>

            <button type="submit" className="login-button">
              Login <i className="bi bi-arrow-right"></i>
            </button>
          </form>

          <p className="login-bottom">
            Don't have an account? <span>Sign up</span>
          </p>

          <Link to="/shop" className="back-to-shop">
            Continue shopping
          </Link>
        </div>
      </section>
    </main>
  );
}
