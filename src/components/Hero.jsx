import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import DnaHelix from './DnaHelix';
import profilePic from '../assets/profile.jpg';
import './Hero.css';

const StatBadge = ({ value, label, delay }) => {
  const [count, setCount] = useState(0);
  const target = parseInt(value);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <motion.div 
      className="stat-badge"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <div className="stat-value">{count}{value.includes('+') ? '+' : ''}</div>
      <div className="stat-label">{label}</div>
    </motion.div>
  );
};

const Hero = () => {
  const expertise = [
    '#Biopolymers', '#Biomaterials', '#StemCells', 
    '#Nanobiotechnology', '#Nanoinformatics'
  ];

  return (
    <section className="hero">
      <div className="hero-dna-container">
        <DnaHelix opacity={0.15} animated={true} />
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow">BIOMEDICAL ENGINEERING & BIOTECHNOLOGY</span>
            <h1 className="hero-title">Dr. Tanvi Jain</h1>
            <p className="hero-subtitle">Assistant Professor (Grade III), School of Engineering and Technology, BML Munjal University</p>
            <p className="hero-tagline">
              "Pioneering research in biomaterials, nanoinformatics, and tissue engineering."
            </p>
            
            <div className="hero-ctas">
              <a href="#research" className="btn btn-primary">Explore Research</a>
              <a href="#contact" className="btn btn-ghost">Get in Touch</a>
            </div>

            <div className="hero-stats">
              <StatBadge value="12+" label="Years Exp" delay={0.5} />
              <StatBadge value="3" label="Patents" delay={0.6} />
              <StatBadge value="250+" label="Citations" delay={0.7} />
              <StatBadge value="6" label="PhD Scholars" delay={0.8} />
            </div>
          </motion.div>
        </div>

        <div className="hero-visual">
          <motion.div 
            className="profile-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="profile-photo">
              <img src={profilePic} alt="Dr. Tanvi Jain" className="profile-img" />
            </div>
            
            {expertise.map((tag, i) => (
              <motion.span 
                key={tag} 
                className={`expertise-tag tag-${i}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + i * 0.1 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
