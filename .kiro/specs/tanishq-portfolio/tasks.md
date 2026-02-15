# Implementation Plan: Tanishq Mahra Portfolio Website

## Overview

This implementation plan breaks down the portfolio website development into incremental, testable steps. Each task builds on previous work, starting with project setup, then core infrastructure (theme management, animations), followed by individual sections, and finally integration and testing.

## Tasks

- [x] 1. Project setup and configuration
  - Initialize React + TypeScript project with Vite
  - Configure TypeScript with strict mode
  - Set up folder structure (components, hooks, context, data, styles, types)
  - Install dependencies: React, TypeScript, React Testing Library, Jest, fast-check
  - Configure testing environment (Jest, React Testing Library)
  - Create global CSS with CSS variables for theming
  - _Requirements: All (foundation for entire project)_

- [ ] 2. Implement theme management system
  - [x] 2.1 Create ThemeContext and ThemeProvider
    - Define ThemeContextType interface with theme state and toggleTheme function
    - Implement ThemeProvider component with localStorage persistence
    - Apply theme attribute to document root
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_
  
  - [ ]* 2.2 Write property test for theme persistence
    - **Property 4: Theme preference persistence round-trip**
    - **Validates: Requirements 6.4, 6.5**
  
  - [ ]* 2.3 Write property test for theme CSS mapping
    - **Property 3: Theme state maps to CSS attributes**
    - **Validates: Requirements 6.2, 6.3**
  
  - [x] 2.4 Create ThemeToggle component
    - Implement toggle button with icon
    - Connect to ThemeContext
    - Add accessible ARIA labels
    - _Requirements: 6.1_
  
  - [ ]* 2.5 Write unit tests for ThemeToggle
    - Test toggle button click changes theme
    - Test correct icon displays for each theme
    - _Requirements: 6.1_

- [ ] 3. Implement animation system
  - [x] 3.1 Create useIntersectionObserver hook
    - Implement custom hook with Intersection Observer API
    - Support threshold, rootMargin, and triggerOnce options
    - Return ref and isVisible boolean
    - _Requirements: 3.1, 4.1, 9.1_
  
  - [x] 3.2 Create AnimatedSection component
    - Accept animation type prop (fade, slide-up, slide-left, slide-right)
    - Use useIntersectionObserver hook
    - Apply animation classes based on visibility
    - Support animation delay prop for staggered animations
    - _Requirements: 3.1, 4.1, 9.1, 5.8, 9.3_
  
  - [x] 3.3 Create animation CSS with transitions
    - Define keyframe animations for fade, slide-up, slide-left, slide-right
    - Ensure all animations complete within 800ms
    - Add prefers-reduced-motion media query to disable animations
    - Add hover animation styles for cards and interactive elements
    - _Requirements: 9.1, 9.2, 9.4, 9.5, 3.6_
  
  - [ ]* 3.4 Write property test for animation triggers
    - **Property 1: Section visibility triggers animations**
    - **Validates: Requirements 3.1, 4.1, 9.1**
  
  - [ ]* 3.5 Write property test for animation duration bounds
    - **Property 10: Animation durations are bounded**
    - **Validates: Requirements 9.4**
  
  - [ ]* 3.6 Write property test for reduced motion
    - **Property 11: Reduced motion preference disables animations**
    - **Validates: Requirements 9.5**

- [x] 4. Create portfolio data file
  - Define TypeScript interfaces for all data types (Personal, Education, Experience, Project, Skills)
  - Create portfolio.ts with all personal information, education, work experience, projects, and skills
  - Export typed constant with Tanishq's complete portfolio data
  - _Requirements: 1.1-1.6, 2.1-2.3, 3.2-3.5, 4.2-4.7, 5.1-5.7_

