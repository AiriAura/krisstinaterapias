// data/testimonios.js

// Testimonios agrupados por terapia para páginas específicas
export const TESTIMONIOS_POR_TERAPIA = {
  'flores-bach': [
    // La entrada de Daniela R. ha sido eliminada
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
    },
    {
      id: 'test-yoga-3',
      nombre: 'Sandra Solier R.',
      problema: 'Lupus Eritematoso Sistémico',
      resultado: 'La enfermedad ya no está activa gracias al yoga',
      rating: 5,
      imagen: 'https://randomuser.me/api/portraits/women/70.jpg',
      verificado: true,
      fecha: '2024-11-15',
      terapias: ['yoga'],
      testimonioCorto: 'Conocí a Kristina por intermedio de mi amiga que era su hermana, fue un angelito que llegó a mi vida. Sane con la terapia de Yoga qué Kristina me enseñó.',
      testimonioCompleto: 'Hace aproximadamente unos 5 años conocí a Kristina por intermedio de mi amiga que era su hermana, fue un angelito que llegó a mi vida, fui diagnosticada con Lupus Eritematoso Sistemico hace 7 años,hace 2 años que ya no está activo la enfermedad crónica que padecí y si lo tuve pero ahora no,sane con la terapia de Yoga qué Kristina me enseñó, muchas gracias por todo Kristina,te debo la vida,miles de bendiciones.'
    }
  ]
};

// Testimonios destacados para la página principal
export const TESTIMONIOS_DESTACADOS = [
  {
    id: 'dest-1',
    nombre: 'Sandra Solier R.',
    problema: 'Lupus Eritematoso Sistémico',
    resultado: 'La enfermedad ya no está activa gracias al yoga',
    rating: 5,
    imagen: 'https://randomuser.me/api/portraits/women/70.jpg',
    verificado: true,
    fecha: '2024-11-15',
    terapias: ['yoga'],
    testimonioCorto: 'Conocí a Kristina por intermedio de mi amiga que era su hermana, fue un angelito que llegó a mi vida. Sane con la terapia de Yoga qué Kristina me enseñó.',
    testimonioCompleto: 'Hace aproximadamente unos 5 años conocí a Kristina por intermedio de mi amiga que era su hermana, fue un angelito que llegó a mi vida, fui diagnosticada con Lupus Eritematoso Sistemico hace 7 años,hace 2 años que ya no está activo la enfermedad crónica que padecí y si lo tuve pero ahora no,sane con la terapia de Yoga qué Kristina me enseñó, muchas gracias por todo Kristina,te debo la vida,miles de bendiciones.'
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
