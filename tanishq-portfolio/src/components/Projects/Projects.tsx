import React from 'react';
import { AnimatedSection } from '../AnimatedSection/AnimatedSection';
import { ProjectCard } from './ProjectCard';
import type { Project } from '../../types/portfolio.types';
import './Projects.css';

interface ProjectsProps {
  projects: Project[];
}

/**
 * Projects section component that displays all projects in a grid layout.
 * Each project card is wrapped in AnimatedSection with staggered delays.
 * 
 * @param projects - Array of project data to display
 */
export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-section__container">
        <AnimatedSection animation="slide-up">
          <h2 className="projects-section__title">Projects</h2>
          <p className="projects-section__subtitle">
            Some of the projects I've built and deployed
          </p>
        </AnimatedSection>

        <div className="projects-section__grid">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              animation="slide-up"
              delay={index * 150}
            >
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
