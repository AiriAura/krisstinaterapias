// components/FAQ.jsx
'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FAQS, CATEGORIAS_FAQ, getFAQsPorCategoria } from '../data/faqs';

export default function FAQ() {
  const [categoriaActiva, setCategoriaActiva] = useState('todas');
  const [preguntaAbierta, setPreguntaAbierta] = useState(null);

  const faqsFiltradas = getFAQsPorCategoria(categoriaActiva);

  const togglePregunta = (id) => {
    setPreguntaAbierta(preguntaAbierta === id ? null : id);
  };

  return (
    <div className="faq-container">
      {/* Filtros por categoría */}
      <motion.div 
        className="faq-filters"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {CATEGORIAS_FAQ.map((cat, index) => (
          <motion.button
            key={cat.id}
            className={`faq-filter-btn ${categoriaActiva === cat.id ? 'active' : ''}`}
            onClick={() => setCategoriaActiva(cat.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {cat.nombre}
          </motion.button>
        ))}
      </motion.div>

      {/* Lista de preguntas */}
      <div className="faq-list">
        <AnimatePresence mode="wait">
          {faqsFiltradas.map((faq, index) => (
            <motion.div
              key={faq.id}
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                className={`faq-question ${preguntaAbierta === faq.id ? 'open' : ''}`}
                onClick={() => togglePregunta(faq.id)}
                aria-expanded={preguntaAbierta === faq.id}
              >
                <span>{faq.pregunta}</span>
                <motion.div
                  animate={{ rotate: preguntaAbierta === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={24} />
                </motion.div>
              </button>

              <AnimatePresence>
                {preguntaAbierta === faq.id && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.respuesta}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}