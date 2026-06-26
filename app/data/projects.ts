import { Project } from "../types/index"

export const projects: Project[] = [
  {
    id: 1,
    links: {
      github: "https://github.com/usuario/landing-page",
      /*github: "https://github.com/usuario/landing-page",*/
      demo: "https://landingjuridico-q3qv.vercel.app/"
    },
    title: "Landing Page Estudio Jurídico",
    description: "La landing presenta las principales áreas de práctica del estudio, casos de éxito, testimonios de clientes y múltiples llamados a la acción para facilitar el contacto",
    slug: "landing-page",        
    icon: "globe",
    context: "Lex & Asociados es una landing page profesional diseñada para un estudio jurídico moderno. El objetivo principal fue transmitir confianza, experiencia y profesionalismo mediante una interfaz elegante, minimalista y optimizada para la conversión de potenciales clientes.",
    technologies: ["Next.js 15", "TypeScript", "Tailwind CSS","Framer Motion","Lucide React","Responsive Design","SEO Optimization","Accessibility (WCAG)","Mobile First Design"],
    learnings: ["Optimización de rendimiento y SEO en Next.js","Implementación de animaciones con Framer Motion","Diseño responsive y accesible según estándares WCAG","Integración de iconos vectoriales con Lucide React"],
    
  },
  {
    id: 2,
    links: {
      github: "https://github.com/usuario/landing-page-running",
      demo: "https://landigrunning.vercel.app/",
    },
    title: "Landing Page Running & Trail Running",
    description: "Ruta Libre Running Club es una landing page inspirada en experiencias outdoor y comunidades de trail running. El diseño busca transmitir aventura, naturaleza, superación personal y sentido de comunidad.",
    slug: "landing-page-running", 
    icon: "plus",
    context: "A diferencia de una página tradicional de eventos deportivos, este proyecto fue concebido como una experiencia visual inmersiva basada en storytelling, donde cada sección invita al visitante a formar parte de futuras aventuras.",
    technologies: ["Next.js 15", "TypeScript", "Framer Motion","EmailJS","Tailwind CSS","Responsive Design","SEO Optimization","Accessibility (WCAG)"],
    learnings: ["Diseño de experiencias digitales orientadas al storytelling. Creación de landing pages emocionales para eventos y comunidades. Integración de formularios mediante EmailJS sin necesidad de backend. Implementación de galerías visuales optimizadas. Desarrollo de animaciones avanzadas con Framer Motion. Optimización de imágenes y rendimiento en aplicaciones Next.js. Diseño UX centrado en comunidades y experiencias outdoor."],
    
  },
  {
    id: 3,
    title: "Next.js Starter App (en  desarrollo)",
    description: "Aplicación basada en la documentación oficial de Next.js.",
    slug: "nextjs-starter-app",   
    icon: "code",
    context: "...",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    learnings: ["..."],
    links: {
      github: "https://github.com/usuario/nextjs-starter",
      demo: "https://nextjs-starter.vercel.app",
    },
  },
  
]