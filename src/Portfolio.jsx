import React from "react";
import "./Portfolio.css";
import profilePic from "./images/profile.jpg";

export default function Portfolio() {

  const [showHardware, setShowHardware] = React.useState(false);
  const [showSoftware, setShowSoftware] = React.useState(false);
  const [showCert, setShowCert] = React.useState(false);

  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">My Portfolio</h2>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#personal">Personal Info</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HOME SECTION */}
      <section id="home" className="section home-section">
        <div className="home-content">
          <h1>Hello, I'm <span className="name-highlight">SRINIVASAN</span></h1>
          <p className="subtitle">
            Full Stack Developer | Electronics Enthusiast | AI Explorer
          </p>

          <a 
            href="/Srinivasan_Resume.pdf" 
            download="Srinivasan_Resume.pdf"
            className="btn"
          >
            Download Resume
          </a>
        </div>

        <div className="home-image">
          <img src={profilePic} alt="Profile" />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          Hi, I’m Srinivasan, an Electronics and Instrumentation Engineering student at Kongu Engineering College.
          I’m passionate about innovation, automation, and intelligent systems. I love working on embedded 
          electronics, IoT solutions, and sensor-based automation, while also exploring software development, 
          AI applications, and full-stack web development.

          I have hands-on experience building hardware prototypes, integrating sensors and microcontrollers, and 
          creating user-friendly software interfaces. My goal is to become a versatile engineer contributing to 
          embedded systems, industrial automation, and modern technology-driven innovations.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="skills-container">

          <div className="skills-box">
            <h3>Technical Skills</h3>
            <div className="skill-items">
              <span className="skill-card">Sensors & Transducers</span>
              <span className="skill-card">Industrial Instrumentation</span>
              <span className="skill-card">MongoDB</span>
              <span className="skill-card">JavaScript</span>
              <span className="skill-card">Node.js & MongoDB</span>
            </div>
          </div>

          <div className="skills-box">
            <h3>Soft Skills</h3>
            <div className="skill-items">
              <span className="skill-card">Leadership</span>
              <span className="skill-card">Team Collaboration</span>
              <span className="skill-card">Problem Solving</span>
              <span className="skill-card">Communication</span>
              <span className="skill-card">Adaptability</span>
            </div>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="project-container">

          <div className="project-box">
            <h3 className="project-title" onClick={() => setShowHardware(!showHardware)}>
              Hardware Projects ▾
            </h3>

            {showHardware && (
              <ul className="project-list">
                <li>Portable Mosquito Repellent</li>
                <li>Rizer Remover Extraction</li>
                <li>Well Cap for Auto Fills</li>
              </ul>
            )}
          </div>

          <div className="project-box">
            <h3 className="project-title" onClick={() => setShowSoftware(!showSoftware)}>
              Software Projects ▾
            </h3>

            {showSoftware && (
              <ul className="project-list">
                <li>AI-based Bug Tracker with automated log analysis</li>
              </ul>
            )}
          </div>

        </div>
      </section>

      <section id="certifications" className="cert-section">
  <h2 className="cert-heading">🎓 Certifications, Achievements & Paper Presentation</h2>

  <div className="cert-achieve-container">

    {/* Certifications */}
    <div className="cert-card">
      <h3 className="cert-title">📜 Certifications</h3>
      <ul>
        <li>Electronic Circuit And Analog Layout Design – International Courses</li>
        <li>Matlab Course Completed</li>
        <li>Full Stack Development Bootcamp</li>
        <li>Embedded Systems Workshop</li>
      </ul>
    </div>

    {/* Achievements */}
    <div className="cert-card">
      <h3 className="cert-title">🏆 Achievements</h3>
      <ul>
        <li>Won 3rd Prize in  Project – MIT College</li>
        <li>Won 1st Prize in Project – SSN College</li>
        <li>Won 3rd Prize in Project – KEC College</li>
      </ul>
    </div>

    {/* Paper Presentation */}
    <div className="cert-card">
      <h3 className="cert-title">📝 Paper Presentation</h3>
      <ul>
        <li>Plastic To Power – KPR College</li>
        <li>Rizer Remover Extraction – SSN College</li>
        <li>Transform Of Baggase Into Bag– SSN College</li>
      </ul>
    </div>

  </div>
</section>

      {/* PERSONAL INFO */}
      <section id="personal" className="section">
        <h2>Personal Information</h2>
        <p>📌 Name: Srinivasan</p>
        <p>📌 Phone Number: 7550332068</p>
        <p>📌 Email: srinisrini9867@gmail.com</p>
        <p>📌 Location: Erode, Tamil Nadu, India</p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <h2>Contact Me</h2>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}
