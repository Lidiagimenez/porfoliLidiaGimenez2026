'use client'
  import { projects } from '../../data/projects'
  import { notFound } from 'next/navigation'
  import { motion } from 'framer-motion'
import { use } from 'react'

  export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)   //  unwrap del Promise
  const project = projects.find((p) => p.slug === slug)
  if (!project) return notFound()



    return (
      <section
        className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: 32,
          alignItems: 'stretch',
          padding: '48px 0',
          minHeight: '100vh',
        }}
      >
        {/* Contenido principal */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{
              fontFamily: 'var(--font-title)',
              fontSize: '64px',
              fontWeight: 700,
              color: 'var(--color-black)',
              marginBottom: '16px',
            }}
          >
            {project.title}
          </motion.h2>

          {/* Párrafo de descripción */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '32px',
              color: 'var(--color-black)',
              marginBottom: '32px',
              lineHeight: 1.6,
            }}
          >
            {project.description}
          </motion.p>

          {/* Línea + contexto */}
          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '32px', maxWidth: '800px' }}>
            <div
              style={{
                width: '25px',
                backgroundColor: '#F35A53',
                marginRight: '16px',
                borderRadius: '2px',
                alignSelf: 'stretch',
              }}
            />
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '24px',
                color: 'var(--color-black)',
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              {project.context}
            </p>
          </div>

          {/* Tecnologías */}
          <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '28px', marginBottom: '12px' }}>
            Tecnologías utilizadas
          </h3>
          <ul style={{ fontFamily: 'var(--font-body)', fontSize: '20px', marginBottom: '32px' }}>
            {project.technologies.map((tech, i) => (
              <li key={i}>• {tech}</li>
            ))}
          </ul>

          {/* Qué aprendí */}
          <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '28px', marginBottom: '12px' }}>
            Qué aprendí
          </h3>
          <ul style={{ fontFamily: 'var(--font-body)', fontSize: '20px', marginBottom: '32px' }}>
            {project.learnings.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>

          {/* Enlaces */}
          <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '28px', marginBottom: '12px' }}>
            Ver proyecto y código fuente
          </h3>
          <ul style={{ fontFamily: 'var(--font-body)', fontSize: '20px' }}>
            <li>
              • <a href={project.links.github} target="_blank">Código fuente (GitHub)</a>
            </li>
            <li>
              • <a href={project.links.demo} target="_blank">Demo en Vercel</a>
            </li>
          </ul>

          {/* Botón volver */}
          <div style={{ marginTop: '48px' }}>
            <a href="/#proyectos" style={{
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              backgroundColor: '#F35A53',
              color: '#FFFFFF',
              padding: '12px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
            }}>
              ← Volver a la página anterior
            </a>
          </div>
        </div>

        {/* Franja vertical derecha con ElisaDev */}
        <div
          style={{
            backgroundColor: '#127063',
            width: '60px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
            padding: '20px 0',
          }}
        >
          <div style={{ flex: 1, width: '2px', backgroundColor: '#FFFFFF' }} />
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: 'var(--font-brand)',
              fontStyle: 'italic',
              fontSize: 48,
              fontWeight: 700,
              color: '#FFFFFF',
              writingMode: 'vertical-rl',
              whiteSpace: 'nowrap',
            }}
          >
            ElisaDev
          </motion.span>
          <div style={{ flex: 1, width: '2px', backgroundColor: '#FFFFFF' }} />
        </div>
      </section>
    )
  }