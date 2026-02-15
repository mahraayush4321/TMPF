import React from 'react';
import type { Experience } from '../../types/portfolio.types';
import './ExperienceCard.css';

interface ExperienceCardProps {
  experience: Experience;
}

/**
 * ExperienceCard component displays a single work experience entry.
 * Features hover animations and a "current" badge for ongoing positions.
 * 
 * @param experience - The experience data to display
 */
export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const { company, position, duration, responsibilities, current } = experience;

  return (
    <div className="experience-card">
      <div className="experience-card__header">
        <div className="experience-card__title-group">
          <h3 className="experience-card__company">{company}</h3>
          {current && (
            <span className="experience-card__badge" aria-label="Current position">
              Current
            </span>
          )}
        </div>
        <p className="experience-card__position">{position}</p>
        <p className="experience-card__duration">{duration}</p>
      </div>
      
      <ul className="experience-card__responsibilities">
        {responsibilities.map((responsibility, index) => (
          <li key={index} className="experience-card__responsibility">
            {responsibility}
          </li>
        ))}
      </ul>
    </div>
  );
};
