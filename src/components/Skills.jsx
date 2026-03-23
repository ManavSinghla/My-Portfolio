import { motion } from 'framer-motion';
import { FaCode, FaLayerGroup, FaTools, FaHeart } from 'react-icons/fa';
import './Skills.css';

const skillCategories = [
  {
    title: 'Languages',
    icon: <FaCode />,
    color: '#6366f1',
    skills: ['C++', 'C Programming', 'SQL', 'Java'],
  },
  {
    title: 'Frameworks',
    icon: <FaLayerGroup />,
    color: '#22d3ee',
    skills: ['HTML & CSS', 'Node.js', 'React'],
  },
  {
    title: 'Tools & Platforms',
    icon: <FaTools />,
    color: '#34d399',
    skills: ['MySQL', 'MongoDB', 'VS Code', 'HackerRank'],
  },
  {
    title: 'Soft Skills',
    icon: <FaHeart />,
    color: '#fb7185',
    skills: ['Problem-Solving', 'Adaptability', 'Emotional Intelligence'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="orb orb-1"></div>
      <div className="container">
        <div className="section-header">
          <motion.span
            className="section-label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            My Expertise
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Skills & Technologies
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Technologies and tools I work with to build impactful solutions
          </motion.p>
        </div>

        <div className="skills__grid">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="skills__card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              <div
                className="skills__card-icon"
                style={{ background: `${cat.color}20`, color: cat.color }}
              >
                {cat.icon}
              </div>
              <h3 className="skills__card-title">{cat.title}</h3>
              <div className="skills__tags">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skills__tag" style={{ borderColor: `${cat.color}40` }}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
