'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'
import { buttonPress } from '../utils/animations'

export default function ProjectsSection() {
  const [currentPage, setCurrentPage] = useState<number>(0)
  const projectsPerPage = 3
  const totalPages = Math.ceil(projects.length / projectsPerPage)

  const currentProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  )

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <section
      id="proyectos"
      className="container"
      aria-label="Proyectos"
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
          Proyecto
        </motion.h2>

        {/* Contenedor con línea vertical + párrafo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            marginBottom: '48px',
            maxWidth: '800px',
          }}
        >
          {/* Línea vertical roja */}
          <div
            style={{
              width: '25px',
              backgroundColor: '#F35A53',
              marginRight: '16px',
              borderRadius: '2px',
              alignSelf: 'stretch',
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '32px',
              color: 'var(--color-black)',
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            Una selección de proyectos desarrollados para aplicar buenas prácticas,
            explorar distintas tecnologías y resolver problemas reales mediante el
            desarrollo web.
          </motion.p>
        </div>

        {/* Carrusel de proyectos */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '32px',
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              {currentProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Flechas de navegación */}
          <div style={{ display: 'flex', 
                        justifyContent: 'center', 
                        gap: '16px', 
                        marginTop: '32px' }}>
            <motion.button
              onClick={prevPage}
              style={arrowStyle}
              {...buttonPress}
              aria-label="Proyectos anteriores"
            >
              <ChevronLeft size={32} />
            </motion.button>

            <motion.button
              onClick={nextPage}
              style={arrowStyle}
              {...buttonPress}
              aria-label="Siguientes proyectos"
            >
              <ChevronRight size={32} />
            </motion.button>
          </div>

          {/* Indicadores de página */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px' }}>
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: index === currentPage ? '#127063' : '#127063',
                  opacity: index === currentPage ? 1 : 0.3,
                  border: 'none',
                  cursor: 'pointer',
                }}
                aria-label={`Ir a página ${index + 1}`}
              />
            ))}
          </div>
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
          Elisadev
        </motion.span>

        <div style={{ flex: 1, width: '2px', backgroundColor: '#FFFFFF' }} />
      </div>
    </section>
  )
}

const arrowStyle = {
  padding: '12px',
  backgroundColor: '#f35A53',
  color: '#FFFFFF',
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
}