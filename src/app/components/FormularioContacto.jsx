// components/FormularioContacto.jsx
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function FormularioContacto({ terapiaPreseleccionada = null }) {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    motivo: terapiaPreseleccionada || '',
    horario: '',
    mensaje: ''
  });

  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const MOTIVOS = [
    { value: '', label: '¿Qué te gustaría mejorar?' },
    { value: 'estres', label: 'Reducir estrés y ansiedad' },
    { value: 'dolor', label: 'Aliviar dolor físico o tensión' },
    { value: 'energia', label: 'Aumentar mi energía vital' },
    { value: 'emocional', label: 'Equilibrio emocional' },
    { value: 'espiritual', label: 'Conexión espiritual' },
    { value: 'otro', label: 'Otro motivo' }
  ];

  const HORARIOS = [
    { value: '', label: 'Selecciona tu preferencia' },
    { value: 'morning', label: 'Mañanas (9:00 - 12:00)' },
    { value: 'afternoon', label: 'Tardes (14:00 - 18:00)' },
    { value: 'weekend', label: 'Fines de semana' },
    { value: 'flexible', label: 'Horario flexible' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Auto-generar mensaje si cambian motivo u horario
    if (name === 'motivo' || name === 'horario') {
      generarMensajeAutomatico({ ...formData, [name]: value });
    }
  };

  const generarMensajeAutomatico = (data) => {
    let mensaje = 'Hola Cristina, ';
    
    if (data.motivo) {
      const motivoTexto = MOTIVOS.find(m => m.value === data.motivo)?.label;
      mensaje += `me gustaría trabajar en: ${motivoTexto}. `;
    }
    
    if (data.horario) {
      const horarioTexto = HORARIOS.find(h => h.value === data.horario)?.label;
      mensaje += `Prefiero horarios: ${horarioTexto}. `;
    }
    
    mensaje += '¿Cuándo podríamos agendar una sesión?';
    
    setFormData(prev => ({ ...prev, mensaje }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormStatus({ 
          type: 'success', 
          message: '¡Gracias! Tu mensaje ha sido enviado. Te contactaré dentro de las próximas 24 horas 🙏' 
        });
        setFormData({
          nombre: '',
          telefono: '',
          email: '',
          motivo: '',
          horario: '',
          mensaje: ''
        });
      } else {
        throw new Error('Error al enviar');
      }
    } catch (error) {
      setFormStatus({ 
        type: 'error', 
        message: 'Hubo un error al enviar tu mensaje. Por favor intenta nuevamente o escríbeme directamente por WhatsApp.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form 
      className="formulario-contacto"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Paso 1: ¿Qué te trae aquí? */}
      <div className="form-group">
        <label htmlFor="motivo" className="form-label">
          ¿En qué te gustaría que te acompañe? *
        </label>
        <select
          id="motivo"
          name="motivo"
          value={formData.motivo}
          onChange={handleChange}
          required
          className="form-select"
        >
          {MOTIVOS.map(motivo => (
            <option key={motivo.value} value={motivo.value}>
              {motivo.label}
            </option>
          ))}
        </select>
      </div>

      {/* Paso 2: Horario preferido */}
      <div className="form-group">
        <label htmlFor="horario" className="form-label">
          ¿Cuándo prefieres tus sesiones? *
        </label>
        <select
          id="horario"
          name="horario"
          value={formData.horario}
          onChange={handleChange}
          required
          className="form-select"
        >
          {HORARIOS.map(horario => (
            <option key={horario.value} value={horario.value}>
              {horario.label}
            </option>
          ))}
        </select>
      </div>

      {/* Paso 3: Datos básicos */}
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="nombre" className="form-label">
            Tu nombre *
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            placeholder="Ej: María González"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefono" className="form-label">
            WhatsApp *
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
            placeholder="+56 9 1234 5678"
            className="form-input"
          />
        </div>
      </div>

      {/* Email opcional */}
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email (opcional)
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="tu@email.com"
          className="form-input"
        />
      </div>

      {/* Mensaje */}
      <div className="form-group">
        <label htmlFor="mensaje" className="form-label">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          rows="4"
          placeholder="Cuéntame un poco más sobre lo que necesitas..."
          className="form-textarea"
        />
      </div>

      {/* Status del formulario */}
      {formStatus.message && (
        <motion.div 
          className={`form-status ${formStatus.type}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          role="alert"
        >
          {formStatus.type === 'success' ? (
            <CheckCircle size={20} />
          ) : (
            <AlertCircle size={20} />
          )}
          <span>{formStatus.message}</span>
        </motion.div>
      )}

      {/* Botón de envío */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="form-submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isSubmitting ? (
          <>
            <motion.div
              className="spinner"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            Enviando...
          </>
        ) : (
          <>
            <Send size={20} />
            Enviar Mensaje
          </>
        )}
      </motion.button>

      {/* Garantías */}
      <div className="form-guarantees">
        <div className="guarantee-item">
          <CheckCircle size={16} />
          <span>Sin compromiso</span>
        </div>
        <div className="guarantee-item">
          <CheckCircle size={16} />
          <span>100% confidencial</span>
        </div>
        <div className="guarantee-item">
          <CheckCircle size={16} />
          <span>Respuesta en 24h</span>
        </div>
      </div>
    </motion.form>
  );
}