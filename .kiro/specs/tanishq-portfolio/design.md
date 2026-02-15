# Design Document: Tanishq Mahra Portfolio Website

## Overview

This portfolio website is a single-page React application that showcases Tanishq Mahra's professional profile, work experience, projects, and technical skills. The application features a modern, animated interface with dark/light theme support and responsive design.

The architecture follows a component-based approach using React.js, with a focus on performance, accessibility, and user experience. The design emphasizes smooth animations, clean layouts, and intuitive navigation.

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         App Component                        │
│  ┌───────────────────────────────────────────────────────┐  │
│  │              Theme Provider (Context)                  │  │
│  │  ┌─────────────────────────────────────────────────┐  │  │
│  │  │           Navigation Component                   │  │  │
│  │  └─────────────────────────────────────────────────┘  │  │
│  │  ┌─────────────────────────────────────────────────┐  │  │
│  │  │           Hero/About Section                     │  │  │
│  │  └─────────────────────────────────────────────────┘  │  │
│  │  ┌─────────────────────────────────────────────────┐  │  │
│  │  │           Work Experience Section                │  │  │
│  │  │  - Experience Card Components                    │  │  │
│  │  └─────────────────────────────────────────────────┘  │  │
│  │  ┌─────────────────────────────────────────────────┐  │  │
│  │  │           Projects Section                       │  │  │
│  │  │  - Project Card Components                       │  │  │
│  │  └─────────────────────────────────────────────────┘  │  │
│  │  ┌─────────────────────────────────────────────────┐  │  │
│  │  │           Skills Section                         │  │  │
│  │  │  - Skill Category Components                     │  │  │
│  │  └─────────────────────────────────────────────────┘  │  │
│  │  ┌─────────────────────────────────────────────────┐  │  │
│  │  │           Contact Section                        │  │  │
│  │  └─────────────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### Component Hierarchy

1. **App Component**: Root component that wraps the entire application
2. **ThemeProvider**: Context provider for theme management
3. **Navigation**: Fixed/sticky navigation bar with section links
4. **Section Components**: Hero, Experience, Projects, Skills, Contact
5. **Card Components**: Reusable cards for experience and projects
6. **Animation Wrapper**: HOC or component for intersection observer animations

## Components and Interfaces

### 1. Theme Management

**ThemeContext**
```typescript
interface ThemeContextType {
  theme: 'dark' | 'light'
  toggleTheme: () => void
}

interface ThemeProviderProps {
  children: ReactNode
}
```

**ThemeProvider Component**
- Manages theme state using React Context
- Persists theme preference to localStorage
- Applies theme class to document root
- Provides theme toggle function to children

**Implementation Notes:**
- Use `localStorage.getItem('theme')` to load saved preference
- Default to 'dark' theme if no preference exists
- Apply theme by setting `data-theme` attribute on document root
- CSS variables will handle color scheme switching

### 2. Navigation Component

**NavigationProps**
```typescript
interface NavigationProps {
  sections: Array<{
    id: string
    label: string
  }>
}
```

**Navigation Component**
- Fixed position navigation bar
- Smooth scroll to sections on click
- Active section highlighting based on scroll position
- Responsive hamburger menu for mobile
- Theme toggle button integrated

**Implementation Notes:**
- Use Intersection Observer API to detect active section
- Implement smooth scroll with `scrollIntoView({ behavior: 'smooth' })`
- Mobile menu toggles with animation
- Z-index management for overlay

### 3. Hero/About Section

**HeroProps**
```typescript
interface HeroProps {
  name: string
  title: string
  bio: string
  socialLinks: Array<{
    platform: string
    url: string
    icon: string
  }>
}
```

**Hero Component**
- Large heading with name
- Animated text introduction
- Social links (GitHub, LeetCode)
- Call-to-action buttons
- Animated background or gradient

**Implementation Notes:**
- Typewriter effect for bio text
- Staggered fade-in animations for elements
- Responsive typography scaling

### 4. Work Experience Section

**ExperienceData**
```typescript
interface Experience {
  id: string
  company: string
  position: string
  duration: string
  responsibilities: string[]
  current: boolean
}

interface ExperienceSectionProps {
  experiences: Experience[]
}
```

**ExperienceCard Component**
```typescript
interface ExperienceCardProps {
  experience: Experience
  index: number
}
```

**Implementation Notes:**
- Timeline layout with alternating cards (desktop)
- Vertical stack layout (mobile)
- Fade-in and slide animations on scroll
- Hover effects with scale and shadow
- Staggered animation delays based on index

### 5. Projects Section

**ProjectData**
```typescript
interface Project {
  id: string
  title: string
  description: string
  liveUrl: string
  technologies: string[]
  features: string[]
}

interface ProjectsSectionProps {
  projects: Project[]
}
```

