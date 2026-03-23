import { motion } from 'framer-motion';
import { FaBook, FaCalendarAlt } from 'react-icons/fa';
import './Training.css';

export default function Training() {
  return (
    <section id="training" className="section training">
      <div className="container">
        <div className="section-header">
          <motion.span
            className="section-label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Learning Journey
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Training
          </motion.h2>
        </div>

        <motion.div
          className="training__card glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="training__card-header">
            <div className="training__icon">
              <FaBook />
            </div>
            <div>
              <h3 className="training__title">
                Mastering C++: From Object-Oriented Programming to Dynamic Programming
              </h3>
              <div className="training__meta">
                <span className="training__issuer">LPU</span>
                <span className="training__date">
                  <FaCalendarAlt /> Jun '25 - Jul '25
                </span>
              </div>
            </div>
          </div>

          <ul className="training__highlights">
            <li>Gained a strong understanding of OOP concepts including classes, inheritance, polymorphism, and abstraction</li>
            <li>Practiced memory management, pointers, dynamic allocation, and file handling</li>
            <li>Implemented STL-based structures: vectors, maps, sets, queues, and stacks</li>
            <li>Strengthened problem-solving skills by solving coding challenges with clean, modular programming practices</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
