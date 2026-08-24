import React, { useState } from 'react';

// Vite image path helper
const getImgPath = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

// Full Projects Data Dynamic Array
const projects = [
  {
    id: "01",
    title: "CRM System",
    category: "Business Management / CRM System",
    description: "A Customer Relationship Management (CRM) system designed to help organizations manage customers, leads, tasks, invoices, and business activities through a centralized platform.",
    image: "images/crm-dashboard.png",
    col1Title: "Problem Identified",
    col1Content: "Businesses manage customer and sales information across disconnected methods, making it difficult to track leads, tasks, and sales activities.",
    col2Title: "Proposed Solution",
    col2Content: "A centralized CRM system that organizes customer information and sales workflows into one unified platform.",
    col3Title: "Key Features",
    col3List: [
      "User authentication & role management",
      "Lead & customer management",
      "Kanban-based sales pipeline",
      "Invoicing & due-date tracking"
    ],
    col4Title: "BA Skills Demonstrated",
    tags: ["Requirement Identification", "Workflow Analysis", "Process Understanding"],
    roleLabel: "Role:",
    roleValue: "Business Analysis & System Development",
    linkText: "View Project on GitHub →",
    github: "https://github.com/kavindikanishka03-eng"
  },
  {
    id: "02",
    title: "AcademiCore Instrument Allocation System",
    category: "Academic / Resource Management",
    description: "A web-based instrument allocation and management system developed for the Faculty of Technology to improve equipment allocation, tracking, and maintenance.",
    image: "images/academicore-login.jpg",
    col1Title: "Problem Identified",
    col1Content: "Manual instrument management causes difficulty in knowing real-time availability, tracking bookings, and monitoring maintenance.",
    col2Title: "Proposed Solution",
    col2Content: "A digital platform for administrators and users to efficiently manage allocation, availability, and QR-based tracking.",
    col3Title: "Key Features",
    col3List: [
      "Instrument booking system",
      "Real-time availability status",
      "QR code-based tracking",
      "Maintenance alerts & reports"
    ],
    col4Title: "BA Skills Demonstrated",
    tags: ["Stakeholder Thinking", "Process Analysis", "Solution Design"],
    roleLabel: "Role:",
    roleValue: "Team Member / System Analysis & Development",
    linkText: "View Project on GitHub →",
    github: "https://github.com/kavindikanishka03-eng"
  },
  {
    id: "03",
    title: "SmartMart POS System",
    category: "Point of Sale / Retail System",
    description: "A Point of Sale system designed to support retail operations such as product management, sales transactions, inventory monitoring, and reporting.",
    image: "images/smartmart-pos.jpg",
    col1Title: "Problem Identified",
    col1Content: "Retail businesses require integrated operational workflows connecting Products → Inventory → Sales → Customer Reports.",
    col2Title: "Proposed Solution",
    col2Content: "A centralized POS platform integrating sales and inventory processes to improve operational visibility and efficiency.",
    col3Title: "Key Features",
    col3List: [
      "Inventory & stock tracking",
      "Sales processing & records",
      "Customer management",
      "Dashboard & reporting"
    ],
    col4Title: "BA Skills Demonstrated",
    tags: ["Process Improvement", "System Planning", "Database Understanding"],
    roleLabel: "Role:",
    roleValue: "System Analysis & Development",
    linkText: "View Project on GitHub →",
    github: "https://github.com/kavindikanishka03-eng"
  },
  {
    id: "04",
    title: "HR Analytics Dashboard",
    category: "Business Intelligence / Data Analytics",
    description: "An interactive HR Analytics Dashboard developed using Microsoft Power BI to transform raw HR data into actionable organizational insights.",
    image: "images/HR-Analytics-Dashboard.jpg",
    col1Title: "Key Insights Covered",
    col1List: [
      "Employee Attrition Analysis",
      "Workforce Demographics",
      "Job Satisfaction Trends",
      "Department-wise KPIs"
    ],
    col2Title: "Business Value",
    col2Content: "Helps HR leadership identify workforce trends, monitor metrics, and support strategic data-driven decision-making.",
    col3Title: "Tools Used",
    col3Badges: ["Microsoft Power BI", "Excel"],
    col4Title: "Skills Demonstrated",
    tags: ["Data Cleaning", "Data Visualization", "KPI Analysis"],
    roleLabel: "Type:",
    roleValue: "Power BI Case Study",
    linkText: "View Dashboard Repository →",
    github: "https://github.com/kavindikanishka03-eng"
  }
];