- [ ] 5. Implement Navigation component
  - [x] 5.1 Create Navigation component with section links
    - Render navigation bar with links to all sections (Hero, Experience, Projects, Skills, Contact)
    - Implement smooth scroll on link click
    - Add fixed/sticky positioning
    - Integrate ThemeToggle component
    - _Requirements: 8.1, 8.2, 8.5_
  
  - [x] 5.2 Add active section highlighting
    - Use Intersection Observer to detect visible section
    - Apply active class to corresponding navigation link
    - _Requirements: 8.3_
  
  - [x] 5.3 Implement mobile hamburger menu
    - Create hamburger button for mobile viewports
    - Add slide-in menu animation
    - Close menu on link click
    - _Requirements: 8.4_
  
  - [ ]* 5.4 Write property test for navigation scroll
    - **Property 7: Navigation links scroll to sections**
    - **Validates: Requirements 8.2**
  
  - [ ]* 5.5 Write property test for active navigation
    - **Property 8: Active navigation reflects visible section**
    - **Validates: Requirements 8.3**
  
  - [ ]* 5.6 Write unit tests for Navigation
    - Test all section links render
    - Test mobile menu toggle
    - _Requirements: 8.1, 8.4_

- [ ] 6. Implement Hero/About section
  - [x] 6.1 Create Hero component
    - Display name prominently with large heading
    - Add animated introduction text
    - Render social links (GitHub, LeetCode) with icons
    - Add call-to-action button to scroll to projects
    - Wrap in AnimatedSection for entry animation
    - _Requirements: 1.1, 1.5, 1.6_
  
  - [ ]* 6.2 Write unit tests for Hero
    - Test name "Tanishq Mahra" is displayed
    - Test GitHub link with correct URL
    - Test LeetCode link with correct URL
    - _Requirements: 1.1, 1.5, 1.6_
  
  - [ ]* 6.3 Write property test for external links
    - **Property 6: External links open in new tabs**
    - **Validates: Requirements 4.8**

- [ ] 7. Implement Work Experience section
  - [x] 7.1 Create ExperienceCard component
    - Accept Experience data as props
    - Display company, position, duration, and responsibilities
    - Add hover animation effects
    - Support "current" badge for ongoing positions
    - _Requirements: 3.2, 3.4, 3.6_
  
  - [x] 7.2 Create Experience section component
    - Map through experiences array from portfolio data
    - Wrap each ExperienceCard in AnimatedSection with staggered delays
    - Implement timeline layout for desktop, vertical stack for mobile
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_
  
  - [ ]* 7.3 Write unit tests for Experience section
    - Test Highpolar Softwares experience renders with correct data
    - Test 6 responsibilities render for Highpolar
    - Test Sevaro experience renders with correct data
    - Test 4 responsibilities render for Sevaro
    - _Requirements: 3.2, 3.3, 3.4, 3.5_
  
  - [ ]* 7.4 Write property test for hover animations
    - **Property 2: Hover states apply animations**
    - **Validates: Requirements 3.6, 9.2**

- [ ] 8. Implement Projects section
  - [x] 8.1 Create ProjectCard component
    - Accept Project data as props
    - Display title, description, technologies, and features
    - Render live demo link with external link icon
    - Add hover animation effects
    - Display technology tags with styling
    - _Requirements: 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8_
  
  - [x] 8.2 Create Projects section component
    - Map through projects array from portfolio data
    - Wrap each ProjectCard in AnimatedSection with staggered delays
    - Implement grid layout (2 columns desktop, 1 column mobile)
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7_
  
  - [ ]* 8.3 Write unit tests for Projects section
    - Test CHESS-RATING project renders with correct live link
    - Test all 6 technologies display for CHESS-RATING
    - Test SPORTS-TRIVIA project renders with correct live link
    - Test all 5 technologies display for SPORTS-TRIVIA
    - _Requirements: 4.2, 4.3, 4.5, 4.6_

