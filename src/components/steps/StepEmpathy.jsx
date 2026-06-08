import { motion } from 'framer-motion';

const PHRASES = [
  '"Comprendo completamente tu situación, {nombre}. Déjame ver cómo puedo ayudarte."',
  '"Lamento mucho que estés pasando por esto. Quiero que sepas que estoy aquí para resolverlo."',
  '"Entiendo por qué eso sería frustrante. Vamos a buscar juntos la mejor solución."',
  '"Gracias por compartirme eso. Tu opinión es muy valiosa para mejorar nuestro servicio."',
];

const EMOTIONS = [
  { label: 'Enojado', color: '#ef4444', response: 'Mantén la calma, valida su molestia sin tomarlo personal.' },
  { label: 'Frustrado', color: '#f59e0b', response: 'Reconoce su esfuerzo al contactar y ofrece soluciones claras.' },
  { label: 'Indeciso', color: '#3b82f6', response: 'Ofrece opciones limitadas y destaca beneficios concretos.' },
  { label: 'Agradecido', color: '#10b981', response: 'Refuerza su lealtad y aprovecha para profundizar la relación.' },
];

export default function StepEmpathy({ onNext, onPrev, isFirst, isLast }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-[#B22222] to-[#D4A843] flex items-center justify-center shadow-lg shadow-[#B22222]/30 shrink-0">
          <i className="fas fa-brain text-white text-xl md:text-2xl" />
        </div>
        <div>
          <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-[#D4A843]">
            Paso 2 de 5
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-[var(--etb-text-heading)]">Entender con Empatía</h3>
          <p className="text-[var(--etb-text-secondary)] text-xs md:text-sm">
            Comprensión profunda del estado emocional del cliente
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
        <div className="space-y-4">
          <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#D4A843]">
            <i className="fas fa-heart" /> Lectura Emocional
          </h4>
          <div className="grid grid-cols-2 gap-2 md:gap-3">
            {EMOTIONS.map((e, i) => (
              <div
                key={i}
                className="p-3 md:p-4 rounded-xl bg-[var(--etb-bg-inner)] border border-[var(--etb-border)]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-3 h-3 rounded-full" style={{ background: e.color }} />
                  <span className="text-sm font-semibold text-[var(--etb-text-heading)]">{e.label}</span>
                </div>
                <p className="text-xs text-[var(--etb-text-secondary)] leading-relaxed">{e.response}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#D4A843]">
            <i className="fas fa-quote-right" /> Frases de Empatía
          </h4>
          <div className="space-y-3">
            {PHRASES.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-4 md:p-5 rounded-xl bg-[var(--etb-bg-inner)] border border-[var(--etb-border)] italic text-sm text-[var(--etb-text-tertiary)] leading-relaxed"
              >
                <i className="fas fa-quote-left text-[#D4A843] mr-2 opacity-60" />
                {p.replace(/\{nombre\}/g, '[cliente]')}
              </motion.div>
            ))}
          </div>

          <div className="mt-4 p-4 md:p-5 rounded-xl bg-[#D4A843]/5 border border-[#D4A843]/20">
            <p className="text-xs text-[#D4A843] font-semibold uppercase tracking-wider mb-1">
              <i className="fas fa-lightbulb mr-1" /> Inteligencia Emocional
            </p>
            <p className="text-sm text-[var(--etb-text-tertiary)]">
              Validar la emoción del cliente no es estar de acuerdo, es demostrar que
              comprendes su perspectiva. La empatía genuina reduce la tensión y abre
              espacio para la negociación.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
