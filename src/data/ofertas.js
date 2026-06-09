export const generalidades = [
  'Interactuar con el cliente hasta conocer el motivo real de retiro.',
  'Revisar plan contratado, promociones vigentes, antigüedad, pagos al día, segmento y PQRs.',
  'Personalizar la estrategia según la necesidad detectada.',
  'Escalar casos cuando no se cumple la promesa inicial ofrecida al cliente.',
];

export const politicasGenerales = [
  { text: 'Aplica en Bogotá, Chía y La Calera.', type: 'info' },
  { text: 'No tienen cláusula de permanencia.', type: 'success' },
  { text: 'No aplica para clientes nuevos, convenios especiales, empleados, fuerzas militares, MinTIC ni Internet Social.', type: 'warning' },
  { text: 'Descuentos 15% y 25% bloqueados por política.', type: 'error' },
  { text: 'No acumulables con otras promociones.', type: 'warning' },
];

export const beneficiosScripts = [
  {
    id: 'velocidad-simetrica',
    title: 'Velocidad Simétrica + Trayectoria',
    text: 'Actualmente cuentas con un servicio de internet con excelente velocidad simétrica, lo que te permite tener la misma calidad tanto de subida como de descarga, garantizando mejor experiencia en navegación, trabajo y entretenimiento. Además, ETB cuenta con más de 140 años de experiencia brindando servicio confiable y estable. Por tu antigüedad, cuentas con beneficios especiales sin incrementar tus costos actuales.',
    nota: 'Resaltar si el cliente ya tiene aumento de velocidad — ver DETALLE en SUMA',
  },
  {
    id: 'conectividad-diaria',
    title: 'Conectividad Diaria + Exclusividad',
    text: 'Quiero que tengas en cuenta que cuentas con un servicio de excelente velocidad simétrica, ideal para tu conectividad diaria. Además, ETB es una compañía con amplia trayectoria y estabilidad. Por tu antigüedad, tienes beneficios exclusivos que podemos aprovechar sin aumentar tu factura.',
    nota: 'Resaltar si el cliente ya tiene aumento de velocidad — ver DETALLE en SUMA',
  },
];

export const escaleraFijo = {
  niveles: [
    { nivel: 1, label: 'Resaltar Beneficios', desc: 'Destacar velocidad simétrica, trayectoria ETB (>140 años), y beneficios exclusivos por antigüedad sin incrementar costos.' },
    { nivel: 2, label: 'Solución Directa', desc: 'Resolver el motivo de contacto: soporte técnico, ajuste de facturación, traslado.' },
  ],
  mejorasSinDescuento: [
    { icon: 'fa-gauge-high', label: 'Aumento de Velocidad', desc: 'Si el plan actual es <500M, aumentar velocidad simétrica sin costo.', color: '#3b82f6' },
    { icon: 'fa-video', label: 'Grabar y Retroceder', desc: 'Beneficio de grabación y pausa en vivo por 6 meses sin costo (solo TV IPTV).', color: '#8b5cf6' },
    { icon: 'fa-box', label: 'Oferta Captura', desc: 'Oferta especial de captura con o sin promoción adicional.', color: '#f59e0b' },
  ],
  descuentos: [
    { nivel: 'XS', discount: '10%', months: 12, desc: 'Descuento del 10% en servicio principal por 12 meses.', color: '#10b981', antiguedadMinima: 10 },
    { nivel: 'M', discount: '20%', months: 12, desc: 'Descuento del 20% en servicio principal por 12 meses.', color: '#f59e0b', antiguedadMinima: 10 },
    { nivel: 'XL', discount: '30%', months: 12, desc: 'Descuento del 30% en servicio principal por 12 meses.', color: '#ef4444', antiguedadMinima: 12 },
  ],
  ofertaBasica: [
    { plan: 'Single', hogares: '$50.000', mipymes: '$60.000', vigencia: '6 meses' },
    { plan: 'Dúo', hogares: '$55.000', mipymes: '$65.000', vigencia: '6 meses' },
    { plan: 'Dúo TV', hogares: '$113.000', mipymes: '—', vigencia: '3 meses' },
    { plan: 'Trío', hogares: '$118.000', mipymes: '—', vigencia: '3 meses' },
  ],
};

