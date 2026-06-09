import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden bg-hero-gradient"
    >
      <div className="absolute inset-0 bg-neural opacity-30" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--etb-bg-page)] to-transparent" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white/80 text-sm font-medium mb-8">
          <i className="fas fa-headset text-[#D4A843]" />
          Asistente Inteligente ETB
        </div>

        <div className="mb-8">
          <i className="fas fa-headset text-5xl sm:text-6xl md:text-7xl text-[#D4A843] opacity-90 animate-float" />
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
          Formador Online{' '}
          <span className="text-[#3b82f6]">
            ETB
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-white/70 font-light max-w-xl mx-auto leading-relaxed">
          Tu asistente inteligente para potenciar la formación y retención en ETB.
          Aplica la metodología <strong className="text-white/90">ESCUCHA + SOLUCIÓN</strong> en cada interacción.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/bot-tutor"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#D4A843] text-[#1A1A1A] font-bold text-sm hover:bg-[#e4b853] hover:shadow-lg hover:shadow-[#D4A843]/30 active:scale-[0.97] transition-all duration-200"
          >
            <i className="fas fa-robot" />
            Explorar Bot Tutor
          </Link>
          <Link
            to="/analizador"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/40 active:scale-[0.97] transition-all duration-200"
          >
            <i className="fas fa-microphone" />
            Analizar Conversación
          </Link>
        </div>
      </div>
    </section>
  );
}
