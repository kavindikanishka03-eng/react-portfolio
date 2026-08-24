import React, { useState } from 'react';
import { 
  Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Download, Code, Database, Globe, Cpu, Layout, Server, Award, ChevronRight, Menu, X 
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "CRM System Dashboard",
      description: "A comprehensive Customer Relationship Management dashboard built to streamline business workflows, track leads, and analyze sales performance in real-time.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/Kavindi-Sandaruwani/CRM-System",
      live: "https://kavindi-sandaruwani.github.io/CRM-System/",
      image: "./images/crm-dashboard.png"
    },
    {
      title: "AcademiCore - Student Management System",
      description: "A robust full-stack web application designed for educational institutions to manage student records, course enrollments, and academic performance tracking efficiently.",
      tech: ["PHP", "MySQL", "Bootstrap", "JavaScript", "HTML/CSS"],
      github: "https://github.com/Kavindi-Sandaruwani/AcademiCore-Student-Management-System",
      live: "https://kavindi-sandaruwani.github.io/AcademiCore-Student-Management-System/",
      image: "./images/academicore-login.jpg"
    },
    {
      title: "SmartMart POS System",
      description: "A desktop Point of Sale (POS) application built for retail stores, featuring automated inventory tracking, billing management, and sales reporting.",
      tech: ["Java", "JavaFX", "MySQL", "JDBC"],
      github: "https://github.com/Kavindi-Sandaruwani/SmartMart-POS-System",
      live: "https://kavindi-sandaruwani.github.io/SmartMart-POS-System/",
      image: "./images/smartmart-pos.jpg"
    },
    {
      title: "HR Analytics Dashboard",
      description: "An interactive Power BI dashboard visualizing key human resource metrics including employee attrition, performance trends, and workforce demographics.",
      tech: ["Power BI", "DAX", "Data Modeling", "Excel"],
      github: "https://github.com/Kavindi-Sandaruwani/HR-Analytics-Dashboard",
      live: "https://kavindi-sandaruwani.github.io/HR-Analytics-Dashboard/",
      image: "./images/HR-Analytics-Dashboard.jpg"
    }
  ];

  const skills = {
    "Programming Languages": ["Java", "Python", "JavaScript", "PHP", "C++", "SQL"],
    "Web Technologies": ["React", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Node.js", "Express.js"],
    "Databases & Tools": ["MySQL", "MongoDB", "Git & GitHub", "Visual Studio Code", "Power BI", "Figma"]
  };

  const certifications = [
    { name: "Full Stack Web Development", issuer: "University of Moratuwa (CODL)", year: "2023" },
    { name: "Python for Beginners", issuer: "University of Moratuwa (CODL)", year: "2023" },
    { name: "Java Programming", issuer: "HackerRank", year: "2023" },
    { name: "SQL (Basic & Intermediate)", issuer: "HackerRank", year: "2023" }
  ];

  return (
    <div className="min-h-screen bg-[#0b0f17] text-gray-200 font-sans selection:bg-cyan-500 selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0b0f17]/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Kavindi.dev
            </span>
            
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#certifications" className="hover:text-cyan-400 transition-colors">Certifications</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            </div>

            <button 
              className="md:hidden text-gray-400 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#111827] border-b border-gray-800 px-4 pt-2 pb-4 space-y-2">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-cyan-400">About</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-cyan-400">Skills</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-cyan-400">Projects</a>
            <a href="#certifications" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-cyan-400">Certifications</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-cyan-400">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero / About Section */}
      <section id="about" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-48 h-48 md:w-64 md:h-64 relative flex-shrink-0">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 blur-lg opacity-40 animate-pulse"></div>
            <img 
              src="./images/profile.jpg" 
              alt="Kavindi Sandaruwani" 
              className="w-full h-full object-cover rounded-full relative z-10 border-2 border-cyan-500/50 shadow-2xl"
            />
          </div>

          <div className="flex-1 text-center md:text-left space-y-4">
            <h2 className="text-cyan-400 font-medium tracking-wide">Hello, I'm</h2>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Kavindi Sandaruwani
            </h1>
            <h3 className="text-xl sm:text-2xl text-gray-400 font-medium">
              Software Engineering Undergraduate
            </h3>
            <p className="text-gray-400 max-w-2xl leading-relaxed">
              Passionate IT undergraduate specializing in full-stack web development, database management, and software solution architecture. Adept at building responsive, user-friendly applications using modern technologies.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                Get In Touch <ChevronRight size={18} />
              </a>
              <a 
                href="https://github.com/Kavindi-Sandaruwani" 
                target="_blank" 
                rel="noreferrer" 
                className="px-6 py-3 rounded-lg bg-gray-800 border border-gray-700 hover:border-cyan-500/50 text-gray-200 transition-colors flex items-center gap-2"
              >
                <Github size={18} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-[#0e1420] border-y border-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Technical Skills</h2>
            <div className="w-16 h-1 bg-cyan-500 mx-auto mt-2 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], idx) => (
              <div key={idx} className="bg-[#131b2e] p-6 rounded-xl border border-gray-800 hover:border-cyan-500/30 transition-colors">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                  {idx === 0 && <Code size={20} />}
                  {idx === 1 && <Globe size={20} />}
                  {idx === 2 && <Database size={20} />}
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, sIdx) => (
                    <span key={sIdx} className="bg-gray-800/80 text-gray-300 text-sm px-3 py-1.5 rounded-md border border-gray-700/50">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto mt-2 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-[#131b2e] rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-500/40 transition-all flex flex-col">
              <div className="h-48 overflow-hidden bg-gray-900 border-b border-gray-800">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, tIdx) => (
                      <span key={tIdx} className="text-xs text-cyan-400 bg-cyan-950/40 px-2.5 py-1 rounded border border-cyan-800/50">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 border-t border-gray-800 pt-4">
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-cyan-400 transition-colors">
                      <Github size={16} /> Code
                    </a>
                    <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-cyan-400 transition-colors">
                      <ExternalLink size={16} /> Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-[#0e1420] border-y border-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Certifications</h2>
            <div className="w-16 h-1 bg-cyan-500 mx-auto mt-2 rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-[#131b2e] p-6 rounded-xl border border-gray-800 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-cyan-950/60 flex items-center justify-center text-cyan-400 mb-4 border border-cyan-800/40">
                    <Award size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                  <p className="text-gray-400 text-sm">{cert.issuer}</p>
                </div>
                <span className="text-xs text-cyan-400 font-medium mt-4 block">{cert.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto mt-2 rounded-full"></div>
        </div>

        <div className="max-w-2xl mx-auto bg-[#131b2e] p-8 rounded-xl border border-gray-800 text-center space-y-6">
          <p className="text-gray-300">
            I am currently looking for internship opportunities and collaborative projects. Feel free to reach out to me!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-4">
            <a href="mailto:kavindi@example.com" className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors">
              <Mail className="text-cyan-400" size={20} />
              <span>Email Me</span>
            </a>
            <a href="https://linkedin.com/in/kavindi-sandaruwani" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors">
              <Linkedin className="text-cyan-400" size={20} />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Kavindi Sandaruwani. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;