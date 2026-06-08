# Formador Online ETB

Asistente inteligente para potenciar la formación y retención de clientes en ETB.  
Aplica la metodología **ESCUCHA + SOLUCIÓN** en cada interacción mediante un flujo guiado de 5 pasos: Conectar → Entender → Validar → Solucionar → Retener.

---

## Stack

| Tecnología | Versión |
|---|---|
| React | 19 |
| Vite | 5 |
| Tailwind CSS | 3 |
| Framer Motion | 12 |
| React Router | 7 |
| Font Awesome | 7 (local) |

---

## Estructura del proyecto

```
src/
├── main.jsx                     # Entry point (BrowserRouter)
├── App.jsx                      # Routes + AnimatePresence
├── index.css                    # Tailwind + componentes utilitarios
├── pages/                       # Una página por ruta
│   ├── Inicio.jsx               # /
│   ├── BotTutor.jsx             # /bot-tutor
│   ├── Analizador.jsx           # /analizador
│   ├── Glosario.jsx             # /glosario
│   ├── Ofertas.jsx              # /ofertas
│   └── Guiones.jsx              # /guiones
├── components/
│   ├── MainLayout.jsx           # Layout: Navbar + Outlet + Footer
│   ├── Navbar.jsx               # Navegación con NavLink + menú mobile
│   ├── Hero.jsx                 # Landing principal
│   ├── BotTutor.jsx             # Wizard de 5 pasos (flujo de retención)
│   ├── Analyzer.jsx             # Analizador de conversaciones
│   ├── Glossary.jsx             # Glosario de términos
│   ├── Offers.jsx               # Ofertas vigentes
│   ├── Scripts.jsx              # Acordeón de guiones
│   ├── Footer.jsx
│   ├── BackToTop.jsx
│   └── steps/                   # Subcomponentes del BotTutor
│       ├── StepConnect.jsx      # Conectar y escuchar
│       ├── StepEmpathy.jsx      # Entender con empatía
│       ├── StepValidate.jsx     # Validar el motivo
│       ├── StepSolve.jsx        # Solucionar personalizado
│       └── StepRetain.jsx       # Retener con fidelidad
├── data/                        # Datos estáticos
│   ├── motivos.js               # 6 categorías de motivos + scripts
│   ├── glosario.js              # 12 términos técnicos
│   ├── ofertas.js               # 14 ofertas comerciales
│   └── colors.js                # Paleta de colores para cards
└── utils/                       # Utilidades
    ├── normalize.js             # Normalización de texto (diacríticos)
    ├── theme.js                 # Toggle claro/oscuro
    └── toast.js                 # Notificaciones toast
```

---

## Rutas

| Ruta | Página | Descripción |
|---|---|---|
| `/` | Inicio | Hero + CTA a BotTutor y Analizador |
| `/bot-tutor` | BotTutor | Flujo interactivo de retención (5 pasos) |
| `/analizador` | Analizador | Detecta motivos desde frases del cliente |
| `/glosario` | Glosario | Términos técnicos y comerciales |
| `/ofertas` | Ofertas | Catálogo de promociones vigentes |
| `/guiones` | Guiones | Biblioteca de guiones por motivo |

---

## Instalación y uso

```bash
# Instalar dependencias
npm install

# Desarrollo con HMR
npm run dev

# Build producción
npm run build

# Vista previa del build
npm run preview
```

---

## Diseño visual

- **Paleta**: Rojo profundo (`#8B0000`), rojo claro (`#B22222`), gris oscuro (`#1A1A1A`), dorado (`#D4A843`)
- **Modo oscuro/claro**: por defecto oscuro con toggle a modo claro. Usa CSS custom properties (`--etb-bg-*`, `--etb-text-*`, `--etb-border-*`) para cambiar toda la paleta al alternar la clase `dark` en `<html>`. La preferencia persiste en `localStorage` con lectura antes del primer render (inline script en `index.html`) para evitar FOUC.
- **Tipografía fluida**: clases responsivas escalonadas (`text-xs sm:text-sm md:text-base lg:text-lg`) en títulos, párrafos y botones.
- **Espaciado adaptativo**: secciones usan `py-16 md:py-24`, cards `p-4 md:p-5 lg:p-6`, gaps `gap-4 md:gap-6`.
- **Breakpoints**: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px), `2xl` (1536px) — todos los componentes se adaptan.
- **Tipografía**: Inter (Google Fonts)
- **Iconos**: Font Awesome 7 (bundled local, sin CDN)
- **Animaciones**: Framer Motion para transiciones entre páginas, pasos del wizard, y menú mobile (slide-down con opacity + height).
- **Fondo**: Patrón neural SVG + gradientes

