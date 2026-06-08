# Documentación Técnica — Formador Online ETB

---

## 1. Introducción del proyecto

**Formador Online ETB** es una aplicación web de entrenamiento para agentes del área de servicio al cliente y retención de ETB (Empresa de Telecomunicaciones de Bogotá). Su objetivo es capacitar a los agentes en la metodología **ESCUCHA + SOLUCIÓN** mediante un flujo interactivo de 5 pasos (Conectar → Entender → Validar → Solucionar → Retener), complementado con herramientas de análisis de conversaciones, glosario técnico, catálogo de ofertas y biblioteca de guiones.

### Tecnologías principales

| Tecnología | Versión | Propósito |
|---|---|---|
| React | 19 | Librería de interfaz de usuario |
| Vite | 5 | Bundler y dev server con HMR |
| Tailwind CSS | 3 | Framework de estilos utilitario |
| Framer Motion | 12 | Animaciones y transiciones |
| React Router | 7 | Enrutamiento SPA |
| Font Awesome | 7 (local) | Librería de iconos |

### Dependencias clave (`package.json`)

```json
{
  "dependencies": {
    "@fortawesome/fontawesome-free": "^7.2.0",
    "framer-motion": "^12.40.0",
    "react": "^19.2.7",
    "react-dom": "^19.2.7",
    "react-router-dom": "^7.17.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.7.0",
    "autoprefixer": "^10.5.0",
    "postcss": "^8.5.15",
    "tailwindcss": "^3.4.19",
    "vite": "^5.4.0"
  }
}
```

---

## 2. Arquitectura del sistema

### 2.1 Estructura de carpetas

```
src/
├── main.jsx                     # Entry point: BrowserRouter + ReactDOM
├── App.jsx                      # Routes + AnimatePresence (transiciones entre páginas)
├── index.css                    # Tailwind directives + componentes utilitarios
│
├── pages/                       # Vista pública por ruta (una página = una URL)
│   ├── Inicio.jsx               # Ruta: /
│   ├── BotTutor.jsx              # Ruta: /bot-tutor
│   ├── Analizador.jsx            # Ruta: /analizador
│   ├── Glosario.jsx              # Ruta: /glosario
│   ├── Ofertas.jsx               # Ruta: /ofertas
│   └── Guiones.jsx               # Ruta: /guiones
│
├── components/                  # Componentes reutilizables
│   ├── MainLayout.jsx           # Layout común: Navbar + Outlet + Footer
│   ├── Navbar.jsx               # Barra de navegación con NavLink
│   ├── Hero.jsx                 # Landing principal (Inicio)
│   ├── BotTutor.jsx             # Wizard de 5 pasos del Bot Tutor
│   ├── Analyzer.jsx             # Analizador de conversaciones
│   ├── Glossary.jsx             # Grid de glosario
│   ├── Offers.jsx               # Grid de ofertas
│   ├── Scripts.jsx              # Acordeón de guiones
│   ├── Footer.jsx               # Pie de página
│   ├── BackToTop.jsx            # Botón flotante "volver arriba"
│   └── steps/                   # Subcomponentes del BotTutor
│       ├── StepConnect.jsx      # Paso 1: Conectar y escuchar
│       ├── StepEmpathy.jsx      # Paso 2: Entender con empatía
│       ├── StepValidate.jsx     # Paso 3: Validar el motivo
│       ├── StepSolve.jsx        # Paso 4: Solucionar personalizado
│       └── StepRetain.jsx       # Paso 5: Retener con fidelidad
│
├── data/                        # Datos estáticos (sin estado, sin lógica)
│   ├── motivos.js               # 6 categorías con keywords, preguntas, ofertas, scripts
│   ├── glosario.js              # 12 términos técnicos
│   ├── ofertas.js               # 14 ofertas comerciales
│   └── colors.js                # 12 colores para cards
│
└── utils/                       # Utilidades puras (funciones sin efecto secundario)
    ├── normalize.js             # Normalización de texto (minúsculas + remover tildes)
    ├── theme.js                 # Toggle de tema claro/oscuro con localStorage
    └── toast.js                 # Sistema de notificaciones toast
```

### 2.2 Patrón de diseño — Páginas como envoltura

Cada archivo en `pages/` es una envoltura mínima que importa su componente desde `components/` y lo envuelve en una animación de entrada/salida con Framer Motion:

```jsx
// src/pages/Analizador.jsx
import { motion } from 'framer-motion';
import Analyzer from '../components/Analyzer';

export default function Analizador() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Analyzer />
    </motion.div>
  );
}
```

