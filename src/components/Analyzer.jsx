import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { motivos } from '../data/motivos';
import { normalize } from '../utils/normalize';

function getMotivo(texto) {
  const t = normalize(texto);
  for (const m of motivos) {
    for (const kw of m.keywords) {
      if (t.includes(normalize(kw))) return m;
    }
  }
  return null;
}

export default function Analyzer() {
  const navigate = useNavigate();
  const [texto, setTexto] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState('');

  const analizar = useCallback(() => {
    const t = texto.trim();
    if (!t) {
      setError('Por favor escribe una frase para analizar.');
      setResultado(null);
      return;
    }

    const motivo = getMotivo(t);
    if (!motivo) {
      setError('No se detectó un motivo claro. Intenta con palabras como: precio, fallas, mudanza, viaje, competencia.');
      setResultado(null);
      return;
    }

    setError('');
    setResultado(motivo);
  }, [texto]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      analizar();
    }
  };

  return (
    <section id="analisis" className="relative py-16 md:py-24 bg-[var(--etb-bg-section)]">
      <div className="absolute inset-0 bg-neural opacity-20" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8B0000]/10 border border-[#8B0000]/30 text-[#D4A843] text-sm font-semibold tracking-wider uppercase mb-4">
            <i className="fas fa-microphone" />
            Analizador Inteligente
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--etb-text-heading)]">
            Analizador de Conversaciones
          </h2>
          <p className="mt-3 text-[var(--etb-text-secondary)] max-w-lg mx-auto">
            Escribe la frase del cliente para detectar automáticamente el motivo
            y obtener sugerencias personalizadas.
          </p>
        </div>

        <div className="glass-panel p-6 sm:p-8 max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={texto}
              onChange={(e) => { setTexto(e.target.value); setError(''); }}
              onKeyDown={handleKeyDown}
              placeholder='Ej: "El servicio está muy costoso"'
              className="flex-1 px-5 py-3.5 rounded-xl bg-[var(--etb-bg-input)] border border-[var(--etb-border-light)] text-[var(--etb-text-primary)] placeholder-[var(--etb-text-muted)] focus:outline-none focus:border-[#8B0000] focus:ring-2 focus:ring-[#8B0000]/20 transition-all text-sm"
            />
            <button onClick={analizar} className="btn-etb-primary justify-center">
              <i className="fas fa-search" /> Analizar
            </button>
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-sm text-[#ef4444] flex items-center gap-2"
            >
              <i className="fas fa-exclamation-circle" />
              {error}
            </motion.p>
          )}
        </div>

        <AnimatePresence mode="wait">
          {resultado && (
            <motion.div
              key={resultado.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="max-w-2xl mx-auto mt-8"
            >
              <div className="glass-panel overflow-hidden">
                <div
                  className="px-4 md:px-6 py-4 md:py-5 flex items-center gap-3 md:gap-4"
                  style={{ background: resultado.color }}
                >
                  <i className={`fas ${resultado.icon} text-white text-2xl`} />
                  <h3 className="text-xl font-bold text-white">{resultado.title}</h3>
                </div>

                  <div className="p-4 md:p-6 space-y-4 md:space-y-6">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D4A843] mb-3 flex items-center gap-2">
                      <i className="fas fa-question-circle" /> Preguntas clave
                    </h4>
                    <ul className="space-y-2">
                      {resultado.questions.map((q, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[var(--etb-text-tertiary)]">
                          <span className="text-[#D4A843] mt-0.5">•</span>
                          {q}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D4A843] mb-3 flex items-center gap-2">
                      <i className="fas fa-gift" /> Ofertas sugeridas
                    </h4>
                    <ul className="space-y-2">
                      {resultado.offers.map((o, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[var(--etb-text-tertiary)]">
                          <span className="text-[#8B0000] mt-0.5">•</span>
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-4 md:px-6 py-4 border-t border-[var(--etb-border)] text-center">
                  <button
                    onClick={() => navigate(`/guiones?motivo=${resultado.id}`)}
                    className="btn-etb-secondary"
                  >
                    <i className="fas fa-comments" /> Ver guiones sugeridos
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
