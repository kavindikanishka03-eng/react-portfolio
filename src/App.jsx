import React, { useState, useEffect } from 'react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            scroll-behavior: smooth;
        }

        html, body {
            width: 100%;
            max-width: 100%;
            overflow-x: hidden;
            background-color: #0b0f17;
            color: #ffffff;
        }

        .dots-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            z-index: 1;
            overflow: hidden;
        }

        .dot {
            position: absolute;
            bottom: -20px;
            width: 6px;
            height: 6px;
            background-color: #00bcd4;
            border-radius: 50%;
            box-shadow: 0 0 10px #00bcd4, 0 0 20px #00bcd4;
            animation: floatUp 8s infinite linear;
            opacity: 0;
        }

        .dot:nth-child(1) { left: 8%; animation-duration: 7s; animation-delay: 0s; width: 4px; height: 4px; }
        .dot:nth-child(2) { left: 22%; animation-duration: 9s; animation-delay: 2s; width: 6px; height: 6px; }
        .dot:nth-child(3) { left: 38%; animation-duration: 6s; animation-delay: 1s; width: 3px; height: 3px; }
        .dot:nth-child(4) { left: 55%; animation-duration: 10s; animation-delay: 3s; width: 7px; height: 7px; }
        .dot:nth-child(5) { left: 72%; animation-duration: 8s; animation-delay: 1.5s; width: 5px; height: 5px; }
        .dot:nth-child(6) { left: 88%; animation-duration: 11s; animation-delay: 4s; width: 4px; height: 4px; }
        .dot:nth-child(7) { left: 15%; animation-duration: 8.5s; animation-delay: 2.5s; width: 5px; height: 5px; }
        .dot:nth-child(8) { left: 45%; animation-duration: 9.5s; animation-delay: 0.5s; width: 4px; height: 4px; }
        .dot:nth-child(9) { left: 80%; animation-duration: 7.5s; animation-delay: 3.5s; width: 6px; height: 6px; }

        @keyframes floatUp {
            0% { transform: translateY(0); opacity: 0; }
            20% { opacity: 0.8; }
            80% { opacity: 0.8; }
            100% { transform: translateY(-105vh); opacity: 0; }
        }

        section {
            padding: 90px 5%;
            position: relative;
            z-index: 2;
            max-width: 1200px;
            margin: 0 auto;
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 5%;
            background: rgba(11, 15, 23, 0.95);
            position: fixed;
            width: 100%;
            top: 0;
            left: 0;
            z-index: 1000;
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(0, 210, 255, 0.2);
        }

        .logo {
            font-size: 20px;
            font-weight: 800;
            color: #00d2ff;
            letter-spacing: 2px;
            text-transform: uppercase;
        }

        .nav-links {
            display: flex;
            list-style: none;
            gap: 22px;
            align-items: center;
        }

        .nav-links a {
            color: #cbd5e1;
            text-decoration: none;
            font-size: 15px;
            font-weight: 600;
            transition: 0.3s;
        }

        .nav-links a:hover, .nav-links a.active {
            color: #00d2ff;
        }

        .contact-btn {
            border: 2px solid #00d2ff;
            padding: 7px 18px;
            border-radius: 20px;
            color: #00d2ff !important;
            font-weight: 700 !important;
        }

        .hero {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding-top: 120px;
        }

        .hero h1 {
            font-size: 52px;
            color: #00d2ff;
            margin-bottom: 12px;
            font-weight: 800;
        }

        .hero h2 {
            font-size: 22px;
            color: #ffffff;
            font-weight: 600;
            margin-bottom: 25px;
        }

        .hero p {
            max-width: 800px;
            color: #cbd5e1;
            line-height: 1.8;
            margin-bottom: 35px;
            font-size: 17px;
            font-weight: 500;
        }

        .btn-group {
            display: flex;
            gap: 20px;
        }

        .btn-primary {
            background: #00d2ff;
            color: #0b0f17;
            padding: 13px 30px;
            border-radius: 30px;
            text-decoration: none;
            font-weight: 700;
            font-size: 16px;
            box-shadow: 0 0 15px rgba(0, 210, 255, 0.4);
            transition: 0.3s;
        }

        .btn-secondary {
            border: 2px solid #00d2ff;
            color: #00d2ff;
            padding: 13px 30px;
            border-radius: 30px;
            text-decoration: none;
            font-weight: 700;
            font-size: 16px;
            transition: 0.3s;
        }

        .btn-primary:hover, .btn-secondary:hover {
            transform: translateY(-3px);
            box-shadow: 0 0 25px rgba(0, 210, 255, 0.6);
        }

        .section-title {
            text-align: center;
            font-size: 36px;
            color: #00d2ff;
            margin-bottom: 45px;
            font-weight: 800;
        }

        .about-wrapper {
            display: grid;
            grid-template-columns: 320px 1fr;
            gap: 40px;
            align-items: start;
        }

        @media (max-width: 950px) {
            .about-wrapper {
                grid-template-columns: 1fr;
            }
        }

        .profile-card {
            background: #131924;
            border: 1px solid #1e293b;
            border-radius: 18px;
            padding: 30px 20px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .profile-img-box {
            position: relative;
            width: 190px;
            height: 190px;
            margin: 0 auto 20px auto;
            border-radius: 50%;
            padding: 6px;
            background: linear-gradient(135deg, #00d2ff, #00bcd4);
            box-shadow: 0 0 25px rgba(0, 210, 255, 0.5);
        }

        .profile-img-box img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
            display: block;
        }

        .profile-card h3 {
            font-size: 18px;
            color: #ffffff;
            font-weight: 700;
            margin-bottom: 8px;
        }

        .profile-card p {
            font-size: 14px;
            color: #94a3b8;
            font-weight: 500;
        }

        .about-content {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .about-paragraph {
            color: #e2e8f0;
            font-size: 17px;
            line-height: 1.8;
            font-weight: 500;
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-top: 15px;
        }

        @media (max-width: 600px) {
            .stats-grid {
                grid-template-columns: 1fr;
            }
        }

        .stat-card {
            background: #131924;
            border: 1px solid #1e293b;
            padding: 22px 15px;
            border-radius: 12px;
            text-align: center;
            transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .stat-card:hover {
            transform: translateY(-5px);
            border-color: #00d2ff;
        }

        .stat-card h4 {
            font-size: 28px;
            color: #00d2ff;
            font-weight: 800;
            margin-bottom: 5px;
        }

        .stat-card p {
            font-size: 14px;
            color: #cbd5e1;
            font-weight: 600;
        }

        .timeline-container {
            position: relative;
            max-width: 900px;
            margin: 0 auto;
            padding-left: 40px;
        }

        .timeline-container::before {
            content: '';
            position: absolute;
            top: 15px;
            bottom: 15px;
            left: 15px;
            width: 3px;
            background: #00d2ff;
            box-shadow: 0 0 10px #00d2ff;
        }

        .timeline-item {
            position: relative;
            margin-bottom: 35px;
        }

        .timeline-item:last-child {
            margin-bottom: 0;
        }

        .timeline-dot {
            position: absolute;
            left: -32px;
            top: 20px;
            width: 18px;
            height: 18px;
            background-color: #0b0f17;
            border: 3px solid #00d2ff;
            border-radius: 50%;
            box-shadow: 0 0 12px #00d2ff;
            z-index: 2;
        }

        .edu-card {
            background: #131924;
            padding: 28px 32px;
            border-radius: 14px;
            border: 1px solid #1e293b;
            transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .edu-card:hover {
            transform: translateY(-3px);
            border-color: #00d2ff;
        }

        .edu-card h3 {
            color: #00d2ff;
            font-size: 22px;
            font-weight: 700;
            margin-bottom: 6px;
        }

        .edu-card .sub {
            color: #ffffff;
            font-size: 15px;
            font-weight: 600;
            margin-bottom: 14px;
        }

        .edu-card p {
            color: #cbd5e1;
            font-size: 15px;
            line-height: 1.6;
            font-weight: 500;
        }

        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 25px;
        }

        .skill-card {
            background: #131924;
            padding: 28px;
            border-radius: 12px;
            border: 1px solid #1e293b;
        }

        .skill-card h3 {
            color: #00d2ff;
            margin-bottom: 18px;
            font-size: 20px;
            font-weight: 700;
        }

        .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .tag {
            background: rgba(0, 210, 255, 0.12);
            color: #00d2ff;
            padding: 6px 14px;
            border-radius: 15px;
            font-size: 13px;
            font-weight: 600;
            border: 1px solid rgba(0, 210, 255, 0.3);
        }

        .projects-grid {
            display: flex;
            flex-direction: column;
            gap: 35px;
        }

        .project-card {
            background: #131924;
            border-radius: 14px;
            border: 1px solid #1e293b;
            padding: 30px;
            transition: 0.3s;
        }

        .project-card:hover {
            border-color: #00d2ff;
            box-shadow: 0 0 20px rgba(0, 210, 255, 0.15);
        }

        .project-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            flex-wrap: wrap;
            gap: 10px;
        }

        .project-title {
            color: #00d2ff;
            font-size: 24px;
            font-weight: 700;
        }

        .project-type {
            background: #1e293b;
            color: #cbd5e1;
            padding: 5px 14px;
            border-radius: 12px;
            font-size: 13px;
            font-weight: 600;
        }

        .project-banner-grid {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 25px;
            align-items: center;
            margin-bottom: 25px;
        }

        @media (max-width: 900px) {
            .project-banner-grid {
                grid-template-columns: 1fr;
            }
        }

        .project-img-wrapper {
            background: #0b0f17;
            border-radius: 10px;
            border: 1px solid #1e293b;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
            transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .project-img-wrapper:hover {
            transform: scale(1.02);
            border-color: #00d2ff;
        }

        .project-img-wrapper img {
            width: 100%;
            height: auto;
            max-height: 220px;
            object-fit: cover;
            display: block;
        }

        .project-desc {
            color: #cbd5e1;
            line-height: 1.7;
            font-size: 16px;
            font-weight: 500;
        }

        .project-details {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            margin-bottom: 20px;
        }

        .detail-box {
            background: #0b0f17;
            padding: 18px;
            border-radius: 8px;
            border: 1px solid #1e293b;
        }

        .detail-box h5 {
            color: #00d2ff;
            margin-bottom: 8px;
            font-size: 15px;
            font-weight: 700;
        }

        .detail-box p, .detail-box ul {
            color: #cbd5e1;
            font-size: 14px;
            line-height: 1.6;
            font-weight: 500;
            list-style-position: inside;
        }

        .project-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 15px;
            padding-top: 15px;
            border-top: 1px solid #1e293b;
        }

        .project-link {
            color: #00d2ff;
            text-decoration: none;
            font-weight: 700;
            font-size: 15px;
            transition: 0.2s;
        }

        .project-link:hover {
            text-decoration: underline;
        }

        .cert-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 25px;
        }

        .cert-card {
            background: #131924;
            padding: 25px;
            border-radius: 12px;
            border: 1px solid #1e293b;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            transition: 0.3s;
        }

        .cert-card:hover {
            border-color: #00d2ff;
            transform: translateY(-3px);
        }

        .cert-card h3 {
            color: #00d2ff;
            font-size: 19px;
            font-weight: 700;
            margin-bottom: 5px;
        }

        .cert-card .issuer {
            color: #ffffff;
            font-size: 15px;
            font-weight: 600;
            margin-bottom: 15px;
        }

        /* Contact Section Styling */
        .contact-container {
            display: flex;
            gap: 25px;
            flex-wrap: wrap;
        }

        .contact-card {
            flex: 1;
            min-width: 300px;
            background: #131924;
            padding: 35px;
            border-radius: 14px;
            border: 1px solid #1e293b;
        }

        .contact-card h2 {
            color: #00d2ff;
            font-size: 24px;
            font-weight: 800;
            margin-bottom: 15px;
        }

        .contact-card p.desc {
            color: #cbd5e1;
            font-size: 15px;
            font-weight: 500;
            margin-bottom: 25px;
            line-height: 1.6;
        }

        .info-box {
            display: flex;
            align-items: center;
            gap: 15px;
            background-color: #0b0f17;
            padding: 15px 20px;
            border-radius: 10px;
            text-decoration: none;
            color: inherit;
            margin-bottom: 15px;
            border: 1px solid #1e293b;
            transition: 0.2s;
        }

        .info-box:hover {
            border-color: #00d2ff;
        }

        .icon-circle {
            background-color: #00d2ff;
            color: #0b0f17;
            width: 42px;
            height: 42px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 18px;
            flex-shrink: 0;
        }

        .info-label {
            font-weight: 700;
            font-size: 15px;
            display: block;
            color: #ffffff;
        }

        .info-val {
            color: #cbd5e1;
            font-size: 14px;
            font-weight: 500;
        }

        .contact-form input, .contact-form textarea {
            width: 100%;
            background-color: #0b0f17;
            border: 1px solid #1e293b;
            border-radius: 8px;
            padding: 14px;
            color: #fff;
            margin-bottom: 15px;
            outline: none;
            font-size: 15px;
        }

        .contact-form input:focus, .contact-form textarea:focus {
            border-color: #00d2ff;
        }

        .submit-btn {
            width: 100%;
            background-color: #00d2ff;
            color: #0b0f17;
            border: none;
            padding: 14px;
            border-radius: 25px;
            font-weight: 800;
            font-size: 16px;
            cursor: pointer;
            transition: 0.3s;
            box-shadow: 0 0 10px rgba(0, 210, 255, 0.3);
        }

        .submit-btn:hover {
            box-shadow: 0 0 20px rgba(0, 210, 255, 0.6);
        }

        /* Social Icons Section (LinkedIn, GitHub, Email icons) */
        .social-links {
            display: flex;
            justify-content: center;
            gap: 18px;
            margin-top: 40px;
            position: relative;
            z-index: 2;
        }

        .social-icon {
            width: 48px;
            height: 48px;
            background-color: #00d2ff;
            color: #0b0f17;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .social-icon svg {
            width: 22px;
            height: 22px;
            fill: currentColor;
        }

        .social-icon:hover {
            transform: translateY(-4px);
            box-shadow: 0 0 15px rgba(0, 210, 255, 0.6);
        }

        footer {
            text-align: center;
            padding: 30px;
            color: #94a3b8;
            font-size: 14px;
            font-weight: 600;
            border-top: 1px solid #131924;
            position: relative;
            z-index: 2;
        }
      `}</style>

      {/* Background Floating Dots */}
      <div className="dots-container">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>

      {/* Navigation */}
      <nav>
        <div className="logo">Kavindi Sandaruwani</div>
        <ul className="nav-links">
          <li><a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
          <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a></li>
          <li><a href="#education" className={activeSection === 'education' ? 'active' : ''}>Education</a></li>
          <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>BA Skills</a></li>
          <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
          <li><a href="#certifications" className={activeSection === 'certifications' ? 'active' : ''}>Certifications</a></li>
          <li><a href="#contact" className={`contact-btn ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <h1>Kavindi Sandaruwani</h1>
        <h2>Aspiring Business Analyst | ICT Undergraduate | Problem Solver</h2>
        <p>
          I am an ICT undergraduate at the University of Colombo with a strong passion for Business Analysis, Data Analytics, Software Development, and Technology-driven solutions. I bridge the gap between business needs and technical systems.
        </p>
        <div className="btn-group">
          <a href="#projects" className="btn-primary">View Featured Projects</a>
          <a href="#contact" className="btn-secondary">Let's Connect</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <h2 className="section-title">About Me</h2>
        <div className="about-wrapper">
          <div className="profile-card">
            <div className="profile-img-box">
              <img src="/images/profile.jpg" alt="Kavindi Sandaruwani" />
            </div>
            <h3>Kavindi Sandaruwani</h3>
            <p>ICT Undergraduate</p>
          </div>
          <div className="about-content">
            <p className="about-paragraph">
              Hello! I'm Kavindi Sandaruwani, an enthusiastic ICT undergraduate at the University of Colombo. My academic journey has equipped me with a solid foundation in software engineering principles, system analysis, and data-driven decision making.
            </p>
            <p className="about-paragraph">
              I specialize in transforming complex business requirements into clear functional specifications, wireframes, and scalable technical solutions. Whether it's analyzing user workflows, managing databases, or developing software systems, I love solving problems that make an impact.
            </p>
            <div className="stats-grid">
              <div className="stat-card">
                <h4>03+</h4>
                <p>Years of Study</p>
              </div>
              <div className="stat-card">
                <h4>05+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat-card">
                <h4>100%</h4>
                <p>Dedication</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education">
        <h2 className="section-title">Education</h2>
        <div className="timeline-container">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="edu-card">
              <h3>University of Colombo</h3>
              <div className="sub">Bachelor of Information and Communication Technology (BICT)</div>
              <p>Currently pursuing my undergraduate degree focusing on software development, database management, systems analysis, and modern web architectures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BA & Technical Skills Section */}
      <section id="skills">
        <h2 className="section-title">Core Skills & Expertise</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Business Analysis</h3>
            <div className="tags">
              <span className="tag">Requirement Gathering</span>
              <span className="tag">Process Modeling</span>
              <span className="tag">Use Case Diagrams</span>
              <span className="tag">SWOT Analysis</span>
              <span className="tag">Agile Methodologies</span>
              <span className="tag">Stakeholder Management</span>
            </div>
          </div>
          <div className="skill-card">
            <h3>Technical Skills</h3>
            <div className="tags">
              <span className="tag">JavaScript (React)</span>
              <span className="tag">HTML / CSS</span>
              <span className="tag">SQL / MySQL</span>
              <span className="tag">Python</span>
              <span className="tag">Git & GitHub</span>
              <span className="tag">UI/UX Wireframing</span>
            </div>
          </div>
          <div className="skill-card">
            <h3>Tools & Platforms</h3>
            <div className="tags">
              <span className="tag">Figma</span>
              <span className="tag">Visual Studio Code</span>
              <span className="tag">Jira</span>
              <span className="tag">Trello</span>
              <span className="tag">MS Excel / Power BI</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          
          {/* Project 1 */}
          <div className="project-card">
            <div className="project-header">
              <h3 className="project-title">SmartMart POS System</h3>
              <span className="project-type">Full-Stack Application</span>
            </div>
            <div className="project-banner-grid">
              <div className="project-img-wrapper">
                <img src="/images/smartmart-pos.jpg" alt="SmartMart POS" />
              </div>
              <div className="project-desc">
                A comprehensive Point of Sale system designed to streamline retail store operations, inventory tracking, cashier billing, and sales reporting with secure user roles.
              </div>
            </div>
            <div className="project-details">
              <div className="detail-box">
                <h5>Key Features</h5>
                <ul>
                  <li>Real-time inventory stock updates</li>
                  <li>Barcode scanning & rapid checkout</li>
                  <li>Daily & monthly sales analytics reports</li>
                </ul>
              </div>
              <div className="detail-box">
                <h5>Technologies Used</h5>
                <p>React, Node.js, Express, MySQL, Tailwind CSS</p>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-header">
              <h3 className="project-title">AcademiCore Portal</h3>
              <span className="project-type">Web Application</span>
            </div>
            <div className="project-banner-grid">
              <div className="project-img-wrapper">
                <img src="/images/academicore-login.jpg" alt="AcademiCore Portal" />
              </div>
              <div className="project-desc">
                An academic management platform created to bridge communication between lecturers and students, handling assignment submissions, grading, and course modules.
              </div>
            </div>
            <div className="project-details">
              <div className="detail-box">
                <h5>Key Features</h5>
                <ul>
                  <li>Role-based access (Admin, Lecturer, Student)</li>
                  <li>Assignment upload and deadline trackers</li>
                  <li>Announcement broadcasting board</li>
                </ul>
              </div>
              <div className="detail-box">
                <h5>Technologies Used</h5>
                <p>React, JavaScript, PHP, MySQL</p>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <div className="project-header">
              <h3 className="project-title">HR Analytics Dashboard</h3>
              <span className="project-type">Data Analytics Project</span>
            </div>
            <div className="project-banner-grid">
              <div className="project-img-wrapper">
                <img src="/images/HR-Analytics-Dashboard.jpg" alt="HR Analytics Dashboard" />
              </div>
              <div className="project-desc">
                An interactive corporate analytics dashboard visualizing employee performance, attrition rates, departmental salary metrics, and employee satisfaction trends.
              </div>
            </div>
            <div className="project-details">
              <div className="detail-box">
                <h5>Key Features</h5>
                <ul>
                  <li>Interactive data filtering and drill-downs</li>
                  <li>Turnover rate forecasting graphs</li>
                  <li>Executive summary KPI metric cards</li>
                </ul>
              </div>
              <div className="detail-box">
                <h5>Technologies Used</h5>
                <p>Power BI, Python (Pandas), Excel</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications">
        <h2 className="section-title">Certifications & Training</h2>
        <div className="cert-grid">
          <div className="cert-card">
            <div>
              <h3>Foundations of Business Analysis</h3>
              <div className="issuer">Coursera / Industry Recognized</div>
            </div>
          </div>
          <div className="cert-card">
            <div>
              <h3>Agile Project Management</h3>
              <div className="issuer">LinkedIn Learning</div>
            </div>
          </div>
          <div className="cert-card">
            <div>
              <h3>Python for Data Analysis</h3>
              <div className="issuer">University Certified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          
          {/* Let's Connect Card */}
          <div className="contact-card">
            <h2>Let's Connect</h2>
            <p className="desc">
              I'm always interested in discussing new opportunities, business analysis projects, collaborations, or technology-driven solutions.
            </p>
            
            <a href="mailto:kavindi.sandaruwani@gmail.com" className="info-box">
              <div className="icon-circle">@</div>
              <div>
                <span className="info-label">Email</span>
                <span className="info-val">kavindi.sandaruwani@gmail.com</span>
              </div>
            </a>

            <div className="info-box">
              <div className="icon-circle">📍</div>
              <div>
                <span className="info-label">Location</span>
                <span className="info-val">Sri Lanka</span>
              </div>
            </div>
          </div>

          {/* Send Message Form */}
          <div className="contact-card">
            <h2>Send me a message</h2>
            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="4" required></textarea>
              <button type="submit" className="submit-btn">✈ Send Message</button>
            </form>
          </div>

        </div>

        {/* Social Link Icons (LinkedIn, GitHub, Email) */}
        <div className="social-links">
          {/* LinkedIn Icon */}
          <a href="https://www.linkedin.com/in/kavindi-sandaruwani-057389379" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
            <svg viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
          </a>
          
          {/* GitHub Icon */}
          <a href="https://github.com/kavindikanishka03-eng" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
            <svg viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
          </a>

          {/* Email Icon */}
          <a href="mailto:kavindi.sandaruwani@gmail.com" className="social-icon" title="Email">
            <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Kavindi Sandaruwani. All Rights Reserved.</p>
      </footer>
    </>
  );
}