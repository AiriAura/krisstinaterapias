// data/terapias.js
export const TERAPIAS_DATA = [
  {
    id: 'reiki',
    titulo: 'Reiki',
    subtitulo: 'Sanación Energética',
    beneficioPrincipal: 'Libera bloqueos y recupera tu energía vital',
    descripcion: '¿Sientes tu energía bloqueada? Libera tensiones profundas y recupera tu vitalidad en 60 minutos.',
    problema: 'Estrés crónico, insomnio, ansiedad, fatiga',
    duracion: '60 min',
    precio: 'Desde $25.000',
    precioNumerico: 25000,
    imagen: '/reiki.jpg?v=1.4',
    alt: 'Manos aplicando terapia Reiki, simbolizando sanación energética.',
    popular: true,
    testimonios: 47,
    rating: 4.9,
    urgencia: 'Solo 3 cupos esta semana',
    oferta: 'Primera sesión: 50% descuento',
    
    // Datos extendidos para modal
    paraQuien: [
      'Personas con estrés y ansiedad constante',
      'Quienes buscan equilibrio emocional',
      'Personas con dolores crónicos sin causa médica',
      'Quienes desean potenciar su bienestar general'
    ],
    
    queIncluyeSesion: [
      'Evaluación energética inicial',
      'Sesión de Reiki (60 min)',
      'Limpieza de chakras',
      'Recomendaciones personalizadas',
      'Audio de meditación guiada (regalo)'
    ],
    
    resultados: {
      sesion1: 'Relajación profunda y sensación de paz inmediata',
      semana2: 'Mejora en calidad de sueño y reducción de ansiedad',
      mes1: 'Mayor claridad mental y estabilidad emocional',
      largo_plazo: 'Transformación profunda en tu relación contigo mismo'
    },
    
    proceso: [
      { paso: 1, titulo: 'Contacto inicial', descripcion: 'Conversamos sobre lo que necesitas' },
      { paso: 2, titulo: 'Primera sesión', descripcion: 'Evaluación y tratamiento personalizado' },
      { paso: 3, titulo: 'Seguimiento', descripcion: 'Plan de sesiones según tus objetivos' }
    ]
  },
  
  {
    id: 'flores-bach',
    titulo: 'Flores de Bach',
    subtitulo: 'Equilibrio Emocional',
    beneficioPrincipal: 'Armoniza tus emociones naturalmente',
    descripcion: 'Terapia floral personalizada para restaurar tu paz interior y equilibrio emocional.',
    problema: 'Tristeza, miedos, inseguridad, cambios emocionales',
    duracion: '45 min',
    precio: 'Desde $20.000',
    precioNumerico: 20000,
    imagen: '/flores-de-bach.jpg?v=1.4',
    alt: 'Frascos de esencias florales de Bach sobre una superficie de madera.',
    popular: false,
    testimonios: 32,
    rating: 4.8,
    urgencia: 'Consulta inicial sin costo',
    oferta: 'Test gratuito: Descubre tu flor',
    
    paraQuien: [
      'Personas atravesando cambios vitales importantes',
      'Quienes buscan gestionar sus emociones',
      'Personas con miedos o inseguridades',
      'Quienes desean complementar tratamientos psicológicos'
    ],
    
    queIncluyeSesion: [
      'Test emocional completo',
      'Selección personalizada de esencias',
      'Preparación de tu fórmula única',
      'Guía de uso detallada',
      'Seguimiento por WhatsApp incluido'
    ],
    
    resultados: {
      sesion1: 'Claridad sobre tu estado emocional actual',
      semana2: 'Primeros cambios en gestión emocional',
      mes1: 'Mayor estabilidad y confianza interior',
      largo_plazo: 'Transformación profunda en tu bienestar emocional'
    }
  },
  
  {
    id: 'yoga',
    titulo: 'Yoga Terapéutico',
    subtitulo: 'Unión de Cuerpo y Espíritu',
    beneficioPrincipal: 'Recupera flexibilidad y paz mental',
    descripcion: 'Posturas conscientes y meditación para encontrar tu centro, aumentar tu vitalidad y conectar con tu esencia.',
    problema: 'Dolor de espalda, tensión muscular, estrés físico',
    duracion: '60 min',
    precio: 'Desde $18.000',
    precioNumerico: 18000,
    imagen: '/yoga-terapeutico.jpg?v=1.4',
    alt: 'Persona en una postura de yoga terapéutico enfocada en la alineación y el bienestar.',
    popular: true,
    testimonios: 89,
    rating: 5.0,
    urgencia: 'Clase de prueba gratuita disponible',
    oferta: 'Primera clase gratis',
    
    paraQuien: [
      'Personas con dolores musculares o articulares',
      'Quienes buscan mejorar su postura',
      'Personas que desean reducir estrés físico',
      'Principiantes en yoga'
    ],
    
    queIncluyeSesion: [
      'Evaluación postural',
      'Clase personalizada según tu nivel',
      'Técnicas de respiración (pranayama)',
      'Meditación guiada',
      'Plan de práctica en casa'
    ],
    
    resultados: {
      sesion1: 'Conexión mente-cuerpo y relajación inmediata',
      semana2: 'Reducción notable de tensiones musculares',
      mes1: 'Mejora en flexibilidad y fuerza',
      largo_plazo: 'Transformación en tu relación con tu cuerpo'
    }
  },
  
  {
    id: 'yoga-infantil',
    titulo: 'Yoga para Niños',
    subtitulo: 'Crecimiento Consciente',
    beneficioPrincipal: 'Niños más concentrados y felices',
    descripcion: 'Clases lúdicas que ayudan a los más pequeños a desarrollar conciencia corporal y gestión emocional.',
    problema: 'Hiperactividad, dificultad para concentrarse, ansiedad infantil',
    duracion: '45 min',
    precio: 'Desde $15.000',
    precioNumerico: 15000,
    imagen: '/yoga-ninos.jpg?v=1.4',
    alt: 'Grupo de niños sonriendo mientras practican yoga en un ambiente lúdico.',
    popular: false,
    testimonios: 56,
    rating: 4.9,
    urgencia: 'Clases grupales con cupos limitados',
    
    paraQuien: [
      'Niños de 5 a 12 años',
      'Niños con dificultades de concentración',
      'Niños que necesitan gestionar sus emociones',
      'Familias que buscan actividades saludables'
    ],
    
    queIncluyeSesion: [
      'Juegos de movimiento consciente',
      'Cuentos y visualizaciones',
      'Ejercicios de respiración adaptados',
      'Relajación guiada',
      'Certificado de participación'
    ],
    
    resultados: {
      sesion1: 'Diversión y primera conexión con su cuerpo',
      semana2: 'Mejora en atención y autocontrol',
      mes1: 'Mayor confianza y gestión emocional',
      largo_plazo: 'Niños más equilibrados y conscientes'
    }
  },
  
  {
    id: 'yoga-tercera-edad',
    titulo: 'Yoga para Tercera Edad',
    subtitulo: 'Vitalidad y Bienestar',
    beneficioPrincipal: 'Mantén tu movilidad y vitalidad',
    descripcion: 'Movimientos suaves adaptados para mantener flexibilidad, fuerza y equilibrio en la edad dorada.',
    problema: 'Rigidez, pérdida de equilibrio, dolor articular',
    duracion: '60 min',
    precio: 'Desde $16.000',
    precioNumerico: 16000,
    imagen: '/yoga-tercera-edad.jpg?v=1.4',
    alt: 'Adultos mayores realizando estiramientos suaves de yoga con sillas.',
    popular: false,
    testimonios: 41,
    rating: 4.9,
    urgencia: 'Clases en grupos reducidos',
    
    paraQuien: [
      'Adultos mayores de 60 años',
      'Personas con movilidad reducida',
      'Quienes buscan prevenir caídas',
      'Personas que desean mantenerse activas'
    ],
    
    queIncluyeSesion: [
      'Movimientos adaptados con silla',
      'Ejercicios de equilibrio suaves',
      'Fortalecimiento muscular progresivo',
      'Técnicas de respiración',
      'Socialización en ambiente seguro'
    ],
    
    resultados: {
      sesion1: 'Sensación de bienestar y socialización',
      semana2: 'Mejora en movilidad articular',
      mes1: 'Mayor equilibrio y confianza al caminar',
      largo_plazo: 'Independencia y calidad de vida mejorada'
    }
  },
  
  {
    id: 'circulos-mujeres',
    titulo: 'Círculos de Mujeres',
    subtitulo: 'Sanación Colectiva',
    beneficioPrincipal: 'Sana en comunidad con otras mujeres',
    descripcion: 'Espacios sagrados donde las mujeres se reúnen para compartir, sanar y celebrar su feminidad.',
    problema: 'Soledad, desconexión femenina, necesidad de apoyo',
    duracion: '120 min',
    precio: 'Desde $12.000',
    precioNumerico: 12000,
    imagen: '/circulos-de-mujeres.jpg?v=1.4',
    alt: 'Mujeres sentadas en círculo, compartiendo en un espacio de confianza.',
    popular: true,
    testimonios: 124,
    rating: 5.0,
    urgencia: 'Próximo círculo: 15 de noviembre',
    oferta: 'Primer círculo de prueba gratis',
    
    paraQuien: [
      'Mujeres buscando comunidad',
      'Quienes atraviesan procesos de cambio',
      'Mujeres que desean reconectar con su feminidad',
      'Quienes buscan apoyo sin juicio'
    ],
    
    queIncluyeSesion: [
      'Apertura de círculo con intención',
      'Espacio de escucha activa',
      'Meditación o ritual grupal',
      'Compartir experiencias',
      'Cierre con integración'
    ],
    
    resultados: {
      sesion1: 'Sensación de pertenencia y aceptación',
      semana2: 'Apertura emocional y confianza',
      mes1: 'Red de apoyo femenino sólida',
      largo_plazo: 'Empoderamiento y hermandad duradera'
    }
  },
  
  {
    id: 'ayurveda',
    titulo: 'Consultoría Ayurveda',
    subtitulo: 'Medicina Ancestral',
    beneficioPrincipal: 'Descubre tu constitución única',
    descripcion: 'Descubre tu dosha y recibe recomendaciones personalizadas para equilibrar tu constitución única.',
    problema: 'Desequilibrios digestivos, energía baja, desbalances',
    duracion: '60 min',
    precio: 'Desde $35.000',
    precioNumerico: 35000,
    imagen: '/consultoria-ayurveda.jpg?v=1.4',
    alt: 'Elementos representativos de la medicina Ayurveda, como especias y hierbas.',
    popular: false,
    testimonios: 28,
    rating: 4.8,
    urgencia: 'Consultas limitadas por mes',
    
    paraQuien: [
      'Personas con problemas digestivos crónicos',
      'Quienes buscan un enfoque holístico',
      'Personas interesadas en medicina natural',
      'Quienes desean prevenir desequilibrios'
    ],
    
    queIncluyeSesion: [
      'Evaluación completa de dosha',
      'Análisis de hábitos y constitución',
      'Plan alimenticio personalizado',
      'Recomendaciones de estilo de vida',
      'Seguimiento por 30 días incluido'
    ],
    
    resultados: {
      sesion1: 'Comprensión profunda de tu constitución',
      semana2: 'Primeros cambios en digestión y energía',
      mes1: 'Equilibrio notable en tu sistema',
      largo_plazo: 'Vida alineada con tu naturaleza única'
    }
  },
  
  {
    id: 'masaje-ayurvedico',
    titulo: 'Masaje Ayurvédico',
    subtitulo: 'Terapia Corporal',
    beneficioPrincipal: 'Nutrición profunda para cuerpo y mente',
    descripcion: 'Técnicas ancestrales con aceites herbales que nutren tu cuerpo y calman tu mente profundamente.',
    problema: 'Tensión muscular, piel seca, agotamiento profundo',
    duracion: 'desde 60 min',
    precio: 'Desde $30.000',
    precioNumerico: 30000,
    imagen: '/masaje-ayurvedico.jpg?v=1.4',
    alt: 'Escena de masaje ayurvédico con aceites tibios y hierbas.',
    popular: false,
    testimonios: 35,
    rating: 4.9,
    urgencia: 'Reserva con 48h de anticipación',
    
    paraQuien: [
      'Personas con tensión muscular crónica',
      'Quienes buscan relajación profunda',
      'Personas con piel seca o estresada',
      'Quienes desean un masaje terapéutico único'
    ],
    
    queIncluyeSesion: [
      'Selección de aceites según tu dosha',
      'Masaje con técnicas ancestrales (75 min)',
      'Aromaterapia personalizada',
      'Tiempo de integración',
      'Recomendaciones de autocuidado'
    ],
    
    resultados: {
      sesion1: 'Relajación profunda y piel nutrida',
      semana2: 'Reducción significativa de tensiones',
      mes1: 'Mejora en calidad de sueño y vitalidad',
      largo_plazo: 'Bienestar corporal sostenido'
    }
  }
];

// Función helper para ordenar por relevancia
export const ordenarPorRelevancia = (terapias, criterio = 'popular') => {
  const copia = [...terapias];
  
  switch(criterio) {
    case 'popular':
      return copia.sort((a, b) => b.popular - a.popular || b.testimonios - a.testimonios);
    case 'precio-bajo':
      return copia.sort((a, b) => a.precioNumerico - b.precioNumerico);
    case 'precio-alto':
      return copia.sort((a, b) => b.precioNumerico - a.precioNumerico);
    case 'rating':
      return copia.sort((a, b) => b.rating - a.rating);
    default:
      return copia;
  }
};