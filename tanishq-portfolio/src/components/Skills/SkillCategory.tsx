import React from 'react';
import './SkillCategory.css';

interface SkillCategoryProps {
  category: string;
  skills: string[];
}

/**
 * SkillCategory component displays a category of skills with styled badges.
 * Each skill is rendered as a pill/badge with hover effects.
 * 
 * @param category - The name of the skill category
 * @param skills - Array of skill names to display
 */
export const SkillCategory: React.FC<SkillCategoryProps> = ({ category, skills }) => {
  return (
    <div className="skill-category">
      <h3 className="skill-category__heading">{category}</h3>
      <div className="skill-category__skills">
        {skills.map((skill, index) => (
          <span key={index} className="skill-category__badge">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
