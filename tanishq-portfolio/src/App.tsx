import './App.css'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { ParticleBackground } from './components/ParticleBackground'
import { ScrollProgress } from './components/ScrollProgress'
import { portfolioData } from './data/portfolio'

function App() {
  return (
    <div className="app">
      <ScrollProgress />
      <ParticleBackground />
      <Navigation />
      
      <main>
        <Hero />
        <Education education={portfolioData.education} />
        <Experience experiences={portfolioData.experiences} />
        <Projects projects={portfolioData.projects} />
        <Skills />
        <Contact personal={portfolioData.personal} />
      </main>
    </div>
  )
}

export default App