// Certifications Data Array
const certifications = [
  {
    title: "IBM Business Analytics Professional Certificate",
    issuer: "IBM / Coursera",
    tags: ["Business Analytics", "Data Analysis", "Data Visualization"]
  },
  {
    title: "Business Analytics with Excel",
    issuer: "Simplilearn",
    tags: ["MS Excel", "Data Analysis", "Data Interpretation"]
  },
  {
    title: "Foundation of Project Management",
    issuer: "University of Moratuwa – CODL",
    tags: ["Project Planning", "PM Practices", "ICT Projects"]
  },
  {
    title: "Agile Project Management in ICT Projects",
    issuer: "University of Moratuwa – CODL",
    tags: ["Agile Methodology", "Scrum", "Iterative Development"]
  },
  {
    title: "Introduction to Software Testing",
    issuer: "Simplilearn",
    tags: ["Software Testing", "Testing Types", "Quality Assurance"]
  },
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    tags: ["Cloud Computing", "AWS Infrastructure", "EC2 & S3"]
  }
];

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div style={styles.body}>
      <style>{`
        html { scroll-behavior: smooth; }
        .tag-pill {
          background: rgba(0, 210, 255, 0.08);
          color: #00d2ff;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 500;
          border: 1px solid rgba(0, 210, 255, 0.3);
          display: inline-block;
        }
        .btn-cyan {
          background: #00d2ff;
          color: #050b14;
          padding: 12px 28px;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 700;
          font-size: 15px;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }
        .btn-cyan:hover {
          box-shadow: 0 0 20px rgba(0, 210, 255, 0.6);
          transform: translateY(-2px);
        }
        .btn-outline {
          border: 1px solid #00d2ff;
          color: #00d2ff;
          padding: 12px 28px;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          font-size: 15px;
          transition: all 0.3s ease;
          background: transparent;
        }
        .btn-outline:hover {
          background: rgba(0, 210, 255, 0.1);
          transform: translateY(-2px);
        }
        .card-glow:hover {
          border-color: rgba(0, 210, 255, 0.5) !important;
          box-shadow: 0 0 15px rgba(0, 210, 255, 0.15);
        }
        .form-input:focus, .form-textarea:focus {
          border-color: #00d2ff !important;
          outline: none;
          box-shadow: 0 0 8px rgba(0, 210, 255, 0.3);
        }
        .social-icon-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #0a111e;
          border: 1px solid rgba(0, 210, 255, 0.4);
          color: #00d2ff;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .social-icon-btn:hover {
          background: #00d2ff;
          color: #050b14;
          box-shadow: 0 0 15px rgba(0, 210, 255, 0.6);
          transform: translateY(-3px);
        }
      `}</style>

      {/* Navbar */}
      <nav style={styles.nav}>
        <div style={styles.logo}>KAVINDI SANDARUWANI</div>
        <ul style={styles.navLinks}>
          <li><a href="#home" style={styles.navLink}>Home</a></li>
          <li><a href="#about" style={styles.navLink}>About</a></li>
          <li><a href="#education" style={styles.navLink}>Education</a></li>
          <li><a href="#baskills" style={styles.navLink}>BA Skills</a></li>
          <li><a href="#projects" style={styles.navLink}>Projects</a></li>
          <li><a href="#certifications" style={styles.navLink}>Certifications</a></li>
          <li><a href="#contact" style={{ ...styles.navLink, ...styles.navContactBtn }}>Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" style={styles.heroSection}>
        <h1 style={styles.heroH1}>Kavindi Sandaruwani</h1>
        <h2 style={styles.heroH2}>Aspiring Business Analyst | ICT Undergraduate | Problem Solver</h2>
        <p style={styles.heroP}>
          I am an ICT undergraduate at the University of Colombo with a strong passion for Business Analysis, Data Analytics, Software Development, and Technology-driven solutions. I bridge the gap between business needs and technical systems.
        </p>
        <div style={{ display: 'flex', gap: '15px' }}>
          <a href="#projects" className="btn-cyan">View Featured Projects</a>
          <a href="#contact" className="btn-outline">Let's Connect</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={styles.section}>
        <h2 style={styles.sectionTitle}>About Me</h2>
        <div style={styles.aboutGrid}>
          {/* Profile Card */}
          <div style={styles.profileCard}>
            <div style={styles.profileCircleBox}>
              <img src={getImgPath('images/profile.jpg')} alt="Kavindi" style={styles.profileImg} />
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '10px 0 5px 0' }}>Aspiring Business Analyst</h3>
            <p style={{ fontSize: '13px', color: '#94a3b8' }}>Bridging Business Goals with Technology Solutions</p>
          </div>

          {/* Details & Counter Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p style={styles.aboutText}>
              I am <strong>Kavindi Sandaruwani</strong>, an Information and Communication Technology undergraduate at the University of Colombo. My journey combines a passion for technology with a strong interest in problem-solving, creativity, and continuous learning. I am interested in Business Analysis, Software Development, Data Analytics, and UI/UX design, with hands-on experience in developing practical digital solutions.
            </p>
            <p style={styles.aboutText}>
              I am passionate about using technology to solve real-world problems and creating user-focused, efficient solutions. Through my academic projects and continuous learning, I am developing my skills in software development, database management, data visualization, and business analysis. I am always eager to take on new challenges, expand my knowledge, and grow as a professional in the technology industry.
            </p>

            <div style={styles.counterGrid}>
              <div className="card-glow" style={styles.counterCard}>
                <h3 style={styles.counterNum}>3rd Year</h3>
                <p style={styles.counterLabel}>ICT Undergraduate</p>
              </div>
              <div className="card-glow" style={styles.counterCard}>
                <h3 style={styles.counterNum}>4+</h3>
                <p style={styles.counterLabel}>Practical Projects</p>
              </div>
              <div className="card-glow" style={styles.counterCard}>
                <h3 style={styles.counterNum}>6+</h3>
                <p style={styles.counterLabel}>Certifications</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" style={styles.section}>
        <h2 style={styles.sectionTitle}>Education</h2>
        <div style={styles.timelineContainer}>
          <div style={styles.timelineLine}></div>
          
          <div style={styles.timelineItem}>
            <div style={styles.timelineDot}></div>
            <div className="card-glow" style={styles.timelineCard}>
              <h3 style={styles.eduTitle}>Bachelor of Information and Communication Technology (BICT)</h3>
              <p style={styles.eduSub}>Faculty of Technology, University of Colombo | 3rd Year Undergraduate</p>
              <p style={styles.eduDesc}>
                Pursuing a comprehensive degree in Information and Communication Technology, focusing on System Analysis, Software Engineering, Business Analytics, and Data Management.
              </p>
              <h5 style={{ color: '#00d2ff', margin: '15px 0 10px 0', fontSize: '14px' }}>Relevant Areas of Knowledge:</h5>
              <div style={styles.tagsFlex}>
                {["System Analysis & Design", "Database Management Systems", "Software Engineering", "Software Testing & QA", "Data Analytics", "Business Analytics", "Project Management", "Agile Methodologies", "Cloud Computing", "Web Development"].map((item, i) => (
                  <span key={i} className="tag-pill">{item}</span>
                ))}
              </div>
            </div>
          </div>

          <div style={styles.timelineItem}>
            <div style={styles.timelineDot}></div>
            <div className="card-glow" style={styles.timelineCard}>
              <h3 style={styles.eduTitle}>Diploma in English</h3>
              <p style={styles.eduSub}>The Open University of Sri Lanka (OUSL)</p>
              <p style={styles.eduDesc}>
                Successfully followed professional studies in English language, communication, and writing skills designed for academic and professional excellence.
              </p>
            </div>
          </div>

          <div style={styles.timelineItem}>
            <div style={styles.timelineDot}></div>
            <div className="card-glow" style={styles.timelineCard}>
              <h3 style={styles.eduTitle}>Diploma in English Language</h3>
              <p style={styles.eduSub}>Britishway English Academy</p>
              <p style={styles.eduDesc}>
                Completed intensive training in spoken English, corporate communication, presentation skills, and professional writing.
              </p>
            </div>
          </div>

          <div style={styles.timelineItem}>
            <div style={styles.timelineDot}></div>
            <div className="card-glow" style={styles.timelineCard}>
              <h3 style={styles.eduTitle}>G.C.E. Advanced Level – Technology Stream</h3>
              <p style={styles.eduSub}>Secondary Education</p>
              <p style={styles.eduDesc}>
                Successfully completed Advanced Level examination in the Technology stream, laying a strong foundation in Engineering Technology, Information Technology, and Science for Technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BA Skills Section */}
      <section id="baskills" style={styles.section}>
        <h2 style={styles.sectionTitle}>Business Analysis & Professional Skills</h2>
        <div style={styles.skillsGrid}>
          <div className="card-glow" style={styles.skillCategoryCard}>
            <h3 style={styles.skillCategoryTitle}>📋 Business Analysis</h3>
            <div style={styles.skillsColumnFlex}>
              {["Requirements Gathering", "Requirements Analysis", "Business Problem Identification", "Business Process Analysis", "Stakeholder Analysis", "Functional Requirements", "Non-Functional Requirements", "User Stories", "Use Cases", "Process Improvement", "System Analysis"].map((sk, i) => (
                <span key={i} className="tag-pill">{sk}</span>
              ))}
            </div>
          </div>
          <div className="card-glow" style={styles.skillCategoryCard}>
            <h3 style={styles.skillCategoryTitle}>📊 Data & Business Analytics</h3>
            <div style={styles.skillsColumnFlex}>
              {["Microsoft Excel", "Microsoft Power BI", "Data Visualization", "Dashboard Development", "Data-driven Decision Making", "HR Analytics", "Business Intelligence"].map((sk, i) => (
                <span key={i} className="tag-pill">{sk}</span>
              ))}
            </div>
          </div>
          <div className="card-glow" style={styles.skillCategoryCard}>
            <h3 style={styles.skillCategoryTitle}>📌 Project & Agile</h3>
            <div style={styles.skillsColumnFlex}>
              {["Agile Methodology", "Scrum", "Project Planning", "Team Collaboration", "Requirement Documentation", "SDLC"].map((sk, i) => (
                <span key={i} className="tag-pill">{sk}</span>
              ))}
            </div>
          </div>
          <div className="card-glow" style={styles.skillCategoryCard}>
            <h3 style={styles.skillCategoryTitle}>🧪 QA / Testing</h3>
            <div style={styles.skillsColumnFlex}>
              {["Software Testing Fundamentals", "Functional Testing", "Non-functional Testing", "Test Case Design", "Quality Assurance"].map((sk, i) => (
                <span key={i} className="tag-pill">{sk}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Tools & Technologies</h2>
        <div style={styles.toolsGrid}>
          <div className="card-glow" style={styles.toolCard}>
            <h4 style={styles.toolCardTitle}>Business & Analytics</h4>
            <div style={styles.tagsFlexCenter}>
              {["Power BI", "Excel", "SQL"].map((t, i) => <span key={i} className="tag-pill">{t}</span>)}
            </div>
          </div>
          <div className="card-glow" style={styles.toolCard}>
            <h4 style={styles.toolCardTitle}>Business Analysis</h4>
            <div style={styles.tagsFlexCenter}>
              {["BRD", "FRD", "User Stories", "Use Cases"].map((t, i) => <span key={i} className="tag-pill">{t}</span>)}
            </div>
          </div>
          <div className="card-glow" style={styles.toolCard}>
            <h4 style={styles.toolCardTitle}>Development</h4>
            <div style={styles.tagsFlexCenter}>
              {["PHP", "React", "Next.js", "Python", "Java", "HTML/CSS"].map((t, i) => <span key={i} className="tag-pill">{t}</span>)}
            </div>
          </div>
          <div className="card-glow" style={styles.toolCard}>
            <h4 style={styles.toolCardTitle}>Database</h4>
            <div style={styles.tagsFlexCenter}>
              {["MySQL", "Oracle", "PL/SQL"].map((t, i) => <span key={i} className="tag-pill">{t}</span>)}
            </div>
          </div>
          <div className="card-glow" style={styles.toolCard}>
            <h4 style={styles.toolCardTitle}>Project / Design</h4>
            <div style={styles.tagsFlexCenter}>
              {["Git / GitHub", "Figma", "Agile", "Scrum"].map((t, i) => <span key={i} className="tag-pill">{t}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" style={styles.section}>
        <h2 style={styles.sectionTitle}>Featured Projects</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {projects.map((proj) => (
            <div key={proj.id} className="card-glow" style={styles.projectMainCard}>
              <div style={styles.projectHeaderRow}>
                <h3 style={{ color: '#00d2ff', fontSize: '22px', fontWeight: 700 }}>
                  🚀 {proj.id}. {proj.title}
                </h3>
                <span style={styles.categoryBadge}>{proj.category}</span>
              </div>

              <div style={styles.projectTopGrid}>
                <div style={styles.projectImgBox}>
                  <img src={getImgPath(proj.image)} alt={proj.title} style={styles.projectImg} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <p style={{ color: '#cbd5e1', fontSize: '15px', lineHeight: 1.6 }}>{proj.description}</p>
                </div>
              </div>

              <div style={styles.projectInnerGrid}>
                <div style={styles.innerBox}>
                  <h5 style={styles.innerBoxTitle}>{proj.col1Title}</h5>
                  {proj.col1Content && <p style={styles.innerBoxP}>{proj.col1Content}</p>}
                  {proj.col1List && (
                    <ul style={styles.innerList}>
                      {proj.col1List.map((li, i) => <li key={i}>{li}</li>)}
                    </ul>
                  )}
                </div>

                <div style={styles.innerBox}>
                  <h5 style={styles.innerBoxTitle}>{proj.col2Title}</h5>
                  <p style={styles.innerBoxP}>{proj.col2Content}</p>
                </div>

                <div style={styles.innerBox}>
                  <h5 style={styles.innerBoxTitle}>{proj.col3Title}</h5>
                  {proj.col3List && (
                    <ul style={styles.innerList}>
                      {proj.col3List.map((li, i) => <li key={i}>{li}</li>)}
                    </ul>
                  )}
                  {proj.col3Badges && (
                    <div style={styles.tagsFlex}>
                      {proj.col3Badges.map((b, i) => <span key={i} className="tag-pill">{b}</span>)}
                    </div>
                  )}
                </div>

                <div style={styles.innerBox}>
                  <h5 style={styles.innerBoxTitle}>{proj.col4Title}</h5>
                  <div style={styles.tagsFlex}>
                    {proj.tags.map((t, i) => <span key={i} className="tag-pill">{t}</span>)}
                  </div>
                </div>
              </div>

              <div style={styles.projectFooterRow}>
                <div>
                  <span style={{ color: '#94a3b8', fontSize: '14px' }}>{proj.roleLabel} </span>
                  <span style={{ color: '#00d2ff', fontSize: '14px', fontWeight: 600 }}>{proj.roleValue}</span>
                </div>
                <a href={proj.github} target="_blank" rel="noreferrer" style={styles.githubLink}>
                  {proj.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" style={styles.section}>
        <h2 style={styles.sectionTitle}>Certifications</h2>
        <div style={styles.certGrid}>
          {certifications.map((cert, index) => (
            <div key={index} className="card-glow" style={styles.certCard}>
              <h3 style={styles.certTitle}>{cert.title}</h3>
              <p style={styles.certIssuer}>{cert.issuer}</p>
              <div style={{ ...styles.tagsFlex, marginTop: '20px' }}>
                {cert.tags.map((t, i) => <span key={i} className="tag-pill">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Business Analyst Career Statement Section */}
      <section style={styles.section}>
        <div className="card-glow" style={styles.careerStatementCard}>
          <h3 style={styles.careerTitle}>🎯 Business Analyst Career Statement</h3>
          <p style={styles.careerDesc}>
            I am currently building my career toward Business Analysis, with a focus on understanding business problems, analyzing requirements, improving processes, and using data and technology to develop practical solutions. My combination of ICT knowledge, business analytics experience, project management knowledge, and hands-on system development projects allows me to understand both business needs and technical solutions.
          </p>
        </div>
      </section>

      {/* Get In Touch & Contact Section */}
      <section id="contact" style={styles.section}>
        <h2 style={styles.sectionTitle}>Get In Touch</h2>
        <div style={styles.contactGrid}>
          {/* Let's Connect Info Card */}
          <div className="card-glow" style={styles.contactInfoCard}>
            <h3 style={{ color: '#00d2ff', fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>Let's Connect</h3>
            <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.6, marginBottom: '25px' }}>
              I'm always interested in discussing new opportunities, business analysis projects, collaborations, or technology-driven solutions.
            </p>

            <a href="mailto:kavindikanishka03@gmail.com" style={{ textDecoration: 'none' }}>
              <div style={styles.contactDetailBox}>
                <div style={styles.contactIconCircle}>✉️</div>
                <div>
                  <div style={{ fontSize: '13px', color: '#94a3b8', fontWeight: 600 }}>Email</div>
                  <div style={{ fontSize: '14px', color: '#ffffff' }}>kavindikanishka03@gmail.com</div>
                </div>
              </div>
            </a>

            <div style={styles.contactDetailBox}>
              <div style={styles.contactIconCircle}>📍</div>
              <div>
                <div style={{ fontSize: '13px', color: '#94a3b8', fontWeight: 600 }}>Location</div>
                <div style={{ fontSize: '14px', color: '#ffffff' }}>Sri Lanka</div>
              </div>
            </div>
          </div>

          {/* Send me a message Form Card */}
          <div className="card-glow" style={styles.contactFormCard}>
            <h3 style={{ color: '#00d2ff', fontSize: '20px', fontWeight: 700, marginBottom: '20px' }}>Send me a message</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="form-input"
                style={styles.inputField}
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="form-input"
                style={styles.inputField}
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
              <textarea 
                placeholder="Your Message" 
                className="form-textarea"
                style={styles.textAreaField}
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              ></textarea>
              <button type="submit" className="btn-cyan" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                ✈️ Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Social Icons Footer Row */}
        <div style={styles.socialIconsRow}>
          {/* LinkedIn Icon Link */}
          <a 
            href="https://www.linkedin.com/in/kavindi-sandaruwani-057389379" 
            target="_blank" 
            rel="noreferrer" 
            className="social-icon-btn"
            title="LinkedIn Profile"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
          </a>

          {/* GitHub Icon Link */}
          <a 
            href="https://github.com/kavindikanishka03-eng" 
            target="_blank" 
            rel="noreferrer" 
            className="social-icon-btn"
            title="GitHub Profile"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
            </svg>
          </a>

          {/* Email Icon Link */}
          <a 
            href="mailto:kavindikanishka03@gmail.com" 
            className="social-icon-btn"
            title="Send Email"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Footer copyright */}
      <footer style={styles.footer}>
        <p style={{ color: '#64748b', fontSize: '13px', margin: 0 }}>© 2026 Kavindi Sandaruwani. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Inline Styling Config
const styles = {
  body: {
    backgroundColor: '#050b14',
    color: '#ffffff',
    fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    minHeight: '100vh',
    margin: 0,
    padding: 0
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '18px 6%',
    backgroundColor: '#050b14',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
    boxSizing: 'border-box'
  },
  logo: {
    color: '#00d2ff',
    fontWeight: 800,
    fontSize: '18px',
    letterSpacing: '1px'
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '20px',
    alignItems: 'center',
    margin: 0,
    padding: 0
  },
  navLink: {
    color: '#cbd5e1',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: 500
  },
  navContactBtn: {
    border: '1px solid #00d2ff',
    padding: '6px 18px',
    borderRadius: '20px',
    color: '#00d2ff'
  },
  heroSection: {
    minHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '120px 10% 40px 10%'
  },
  heroH1: {
    fontSize: '48px',
    color: '#00d2ff',
    fontWeight: 800,
    marginBottom: '10px'
  },
  heroH2: {
    fontSize: '20px',
    color: '#ffffff',
    fontWeight: 600,
    marginBottom: '25px'
  },
  heroP: {
    color: '#94a3b8',
    maxWidth: '780px',
    lineHeight: 1.7,
    fontSize: '15px',
    marginBottom: '35px'
  },
  section: {
    padding: '70px 6%'
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '32px',
    color: '#00d2ff',
    fontWeight: 800,
    marginBottom: '45px'
  },
  aboutGrid: {
    display: 'grid',
    gridTemplateColumns: '280px 1fr',
    gap: '40px',
    alignItems: 'start'
  },
  profileCard: {
    background: '#0a111e',
    border: '1px solid #1e293b',
    borderRadius: '16px',
    padding: '30px 20px',
    textAlign: 'center'
  },
  profileCircleBox: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    margin: '0 auto',
    padding: '4px',
    background: 'linear-gradient(135deg, #00d2ff, #0055ff)'
  },
  profileImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50%'
  },
  aboutText: {
    color: '#cbd5e1',
    lineHeight: 1.7,
    fontSize: '14px'
  },
  counterGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '15px',
    marginTop: '10px'
  },
  counterCard: {
    background: '#0a111e',
    border: '1px solid #1e293b',
    padding: '20px 10px',
    borderRadius: '12px',
    textAlign: 'center'
  },
  counterNum: {
    color: '#00d2ff',
    fontSize: '24px',
    fontWeight: 800,
    margin: '0 0 5px 0'
  },
  counterLabel: {
    color: '#94a3b8',
    fontSize: '12px',
    margin: 0
  },
  timelineContainer: {
    position: 'relative',
    maxWidth: '900px',
    margin: '0 auto',
    paddingLeft: '30px'
  },
  timelineLine: {
    position: 'absolute',
    left: '8px',
    top: '15px',
    bottom: '15px',
    width: '2px',
    background: '#00d2ff'
  },
  timelineItem: {
    position: 'relative',
    marginBottom: '25px'
  },
  timelineDot: {
    position: 'absolute',
    left: '-30px',
    top: '20px',
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    background: '#050b14',
    border: '2px solid #00d2ff'
  },
  timelineCard: {
    background: '#0a111e',
    border: '1px solid #1e293b',
    borderRadius: '12px',
    padding: '25px'
  },
  eduTitle: {
    color: '#00d2ff',
    fontSize: '18px',
    margin: '0 0 5px 0',
    fontWeight: 700
  },
  eduSub: {
    color: '#ffffff',
    fontSize: '13px',
    fontWeight: 600,
    marginBottom: '10px'
  },
  eduDesc: {
    color: '#94a3b8',
    fontSize: '14px',
    lineHeight: 1.6,
    margin: 0
  },
  tagsFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px'
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '20px'
  },
  skillCategoryCard: {
    background: '#0a111e',
    border: '1px solid #1e293b',
    borderRadius: '14px',
    padding: '22px'
  },
  skillCategoryTitle: {
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 700,
    marginBottom: '15px'
  },
  skillsColumnFlex: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '8px'
  },
  toolsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '20px'
  },
  toolCard: {
    background: '#0a111e',
    border: '1px solid #1e293b',
    borderRadius: '12px',
    padding: '20px',
    textAlign: 'center'
  },
  toolCardTitle: {
    color: '#ffffff',
    fontSize: '15px',
    fontWeight: 700,
    marginBottom: '12px'
  },
  tagsFlexCenter: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    justifyContent: 'center'
  },
  projectMainCard: {
    background: '#0a111e',
    border: '1px solid #1e293b',
    borderRadius: '16px',
    padding: '30px'
  },
  projectHeaderRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    flexWrap: 'wrap',
    gap: '10px'
  },
  categoryBadge: {
    background: 'rgba(0, 210, 255, 0.1)',
    color: '#00d2ff',
    padding: '6px 16px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: 600,
    border: '1px solid rgba(0, 210, 255, 0.3)'
  },
  projectTopGrid: {
    display: 'grid',
    gridTemplateColumns: '220px 1fr',
    gap: '25px',
    marginBottom: '25px'
  },
  projectImgBox: {
    width: '100%',
    height: '140px',
    borderRadius: '10px',
    overflow: 'hidden',
    border: '1px solid #1e293b'
  },
  projectImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  projectInnerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '15px',
    background: '#050b14',
    padding: '20px',
    borderRadius: '12px',
    marginBottom: '20px'
  },
  innerBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  innerBoxTitle: {
    color: '#00d2ff',
    fontSize: '13px',
    fontWeight: 700,
    margin: 0
  },
  innerBoxP: {
    color: '#94a3b8',
    fontSize: '13px',
    lineHeight: 1.5,
    margin: 0
  },
  innerList: {
    color: '#94a3b8',
    fontSize: '13px',
    paddingLeft: '18px',
    margin: 0,
    lineHeight: 1.6
  },
  projectFooterRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '15px',
    borderTop: '1px solid #1e293b',
    flexWrap: 'wrap',
    gap: '10px'
  },
  githubLink: {
    color: '#00d2ff',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: 600
  },
  certGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px'
  },
  certCard: {
    background: '#0a111e',
    border: '1px solid #1e293b',
    borderRadius: '14px',
    padding: '25px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  certTitle: {
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 700,
    margin: '0 0 8px 0'
  },
  certIssuer: {
    color: '#00d2ff',
    fontSize: '13px',
    fontWeight: 600,
    margin: 0
  },
  careerStatementCard: {
    background: '#0a111e',
    border: '1px solid #1e293b',
    borderRadius: '16px',
    padding: '35px',
    maxWidth: '900px',
    margin: '0 auto',
    textAlign: 'center'
  },
  careerTitle: {
    color: '#00d2ff',
    fontSize: '22px',
    fontWeight: 800,
    marginBottom: '15px'
  },
  careerDesc: {
    color: '#cbd5e1',
    fontSize: '15px',
    lineHeight: 1.8,
    margin: 0
  },
  contactGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    maxWidth: '950px',
    margin: '0 auto'
  },
  contactInfoCard: {
    background: '#0a111e',
    border: '1px solid #1e293b',
    borderRadius: '16px',
    padding: '30px'
  },
  contactDetailBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '20px'
  },
  contactIconCircle: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'rgba(0, 210, 255, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px'
  },
  contactFormCard: {
    background: '#0a111e',
    border: '1px solid #1e293b',
    borderRadius: '16px',
    padding: '30px'
  },
  inputField: {
    background: '#050b14',
    border: '1px solid #1e293b',
    borderRadius: '8px',
    padding: '12px 15px',
    color: '#ffffff',
    fontSize: '14px',
    width: '100%',
    boxSizing: 'border-box'
  },
  textAreaField: {
    background: '#050b14',
    border: '1px solid #1e293b',
    borderRadius: '8px',
    padding: '12px 15px',
    color: '#ffffff',
    fontSize: '14px',
    width: '100%',
    boxSizing: 'border-box',
    resize: 'vertical'
  },
  socialIconsRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    marginTop: '50px'
  },
  footer: {
    textAlign: 'center',
    padding: '30px',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    marginTop: '40px'
  }
};

export default App;