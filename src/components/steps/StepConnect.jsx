import { motion } from 'framer-motion';
import { STEP_MAP } from '../../data/guiones';

const TIPS = [
  'Saluda usando el nombre del cliente (tono cálido y seguro).',
  'Preséntate con tu nombre y cargo.',
  'Pregunta cómo se encuentra antes de ir al motivo.',
  'Usa pausas activas y evita interrumpir.',
  'Demuestra que tienes tiempo para escucharlo.',
];

const guiones = STEP_MAP[1];

export default function StepConnect() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-[#8B0000] to-[#B22222] flex items-center justify-center shadow-lg shadow-[#8B0000]/30 shrink-0">
          <i className="fas fa-headset text-white text-xl md:text-2xl" />
        </div>
        <div>
          <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-[#D4A843]">
            Paso 1 de 5
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-[var(--etb-text-heading)]">Conectar y Escuchar</h3>
          <p className="text-[var(--etb-text-secondary)] text-xs md:text-sm">
            Primera impresión y escucha activa del cliente
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
        <div className="space-y-4">
          <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#D4A843]">
            <i className="fas fa-bullhorn" /> Principios Clave
          </h4>
          <ul className="space-y-3">
            {TIPS.map((tip, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 text-sm text-[var(--etb-text-tertiary)]"
              >
                <span className="mt-0.5 w-5 h-5 rounded-full bg-[#8B0000]/20 border border-[#8B0000]/30 flex items-center justify-center text-[10px] font-bold text-[#D4A843] shrink-0">
                  {i + 1}
                </span>
                {tip}
              </motion.li>
            ))}
          </ul>

          <div className="p-4 md:p-5 rounded-xl bg-[#D4A843]/5 border border-[#D4A843]/20">
            <p className="text-xs text-[#D4A843] font-semibold uppercase tracking-wider mb-1">
              <i className="fas fa-lightbulb mr-1" /> Clave de empatía
            </p>
            <p className="text-sm text-[var(--etb-text-tertiary)]">
              El cliente que se siente escuchado desde el primer momento reduce su resistencia
              y está más dispuesto a considerar soluciones.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#D4A843]">
            <i className="fas fa-quote-right" /> Guiones de Apertura — Gestiones Especiales
          </h4>
          <div className="space-y-3">
            {guiones.map((g, i) => (
              <motion.div
                key={g.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-[var(--etb-border)] bg-[var(--etb-bg-inner)] overflow-hidden"
              >
                <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--etb-border)]" style={{ background: `${g.color}08` }}>
                  <i className={`fas ${g.icon} text-sm`} style={{ color: g.color }} />
                  <span className="text-sm font-semibold text-[var(--etb-text-heading)]">{g.title}</span>
                </div>
                <div className="p-4 space-y-2">
                  {g.scripts.map((s, j) => (
                    <div
                      key={j}
                      className="p-3 rounded-lg bg-[var(--etb-bg-card)] italic text-sm text-[var(--etb-text-tertiary)] leading-relaxed"
                    >
                      <i className="fas fa-quote-left mr-2 opacity-50" style={{ color: g.color }} />
                      {s}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
