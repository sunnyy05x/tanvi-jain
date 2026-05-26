import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ResearchAreas from './components/ResearchAreas';
import Publications from './components/Publications';
import Contact from './components/Contact';
import { Award, Book, Users, ExternalLink } from 'lucide-react';
import './App.css';

const Teaching = () => (
  <section id="teaching" className="teaching">
    <div className="container">
      <div className="section-head">
        <h2 className="section-title">Teaching</h2>
        <p className="section-subtitle">Courses & Philosophy</p>
      </div>
      
      <div className="teaching-content" style={{ display: 'grid', gap: 'var(--spacing-2xl)', gridTemplateColumns: '1fr' }}>
        <div className="teaching-philosophy">
          <h3 style={{ fontSize: '24px', marginBottom: 'var(--spacing-md)', color: 'var(--color-secondary)' }}>Teaching Philosophy</h3>
          <p className="bio-text" style={{ fontSize: '18px', lineHeight: '1.6', color: 'var(--color-text-muted)' }}>Strong believer in student-centric, interdisciplinary, and research-oriented learning, integrating real-world healthcare challenges with engineering innovation. Focused on outcome-based education, experiential learning, hybrid teaching methodologies, and mentoring students toward scientific research and innovation.</p>
        </div>

        <div className="teaching-courses">
          <h3 style={{ fontSize: '24px', marginBottom: 'var(--spacing-md)', color: 'var(--color-secondary)' }}>Teaching Courses</h3>
          <ul className="courses-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-sm)', listStyle: 'none', padding: 0, color: 'var(--color-text)', fontSize: '16px' }}>
            <li>• Introduction to Biotechnology</li>
            <li>• Bioinstrumentation</li>
            <li>• Biomedical Instrumentation</li>
            <li>• Biosensors</li>
            <li>• Stem Cells and Tissue Engineering</li>
            <li>• Biomaterials and Biopolymers</li>
            <li>• Drugs and Pharmaceutical Biotechnology</li>
            <li>• Environmental Studies</li>
            <li>• Ethical Issues in Biomedical Engineering</li>
            <li>• Modern Analytical Techniques in Biotechnology and Biomedical Engineering</li>
            <li>• Nanobiotechnology and Nanodevices</li>
            <li>• Drug Delivery Systems</li>
            <li>• Digital Health Systems</li>
            <li>• AI in Biomedical Engineering</li>
            <li>• Computational Systems Biology</li>
            <li>• Computational Epidemiology and Public Health Analytics</li>
            <li>• Intelligent Medicine and Nanotechnology Applications</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);



const AcademicAchievements = () => (
  <section id="awards" className="awards">
    <div className="container">
      <div className="section-head">
        <h2 className="section-title">Academic Achievements</h2>
      </div>
      <div className="awards-timeline">
        {[
          { name: 'Teaching Learning Award', body: 'Recipient of multiple Teaching Learning Awards for innovation in teaching methodology' },
          { name: 'Indian Chemical Society Award', body: 'Indian Chemical Society Award for research in drug delivery systems' },
          { name: 'Research Guidance', body: 'Guided B.Tech, M.Tech, and Ph.D. research scholars' },
          { name: 'Publications & Patents', body: 'Published research papers, patents, and book chapters in reputed journals and publishers including Elsevier, Springer, CRC Press, and Scopus/WoS indexed journals' }
        ].map((award, i) => (
          <div key={i} className="award-item">
            <div className="award-year">★</div>
            <div className="award-content">
              <h4>{award.name}</h4>
              <p>{award.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <ResearchAreas />
      <Publications />
      <Teaching />
      <AcademicAchievements />
      <Contact />
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <h2 className="footer-logo">Dr. Tanvi Jain</h2>
            <p>Assistant Professor & Researcher</p>
          </div>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#research">Research</a>
            <a href="#publications">Publications</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Tanvi Jain · BML Munjal University | Last updated April 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
