// utils/analytics.js

export const trackEvent = (category, action, label = '', value = null) => {
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
  
  // También puedes agregar Meta Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', action, {
      category: category,
      label: label
    });
  }
  
  // Console log en desarrollo
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Event:', { category, action, label, value });
  }
};

// Eventos específicos para el sitio
export const eventos = {
  // Engagement
  clickTerapia: (terapiaId, terapiaNombre) => {
    trackEvent('Engagement', 'click_terapia', `${terapiaId}: ${terapiaNombre}`);
  },
  
  verModalTerapia: (terapiaId) => {
    trackEvent('Engagement', 'ver_modal_terapia', terapiaId);
  },
  
  clickTestimonio: (terapiaId) => {
    trackEvent('Engagement', 'click_testimonio', terapiaId);
  },
  
  abrirFAQ: (preguntaId) => {
    trackEvent('Engagement', 'abrir_faq', preguntaId);
  },
  
  // Conversión
  clickWhatsApp: (origen, terapiaId = '') => {
    trackEvent('Conversion', 'click_whatsapp', `${origen}${terapiaId ? `: ${terapiaId}` : ''}`, 1);
  },
  
  enviarFormulario: (motivo) => {
    trackEvent('Conversion', 'enviar_formulario', motivo, 1);
  },
  
  clickReservar: (terapiaId, precio) => {
    trackEvent('Conversion', 'click_reservar', terapiaId, precio);
  },
  
  // Navegación
  scrollSeccion: (seccionId) => {
    trackEvent('Navigation', 'scroll_to_section', seccionId);
  },
  
  clickNavLink: (destino) => {
    trackEvent('Navigation', 'click_nav_link', destino);
  },
  
  // Blog
  clickBlogPost: (postId, postTitulo) => {
    trackEvent('Blog', 'click_post', `${postId}: ${postTitulo}`);
  },
  
  // Tiempo en página (enviar cada 30 segundos)
  tiempoEnPagina: (segundos) => {
    trackEvent('Engagement', 'tiempo_en_pagina', `${segundos}s`, segundos);
  }
};

// Hook para trackear tiempo en página
export const usePageTimer = () => {
  if (typeof window === 'undefined') return;
  
  let timeOnPage = 0;
  const interval = setInterval(() => {
    timeOnPage += 30;
    eventos.tiempoEnPagina(timeOnPage);
  }, 30000); // Cada 30 segundos
  
  return () => clearInterval(interval);
};