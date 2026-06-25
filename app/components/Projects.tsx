'use client';
import { motion } from 'framer-motion';
import { Code, Globe, Calculator } from "lucide-react";

export default function Projects() {
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
          {/* Línea vertical */}
          <div
            style={{
              width: '25px',
              backgroundColor: '#F35A53',
              marginRight: '16px',
              borderRadius: '2px',
              alignSelf: 'stretch',
            }}
          />

          {/* Párrafo */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '32px',
              color: 'var(--color-black)',
              margin: 0,
            }}
          >
            Una selección de proyectos desarrollados para aplicar buenas prácticas, explorar distintas tecnologías y
            resolver problemas reales mediante el desarrollo web.
          </motion.p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
          }}
        >
          <ProjectCard
            icon={Code}
            title="Next.js Starter App"
            description="Aplicación basada en la documentación oficial de Next.js."
          />
          <ProjectCard
            icon={Globe}
            title="Landing Page Corporativa"
            description="Landing page responsive enfocada en diseño y experiencia de usuario."
          />
          <ProjectCard
            icon={Calculator}
            title="Calculadora de Calorías"
            description="Aplicación web que permite calcular las calorías consumidas."
          />
        </div>
      </div>

      {/* Franja vertical derecha con ElisaDev */}
      <div
        style={{
          backgroundColor: '#127063',
          width: '60px',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
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
          {/* Línea superior */}
          <div
            style={{
              flex: 1,
              width: '2px',
              backgroundColor: '#FFFFFF',
            }}
          />

          {/* Texto vertical */}
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

          {/* Línea inferior */}
          <div
            style={{
              flex: 1,
              width: '2px',
              backgroundColor: '#FFFFFF',
            }}
          />
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-primary)',
        borderRadius: 'var(--radius-card)',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '16px',
      }}
    >
      {/* Ícono */}
      <Icon size={32} color="#FFFFFF" />

      <h3 style={{ fontSize: '28px', 
        fontFamily: 'var(--font-title)', 
        margin: 0,
        color: '#FFFFFF' }}>
        {title}
      </h3>

      {/* Contenedor con línea + párrafo */}
      <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
        <div
          style={{
            width: '4px',
            backgroundColor: '#F35A53',
            marginRight: '12px',
            borderRadius: '2px',
            alignSelf: 'stretch',
          }}
        />
        <p
          style={{
            fontSize: '20px',
            fontFamily: 'var(--font-body)',
            margin: 0,
            color: '#FFFFFF',
          }}
        >
          {description}
        </p>
      </div>

      <button
        style={{
          marginTop: 'auto',
          padding: '8px 16px',
          backgroundColor: '#F35A53',
          color: '#FFFFFF',
          border: 'none',
          borderRadius: 8,
          fontSize: '18px',
          cursor: 'pointer',
        }}
      >
        Ver proyecto
      </button>
    </div>
  );
}