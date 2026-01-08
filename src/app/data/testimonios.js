// data/testimonios.js

// Testimonios agrupados por terapia para páginas específicas
export const TESTIMONIOS_POR_TERAPIA = {
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
      testimonioCorto: 'Las Flores de Bach con Cristina fueron el empujón que necesitaba. Supo identificar las esencias que mi alma pedía y me ayudaron a tomar decisiones importantes sin miedo y con confianza.',
      testimonioCompleto: 'Las Flores de Bach con Cristina fueron el empujón que necesitaba. Ella supo identificar exactamente las esencias que mi alma pedía. Me ayudaron a tomar decisiones importantes sin miedo, dándome la confianza para cambiar de carrera, un paso que me aterraba. Su guía fue clave en mi proceso.'
    }
  ],
  'yoga': [
    {
      id: 'test-yoga-1',
      nombre: 'Alumna de Yoga',
      edad: 63,
      problema: 'Dolencias de lumbago',
      resultado: 'Alivio del dolor y mejora integral',
      rating: 5,
      sesiones: 100,
      imagen: 'https://randomuser.me/api/portraits/women/44.jpg',
      verificado: true,
      fecha: '2024-10-21',
      testimonioCorto: 'Llegué al yoga por un dolor de lumbago, pero encontré una transformación completa. Con la guía de Krisstina, no solo alivié mis dolencias, sino que mejoré mi cuerpo, mente y alma. Hoy, a mis 63 años, me siento con vitalidad.',
      testimonioCompleto: 'Tengo 63 años y hace cuatro que comencé mis clases de yoga con la maestra Krisstina. Me acerqué para mejorar mis dolencias de lumbago, y allí comenzó mi proceso. Con ejercicios suaves, aprendí a elongar, a conocer mi cuerpo, a relajarme, liberar tensiones, despejar la mente y conectar con mi respiración. Aunque fui para mejorar mis dolencias físicas, el yoga ha sido mucho más: un cambio integral que ha mejorado mi cuerpo, mi alma y mi mente. Hoy, cuido a mi nieta de un año tres veces por semana, algo que pensé que no podría hacer por el lumbago. Sin embargo, me siento con un gran estado físico. Cuando termino de cuidarla, realizo mis ejercicios de yoga: estirar la columna, relajar el cuello, elongar piernas, brazos y hombros. Ya no tengo ese dolor constante, y si aparece, lo alivio con mis clases semanales o con los ejercicios aprendidos en casa. Cuando he dormido mal, practico la postura del niño por 10 o 15 minutos y me siento mucho mejor. Estoy muy agradecida de haber conocido a la maestra; nos ha transmitido sus conocimientos de manera amable y generosa. Además, siempre está estudiando, incluso viajando a la India para aprender de los mejores maestros. Recomiendo el yoga para sanar dolencias físicas y espirituales, soltar penas, aliviar dolores, bajar el estrés y así, mejorar nuestra calidad de vida.'
    },
    {
      id: 'test-yoga-2',
      nombre: 'Laura Gómez',
      edad: 31,
      problema: 'Ansiedad y falta de energía',
      resultado: 'Pude sentirme con mas vitalidad y energía',
      rating: 5,
      sesiones: 15,
      imagen: 'https://randomuser.me/api/portraits/women/1.jpg',
      verificado: true,
      fecha: '2024-10-20',
      testimonioCorto: 'Las clases de yoga con Kristina son increíbles. Me ayudaron a conectar con mi cuerpo, calmar mi ansiedad y recuperar la energía. Ahora me siento más fuerte y vital. ¡La recomiendo al 100%!',
      testimonioCompleto: 'Las clases de yoga con Kristina son increíbles. Me han ayudado a conectar con mi cuerpo y a calmar mi mente, que solía estar llena de ansiedad. He recuperado la energía que había perdido y ahora me siento más fuerte, vital y flexible que nunca. ¡La recomiendo al 100%!'
    }
  ]
};

