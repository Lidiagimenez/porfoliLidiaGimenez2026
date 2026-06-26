'use client'
import { projects } from '../../data/projects'
import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import { use } from 'react'

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const project = projects.find((p) => p.slug === slug)
  if (!project) return notFound()

  return (
    <>
      <style>{`
        .project-wrapper {
          display: grid;
          grid-template-columns: 1fr 60px;
          gap: 32px;
          align-items: stretch;
          padding: 48px 24px;
          min-height: 100vh;
          box-sizing: border-box;
        }

        .project-title {
          font-family: var(--font-title);
          font-size: clamp(32px, 6vw, 64px);
          font-weight: 700;
          color: var(--color-black);
          margin-bottom: 16px;
          line-height: 1.1;
        }

        .project-description {
          font-family: var(--font-body);
          font-size: clamp(18px, 3vw, 32px);
          color: var(--color-black);
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .project-links {
          display: flex;
          gap: 16px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .btn-demo {
          font-family: var(--font-body);
          font-size: 16px;
          background-color: #127063;
          color: #FFFFFF;
          padding: 10px 24px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          display: inline-block;
        }

        .btn-github {
          font-family: var(--font-body);
          font-size: 16px;
          background-color: #111111;
          color: #FFFFFF;
          padding: 10px 24px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          display: inline-block;
        }

        .project-context-block {
          display: flex;
          align-items: flex-start;
          margin-bottom: 32px;
          max-width: 800px;
        }

        .context-bar {
          flex-shrink: 0;
          width: 6px;
          background-color: #F35A53;
          margin-right: 16px;
          border-radius: 2px;
          align-self: stretch;
        }

        .project-context-text {
          font-family: var(--font-body);
          font-size: clamp(16px, 2.5vw, 24px);
          color: var(--color-black);
          margin: 0;
          line-height: 1.6;
        }

        .project-section-title {
          font-family: var(--font-title);
          font-size: clamp(20px, 2.5vw, 28px);
          margin-bottom: 12px;
        }

        .project-list {
          font-family: var(--font-body);
          font-size: clamp(16px, 2vw, 20px);
          margin-bottom: 32px;
          padding-left: 4px;
          list-style: none;
          margin-left: 0;
        }

        .project-list li {
          margin-bottom: 6px;
        }

        .btn-back {
          font-family: var(--font-body);
          font-size: 18px;
          background-color: #F35A53;
          color: #FFFFFF;
          padding: 12px 24px;
          border-radius: 8px;
          text-decoration: none;
          display: inline-block;
        }

        /* Franja vertical derecha */
        .sidebar-brand {
          background-color: #127063;
          width: 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 20px 0;
          border-radius: 4px;
        }

        .sidebar-line {
          flex: 1;
          width: 2px;
          background-color: #FFFFFF;
        }

        .sidebar-text {
          font-family: var(--font-brand);
          font-style: italic;
          font-size: 40px;
          font-weight: 700;
          color: #FFFFFF;
          writing-mode: vertical-rl;
          white-space: nowrap;
        }

        /* ── Tablet (≤ 768px) ── */
        @media (max-width: 768px) {
          .project-wrapper {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto;
            padding: 32px 20px;
            gap: 24px;
          }

          /* En tablet/móvil la franja va al fondo, horizontal */
          .sidebar-brand {
            width: 100%;
            height: 56px;
            flex-direction: row;
            padding: 0 20px;
            border-radius: 4px;
          }

          .sidebar-line {
            flex: 1;
            height: 2px;
            width: auto;
          }

          .sidebar-text {
            writing-mode: horizontal-tb;
            font-size: 28px;
          }
        }

        /* ── Móvil pequeño (≤ 480px) ── */
        @media (max-width: 480px) {
          .project-wrapper {
            padding: 24px 16px;
            gap: 20px;
          }

          .project-links {
            flex-direction: column;
          }

          .btn-demo,
          .btn-github,
          .btn-back {
            text-align: center;
            width: 100%;
            box-sizing: border-box;
          }

          .sidebar-text {
            font-size: 22px;
          }
        }
      `}</style>

      <section className="container project-wrapper">

        {/* Contenido principal */}
        <div>
          <motion.h2
            className="project-title"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {project.title}
          </motion.h2>

          <motion.p
            className="project-description"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {project.description}
          </motion.p>

          {/* Botones de enlaces */}
          <div className="project-links">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-demo"
              >
                Landing Demo
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-github"
              >
                Ver GitHub
              </a>
            )}
          </div>

          {/* Línea roja + contexto */}
          <div className="project-context-block">
            <div className="context-bar" />
            <p className="project-context-text">{project.context}</p>
          </div>

          {/* Tecnologías */}
          <h3 className="project-section-title">Tecnologías utilizadas</h3>
          <ul className="project-list">
            {project.technologies.map((tech, i) => (
              <li key={i}>• {tech}</li>
            ))}
          </ul>

          {/* Qué aprendí */}
          <h3 className="project-section-title">Qué aprendí</h3>
          <ul className="project-list">
            {project.learnings.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>

          {/* Botón volver */}
          <div style={{ marginTop: '48px' }}>
            <a href="/#proyectos" className="btn-back">
              ← Volver a la página anterior
            </a>
          </div>
        </div>

        {/* Franja de marca — vertical en desktop, horizontal en móvil */}
        <motion.div
          className="sidebar-brand"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="sidebar-line" />
          <span className="sidebar-text">ElisaDev</span>
          <div className="sidebar-line" />
        </motion.div>

      </section>
    </>
  )
}