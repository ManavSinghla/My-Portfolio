import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import './Education.css';

const education = [
  {
    institution: 'Lovely Professional University',
    degree: 'Bachelor of Technology - Computer Science and Engineering',
    score: 'CGPA: 7.2',
    location: 'Punjab, India',
    period: "Since Aug '23",
    color: '#6366f1',
  },
  {
    institution: 'D.A.V Police Public School',
    degree: 'Intermediate (12th)',
    score: 'Percentage: 80%',
    location: 'Panipat, Haryana',
    period: "Apr '22 - Mar '23",
    color: '#22d3ee',
  },
  {
    institution: 'DAV Police Public School',
    degree: 'Matriculation (10th)',
    score: 'Percentage: 92.2%',
    location: 'Panipat, Haryana',
    period: "Apr '20 - Mar '21",
    color: '#34d399',
  },
];

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <div className="section-header">
          <motion.span
            className="section-label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Academic Background
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Education
          </motion.h2>
        </div>

        <div className="education__timeline">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution + edu.degree}
              className="education__item"
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <div className="education__dot" style={{ background: edu.color }}></div>
              <div className="education__card glass-card">
                <div className="education__card-header">
                  <div className="education__icon" style={{ background: `${edu.color}20`, color: edu.color }}>
                    <FaGraduationCap />
                  </div>
                  <div>
                    <h3 className="education__institution">{edu.institution}</h3>
                    <p className="education__degree">{edu.degree}</p>
                  </div>
                </div>
                <div className="education__details">
                  <span className="education__score" style={{ color: edu.color }}>{edu.score}</span>
                  <span className="education__meta">
                    <FaMapMarkerAlt /> {edu.location}
                  </span>
                  <span className="education__meta">
                    <FaCalendarAlt /> {edu.period}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
