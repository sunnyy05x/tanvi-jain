import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, FileText } from 'lucide-react';
import DnaHelix from './DnaHelix';
import './Publications.css';

const PublicationRow = ({ year, title, authors, journal, citations, doi, delay }) => {
  // Function to bold the professor's name
  const formatAuthors = (text) => {
    const name = "Tanvi Jain";
    const parts = text.split(name);
    return (
      <>
        {parts[0]}
        <strong>{name}</strong>
        {parts[1]}
      </>
    );
  };

  return (
    <motion.div 
      className="pub-row"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay }}
    >
      <div className="pub-year-badge">{year}</div>
      <div className="pub-main">
        <h4 className="pub-title">{title}</h4>
        <p className="pub-authors">{formatAuthors(authors)}</p>
        <p className="pub-journal"><em>{journal}</em></p>
      </div>
      <div className="pub-meta">
        <div className="pub-citations">
          <span className="citation-count">{citations}</span>
          <span className="citation-label">Citations</span>
        </div>
        {doi && (
          <a href={`https://doi.org/${doi}`} target="_blank" rel="noopener noreferrer" className="doi-link" aria-label="View DOI">
            <ExternalLink size={18} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Publications = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Journal Articles', 'Conference Proceedings', 'Book Chapters', 'Patents'];

  const allPublications = [
    {
      type: 'Journal Articles',
      year: '2025',
      title: 'Unveiling the Antimicrobial Power of Bacillus kochii from marigold',
      authors: 'Shraddha Prakash, Tanvi Jain',
      journal: 'Journal of Applied Bioanalysis',
      citations: 'Scopus Indexed',
      doi: '10.25258/ijddt.16.3s.87'
    },
    {
      type: 'Journal Articles',
      year: '2024',
      title: 'Network Pharmacology Reveals Key Targets and Pathways of Madhuca longifolia for Potential Alzheimer\'s',
      authors: 'Noopur Khare, Megha Barot, Sachidanand Singh, Tanvi Jain',
      journal: 'Cell Biochemistry and Biophysics',
      citations: 'SCI Indexed',
      doi: '10.1007/s12013-024-01389-4'
    },
    {
      type: 'Journal Articles',
      year: '2024',
      title: 'Unveiling a Comprehensive Multi-epitope Subunit Vaccine Strategy Against Salmonella subsp.',
      authors: 'Yamini Chand, Tanvi Jain, Sachidanand Singh',
      journal: 'Cell Biochem Biophys',
      citations: 'SCI Indexed',
      doi: '10.1007/s12013-024-01407-5'
    },
    {
      type: 'Journal Articles',
      year: '2016',
      title: 'Carbon dots: Chemistry, properties and applications',
      authors: 'P Bhartiya, A Singh, H Kumar, Tanvi Jain, BK Singh, PK Dutta',
      journal: 'Journal of the Indian Chemical Society',
      citations: '42 Citations',
      doi: '10.1002/chin.201639255'
    },
    {
      type: 'Journal Articles',
      year: '2024',
      title: 'Investigation of the Antibacterial Activity, Antibiofilm Properties and Phytochemical Composition of Poly-Herbal Extracts...',
      authors: 'Yamini Chand, Tanvi Jain, Sachidanand Singh',
      journal: 'Cell Biochem Biophys',
      citations: 'Book Chapter',
      doi: ''
    }
  ];

  const foundationalPapers = [
    {
      year: 'Foundational',
      title: 'Carbon dots: Chemistry, properties and applications',
      authors: 'P Bhartiya, A Singh, H Kumar, Tanvi Jain, BK Singh, PK Dutta',
      journal: 'Journal of the Indian Chemical Society',
      citations: '42+',
      doi: '10.1002/chin.201639255'
    },
    {
      year: 'Foundational',
      title: 'Dibutyrylchitin nanoparticles as novel drug carrier',
      authors: 'T Jain, S Kumar, PK Dutta',
      journal: 'International Journal of Biological Macromolecules',
      citations: 'Highly Cited',
      doi: '10.1016/j.ijbiomac.2015.01.001'
    },
    {
      year: 'Foundational',
      title: 'Theranostics: a way of modern medical diagnostics and the role of chitosan',
      authors: 'T Jain, PK Dutta',
      journal: 'Journal of Molecular and Genetic Medicine',
      citations: 'Foundational',
      doi: '10.4172/1747-0862.1000100'
    }
  ];

  const filteredPubs = activeFilter === 'All' 
    ? allPublications 
    : allPublications.filter(p => p.type === activeFilter);

  return (
    <section id="publications" className="publications">
      <DnaHelix 
        className="publications-watermark" 
        strokeColor="#05C3A3" 
        opacity={0.15} 
        width="800px" 
        height="1200px" 
        animated={true} 
      />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-head">
          <h2 className="section-title">Publications</h2>
          <p className="section-subtitle">Peer-reviewed research advancing biomedical science</p>
        </div>

        <div className="pub-filters">
          {filters.map((filter) => (
            <button 
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="pub-list">
          <AnimatePresence mode="popLayout">
            {filteredPubs.map((pub, i) => (
              <PublicationRow 
                key={pub.title} 
                {...pub} 
                delay={i * 0.05}
              />
            ))}
          </AnimatePresence>
          
          {filteredPubs.length === 0 && (
            <div className="empty-state">
              No results — try a different filter
            </div>
          )}
        </div>

        <div className="section-head" style={{ marginTop: 'var(--spacing-3xl)' }}>
          <h2 className="section-title">Highly Cited Foundational Papers</h2>
          <p className="section-subtitle">Pioneering research works in biomaterials and diagnostics</p>
        </div>

        <div className="pub-list">
          {foundationalPapers.map((pub, i) => (
            <PublicationRow 
              key={pub.title} 
              {...pub} 
              delay={i * 0.05}
            />
          ))}
        </div>

        <div className="pub-actions">
          <a href="#" className="btn-cite ghost-primary">View Full List on Google Scholar →</a>
          <button className="btn-cite ghost-secondary">
            <FileText size={16} />
            Export BibTeX
          </button>
        </div>
      </div>
    </section>
  );
};

export default Publications;
