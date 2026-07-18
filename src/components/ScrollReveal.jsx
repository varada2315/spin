import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Module-level WeakSet to track elements that have been revealed.
// WeakSet prevents memory leaks when elements are unmounted.
const revealedElements = new WeakSet();

export default function ScrollReveal({ children }) {
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    let observer;
    let mutationObserver;
    
    // Small delay to ensure DOM is fully rendered and styles are parsed by browser
    const timer = setTimeout(() => {
      if (!containerRef.current) return;

      const elements = containerRef.current.querySelectorAll('*:not([data-no-reveal]):not([data-no-reveal] *)');
      const animatedElements = [];

      elements.forEach(el => {
        const styleAttr = el.getAttribute('style');
        
        // Check if element starts hidden (only matches exact 0 or 0.0, avoiding partial opacities like 0.7)
        const hasOpacityZero = el.style && (
          el.style.opacity === '0' || 
          el.style.opacity === '0.0' || 
          (styleAttr && /\bopacity:\s*0(\.0*)?(;|$|\b)/.test(styleAttr))
        );
        
        if (hasOpacityZero) {
          // If already revealed in a previous render, restore visible styles immediately
          if (revealedElements.has(el)) {
            el.style.opacity = '1';
            el.style.transform = 'none';
            return;
          }

          // Check if it already has transition classes
          const computedStyle = window.getComputedStyle(el);
          const hasTransition = computedStyle.transitionDuration && computedStyle.transitionDuration !== '0s';
          
          if (!hasTransition) {
            // Apply fallback cubic-bezier transition
            el.style.transition = 'opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1), transform 1.4s cubic-bezier(0.16, 1, 0.3, 1)';
          }
          
          animatedElements.push(el);
        }
      });

      // 1. Intersection Observer to detect scroll visibility
      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const target = entry.target;
            revealedElements.add(target);
            target.style.opacity = '1';
            target.style.transform = 'none';
            observer.unobserve(target);
          }
        });
      }, {
        threshold: 0.05,
        rootMargin: '0px 0px -60px 0px'
      });

      animatedElements.forEach(el => {
        observer.observe(el);
      });

      // 2. Mutation Observer to prevent React reconciliation from resetting style to opacity: 0
      mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
            const target = mutation.target;
            if (revealedElements.has(target)) {
              if (target.style.opacity === '0' || target.style.opacity === '0.0') {
                target.style.opacity = '1';
                target.style.transform = 'none';
              }
            }
          }
        });
      });

      // Observe style attribute mutations for all children in container
      mutationObserver.observe(containerRef.current, {
        attributes: true,
        attributeFilter: ['style'],
        subtree: true
      });

    }, 100);

    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
      if (mutationObserver) mutationObserver.disconnect();
    };
  }, [location.pathname]);

  return <div ref={containerRef}>{children}</div>;
}
