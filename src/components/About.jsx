import React from 'react';
import { motion } from 'framer-motion';
import DnaHelix from './DnaHelix';
import './About.css';

const TimelineItem = ({ year, title, institution, delay }) => (
  <motion.div 
    className="timeline-item"
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
  >
    <div className="timeline-dot"></div>
    <div className="timeline-content">
      <div className="timeline-year">{year}</div>
      <div className="timeline-title">{title}</div>
      <div className="timeline-institution">{institution}</div>
    </div>
  </motion.div>
);

const About = () => {
  const expertise = [
    'Biopolymers', 'Biomaterials', 'Stem Cells & Tissue Eng', 
    'Nanobiotechnology', 'Nanoinformatics', 'Drug Delivery'
  ];

  const timeline = [
    { year: '2026 — Present', title: 'Assistant Professor', institution: 'BML Munjal University, Gurugram' },
    { year: '2012 — 2026', title: 'Professor & Dep. Controller of Exam', institution: 'Shri Ramswaroop Memorial University (SRMU)' },
    { year: '2012 — 2016', title: 'Ph.D. Biomedical Engineering', institution: 'MNNIT Allahabad' },
    { year: '2010 — 2012', title: 'M.Tech Biomedical Engineering', institution: 'MNNIT Allahabad' },
    { year: '2005 — 2009', title: 'B.Tech Biotechnology', institution: 'Uttar Pradesh Technical University' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow dark">ABOUT</span>
          <h2 className="section-title">Scientist. Educator. Innovator.</h2>
          <div className="about-dna-divider">
            <svg viewBox="0 0 300 40" preserveAspectRatio="xMidYMid meet">
              <defs>
                <filter id="about-glow">
                  <feGaussianBlur stdDeviation="1" result="blur"/>
                  <feMerge>
                    <feMergeNode in="blur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              {/* Sine wave rungs and strands in teal */}
              {[...Array(15)].map((_, i) => {
                const x = i * 20 + 10;
                const y1 = 20 + 15 * Math.sin(i * 0.8);
                const y2 = 20 + 15 * Math.sin(i * 0.8 + Math.PI);
                return (
                  <g key={i}>
                    <line x1={x} y1={y1} x2={x} y2={y2} stroke="#C7B8EA" strokeWidth="1.5" opacity="0.4" />
                    <circle cx={x} cy={y1} r="3" fill="#7ECEC1" filter="url(#about-glow)" />
                    <circle cx={x} cy={y2} r="3" fill="#F4A5B8" filter="url(#about-glow)" />
                  </g>
                );
              })}
              <path d="M 10 20 Q 20 5, 30 20 T 50 20 T 70 20 T 90 20 T 110 20 T 130 20 T 150 20 T 170 20 T 190 20 T 210 20 T 230 20 T 250 20 T 270 20 T 290 20" fill="none" stroke="#C7B8EA" strokeWidth="1" opacity="0.3" />
            </svg>
          </div>
        </div>

        <div className="about-grid">
          <div className="about-main">
            <p className="bio-text">
              Dedicated researcher and educator focused on biomaterials, tissue engineering, and translational research. Extending expertise to administrative leadership and program development. My research sits at the intersection of molecular biology and engineering design — developing diagnostic tools, biosensors, and tissue constructs that can move from bench to bedside.
            </p>
            
            <div className="expertise-grid">
              {expertise.map((item) => (
                <span key={item} className="expertise-pill">{item}</span>
              ))}
            </div>

            <div className="institution-logos">
              <div className="logo-placeholder">BML Munjal University</div>
              <div className="logo-placeholder">SRMU</div>
              <div className="logo-placeholder">MNNIT Allahabad</div>
            </div>
          </div>

          <div className="about-timeline">
            <div className="timeline-line"></div>
            {timeline.map((item, i) => (
              <TimelineItem 
                key={i} 
                year={item.year} 
                title={item.title} 
                institution={item.institution} 
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>

        <div className="admin-leadership" style={{ marginTop: 'var(--spacing-3xl)' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', marginBottom: 'var(--spacing-lg)', color: 'var(--color-primary)' }}>Administrative Leadership</h3>
          <div style={{ display: 'grid', gap: 'var(--spacing-xl)', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            <div>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: 'var(--spacing-xs)' }}>Deputy Controller of Examination</h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '15px' }}>Promoted to this role at SRMU. Led the initiation of an online examination system and policy preparation during the COVID-19 pandemic.</p>
            </div>
            <div>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: 'var(--spacing-xs)' }}>NAAC Steering Committee</h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '15px' }}>Served as a core committee member for Criteria III and V at the University level, handling research paper compilation and data handling.</p>
            </div>
            <div>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: 'var(--spacing-xs)' }}>Institutional Committees</h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '15px' }}>Active member of the Women's Grievance Redressal Cell (WGRC) and served as Chief Editor of the SRMU Newsletter (SRMU COMPASS).</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