export const escaleraTraslado = [
  { nivel: 1, label: 'Traslado sin Costo', desc: 'Traslado gratuito. No aplican descuentos adicionales.', color: '#10b981' },
  { nivel: 2, label: 'Traslado + Condiciones Actuales', desc: 'Traslado manteniendo el mismo plan y tarifa sin cambios.', color: '#3b82f6' },
  { nivel: 3, label: 'Traslado + 10%', desc: 'Traslado + descuento del 10% en servicio principal.', color: '#8b5cf6' },
  { nivel: 4, label: 'Traslado + Oferta Captura', desc: 'Traslado + oferta de captura especial según perfil.', color: '#f59e0b' },
  { nivel: 5, label: 'Traslado + 20%', desc: 'Traslado + descuento del 20% en servicio principal.', color: '#f97316' },
  { nivel: 6, label: 'Traslado + 30%', desc: 'Traslado + descuento del 30% en servicio principal.', color: '#ef4444' },
];
export const escaleraTrasladoRegla = 'Siempre ofrecer traslado primero, luego escalar beneficios.';

export const escaleraFijoMovil = {
  velocidad: [
    { label: '+25M Velocidad', desc: 'Aumento de 25M en velocidad de navegación (máx. 500M total).', color: '#3b82f6' },
    { label: '+50M Velocidad', desc: 'Aumento de 50M en velocidad de navegación (máx. 500M total).', color: '#8b5cf6' },
    { label: '+100M Velocidad', desc: 'Aumento de 100M en velocidad de navegación (máx. 500M total).', color: '#f59e0b' },
  ],
  gigas: [
    { label: '+10GB Datos', desc: 'Aumento de 10GB en datos móviles.', color: '#10b981' },
    { label: '+15GB Datos', desc: 'Aumento de 15GB en datos móviles.', color: '#f59e0b' },
    { label: '+20GB Datos', desc: 'Aumento de 20GB en datos móviles.', color: '#ef4444' },
  ],
  regla: 'No combinar +Velocidad y +GB. Solo una mejora por vez.',
  downgrade: { label: 'Downgrade u Optimización', desc: 'Migrar a un plan de menor tarifa sin penalización.', icon: 'fa-arrow-down-wide-short', color: '#6b7280' },
};

export const escaleraMovil = {
  pasos: [
    { paso: 1, label: 'Resaltar Beneficios Plan Actual', desc: 'Destacar las ventajas del plan actual del cliente antes de proponer cambios.' },
    { paso: 2, label: 'Oferta Captura', desc: 'Ofrecer cambio de plan con promoción especial de captura.' },
    { paso: 3, label: 'Plan de Retención', desc: 'Aplicar plan especial de retención si el cliente insiste en retirarse.' },
  ],
  planes: [
    { gigas: '50 GB', precio: '$34.900', condiciones: ['Cliente al día', 'Antigüedad mínima', 'Sin mora previa'] },
    { gigas: '110 GB', precio: '$45.900', condiciones: ['Cliente al día', 'Antigüedad mínima', 'Sin mora previa'] },
  ],
  politicas: [
    { text: 'Cliente debe estar al día en pagos.', type: 'warning' },
    { text: 'Antigüedad mínima requerida.', type: 'info' },
    { text: 'Sin mora en los últimos 3 meses.', type: 'error' },
  ],
};

