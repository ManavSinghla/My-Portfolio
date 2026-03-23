import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { HiDownload, HiArrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1"></div>
        <div className="hero__orb hero__orb--2"></div>
        <div className="hero__orb hero__orb--3"></div>
        <div className="hero__grid"></div>
      </div>

      <div className="container hero__content">
        <motion.div
          className="hero__text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className="hero__badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="hero__badge-dot"></span>
            Available for opportunities
          </motion.div>

          <h1 className="hero__title">
            Hi, I'm <span className="hero__name">Neha Singh</span>
          </h1>

          <p className="hero__role">
            <span className="hero__role-highlight">CSE Student</span>
            <span className="hero__role-divider">•</span>
            <span className="hero__role-highlight">Full Stack Developer</span>
          </p>

          <p className="hero__description">
            B.Tech Computer Science student at Lovely Professional University with
            expertise in C++, React, Node.js, and database technologies. Passionate
            about building scalable web applications and solving real-world problems.
          </p>

          <div className="hero__cta">
            <Link to="projects" smooth duration={500} offset={-80}>
              <button className="btn btn-primary">
                View Projects <HiArrowRight />
              </button>
            </Link>
            <Link to="contact" smooth duration={500} offset={-80}>
              <button className="btn btn-outline">
                Contact Me
              </button>
            </Link>
          </div>

          <div className="hero__socials">
            <a href="https://www.linkedin.com/in/nehasingh2810/" target="_blank" rel="noopener noreferrer" className="hero__social" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/NehaSingh2810" target="_blank" rel="noopener noreferrer" className="hero__social" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="mailto:n2810singh@gmail.com" className="hero__social" aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="tel:+917027320801" className="hero__social" aria-label="Phone">
              <FaPhoneAlt />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="hero__avatar-ring">
            <div className="hero__avatar">
              <span className="hero__avatar-text">NS</span>
            </div>
          </div>
          <div className="hero__float-card hero__float-card--1">
            <span>🎓</span> CGPA 7.2
          </div>
          <div className="hero__float-card hero__float-card--2">
            <span>💡</span> Patent Holder
          </div>
          <div className="hero__float-card hero__float-card--3">
            <span>🏆</span> NPTEL Elite
          </div>
        </motion.div>
      </div>
    </section>
  );
}
