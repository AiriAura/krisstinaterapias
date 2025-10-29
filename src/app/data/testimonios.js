// data/testimonios.js
export const TESTIMONIOS_POR_TERAPIA = {
  'reiki': [
    {
      id: 'test-reiki-1',
      nombre: 'María José L.',
      edad: 34,
      problema: 'Insomnio crónico por ansiedad',
      resultado: 'Duermo 8 horas seguidas por primera vez en 3 años',
      rating: 5,
      sesiones: 4,
      imagen: 'https://randomuser.me/api/portraits/women/32.jpg',
      verificado: true,
      fecha: '2024-10-15',
      testimonioCompleto: 'Llegué a Cristina después de años luchando con el insomnio. Desde la primera sesión sentí una paz que no conocía. A la cuarta sesión, mi vida cambió: ahora duermo profundamente y me despierto con energía. Cristina tiene un don especial.'
    },
    {
      id: 'test-reiki-2',
      nombre: 'Patricia S.',
      edad: 41,
      problema: 'Estrés laboral extremo',
      resultado: 'Recuperé mi paz mental y capacidad de concentración',
      rating: 5,
      sesiones: 6,
      imagen: 'https://randomuser.me/api/portraits/women/47.jpg',
      verificado: true,
      fecha: '2024-09-22',
      testimonioCompleto: 'Estaba al borde del burnout. Las sesiones de Reiki con Cristina fueron mi salvavidas. Su energía cálida y su profesionalismo crearon un espacio donde pude soltar todo. Hoy me siento renovada.'
    }
  ],
  
  'flores-bach': [
    {
      id: 'test-bach-1',
      nombre: 'Daniela R.',
      edad: 28,
      problema: 'Miedo al cambio y ansiedad',
      resultado: 'Tomé la decisión de cambiar de carrera con confianza',
      rating: 5,
      sesiones: 8,
      imagen: 'https://randomuser.me/api/portraits/women/65.jpg',
      verificado: true,
      fecha: '2024-10-01',
      testimonioCompleto: 'Las Flores de Bach con Cristina fueron el empujón que necesitaba. Ella supo identificar exactamente las esencias que mi alma pedía. Me ayudaron a tomar decisiones importantes sin miedo.'
    },
    {
      id: 'test-bach-2',
      nombre: 'Carolina M.',
      edad: 52,
      problema: 'Duelo por pérdida familiar',
      resultado: 'Encontré paz y aceptación en mi proceso',
      rating: 5,
      sesiones: 12,
      imagen: 'https://randomuser.me/api/portraits/women/55.jpg',
      verificado: true,
      fecha: '2024-08-10',
      testimonioCompleto: 'Después de perder a mi madre, estaba perdida. Cristina me acompañó con mucha sensibilidad en mi duelo. Las flores fueron un bálsamo para mi corazón roto. Eternamente agradecida.'
    }
  ],
  
  'yoga': [
    {
      id: 'test-yoga-1',
      nombre: 'Sofía P.',
      edad: 36,
      problema: 'Dolor de espalda crónico',
      resultado: 'Eliminé el dolor que llevaba 5 años con medicamentos',
      rating: 5,
      sesiones: 10,
      imagen: 'https://randomuser.me/api/portraits/women/44.jpg',
      verificado: true,
      fecha: '2024-09-15',
      testimonioCompleto: 'Había probado de todo: kinesiólogos, traumatólogos, analgésicos. Nada funcionó. El yoga terapéutico con Cristina me cambió la vida. Hoy estoy libre de dolor y he recuperado mi movilidad.'
    }
  ],
  
  'yoga-infantil': [
    {
      id: 'test-ninos-1',
      nombre: 'Andrea G. (madre)',
      edad: 38,
      problema: 'Hijo con hiperactividad y dificultad para dormir',
      resultado: 'Mi hijo está más tranquilo y duerme toda la noche',
      rating: 5,
      sesiones: 6,
      imagen: 'https://randomuser.me/api/portraits/women/28.jpg',
      verificado: true,
      fecha: '2024-10-05',
      testimonioCompleto: 'Mi hijo de 7 años no paraba quieto y las noches eran una pesadilla. Desde que asiste al yoga con Cristina, es otro niño: más calmado, más concentrado y duerme perfecto. ¡Magia pura!'
    }
  ],
  
  'circulos-mujeres': [
    {
      id: 'test-circulo-1',
      nombre: 'Valentina C.',
      edad: 29,
      problema: 'Soledad y desconexión',
      resultado: 'Encontré una hermandad que me sostiene',
      rating: 5,
      sesiones: 8,
      imagen: 'https://randomuser.me/api/portraits/women/70.jpg',
      verificado: true,
      fecha: '2024-09-28',
      testimonioCompleto: 'Los círculos de mujeres me dieron lo que no sabía que necesitaba: un espacio seguro para ser vulnerable. Conocí mujeres increíbles y encontré una comunidad que me sostiene. Cristina facilita con amor puro.'
    }
  ],
  
  'ayurveda': [
    {
      id: 'test-ayurveda-1',
      nombre: 'Francisca T.',
      edad: 45,
      problema: 'Problemas digestivos crónicos',
      resultado: 'Después de 10 años, mi digestión funciona perfecto',
      rating: 5,
      sesiones: 3,
      imagen: 'https://randomuser.me/api/portraits/women/50.jpg',
      verificado: true,
      fecha: '2024-08-20',
      testimonioCompleto: 'Llevaba 10 años con gastritis y colon irritable. La consulta ayurvédica de Cristina identificó mi dosha y me dio pautas claras. En 2 meses, mis síntomas desaparecieron. No lo podía creer.'
    }
  ],
  
  'masaje-ayurvedico': [
    {
      id: 'test-masaje-1',
      nombre: 'Camila V.',
      edad: 31,
      problema: 'Tensión muscular extrema',
      resultado: 'Relajación como nunca había experimentado',
      rating: 5,
      sesiones: 5,
      imagen: 'https://randomuser.me/api/portraits/women/38.jpg',
      verificado: true,
      fecha: '2024-10-12',
      testimonioCompleto: 'El masaje ayurvédico de Cristina es una experiencia única. Los aceites calientes, su técnica, la energía del espacio... salí renovada. Es más que un masaje, es sanación profunda.'
    }
  ]
};

