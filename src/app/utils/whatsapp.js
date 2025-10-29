// utils/whatsapp.js

const WHATSAPP_NUMBER = '56978332033'; // CAMBIAR por tu número real

export const generarMensajeWhatsApp = (contexto = {}) => {
  const { terapia, motivo, nombre } = contexto;
  
  let mensaje = 'Hola Cristina, ';
  
  if (nombre) {
    mensaje = `Hola Cristina, soy ${nombre}. `;
  }
  
  if (terapia) {
    mensaje += `Me interesa ${terapia.titulo}. `;
    if (terapia.oferta) {
      mensaje += `Vi la oferta de "${terapia.oferta}". `;
    }
  }
  
  if (motivo) {
    mensaje += `Busco ${motivo}. `;
  }
  
  mensaje += '¿Cuándo tienes disponibilidad?';
  
  return mensaje;
};

export const abrirWhatsApp = (contexto = {}) => {
  const mensaje = generarMensajeWhatsApp(contexto);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
};

export const getWhatsAppURL = (contexto = {}) => {
  const mensaje = generarMensajeWhatsApp(contexto);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
};