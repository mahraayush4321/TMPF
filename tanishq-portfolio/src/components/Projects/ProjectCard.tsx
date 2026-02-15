import React from 'react';
import type { Project } from '../../types/portfolio.types';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
}

/**
 * ProjectCard component displays a single project entry.
 * Features hover animations, technology tags, and external link to live demo.
 * 
 * @param project - The project data to display
 */
export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, liveUrl, technologies, features } = project;

  return (
    <div className="project-card">
      <div className="project-card__header">
        <h3 className="project-card__title">{title}</h3>
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card__link"
          aria-label={`View live demo of ${title}`}
        >
          <svg
            className="project-card__link-icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          Live Demo
        </a>
      </div>

      <p className="project-card__description">{description}</p>

      <div className="project-card__technologies">
        {technologies.map((tech, index) => (
          <span key={index} className="project-card__tech-tag">
            {tech}
          </span>
        ))}
      </div>

      <ul className="project-card__features">
        {features.map((feature, index) => (
          <li key={index} className="project-card__feature">
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};