// Testimonios destacados para la página principal
export const TESTIMONIOS_DESTACADOS = [
  {
    id: 'dest-1',
    nombre: 'Daniela R.',
    edad: 28,
    ocupacion: 'Estudiante',
    problema: 'Miedo al cambio y ansiedad',
    resultado: 'Tomé la decisión de cambiar de carrera con confianza',
    rating: 5,
    imagen: 'https://randomuser.me/api/portraits/women/65.jpg',
    verificado: true,
    fecha: '2024-10-01',
    terapias: ['flores-bach'],
    testimonioCorto: 'Las Flores de Bach con Cristina fueron el empujón que necesitaba. Supo identificar las esencias que mi alma pedía y me ayudaron a tomar decisiones importantes sin miedo y con confianza.',
    testimonioCompleto: 'Las Flores de Bach con Cristina fueron el empujón que necesitaba. Ella supo identificar exactamente las esencias que mi alma pedía. Me ayudaron a tomar decisiones importantes sin miedo, dándome la confianza para cambiar de carrera, un paso que me aterraba. Su guía fue clave en mi proceso.'
  },
  {
    id: 'dest-2',
    nombre: 'Alumna de Yoga',
    edad: 63,
    ocupacion: 'Alumna de Yoga',
    problema: 'Dolencias de lumbago',
    resultado: 'Alivio del dolor y mejora integral',
    rating: 5,
    imagen: 'https://randomuser.me/api/portraits/women/44.jpg',
    verificado: true,
    fecha: '2024-10-21',
    terapias: ['yoga'],
    testimonioCorto: 'Llegué al yoga por un dolor de lumbago, pero encontré una transformación completa. Con la guía de Krisstina, no solo alivié mis dolencias, sino que mejoré mi cuerpo, mente y alma. Hoy, a mis 63 años, me siento con vitalidad.',
    testimonioCompleto: 'Tengo 63 años y hace cuatro que comencé mis clases de yoga con la maestra Krisstina. Me acerqué para mejorar mis dolencias de lumbago, y allí comenzó mi proceso. Con ejercicios suaves, aprendí a elongar, a conocer mi cuerpo, a relajarme, liberar tensiones, despejar la mente y conectar con mi respiración. Aunque fui para mejorar mis dolencias físicas, el yoga ha sido mucho más: un cambio integral que ha mejorado mi cuerpo, mi alma y mi mente. Hoy, cuido a mi nieta de un año tres veces por semana, algo que pensé que no podría hacer por el lumbago. Sin embargo, me siento con un gran estado físico. Cuando termino de cuidarla, realizo mis ejercicios de yoga: estirar la columna, relajar el cuello, elongar piernas, brazos y hombros. Ya no tengo ese dolor constante, y si aparece, lo alivio con mis clases semanales o con los ejercicios aprendidos en casa. Cuando he dormido mal, practico la postura del niño por 10 o 15 minutos y me siento mucho mejor. Estoy muy agradecida de haber conocido a la maestra; nos ha transmitido sus conocimientos de manera amable y generosa. Además, siempre está estudiando, incluso viajando a la India para aprender de los mejores maestros. Recomiendo el yoga para sanar dolencias físicas y espirituales, soltar penas, aliviar dolores, bajar el estrés y así, mejorar nuestra calidad de vida.'
  },
  {
    id: 'dest-3',
    nombre: 'Laura Gómez',
    edad: 31,
    ocupacion: 'Diseñadora',
    problema: 'Ansiedad y falta de energía',
    resultado: 'Pude sentirme con mas vitalidad y energía',
    rating: 5,
    imagen: 'https://randomuser.me/api/portraits/women/1.jpg',
    verificado: true,
    fecha: '2024-10-20',
    terapias: ['yoga'],
    testimonioCorto: 'Las clases de yoga con Kristina son increíbles. Me ayudaron a conectar con mi cuerpo, calmar mi ansiedad y recuperar la energía. Ahora me siento más fuerte y vital. ¡La recomiendo al 100%!',
    testimonioCompleto: 'Las clases de yoga con Kristina son increíbles. Me han ayudado a conectar con mi cuerpo y a calmar mi mente, que solía estar llena de ansiedad. He recuperado la energía que había perdido y ahora me siento más fuerte, vital y flexible que nunca. ¡La recomiendo al 100%!'
  }
];

// Función para obtener testimonios por terapia
export const getTestimoniosPorTerapia = (terapiaId) => {
  return TESTIMONIOS_POR_TERAPIA[terapiaId] || [];
};
