import { FaLinkedinIn, FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__content">
        <div className="footer__brand">
          <span className="footer__logo">
            <span className="footer__logo-bracket">&lt;</span>
            Neha
            <span className="footer__logo-dot">.</span>
            Singh
            <span className="footer__logo-bracket">/&gt;</span>
          </span>
        </div>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/nehasingh2810/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/NehaSingh2810" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="mailto:n2810singh@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>

        <p className="footer__copy">
          © {new Date().getFullYear()} Neha Singh. Made with <FaHeart className="footer__heart" /> All rights reserved.
        </p>
      </div>
    </footer>
  );
}
