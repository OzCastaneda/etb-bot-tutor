import { motion } from 'framer-motion';
import { motivos } from '../../data/motivos';
import { STEP_MAP } from '../../data/guiones';

const VALIDATION_TIPS = [
  'Parafrasea el problema del cliente para confirmar que entendiste correctamente.',
  'Usa preguntas abiertas para profundizar en el motivo real.',
  'Confirma datos clave: dirección, plan, tiempo de servicio.',
  'Asegura al cliente que su caso será tratado con prioridad.',
];

const ICON_MAP = {
  economicos: 'fa-coins',
  tecnicos: 'fa-wrench',
  traslado: 'fa-truck',
  viaje: 'fa-plane',
  competencia: 'fa-store',
  personales: 'fa-user',
};

const guiones = STEP_MAP[3];

export default function StepValidate() {
  const activeMotivos = motivos.slice(0, 4);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-[#D4A843] to-[#8B0000] flex items-center justify-center shadow-lg shadow-[#D4A843]/30 shrink-0">
          <i className="fas fa-check-double text-white text-xl md:text-2xl" />
        </div>
        <div>
          <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-[#D4A843]">
            Paso 3 de 5
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-[var(--etb-text-heading)]">Validar el Motivo</h3>
          <p className="text-[var(--etb-text-secondary)] text-xs md:text-sm">
            Confirmación precisa de la necesidad del cliente
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
        <div className="space-y-4">
          <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#D4A843]">
            <i className="fas fa-clipboard-check" /> Técnicas de Validación
          </h4>
          <ul className="space-y-3">
            {VALIDATION_TIPS.map((tip, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 text-sm text-[var(--etb-text-tertiary)]"
              >
                <span className="mt-0.5 w-5 h-5 rounded-full bg-[#D4A843]/20 border border-[#D4A843]/30 flex items-center justify-center text-[10px] font-bold text-[#D4A843] shrink-0">
                  {i + 1}
                </span>
                {tip}
              </motion.li>
            ))}
          </ul>

          <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#D4A843] mt-6">
            <i className="fas fa-tag" /> Motivos Frecuentes
          </h4>
          <div className="space-y-3">
            {activeMotivos.map((m, i) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-4 md:p-5 rounded-xl bg-[var(--etb-bg-inner)] border border-[var(--etb-border)]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs"
                    style={{ background: m.color }}
                  >
                    <i className={`fas ${ICON_MAP[m.id] || 'fa-question'}`} />
                  </span>
                  <div>
                    <span className="text-sm font-semibold text-[var(--etb-text-heading)]">{m.title}</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {m.keywords.slice(0, 3).map((kw) => (
                        <span key={kw} className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--etb-bg-badge)] text-[var(--etb-text-muted)]">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-[var(--etb-text-secondary)] leading-relaxed">
                  {m.questions[0]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#D4A843]">
            <i className="fas fa-quote-right" /> Guiones de Persuasión y Objeciones
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

          <div className="mt-4 p-4 md:p-5 rounded-xl bg-[#D4A843]/5 border border-[#D4A843]/20">
            <p className="text-xs text-[#D4A843] font-semibold uppercase tracking-wider mb-1">
              <i className="fas fa-lightbulb mr-1" /> Pregunta clave
            </p>
            <p className="text-sm text-[var(--etb-text-tertiary)] italic">
              "Si entiendo bien, [motivo del cliente]. ¿Es correcto? Cuéntame más para darte la mejor solución."
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
