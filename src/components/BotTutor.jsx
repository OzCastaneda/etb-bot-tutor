import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import StepConnect from './steps/StepConnect';
import StepEmpathy from './steps/StepEmpathy';
import StepValidate from './steps/StepValidate';
import StepSolve from './steps/StepSolve';
import StepRetain from './steps/StepRetain';

const STEPS = [
  { id: 'connect', label: 'Conectar', icon: 'fa-headset', component: StepConnect },
  { id: 'empathy', label: 'Entender', icon: 'fa-brain', component: StepEmpathy },
  { id: 'validate', label: 'Validar', icon: 'fa-check-double', component: StepValidate },
  { id: 'solve', label: 'Solucionar', icon: 'fa-gear', component: StepSolve },
  { id: 'retain', label: 'Retener', icon: 'fa-handshake', component: StepRetain },
];

const TOTAL_STEPS = STEPS.length;

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
};

export default function BotTutor() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const clampedIdx = Math.max(0, Math.min(current, TOTAL_STEPS - 1));
  const isFirst = clampedIdx === 0;
  const isLast = clampedIdx === TOTAL_STEPS - 1;

  const goTo = useCallback((idx) => {
    const safeIdx = Math.max(0, Math.min(idx, TOTAL_STEPS - 1));
    if (safeIdx === current) return;
    setDirection(safeIdx > current ? 1 : -1);
    setCurrent(safeIdx);
  }, [current]);

  const next = useCallback(() => !isLast && goTo(current + 1), [current, isLast, goTo]);
  const prev = useCallback(() => !isFirst && goTo(current - 1), [current, isFirst, goTo]);

  const StepComponent = STEPS[clampedIdx].component;

  return (
    <section id="bot-tutor" className="relative py-16 md:py-24 overflow-hidden bg-[var(--etb-bg-page)]">
      <div className="absolute inset-0 bg-neural pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#8B0000]/10 border border-[#8B0000]/30 text-[#D4A843] text-sm font-semibold tracking-wider uppercase mb-4">
            <i className="fas fa-robot" />
            Bot Tutor ETB
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--etb-text-heading)]">
            Metodología{' '}
            <span className="gradient-text">ESCUCHA + SOLUCIÓN</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--etb-text-secondary)] max-w-2xl mx-auto">
            Flujo inteligente de retención: Conecta, comprende, valida, resuelve y fideliza
            a cada cliente con empatía y precisión.
          </p>
        </div>

        <div className="flex items-center justify-center gap-1 sm:gap-3 mb-12">
          {STEPS.map((s, i) => {
            const active = i === clampedIdx;
            const done = i < clampedIdx;
            return (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                className="group flex flex-col items-center gap-2"
              >
                <div
                  className={`relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border-2 transition-all duration-300 ${
                    active
                      ? 'border-[#D4A843] bg-[#D4A843]/10 shadow-lg shadow-[#D4A843]/20 scale-110'
                      : done
                      ? 'border-[#8B0000] bg-[#8B0000]/20'
                      : 'border-[var(--etb-border-light)] bg-[var(--etb-bg-card)] hover:border-[var(--etb-text-muted)]'
                  }`}
                >
                  {done ? (
                    <i className="fas fa-check text-[#D4A843] text-lg" />
                  ) : (
                    <i
                      className={`fas ${s.icon} text-lg ${
                        active ? 'text-[#D4A843]' : 'text-[var(--etb-text-muted)]'
                      }`}
                    />
                  )}
                  {active && (
                    <motion.div
                      layoutId="pulse-ring"
                      className="absolute inset-0 rounded-2xl border-2 border-[#D4A843]"
                      animate={{ opacity: [0.4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                </div>
                <span
                  className={`hidden sm:inline text-[10px] sm:text-xs font-semibold tracking-wide uppercase transition-colors duration-300 ${
                    active ? 'text-[#D4A843]' : done ? 'text-[#8B0000]' : 'text-[var(--etb-text-muted)]'
                  }`}
                >
                  {s.label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="relative min-h-[300px] md:min-h-[420px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="glass-panel p-6 md:p-8 lg:p-10"
            >
              <StepComponent onNext={next} onPrev={prev} isFirst={isFirst} isLast={isLast} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-2 sm:gap-4 mt-8">
          <button
            onClick={prev}
            disabled={isFirst}
            className={`btn-etb-secondary text-xs sm:text-sm px-4 sm:px-6 ${isFirst ? 'opacity-30 cursor-not-allowed' : ''}`}
          >
            <i className="fas fa-arrow-left" /> <span className="hidden sm:inline">Anterior</span>
          </button>

          <div className="flex gap-1.5">
            {STEPS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                  i === clampedIdx
                    ? 'bg-[#D4A843] w-4 sm:w-6'
                    : i < clampedIdx
                    ? 'bg-[#8B0000]'
                    : 'bg-[var(--etb-border-light)]'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={isLast}
            className={`btn-etb-primary text-xs sm:text-sm px-4 sm:px-6 ${isLast ? 'opacity-30 cursor-not-allowed' : ''}`}
          >
            <span className="hidden sm:inline">Siguiente</span> <i className="fas fa-arrow-right" />
          </button>
        </div>
      </div>
    </section>
  );
}
