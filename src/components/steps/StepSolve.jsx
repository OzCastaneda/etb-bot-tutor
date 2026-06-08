import { motion } from 'framer-motion';
import { ofertas } from '../../data/ofertas';

const ESCALATOR = [
  { level: 1, discount: '10%', years: '2+ años', color: '#10b981' },
  { level: 2, discount: '20%', years: '3+ años', color: '#f59e0b' },
  { level: 3, discount: '30%', years: '5+ años', color: '#ef4444' },
];

export default function StepSolve({ onNext, onPrev, isFirst, isLast }) {
  const OFFER_HIGHLIGHTS = ofertas.slice(0, 6);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-[#8B0000] to-[#1A1A1A] flex items-center justify-center shadow-lg shadow-[#8B0000]/30 shrink-0">
          <i className="fas fa-gear text-white text-xl md:text-2xl" />
        </div>
        <div>
          <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-[#D4A843]">
            Paso 4 de 5
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-[var(--etb-text-heading)]">Solucionar Personalizado</h3>
          <p className="text-[var(--etb-text-secondary)] text-xs md:text-sm">
            Ofertas y soluciones a medida para cada perfil
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
        <div className="space-y-4">
          <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#D4A843]">
            <i className="fas fa-ladder" /> Escalera de Retención
          </h4>
          <div className="space-y-3">
            {ESCALATOR.map((e, i) => (
              <motion.div
                key={e.level}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative p-4 md:p-5 rounded-xl bg-[var(--etb-bg-inner)] border border-[var(--etb-border)]"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-bold text-[var(--etb-text-heading)]">
                    Nivel {e.level}
                  </span>
                  <span
                    className="text-lg font-extrabold"
                    style={{ color: e.color }}
                  >
                    {e.discount}
                  </span>
                </div>
                <p className="text-xs text-[var(--etb-text-secondary)]">
                  Clientes con {e.years} de antigüedad
                </p>
                <div
                  className="mt-2 h-1.5 rounded-full"
                  style={{ background: e.color, opacity: 0.3 }}
                >
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${(e.level / 3) * 100}%`,
                      background: e.color,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#D4A843]">
            <i className="fas fa-gift" /> Ofertas Destacadas
          </h4>
          <div className="grid grid-cols-2 gap-2 md:gap-3">
            {OFFER_HIGHLIGHTS.map((o, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="p-3 rounded-xl bg-[var(--etb-bg-inner)] border border-[var(--etb-border)]"
              >
                <div className="flex items-center gap-2 mb-1">
                  <i className={`fas ${o.icon} text-[#D4A843] text-sm`} />
                  <span className="text-xs font-semibold text-[var(--etb-text-heading)]">{o.title}</span>
                </div>
                <p className="text-[10px] text-[var(--etb-text-secondary)] leading-relaxed">{o.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="p-4 md:p-5 rounded-xl bg-gradient-to-r from-[#8B0000]/10 to-[#B22222]/10 border border-[#8B0000]/30">
            <p className="text-xs text-[#D4A843] font-semibold uppercase tracking-wider mb-1">
              <i className="fas fa-bullseye mr-1" /> Estrategia
            </p>
            <p className="text-sm text-[var(--etb-text-tertiary)]">
              Inicia siempre con el descuento más bajo (10%) y escala según la
              resistencia del cliente. Preserva el margen mientras retienes.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
