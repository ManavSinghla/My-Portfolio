import { motion } from 'framer-motion';
import { FaTrophy, FaLightbulb } from 'react-icons/fa';
import './Achievements.css';

const achievements = [
  {
    icon: <FaTrophy />,
    title: 'NPTEL Elite Badge — Cloud Computing',
    description: 'Earned Elite Badge in NPTEL Cloud Computing certification, showcasing proficiency in cloud infrastructure, virtualization, and service models (IaaS, PaaS, SaaS).',
    color: '#fbbf24',
  },
  {
    icon: <FaLightbulb />,
    title: 'Patent Filed — "Smart Class+ — AI-Driven Smart Classroom System"',
    description: 'Filed as an official invention disclosure with Lovely Professional University. Developed an AI–Blockchain–IoT–AR enabled smart classroom system with secure attendance and adaptive learning features. Contributed as a core inventor in building a secure and intelligent digital classroom ecosystem.',
    color: '#8b5cf6',
  },
];

const activities = [
  {
    title: 'Volunteered at Mata Chandrkanta Sewa Smriti Nyas',
    description: 'Supported community welfare initiatives and contributed to outreach programs for underprivileged and rural communities.',
    period: "Jul '24 - Mar '23",
  },
  {
    title: 'Participated in "THE CODE OFF DUTY" Hackathon',
    description: 'Collaborated in a team of 4 members to develop a project using HTML, CSS, and JavaScript.',
    period: '',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section achievements">
      <div className="orb orb-3"></div>
      <div className="container">
        <div className="section-header">
          <motion.span
            className="section-label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Recognition
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Achievements & Activities
          </motion.h2>
        </div>

        <div className="achievements__grid">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.title}
              className="achievements__card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <div className="achievements__card-icon" style={{ background: `${ach.color}20`, color: ach.color }}>
                {ach.icon}
              </div>
              <h3 className="achievements__card-title">{ach.title}</h3>
              <p className="achievements__card-desc">{ach.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="achievements__activities"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="achievements__activities-title">Extracurricular Activities</h3>
          <div className="achievements__activities-list">
            {activities.map((act, i) => (
              <div key={i} className="achievements__activity glass-card">
                <div className="achievements__activity-content">
                  <h4>{act.title}</h4>
                  <p>{act.description}</p>
                </div>
                {act.period && <span className="achievements__activity-period">{act.period}</span>}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
