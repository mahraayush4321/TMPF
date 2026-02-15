import type { PortfolioData } from '../types/portfolio.types';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Tanishq Mahra',
    email: 'tanishqmahra@gmail.com',
    phone: '+91-9354433645',
    location: 'Haldwani, Uttarakhand',
    github: 'https://github.com/mahraayush4321',
    leetcode: 'https://leetcode.com/u/tanishqmahra',
  },

  education: {
    institution: 'Graphic Era Hill University, Bhimtal, Uttarakhand',
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    duration: 'Sept 2021 - July 2025',
    location: 'Bhimtal, Uttarakhand',
  },

  experiences: [
    {
      id: 'highpolar',
      company: 'Highpolar Softwares',
      position: 'Software Developer',
      duration: 'Jan 2025 - Present',
      current: true,
      responsibilities: [
        'Developed and maintained scalable backend services using Node.js and Express.js',
        'Implemented RESTful APIs and WebSocket connections for real-time features',
        'Optimized database queries and improved application performance',
        'Collaborated with cross-functional teams in Agile environment',
        'Conducted code reviews and mentored junior developers',
        'Implemented automated testing and CI/CD pipelines',
      ],
    },
    {
      id: 'sevaro',
      company: 'Sevaro',
      position: 'Software Engineer Intern',
      duration: 'Oct 2023 - March 2024',
      current: false,
      responsibilities: [
        'Built and deployed full-stack web applications using React.js and Node.js',
        'Integrated third-party APIs and services for enhanced functionality',
        'Participated in daily standups and sprint planning sessions',
        'Debugged and resolved production issues in timely manner',
      ],
    },
  ],

  projects: [
    {
      id: 'chess-rating',
      title: 'CHESS-RATING',
      description: 'A real-time multiplayer chess platform with ELO rating system, featuring live gameplay, matchmaking, and distributed architecture for scalability.',
      liveUrl: 'https://chess-rating.vercel.app/home',
      technologies: ['C++', 'Node.js', 'MongoDB', 'React.js', 'WebSockets', 'Distributed Systems'],
      features: [
        'Real-time multiplayer chess gameplay with WebSocket connections',
        'ELO rating system for player rankings and matchmaking',
        'Distributed architecture for horizontal scalability',
        'Move validation and game state management',
        'User authentication and profile management',
        'Game history and statistics tracking',
      ],
    },
    {
      id: 'sports-trivia',
      title: 'SPORTS-TRIVIA',
      description: 'An interactive sports trivia application with real-time scoring, multiple categories, and leaderboard system powered by REST APIs and Redis caching.',
      liveUrl: 'https://sportstriviax.netlify.app/',
      technologies: ['Node.js', 'MongoDB', 'React.js', 'REST APIs', 'Redis'],
      features: [
        'Multiple sports categories with diverse question sets',
        'Real-time scoring and leaderboard system',
        'Redis caching for improved performance',
        'RESTful API architecture for data management',
        'Responsive design for mobile and desktop',
        'User progress tracking and statistics',
      ],
    },
  ],

  skills: {
    programming: [
      'C++ (STL, OOP)',
      'JavaScript',
      'TypeScript',
      'C',
    ],
    backend: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'WebSockets',
      'Event-driven systems',
    ],
    frontend: [
      'React.js',
    ],
    databases: [
      'MongoDB',
      'MySQL',
      'SQL',
    ],
    cloudDevOps: [
      'Firebase',
      'AWS S3',
      'CI/CD fundamentals',
    ],
    tools: [
      'Git',
      'Redis',
      'Postman',
      'Debugging & Profiling Tools',
    ],
    practices: [
      'OOP',
      'Design Patterns',
      'Agile',
      'Code Reviews',
      'Testing',
      'Performance Optimization',
    ],
  },
};
