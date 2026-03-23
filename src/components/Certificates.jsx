import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';
import './Certificates.css';

const certificates = [
  {
    title: 'ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM',
    issuer: 'Infosys',
    date: "Aug '25",
    color: '#6366f1',
  },
  {
    title: 'Cloud Computing',
    issuer: 'NPTEL',
    date: "Apr '25",
    color: '#22d3ee',
  },
  {
    title: 'Responsive Web Design',
    issuer: 'Free Code Camp',
    date: "Oct '23",
    color: '#34d399',
  },
  {
    title: 'Java Programming',
    issuer: 'Alison',
    date: "Mar '23",
    color: '#fbbf24',
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="section certificates">
      <div className="container">
        <div className="section-header">
          <motion.span
            className="section-label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Certifications
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Certificates
          </motion.h2>
        </div>

        <div className="certificates__grid">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              className="certificates__card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="certificates__icon" style={{ background: `${cert.color}20`, color: cert.color }}>
                <FaCertificate />
              </div>
              <h3 className="certificates__title">{cert.title}</h3>
              <div className="certificates__meta">
                <span className="certificates__issuer">{cert.issuer}</span>
                <span className="certificates__date">{cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
