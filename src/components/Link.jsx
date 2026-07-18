import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export default function Link({ to, children, ...props }) {
  if (!to) return <span {...props}>{children}</span>;

  // Check if link is external, tel, mailto, anchor or file
  const isExternal = 
    to.startsWith('http') || 
    to.startsWith('tel:') || 
    to.startsWith('mailto:') || 
    to.startsWith('#') || 
    to.includes('.pdf');
  
  if (isExternal) {
    const isHttp = to.startsWith('http');
    return (
      <a 
        href={to} 
        target={isHttp ? '_blank' : undefined} 
        rel={isHttp ? 'noopener noreferrer' : undefined} 
        {...props}
      >
        {children}
      </a>
    );
  }

  // Normalize routing paths (e.g. "/about/" -> "/about")
  let cleanTo = to.replace(/\/$/, '') || '/';
  if (cleanTo === '/uae-tours' || cleanTo === '/umrah') {
    cleanTo = '/domestic';
  } else if (cleanTo === '/international-tours') {
    cleanTo = '/international';
  }
  
  return (
    <RouterLink to={cleanTo} {...props}>
      {children}
    </RouterLink>
  );
}