### 2.3 Enrutamiento con `react-router-dom`

**`src/main.jsx`** — Entry point que envuelve la aplicación en `BrowserRouter`:

```jsx
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

**`src/App.jsx`** — Define las rutas y las envuelve en `AnimatePresence` para transiciones fluidas entre páginas:

```jsx
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          <Route index element={<Inicio />} />
          <Route path="bot-tutor" element={<BotTutorPage />} />
          <Route path="analizador" element={<Analizador />} />
          <Route path="glosario" element={<Glosario />} />
          <Route path="ofertas" element={<Ofertas />} />
          <Route path="guiones" element={<Guiones />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
```

El `key={location.pathname}` en `<Routes>` permite que `AnimatePresence` detecte el cambio de ruta y ejecute la animación de salida del componente anterior antes de montar el nuevo.

**`src/components/MainLayout.jsx`** — Layout compartido que envuelve todas las rutas:

```jsx
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from './BackToTop';

export default function MainLayout() {
  return (
    <div className="relative min-h-screen bg-[#0d0d1a]">
      <Navbar />
      <main><Outlet /></main>
      <Footer />
      <BackToTop />
    </div>
  );
}
```

---

## 3. Componentes principales

### 3.1 `Navbar.jsx` — Navegación principal

**Props/Estado interno:**
- `open` (`useState`): controla el menú mobile (hamburguesa)
- `scrolled` (`useState`): detecta scroll > 50px para agregar sombra
- `dark` (`useState`): estado del tema claro/oscuro
- `location.pathname` (`useLocation`): cierra el menú mobile al navegar

**Uso de `NavLink`:**
```jsx
<NavLink
  to="/analizador"
  className={({ isActive }) =>
    `flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
      isActive
        ? 'text-[#D4A843] bg-[#D4A843]/10'        // activo: dorado
        : 'text-[#a0a0b8] hover:text-white hover:bg-[#8B0000]/10'  // inactivo: gris
    }`
  }
>
```

**Efecto de scroll:**
```jsx
useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 50);
  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
}, []);
```

### 3.2 `BotTutor.jsx` — Wizard de 5 pasos

**Estado y lógica de navegación:**

```jsx
const [current, setCurrent] = useState(0);
const [direction, setDirection] = useState(1);

const clampedIdx = Math.max(0, Math.min(current, TOTAL_STEPS - 1));

const goTo = useCallback((idx) => {
  const safeIdx = Math.max(0, Math.min(idx, TOTAL_STEPS - 1));
  if (safeIdx === current) return;                      // evitar re-renders innecesarios
  setDirection(safeIdx > current ? 1 : -1);             // dirección de la animación
  setCurrent(safeIdx);
}, [current]);

const next = useCallback(() => !isLast && goTo(current + 1), [current, isLast, goTo]);
const prev = useCallback(() => !isFirst && goTo(current - 1), [current, isFirst, goTo]);
```

**Renderizado dinámico del paso activo:**
```jsx
const StepComponent = STEPS[clampedIdx].component;

<AnimatePresence mode="wait" custom={direction}>
  <motion.div key={current} custom={direction} variants={slideVariants} ...>
    <StepComponent onNext={next} onPrev={prev} isFirst={isFirst} isLast={isLast} />
  </motion.div>
</AnimatePresence>
```

La técnica `StepComponent` (variable con mayúscula) permite renderizar cualquier componente del array `STEPS` sin condicionales.

### 3.3 `Analyzer.jsx` — Analizador de conversaciones

**Estado:**
```jsx
const [texto, setTexto] = useState('');        // texto ingresado por el usuario
const [resultado, setResultado] = useState(null); // motivo detectado (objeto o null)
const [error, setError] = useState('');          // mensaje de error
```

**Flujo de análisis:**
1. El usuario escribe una frase y presiona "Analizar" o Enter.
2. `analizar()` normaliza el texto y lo compara con las keywords de cada motivo en `motivos.js`.
3. Si hay coincidencia, se muestra una tarjeta con preguntas clave, ofertas sugeridas y un botón para navegar a `/guiones?motivo=ID`.
4. Si no hay coincidencia, se muestra un mensaje de error con sugerencias.

**Navegación a guiones mediante `useNavigate`:**
```jsx
const navigate = useNavigate();

<button onClick={() => navigate(`/guiones?motivo=${resultado.id}`)}>
  Ver guiones sugeridos
