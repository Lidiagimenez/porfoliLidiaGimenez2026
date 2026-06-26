'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <>
      <style>{`
        /* ── Sección principal ── */
        .hero-section {
          position: relative;
          display: flex;
          gap: 0;
          padding: 0;
          min-height: 90vh;
          overflow: hidden;
          width: 100%;
        }

        /* ── Columna de contenido ── */
        .hero-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 40px 60px 40px 60px;
          position: relative;
          max-width: 100%;
          min-width: 0;
        }

        /* ── Nombre ── */
        .hero-name {
          font-family: var(--font-title);
          font-size: clamp(28px, 5vw, 60px);
          font-weight: var(--weight-name);
          line-height: 1.1;
          margin-bottom: 16px;
          position: relative;
          padding-left: 20px;
          white-space: nowrap;
        }

        .hero-name-bar {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 8px;
          background-color: #F35A53;
          border-radius: 2px;
        }

        /* ── Título rol ── */
        .hero-role {
          font-family: var(--font-title);
          font-size: clamp(22px, 4vw, 52px);
          font-weight: var(--weight-role);
          line-height: 1.1;
          margin-bottom: 40px;
          margin-left: clamp(0px, 20%, 35%);
          white-space: nowrap;
        }

        /* ── Imagen ── */
        .hero-image-wrapper {
          position: relative;
          width: 100%;
          margin-bottom: 24px;
        }

        .hero-image {
          position: relative;
          z-index: 1;
          width: clamp(200px, 50%, 600px);
          height: auto;
          object-fit: contain;
          border-radius: 16px;
        }

        /* ── Párrafo descriptivo ── */
        .hero-description {
          font-family: var(--font-body);
          font-size: clamp(16px, 2.2vw, 28px);
          color: #000000;
          line-height: 1.6;
          width: 100%;
          max-width: 700px;
        }

        /* ── Franja lateral verde (desktop) ── */
        .hero-sidebar {
          background-color: #127063;
          width: 60px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 40px 0;
        }

        .hero-sidebar-line {
          flex: 1;
          width: 2px;
          background-color: #FFFFFF;
        }

        .hero-sidebar-text {
          font-family: var(--font-brand);
          font-style: italic;
          font-size: clamp(28px, 3vw, 48px);
          font-weight: 700;
          color: #FFFFFF;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          white-space: nowrap;
          letter-spacing: 2px;
        }

        /* ══ TABLET (≤ 768px) ══ */
        @media (max-width: 768px) {
          .hero-section {
            flex-direction: column;
            min-height: unset;
          }

          .hero-content {
            padding: 32px 24px;
          }

          .hero-name {
            white-space: normal;
            font-size: clamp(28px, 7vw, 48px);
          }

          .hero-role {
            white-space: normal;
            margin-left: 0;
            font-size: clamp(20px, 5.5vw, 40px);
          }

          .hero-image {
            width: clamp(180px, 70%, 480px);
          }

          /* Franja pasa a horizontal al fondo */
          .hero-sidebar {
            width: 100%;
            height: 56px;
            flex-direction: row;
            padding: 0 24px;
          }

          .hero-sidebar-line {
            flex: 1;
            width: auto;
            height: 2px;
          }

          .hero-sidebar-text {
            writing-mode: horizontal-tb;
            transform: none;
            font-size: 24px;
            letter-spacing: 1px;
          }
        }

        /* ══ MÓVIL PEQUEÑO (≤ 480px) ══ */
        @media (max-width: 480px) {
          .hero-content {
            padding: 24px 16px;
          }

          .hero-name {
            font-size: clamp(24px, 8vw, 36px);
          }

          .hero-role {
            font-size: clamp(18px, 6vw, 30px);
            margin-bottom: 28px;
          }

          .hero-image {
            width: 100%;
          }

          .hero-description {
            font-size: clamp(15px, 4vw, 20px);
          }

          .hero-sidebar {
            height: 48px;
          }

          .hero-sidebar-text {
            font-size: 20px;
          }
        }
      `}</style>

      <section
        id="inicio"
        className="container hero-section"
        aria-label="Hero"
      >
        {/* Contenido principal */}
        <div className="hero-content">

          {/* PARTE 1: Nombre */}
          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="hero-name-bar" />
            <span style={{ color: '#F35A53' }}>Gimenez </span>
            <span style={{ color: '#127063' }}>Lidia Elisa</span>
          </motion.h1>

          {/* PARTE 2: Rol */}
          <motion.h2
            className="hero-role"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span style={{ color: '#000000' }}>Desarrolladora </span>
            <span style={{ color: '#F35A53' }}>fullstack</span>
          </motion.h2>

          {/* PARTE 3: Imagen */}
          <motion.div
            className="hero-image-wrapper"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="/inicio.png"
              alt="Ilustración de inicio"
              className="hero-image"
            />
          </motion.div>

          {/* PARTE 4: Descripción */}
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Desarrollo aplicaciones web con React y Next.js, integrando bases de
            datos como MySQL y PostgreSQL.
          </motion.p>
        </div>

        {/* Franja de marca — vertical en desktop, horizontal en móvil */}
        <motion.div
          className="hero-sidebar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="hero-sidebar-line" />
          <span className="hero-sidebar-text">ElisaDev</span>
          <div className="hero-sidebar-line" />
        </motion.div>

      </section>
    </>
  );
}