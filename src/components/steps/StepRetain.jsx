import { motion } from 'framer-motion';
import { motivos } from '../../data/motivos';

const CLOSING_TIPS = [
  'Resume los beneficios acordados y confirma conformidad.',
  'Agradece al cliente por su tiempo y lealtad.',
  'Indica el siguiente paso (envío de documento, visita, llamada de seguimiento).',
  'Invita al cliente a contactar ante cualquier duda futura.',
  'Deja una puerta abierta: "Siempre estaré aquí para ayudarte."',
];

export default function StepRetain({ onNext, onPrev, isFirst, isLast }) {
  const RETENTION_SCRIPTS = motivos.map((m) => ({
    title: m.title,
    color: m.color,
    script: m.scripts[m.scripts.length - 1],
  }));
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

          <div className="mt-4 p-4 md:p-5 rounded-xl bg-gradient-to-r from-[#10b981]/10 to-[#D4A843]/10 border border-[#10b981]/30">
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
            <i className="fas fa-quote-right" /> Guiones de Retención
          </h4>
          <div className="space-y-3">
            {RETENTION_SCRIPTS.slice(0, 5).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="p-4 md:p-5 rounded-xl bg-[var(--etb-bg-inner)] border border-[var(--etb-border)]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: item.color }}
                  />
                  <span className="text-xs font-semibold text-[var(--etb-text-heading)]">{item.title}</span>
                </div>
                <p className="text-xs text-[var(--etb-text-tertiary)] italic leading-relaxed">
                  <i className="fas fa-quote-left text-[#10b981] mr-1 opacity-60" />
                  {item.script.replace(/"/g, '').trim().slice(0, 100)}...
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-3 p-4 md:p-5 rounded-xl bg-[#D4A843]/5 border border-[#D4A843]/20">
            <p className="text-xs text-[#D4A843] font-semibold uppercase tracking-wider mb-1">
              <i className="fas fa-strong mr-1" /> Indicador de éxito
            </p>
            <p className="text-sm text-[var(--etb-text-tertiary)]">
              Cliente retenido = cliente que confirma su permanencia y muestra
              disposición a seguir con ETB. Mide tu tasa de retención semanal.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