</button>
```

### 3.4 `Glossary.jsx` y `Offers.jsx` — Grids de datos

Ambos componentes siguen el mismo patrón: importan datos estáticos desde `src/data/`, los mapean a una cuadrícula responsiva de cards con colores dinámicos.

```jsx
import { glosario } from '../data/glosario';
import { cardColors } from '../data/colors';

{glosario.map((item, i) => (
  <div key={i} className="card-etb group">
    <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white"
         style={{ background: cardColors[i % cardColors.length] }}>
      <i className="fas fa-book-open" />
    </div>
    <h3 className="text-base font-semibold text-white mb-2">{item.term}</h3>
    <p className="text-sm text-[#a0a0b8]">{item.def}</p>
  </div>
))}
```

### 3.5 `Scripts.jsx` — Acordeón de guiones

**Uso de `useSearchParams` para auto-apertura desde el Analizador:**

```jsx
const [searchParams] = useSearchParams();

useEffect(() => {
  const motivo = searchParams.get('motivo');
  if (!motivo) return;
  const timer = setTimeout(() => {
    const header = document.querySelector(`[data-accordion-id="${motivo}"]`);
    if (header && !header.classList.contains('active')) {
      header.scrollIntoView({ behavior: 'smooth', block: 'center' });
      toggleAccordion(header);
    }
  }, 350);
  return () => clearTimeout(timer);
}, [searchParams]);
```

**Delegación de eventos para el acordeón:**
```jsx
useEffect(() => {
  const handleClick = (e) => {
    const header = e.target.closest('[data-accordion-id]');
    if (header) toggleAccordion(header);
  };
  document.addEventListener('click', handleClick);
  return () => document.removeEventListener('click', handleClick);
}, []);
```

La función `toggleAccordion` usa manipulación directa del DOM (`classList`, `style.maxHeight`) sobre los elementos del acordeón para lograr la animación de expansión/contracción sin dependencias externas.

### 3.6 `BackToTop.jsx` — Botón flotante

```jsx
const [visible, setVisible] = useState(false);

useEffect(() => {
  const onScroll = () => setVisible(window.scrollY > 400);
  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
}, []);
```

---

## 4. Estilos y diseño

### 4.1 Configuración de Tailwind CSS (`tailwind.config.js`)

```js
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        etb: {
          red: '#8B0000',
          'red-light': '#B22222',
          dark: '#1A1A1A',
          'dark-alt': '#111128',
          light: '#F5F5F5',
          gold: '#D4A843',
          accent: '#004aad',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #8B0000 0%, #B22222 50%, #1A1A1A 100%)',
        'neural': "url(\"...patrón SVG de puntos...\")",
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
};
```

### 4.2 Paleta de colores

| Color | Hex | Uso |
|---|---|---|
| Rojo profundo | `#8B0000` | Botones primarios, acentos, hover de cards |
| Rojo claro | `#B22222` | Gradientes, hover de botones |
| Gris oscuro | `#1A1A1A` | Fondos de cards, paneles glass |
| Gris fondo | `#0d0d1a` | Fondo de página principal |
| Dorado | `#D4A843` | Elementos activos, iconos, texto gradiente |
| Blanco suave | `#F5F5F5` | Texto claro (no usado directamente, reemplazado por escalas de grises) |

### 4.3 Componentes utilitarios (`src/index.css`)

```css
@layer components {
  .card-etb {
    @apply bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 
           shadow-lg transition-all duration-300 ease-in-out;
  }
  .card-etb:hover {
    @apply border-[#8B0000] shadow-[0_0_20px_rgba(139,0,0,0.15)] -translate-y-1;
  }

  .btn-etb-primary {
    @apply inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm
           bg-[#8B0000] text-white 
           hover:bg-[#B22222] hover:shadow-lg hover:shadow-[#8B0000]/25
           active:scale-[0.97] transition-all duration-200;
  }

  .glass-panel {
    @apply bg-[#1A1A1A]/80 backdrop-blur-xl border border-[#2A2A2A] rounded-2xl shadow-2xl;
  }

  .gradient-text {
    @apply bg-gradient-to-r from-[#D4A843] via-[#B22222] to-[#8B0000] bg-clip-text text-transparent;
  }
}
```

### 4.4 Modo oscuro

El proyecto usa `darkMode: 'class'` en Tailwind. La clase `dark` se aplica por defecto en el `<html>` y se alterna mediante el botón de tema en `Navbar.jsx`:

```jsx
const toggleTheme = () => {
  const next = !dark;
  setDark(next);
  document.documentElement.classList.toggle('light', !next);
  document.documentElement.classList.toggle('dark', next);
  localStorage.setItem('etb-theme', next ? 'dark' : 'light');
};
```

