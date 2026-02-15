import React from 'react';
import type { Experience as ExperienceType } from '../../types/portfolio.types';
import { AnimatedSection } from '../AnimatedSection/AnimatedSection';
import { ExperienceCard } from './ExperienceCard';
import './Experience.css';

interface ExperienceSectionProps {
  experiences: ExperienceType[];
}

/**
 * Experience section component that displays work experience timeline.
 * Uses AnimatedSection with staggered delays for each experience card.
 * Implements timeline layout for desktop and vertical stack for mobile.
 * 
 * @param experiences - Array of experience data from portfolio
 */
export const Experience: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <AnimatedSection animation="slide-up">
          <h2 className="experience-section__title">Work Experience</h2>
        </AnimatedSection>
        
        <div className="experience-timeline">
          {experiences.map((experience, index) => (
            <AnimatedSection
              key={experience.id}
              animation={index % 2 === 0 ? "slide-left" : "slide-right"}
              delay={index * 150}
              className="experience-timeline__item"
            >
              <ExperienceCard experience={experience} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
