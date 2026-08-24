import React, { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // GitHub Pages image path helper
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
    },
    {
      id: "02",
      title: "AcademiCore - Student Management System",
      description: "A robust full-stack web application designed for educational institutions to manage student records, course enrollments, and academic performance tracking efficiently.",
      image: "images/academicore-login.jpg",
      problem: "Manual record keeping causes data inaccuracy and delays in tracking student performance.",
      solution: "Automated student management portal with real-time reporting.",
      features: ["Student registration & profiling", "Course enrollment tracking", "Gradebook management"],
      baSkills: ["Data Modeling", "System Design"],
      role: "Full-Stack Development",
      github: "https://github.com/Kavindi-Sandaruwani/AcademiCore-Student-Management-System"
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
    <div className="min-h-screen bg-[#070b12] text-gray-200 font-sans selection:bg-cyan-500 selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#070b12]/90 backdrop-blur-md border-b border-cyan-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between h-20 items-center">
            <span className="text-xl font-bold tracking-widest text-cyan-400 uppercase">
              Kavindi Sandaruwani
            </span>
            
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
              <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
              <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">BA Skills</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#certifications" className="hover:text-cyan-400 transition-colors">Certifications</a>
              <a href="#contact" className="px-5 py-2 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section id="about" className="pt-36 pb-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">About Me</h2>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Profile Card */}
          <div className="md:col-span-4 bg-[#0e1626] border border-cyan-900/40 rounded-2xl p-8 text-center flex flex-col items-center">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-cyan-400 mb-6 shadow-lg shadow-cyan-500/20">
              <img 
                src={getImgPath('images/profile.jpg')} 
                alt="Kavindi Sandaruwani" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback if image not found
                  e.target.onerror = null; 
                  e.target.src = 'https://via.placeholder.com/160?text=Kavindi';
                }}
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Aspiring Business Analyst</h3>
            <p className="text-xs text-gray-400">Bridging Business Goals with Technology Solutions</p>
          </div>

          {/* Description & Stats */}
          <div className="md:col-span-8 space-y-8">
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p>
                I am <span className="font-semibold text-white">Kavindi Sandaruwani</span>, an Information and Communication Technology undergraduate at the University of Colombo. My journey combines a passion for technology with a strong interest in problem-solving, creativity, and continuous learning. I am interested in Business Analysis, Software Development, Data Analytics, and UI/UX design, with hands-on experience in developing practical digital solutions.
              </p>
              <p>
                I am passionate about using technology to solve real-world problems and creating user-focused, efficient solutions. Through my academic projects and continuous learning, I am developing my skills in software development, database management, data visualization, and business analysis.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#0e1626] border border-cyan-900/40 rounded-xl p-5 text-center">
                <h4 className="text-2xl font-bold text-cyan-400">3rd Year</h4>
                <p className="text-xs text-gray-400 mt-1">ICT Undergraduate</p>
              </div>
              <div className="bg-[#0e1626] border border-cyan-900/40 rounded-xl p-5 text-center">
                <h4 className="text-2xl font-bold text-cyan-400">4+</h4>
                <p className="text-xs text-gray-400 mt-1">Practical Projects</p>
              </div>
              <div className="bg-[#0e1626] border border-cyan-900/40 rounded-xl p-5 text-center">
                <h4 className="text-2xl font-bold text-cyan-400">6+</h4>
                <p className="text-xs text-gray-400 mt-1">Certifications</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">Projects</h2>

        <div className="space-y-12">
          {projects.map((proj) => (
            <div key={proj.id} className="bg-[#0c1220] border border-cyan-500/30 rounded-2xl p-8 relative">
              
              {/* Top Header */}
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-cyan-400 flex items-center gap-2">
                  🚀 {proj.id}. {proj.title}
                </h3>
                {proj.category && (
                  <span className="bg-gray-800/80 text-gray-300 text-xs px-4 py-2 rounded-lg border border-gray-700">
                    {proj.category}
                  </span>
                )}
              </div>

              {/* Main Content Grid */}
              <div className="grid md:grid-cols-12 gap-8 mb-8">
                {/* Image */}
                <div className="md:col-span-5 rounded-xl overflow-hidden border border-cyan-900/50 bg-[#070b12] flex items-center justify-center">
                  <img 
                    src={getImgPath(proj.image)} 
                    alt={proj.title} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/400x250?text=Project+Image';
                    }}
                  />
                </div>

                {/* Description & Details */}
                <div className="md:col-span-7 space-y-6">
                  <p className="text-gray-300 text-sm leading-relaxed">{proj.description}</p>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-[#070b12] p-4 rounded-xl border border-cyan-900/30">
                      <h5 className="text-cyan-400 font-semibold text-xs mb-2 text-center">Problem Identified</h5>
                      <p className="text-xs text-gray-400 leading-relaxed text-center">{proj.problem}</p>
                    </div>

                    <div className="bg-[#070b12] p-4 rounded-xl border border-cyan-900/30">
                      <h5 className="text-cyan-400 font-semibold text-xs mb-2 text-center">Proposed Solution</h5>
                      <p className="text-xs text-gray-400 leading-relaxed text-center">{proj.solution}</p>
                    </div>

                    <div className="bg-[#070b12] p-4 rounded-xl border border-cyan-900/30">
                      <h5 className="text-cyan-400 font-semibold text-xs mb-2 text-center">Key Features</h5>
                      <ul className="text-xs text-gray-400 space-y-1 list-disc list-inside">
                        {proj.features.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {proj.baSkills && (
                    <div className="bg-[#070b12] p-4 rounded-xl border border-cyan-900/30">
                      <h5 className="text-cyan-400 font-semibold text-xs mb-3 text-center">BA Skills Demonstrated</h5>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {proj.baSkills.map((s, idx) => (
                          <span key={idx} className="border border-cyan-500/50 text-cyan-400 text-xs px-3 py-1 rounded-full">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Footer */}
              <div className="flex justify-between items-center pt-4 border-t border-cyan-900/30 text-xs">
                <span className="text-gray-400">
                  Role: <span className="text-cyan-400 font-medium">{proj.role}</span>
                </span>
                <a 
                  href={proj.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-cyan-400 hover:underline flex items-center gap-1 font-medium"
                >
                  View Project on GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">Certifications</h2>

        <div className="space-y-6 max-w-3xl mx-auto">
          {certifications.map((cert, idx) => (
            <div key={idx} className="bg-[#0c1220] border border-cyan-500/30 rounded-2xl p-8 text-center space-y-4">
              <h3 className="text-xl font-bold text-cyan-400">{cert.title}</h3>
              <p className="text-sm font-semibold text-white">{cert.issuer}</p>
              <div className="flex flex-wrap gap-3 justify-center pt-2">
                {cert.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="border border-cyan-500/40 text-cyan-400 text-xs px-4 py-1.5 rounded-full bg-cyan-950/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;