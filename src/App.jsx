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
        <p className="section-subtitle">Courses designed to build the next generation of biomedical engineers</p>
      </div>
      <div className="teaching-grid">
        {[
          { code: 'BME 301', title: 'Introduction to Biomedical Engineering', level: 'UG', sem: 'Fall 2024' },
          { code: 'BIOT 501', title: 'Advanced Molecular Biology Techniques', level: 'PG', sem: 'Spring 2024' },
          { code: 'BME 405', title: 'BioMEMS and Microfluidics', level: 'PG', sem: 'Fall 2023' },
          { code: 'BIOT 601', title: 'Research Methodology', level: 'PG', sem: 'Spring 2023' }
        ].map((course) => (
          <div key={course.code} className="course-card">
            <span className="course-code">{course.code}</span>
            <h3 className="course-title">{course.title}</h3>
            <div className="course-meta">
              <span className="course-tag">{course.level}</span>
              <span className="course-sem">{course.sem}</span>
            </div>
            <a href="#" className="course-link">Course Details →</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Lab = () => (
  <section id="lab" className="lab">
    <div className="container">
      <div className="section-head">
        <h2 className="section-title">The Lab</h2>
        <p className="section-subtitle">A collaborative space for bold scientific inquiry</p>
      </div>
      <div className="lab-grid">
        <div className="lab-main">
          <div className="team-grid">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="team-card">
                <div className="team-photo"></div>
                <h4>Researcher {i}</h4>
                <p>PhD Student</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lab-cta">
          <div className="cta-card">
            <h3>Join the Lab</h3>
            <p>We are always looking for passionate PhD and M.Tech students to join our research efforts.</p>
            <ul className="cta-positions">
              <li>• PhD Position: Microfluidics & Cancer Diagnostics</li>
              <li>• Research Fellow: Tissue Scaffold Fabrication</li>
            </ul>
            <a href="#contact" className="btn btn-primary">Apply Now →</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Awards = () => (
  <section id="awards" className="awards">
    <div className="container">
      <div className="section-head">
        <h2 className="section-title">Awards & Recognition</h2>
      </div>
      <div className="awards-timeline">
        {[
          { year: '2021-25', name: 'Teaching Learning Award', body: 'Recognized for innovation in teaching methodology across multiple academic sessions.' },
          { year: 'Present', name: 'Chief Editor — SRMU COMPASS', body: 'Serving as Chief Editor of the official SRMU Newsletter, driving institutional communication.' },
          { year: '2015', name: 'Best Paper Presentation', body: 'National Seminar on Recent Advances in Polymer Science and Technology.' },
          { year: '2014', name: 'Indian Chemical Society Award', body: 'For outstanding research on Sulfated chitin nanoparticles.' }
        ].map((award, i) => (
          <div key={i} className="award-item">
            <div className="award-year">{award.year}</div>
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
      <Lab />
      <Awards />
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
