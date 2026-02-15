import React, { useState, useEffect } from 'react';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import './Navigation.css';

/**
 * Navigation component - Fixed navigation bar with section links
 * 
 * Features:
 * - Renders navigation links to all major sections
 * - Implements smooth scroll on link click
 * - Fixed/sticky positioning for persistent access
 * - Integrates ThemeToggle component
 * - Active section highlighting using Intersection Observer
 * 
 * Validates: Requirements 8.1, 8.2, 8.3, 8.5
 */

interface NavSection {
  id: string;
  label: string;
}

const sections: NavSection[] = [
  { id: 'hero', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    // Create Intersection Observer to detect visible sections
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Trigger when section is in the middle portion of viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Close mobile menu after clicking a link
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navigation" role="navigation" aria-label="Main navigation">
      <div className="navigation__container">
        <div className="navigation__brand">
          <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="navigation__logo">
            TM
          </a>
        </div>

        {/* Hamburger button for mobile */}
        <button
          className={`navigation__hamburger ${isMobileMenuOpen ? 'navigation__hamburger--open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="navigation__hamburger-line"></span>
          <span className="navigation__hamburger-line"></span>
          <span className="navigation__hamburger-line"></span>
        </button>

        <ul className={`navigation__links ${isMobileMenuOpen ? 'navigation__links--open' : ''}`}>
          {sections.map((section) => (
            <li key={section.id} className="navigation__item">
              <a
                href={`#${section.id}`}
                onClick={(e) => handleNavClick(e, section.id)}
                className={`navigation__link ${activeSection === section.id ? 'navigation__link--active' : ''}`}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navigation__actions">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
