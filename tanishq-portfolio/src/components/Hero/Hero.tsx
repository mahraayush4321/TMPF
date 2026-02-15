import React, { useState, useEffect } from 'react';
import { AnimatedSection } from '../AnimatedSection/AnimatedSection';
import { portfolioData } from '../../data/portfolio.ts';
import './Hero.css';

/**
 * Hero component that displays the main introduction section
 * Features:
 * - Prominent name display with large heading
 * - Typing animation for introduction text
 * - Social links (GitHub, LeetCode) with icons
 * - Call-to-action button with glow effect
 * - Wrapped in AnimatedSection for entry animation
 * 
 * Validates Requirements: 1.1, 1.5, 1.6
 */
export const Hero: React.FC = () => {
  const { personal } = portfolioData;
  const [typedText, setTypedText] = useState('');
  const fullText = 'Building scalable web applications with modern technologies.';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatedSection animation="fade" className="hero-wrapper">
      <section className="hero" id="hero">
        <div className="hero__content">
          {/* Name Display with Gradient */}
          <h1 className="hero__name gradient-animated">{personal.name}</h1>
          
          {/* Animated Introduction with Typing Effect */}
          <div className="hero__intro">
            <p className="hero__title">Software Developer</p>
            <p className="hero__description typing-cursor">
              {typedText}
            </p>
            <p className="hero__tagline">
              Passionate about clean code, performance optimization, and creating
              exceptional user experiences.
            </p>
          </div>

          {/* Social Links with Hover Effects */}
          <div className="hero__social">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link hover-3d"
              aria-label="GitHub Profile"
            >
              <svg
                className="hero__social-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>

            <a
              href={personal.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link hover-3d"
              aria-label="LeetCode Profile"
            >
              <svg
                className="hero__social-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-2.365-1.914-5.956-1.676-8.036.713L3.643 10.023 8.149 5.48l5.404-5.786a1.375 1.375 0 0 0-.97-2.294z"/>
              </svg>
              <span>LeetCode</span>
            </a>
          </div>

          {/* Call-to-Action Button with Glow */}
          <button
            onClick={scrollToProjects}
            className="hero__cta glow-on-hover"
            aria-label="Scroll to projects section"
          >
            View My Projects
            <svg
              className="hero__cta-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
            </svg>
          </button>
        </div>
      </section>
    </AnimatedSection>
  );
};
