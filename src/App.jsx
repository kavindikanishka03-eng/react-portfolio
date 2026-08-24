import React, { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Vite relative asset path helper
  const getImgPath = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

  const projects = [
    {
      id: "01",
      title: "CRM System",
      category: "Business Management / CRM System",
      description: "A Customer Relationship Management (CRM) system designed to help organizations manage customers, leads, tasks, invoices, and business activities through a centralized platform.",
      image: "images/crm-dashboard.png",
      problem: "Businesses manage customer and sales information across disconnected methods, making it difficult to track leads, tasks, and sales activities.",
      solution: "A centralized CRM system that organizes customer information and sales workflows into one unified platform.",
      features: [
        "User authentication & role management",
        "Lead & customer management",
        "Kanban-based sales pipeline",
        "Invoicing & due-date tracking"
      ],
      baSkills: ["Requirement Identification", "Workflow Analysis", "Process Understanding"],
      role: "Business Analysis & System Development",
      github: "https://github.com/Kavindi-Sandaruwani/CRM-System"
    }
  ];

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
    }
  ];

  return (
    <div style={{ backgroundColor: '#050a14', color: '#e2e8f0', fontFamily: 'sans-serif', minHeight: '100vh', margin: 0, padding: 0 }}>
      {/* Navbar */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'rgba(5, 10, 20, 0.95)',
        borderBottom: '1px solid rgba(6, 182, 212, 0.2)',
        backdropFilter: 'blur(8px)',
        zIndex: 1000,
        padding: '0 40px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px' }}>
          <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#00d8ff', letterSpacing: '2px', textTransform: 'uppercase' }}>
            Kavindi Sandaruwani
          </span>
          <div style={{ display: 'flex', gap: '25px', fontSize: '14px', alignItems: 'center' }}>
            <a href="#about" style={{ color: '#e2e8f0', textDecoration: 'none' }}>About</a>
            <a href="#projects" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Projects</a>
            <a href="#certifications" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Certifications</a>
            <a href="#contact" style={{
              color: '#00d8ff',
              border: '1px solid #00d8ff',
              padding: '6px 18px',
              borderRadius: '20px',
              textDecoration: 'none'
            }}>Contact</a>
          </div>
        </div>
      </nav>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '100px 20px 60px 20px' }}>
        
        {/* About Section */}
        <section id="about" style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '36px', color: '#00d8ff', textAlign: 'center', marginBottom: '40px', fontWeight: 'bold' }}>
            About Me
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '40px', alignItems: 'start' }}>
            
            {/* Left Card with Profile Photo */}
            <div style={{
              backgroundColor: '#0a1120',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              borderRadius: '16px',
              padding: '30px 20px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <div style={{
                width: '160px',
                height: '160px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '4px solid #00d8ff',
                marginBottom: '20px',
                boxShadow: '0 0 20px rgba(0, 216, 255, 0.3)'
              }}>
                <img 
                  src={getImgPath('images/profile.jpg')} 
                  alt="Kavindi Sandaruwani" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/160?text=Kavindi';
                  }}
                />
              </div>
              <h3 style={{ color: '#ffffff', fontSize: '18px', fontWeight: 'bold', margin: '0 0 8px 0' }}>
                Aspiring Business Analyst
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '12px', margin: 0 }}>
                Bridging Business Goals with Technology Solutions
              </p>
            </div>

            {/* Right Side Text & Stats */}
            <div>
              <div style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: '1.7', marginBottom: '30px' }}>
                <p style={{ marginBottom: '16px' }}>
                  I am <strong style={{ color: '#ffffff' }}>Kavindi Sandaruwani</strong>, an Information and Communication Technology undergraduate at the University of Colombo. My journey combines a passion for technology with a strong interest in problem-solving, creativity, and continuous learning.
                </p>
                <p>
                  I am interested in Business Analysis, Software Development, Data Analytics, and UI/UX design, with hands-on experience in developing practical digital solutions.
                </p>
              </div>

              {/* Stats Box Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
                <div style={{ backgroundColor: '#0a1120', border: '1px solid rgba(6, 182, 212, 0.2)', padding: '20px', borderRadius: '12px', textAlign: 'center' }}>
                  <div style={{ color: '#00d8ff', fontSize: '24px', fontWeight: 'bold' }}>3rd Year</div>
                  <div style={{ color: '#94a3b8', fontSize: '11px', marginTop: '4px' }}>ICT Undergraduate</div>
                </div>
                <div style={{ backgroundColor: '#0a1120', border: '1px solid rgba(6, 182, 212, 0.2)', padding: '20px', borderRadius: '12px', textAlign: 'center' }}>
                  <div style={{ color: '#00d8ff', fontSize: '24px', fontWeight: 'bold' }}>4+</div>
                  <div style={{ color: '#94a3b8', fontSize: '11px', marginTop: '4px' }}>Practical Projects</div>
                </div>
                <div style={{ backgroundColor: '#0a1120', border: '1px solid rgba(6, 182, 212, 0.2)', padding: '20px', borderRadius: '12px', textAlign: 'center' }}>
                  <div style={{ color: '#00d8ff', fontSize: '24px', fontWeight: 'bold' }}>6+</div>
                  <div style={{ color: '#94a3b8', fontSize: '11px', marginTop: '4px' }}>Certifications</div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '36px', color: '#00d8ff', textAlign: 'center', marginBottom: '40px', fontWeight: 'bold' }}>
            Projects
          </h2>

          {projects.map((proj) => (
            <div key={proj.id} style={{
              backgroundColor: '#0a1120',
              border: '1px solid rgba(6, 182, 212, 0.4)',
              borderRadius: '16px',
              padding: '25px',
              marginBottom: '30px'
            }}>
              {/* Card Title Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h3 style={{ color: '#00d8ff', fontSize: '20px', margin: 0, fontWeight: 'bold' }}>
                  🚀 {proj.id}. {proj.title}
                </h3>
                <span style={{ backgroundColor: '#1e293b', color: '#cbd5e1', fontSize: '11px', padding: '5px 12px', borderRadius: '6px' }}>
                  {proj.category}
                </span>
              </div>

              {/* Main Grid Layout */}
              <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '25px', marginBottom: '20px' }}>
                {/* Project Image Box */}
                <div style={{
                  borderRadius: '10px',
                  overflow: 'hidden',
                  border: '1px solid rgba(6, 182, 212, 0.2)',
                  backgroundColor: '#050a14',
                  height: '180px'
                }}>
                  <img 
                    src={getImgPath(proj.image)} 
                    alt={proj.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/300x180?text=CRM+Dashboard';
                    }}
                  />
                </div>

                {/* Details */}
                <div>
                  <p style={{ color: '#cbd5e1', fontSize: '13px', lineHeight: '1.6', marginTop: 0, marginBottom: '20px' }}>
                    {proj.description}
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
                    <div style={{ backgroundColor: '#050a14', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <h5 style={{ color: '#00d8ff', fontSize: '12px', textAlign: 'center', margin: '0 0 6px 0' }}>Problem Identified</h5>
                      <p style={{ color: '#94a3b8', fontSize: '11px', textAlign: 'center', margin: 0, lineHeight: '1.4' }}>{proj.problem}</p>
                    </div>

                    <div style={{ backgroundColor: '#050a14', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <h5 style={{ color: '#00d8ff', fontSize: '12px', textAlign: 'center', margin: '0 0 6px 0' }}>Proposed Solution</h5>
                      <p style={{ color: '#94a3b8', fontSize: '11px', textAlign: 'center', margin: 0, lineHeight: '1.4' }}>{proj.solution}</p>
                    </div>

                    <div style={{ backgroundColor: '#050a14', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <h5 style={{ color: '#00d8ff', fontSize: '12px', textAlign: 'center', margin: '0 0 6px 0' }}>Key Features</h5>
                      <ul style={{ color: '#94a3b8', fontSize: '10px', margin: 0, paddingLeft: '15px', lineHeight: '1.4' }}>
                        {proj.features.map((f, i) => <li key={i}>{f}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Footer */}
              <div style={{
                display: 'flex',
                justify: 'space-between',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                paddingTop: '15px',
                fontSize: '12px'
              }}>
                <span style={{ color: '#94a3b8' }}>Role: <strong style={{ color: '#00d8ff' }}>{proj.role}</strong></span>
                <a href={proj.github} target="_blank" rel="noreferrer" style={{ color: '#00d8ff', textDecoration: 'none' }}>
                  View Project on GitHub →
                </a>
              </div>
            </div>
          ))}
        </section>

        {/* Certifications Section */}
        <section id="certifications">
          <h2 style={{ fontSize: '36px', color: '#00d8ff', textAlign: 'center', marginBottom: '40px', fontWeight: 'bold' }}>
            Certifications
          </h2>

          <div style={{ maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {certifications.map((cert, idx) => (
              <div key={idx} style={{
                backgroundColor: '#0a1120',
                border: '1px solid rgba(6, 182, 212, 0.4)',
                borderRadius: '16px',
                padding: '25px',
                textAlign: 'center'
              }}>
                <h3 style={{ color: '#00d8ff', fontSize: '18px', margin: '0 0 8px 0' }}>{cert.title}</h3>
                <p style={{ color: '#ffffff', fontSize: '13px', fontWeight: 'bold', margin: '0 0 15px 0' }}>{cert.issuer}</p>
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  {cert.tags.map((tag, tIdx) => (
                    <span key={tIdx} style={{
                      border: '1px solid #00d8ff',
                      color: '#00d8ff',
                      fontSize: '11px',
                      padding: '4px 14px',
                      borderRadius: '15px',
                      backgroundColor: 'rgba(0, 216, 255, 0.05)'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;