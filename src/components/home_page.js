
import React, { useState } from 'react';
import './home_page.css';

const HomePage = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  return (
  
    
   <div className="HomePage">
      <header className="Header">
      <div className="logo">Future Mobility</div>
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? '✖' : '☰'}
      </div>
      <nav className={menuOpen ? 'nav-open' : ''}>
        <a href="#home" onClick={toggleMenu}>Home</a>
        <a href="#about" onClick={toggleMenu}>About</a>
        <a href="#services" onClick={toggleMenu}>Services</a>
        <a href="#contact" onClick={toggleMenu}>Contact</a>
        <div className="user-box">
          <a href="#user" onClick={toggleMenu}>User Login</a>
          <a href="#signup-user" className="signup" onClick={toggleMenu}>Sign Up</a>
        </div>
        <div className="driver-box">
          <a href="#driver" onClick={toggleMenu}>Driver Login</a>
          <a href="#signup-driver" className="signup" onClick={toggleMenu}>Sign Up</a>
        </div>
      </nav>
    </header>

      <section className="Hero" id="home">
        <h1>Connecting You with Reliable Truck Drivers</h1>
        <p>Send your parcel anywhere, anytime</p>
        <button>Get Started</button>
      </section>

      <section className="About" id="about">
        <h2>About Us</h2>
        <p>We connect users with reliable truck drivers for efficient and secure parcel delivery. Our mission is to provide a seamless and trustworthy service for all your delivery needs.</p>
      </section>

      <section className="Services" id="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="card">
            <h3>Parcel Delivery</h3>
            <p>Fast and secure parcel delivery service across various locations.</p>
          </div>
          <div className="card">
            <h3>Real-Time Tracking</h3>
            <p>Track your parcel in real-time from pickup to delivery.</p>
          </div>
          <div className="card">
            <h3>Insurance</h3>
            <p>Comprehensive insurance coverage for your parcels.</p>
          </div>
        </div>
      </section>

      <section className="HowItWorks" id="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Post a Request</h3>
            <p>Submit a delivery request with all necessary details.</p>
          </div>
          <div className="step">
            <h3>2. Driver Acceptance</h3>
            <p>Truck drivers can view and accept the delivery request.</p>
          </div>
          <div className="step">
            <h3>3. Parcel Pickup</h3>
            <p>The driver picks up the parcel from the specified location.</p>
          </div>
          <div className="step">
            <h3>4. Delivery</h3>
            <p>The driver delivers the parcel to the destination.</p>
          </div>
        </div>
      </section>

      <section className="UserSection" id="user">
        <h2>For Users</h2>
        <p>Discover the benefits and features available for our users. Enjoy reliable, fast, and secure parcel delivery services with real-time tracking and comprehensive insurance coverage.</p>
      </section>

      <section className="TruckDriverSection" id="driver">
        <h2>For Truck Drivers</h2>
        <p>Join our network of trusted truck drivers. Get delivery requests directly on your app, manage your schedule, and earn more by delivering parcels efficiently.</p>
      </section>

      <section className="Contact" id="contact">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        <div className="contact-info">
          <p>Email: support@futuremobility.com</p>
          <p>Phone: +123-456-7890</p>
        </div>
      </section>

      <footer className="Footer">
        <p>Follow Us:</p>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <p>&copy; 2024 Future Mobility. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
