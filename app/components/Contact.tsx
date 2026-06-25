'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section
    id="contacto" 
      className="container"
      aria-label="Contacto"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 48,
        alignItems: 'start',
        padding: '64px 0',
      }}
    >
      {/* Mensaje lateral */}
      <div style={{ maxWidth: '500px' }}>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: 'var(--font-title)',
            fontSize: '56px',
            fontWeight: 700,
            color: 'var(--color-primary)',
            marginBottom: '24px',
          }}
        >
          Empecemos a trabajar juntos
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '24px',
            color: '#000000',
            marginBottom: '32px',
          }}
        >
          Si estás buscando soluciones web modernas, escalables y centradas en la experiencia de usuario, escribime.
        </motion.p>

        {/* Íconos como botones */}
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=lidiagimenez999@gmail.com&su=Solicitud%20de%20colaboración&body=Hola%20Lidia..."
 style={iconButtonStyle}>
            <Mail size={28} />
          </a>
          <a href="tel:+543786612261" style={iconButtonStyle}>
            <Phone size={28} />
          </a>
          <a href=" https://www.linkedin.com/in/lidia-gimenez-a32921396/" target="_blank" rel="noopener noreferrer" style={iconButtonStyle}>
            <Linkedin size={28} />
          </a>
        </div>
      </div>

      {/* Formulario */}
      <form
        action="lidiagimenez999@gmail.com" // 👈 reemplazá con tu endpoint
        method="POST"
        autoComplete="off" // 👈 desactiva autocompletado en todo el form
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          maxWidth: '500px',
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Nombre completo"
          required
          autoComplete="off" // 👈 desactiva autocompletado en este campo
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          required
          autoComplete="off"
          style={inputStyle}
        />
        <select name="tipo" required style={inputStyle}>
          <option value="">Tipo de proyecto</option>
          <option value="landing">Landing page</option>
          <option value="app">Aplicación web</option>
          <option value="mantenimiento">Mantenimiento / mejora</option>
        </select>
        <textarea
          name="mensaje"
          placeholder="Contame qué necesitás..."
          rows={5}
          required
          autoComplete="off"
          style={{ ...inputStyle, resize: 'vertical' }}
        />

        <button
          type="submit"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '12px 24px',
            backgroundColor: '#127063',
            color: '#FFFFFF',
            fontSize: '20px',
            fontWeight: 600,
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Solicitar colaboración <ArrowRight size={20} />
        </button>
      </form>
    </section>
  );
}

const inputStyle = {
  fontSize: '18px',
  padding: '12px 16px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontFamily: 'var(--font-body)',
  width: '100%',
};

const iconButtonStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  backgroundColor: '#127063',
  color: '#FFFFFF',
  textDecoration: 'none',
  cursor: 'pointer',
};