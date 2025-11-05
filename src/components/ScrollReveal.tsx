import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  className?: string;
}

const ScrollReveal = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '' 
}: ScrollRevealProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Initial state based on direction
    const initialTransforms = {
      up: 'translate3d(0, 40px, 0)',
      down: 'translate3d(0, -40px, 0)',
      left: 'translate3d(-40px, 0, 0)',
      right: 'translate3d(40px, 0, 0)',
      scale: 'translate3d(0, 20px, 0) scale(0.95)'
    };

    element.style.opacity = '0';
    element.style.transform = initialTransforms[direction];
    element.style.transition = `
      opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms,
      transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms
    `;
    element.style.willChange = 'opacity, transform';

    // Intersection Observer for mobile performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.style.opacity = '1';
            element.style.transform = direction === 'scale' 
              ? 'translate3d(0, 0, 0) scale(1)' 
              : 'translate3d(0, 0, 0)';
            
            // Clean up will-change after animation
            setTimeout(() => {
              element.style.willChange = 'auto';
            }, 800 + delay);
            
            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [delay, direction]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;
