// src/components/About.jsx
import React, { useEffect } from 'react';
import Typed from 'typed.js';
import '../../App.css';



const About = () => {
  useEffect(() => {
    const typedOptions = {
      strings: ["Languages", "Importance", "Functionality"],
      typeSpeed: 90,
      backSpeed: 90,
      backDelay: 90,
      loop: true,
    };

    const typed = new Typed("#text1", typedOptions);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="about">
      <div className="services" id="services">
        <div className="container">
          <h1 className="sub-title">
            About Web Development <br /> it's <span id="text1"></span>
          </h1>
          <div className="about-list">
            <div>
              <i className='bx bxl-html5' style={{ color: "#00eeff" }}></i>
              <h2>HTML</h2>
              <p>The role of HTML in web development is to provide the backbone and structure of a web page. It defines the layout and organization of content on a web page by using a ranked structure of elements. HTML tags allow developers to specify the type of content being displayed and how it should be presented.</p>
              <a href="https://www.linkedin.com/pulse/what-html-its-role-web-development-logicssphere#:~:text=The%20role%20of%20HTML%20in,how%20it%20should%20be%20presented." className="read">
                Read More
              </a>
            </div>
            <div>
              <i className='bx bxs-file-css' style={{ color: "#00eeff" }}></i>
              <h2>CSS</h2>
              <p>CSS stands for Cascading Style Sheets. It is a fundamental technology in web development that plays a significant part in shaping websites visual appearance and layout. CSS helps you style your content sheet online and make it look attractive and user-friendly.</p>
              <a href="https://pwskills.com/blog/importance-of-css/" className="read">Read More</a>
            </div>
            <div>
              <i className='bx bxl-javascript' style={{ color: "#00eeff" }}></i>
              <h2>JavaScript</h2>
              <p>JavaScript is a programming language used primarily by Web browsers to create a dynamic and interactive experience for the user. Most of the functions and applications that make the Internet indispensable to modern life are coded in some form of JavaScript.</p>
              <a href="https://www.bigcommerce.com/glossary/javascript/" className="read">Read More</a>
            </div>
          </div>

          <div className="about-list">
            <div>
              <i className='bx bx-code-alt' style={{ color: "#00eeff" }}></i>
              <h2>Full Stack Development</h2>
              <p>Full Stack Development involves both frontend and backend development. It allows developers to build complete applications by managing both the client and server sides. Mastery of full-stack development can make you versatile and valuable in the tech industry.</p>
              <a href="https://aws.amazon.com/what-is/full-stack-development/" className="read">Read More</a>
            </div>
            <div>
              <i className='bx bx-mobile-alt' style={{ color: "#00eeff" }}></i>
              <h2>Mobile-First Design</h2>
              <p> Mobile-First Design is an approach that prioritizes designing for smaller screens first before scaling up for desktops. Its essential in a world where mobile users outnumber desktop users, ensuring accessibility and responsiveness across devices.</p>
              <a href="https://www.browserstack.com/guide/how-to-implement-mobile-first-design" className="read">Read More</a>
            </div>
            <div>
              <i className='bx bxl-react' style={{ color: "#00eeff" }}></i>
              <h2>Modern JS Frameworks</h2>
              <p> Modern JavaScript frameworks like React, Angular, and Vue have revolutionized how web applications are built. They simplify the development process and enhance performance, making it easier to build dynamic user interfaces.</p>
              <a href="https://8seneca.com/blog/javascript-frameworks-for-web-development" className="read">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