---

## Metodología BotTutor

| Paso | Componente | Descripción |
|---|---|---|
| 1 | StepConnect | Escucha activa, guiones de apertura |
| 2 | StepEmpathy | Lectura emocional, frases de empatía |
| 3 | StepValidate | Parafraseo, motivos frecuentes con keywords |
| 4 | StepSolve | Escalera de retención (10%-30%), ofertas |
| 5 | StepRetain | Cierre estructurado, guiones de retención |

Cada paso del BotTutor se navega mediante indicadores visuales con animaciones spring y flechas Anterior/Siguiente. El progreso se refleja en círculos de colores (dorado = activo, rojo = completado, gris = pendiente).

---

## Funcionalidades clave

- **Analizador de conversaciones**: ingresa una frase del cliente y detecta automáticamente el motivo (económico, técnico, traslado, viaje, competencia, personal) usando coincidencia de keywords con normalización de texto.
- **Resultado con sugerencias**: muestra preguntas clave, ofertas sugeridas y un enlace directo a los guiones relacionados.
- **Acordeón de guiones**: cada motivo despliega preguntas, ofertas y frases textuales para la interacción.
- **Glosario y Ofertas**: grids responsivos con cards hover y colores dinámicos.
- **Transiciones entre rutas**: fade + slide vertical vía AnimatePresence.
- **Navegación React Router**: URLs compartibles, sin saltos de scroll, menú activo sincronizado.

## Mejoras recientes

### Modo oscuro/claro (v3.1)
- Implementación basada en **CSS custom properties** en `:root` y `.dark` — 14 variables (`--etb-bg-page`, `--etb-text-heading`, `--etb-border`, etc.) que permiten cambiar toda la paleta visual alternando la clase `dark` en `<html>`.
- **FOUC prevention**: script inline en `index.html` que lee `localStorage` y remueve la clase `dark` antes del primer render, evitando el parpadeo blanco al cargar la página.
- **Toggle corregido** en `Navbar.jsx`: lee `localStorage` al montar mediante lazy initializer de `useState`; elimina la clase `light` no estándar y solo alterna `dark`.
- **Componentes actualizados**: los 16 archivos JSX ahora usan `var(--etb-*)` en lugar de colores hardcodeados, garantizando que el cambio de tema se refleje en toda la interfaz.

### Diseño responsive (v3.2)
- **Navbar**: menú mobile con animación slide-down via `AnimatePresence` + `motion.div` (opacity + height), transición suave de 250ms.
- **Tipografía fluida**: títulos (`text-3xl sm:text-4xl md:text-5xl`), párrafos (`text-sm md:text-base lg:text-lg`), etiquetas (`text-[10px] md:text-xs`).
- **Espaciado adaptativo**: secciones `py-16 md:py-24`, cards `p-4 md:p-5 lg:p-6`, gaps `gap-4 md:gap-6` en todos los componentes.
- **BotTutor**: etiquetas de pasos ocultas en móviles (`hidden sm:inline`), botones con padding y fontSize responsivos, dots de progreso más pequeños en mobile.
- **Overflow**: `overflow-x-hidden` en `MainLayout` para evitar scroll lateral.
- **BackToTop**: posicionamiento responsivo (`bottom-4 md:bottom-8 right-4 md:right-8`).
- **Breakpoints**: todos los componentes usan `sm:`, `md:`, `lg:` de Tailwind para adaptarse de 320px a pantallas 4K.

---

## Licencia

Formador Online ETB v3.2  
Desarrollado para el área de formación de COS

Formadora Naydu Paola Sánchez Vizcaya

Por Oswaldo Castañeda
