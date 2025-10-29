// components/TerapiaCard.jsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, Users, Clock } from 'lucide-react';

export default function TerapiaCard({ terapia, onVerMas, index = 0 }) {
  return (
    <motion.article
      className="terapia-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      onClick={() => onVerMas && onVerMas(terapia)}
    >
      {/* Badge de popularidad */}
      {terapia.popular && (
        <motion.div 
          className="badge-popular"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
        >
          <Star size={14} fill="currentColor" />
          Más Solicitado
        </motion.div>
      )}
      
      {/* Imagen */}
      <div className="card-image-wrapper">
        <Image 
          src={terapia.imagen} 
          alt={terapia.alt}
          width={800} 
          height={400}
          loading="lazy"
          className="card-image"
        />
        <div className="card-overlay">
          <button className="btn-ver-mas" onClick={(e) => {
            e.stopPropagation();
            onVerMas && onVerMas(terapia);
          }}>
            Ver Detalles
          </button>
        </div>
      </div>
      
      <div className="card-content">
        {/* Beneficio principal (DESTACADO) */}
        <h3 className="card-benefit">{terapia.beneficioPrincipal}</h3>
        
        {/* Nombre de terapia (secundario) */}
        <p className="card-therapy-name">{terapia.titulo} • {terapia.subtitulo}</p>
        
        {/* Descripción */}
        <p className="card-description">{terapia.descripcion}</p>
        
        {/* Problema que resuelve */}
        <div className="card-problem">
          <span className="checkmark">✓</span>
          <span>Para: {terapia.problema}</span>
        </div>
        
        {/* Información de confianza */}
        <div className="card-trust-info">
          <div className="trust-item">
            <Star size={16} fill="#FFD700" color="#FFD700" />
            <span>{terapia.rating}</span>
          </div>
          <div className="trust-item">
            <Users size={16} />
            <span>{terapia.testimonios} personas</span>
          </div>
          <div className="trust-item">
            <Clock size={16} />
            <span>{terapia.duracion}</span>
          </div>
        </div>
        
        {/* Precio y CTA */}
        <div className="card-footer">
          <div className="card-price-section">
            <span className="price-label">Inversión:</span>
            <span className="price">{terapia.precio}</span>
          </div>
          
          <motion.button 
            className="btn-reservar"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reservar
          </motion.button>
        </div>
        
        {/* Urgencia / Oferta */}
        {(terapia.urgencia || terapia.oferta) && (
          <motion.div 
            className="card-urgency"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 + index * 0.1 }}
          >
            {terapia.oferta || terapia.urgencia}
          </motion.div>
        )}
      </div>
    </motion.article>
  );
}