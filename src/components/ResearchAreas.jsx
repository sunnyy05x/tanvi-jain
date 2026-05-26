import React from 'react';
import { motion } from 'framer-motion';
import { Target, Layers, Activity, Heart, Brain } from 'lucide-react';
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
      icon: Target,
      title: 'Smart Drug Delivery Systems',
      description: 'Developing targeted and controlled release systems, including nanolipoidal carriers, for improved therapeutic efficacy.'
    },
    {
      icon: Layers,
      title: 'Chitosan and Biopolymeric Nanomaterials',
      description: 'Synthesizing chitosan-based nanoparticles and biopolymer composites for tissue engineering and medical applications.'
    },
    {
      icon: Activity,
      title: 'Biosensors and Biomedical Devices',
      description: 'Designing electroactive polymer biosensor devices and intelligent diagnostic tools for healthcare monitoring.'
    },
    {
      icon: Heart,
      title: 'Cancer Therapeutics and Regenerative Medicine',
      description: 'Researching stem cells, biomaterial scaffolds, and advanced therapeutics for cancer treatment and wound healing.'
    },
    {
      icon: Brain,
      title: 'AI in Healthcare and Biomedical Applications',
      description: 'Integrating artificial intelligence, machine learning, and nanoinformatics for predictive medicine and intelligent healthcare.'
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
          <h2 className="section-title">Research Interests</h2>
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
