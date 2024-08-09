// src/components/Tooltip.js
import React from 'react';

function Tooltip({ topic, style }) {
  return (
    <div 
      style={{
        position: 'absolute',
        top: style.top + 10,
        left: style.left,
        backgroundColor: '#333',
        color: '#fff',
        padding: '5px',
        borderRadius: '3px',
        whiteSpace: 'nowrap',
        pointerEvents: 'none'
      }}
    >
      {topic}
    </div>
  );
}

export default Tooltip;
