export const GUIONES_ESPECIALES = [
  {
    id: 'saludo',
    step: 1,
    title: 'Saludo Oficial',
    icon: 'fa-hand-wave',
    color: '#8B0000',
    legal: null,
    scripts: [
      'Hola, muy buen día/tarde/noche. Le habla [Nombre y Apellido] del área de gestiones especiales de ETB. ¿Con quién tengo el gusto?',
      'Mucho gusto, [Nombre del cliente]. ¿Es usted el titular del servicio?',
      'Cuénteme por favor, ¿qué lo motivó a comunicarse el día de hoy? Estoy aquí para ayudarle y encontrar la mejor solución.',
    ],
  },
  {
    id: 'sondeo',
    step: 1,
    title: 'Sondeo y Empatía',
    icon: 'fa-circle-question',
    color: '#B22222',
    legal: null,
    scripts: [
      'Entiendo lo que me comenta y créame que es completamente válido.',
      'Para poder ayudarle mejor, ¿qué fue lo que más le incomodó o lo llevó a tomar esta decisión?',
      'Mi objetivo es acompañarle y buscar una alternativa que realmente se ajuste a lo que usted necesita.',
    ],
  },
  {
    id: 'habeas-data',
    step: 2,
    title: 'Habeas Data — Ley 1581',
    icon: 'fa-shield-halved',
    color: '#3b82f6',
    legal: { name: 'Ley 1581', desc: 'Protección de datos personales' },
    scripts: [
      'Antes de continuar, ¿me autoriza el uso de sus datos personales conforme a la Ley 1581? Esto nos permite brindarle la información de manera segura.',
      'Perfecto, continuamos.',
    ],
  },
  {
    id: 'canales-contacto',
    step: 2,
    title: 'Canales de Contacto — Ley 2300',
    icon: 'fa-address-book',
    color: '#8b5cf6',
    legal: { name: 'Ley 2300', desc: 'Elección de canales de contacto' },
    scripts: [
      'Adicional, según la Ley 2300, usted puede elegir los medios por los cuales desea ser contactado.',
      '¿Prefiere llamadas, WhatsApp, correo electrónico o mensajes de texto?',
      'Perfecto, ya dejo registrada su preferencia.',
    ],
  },
  {
    id: 'validacion-otp',
    step: 2,
    title: 'Validación OTP',
    icon: 'fa-mobile-screen-button',
    color: '#10b981',
    legal: { name: 'OTP', desc: 'Código de validación de un solo uso' },
    scripts: [
      'Para proteger su información, le enviaré un código de validación a su número registrado.',
      '¿Me confirma por favor cuando lo reciba?',
    ],
  },
  {
    id: 'retencion-clave',
    step: 3,
    title: 'Retención — Mensaje Clave',
    icon: 'fa-key',
    color: '#D4A843',
    legal: null,
    scripts: [
      'Quiero que tenga presente que hoy su servicio no está perdiendo valor, al contrario, está evolucionando.',
      'Con ETB usted cuenta con beneficios como más de 100 canales, Amazon Prime y DGO, todo sin pagar un valor adicional en su factura.',
      'Mi intención es que pueda aprovechar todos estos beneficios antes de tomar una decisión.',
    ],
  },
  {
    id: 'objeciones',
    step: 3,
    title: 'Manejo de Objeciones',
    icon: 'fa-hand',
    color: '#f59e0b',
    legal: null,
    scripts: [
      'Para brindarle una mejor alternativa, cuénteme por favor… ¿qué contenido solía ver en esos canales?',
      'Lo importante es que ahora usted cuenta con más opciones de contenido y entretenimiento, sin costo adicional.',
    ],
  },
  {
    id: 'retoma-equipos',
    step: 4,
    title: 'Retoma de Equipos',
    icon: 'fa-truck',
    color: '#06b6d4',
    legal: null,
    scripts: [
      'En caso de que se confirme el retiro, ETB se encargará de la recolección de los equipos en su domicilio.',
      'Si lo desea, puedo orientarle con los canales para que programe o consulte la recogida.',
    ],
  },
  {
    id: 'contingencia',
    step: 4,
    title: 'Contingencia de Sistema',
    icon: 'fa-triangle-exclamation',
    color: '#ef4444',
    legal: null,
    scripts: [
      'En este momento estamos presentando una actualización en el sistema y no es posible acceder a su información.',
      'Le invitamos a comunicarse nuevamente en unas horas para poder brindarle una atención completa.',
    ],
  },
  {
    id: 'cierre-legal',
    step: 5,
    title: 'Cierre Legal',
    icon: 'fa-scale-balanced',
    color: '#64748b',
    legal: { name: 'Regulación', desc: 'Incrementos sujetos a regulación vigente' },
    scripts: [
      'Señor(a), es importante tener en cuenta que toda oferta entregada está sujeta a incrementos conforme a la regulación vigente.',
    ],
  },
  {
    id: 'despedida-oficial',
    step: 5,
    title: 'Despedida Oficial y Encuesta',
    icon: 'fa-face-smile',
    color: '#10b981',
    legal: null,
    scripts: [
      'Ha sido un gusto poder ayudarle el día de hoy.',
      'Le habló [Nombre y Apellido] del área de gestiones especiales de ETB.',
      'En este momento le voy a dejar comunicad@ con una breve encuesta para que pueda calificar mi atención, donde 1 es la nota más baja y 5 la más alta.',
      'Muchas gracias por comunicarse con ETB, que tenga un excelente día.',
    ],
  },
  {
    id: 'despedida-cancelacion',
    step: 5,
    title: 'Despedida Cancelación',
    icon: 'fa-headset',
    color: '#8B0000',
    legal: null,
    url: 'https://academi-cosv2.outsourcingcos.com/course/view.php?id=170',
    scripts: [
      'Muchas gracias por comunicarse con ETB, lo dejaré con un breve audio para que escuche sus derechos y deberes como usuario de ETB.',
    ],
  },
];

