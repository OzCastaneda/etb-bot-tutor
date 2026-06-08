# 🚀 Formador Online ETB

**Asistente inteligente para la formación y retención de clientes ETB.**  
Capacita a los agentes en la metodología **ESCUCHA + SOLUCIÓN** mediante un flujo guiado de 5 pasos, complementado con analizador de conversaciones, glosario técnico, catálogo de ofertas y biblioteca de guiones.

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React 19">
  <img src="https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white" alt="Vite 5">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS 3">
  <img src="https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white" alt="Framer Motion 12">
  <img src="https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white" alt="React Router 7">
  <img src="https://img.shields.io/badge/Font_Awesome-7-528DD7?logo=fontawesome&logoColor=white" alt="Font Awesome 7">
</p>

---

## 📑 Tabla de contenidos

- [Introducción](#introducción)
- [Stack tecnológico](#stack-tecnológico)
- [Arquitectura del proyecto](#arquitectura-del-proyecto)
- [Rutas principales](#rutas-principales)
- [Instalación y uso](#instalación-y-uso)
- [Diseño visual](#diseño-visual)
- [Metodología BotTutor](#metodología-bottutor)
- [Funcionalidades clave](#funcionalidades-clave)
- [Mejoras recientes](#mejoras-recientes)
- [Licencia y créditos](#licencia-y-créditos)

---

## 📖 Introducción

**Formador Online ETB** es una aplicación web SPA construida con React 19 cuyo objetivo es entrenar a los agentes del área de servicio al cliente y retención de **ETB** (Empresa de Telecomunicaciones de Bogotá) en la metodología **ESCUCHAR → ENTENDER → VALIDAR → SOLUCIONAR → RETENER**.

La aplicación simula un **asistente virtual de formación** (BotTutor) que guía al agente a través de cada etapa del proceso de retención, proporcionando:

- **Guiones de apertura y cierre** para cada tipo de interacción.
- **Lectura emocional** del cliente (enojado, frustrado, indeciso, agradecido).
- **Técnicas de validación** y detección del motivo real de contacto.
- **Escalera de retención** con descuentos progresivos según antigüedad.
- **Herramientas complementarias**: analizador de conversaciones, glosario de términos, catálogo de ofertas y biblioteca de guiones.

---

## 🛠 Stack tecnológico

| Tecnología | Versión | Propósito |
|---|---|---|
| React | 19 | Librería de interfaz de usuario |
| Vite | 5 | Bundler y dev server con HMR |
| Tailwind CSS | 3 | Framework de estilos utilitario |
| Framer Motion | 12 | Animaciones y transiciones |
| React Router | 7 | Enrutamiento SPA |
| Font Awesome | 7 (local) | Librería de iconos (bundled sin CDN) |

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React 19">
  <img src="https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white" alt="Vite 5">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS 3">
  <img src="https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white" alt="Framer Motion 12">
  <img src="https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white" alt="React Router 7">
  <img src="https://img.shields.io/badge/Node-18+-339933?logo=node.js&logoColor=white" alt="Node 18+">
</p>

---

## 🏗 Arquitectura del proyecto

```
src/
├── main.jsx                    # Entry point — BrowserRouter + ReactDOM
├── App.jsx                     # Routes + AnimatePresence (transiciones entre rutas)
├── index.css                   # Tailwind directives + CSS custom properties + utilidades
│
├── pages/                      # Una página por ruta (envoltura con animación de entrada)
│   ├── Inicio.jsx              # Ruta: /
│   ├── BotTutor.jsx            # Ruta: /bot-tutor
│   ├── Analizador.jsx          # Ruta: /analizador
│   ├── Glosario.jsx            # Ruta: /glosario
│   ├── Ofertas.jsx             # Ruta: /ofertas
│   └── Guiones.jsx             # Ruta: /guiones
│
├── components/                 # Componentes reutilizables con lógica de negocio
│   ├── MainLayout.jsx          # Layout persistente: Navbar + Outlet + Footer
│   ├── Navbar.jsx              # Navegación con NavLink + menú mobile animado
│   ├── Hero.jsx                # Landing principal con gradiente y CTA
│   ├── BotTutor.jsx            # Wizard de 5 pasos (flujo completo de retención)
│   ├── Analyzer.jsx            # Analizador de conversaciones con detección de motivos
│   ├── Glossary.jsx            # Grid de glosario con cards hover
│   ├── Offers.jsx              # Grid de ofertas vigentes
│   ├── Scripts.jsx             # Acordeón de guiones con auto-apertura por URL params
│   ├── Footer.jsx              # Pie de página con créditos
│   ├── BackToTop.jsx           # Botón flotante "volver arriba"
│   │
│   └── steps/                  # Subcomponentes del BotTutor (un archivo por paso)
│       ├── StepConnect.jsx     # Paso 1: Conectar y escuchar
│       ├── StepEmpathy.jsx     # Paso 2: Entender con empatía
│       ├── StepValidate.jsx    # Paso 3: Validar el motivo
│       ├── StepSolve.jsx       # Paso 4: Solucionar personalizado
│       └── StepRetain.jsx      # Paso 5: Retener con fidelidad
│
├── data/                       # Datos estáticos (sin lógica, sin estado)
│   ├── motivos.js              # 6 categorías de motivos + keywords + preguntas + scripts
│   ├── glosario.js             # 12 términos técnicos y comerciales
│   ├── ofertas.js              # 14 ofertas con iconos y descripciones
│   └── colors.js               # Paleta de 12 colores para cards
│
└── utils/                      # Funciones puras sin efectos secundarios
    ├── normalize.js            # Normalización de texto (minúsculas + remover tildes)
    ├── theme.js                # Toggle de tema claro/oscuro con localStorage
    └── toast.js                # Sistema de notificaciones toast
```

### Rol de cada carpeta

| Carpeta | Responsabilidad |
|---|---|
| `pages/` | Envoltura por ruta — importa el componente y lo envuelve en animación Framer Motion |
| `components/` | Lógica de negocio y presentación — cada archivo es un componente autónomo |
| `data/` | Datos puros en ES modules — sin lógica, sin estado, fácil de reemplazar por API |
| `utils/` | Funciones puras reutilizables — sin efectos secundarios ni JSX |

---

## 🧭 Rutas principales

| Ruta | Página | Componente | Descripción |
|---|---|---|---|
| `/` | Inicio | `Hero` | Landing con gradiente, CTA a BotTutor y Analizador |
| `/bot-tutor` | BotTutor | `BotTutor` | Wizard interactivo de 5 pasos (metodología ESCUCHA + SOLUCIÓN) |
| `/analizador` | Analizador | `Analyzer` | Detecta el motivo del cliente desde una frase textual |
| `/glosario` | Glosario | `Glossary` | 12 términos técnicos y comerciales en cuadrícula |
| `/ofertas` | Ofertas | `Offers` | 14 promociones vigentes para retención |
| `/guiones` | Guiones | `Scripts` | Acordeón con guiones por categoría de motivo |

Todas las rutas usan el layout persistente `MainLayout` que mantiene la Navbar, el Footer y el botón BackToTop visibles durante la navegación. Las transiciones entre páginas se animan con `AnimatePresence` + `key={location.pathname}`.

---

## ⚙️ Instalación y uso

```bash
# Requisitos: Node.js 18+ y npm 9+

# 1. Clonar el repositorio e instalar dependencias
npm install

# 2. Desarrollo — servidor local con HMR (hot module replacement)
npm run dev
# → Abrir http://localhost:5173

# 3. Producción — build estático
npm run build
# → Salida en dist/

# 4. Vista previa del build de producción
npm run preview
```

### Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia Vite dev server con HMR en `http://localhost:5173` |
| `npm run build` | Compila la aplicación para producción en `dist/` |
| `npm run preview` | Sirve el build de producción localmente para verificar |

---

## 🎨 Diseño visual

### Paleta de colores

| Color | Hex | Uso |
|---|---|---|
| Rojo profundo | `#8B0000` | Botones primarios, acentos, hover de cards |
| Rojo claro | `#B22222` | Gradientes, hover de botones |
| Dorado | `#D4A843` | Elementos activos, iconos, texto gradiente |
| Gris oscuro | `#1A1A1A` | Fondos de cards, paneles glass (dark mode) |
| Fondo página | `#0d0d1a` / `#f0f0f6` | Fondo de página según modo |

### Modo oscuro/claro

- **Por defecto**: modo oscuro (`class="dark"` en `<html>`).
- **Toggle**: botón ☀/🌙 en la Navbar alterna la clase `dark` y persiste en `localStorage`.
- **Implementación**: 14 CSS custom properties (`--etb-bg-*`, `--etb-text-*`, `--etb-border-*`) definidas en `:root` (light) y `.dark` (dark).
- **FOUC prevention**: script inline en `index.html` lee `localStorage` antes del primer render.

### Tipografía

- **Fuente**: Inter (Google Fonts, cargada desde CDN).
- **Sistema fluido**: tamaños escalonados por breakpoint (`text-xs sm:text-sm md:text-base lg:text-lg`).
- **Breakpoints**: `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px, `2xl` 1536px.

### Animaciones

| Elemento | Tecnología | Efecto |
|---|---|---|
| Transiciones entre rutas | Framer Motion + AnimatePresence | Fade + slide vertical (300ms) |
| Pasos del BotTutor | Framer Motion + AnimatePresence | Slide horizontal con spring |
| Menú mobile | Framer Motion `motion.div` | Opacity + height (250ms easeInOut) |
| Icono Hero | Tailwind `animate-float` | Flotación vertical (3s) |
| Hover de cards | Tailwind `transition-all` | Sombra + translateY |
| Acordeón de guiones | CSS `max-height` + `transition` | Expansión suave (400ms) |
| BackToTop | CSS `transition` | Opacity + translateY |

### Fondos

- **Hero**: gradiente lineal `#8B0000 → #B22222 → #1A1A1A`.
- **Patrón neural**: SVG de puntos blancos semitransparentes superpuesto.
- **Paneles glass**: `backdrop-blur-xl` con fondo semitransparente.

---

## 🤖 Metodología BotTutor

El BotTutor implementa la metodología **ESCUCHA + SOLUCIÓN** en 5 pasos secuenciales:

| Paso | Componente | Descripción |
|---|---|---|
| 1️⃣ Conectar | `StepConnect` | Escucha activa, saludo con nombre, 3 guiones de apertura, 5 principios clave |
| 2️⃣ Entender | `StepEmpathy` | Lectura emocional (4 estados), frases de empatía |
| 3️⃣ Validar | `StepValidate` | Parafraseo, preguntas abiertas, 4 motivos frecuentes con keywords |
| 4️⃣ Solucionar | `StepSolve` | Escalera de retención (10% / 20% / 30%), 6 ofertas destacadas |
| 5️⃣ Retener | `StepRetain` | Checklist de cierre, guiones de retención por motivo |

### Navegación

- **Botones Anterior/Siguiente**: avanzan o retroceden un paso.
- **Indicadores de paso**: 5 círculos — dorado (activo), rojo (completado), gris (pendiente).
- **Dots de progreso**: cada dot navega al paso correspondiente.
- **Animación**: slide horizontal con spring (`stiffness: 300, damping: 30`).

### Integración

El **Analizador** envía el motivo detectado a los guiones mediante `useNavigate(/guiones?motivo=ID)`. El componente **Scripts** lee `useSearchParams` y auto-abre el acordeón con `scrollIntoView`.

---

## ✨ Funcionalidades clave

### 🔍 Analizador de conversaciones
Ingresa una frase del cliente y detecta el motivo usando **keywords con normalización de texto** (minúsculas + remover tildes). 6 categorías: económicos, técnicos, traslado, viaje, competencia, personales. Muestra preguntas clave, ofertas sugeridas y enlace a guiones.

### 📋 Acordeón de guiones
Biblioteca con preguntas, ofertas y frases textuales por motivo. Apertura manual o automática vía URL params (`/guiones?motivo=ID`) con `scrollIntoView` suave.

### 📚 Glosario y Ofertas
Cuadrículas responsivas (`grid sm:grid-cols-2 lg:grid-cols-3`) con colores dinámicos y hover con elevación + borde rojo.

### 🔄 Transiciones entre rutas
`AnimatePresence` con `mode="wait"` y `key={location.pathname}` para evitar saltos visuales.

### 🧭 Navegación moderna
React Router v7 con layout route + `<Outlet />`, URLs compartibles, menú activo sincronizado con `NavLink` y callback `isActive`.

---

## 📦 Mejoras recientes

### v3.1 — Modo oscuro/claro

- **CSS custom properties**: 14 variables (`--etb-bg-*`, `--etb-text-*`, `--etb-border-*`) en `:root` y `.dark`. Todos los componentes (16 archivos JSX) usan `var(--etb-*)`.
- **FOUC prevention**: script inline en `index.html` lee `localStorage` antes del primer render.
- **Toggle corregido**: estado inicial leído de `localStorage` vía lazy initializer; solo alterna clase `dark`.
- **14 archivos modificados**: Navbar, MainLayout, Footer, Hero, BotTutor, Analyzer, Scripts, Glossary, Offers, y 5 step components.

### v3.2 — Diseño responsive

- **Navbar animada**: menú mobile con slide-down via `AnimatePresence` + `motion.div` (250ms).
- **Tipografía fluida**: títulos escalonados (`text-3xl sm:text-4xl md:text-5xl`), párrafos (`text-sm md:text-base lg:text-lg`).
- **Espaciado adaptativo**: secciones `py-16 md:py-24`, cards `p-4 md:p-5 lg:p-6`, gaps `gap-4 md:gap-6`.
- **BotTutor optimizado**: etiquetas ocultas en móviles (`hidden sm:inline`), botones `text-xs sm:text-sm px-4 sm:px-6`.
- **Overflow protegido**: `overflow-x-hidden` en MainLayout.
- **BackToTop responsivo**: `bottom-4 md:bottom-8 right-4 md:right-8`.

---

## 📄 Licencia y créditos

**Formador Online ETB** v3.2

Desarrollado para el área de formación de **COS** — Centro de Operaciones y Servicio.

| Rol | Persona |
|---|---|
| Formadora | **Naydu Paola Sánchez Vizcaya** |
| Desarrollador | **Oswaldo Castañeda** |