- [ ] 9. Implement Skills section
  - [x] 9.1 Create SkillCategory component
    - Accept category name and skills array as props
    - Display category heading
    - Render skills as styled badges/pills
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7_
  
  - [x] 9.2 Create Skills section component
    - Map through skill categories from portfolio data
    - Wrap each SkillCategory in AnimatedSection with staggered delays
    - Implement responsive grid layout (3 cols → 2 cols → 1 col)
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8_
  
  - [ ]* 9.3 Write unit tests for Skills section
    - Test programming languages render correctly
    - Test backend technologies render correctly
    - Test frontend technologies render correctly
    - Test databases render correctly
    - Test cloud/DevOps tools render correctly
    - Test development tools render correctly
    - Test practices render correctly
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7_
  
  - [ ]* 9.4 Write property test for staggered animations
    - **Property 9: Staggered animations have incremental delays**
    - **Validates: Requirements 5.8, 9.3**

- [ ] 10. Implement Contact section
  - [x] 10.1 Create Contact component
    - Display email with mailto link
    - Display phone with tel link
    - Display location
    - Render social links (GitHub, LeetCode) with icons
    - Wrap in AnimatedSection for entry animation
    - _Requirements: 1.2, 1.3, 1.4, 1.5, 1.6_
  
  - [ ]* 10.2 Write unit tests for Contact section
    - Test email "tanishqmahra@gmail.com" is displayed
    - Test phone "+91-9354433645" is displayed
    - Test location "Haldwani, Uttarakhand" is displayed
    - _Requirements: 1.2, 1.3, 1.4_

- [ ] 11. Implement Education section
  - [x] 11.1 Create Education component
    - Display institution name
    - Display degree
    - Display duration
    - Wrap in AnimatedSection for entry animation
    - _Requirements: 2.1, 2.2, 2.3_
  
  - [ ]* 11.2 Write unit tests for Education section
    - Test institution "Graphic Era Hill University, Bhimtal, Uttarakhand" is displayed
    - Test degree "Bachelor of Technology in Computer Science and Engineering" is displayed
    - Test duration "Sept 2021 - July 2025" is displayed
    - _Requirements: 2.1, 2.2, 2.3_

- [ ] 12. Implement responsive design
  - [ ] 12.1 Add responsive CSS for all components
    - Define breakpoints (mobile <768px, tablet 768-1023px, desktop ≥1024px)
    - Implement responsive layouts for all sections
    - Ensure single-column layouts on mobile
    - Ensure multi-column layouts on desktop
    - _Requirements: 7.1, 7.2, 7.3_
  
  - [ ] 12.2 Ensure touch-friendly interactive elements
    - Set minimum touch target size of 44x44px for all buttons and links
    - Add appropriate padding and spacing
    - _Requirements: 7.4_
  
  - [ ] 12.3 Implement responsive typography
    - Use clamp() or media queries for fluid font sizes
    - Ensure minimum 16px font size on mobile
    - Scale typography appropriately for larger screens
    - _Requirements: 7.5_
  
  - [ ]* 12.4 Write property test for touch target sizes
    - **Property 17: Touch targets meet minimum size requirements**
    - **Validates: Requirements 7.4**
  
  - [ ]* 12.5 Write property test for text readability
    - **Property 18: Text remains readable across breakpoints**
    - **Validates: Requirements 7.5**
  
  - [ ]* 12.6 Write unit tests for responsive layouts
    - Test desktop layout (≥1024px) uses multi-column
    - Test tablet layout (768-1023px) adjusts appropriately
    - Test mobile layout (<768px) uses single-column
    - _Requirements: 7.1, 7.2, 7.3_

