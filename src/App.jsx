import React, { useState, useEffect } from 'react';
import './App.css'; // අවශ්‍ය නම් ඔබේ CSS ෆයිල් එක මෙහි සම්බන්ධ කරගත හැක

function App() {
  const [viewCount, setViewCount] = useState('41');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    // Live View Count Fetch
    fetch('https://api.countapi.xyz/hit/kavindi-portfolio/views')
      .then(response => response.json())
      .then(data => {
        setViewCount(data.value);
      })
      .catch(error => {
        console.error('Error fetching view count:', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! (Form submission logic can be connected here)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="portfolio-app">
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
              <img src="images/profile.jpg" alt="Kavindi Sandaruwani" />
            </div>
            <h3>Aspiring Business Analyst</h3>
            <p>Bridging Business Goals with Technology Solutions</p>
          </div>

          <div className="about-content">
            <p className="about-paragraph">
              I am <strong>Kavindi Sandaruwani</strong>, an Information and Communication Technology undergraduate at the University of Colombo. My journey combines a passion for technology with a strong interest in problem-solving, creativity, and continuous learning. I am interested in Business Analysis, Software Development, Data Analytics, and UI/UX design, with hands-on experience in developing practical digital solutions[cite: 1].
            </p>
            <p className="about-paragraph">
              I am passionate about using technology to solve real-world problems and creating user-focused, efficient solutions. Through my academic projects and continuous learning, I am developing my skills in software development, database management, data visualization, and business analysis[cite: 1].
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
              <p style={{ marginBottom: '12px' }}>Pursuing a comprehensive degree in Information and Communication Technology, focusing on System Analysis, Software Engineering, Business Analytics, and Data Management[cite: 1].</p>
              <h5 style={{ color: '#00d2ff', marginBottom: '10px', fontSize: '15px', fontWeight: '700' }}>Relevant Areas of Knowledge:</h5>
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
              <p>Successfully followed professional studies in English language, communication, and writing skills designed for academic and professional excellence[cite: 1].</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="edu-card">
              <h3>Diploma in English Language</h3>
              <div className="sub">Britishway English Academy</div>
              <p>Completed intensive training in spoken English, corporate communication, presentation skills, and professional writing[cite: 1].</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="edu-card">
              <h3>G.C.E. Advanced Level – Technology Stream</h3>
              <div className="sub">Secondary Education</div>
              <p>Successfully completed Advanced Level examination in the Technology stream, laying a strong foundation in Engineering Technology, Information Technology, and Science for Technology[cite: 1].</p>
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
          
          {/* Project 1 */}
          <div className="project-card">
            <div className="project-header">
              <h3 className="project-title">🚀 01. CRM System</h3>
              <span className="project-type">Business Management / CRM System</span>
            </div>
            <div className="project-banner-grid">
              <div className="project-img-wrapper">
                <img src="images/crm-dashboard.png" alt="CRM System Dashboard UI" />
              </div>
              <div>
                <p className="project-desc">A Customer Relationship Management (CRM) system designed to help organizations manage customers, leads, tasks, invoices, and business activities through a centralized platform[cite: 1].</p>
              </div>
            </div>
            <div className="project-details">
              <div className="detail-box">
                <h5>Problem Identified</h5>
                <p>Businesses manage customer and sales information across disconnected methods, making it difficult to track leads, tasks, and sales activities[cite: 1].</p>
              </div>
              <div className="detail-box">
                <h5>Proposed Solution</h5>
                <p>A centralized CRM system that organizes customer information and sales workflows into one unified platform[cite: 1].</p>
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

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-header">
              <h3 className="project-title">🏫 02. AcademiCore Instrument Allocation System</h3>
              <span className="project-type">Academic / Resource Management</span>
            </div>
            <div className="project-banner-grid">
              <div className="project-img-wrapper">
                <img src="images/academicore-login.jpg" alt="AcademiCore Login UI" />
              </div>
              <div>
                <p className="project-desc">A web-based instrument allocation and management system developed for the Faculty of Technology to improve equipment allocation, tracking, and maintenance[cite: 1].</p>
              </div>
            </div>
            <div className="project-details">
              <div className="detail-box">
                <h5>Problem Identified</h5>
                <p>Manual instrument management causes difficulty in knowing real-time availability, tracking bookings, and monitoring maintenance[cite: 1].</p>
              </div>
              <div className="detail-box">
                <h5>Proposed Solution</h5>
                <p>A digital platform for administrators and users to efficiently manage allocation, availability, and QR-based tracking[cite: 1].</p>
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

          {/* Project 3 */}
          <div className="project-card">
            <div className="project-header">
              <h3 className="project-title">🛒 03. SmartMart POS System</h3>
              <span className="project-type">Point of Sale / Retail System</span>
            </div>
            <div className="project-banner-grid">
              <div className="project-img-wrapper">
                <img src="images/smartmart-pos.jpg" alt="SmartMart POS UI" />
              </div>
              <div>
                <p className="project-desc">A Point of Sale system designed to support retail operations such as product management, sales transactions, inventory monitoring, and reporting[cite: 1].</p>
              </div>
            </div>
            <div className="project-details">
              <div className="detail-box">
                <h5>Problem Identified</h5>
                <p>Retail businesses require integrated operational workflows connecting Products → Inventory → Sales → Customer Reports[cite: 1].</p>
              </div>
              <div className="detail-box">
                <h5>Proposed Solution</h5>
                <p>A centralized POS platform integrating sales and inventory processes to improve operational visibility and efficiency[cite: 1].</p>
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

          {/* Project 4 */}
          <div className="project-card">
            <div className="project-header">
              <h3 className="project-title">📊 04. HR Analytics Dashboard</h3>
              <span className="project-type">Business Intelligence / Data Analytics</span>
            </div>
            <div className="project-banner-grid">
              <div className="project-img-wrapper">
                <img src="images/HR-Analytics-Dashboard.jpg" alt="HR Analytics Dashboard UI" />
              </div>
              <div>
                <p className="project-desc">An interactive HR Analytics Dashboard developed using Microsoft Power BI to transform raw HR data into actionable organizational insights[cite: 1].</p>
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
                <p>Helps HR leadership identify workforce trends, monitor metrics, and support strategic data-driven decision-making[cite: 1].</p>
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
          <p>I am currently building my career toward Business Analysis, with a focus on understanding business problems, analyzing requirements, improving processes, and using data and technology to develop practical solutions. My combination of ICT knowledge, business analytics experience, project management knowledge, and hands-on system development projects allows me to understand both business needs and technical solutions[cite: 1].</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          <div className="contact-card">
            <h2>Let's Connect</h2>
            <p className="desc">I'm always interested in discussing new opportunities, business analysis projects, collaborations, or technology-driven solutions[cite: 1].</p>

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
            <form className="contact-form" onSubmit={handleSubmit}>
              <input 
                type="text" 
                placeholder="Your Name" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required 
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required 
              />
              <textarea 
                placeholder="Your Message" 
                rows="5" 
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
              <button type="submit" className="submit-btn">✈ Send Message</button>
            </form>
          </div>
        </div>

        {/* Social Links Container */}
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
          👁️ <span id="view-count">{viewCount}</span> Portfolio Views
        </span>
      </footer>
    </div>
  );
}

export default App;