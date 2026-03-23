import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: 'Smart Waste Collection Routing System',
    period: "May '25 - Jul '25",
    description: 'Designed and implemented route optimization using Minimum Spanning Tree (MST) algorithm for municipal waste collection.',
    highlights: [
      'Reduced total travel distance by ~35% and improved collection efficiency',
      'Integrated Google Maps API for real-time route visualization, increasing accuracy by ~40%',
      'Built responsive UI with Tailwind CSS and JavaScript, enhancing cross-device usability by ~30%',
      'Enabled route simulation and performance comparison, contributing to ~25% fuel savings',
    ],
    tags: ['MST Algorithm', 'Google Maps API', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/NehaSingh2810',
    color: '#22d3ee',
  },
  {
    title: 'Doc Match — Resume Screening Portal',
    period: "Jan '25 - Apr '25",
    description: 'Built an automated resume screening system with OCR-based document parsing and intelligent keyword matching.',
    highlights: [
      'Automated resume screening using Tesseract OCR for accurate PDF/DOC parsing',
      'Implemented keyword-based scoring algorithms to match resumes with job roles',
      'Developed secure Admin & Candidate login system using PHP sessions with role-based access',
      'Integrated automated feedback and email notifications using PHP Mailer',
    ],
    tags: ['Tesseract OCR', 'PHP', 'MySQL', 'PHP Mailer'],
    github: 'https://github.com/NehaSingh2810',
    color: '#8b5cf6',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="orb orb-2"></div>
      <div className="container">
        <div className="section-header">
          <motion.span
            className="section-label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            My Work
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Real-world projects that showcase my skills and impact
          </motion.p>
        </div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="projects__card glass-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <div className="projects__card-header">
                <div
                  className="projects__card-accent"
                  style={{ background: `linear-gradient(135deg, ${project.color}, transparent)` }}
                ></div>
                <div className="projects__card-meta">
                  <h3 className="projects__card-title">{project.title}</h3>
                  <span className="projects__card-period">{project.period}</span>
                </div>
              </div>

              <p className="projects__card-desc">{project.description}</p>

              <ul className="projects__card-highlights">
                {project.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>

              <div className="projects__card-footer">
                <div className="projects__card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="projects__card-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="projects__card-link">
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
