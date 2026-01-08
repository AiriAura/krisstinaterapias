// data/testimonios.js

// Testimonios agrupados por terapia para páginas específicas
export const TESTIMONIOS_POR_TERAPIA = {
  'flores-bach': [
    // La entrada de Daniela R. ha sido eliminada
  ],
  'yoga': [
    {
      id: 'test-yoga-1',
      nombre: 'Cecilia Fonseca',
      edad: 63,
      problema: 'Dolencias de lumbago',
      resultado: 'Alivio del dolor y mejora integral',
      rating: 5,
      sesiones: 100,
      imagen: 'https://randomuser.me/api/portraits/women/44.jpg',
      verificado: true,
      fecha: '2024-11-20',
      testimonioCorto: 'A mis 63 años, el yoga con Krisstina no solo alivió mi lumbago, sino que transformó mi cuerpo, mente y alma. Ahora disfruto de una vitalidad que me permite cuidar a mi nieta.',
      testimonioCompleto: 'Mi experiencia con clases de yoga. Tengo 63 años y hace 4 años comencé mis clases de yoga con la maestra Krisstina en mi comuna. Fui para mejorar mis dolencias de lumbago de ese tiempo y allí comencé mi proceso con la maestra...con ejercicios suaves aprendiendo a elongar, a conocer mi cuerpo , aprender a relajarse, liberar tensiones,despejar la mente y a conectar con mi respiración . Fui para mejorar mis dolencias físicas pero yoga ha sido mucho más ,es un cambio integral, ha mejorado mi cuerpo, mi alma y mi mente. Hoy cuido a mi nieta de un año ...voy tres veces por semana ,pensé que por el lumbago no lo podría hacer....sin embargo me siento con gran estado físico para hacerlo ,cuando termino los cuidados realizo mis ejercicios de yoga....estirar la columna, relajar el cuello, elongar piernas brazos,hombros... etc. Ya no tengo ese dolor constante de lumbago y si viene lo alivio con mis clases semanales o en casa con los ejercicios ya aprendidos. Cuando he dormido mal práctico la postura del niño por unos 10 a 15 minutos y me siento mucho mejor. Estoy muy agradecida haber conocido a la maestra ,ella nos ha transmitido sus conocimientos de una manera amable y generosa ,además siempre está estudiando ,incluso viajando a la India para aprender con los mejores maestros. Recomiendo yoga para sanar dolencias físicas y espirituales , para soltar penas y dolores ,para bajar el stress y asi mejorar nuestra cálidad de vida.'
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
    nombre: 'Cecilia Fonseca',
    edad: 63,
    ocupacion: 'Alumna de Yoga',
    problema: 'Dolencias de lumbago',
    resultado: 'Alivio del dolor y mejora integral',
    rating: 5,
    imagen: 'https://randomuser.me/api/portraits/women/44.jpg',
    verificado: true,
    fecha: '2024-11-20',
    terapias: ['yoga'],
    testimonioCorto: 'A mis 63 años, el yoga con Krisstina no solo alivió mi lumbago, sino que transformó mi cuerpo, mente y alma. Ahora disfruto de una vitalidad que me permite cuidar a mi nieta.',
    testimonioCompleto: 'Mi experiencia con clases de yoga. Tengo 63 años y hace 4 años comencé mis clases de yoga con la maestra Krisstina en mi comuna. Fui para mejorar mis dolencias de lumbago de ese tiempo y allí comencé mi proceso con la maestra...con ejercicios suaves aprendiendo a elongar, a conocer mi cuerpo , aprender a relajarse, liberar tensiones,despejar la mente y a conectar con mi respiración . Fui para mejorar mis dolencias físicas pero yoga ha sido mucho más ,es un cambio integral, ha mejorado mi cuerpo, mi alma y mi mente. Hoy cuido a mi nieta de un año ...voy tres veces por semana ,pensé que por el lumbago no lo podría hacer....sin embargo me siento con gran estado físico para hacerlo ,cuando termino los cuidados realizo mis ejercicios de yoga....estirar la columna, relajar el cuello, elongar piernas brazos,hombros... etc. Ya no tengo ese dolor constante de lumbago y si viene lo alivio con mis clases semanales o en casa con los ejercicios ya aprendidos. Cuando he dormido mal práctico la postura del niño por unos 10 a 15 minutos y me siento mucho mejor. Estoy muy agradecida haber conocido a la maestra ,ella nos ha transmitido sus conocimientos de una manera amable y generosa ,además siempre está estudiando ,incluso viajando a la India para aprender con los mejores maestros. Recomiendo yoga para sanar dolencias físicas y espirituales , para soltar penas y dolores ,para bajar el stress y asi mejorar nuestra cálidad de vida.'
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
