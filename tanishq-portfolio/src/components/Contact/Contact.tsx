import React from 'react';
import type { PersonalInfo } from '../../types/portfolio.types';
import { AnimatedSection } from '../AnimatedSection/AnimatedSection';
import './Contact.css';

interface ContactProps {
  personal: PersonalInfo;
}

/**
 * Contact component displays contact information with interactive links.
 * Features email (mailto), phone (tel), location, and social media links.
 * Wrapped in AnimatedSection for entry animation.
 * 
 * @param personal - Personal information from portfolio data
 */
export const Contact: React.FC<ContactProps> = ({ personal }) => {
  const { email, phone, location, github, leetcode } = personal;

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <AnimatedSection animation="slide-up">
          <h2 className="contact-section__title">Get In Touch</h2>
        </AnimatedSection>

        <AnimatedSection animation="fade" delay={150}>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-info__item">
                <svg className="contact-info__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a href={`mailto:${email}`} className="contact-info__link">
                  {email}
                </a>
              </div>

              <div className="contact-info__item">
                <svg className="contact-info__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a href={`tel:${phone}`} className="contact-info__link">
                  {phone}
                </a>
              </div>

              <div className="contact-info__item">
                <svg className="contact-info__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span className="contact-info__text">{location}</span>
              </div>
            </div>

            <div className="contact-social">
              <a 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-social__link"
                aria-label="GitHub Profile"
              >
                <svg className="contact-social__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>

              <a 
                href={leetcode} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-social__link"
                aria-label="LeetCode Profile"
              >
                <svg className="contact-social__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                </svg>
                LeetCode
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
