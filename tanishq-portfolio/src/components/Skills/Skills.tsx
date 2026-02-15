import React from 'react';
import { AnimatedSection } from '../AnimatedSection/AnimatedSection';
import { SkillCategory } from './SkillCategory';
import { portfolioData } from '../../data/portfolio.ts';
import './Skills.css';

/**
 * Skills section component that displays all skill categories.
 * Each category is wrapped in AnimatedSection with staggered delays.
 * Implements responsive grid layout (3 cols → 2 cols → 1 col).
 */
export const Skills: React.FC = () => {
  const { skills } = portfolioData;

  // Transform skills object into array of categories
  const skillCategories = [
    { category: 'Programming Languages', skills: skills.programming },
    { category: 'Backend Technologies', skills: skills.backend },
    { category: 'Frontend Technologies', skills: skills.frontend },
    { category: 'Databases', skills: skills.databases },
    { category: 'Cloud & DevOps', skills: skills.cloudDevOps },
    { category: 'Tools', skills: skills.tools },
    { category: 'Practices', skills: skills.practices },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-section__container">
        <h2 className="skills-section__title">Technical Skills</h2>
        <div className="skills-section__grid">
          {skillCategories.map((category, index) => (
            <AnimatedSection
              key={category.category}
              animation="slide-up"
              delay={index * 100}
            >
              <SkillCategory
                category={category.category}
                skills={category.skills}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
