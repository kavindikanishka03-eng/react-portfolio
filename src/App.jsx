import React, { useState, useEffect } from 'react';

function App() {
  const [viewCount, setViewCount] = useState('...');

  useEffect(() => {
    fetch('https://api.countapi.xyz/hit/kavindi-portfolio/views')
      .then(response => response.json())
      .then(data => {
        setViewCount(data.value);
      })
      .catch(error => {
        console.error('Error fetching view count:', error);
        setViewCount('41');
      });
  }, []);

  return (
    <div>
      <style>{`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            scroll-behavior: smooth;
        }

        body {
            background-color: #0b0f17;
            color: #ffffff;
            overflow-x: hidden;
            position: relative;
            font-size: 16px;
            line-height: 1.6;
        }

        .dots-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            z-index: 1;
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
            padding: 90px 8%;
            position: relative;
            z-index: 2;
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 8%;
            background: rgba(11, 15, 23, 0.95);
            position: fixed;
            width: 100%;
            top: 0;
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

        .nav-links a:hover {
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

        .tools-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 20px;
        }

        .tool-card {
            background: #131924;
            padding: 22px;
            border-radius: 10px;
            border: 1px solid #1e293b;
            text-align: center;
        }

        .tool-card h4 {
            color: #00d2ff;
            margin-bottom: 12px;
            font-size: 17px;
            font-weight: 700;
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
            height: 100%;
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

        .statement-box {
            background: linear-gradient(135deg, #131924 0%, #0f172a 100%);
            border: 2px solid #00d2ff;
            padding: 40px;
            border-radius: 14px;
            text-align: center;
            margin-bottom: 50px;
        }

        .statement-box h3 {
            color: #00d2ff;
            margin-bottom: 15px;
            font-size: 22px;
            font-weight: 800;
        }

        .statement-box p {
            color: #e2e8f0;
            line-height: 1.8;
            max-width: 900px;
            margin: 0 auto;
            font-size: 17px;
            font-weight: 500;
        }

        .contact-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 25px;
        }

        .contact-card {
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
            word-break: break-all;
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

      {/* Floating Dots Effect */}
      <div className="dots-container">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>

      {/* Navigation */}
      <nav>
        <div className="logo">Kavindi Sandaruwani</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">BA Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#contact" className="contact-btn">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <h1>Kavindi Sandaruwani</h1>
        <h2>Aspiring Business Analyst | ICT Undergraduate | Problem Solver</h2>
        <p>I am an ICT undergraduate at the University of Colombo with a strong passion for Business Analysis, Data Analytics, Software Development, and Technology-driven solutions. I bridge the gap between business needs and technical systems.</p>
        <div className="btn-group">
          <a href="#projects" className="btn-primary">View Featured Projects</a>
          <a href="#contact" className="btn-secondary">Let's Connect</a>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about">
        <h2 className="section-title">About Me</h2>
        <div className="about-wrapper">
          <div className="profile-card">
            <div className="profile-img-box">
              <img src="/images/profile.jpg" alt="Kavindi Sandaruwani" />
            </div>
            <h3>Aspiring Business Analyst</h3>
            <p>Bridging Business Goals with Technology Solutions</p>
          </div>

          <div className="about-content">
            <p className="about-paragraph">
              I am <strong>Kavindi Sandaruwani</strong>, an Information and Communication Technology undergraduate at the University of Colombo. My journey combines a passion for technology with a strong interest in problem-solving, creativity, and continuous learning. I am interested in Business Analysis, Software Development, Data Analytics, and UI/UX design, with hands-on experience in developing practical digital solutions.
            </p>
            <p className="about-paragraph">
              I am passionate about using technology to solve real-world problems and creating user-focused, efficient solutions. Through my academic projects and continuous learning, I am developing my skills in software development, database management, data visualization, and business analysis. I am always eager to take on new challenges, expand my knowledge, and grow as a professional in the technology industry.
            </p>

            <div className="stats-grid">
              <div className="stat-card">
                <h4>3rd Year</h4>
                <p>ICT Undergraduate</p>
              </div>
              <div className="stat-card">
                <h4>4+</h4>
                <p>Practical Projects</p>
              </div>
              <div className="stat-card">
                <h4>6+</h4>
                <p>Certifications</p>
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
              <h3>Bachelor of Information and Communication Technology (BICT)</h3>
              <div className="sub">Faculty of Technology, University of Colombo | 3rd Year Undergraduate</div>
              <p style={{ marginBottom: '12px' }}>Pursuing a comprehensive degree in Information and Communication Technology, focusing on System Analysis, Software Engineering, Business Analytics, and Data Management.</p>
              <h5 style={{ color: '#00d2ff', marginBottom: '10px', fontSize: '15px', fontWeight: 700 }}>Relevant Areas of Knowledge:</h5>
              <div className="tags">
                <span className="tag">System Analysis & Design</span>
                <span className="tag">Database Management Systems</span>
                <span className="tag">Software Engineering</span>
                <span className="tag">Software Testing & QA</span>
                <span className="tag">Data Analytics</span>
                <span className="tag">Business Analytics</span>
                <span className="tag">Project Management</span>
                <span className="tag">Agile Methodologies</span>
                <span className="tag">Cloud Computing</span>
                <span className="tag">Web Development</span>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="edu-card">
              <h3>Diploma in English</h3>
              <div className="sub">The Open University of Sri Lanka (OUSL)</div>
              <p>Successfully followed professional studies in English language, communication, and writing skills designed for academic and professional excellence.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="edu-card">
              <h3>Diploma in English Language</h3>
              <div className="sub">Britishway English Academy</div>
              <p>Completed intensive training in spoken English, corporate communication, presentation skills, and professional writing.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="edu-card">
              <h3>G.C.E. Advanced Level – Technology Stream</h3>
              <div className="sub">Secondary Education</div>
              <p>Successfully completed Advanced Level examination in the Technology stream, laying a strong foundation in Engineering Technology, Information Technology, and Science for Technology.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BA Skills Section */}
      <section id="skills">
        <h2 className="section-title">Business Analysis & Professional Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>📋 Business Analysis</h3>
            <div className="tags">
              <span className="tag">Requirements Gathering</span>
              <span className="tag">Requirements Analysis</span>
              <span className="tag">Business Problem Identification</span>
              <span className="tag">Business Process Analysis</span>
              <span className="tag">Stakeholder Analysis</span>
              <span className="tag">Functional Requirements</span>
              <span className="tag">Non-Functional Requirements</span>
              <span className="tag">User Stories</span>
              <span className="tag">Use Cases</span>
              <span className="tag">Process Improvement</span>
              <span className="tag">System Analysis</span>
              <span className="tag">Documentation</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>📊 Data & Business Analytics</h3>
            <div className="tags">
              <span className="tag">Microsoft Excel</span>
              <span className="tag">Microsoft Power BI</span>
              <span className="tag">Data Visualization</span>
              <span className="tag">Dashboard Development</span>
              <span className="tag">Data-driven Decision Making</span>
              <span className="tag">HR Analytics</span>
              <span className="tag">Business Intelligence</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>📌 Project & Agile</h3>
            <div className="tags">
              <span className="tag">Agile Methodology</span>
              <span className="tag">Scrum</span>
              <span className="tag">Project Planning</span>
              <span className="tag">Team Collaboration</span>
              <span className="tag">Requirement Documentation</span>
              <span className="tag">SDLC</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>🧪 QA / Testing</h3>
            <div className="tags">
              <span className="tag">Software Testing Fundamentals</span>
              <span className="tag">Functional Testing</span>
              <span className="tag">Non-functional Testing</span>
              <span className="tag">Test Case Design</span>
              <span className="tag">Quality Assurance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section id="tools">
        <h2 className="section-title">Tools & Technologies</h2>
        <div className="tools-grid">
          <div className="tool-card">
            <h4>Business & Analytics</h4>
            <div className="tags" style={{ justifyContent: 'center' }}>
              <span className="tag">Power BI</span>
              <span className="tag">Excel</span>
              <span className="tag">SQL</span>
            </div>
          </div>
          <div className="tool-card">
            <h4>Business Analysis</h4>
            <div className="tags" style={{ justifyContent: 'center' }}>
              <span className="tag">BRD</span>
              <span className="tag">FRD</span>
              <span className="tag">User Stories</span>
              <span className="tag">Use Cases</span>
            </div>
          </div>
          <div className="tool-card">
            <h4>Development</h4>
            <div className="tags" style={{ justifyContent: 'center' }}>
              <span className="tag">PHP</span>
              <span className="tag">React</span>
              <span className="tag">Next.js</span>
              <span className="tag">Python</span>
              <span className="tag">Java</span>
              <span className="tag">HTML/CSS</span>
            </div>
          </div>
          <div className="tool-card">
            <h4>Database</h4>
            <div className="tags" style={{ justifyContent: 'center' }}>
              <span className="tag">MySQL</span>
              <span className="tag">Oracle</span>
              <span className="tag">PL/SQL</span>
            </div>
          </div>
          <div className="tool-card">
            <h4>Project / Design</h4>
            <div className="tags" style={{ justifyContent: 'center' }}>
              <span className="tag">Git / GitHub</span>
              <span className="tag">Figma</span>
              <span className="tag">Agile</span>
              <span className="tag">Scrum</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-header">
              <h3 className="project-title">🚀 01. CRM System</h3>
              <span className="project-type">Business Management / CRM System</span>
            </div>
            
            <div className="project-banner-grid">
              <div className="project-img-wrapper">
                <img src="/images/crm-dashboard.png" alt="CRM System Dashboard UI" />
              </div>
              <div>
                <p className="project-desc">A Customer Relationship Management (CRM) system designed to help organizations manage customers, leads, tasks, invoices, and business activities through a centralized platform.</p>
              </div>
            </div>

            <div className="project-details">
              <div className="detail-box">
                <h5>Problem Identified</h5>
                <p>Businesses manage customer and sales information across disconnected methods, making it difficult to track leads, tasks, and sales activities.</p>
              </div>
              <div className="detail-box">
                <h5>Proposed Solution</h5>
                <p>A centralized CRM system that organizes customer information and sales workflows into one unified platform.</p>
              </div>
              <div className="detail-box">
                <h5>Key Features</h5>
                <ul>
                  <li>User authentication & role management</li>
                  <li>Lead & customer management</li>
                  <li>Kanban-based sales pipeline</li>
                  <li>Invoicing & due-date tracking</li>
                </ul>
              </div>
              <div className="detail-box">
                <h5>BA Skills Demonstrated</h5>
                <div className="tags">
                  <span className="tag">Requirement Identification</span>
                  <span className="tag">Workflow Analysis</span>
                  <span className="tag">Process Understanding</span>
                </div>
              </div>
            </div>
            <div className="project-footer">
              <div>
                <strong style={{ fontSize: '14px', color: '#a0aec0' }}>Role: </strong>
                <span style={{ fontSize: '14px', color: '#00d2ff', fontWeight: 700 }}>Business Analysis & System Development</span>
              </div>
              <a href="https://github.com/kavindikanishka03-eng" target="_blank" rel="noreferrer" className="project-link">View Project on GitHub →</a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <h3 className="project-title">🏫 02. AcademiCore Instrument Allocation System</h3>
              <span className="project-type">Academic / Resource Management</span>
            </div>

            <div className="project-banner-grid">
              <div className="project-img-wrapper">
                <img src="/images/academicore-login.jpg" alt="AcademiCore Login UI" />
              </div>
              <div>
                <p className="project-desc">A web-based instrument allocation and management system developed for the Faculty of Technology to improve equipment allocation, tracking, and maintenance.</p>
              </div>
            </div>

            <div className="project-details">
              <div className="detail-box">
                <h5>Problem Identified</h5>
                <p>Manual instrument management causes difficulty in knowing real-time availability, tracking bookings, and monitoring maintenance.</p>
              </div>
              <div className="detail-box">
                <h5>Proposed Solution</h5>
                <p>A digital platform for administrators and users to efficiently manage allocation, availability, and QR-based tracking.</p>
              </div>
              <div className="detail-box">
                <h5>Key Features</h5>
                <ul>
                  <li>Instrument booking system</li>
                  <li>Real-time availability status</li>
                  <li>QR code-based tracking</li>
                  <li>Maintenance alerts & reports</li>
                </ul>
              </div>
              <div className="detail-box">
                <h5>BA Skills Demonstrated</h5>
                <div className="tags">
                  <span className="tag">Stakeholder Thinking</span>
                  <span className="tag">Process Analysis</span>
                  <span className="tag">Solution Design</span>
                </div>
              </div>
            </div>
            <div className="project-footer">
              <div>
                <strong style={{ fontSize: '14px', color: '#a0aec0' }}>Role: </strong>
                <span style={{ fontSize: '14px', color: '#00d2ff', fontWeight: 700 }}>Team Member / System Analysis & Development</span>
              </div>
              <a href="https://github.com/kavindikanishka03-eng" target="_blank" rel="noreferrer" className="project-link">View Project on GitHub →</a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <h3 className="project-title">🛒 03. SmartMart POS System</h3>
              <span className="project-type">Point of Sale / Retail System</span>
            </div>

            <div className="project-banner-grid">
              <div className="project-img-wrapper">
                <img src="/images/smartmart-pos.jpg" alt="SmartMart POS UI" />
              </div>
              <div>
                <p className="project-desc">A Point of Sale system designed to support retail operations such as product management, sales transactions, inventory monitoring, and reporting.</p>
              </div>
            </div>

            <div className="project-details">
              <div className="detail-box">
                <h5>Problem Identified</h5>
                <p>Retail businesses require integrated operational workflows connecting Products → Inventory → Sales → Customer Reports.</p>
              </div>
              <div className="detail-box">
                <h5>Proposed Solution</h5>
                <p>A centralized POS platform integrating sales and inventory processes to improve operational visibility and efficiency.</p>
              </div>
              <div className="detail-box">
                <h5>Key Features</h5>
                <ul>
                  <li>Inventory & stock tracking</li>
                  <li>Sales processing & records</li>
                  <li>Customer management</li>
                  <li>Dashboard & reporting</li>
                </ul>
              </div>
              <div className="detail-box">
                <h5>BA Skills Demonstrated</h5>
                <div className="tags">
                  <span className="tag">Process Improvement</span>
                  <span className="tag">System Planning</span>
                  <span className="tag">Database Understanding</span>
                </div>
              </div>
            </div>
            <div className="project-footer">
              <div>
                <strong style={{ fontSize: '14px', color: '#a0aec0' }}>Role: </strong>
                <span style={{ fontSize: '14px', color: '#00d2ff', fontWeight: 700 }}>System Analysis & Development</span>
              </div>
              <a href="https://github.com/kavindikanishka03-eng" target="_blank" rel="noreferrer" className="project-link">View Project on GitHub →</a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <h3 className="project-title">📊 04. HR Analytics Dashboard</h3>
              <span className="project-type">Business Intelligence / Data Analytics</span>
            </div>

            <div className="project-banner-grid">
              <div className="project-img-wrapper">
                <img src="/images/HR-Analytics-Dashboard.jpg" alt="HR Analytics Dashboard UI" />
              </div>
              <div>
                <p className="project-desc">An interactive HR Analytics Dashboard developed using Microsoft Power BI to transform raw HR data into actionable organizational insights.</p>
              </div>
            </div>

            <div className="project-details">
              <div className="detail-box">
                <h5>Key Insights Covered</h5>
                <ul>
                  <li>Employee Attrition Analysis</li>
                  <li>Workforce Demographics</li>
                  <li>Job Satisfaction Trends</li>
                  <li>Department-wise KPIs</li>
                </ul>
              </div>
              <div className="detail-box">
                <h5>Business Value</h5>
                <p>Helps HR leadership identify workforce trends, monitor metrics, and support strategic data-driven decision-making.</p>
              </div>
              <div className="detail-box">
                <h5>Tools Used</h5>
                <div className="tags">
                  <span className="tag">Microsoft Power BI</span>
                  <span className="tag">Excel</span>
                </div>
              </div>
              <div className="detail-box">
                <h5>Skills Demonstrated</h5>
                <div className="tags">
                  <span className="tag">Data Cleaning</span>
                  <span className="tag">Data Visualization</span>
                  <span className="tag">KPI Analysis</span>
                </div>
              </div>
            </div>
            <div className="project-footer">
              <div>
                <strong style={{ fontSize: '14px', color: '#a0aec0' }}>Type: </strong>
                <span style={{ fontSize: '14px', color: '#00d2ff', fontWeight: 700 }}>Power BI Case Study</span>
              </div>
              <a href="https://github.com/kavindikanishka03-eng" target="_blank" rel="noreferrer" className="project-link">View Dashboard Repository →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications">
        <h2 className="section-title">Certifications</h2>
        <div className="cert-grid">
          <div className="cert-card">
            <div>
              <h3>IBM Business Analytics Professional Certificate</h3>
              <div className="issuer">IBM / Coursera</div>
            </div>
            <div className="tags">
              <span className="tag">Business Analytics</span>
              <span className="tag">Data Analysis</span>
              <span className="tag">Data Visualization</span>
            </div>
          </div>

          <div className="cert-card">
            <div>
              <h3>Business Analytics with Excel</h3>
              <div className="issuer">Simplilearn</div>
            </div>
            <div className="tags">
              <span className="tag">MS Excel</span>
              <span className="tag">Data Analysis</span>
              <span className="tag">Data Interpretation</span>
            </div>
          </div>

          <div className="cert-card">
            <div>
              <h3>Foundation of Project Management</h3>
              <div className="issuer">University of Moratuwa – CODL</div>
            </div>
            <div className="tags">
              <span className="tag">Project Planning</span>
              <span className="tag">PM Practices</span>
              <span className="tag">ICT Projects</span>
            </div>
          </div>

          <div className="cert-card">
            <div>
              <h3>Agile Project Management in ICT Projects</h3>
              <div className="issuer">University of Moratuwa – CODL</div>
            </div>
            <div className="tags">
              <span className="tag">Agile Methodology</span>
              <span className="tag">Scrum</span>
              <span className="tag">Iterative Development</span>
            </div>
          </div>

          <div className="cert-card">
            <div>
              <h3>Introduction to Software Testing</h3>
              <div className="issuer">Simplilearn</div>
            </div>
            <div className="tags">
              <span className="tag">Software Testing</span>
              <span className="tag">Testing Types</span>
              <span className="tag">Quality Assurance</span>
            </div>
          </div>

          <div className="cert-card">
            <div>
              <h3>AWS Academy Cloud Foundations</h3>
              <div className="issuer">AWS Academy</div>
            </div>
            <div className="tags">
              <span className="tag">Cloud Computing</span>
              <span className="tag">AWS Infrastructure</span>
              <span className="tag">EC2 & S3</span>
            </div>
          </div>
        </div>
      </section>

      {/* Career Statement */}
      <section>
        <div className="statement-box">
          <h3>🎯 Business Analyst Career Statement</h3>
          <p>I am currently building my career toward Business Analysis, with a focus on understanding business problems, analyzing requirements, improving processes, and using data and technology to develop practical solutions. My combination of ICT knowledge, business analytics experience, project management knowledge, and hands-on system development projects allows me to understand both business needs and technical solutions.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          <div className="contact-card">
            <h2>Let's Connect</h2>
            <p className="desc">I'm always interested in discussing new opportunities, business analysis projects, collaborations, or technology-driven solutions.</p>

            <a href="mailto:kavindi.sandaruwani@gmail.com" className="info-box">
              <div className="icon-circle">✉</div>
              <div>
                <span className="info-label">Email</span>
                <p className="info-val">kavindi.sandaruwani@gmail.com</p>
              </div>
            </a>

            <div className="info-box">
              <div className="icon-circle">📍</div>
              <div>
                <span className="info-label">Location</span>
                <p className="info-val">Kalutara, Sri Lanka</p>
              </div>
            </div>
          </div>

          <div className="contact-card">
            <h2>Send me a message</h2>
            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit" className="submit-btn">✈ Send Message</button>
            </form>
          </div>
        </div>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/kavindi-sandaruwani-057389379" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
          </a>
          <a href="https://github.com/kavindikanishka03-eng" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
          </a>
          <a href="mailto:kavindi.sandaruwani@gmail.com" className="social-icon" aria-label="Email">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          </a>
        </div>
      </section>

      <footer>
        © 2026 Kavindi Sandaruwani. All rights reserved.<br />
        Designed with ❤️ and built with modern web technologies<br />
        <span style={{ color: '#00d2ff', fontWeight: 700, marginTop: '5px', display: 'inline-block' }}>
          👁️ <span>{viewCount}</span> Portfolio Views
        </span>
      </footer>
    </div>
  );
}

export default App;