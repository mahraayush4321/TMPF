import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './AnimatedSection.css';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right';
  delay?: number;
  className?: string;
}

/**
 * AnimatedSection component that triggers animations when the section enters the viewport.
 * Uses the Intersection Observer API via the useIntersectionObserver hook.
 * 
 * @param children - The content to be animated
 * @param animation - The type of animation to apply (default: 'fade')
 * @param delay - Animation delay in milliseconds for staggered animations (default: 0)
 * @param className - Additional CSS classes to apply
 */
export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fade',
  delay = 0,
  className = '',
}) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  const animationClass = `animated-section--${animation}`;
  const visibleClass = isVisible ? 'animated-section--visible' : '';
  const combinedClassName = `animated-section ${animationClass} ${visibleClass} ${className}`.trim();

  return (
    <div
      ref={ref}
      className={combinedClassName}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
