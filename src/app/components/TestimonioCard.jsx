// components/TestimonioCard.jsx
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, CheckCircle } from 'lucide-react';

export default function TestimonioCard({ testimonio, index = 0, variant = 'default' }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Variante compacta para mostrar en cards de terapias
  if (variant === 'mini') {
    return (
      <motion.div 
        className="testimonio-mini"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <div className="testimonio-mini-header">
          <Image 
            src={testimonio.imagen} 
            alt={testimonio.nombre}
            width={32}
            height={32}
            style={{borderRadius: '50%'}}
          />
          <div>
            <p className="testimonio-mini-name">{testimonio.nombre}</p>
            <div className="testimonio-mini-rating">
              {[...Array(testimonio.rating)].map((_, i) => (
                <Star key={i} size={12} fill="#FFD700" color="#FFD700" />
              ))}
            </div>
          </div>
        </div>
        <p className="testimonio-mini-text">"{testimonio.resultado}"</p>
      </motion.div>
    );
  }

  // Variante completa para modal y sección de testimonios
  return (
    <motion.article 
      className="testimonio-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => setIsExpanded(!isExpanded)}
      style={{ cursor: 'pointer' }}
    >
      <div className="testimonio-header">
        <Image 
          src={testimonio.imagen} 
          alt={testimonio.nombre}
          width={80}
          height={80}
          className="testimonio-avatar"
        />
        <div className="testimonio-info">
          <div className="testimonio-name-wrapper">
            <h4>{testimonio.nombre}</h4>
            {testimonio.verificado && (
              <motion.span 
                className="verificado-badge"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
              >
                <CheckCircle size={16} />
                Verificado
              </motion.span>
            )}
          </div>
          <div className="testimonio-rating">
            {[...Array(testimonio.rating)].map((_, i) => (
              <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
            ))}
            <span className="rating-text">{testimonio.rating}/5</span>
          </div>
          {testimonio.sesiones && (
            <p className="testimonio-sesiones">{testimonio.sesiones} sesiones realizadas</p>
          )}
        </div>
      </div>

      <div className="testimonio-body">
        <div className="testimonio-problema">
          <span className="label">Llegó con:</span>
          <p>{testimonio.problema}</p>
        </div>
        <div className="testimonio-resultado">
          <span className="label">Resultado:</span>
          <p className="resultado-text">{testimonio.resultado}</p>
        </div>
      </div>

      {testimonio.testimonioCompleto && (
        <motion.div 
          className="testimonio-completo"
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{ overflow: 'hidden' }}
        >
          <div style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
             <p>"{isExpanded ? testimonio.testimonioCompleto : ''}"</p>
          </div>
        </motion.div>
      )}

      <div className="testimonio-footer">
        <span className="testimonio-fecha">
          {new Date(testimonio.fecha).toLocaleDateString('es-CL', { 
            month: 'long', 
            year: 'numeric' 
          })}
        </span>
      </div>
    </motion.article>
  );
}
