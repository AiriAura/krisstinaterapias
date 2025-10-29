// data/faqs.js
export const FAQS = [
  {
    id: 'faq-1',
    pregunta: '¿Cuántas sesiones necesito?',
    respuesta: 'La mayoría de las personas sienten cambios positivos desde la primera sesión. Sin embargo, para resultados profundos y duraderos, recomiendo un ciclo inicial de 3-4 sesiones. Después evaluamos juntos según tu proceso personal.',
    categoria: 'general'
  },
  {
    id: 'faq-2',
    pregunta: '¿Las sesiones son presenciales u online?',
    respuesta: 'Ofrezco ambas modalidades. El Reiki y las Flores de Bach son igual de efectivos a distancia gracias a la conexión energética. El yoga y los masajes son presenciales en mi espacio en Santiago. Tú eliges según tu comodidad.',
    categoria: 'general'
  },
  {
    id: 'faq-3',
    pregunta: '¿Cuánto duran las sesiones?',
    respuesta: 'Cada terapia tiene su duración específica. Puedes ver el detalle en la sección Terapias. Siempre incluyo unos minutos extra para conversar y que te vayas con claridad sobre tu proceso.',
    categoria: 'general'
  },
  {
    id: 'faq-4',
    pregunta: '¿Qué debo llevar a mi primera sesión?',
    respuesta: 'Solo necesitas venir con ropa cómoda y una mente abierta. Si es yoga, trae una botella de agua. Yo proporciono todo lo demás: esterilla, aceites, esencias, etc. Lo importante es que vengas tal como eres.',
    categoria: 'practica'
  },
  {
    id: 'faq-5',
    pregunta: '¿Las terapias reemplazan tratamiento médico?',
    respuesta: 'No, las terapias holísticas son complementarias. Siempre recomiendo mantener tus tratamientos médicos y psicológicos. Mi enfoque potencia tu bienestar integral, trabajando en armonía con otros profesionales que te acompañan.',
    categoria: 'importante'
  },
  {
    id: 'faq-6',
    pregunta: '¿Puedo combinar varias terapias?',
    respuesta: 'Absolutamente sí, y de hecho lo recomiendo. Muchas personas combinan Reiki con Flores de Bach, o Yoga con Consultoría Ayurveda. Crearemos juntos un plan personalizado según tus necesidades y objetivos.',
    categoria: 'general'
  },
  {
    id: 'faq-7',
    pregunta: '¿Cuál es tu formación y experiencia?',
    respuesta: 'Soy Maestra de Reiki certificada (Nivel III), Terapeuta Floral, Instructora de Yoga (200h) y Consultora Ayurveda. Tengo 8 años de experiencia acompañando procesos de sanación y más de 500 sesiones realizadas con resultados hermosos.',
    categoria: 'sobre-mi'
  },
  {
    id: 'faq-8',
    pregunta: '¿Cómo puedo pagar las sesiones?',
    respuesta: 'Acepto transferencias bancarias, efectivo y todos los medios de pago digitales. El pago se realiza al momento de agendar para confirmar tu cupo. Si necesitas facilidades, conversemos.',
    categoria: 'practica'
  },
  {
    id: 'faq-9',
    pregunta: '¿Qué pasa si necesito cancelar mi sesión?',
    respuesta: 'Entiendo que surgen imprevistos. Si me avisas con al menos 24 horas de anticipación, puedes reagendar sin problema. Si la cancelación es con menos tiempo, se cobra el 50% como reserva de cupo.',
    categoria: 'practica'
  },
  {
    id: 'faq-10',
    pregunta: '¿Las sesiones son confidenciales?',
    respuesta: 'Completamente. Todo lo que compartes en nuestras sesiones queda bajo absoluta confidencialidad. Tu proceso es sagrado y respeto profundamente tu privacidad y confianza.',
    categoria: 'importante'
  },
  {
    id: 'faq-11',
    pregunta: '¿Trabajas con hombres también?',
    respuesta: 'Sí, trabajo con todas las personas que buscan sanación. Los Círculos de Mujeres son exclusivos por la naturaleza del espacio, pero todas las demás terapias están abiertas para todos los géneros y edades.',
    categoria: 'general'
  },
  {
    id: 'faq-12',
    pregunta: '¿Dónde están ubicadas tus sesiones presenciales?',
    respuesta: 'Mi espacio está en Santiago, en un ambiente tranquilo y acogedor diseñado para tu comodidad. Al agendar, te comparto la dirección exacta y cómo llegar. Hay estacionamiento disponible.',
    categoria: 'practica'
  }
];

// Función para obtener FAQs por categoría
export const getFAQsPorCategoria = (categoria) => {
  if (categoria === 'todas') return FAQS;
  return FAQS.filter(faq => faq.categoria === categoria);
};

// Categorías disponibles
export const CATEGORIAS_FAQ = [
  { id: 'todas', nombre: 'Todas' },
  { id: 'general', nombre: 'General' },
  { id: 'practica', nombre: 'Información Práctica' },
  { id: 'importante', nombre: 'Importante' },
  { id: 'sobre-mi', nombre: 'Sobre Mí' }
];