**ProjectCard Component**
```typescript
interface ProjectCardProps {
  project: Project
  index: number
}
```

**Implementation Notes:**
- Grid layout (2 columns on desktop, 1 on mobile)
- Card flip or reveal animation on scroll
- Hover effects with image/gradient overlay
- External link icon for live demo
- Technology tags with color coding

### 6. Skills Section

**SkillsData**
```typescript
interface SkillCategory {
  category: string
  skills: string[]
}

interface SkillsSectionProps {
  skillCategories: SkillCategory[]
}
```

**SkillCategory Component**
```typescript
interface SkillCategoryProps {
  category: SkillCategory
  index: number
}
```

**Implementation Notes:**
- Grid layout for skill categories
- Pill/badge design for individual skills
- Staggered fade-in animations
- Hover effects on skill badges
- Responsive grid (3 cols → 2 cols → 1 col)

### 7. Contact Section

**ContactProps**
```typescript
interface ContactInfo {
  email: string
  phone: string
  location: string
  socialLinks: Array<{
    platform: string
    url: string
    icon: string
  }>
}

interface ContactSectionProps {
  contactInfo: ContactInfo
}
```

**Implementation Notes:**
- Centered layout with contact information
- Clickable email and phone (mailto: and tel: links)
- Social media icons with hover animations
- Simple, clean design
- Optional contact form (future enhancement)

### 8. Animation System

**useIntersectionObserver Hook**
```typescript
interface UseIntersectionObserverOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

function useIntersectionObserver(
  options?: UseIntersectionObserverOptions
): [React.RefObject<HTMLElement>, boolean]
```

**AnimatedSection Component**
```typescript
interface AnimatedSectionProps {
  children: ReactNode
  animation?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right'
  delay?: number
  className?: string
}
```

**Implementation Notes:**
- Custom hook wraps Intersection Observer API
- Returns ref and isVisible boolean
- AnimatedSection applies CSS classes based on visibility
- CSS transitions handle actual animations
- Respect `prefers-reduced-motion` media query

## Data Models

### Portfolio Data Structure

```typescript
interface PortfolioData {
  personal: {
    name: string
    email: string
    phone: string
    location: string
    github: string
    leetcode: string
  }
  
  education: {
    institution: string
    degree: string
    duration: string
    location: string
  }
  
  experiences: Experience[]
  
  projects: Project[]
  
  skills: {
    programming: string[]
    backend: string[]
    frontend: string[]
    databases: string[]
    cloudDevOps: string[]
    tools: string[]
    practices: string[]
  }
}
```

**Data Storage:**
- Static data stored in `src/data/portfolio.ts`
- Exported as constant for import by components
- Type-safe with TypeScript interfaces
- Easy to update without touching component code

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*


### Property 1: Section visibility triggers animations

*For any* section component with animation enabled, when that section enters the viewport, animation classes should be applied to trigger entry animations.

**Validates: Requirements 3.1, 4.1, 9.1**

### Property 2: Hover states apply animations

*For any* interactive element (cards, buttons, links), when a hover event occurs, hover animation classes or styles should be applied.

**Validates: Requirements 3.6, 9.2**

### Property 3: Theme state maps to CSS attributes

*For any* theme state ('dark' or 'light'), the corresponding theme attribute should be applied to the document root, enabling the appropriate color scheme.

**Validates: Requirements 6.2, 6.3**

### Property 4: Theme preference persistence round-trip

*For any* theme selection, saving to localStorage and then loading from localStorage should return the same theme value.

**Validates: Requirements 6.4, 6.5**

### Property 5: Theme changes are animated

*For any* theme toggle action, transition animations should be applied during the theme change.

**Validates: Requirements 6.6**

### Property 6: External links open in new tabs

*For any* external link (live demo links, social links), the link element should have `target="_blank"` and `rel="noopener noreferrer"` attributes.

**Validates: Requirements 4.8**

### Property 7: Navigation links scroll to sections

*For any* navigation link click, the page should smoothly scroll to the corresponding section element.

**Validates: Requirements 8.2**

### Property 8: Active navigation reflects visible section

*For any* scroll position, the navigation link corresponding to the currently visible section should have the active state class applied.

**Validates: Requirements 8.3**

### Property 9: Staggered animations have incremental delays

*For any* collection of elements with staggered animations, each element should have an animation delay that increases based on its index position.

**Validates: Requirements 5.8, 9.3**

### Property 10: Animation durations are bounded

*For any* CSS animation or transition, the duration value should be less than or equal to 800ms.

**Validates: Requirements 9.4**

### Property 11: Reduced motion preference disables animations

*For any* animated element, when the user's browser has `prefers-reduced-motion: reduce` set, animations should be disabled or significantly simplified.

