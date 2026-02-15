// Portfolio Data Types

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  leetcode: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  location: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  responsibilities: string[];
  current: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  liveUrl: string;
  technologies: string[];
  features: string[];
}

export interface Skills {
  programming: string[];
  backend: string[];
  frontend: string[];
  databases: string[];
  cloudDevOps: string[];
  tools: string[];
  practices: string[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  education: Education;
  experiences: Experience[];
  projects: Project[];
  skills: Skills;
}
