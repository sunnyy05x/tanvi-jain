import React from 'react';
import './DnaHelix.css';

const DnaHelix = ({ 
  className = "", 
  animated = true, 
  opacity = 0.1, 
  width = "100%", 
  height = "100%",
  horizontal = false,
  strokeColor = "white"
}) => {
  // Generate points for two intertwining strands - doubled length for infinite scroll
  const generateStrandPoints = (offset = 0) => {
    const points = [];
    const amplitude = 20;
    const frequency = 0.04;
    // Length is 1200 to allow smooth 600px transition
    for (let y = 0; y <= 1200; y += 10) {
      const x = 50 + amplitude * Math.sin(frequency * y + offset);
      points.push(`${x},${y}`);
    }
    return points;
  };

  const strandAPoints = generateStrandPoints(0);
  const strandBPoints = generateStrandPoints(Math.PI);

  const baseColors = ['#C7B8EA', '#F4A5B8', '#F9C9A3', '#7ECEC1']; // Lavender, Rose, Peach, Mint

  return (
    <div 
      className={`dna-helix-wrapper ${className} ${horizontal ? 'horizontal' : ''}`}
      style={{ opacity, width, height }}
    >
      <svg 
        viewBox="0 0 100 600" 
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
          {/* Rungs (Base Pairs) */}
          {strandAPoints.map((point, i) => {
            if (i % 2 !== 0) return null; // Sparsely distributed rungs
            const [ax, ay] = point.split(',').map(Number);
            const [bx, by] = strandBPoints[i].split(',').map(Number);
            return (
              <g key={`rung-${i}`} className="dna-rung-group">
                <line 
                  x1={ax} y1={ay} x2={bx} y2={by} 
                  className="dna-rung" 
                  stroke={strokeColor} 
                  strokeWidth="0.5" 
                />
                <circle 
                  cx={ax} cy={ay} r="2" 
                  fill={baseColors[i % 4]} 
                  className="dna-node" 
                  filter="url(#glow)"
                />
                <circle 
                  cx={bx} cy={by} r="2" 
                  fill={baseColors[(i + 2) % 4]} 
                  className="dna-node" 
                  filter="url(#glow)"
                />
              </g>
            );
          })}

          {/* Strands */}
          <path 
            d={`M${strandAPoints.join(' L')}`} 
            className="dna-strand" 
            fill="none" 
            stroke={strokeColor} 
            strokeWidth="1" 
          />
          <path 
            d={`M${strandBPoints.join(' L')}`} 
            className="dna-strand" 
            fill="none" 
            stroke={strokeColor} 
            strokeWidth="1" 
          />
        </g>
      </svg>
    </div>
  );
};

export default DnaHelix;