El estado persiste en `localStorage` con la clave `etb-theme`. No se usan clases `dark:` en los componentes porque el diseño completo está pensado para modo oscuro; no existe una variante "claro" implementada más allá del toggle.

### 4.5 Animaciones

| Tipo | Tecnología | Uso |
|---|---|---|
| Transiciones entre páginas | Framer Motion + AnimatePresence | `fade` + `slideY` (300ms) al cambiar de ruta |
| Transiciones entre pasos del BotTutor | Framer Motion + AnimatePresence | `slideX` con spring (stiffness 300, damping 30) |
| Animaciones de entrada | Framer Motion `motion.div` | `opacity` + `translateY` en listas con `delay` escalonado |
| Animación flotante | Tailwind `animate-float` | Icono del headset en el Hero (3s ease-in-out) |
| Hover en cards | Tailwind `transition-all duration-300` | `-translate-y-1`, sombra, borde rojo |
| Acordeón | CSS `max-height` con `transition` | Expansión/contracción suave (400ms) |

---

## 5. Flujo del Bot Tutor ETB

### 5.1 Modelo conceptual

El Bot Tutor implementa la metodología **ESCUCHA + SOLUCIÓN** en 5 pasos secuenciales:

```
Conectar → Entender → Validar → Solucionar → Retener
```

### 5.2 Implementación por paso

Cada paso es un subcomponente independiente dentro de `src/components/steps/`. Todos reciben las mismas props: `{ onNext, onPrev, isFirst, isLast }`.

| Paso | Componente | Archivo | Contenido principal |
|---|---|---|---|
| 1. Conectar | `StepConnect` | `steps/StepConnect.jsx` | 5 principios de escucha activa, 3 guiones de apertura, consejo de empatía |
| 2. Entender | `StepEmpathy` | `steps/StepEmpathy.jsx` | Matriz de 4 estados emocionales (enojado, frustrado, indeciso, agradecido) con respuestas, 4 frases de empatía |
| 3. Validar | `StepValidate` | `steps/StepValidate.jsx` | 4 técnicas de validación, 4 motivos frecuentes con keywords desde `data/motivos.js` |
| 4. Solucionar | `StepSolve` | `steps/StepSolve.jsx` | Escalera de retención (10%/20%/30%), 6 ofertas destacadas desde `data/ofertas.js` |
| 5. Retener | `StepRetain` | `steps/StepRetain.jsx` | Checklist de 5 pasos de cierre, guiones de retención desde `data/motivos.js` |

### 5.3 Navegación entre pasos

El usuario puede navegar de tres formas:

1. **Botones Anterior/Siguiente**: llaman a `prev()` / `next()`, que incrementan o decrementan el índice `current`.
2. **Indicadores de paso**: cada círculo en la parte superior ejecuta `goTo(i)` con su índice.
3. **Dots de progreso**: en la parte inferior, cada dot ejecuta `goTo(i)`.

**Control de bordes:**
- `isFirst = (clampedIdx === 0)` — deshabilita "Anterior"
- `isLast = (clampedIdx === TOTAL_STEPS - 1)` — deshabilita "Siguiente"
- `goTo` usa `Math.max(0, Math.min(idx, TOTAL_STEPS - 1))` como salvaguarda

### 5.4 Animación de transición entre pasos

```jsx
const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),  // desde derecha o izquierda
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),    // sale hacia izquierda o derecha
};
```

La dirección (`dir`) se calcula en `goTo`: si el nuevo índice es mayor, `direction = 1` (slide izquierda); si es menor, `direction = -1` (slide derecha).

### 5.5 Integración con otras rutas

El botón "Ver guiones sugeridos" en el `Analyzer` navega a `/guiones?motivo=ID`. El componente `Scripts` lee el parámetro y auto-abre el acordeón correspondiente:

```jsx
// Analyzer.jsx — navegación
<button onClick={() => navigate(`/guiones?motivo=${resultado.id}`)}>

// Scripts.jsx — recepción
const [searchParams] = useSearchParams();

useEffect(() => {
  const motivo = searchParams.get('motivo');
  if (motivo) {
    setTimeout(() => {
      const header = document.querySelector(`[data-accordion-id="${motivo}"]`);
      if (header && !header.classList.contains('active')) toggleAccordion(header);
    }, 350);
  }
}, [searchParams]);
```

---

## 6. Buenas prácticas

