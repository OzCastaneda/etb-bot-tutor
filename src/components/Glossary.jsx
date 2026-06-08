import { glosario } from '../data/glosario';
import { cardColors } from '../data/colors';

export default function Glossary() {
  return (
    <section id="glosario" className="relative py-16 md:py-24 bg-[var(--etb-bg-page)]">
      <div className="absolute inset-0 bg-neural opacity-20" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8B0000]/10 border border-[#8B0000]/30 text-[#D4A843] text-sm font-semibold tracking-wider uppercase mb-4">
            <i className="fas fa-book" />
            Referencia Rápida
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--etb-text-heading)]">
            Glosario de Términos
          </h2>
          <p className="mt-3 text-[var(--etb-text-secondary)] max-w-lg mx-auto">
            Definiciones rápidas de términos técnicos y comerciales para tu consulta diaria.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {glosario.map((item, i) => (
            <div
              key={i}
              className="card-etb group"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-white text-base mb-4 transition-transform group-hover:scale-110"
                style={{ background: cardColors[i % cardColors.length] }}
              >
                <i className="fas fa-book-open" />
              </div>
              <h3 className="text-base font-semibold text-[var(--etb-text-heading)] mb-2">{item.term}</h3>
              <p className="text-sm text-[var(--etb-text-secondary)] leading-relaxed">{item.def}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
