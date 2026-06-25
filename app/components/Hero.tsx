'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="inicio" 
      className="container"
      aria-label="Hero"
      style={{
        position: 'relative',
        display: 'flex',
        gap: 0,
        padding: 0,
        minHeight: '90vh',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      {/* Contenedor principal con padding */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          padding: '40px 60px',
          paddingRight: '20px',
          position: 'relative',
          maxWidth: '100%',
        }}
      >
        {/* PARTE 1: Nombre "Gimenez Lidia Elisa" */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            fontFamily: 'var(--font-title)',
            fontSize: 'clamp(40px, 6vw, 60px)',
            fontWeight: 'var(--weight-name)',
            lineHeight: 1.1,
            marginBottom: '16px',
            whiteSpace: 'nowrap',
            position: 'relative',
          }}
        >
          {/* Barra vertical roja detrás del nombre */}
          <span
            style={{
              position: 'absolute',
              left: '-40px',
              top: 0,
              bottom: 0,
              width: '8px',
              backgroundColor: '#F35A53',
            }}
          />
          <span style={{ color: '#F35A53' }}>Gimenez </span>
          <span style={{ color: '#127063' }}>Lidia Elisa</span>
        </motion.h1>

        {/* PARTE 2: Título "Desarrolladora fullstack" */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: 'var(--font-title)',
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 'var(--weight-role)',
            lineHeight: 1.1,
            marginBottom: '40px',
            marginLeft: '35%',
            whiteSpace: 'nowrap',
          }}
        >
          <span style={{ color: '#000000' }}>Desarrolladora </span>
          <span style={{ color: '#F35A53' }}>fullstack</span>
        </motion.h2>

        {/* PARTE 3: Imagen de dispositivos */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            position: 'relative',
            width: '100%',
            marginBottom: '24px',
          }}
        >
          {/* Fondo naranja detrás de la imagen (60% del ancho) */}
          <div
            style={{
              position: 'absolute',
              left: '-60px',
              top: 0,
              bottom: 0,
              width: '60%',
              //backgroundColor: '#F35A53',
              zIndex: 0,
            }}
          />
          
          <img
            src="/inicio.png"
            alt="Ilustración de inicio"
            style={{
              position: 'relative',
              zIndex: 1,
              width: 'clamp(300px, 50%, 600px)',
              height: 'auto',
              objectFit: 'contain',
              borderRadius: 16,
            }}
          />
        </motion.div>

        {/* PARTE 4: Párrafo descriptivo (2-3 líneas, ancho completo) */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '32px',
            //fontSize: 'clamp(16px, 2vw, 24px)',
            color: '#000000',
            lineHeight: 1.6,
            width: '100%',
            maxWidth: '100%',
            paddingRight: '40px',
          }}
        >
          Desarrollo aplicaciones web con React y Next.js, integrando bases de
          datos como MySQL y PostgreSQL.
        </motion.p>
      </div>

      {/* Franja vertical verde a la derecha con "ElisaDev" */}
      <div
        style={{
          backgroundColor: '#127063',
          width: '60px',
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '40px 0',
          position: 'relative',
        }}
      >
        {/* Línea superior */}
        <div
          style={{
            flex: 1,
            width: '2px',
            backgroundColor: '#FFFFFF',
            marginBottom: '20px',
          }}
        />

        {/* Texto vertical "ElisaDev" */}
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            fontFamily: 'var(--font-brand)',
            fontStyle: 'italic',
            fontSize: 'clamp(40px, 4vw, 56px)',
            fontWeight: 700,
            color: '#FFFFFF',
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            whiteSpace: 'nowrap',
            letterSpacing: '2px',
          }}
        >
          ElisaDev
        </motion.span>

        {/* Línea inferior */}
        <div
          style={{
            flex: 1,
            width: '2px',
            backgroundColor: '#FFFFFF',
            marginTop: '20px',
          }}
        />
      </div>
    </section>
  );
}