**Validates: Requirements 9.5**

### Property 12: Interactive elements have ARIA labels

*For any* interactive element (buttons, links, controls) that doesn't have visible text, an appropriate `aria-label` or `aria-labelledby` attribute should be present.

**Validates: Requirements 10.1**

### Property 13: All interactive elements are keyboard accessible

*For any* interactive element, it should be reachable via keyboard navigation (Tab key) and have a visible focus state.

**Validates: Requirements 10.2**

### Property 14: Color contrast meets WCAG AA standards

*For any* text element in both dark and light themes, the contrast ratio between text color and background color should be at least 4.5:1 for normal text and 3:1 for large text.

**Validates: Requirements 10.3**

### Property 15: Images have alt text

*For any* image element, an `alt` attribute with descriptive text should be present.

**Validates: Requirements 10.4**

### Property 16: Semantic HTML structure is maintained

*For any* page section, appropriate semantic HTML5 elements (header, nav, main, section, article, footer) should be used instead of generic div elements.

**Validates: Requirements 10.5**

### Property 17: Touch targets meet minimum size requirements

*For any* interactive element on mobile viewports, the touch target size should be at least 44x44 pixels.

**Validates: Requirements 7.4**

### Property 18: Text remains readable across breakpoints

*For any* text element, the font size should be at least 16px on mobile devices and scale appropriately for larger screens.

**Validates: Requirements 7.5**

## Error Handling

### Theme Loading Errors

**Scenario:** localStorage is unavailable or corrupted
- **Handling:** Gracefully fall back to default dark theme
- **Implementation:** Wrap localStorage access in try-catch blocks
- **User Impact:** User sees default theme, no application crash

### Animation Performance

**Scenario:** Low-performance devices struggle with animations
- **Handling:** Use CSS `will-change` property sparingly, leverage GPU acceleration
- **Implementation:** Apply `transform` and `opacity` for animations (GPU-accelerated)
- **User Impact:** Smooth animations even on lower-end devices

### Intersection Observer Unavailability

**Scenario:** Browser doesn't support Intersection Observer API
- **Handling:** Provide polyfill or fallback to showing all content without animations
- **Implementation:** Check for API support, load polyfill if needed
- **User Impact:** Content still visible, animations may be simplified

### External Link Failures

**Scenario:** Live demo links are broken or unavailable
- **Handling:** Links still render, browser handles 404 errors
- **Implementation:** No special handling needed, standard link behavior
- **User Impact:** User sees standard browser error page

### Responsive Layout Edge Cases

**Scenario:** Very small screens (<320px) or very large screens (>2560px)
- **Handling:** Use min/max width constraints, fluid typography
- **Implementation:** CSS clamp() for font sizes, max-width containers
- **User Impact:** Content remains readable and accessible

## Testing Strategy

### Unit Testing Approach

Unit tests will focus on:
- **Component rendering**: Verify components render with correct props
- **User interactions**: Test button clicks, theme toggles, navigation
- **Data display**: Verify correct data is displayed from portfolio data
- **Edge cases**: Empty states, missing data, boundary conditions

**Testing Library:** React Testing Library (recommended for React applications)
- Encourages testing user behavior rather than implementation details
- Provides utilities for querying DOM elements
- Supports user event simulation

**Example Unit Tests:**
- Theme toggle button changes theme state
- Navigation link click scrolls to section
- Project cards display correct live demo links
- Contact information renders correctly
- Mobile menu opens and closes

### Property-Based Testing Approach

Property tests will verify universal behaviors across all inputs:
- **Animation properties**: All sections trigger animations on visibility
- **Theme properties**: Theme state correctly maps to CSS
- **Accessibility properties**: All interactive elements meet accessibility standards
- **Responsive properties**: Layouts adapt correctly at all breakpoints

**Testing Library:** fast-check (for JavaScript/TypeScript property-based testing)
- Generates random test cases automatically
- Shrinks failing cases to minimal examples
- Integrates with Jest or other test runners

**Configuration:**
- Minimum 100 iterations per property test
- Each test tagged with: `Feature: tanishq-portfolio, Property {N}: {description}`

**Example Property Tests:**
- For any section component, visibility triggers animations (Property 1)
- For any theme state, correct CSS attributes are applied (Property 3)
- For any interactive element, ARIA labels are present (Property 12)
- For any text element, color contrast meets WCAG AA (Property 14)

### Integration Testing

Integration tests will verify:
- **Theme persistence**: Theme saves to and loads from localStorage
- **Scroll behavior**: Navigation and section visibility work together
- **Animation coordination**: Multiple animations don't conflict
- **Responsive behavior**: Layout changes work across breakpoints

### Visual Regression Testing (Optional)

