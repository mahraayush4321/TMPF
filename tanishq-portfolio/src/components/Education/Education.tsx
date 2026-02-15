import React from 'react';
import type { Education as EducationType } from '../../types/portfolio.types';
import { AnimatedSection } from '../AnimatedSection/AnimatedSection';
import './Education.css';

interface EducationProps {
  education: EducationType;
}

/**
 * Education component displays educational background information.
 * Shows institution name, degree, and duration.
 * Wrapped in AnimatedSection for entry animation.
 * 
 * @param education - Education data from portfolio
 */
export const Education: React.FC<EducationProps> = ({ education }) => {
  const { institution, degree, duration } = education;

  return (
    <section id="education" className="education-section">
      <div className="container">
        <AnimatedSection animation="slide-up">
          <h2 className="education-section__title">Education</h2>
        </AnimatedSection>

        <AnimatedSection animation="fade" delay={150}>
          <div className="education-card">
            <div className="education-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
              </svg>
            </div>
            
            <div className="education-card__content">
              <h3 className="education-card__institution">{institution}</h3>
              <p className="education-card__degree">{degree}</p>
              <p className="education-card__duration">{duration}</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
