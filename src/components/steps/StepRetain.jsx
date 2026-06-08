import { motion } from 'framer-motion';
import { STEP_MAP } from '../../data/guiones';

const CLOSING_TIPS = [
  'Resume los beneficios acordados y confirma conformidad.',
  'Agradece al cliente por su tiempo y lealtad.',
  'Indica el siguiente paso (envío de documento, visita, llamada de seguimiento).',
  'Invita al cliente a contactar ante cualquier duda futura.',
  'Deja una puerta abierta: "Siempre estaré aquí para ayudarte."',
];

const guiones = STEP_MAP[5];

export default function StepRetain() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-[#D4A843] to-[#10b981] flex items-center justify-center shadow-lg shadow-[#D4A843]/30 shrink-0">
          <i className="fas fa-handshake text-white text-xl md:text-2xl" />
        </div>
        <div>
          <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-[#D4A843]">
            Paso 5 de 5
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-[var(--etb-text-heading)]">Retener con Fidelidad</h3>
          <p className="text-[var(--etb-text-secondary)] text-xs md:text-sm">
            Cierre efectivo y fidelización del cliente
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
        <div className="space-y-4">
          <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#D4A843]">
            <i className="fas fa-check-circle" /> Cierre de la Interacción
          </h4>
          <ul className="space-y-3">
            {CLOSING_TIPS.map((tip, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 text-sm text-[var(--etb-text-tertiary)]"
              >
                <span className="mt-0.5 w-5 h-5 rounded-full bg-[#10b981]/20 border border-[#10b981]/30 flex items-center justify-center text-[10px] font-bold text-[#10b981] shrink-0">
                  <i className="fas fa-check" />
                </span>
                {tip}
              </motion.li>
            ))}
          </ul>

          <div className="p-4 md:p-5 rounded-xl bg-gradient-to-r from-[#10b981]/10 to-[#D4A843]/10 border border-[#10b981]/30">
            <p className="text-xs text-[#10b981] font-semibold uppercase tracking-wider mb-1">
              <i className="fas fa-star mr-1" /> Objetivo final
            </p>
            <p className="text-sm text-[var(--etb-text-tertiary)]">
              Cliente satisfecho y retenido. La meta no es solo resolver el problema de hoy,
              sino construir una relación de largo plazo que prevenga futuros retiros.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#D4A843]">
            <i className="fas fa-quote-right" /> Guiones de Cierre — Gestiones Especiales
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
                  {g.legal && (
                    <span
                      className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0"
                      style={{
                        color: g.color,
                        background: `${g.color}20`,
                        border: `1px solid ${g.color}40`,
                      }}
                      title={g.legal.desc}
                    >
                      {g.legal.name}
                    </span>
                  )}
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
                  {g.url && (
                    <div className="mt-2 pt-2 border-t border-[var(--etb-border)]">
                      <a
                        href={g.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4A843] hover:underline"
                      >
                        <i className="fas fa-external-link-alt" />
                        Audio derechos y deberes del usuario
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
