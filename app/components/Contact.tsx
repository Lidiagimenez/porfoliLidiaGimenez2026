'use client';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, Linkedin } from 'lucide-react';

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    const formEl = e.currentTarget;
    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formEl,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      );
      if (result.status === 200) {
        setSent(true);
        formEl.reset();
      } else {
        setError(true);
      }
    } catch (err) {
      console.error('EmailJS error:', err);
      setError(true);
    } finally {
      setSending(false);
    }
  };

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

        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=lidiagimenez999@gmail.com&su=Solicitud%20de%20colaboración&body=Hola%20Lidia..."
            style={iconButtonStyle}>
            <Mail size={28} />
          </a>
          <a href="https://wa.me/543786612261?text=Hola%20Lidia%2C%20me%20interesa%20trabajar%20con%20vos" target="_blank" rel="noopener noreferrer" style={iconButtonStyle}>
  <Phone size={28} />
</a>
          <a href="https://www.linkedin.com/in/lidia-gimenez-a32921396/" target="_blank" rel="noopener noreferrer" style={iconButtonStyle}>
            <Linkedin size={28} />
          </a>
        </div>
      </div>

      {/* Formulario */}
      <div style={{ maxWidth: '500px' }}>
        {sent ? (
          <div style={{ textAlign: 'center', padding: '48px 0' }}>
            <p style={{ fontSize: '28px', fontWeight: 700, color: '#127063', marginBottom: '8px' }}>¡Mensaje enviado!</p>
            <p style={{ color: '#555', marginBottom: '24px' }}>Te respondo a la brevedad.</p>
            <button onClick={() => setSent(false)} style={{ ...buttonStyle, backgroundColor: 'transparent', color: '#127063', border: '2px solid #127063' }}>
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} autoComplete="off" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {error && (
              <div style={{ background: '#fff0f0', border: '1px solid #fca5a5', borderRadius: '8px', padding: '12px 16px', color: '#b91c1c', fontSize: '14px' }}>
                No se pudo enviar. Por favor escribime directamente a lidiagimenez999@gmail.com
              </div>
            )}
            <input type="text" name="name" placeholder="Nombre completo" required autoComplete="off" style={inputStyle} />
            <input type="email" name="email" placeholder="Correo electrónico" required autoComplete="off" style={inputStyle} />
            <select name="tipo" required style={inputStyle}>
              <option value="">Tipo de proyecto</option>
              <option value="landing">Landing page</option>
              <option value="app">Aplicación web</option>
              <option value="mantenimiento">Mantenimiento / mejora</option>
            </select>
            <textarea name="mensaje" placeholder="Contame qué necesitás..." rows={5} required autoComplete="off" style={{ ...inputStyle, resize: 'vertical' }} />
            <button type="submit" disabled={sending} style={{ ...buttonStyle, opacity: sending ? 0.6 : 1 }}>
              {sending ? 'Enviando...' : <><span>Solicitar</span><ArrowRight size={20} /></>}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

const inputStyle: React.CSSProperties = {
  fontSize: '18px',
  padding: '12px 16px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontFamily: 'var(--font-body)',
  width: '100%',
};

const iconButtonStyle: React.CSSProperties = {
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

const buttonStyle: React.CSSProperties = {
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
};