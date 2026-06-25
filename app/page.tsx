import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectsSection from './components/ProjectsSection';

export default function Page() {
  return (
    <>
      <Hero />
      {/*<Projects />*/}
      <ProjectsSection/>
      <Contact/>
    </>
  );
}