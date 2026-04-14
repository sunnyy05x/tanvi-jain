import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Dna, Users } from 'lucide-react';
import './ResearchAreas.css';

const AreaCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div 
    className="area-card"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -8 }}
  >
    <div className="card-icon">
      <Icon size={32} />
    </div>
    <h3 className="card-title">{title}</h3>
    <p className="card-desc">{description}</p>
  </motion.div>
);

const ResearchAreas = () => {
  const areas = [
    {
      icon: Microscope,
      title: 'Patents Granted (2)',
      description: 'AI Based Electroactive Polymer Biosensor Device and Nanolipoidal Systems for Skin Cancer.'
    },
    {
      icon: Dna,
      title: 'Biomaterials & Tissue Eng.',
      description: 'Working on biopolymers, wound healing, and advanced scaffolds.'
    },
    {
      icon: Users,
      title: 'Academic Leadership',
      description: 'Guided 24 B.Tech, 4 M.Tech projects, and 6 PhD scholars.'
    }
  ];

  return (
    <section id="research" className="research-areas">
      {/* Floating DNA Particles */}
      <div className="dna-particles">
        {[...Array(10)].map((_, i) => (
          <div key={i} className={`particle p${i}`}></div>
        ))}
      </div>
      
      <div className="container">
        <div className="section-head text-center">
          <h2 className="section-title">Research Focus</h2>
          <p className="section-subtitle">Five converging fields that define the lab's scientific identity</p>
        </div>

        <div className="areas-grid">
          {areas.map((area, i) => (
            <AreaCard 
              key={area.title} 
              {...area} 
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchAreas;
