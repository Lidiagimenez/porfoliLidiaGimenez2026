'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <header aria-label="Barra de navegación"
     style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: '#FFF ',
      }}
    >
      <nav className="container" style={{ display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        padding: '16px 0' }}>
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontFamily: 'var(--font-brand)',
            fontStyle: 'italic', 
            fontSize: 24, 
            fontWeight: 700, 
            color: 'var(--color-primary)' }}
        >
          ElisaDev
        </motion.span>

        <ul style={{ display: 'flex', 
                    gap: 24, 
                    listStyle: 'none', 
                    margin: 0 }}>
          {['Inicio', 'Proyectos', 'Contacto'].map((item) => (
            <li key={item}>
              <motion.a
                href={item === 'Inicio' ? '#inicio'  : `#${item.toLowerCase()}`}
                whileHover={{ scale: 1.02 }}
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {item}
              </motion.a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}