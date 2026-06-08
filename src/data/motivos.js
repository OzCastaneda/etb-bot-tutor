export const motivos = [
  {
    id: 'economicos',
    title: 'Temas Económicos',
    icon: 'fa-coins',
    color: '#f59e0b',
    keywords: ['precio', 'costoso', 'factura', 'caro', 'cobro', 'cuesta', 'pago', 'mensualidad', 'valor', 'aumento', 'incremento', 'subió', 'carera', 'presupuesto', 'economico', 'barato'],
    questions: [
      '¿Cuál sería el valor que puede pagar actualmente?',
      '¿El incremento fue muy alto para su presupuesto?',
      '¿Ha considerado un cambio de plan con menor tarifa?',
      '¿Le gustaría revisar descuentos disponibles por su antigüedad?'
    ],
    offers: [
      'Descuentos del 10%, 20% o 30% por 12 meses',
      'Retiro de incremento si aplica',
      'Cambio de plan sin penalización',
      'Beneficios de antigüedad sin cláusula de permanencia'
    ],
    scripts: [
      '"Sé que la factura puede ser un reto. Vamos a buscar una opción que se ajuste a su bolsillo."',
      '"Por su antigüedad podemos darle un descuento especial por varios meses."',
      '"También podemos cambiar su plan para que pague menos sin perder velocidad."',
      '"¿Cuál sería un valor cómodo para usted en este momento? Así ajustamos la oferta."'
    ]
  },
  {
    id: 'tecnicos',
    title: 'Problemas Técnicos',
    icon: 'fa-wrench',
    color: '#ef4444',
    keywords: ['falla', 'fallas', 'lento', 'lenta', 'sin servicio', 'no funciona', 'no hay señal', 'desconexión', 'intermitencia', 'corte', 'velocidad', 'no sirve', 'apagado', 'no prende', 'se cae', 'reinicia'],
    questions: [
      '¿Qué tipo de fallas ha presentado?',
      '¿Desde hace cuánto tiene la falla?',
      '¿Es intermitencia, lentitud o ausencia total?',
      '¿Ha intentado reiniciar el equipo?'
    ],
    offers: [
      'Soporte técnico en línea prioritario',
      'Visita técnica en sitio sin costo',
      'Compensación en factura por fallas',
      'Mejora de velocidad sin costo adicional'
    ],
    scripts: [
      '"Comprendo lo incómodo que es quedarse sin servicio. Revisemos juntos qué está pasando."',
      '"¿La falla es total o solo intermitente? Así puedo darle la mejor solución."',
      '"Le ofrezco soporte remoto ahora mismo y, si lo prefiere, agendamos visita prioritaria."',
      '"En caso de falla masiva, ETB le compensa en la factura. ¿Quiere que le confirme el tiempo estimado de solución?"'
    ]
  },
  {
    id: 'traslado',
    title: 'Traslado',
    icon: 'fa-truck',
    color: '#10b981',
    keywords: ['mudanza', 'traslado', 'cambio de dirección', 'cambio de casa', 'nueva dirección', 'me mudo', 'nos mudamos', 'cambio de domicilio'],
    questions: [
      '¿A dónde se va a trasladar?',
      '¿Cuándo realiza el cambio de domicilio?',
      '¿El nuevo domicilio cuenta con cobertura ETB?'
    ],
    offers: [
      'Traslado sin costo a la nueva dirección',
      'Programación de instalación en el nuevo hogar',
      'Continuidad del mismo plan y beneficios'
    ],
    scripts: [
      '"Entiendo que al cambiarse de casa necesita llevar sus servicios. Le ayudamos con el traslado sin costo."',
      '"Podemos programar el cambio de dirección en el menor tiempo posible."',
      '"Su plan y beneficios se mantienen intactos en la nueva dirección."'
    ]
  },
  {
    id: 'viaje',
    title: 'Viaje o Ausencia',
    icon: 'fa-plane',
    color: '#3b82f6',
    keywords: ['viaje', 'ausencia', 'voy a viajar', 'estaré fuera', 'salgo del país', 'vacaciones', 'no voy a estar'],
    questions: [
      '¿Por cuánto tiempo estará ausente?',
      '¿Desea suspender el servicio temporalmente?',
      '¿Necesita conservar el número telefónico?'
    ],
    offers: [
      'Suspensión voluntaria del servicio sin costo',
      'Conservación del número telefónico',
      'Reconexión automática al regresar'
    ],
    scripts: [
      '"Si va a estar fuera, podemos suspender temporalmente su servicio sin costo."',
      '"¿Por cuánto tiempo estará ausente? Así le damos la mejor opción."',
      '"Al regresar, reactivamos todo automáticamente sin cargos adicionales."'
    ]
  },
  {
    id: 'competencia',
    title: 'Competencia',
    icon: 'fa-store',
    color: '#8b5cf6',
    keywords: ['competencia', 'otro operador', 'otra empresa', 'Tigo', 'Claro', 'Movistar', 'Wom', 'me ofrecen', 'mejor precio', 'me voy con', 'cambio de operador'],
    questions: [
      '¿Qué le están ofreciendo?',
      '¿Qué es lo que más le atrae de esa oferta?',
      '¿Ha considerado los beneficios exclusivos de ETB?'
    ],
    offers: [
      'Igualación o mejora de oferta competitiva',
      'Descuentos especiales por fidelidad',
      'Beneficios adicionales en paquete Triple Play'
    ],
    scripts: [
      '"Entiendo que otra empresa le haga una oferta. Permítame contarle los beneficios de quedarse con ETB."',
      '"Podemos igualar o mejorar lo que le están ofreciendo. ¿Qué le están proponiendo?"',
      '"Además, con ETB usted tiene beneficios que otros no le dan. ¿Me permite contarle?"'
    ]
  },
  {
    id: 'personales',
    title: 'Motivos Personales',
    icon: 'fa-user',
    color: '#ec4899',
    keywords: ['personal', 'no necesito', 'motivos personales', 'decisión personal', 'no me interesa', 'ya no quiero', 'cancelar', 'dar de baja'],
    questions: [
      '¿Podría contarme un poco más para ver si podemos ayudarle?',
      '¿Hay algo que podamos mejorar para cambiar su decisión?'
    ],
    offers: [
      'Revisión personalizada del plan',
      'Ofertas exclusivas para clientes leales',
      'Posibilidad de suspensión temporal en lugar de cancelación'
    ],
    scripts: [
      '"Respetamos su decisión. ¿Podría contarme un poco más para ver si podemos ayudarle?"',
      '"Entiendo que por motivos personales necesite cancelar. Antes, déjeme contarle alternativas."',
      '"¿Sabía que puede suspender temporalmente el servicio? Así no pierde los beneficios."'
    ]
  }
];