// Testimonios generales (para sección principal)
export const TESTIMONIOS_DESTACADOS = [
  {
    id: 'dest-1',
    nombre: 'Elena R.',
    edad: 42,
    ocupacion: 'Buscadora Espiritual',
    problema: 'Desconexión espiritual',
    resultado: 'Reconecté con mi esencia divina',
    rating: 5,
    imagen: 'https://randomuser.me/api/portraits/women/47.jpg',
    verificado: true,
    fecha: '2024-09-30',
    testimonioCompleto: 'Las sesiones con Cristina son un regalo para el alma. He conectado con una parte de mí que estaba dormida. Su energía es pura y su guía, un mapa hacia la paz interior.',
    terapias: ['reiki', 'flores-bach']
  },
  {
    id: 'dest-2',
    nombre: 'Isabel M.',
    edad: 38,
    ocupacion: 'Profesora',
    problema: 'Agotamiento y estrés',
    resultado: 'Recuperé mi energía y pasión por la vida',
    rating: 5,
    imagen: 'https://randomuser.me/api/portraits/women/60.jpg',
    verificado: true,
    fecha: '2024-10-08',
    testimonioCompleto: 'Cristina es luz pura. Su acompañamiento me ayudó a salir del pozo de agotamiento en el que estaba. Hoy me siento viva nuevamente y con herramientas para cuidarme.',
    terapias: ['yoga', 'reiki']
  },
  {
    id: 'dest-3',
    nombre: 'Lorena P.',
    edad: 35,
    ocupacion: 'Emprendedora',
    problema: 'Ansiedad y bloqueo creativo',
    resultado: 'Mi negocio floreció después de desbloquearme',
    rating: 5,
    imagen: 'https://randomuser.me/api/portraits/women/72.jpg',
    verificado: true,
    fecha: '2024-09-12',
    testimonioCompleto: 'Llegué a Cristina bloqueada creativamente y llena de miedos. Su terapia holística desbloqueó algo en mí. Mi negocio despegó y yo volví a creer en mis sueños. ¡Gracias infinitas!',
    terapias: ['flores-bach', 'circulos-mujeres']
  }
];

// Función para obtener testimonios por terapia
export const getTestimoniosPorTerapia = (terapiaId) => {
  return TESTIMONIOS_POR_TERAPIA[terapiaId] || [];
};