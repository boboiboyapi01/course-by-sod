// App.js
import React from 'react';
import './App.css'; // Assuming you'll create this CSS file

function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <h1>Master Skills Through Real Projects</h1>
        <p>Build portfolio-worthy projects in web dev, data science, design, and more. Hands-on learning that sticks.</p>
        <a href="#enroll" className="cta-button">Enroll Now</a>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Our Project-Based Courses?</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <h3>Real-World Projects</h3>
            <p>From beginner to advanced, tackle challenges that mimic job scenarios.</p>
          </div>
          <div className="feature-item">
            <h3>Expert Guidance</h3>
            <p>Step-by-step tutorials with feedback loops to accelerate your progress.</p>
          </div>
          <div className="feature-item">
            <h3>Flexible Pace</h3>
            <p>Learn anytime, anywhere—lifetime access to all materials.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Learners Say</h2>
        <div className="testimonial-item">
          <p>"This course transformed my resume with actual projects I could showcase!"</p>
          <cite>- Alex, Web Developer</cite>
        </div>
        <div className="testimonial-item">
          <p>"The hands-on approach made complex topics click instantly."</p>
          <cite>- Jordan, Data Analyst</cite>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="footer">
        <h2>Ready to Start Building?</h2>
        <a href="#enroll" className="cta-button">Get Started Today</a>
        <p>&copy; 2025 Project-Based Courses. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;