- [ ] 13. Implement accessibility features
  - [ ] 13.1 Add ARIA labels to interactive elements
    - Add aria-label to theme toggle button
    - Add aria-label to navigation menu button
    - Add aria-label to social links
    - Add aria-current to active navigation link
    - _Requirements: 10.1_
  
  - [ ] 13.2 Ensure keyboard navigation
    - Verify all interactive elements are keyboard accessible
    - Add visible focus states to all interactive elements
    - Ensure logical tab order
    - _Requirements: 10.2_
  
  - [ ] 13.3 Add alt text to images and icons
    - Add descriptive alt text to any images
    - Use aria-hidden for decorative icons
    - _Requirements: 10.4_
  
  - [ ] 13.4 Use semantic HTML elements
    - Use header for site header
    - Use nav for navigation
    - Use main for main content
    - Use section for each major section
    - Use footer for contact section
    - _Requirements: 10.5_
  
  - [ ]* 13.5 Write property test for ARIA labels
    - **Property 12: Interactive elements have ARIA labels**
    - **Validates: Requirements 10.1**
  
  - [ ]* 13.6 Write property test for keyboard accessibility
    - **Property 13: All interactive elements are keyboard accessible**
    - **Validates: Requirements 10.2**
  
  - [ ]* 13.7 Write property test for alt text
    - **Property 15: Images have alt text**
    - **Validates: Requirements 10.4**
  
  - [ ]* 13.8 Write property test for semantic HTML
    - **Property 16: Semantic HTML structure is maintained**
    - **Validates: Requirements 10.5**

- [ ] 14. Implement color contrast compliance
  - [ ] 14.1 Define color palette for dark theme
    - Use pitch black (#000000 or #0a0a0a) as background
    - Choose text colors with sufficient contrast (≥4.5:1 ratio)
    - Define accent colors for links and highlights
    - _Requirements: 6.2, 10.3_
  
  - [ ] 14.2 Define color palette for light theme
    - Use light background color
    - Choose text colors with sufficient contrast (≥4.5:1 ratio)
    - Define accent colors for links and highlights
    - _Requirements: 6.3, 10.3_
  
  - [ ]* 14.3 Write property test for color contrast
    - **Property 14: Color contrast meets WCAG AA standards**
    - **Validates: Requirements 10.3**

- [ ] 15. Wire all components together in App
  - [x] 15.1 Create main App component
    - Wrap app with ThemeProvider
    - Import and render Navigation component
    - Import and render all section components in order (Hero, Education, Experience, Projects, Skills, Contact)
    - Apply global styles
    - _Requirements: All_
  
  - [ ] 15.2 Create main entry point
    - Set up React root rendering
    - Import and render App component
    - _Requirements: All_

- [ ] 16. Final integration and polish
  - [ ] 16.1 Add smooth scroll behavior
    - Add CSS scroll-behavior: smooth
    - Ensure smooth scrolling works across browsers
    - _Requirements: 8.2_
  
  - [ ] 16.2 Optimize performance
    - Add lazy loading for images if any
    - Minimize bundle size
    - Test load times and optimize as needed
    - _Requirements: All_
  
  - [ ] 16.3 Test across browsers and devices
    - Test on Chrome, Firefox, Safari
    - Test on mobile devices (iOS and Android)
    - Test on different screen sizes
    - _Requirements: 7.1, 7.2, 7.3_
  
  - [ ]* 16.4 Run full accessibility audit
    - Run jest-axe tests on all components
    - Manually test keyboard navigation
    - Test with screen reader if possible
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5_

- [ ] 17. Checkpoint - Ensure all tests pass
  - Run all unit tests and verify they pass
  - Run all property tests and verify they pass
  - Fix any failing tests
  - Ensure code coverage is adequate
  - Ask the user if questions arise

- [ ] 18. Deployment setup
  - [ ] 18.1 Configure build process
    - Ensure production build works correctly
    - Optimize assets for production
    - _Requirements: All_
  
  - [ ] 18.2 Set up deployment platform
    - Choose hosting platform (Vercel, Netlify, or GitHub Pages)
    - Configure deployment settings
    - Set up automatic deployments from main branch
    - _Requirements: All_
  
  - [ ] 18.3 Deploy to production
    - Deploy initial version
    - Verify site works in production
    - Test all functionality on live site
    - _Requirements: All_

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Property tests validate universal correctness properties with 100+ iterations each
- Unit tests validate specific examples and edge cases
- Build incrementally and test frequently to catch issues early
- The checkpoint task ensures all tests pass before deployment
