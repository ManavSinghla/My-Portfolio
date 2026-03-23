import { motion } from 'framer-motion';
import { FaCode, FaProjectDiagram, FaCertificate, FaGraduationCap } from 'react-icons/fa';
import './About.css';

const stats = [
  { icon: <FaCode />, value: '6+', label: 'Languages', color: '#6366f1' },
  { icon: <FaProjectDiagram />, value: '2+', label: 'Projects', color: '#22d3ee' },
  { icon: <FaCertificate />, value: '4', label: 'Certificates', color: '#34d399' },
  { icon: <FaGraduationCap />, value: '7.2', label: 'CGPA', color: '#fbbf24' },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-header">
          <motion.span
            className="section-label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Get To Know Me
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            About Me
          </motion.h2>
        </div>

        <div className="about__grid">
          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>
              I'm <strong>Neha Singh</strong>, a passionate Computer Science and Engineering
              student at <strong>Lovely Professional University</strong>, Punjab. I love building
              web applications that solve real-world problems and am constantly expanding my
              skillset across the full stack.
            </p>
            <p>
              From designing route optimization systems using <strong>Minimum Spanning Tree algorithms</strong> to
              building automated resume screening portals with <strong>OCR technology</strong>, I enjoy tackling
              complex challenges. I've also contributed to innovation as a co-inventor of a
              <strong> patented AI-Driven Smart Classroom System</strong>.
            </p>
            <p>
              Beyond coding, I believe in giving back — I've volunteered with community welfare
              organizations and enjoy collaborating in hackathons. I'm always eager to learn,
              adapt, and build impactful solutions.
            </p>
          </motion.div>

          <motion.div
            className="about__stats"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="about__stat glass-card"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="about__stat-icon" style={{ color: stat.color }}>
                  {stat.icon}
                </div>
                <div className="about__stat-value">{stat.value}</div>
                <div className="about__stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