### 6.1 Modularización

- **Separación de responsabilidades**: `pages/` solo importa y envuelve componentes de `components/`. `components/` contiene toda la lógica de presentación. `data/` contiene datos puros sin lógica. `utils/` contiene funciones puras sin efectos secundarios.
- **Componentes atómicos**: los 5 pasos del BotTutor son componentes independientes (`StepConnect`, `StepEmpathy`, etc.) que pueden testearse y mantenerse por separado.
- **Datos centralizados**: toda la información de motivos, glosario y ofertas vive en `src/data/` y se importa donde se necesita.

### 6.2 Reutilización de estilos

Las clases utilitarias de Tailwind se centralizan en `src/index.css` usando `@layer components`:

- `card-etb` — para cualquier card del sistema
- `btn-etb-primary` / `btn-etb-secondary` — para botones
- `glass-panel` — para paneles con efecto glassmorphism
- `gradient-text` — para texto con gradiente dorado-rojo

### 6.3 Manejo de scroll

- **`Navbar`**: no interfiere con el scroll nativo del navegador; solo agrega una sombra cuando el usuario se desplaza.
- **`BackToTop`**: botón flotante que aparece al superar 400px de scroll, con `position: fixed` para no alterar el flujo del documento.
- **Transiciones entre rutas**: `AnimatePresence` + `key={location.pathname}` evita que el scroll se resetee al cambiar de página.
- **`Scripts`**: al auto-abrir un acordeón desde URL params, usa `scrollIntoView({ behavior: 'smooth', block: 'center' })` para posicionar el acordeón en el centro de la pantalla.

### 6.4 Patrones recomendados

**Atomic Design aplicado:**

```
Átomos:       Botones (btn-etb-*), Cards (card-etb), Inputs
Moléculas:    StepConnect, StepEmpathy (combinan ícono + texto + lista)
Organismos:   BotTutor (combina 5 moléculas en un wizard)
Plantillas:   MainLayout (Navbar + Outlet + Footer)
Páginas:      Inicio, BotTutor, Analizador, etc.
```

**Clean Architecture aplicada:**

```
Capa de datos:      src/data/          — datos estáticos (motivos, glosario, ofertas)
Capa de utilidades: src/utils/         — funciones auxiliares (normalize, toast, theme)
Capa de dominio:    src/components/    — lógica de negocio y presentación
Capa de aplicación: src/pages/ + App   — orquestación y enrutamiento
```

---

## 7. Instalación y ejecución

### 7.1 Requisitos

- Node.js 18+
- npm 9+

### 7.2 Comandos

```bash
# Clonar e instalar dependencias
npm install

# Desarrollo con HMR (hot module replacement)
npm run dev
# → http://localhost:5173

# Build para producción
npm run build
# → Salida en dist/

# Vista previa del build
npm run preview
```

### 7.3 Configuración de Vite (`vite.config.js`)

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',         // rutas relativas para builds desplegados en subdirectorios
  build: {
    outDir: 'dist',   // carpeta de salida
  },
});
```

### 7.4 Configuración de PostCSS (`postcss.config.js`)

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

---

## 8. Futuras mejoras

| Mejora | Descripción |
|---|---|
| **Backend dinámico** | Reemplazar `src/data/` (estático) con llamadas a una API REST o GraphQL para que los motivos, ofertas y guiones sean configurables desde un CMS. |
| **Framer Motion avanzado** | Agregar animaciones de drag & drop, layout animations con `layoutId`, y transiciones de ruta con `AnimatePresence` más elaboradas (cubrir, reveal, etc.). |
| **Storybook** | Documentar cada componente de forma aislada con Storybook, incluyendo variantes de estado (loading, empty, error, success) para el Analyzer. |
| **Pruebas unitarias** | Agregar Vitest + React Testing Library para cubrir: `getMotivo()`, `toggleAccordion()`, renderizado condicional de resultados, navegación entre pasos. |
| **i18n** | Internacionalización con `react-i18next` para soporte multilingüe (español/inglés). |
| **Modo claro completo** | Implementar una paleta clara completa usando las clases `dark:` de Tailwind, actualmente solo existe el modo oscuro. |
| **PWA** | Agregar service worker y manifiesto para que la aplicación funcione offline como Progressive Web App. |
| **Analíticas** | Integrar seguimiento de eventos (pasos completados del BotTutor, análisis realizados, guiones consultados) con herramientas como PostHog o Plausible. |

---

*Documentación generada a partir del código fuente — Proyecto Formador Online ETB v3.0.0*