export const offerCategories = [
  {
    id: 'hogares',
    title: 'Hogares FTTH',
    icon: 'fa-house-chimney',
    desc: 'Ofertas de retención para clientes residenciales con tecnología FTTH.',
    offers: [
      {
        icon: 'fa-tv',
        title: 'Dúo TV',
        price: '$113.000',
        duration: '3 meses',
        desc: 'Paquete Dúo con televisión incluida. Tarifa promocional por 3 meses, luego tarifa plena.',
        badge: 'Vigencia 3 meses',
        tags: ['No acumulable', 'Antigüedad ≥12 meses', 'Sin mora últimos 3 meses'],
        blocked: false,
      },
      {
        icon: 'fa-layer-group',
        title: 'Trío',
        price: '$118.000',
        duration: '3 meses',
        desc: 'Paquete Trío (Internet + Telefonía + TV). Tarifa promocional por 3 meses.',
        badge: 'Vigencia 3 meses',
        tags: ['No acumulable', 'Antigüedad ≥12 meses', 'Sin mora últimos 3 meses'],
        blocked: false,
      },
      {
        icon: 'fa-pause-circle',
        title: 'Suspensión Voluntaria',
        price: 'Sin costo',
        duration: 'Hasta 2 meses',
        desc: 'Bloqueo de suspensión voluntaria para Tríos y Dúos TV. Ideal para viajes o ausencias temporales.',
        badge: 'Máx. 2 meses',
        tags: ['Disponible para Tríos y Dúos TV', 'Conserva el número'],
        blocked: false,
      },
      {
        icon: 'fa-percent',
        title: 'Descuento 10%',
        price: '10% dto.',
        duration: '12 meses',
        desc: 'Descuento del 10% en la factura por 12 meses.',
        badge: '10 meses mín.',
        tags: ['Antigüedad ≥10 meses', 'Sin mora últimos 3 meses'],
        antiguedadMinima: 10,
        blocked: false,
      },
      {
        icon: 'fa-percent',
        title: 'Descuento 20%',
        price: '20% dto.',
        duration: '12 meses',
        desc: 'Descuento del 20% en la factura por 12 meses.',
        badge: '10 meses mín.',
        tags: ['Antigüedad ≥10 meses', 'Sin mora últimos 3 meses'],
        antiguedadMinima: 10,
        blocked: false,
      },
      {
        icon: 'fa-percent',
        title: 'Descuento 30%',
        price: '30% dto.',
        duration: '12 meses',
        desc: 'Descuento del 30% en la factura por 12 meses.',
        badge: '12 meses mín.',
        tags: ['Antigüedad ≥12 meses', 'Sin mora últimos 3 meses'],
        antiguedadMinima: 12,
        blocked: false,
      },
      {
        icon: 'fa-percent',
        title: 'Dto. 15% (BLOQUEADO)',
        price: '15% dto.',
        duration: '—',
        desc: 'Descuento del 15% bloqueado por política comercial. No disponible para nuevos otorgamientos.',
        badge: 'BLOQUEADO',
        tags: ['No disponible', 'Política comercial'],
        blocked: true,
      },
      {
        icon: 'fa-percent',
        title: 'Dto. 25% (BLOQUEADO)',
        price: '25% dto.',
        duration: '—',
        desc: 'Descuento del 25% bloqueado por política comercial. No disponible para nuevos otorgamientos.',
        badge: 'BLOQUEADO',
        tags: ['No disponible', 'Política comercial'],
        blocked: true,
      },
    ],
  },
  {
    id: 'suma',
    title: 'Escalera SUMA',
    icon: 'fa-ladder',
    desc: 'Escalera de retención con beneficios progresivos y tarifas mínimas.',
    offers: [
      {
        icon: 'fa-gauge-high',
        title: '+100M Velocidad',
        price: 'Beneficio',
        duration: '6 meses',
        desc: 'Aumento de +100M de velocidad de navegación sin costo adicional por 6 meses.',
        badge: 'Vigencia 6 meses',
        tags: ['Aplica para Tríos y Dúos TV', 'Antigüedad ≥10 meses'],
        blocked: false,
      },
      {
        icon: 'fa-video',
        title: 'Grabar y Retroceder',
        price: 'Beneficio',
        duration: '6 meses',
        desc: 'Servicio de grabación y pausa en vivo de TV incluido sin costo adicional por 6 meses.',
        badge: 'Vigencia 6 meses',
        tags: ['Aplica para Tríos y Dúos TV', 'Antigüedad ≥10 meses'],
        blocked: false,
      },
      {
        icon: 'fa-box',
        title: 'Oferta XS',
        price: 'Desde $50.000',
        duration: '6 meses',
        desc: 'Oferta básica XS para clientes Single. Tarifa mínima: $50.000.',
        badge: 'Single',
        tags: ['Antigüedad ≥12 meses', 'Vigencia 6 meses', 'Sin mora últimos 3 meses'],
        blocked: false,
      },
      {
        icon: 'fa-boxes',
        title: 'Oferta S',
        price: 'Desde $55.000',
        duration: '6 meses',
        desc: 'Oferta S para clientes Dúo. Tarifa mínima: $55.000.',
        badge: 'Dúo',
        tags: ['Antigüedad ≥12 meses', 'Vigencia 6 meses', 'Sin mora últimos 3 meses'],
        blocked: false,
      },
      {
        icon: 'fa-boxes-stacked',
        title: 'Oferta M / L / XL',
        price: 'Desde $113.000',
        duration: '3 meses',
        desc: 'Ofertas M, L y XL para Dúos TV y Tríos. Tarifa mínima Dúo TV: $113.000, Trío: $118.000.',
        badge: 'Dúo TV / Trío',
        tags: ['Antigüedad ≥12 meses', 'Vigencia 3 meses', 'Sin mora últimos 3 meses'],
        blocked: false,
      },
      {
        icon: 'fa-arrow-down-wide-short',
        title: 'Downgrade',
        price: 'Sin costo',
        duration: 'Permanente',
        desc: 'Migración a un plan de menor tarifa sin penalización ni cláusula de permanencia adicional.',
        badge: 'Sin permanencia',
        tags: ['Sin penalización', 'Conserva beneficios'],
        blocked: false,
      },
    ],
  },
  {
    id: 'especial',
    title: 'Oferta 30% x 3 meses',
    icon: 'fa-star',
    desc: 'Oferta especial de retención con descuento del 30% por 3 meses.',
    offers: [
      {
        icon: 'fa-percent',
        title: '30% x 3 meses — Dúo TV',
        price: '30% dto.',
        duration: '3 meses',
        desc: 'Descuento del 30% en Dúo TV por 3 meses. Luego tarifa plena. No acumulable con otras promociones.',
        badge: '3 meses',
        tags: ['Antigüedad ≥12 meses', 'Sin mora últimos 3 meses', 'Luego tarifa plena'],
        blocked: false,
      },
      {
        icon: 'fa-percent',
        title: '30% x 3 meses — Trío',
        price: '30% dto.',
        duration: '3 meses',
        desc: 'Descuento del 30% en Trío por 3 meses. Luego tarifa plena. No acumulable con otras promociones.',
        badge: '3 meses',
        tags: ['Antigüedad ≥12 meses', 'Sin mora últimos 3 meses', 'Luego tarifa plena'],
        blocked: false,
      },
    ],
  },
  {
    id: 'fijo-movil',
    title: 'Fijo-Móvil',
    icon: 'fa-mobile-screen',
    desc: 'Ofertas de convergencia para clientes con servicios fijo-móvil.',
    offers: [
      {
        icon: 'fa-gauge-high',
        title: '+25M Velocidad',
        price: 'Beneficio',
        duration: 'Indefinido',
        desc: 'Aumento de +25M de velocidad de navegación. Máximo 500M total.',
        badge: 'Antigüedad ≥6 meses',
        tags: ['No acumulable con +Gigas', 'Antigüedad mínima 6 meses'],
        blocked: false,
      },
      {
        icon: 'fa-gauge-high',
        title: '+50M Velocidad',
        price: 'Beneficio',
        duration: 'Indefinido',
        desc: 'Aumento de +50M de velocidad de navegación. Máximo 500M total.',
        badge: 'Antigüedad ≥6 meses',
        tags: ['No acumulable con +Gigas', 'Antigüedad mínima 6 meses'],
        blocked: false,
      },
      {
        icon: 'fa-gauge-high',
        title: '+100M Velocidad',
        price: 'Beneficio',
        duration: 'Indefinido',
        desc: 'Aumento de +100M de velocidad de navegación. Máximo 500M total.',
        badge: 'Antigüedad ≥6 meses',
        tags: ['No acumulable con +Gigas', 'Antigüedad mínima 6 meses'],
        blocked: false,
      },
      {
        icon: 'fa-database',
        title: '+10GB Datos',
        price: 'Beneficio',
        duration: 'Indefinido',
        desc: 'Aumento de +10GB de datos móviles. No acumulable con beneficios de velocidad.',
        badge: 'Antigüedad ≥6 meses',
        tags: ['No acumulable con +Velocidad', 'Antigüedad mínima 6 meses'],
        blocked: false,
      },
      {
        icon: 'fa-database',
        title: '+15GB Datos',
        price: 'Beneficio',
        duration: 'Indefinido',
        desc: 'Aumento de +15GB de datos móviles. No acumulable con beneficios de velocidad.',
        badge: 'Antigüedad ≥6 meses',
        tags: ['No acumulable con +Velocidad', 'Antigüedad mínima 6 meses'],
        blocked: false,
      },
      {
        icon: 'fa-database',
        title: '+20GB Datos',
        price: 'Beneficio',
        duration: 'Indefinido',
        desc: 'Aumento de +20GB de datos móviles. No acumulable con beneficios de velocidad.',
        badge: 'Antigüedad ≥6 meses',
        tags: ['No acumulable con +Velocidad', 'Antigüedad mínima 6 meses'],
        blocked: false,
      },
    ],
  },
];