For ensuring UI consistency:
- **Tool:** Percy, Chromatic, or similar
- **Coverage:** Key pages in both themes, multiple breakpoints
- **Frequency:** On pull requests and before releases

### Accessibility Testing

Automated accessibility testing:
- **Tool:** axe-core, jest-axe, or Lighthouse CI
- **Coverage:** All major sections and interactive elements
- **Standards:** WCAG 2.1 Level AA compliance
- **Manual testing:** Keyboard navigation, screen reader testing

### Performance Testing

Performance benchmarks:
- **Metrics:** First Contentful Paint, Time to Interactive, Cumulative Layout Shift
- **Tool:** Lighthouse, WebPageTest
- **Targets:** FCP < 1.5s, TTI < 3.5s, CLS < 0.1
- **Testing:** On representative devices and network conditions

### Test Organization

```
src/
├── components/
│   ├── Hero/
│   │   ├── Hero.tsx
│   │   ├── Hero.test.tsx          # Unit tests
│   │   └── Hero.properties.test.tsx # Property tests
│   ├── Experience/
│   │   ├── ExperienceCard.tsx
│   │   ├── ExperienceCard.test.tsx
│   │   └── ExperienceCard.properties.test.tsx
│   └── ...
├── hooks/
│   ├── useTheme.ts
│   ├── useTheme.test.ts
│   └── useTheme.properties.test.ts
└── __tests__/
    ├── integration/
    │   ├── navigation.test.tsx
    │   └── theme-persistence.test.tsx
    └── accessibility/
        └── a11y.test.tsx
```

### Continuous Integration

CI pipeline should:
1. Run all unit tests
2. Run all property tests (100+ iterations each)
3. Run integration tests
4. Run accessibility tests
5. Generate coverage report (target: >80%)
6. Run Lighthouse performance audit
7. Block merge if tests fail

## Implementation Notes

### Technology Stack

**Core:**
- React 18+ (with hooks)
- TypeScript for type safety
- Vite or Create React App for build tooling

**Styling:**
- CSS Modules or Styled Components for component styling
- CSS Variables for theme management
- Framer Motion or CSS animations for animations

**Testing:**
- Jest as test runner
- React Testing Library for component tests
- fast-check for property-based tests
- jest-axe for accessibility tests

**Deployment:**
- Vercel, Netlify, or GitHub Pages for hosting
- Automatic deployments from main branch
- Preview deployments for pull requests

### File Structure

```
portfolio/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navigation/
│   │   ├── Hero/
│   │   ├── Experience/
│   │   ├── Projects/
│   │   ├── Skills/
│   │   ├── Contact/
│   │   └── common/
│   │       ├── AnimatedSection/
│   │       └── ThemeToggle/
│   ├── context/
│   │   └── ThemeContext.tsx
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   └── useIntersectionObserver.ts
│   ├── data/
│   │   └── portfolio.ts
│   ├── styles/
│   │   ├── global.css
│   │   ├── themes.css
│   │   └── animations.css
│   ├── types/
│   │   └── portfolio.types.ts
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

### Performance Optimizations

1. **Code Splitting:** Lazy load sections below the fold
2. **Image Optimization:** Use WebP format with fallbacks, lazy loading
3. **CSS Optimization:** Critical CSS inline, defer non-critical styles
4. **Bundle Size:** Tree shaking, minimize dependencies
5. **Caching:** Leverage browser caching for static assets

### Browser Support

**Target Browsers:**
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile Safari (iOS 13+)
- Chrome Mobile (Android 8+)

**Polyfills Needed:**
- Intersection Observer (for older browsers)
- CSS custom properties (for IE11 if required)

### Accessibility Considerations

1. **Keyboard Navigation:** All interactive elements accessible via Tab
2. **Focus Management:** Visible focus indicators, logical tab order
3. **Screen Readers:** Proper ARIA labels, semantic HTML
4. **Color Contrast:** WCAG AA compliance in both themes
5. **Motion Sensitivity:** Respect prefers-reduced-motion
6. **Text Scaling:** Support browser text zoom up to 200%

### SEO Considerations

1. **Meta Tags:** Title, description, Open Graph tags
2. **Semantic HTML:** Proper heading hierarchy (h1-h6)
3. **Alt Text:** Descriptive alt text for all images
4. **Structured Data:** JSON-LD for person/professional schema
5. **Performance:** Fast load times improve SEO ranking
6. **Mobile-Friendly:** Responsive design is SEO factor

### Future Enhancements

Potential features for future iterations:
- Blog section for technical articles
- Contact form with email integration
- Project filtering by technology
- Dark/light/auto theme (system preference)
- Internationalization (i18n) support
- Analytics integration
- Resume download functionality
- Testimonials section
