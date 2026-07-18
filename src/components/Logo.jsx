import React from 'react';

export default function Logo({ className, lightMode = false }) {
  return (
    <img 
      src="/assets/logo.png" 
      alt="SPIN Global Logo" 
      className={className}
      style={{ display: 'block', objectFit: 'contain' }}
    />
  );
}