export const escaleraRetencion = [
  { level: 1, discount: '10%', years: '2+ años', color: '#10b981', desc: 'Descuento base. Inicia siempre aquí.' },
  { level: 2, discount: '20%', years: '3+ años', color: '#f59e0b', desc: 'Segundo escalón. Clientes con mayor antigüedad.' },
  { level: 3, discount: '30%', years: '5+ años', color: '#ef4444', desc: 'Máximo descuento. Etapas avanzadas de retención.' },
];

export const tarifarioCaptura = [
  {
    section: 'Hogares Fibra Bogotá y Municipios — Estratos 2 al 6',
    icon: 'fa-city',
    plans: [
      {
        title: 'Internet + TV Plus 910 Mb',
        discount: '50% dto. x 2 meses',
        rows: [
          { label: 'Estratos 2-3', promo: '$80.950', plena: '$161.900' },
          { label: 'Estratos 4-5', promo: '$85.950', plena: '$171.900' },
        ],
      },
      {
        title: 'Internet + TV Base 910 Mb',
        discount: null,
        rows: [
          { label: 'Estratos 2-3', promo: null, plena: '$134.900' },
          { label: 'Estratos 4-6', promo: null, plena: '$144.900' },
        ],
      },
    ],
  },
  {
    section: 'Hogares Fibra Municipios — Estratos 2 al 6',
    icon: 'fa-tree-city',
    plans: [
      {
        title: 'Internet + TV Base',
        discount: null,
        rows: [
          { label: '500 Mb', promo: null, plena: '$119.900' },
          { label: '910 Mb', promo: null, plena: '$124.900' },
        ],
      },
    ],
  },
  {
    section: 'Hogares Fibra Bogotá — Estratos 1 al 6',
    icon: 'fa-building',
    plans: [
      {
        title: 'Internet Solo',
        discount: null,
        rows: [
          { label: '500 Mb — Estratos 2-3', promo: null, plena: '$79.900' },
          { label: '910 Mb — Estratos 2-3', promo: null, plena: '$84.900' },
          { label: '910 Mb — Estratos 4-6', promo: null, plena: '$94.900' },
        ],
      },
    ],
  },
  {
    section: 'Hogares Fibra Municipios — Estratos 1 al 6',
    icon: 'fa-house-chimney',
    plans: [
      {
        title: 'Internet Solo',
        discount: null,
        rows: [
          { label: '500 Mb', promo: null, plena: '$52.900' },
          { label: '910 Mb', promo: null, plena: '$57.900' },
        ],
      },
    ],
  },
];

export const ofertas = offerCategories.flatMap((cat) =>
  cat.offers.map((o) => ({
    icon: o.icon,
    title: o.title,
    desc: `${o.desc} — ${o.price} x ${o.duration}`,
  }))
);
