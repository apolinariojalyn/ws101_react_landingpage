// src/components/Hero.jsx
import React, { useEffect } from 'react';
import Typed from 'typed.js';
import '../../App.css';



const Hero = () => {
  useEffect(() => {
    const typedOptions = {
      strings: ["HTML", "CSS", "JavaScript"],
      typeSpeed: 90,
      backSpeed: 90,
      backDelay: 90,
      loop: true,
    };

    const typed = new Typed("#text", typedOptions);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="container">
        <h1>
          <a href="https://reliasoftware.com/blog/why-is-web-development-so-important">
            Importance of Web Development
          </a>
        </h1>
        <h2>
          The Core of the Modern Web <span id="text"></span>
        </h2>
        <p>Learn more about web development</p>
        <a href="#about" className="btn">Learn More</a>
      </div>
    </section>
  );
};

export default Hero;
