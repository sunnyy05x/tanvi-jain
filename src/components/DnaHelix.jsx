import React from 'react';
import './DnaHelix.css';

const DnaHelix = ({ 
  className = "", 
  animated = true, 
  opacity = 0.1, 
  width = "100%", 
  height = "100%",
  horizontal = false,
  strokeColor = "#00D4AA"
}) => {
  // Generate a hexagonal nano-lattice grid
  const generateLatticeNodes = () => {
    const nodes = [];
    const cols = 8;
    const rows = 20;
    const spacingX = 100 / cols;
    const spacingY = 60;
    
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * spacingX + (row % 2 === 0 ? spacingX / 2 : 0);
        const y = row * spacingY;
        nodes.push({ x, y, row, col });
      }
    }
    return nodes;
  };

  const nodes = generateLatticeNodes();
  const nodeColors = ['#00D4AA', '#6C63FF', '#4FC3F7', '#00E5A0'];

  // Generate connections between adjacent nodes
  const generateConnections = () => {
    const connections = [];
    nodes.forEach((node, i) => {
      nodes.forEach((other, j) => {
        if (j <= i) return;
        const dx = node.x - other.x;
        const dy = node.y - other.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 80) {
          connections.push({ x1: node.x, y1: node.y, x2: other.x, y2: other.y, i });
        }
      });
    });
    return connections;
  };

  const connections = generateConnections();

  return (
    <div 
      className={`dna-helix-wrapper ${className} ${horizontal ? 'horizontal' : ''}`}
      style={{ opacity, width, height }}
    >
      <svg 
        viewBox="0 0 100 1200" 
        preserveAspectRatio="xMidYMid slice" 
        className={animated ? 'animated' : ''}
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <g className="dna-scroll-content">
          {/* Lattice connections */}
          {connections.map((conn, i) => (
            <line
              key={`conn-${i}`}
              x1={conn.x1} y1={conn.y1}
              x2={conn.x2} y2={conn.y2}
              className="dna-rung"
              stroke={strokeColor}
              strokeWidth="0.3"
              opacity="0.3"
            />
          ))}

          {/* Lattice nodes */}
          {nodes.map((node, i) => (
            <g key={`node-${i}`} className="dna-rung-group">
              <circle
                cx={node.x}
                cy={node.y}
                r={i % 5 === 0 ? 2.5 : 1.5}
                fill={nodeColors[i % 4]}
                className="dna-node"
                filter={i % 3 === 0 ? "url(#glow)" : undefined}
              />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default DnaHelix;
