import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaLinkedinIn, FaGithub, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const contactInfo = [
  { icon: <FaEnvelope />, label: 'Email', value: 'n2810singh@gmail.com', href: 'mailto:n2810singh@gmail.com' },
  { icon: <FaPhoneAlt />, label: 'Phone', value: '+91-7027320801', href: 'tel:+917027320801' },
  { icon: <FaLinkedinIn />, label: 'LinkedIn', value: 'linkedin.com/in/nehasingh2810', href: 'https://www.linkedin.com/in/nehasingh2810/' },
  { icon: <FaGithub />, label: 'GitHub', value: 'github.com/NehaSingh2810', href: 'https://github.com/NehaSingh2810' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:n2810singh@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.open(mailtoLink);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section contact">
      <div className="orb orb-1"></div>
      <div className="container">
        <div className="section-header">
          <motion.span
            className="section-label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Contact Me
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Have a project in mind or want to collaborate? Let's connect!
          </motion.p>
        </div>

        <div className="contact__grid">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {contactInfo.map((info) => (
              <a key={info.label} href={info.href} target="_blank" rel="noopener noreferrer" className="contact__info-item glass-card">
                <div className="contact__info-icon">{info.icon}</div>
                <div>
                  <p className="contact__info-label">{info.label}</p>
                  <p className="contact__info-value">{info.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            className="contact__form glass-card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact__form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                required
              />
            </div>
            <div className="contact__form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Your email"
                required
              />
            </div>
            <div className="contact__form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Your message..."
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary contact__submit">
              {submitted ? '✓ Message Sent!' : <><FaPaperPlane /> Send Message</>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