export const STEP_MAP = {
  1: GUIONES_ESPECIALES.filter((g) => g.step === 1),
  2: GUIONES_ESPECIALES.filter((g) => g.step === 2),
  3: GUIONES_ESPECIALES.filter((g) => g.step === 3),
  4: GUIONES_ESPECIALES.filter((g) => g.step === 4),
  5: GUIONES_ESPECIALES.filter((g) => g.step === 5),
};

export const ALL_GUIONES = GUIONES_ESPECIALES;

export const ARGUMENTARIO_TV = {
  title: 'Argumentario TV – Solicitud de retiro por cambio en la parrilla',
  icon: 'fa-tower-broadcast',
  color: '#8B0000',
  desc: 'Guiones para clientes con Dúo TV / Trío que solicitan retiro por cambios en la parrilla de canales. Aplica para clientes TV IPTV con planes Dúo TV o Trío.',
  qaTipification: {
    motivo: 'PERSONALES',
    submotivo: 'NO USO LB',
    detalle: 'DETALLE EN GESTOR / PARRILLA',
  },
  scenarios: [
    {
      trigger: 'Guion Inicial — Obligatorio',
      highlight: true,
      color: '#D4A843',
      scripts: [
        {
          text: '[Nombre cliente], quiero contarte algo muy importante. Actualmente tu plan incluye nuevos beneficios SIN COSTO ADICIONAL gracias a la alianza con DIRECTV: Más de 100 canales / 55 canales según tu plan — Cobertura completa del Mundial (104 partidos garantizados) — Streaming incluido. DGO: puedes ver tu TV desde cualquier lugar. Amazon Prime: incluye Prime Video, Gaming y beneficios adicionales. ¡Todo esto ya está incluido en tu plan actual, sin generar cobros adicionales!',
        },
      ],
    },
    {
      trigger: 'Si menciona Disney / ESPN',
      color: '#3b82f6',
      scripts: [
        { subtitle: 'Empático', text: 'Entiendo completamente lo que me comentas, [Nombre]. Sabemos que esos canales son importantes.' },
        { subtitle: 'Reencuadre', text: 'Por eso buscamos compensarte con una experiencia más completa, incluyendo entretenimiento, deportes y plataformas de streaming sin afectar tu factura.' },
      ],
    },
    {
      trigger: 'Si dice: "Solo veía Disney"',
      color: '#8b5cf6',
      scripts: [
        {
          subtitle: 'Estructurado',
          text: 'Entiendo tu molestia; déjame contarte lo que ya tienes incluido sin costo adicional: Mundial completo (104 partidos) — Amazon Prime Video (contenido tipo Disney: Marvel, Star Wars, infantil) — DGO para ver desde cualquier dispositivo. REFUERZO: Y lo más importante, tu factura no aumentó. Con otros operadores estos servicios podrían costarte entre $15.000 y $20.000 adicionales.',
        },
      ],
    },
    {
      trigger: 'Si dice: "Mis hijos veían Disney"',
      color: '#10b981',
      scripts: [
        {
          subtitle: 'Familiar',
          text: 'Te entiendo completamente, [Nombre]. Sabemos que el contenido infantil es muy importante. SOLUCIÓN: Con Amazon Prime Video tienes series infantiles (Peppa Pig, Bluey), películas familiares y contenido educativo. REFUERZO DIRECTV: Además, sigues teniendo contenido infantil en Cartoon Network, Discovery Kids y Nickelodeon.',
        },
      ],
    },
    {
      trigger: 'Si es por deportes (ESPN)',
      color: '#f59e0b',
      scripts: [
        {
          subtitle: 'Impacto',
          text: 'Si lo que más te interesa es el deporte, te tengo una excelente noticia: DSPORTS incluido — Los 104 partidos del Mundial en vivo — Más de 1.000 horas de contenido deportivo. POST MUNDIAL: Ligas internacionales (España, Italia, Francia, etc.).',
        },
      ],
    },
    {
      trigger: 'Si pregunta por DGO',
      color: '#06b6d4',
      scripts: [
        {
          text: 'DGO es la app que te permite ver tu televisión desde cualquier dispositivo. BENEFICIOS: Incluida sin costo / Canales en vivo + contenido on demand / Disponible en celular, tablet y computador.',
        },
      ],
    },
    {
      trigger: 'Si pregunta por Amazon Prime',
      color: '#f97316',
      scripts: [
        {
          text: 'Amazon Prime viene completo incluido en tu plan: Prime Video (películas y series) — Prime Gaming — Envíos gratis. EXTRA: Si ya lo pagabas por tu cuenta, puedes cancelarlo y ahorrar ese valor.',
        },
      ],
    },
    {
      trigger: 'Si compara con competencia',
      color: '#ef4444',
      scripts: [
        {
          text: 'Gracias por comentarlo, [Nombre]. Déjame mostrarte lo que hace diferente a ETB: Amazon Prime sin costo — DGO incluido — Mundial completo sin paquetes adicionales. CIERRE: Sumando todo esto, estás ahorrando entre $20.000 y $35.000 mensuales.',
        },
      ],
    },
    {
      trigger: 'Si dice: "Ya me paso a streaming"',
      color: '#14b8a6',
      scripts: [
        {
          text: 'Te entiendo completamente. Hoy en día muchos migran a streaming. Pero con ETB tienes lo mejor de ambos mundos: TV en vivo y Streaming incluido (Prime + DGO). Contraoferta: Con plataformas por fuera pagarías más de $60.000 mensuales, aquí ya lo tienes incluido.',
        },
      ],
    },
    {
      trigger: 'Si tiene fallas técnicas',
      color: '#64748b',
      scripts: [
        {
          text: 'Lamento mucho lo que estás experimentando. Voy a hacer dos cosas por ti: Escalar tu caso técnico con prioridad y confirmarte que ya tienes todos estos beneficios activos.',
        },
      ],
    },
    {
      trigger: 'Si desconfía (promesas)',
      color: '#dc2626',
      scripts: [
        {
          text: 'Entiendo tu preocupación. Es una alianza real (ETB + DIRECTV). Las activaciones son automatizadas.',
        },
      ],
    },
    {
      trigger: 'Si teme subida de precio',
      color: '#059669',
      scripts: [
        {
          subtitle: 'Transparencia',
          text: 'Te confirmo con total claridad: estos beneficios NO generan aumento en tu factura. Son parte de tu plan actual, no es una promoción temporal.',
        },
      ],
    },
  ],
  cierre: {
    text: 'Si ya tienes más beneficios, mejor contenido y sin pagar más, ¿te gustaría continuar con nosotros aprovechando todo esto?',
    mandatory: true,
  },
};
