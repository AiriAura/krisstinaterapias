// components/ModalTerapia.jsx
'use client';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, Check, Clock, Star, MessageCircle } from 'lucide-react';
import { getTestimoniosPorTerapia } from '../data/testimonios';
import TestimonioCard from './TestimonioCard';

export default function ModalTerapia({ terapia, onClose, onReservar }) {
  // Bloquear scroll del body cuando el modal está abierto
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!terapia) return null;

  const testimonios = getTestimoniosPorTerapia(terapia.id);

  const handleWhatsApp = () => {
    const mensaje = `Hola Cristina, me interesa ${terapia.titulo}. ¿Cuándo tienes disponibilidad?`;
    const url = `https://wa.me/56912345678?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="modal-container"
          initial={{ scale: 0.9, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 50 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header con imagen */}
          <div className="modal-header">
            <button className="modal-close" onClick={onClose} aria-label="Cerrar modal">
              <X size={24} />
            </button>
            
            <div className="modal-hero-image">
              <Image 
                src={terapia.imagen} 
                alt={terapia.alt}
                width={1200} 
                height={400}
                style={{width: '100%', height: '300px', objectFit: 'cover'}}
              />
              <div className="modal-hero-overlay">
                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {terapia.beneficioPrincipal}
                </motion.h2>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="modal-subtitle"
                >
                  {terapia.titulo} • {terapia.subtitulo}
                </motion.p>
              </div>
            </div>
          </div>

          {/* Contenido scrolleable */}
          <div className="modal-body">
            {/* Badges de confianza */}
            <motion.div 
              className="modal-trust-badges"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="trust-badge">
                <Star size={20} fill="#FFD700" color="#FFD700" />
                <span>{terapia.rating} / 5.0</span>
              </div>
              <div className="trust-badge">
                <Check size={20} />
                <span>{terapia.testimonios} personas atendidas</span>
              </div>
              <div className="trust-badge">
                <Clock size={20} />
                <span>{terapia.duracion} por sesión</span>
              </div>
            </motion.div>

            {/* ¿Para quién es? */}
            <motion.section 
              className="modal-section"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3>¿Esta terapia es para ti?</h3>
              <ul className="checklist">
                {terapia.paraQuien?.map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Check size={20} className="check-icon" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            {/* Qué incluye la sesión */}
            <motion.section 
              className="modal-section modal-section-highlight"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h3>¿Qué incluye tu sesión?</h3>
              <ul className="includes-list">
                {terapia.queIncluyeSesion?.map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="includes-icon">✨</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            {/* Resultados esperados (Timeline) */}
            {terapia.resultados && (
              <motion.section 
                className="modal-section"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                <h3>Tu viaje de transformación</h3>
                <div className="results-timeline">
                  {Object.entries(terapia.resultados).map(([periodo, resultado], index) => (
                    <motion.div 
                      key={periodo}
                      className="timeline-item"
                      initial={{ x: -30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 }}
                    >
                      <div className="timeline-marker"></div>
                      <div className="timeline-content">
                        <span className="timeline-period">
                          {periodo.replace('_', ' ').replace('sesion', 'Sesión ').replace('semana', 'Semana ').replace('mes', 'Mes ').replace('largo plazo', 'Largo plazo')}
                        </span>
                        <p>{resultado}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Testimonios */}
            {testimonios.length > 0 && (
              <motion.section 
                className="modal-section modal-testimonios"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                <h3>Historias de transformación</h3>
                <div className="testimonios-grid">
                  {testimonios.map((testimonio, index) => (
                    <TestimonioCard 
                      key={testimonio.id} 
                      testimonio={testimonio}
                      index={index}
                    />
                  ))}
                </div>
              </motion.section>
            )}

            {/* Precio y Garantía */}
            <motion.section 
              className="modal-section modal-pricing"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="pricing-card">
                <div className="pricing-header">
                  <span className="pricing-label">Inversión en tu bienestar</span>
                  <span className="pricing-amount">{terapia.precio}</span>
                </div>
                {terapia.oferta && (
                  <div className="pricing-offer">
                    🎁 {terapia.oferta}
                  </div>
                )}
                <div className="pricing-guarantee">
                  <Check size={18} />
                  <span>Primera consulta informativa gratis</span>
                </div>
                <div className="pricing-guarantee">
                  <Check size={18} />
                  <span>Sin compromiso de continuidad</span>
                </div>
                <div className="pricing-guarantee">
                  <Check size={18} />
                  <span>100% confidencial</span>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Footer sticky con CTAs */}
          <motion.div 
            className="modal-footer"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button 
              className="btn-modal-whatsapp"
              onClick={handleWhatsApp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle size={20} />
              Agendar por WhatsApp
            </motion.button>
            <motion.button 
              className="btn-modal-form"
              onClick={() => {
                onClose();
                onReservar && onReservar(terapia);
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Enviar Consulta
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}