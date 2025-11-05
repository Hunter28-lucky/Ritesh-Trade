import { useEffect, RefObject } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  animationClass?: string;
  delay?: number;
}

export const useCinematicScroll = (
  ref: RefObject<HTMLElement>,
  options: ScrollAnimationOptions = {}
) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    animationClass = 'animate-in',
    delay = 0,
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Add initial state
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    element.style.willChange = 'opacity, transform';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.style.opacity = '1';
              element.style.transform = 'translateY(0)';
              element.classList.add(animationClass);
            }, delay);
            
            // Clean up after animation
            setTimeout(() => {
              element.style.willChange = 'auto';
            }, 800 + delay);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold, rootMargin, animationClass, delay]);
};

// Stagger animation for multiple elements
export const useStaggeredScroll = (
  refs: RefObject<HTMLElement>[],
  staggerDelay: number = 100
) => {
  refs.forEach((ref, index) => {
    useCinematicScroll(ref, { delay: index * staggerDelay });
  });
};
