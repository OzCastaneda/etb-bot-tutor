import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motivos } from '../data/motivos';
import { ALL_GUIONES } from '../data/guiones';

const ICON_MAP = {
  economicos: 'fa-coins',
  tecnicos: 'fa-wrench',
  traslado: 'fa-truck',
  viaje: 'fa-plane',
  competencia: 'fa-store',
  personales: 'fa-user',
};

const STEP_LABELS = {
  1: '1 — Conectar y Escuchar',
  2: '2 — Entender con Empatía',
  3: '3 — Validar el Motivo',
  4: '4 — Solucionar Personalizado',
  5: '5 — Retener con Fidelidad',
};

const LABEL_ICONS = {
  1: 'fa-headset',
  2: 'fa-brain',
  3: 'fa-check-double',
  4: 'fa-gear',
  5: 'fa-handshake',
};

export default function Scripts() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const handleClick = (e) => {
      const header = e.target.closest('[data-accordion-id]');
      if (header) toggleAccordion(header);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    const motivo = searchParams.get('motivo');
    if (!motivo) return;
    const timer = setTimeout(() => {
      const header = document.querySelector(`[data-accordion-id="${motivo}"]`);
      if (header && !header.classList.contains('active')) {
        header.scrollIntoView({ behavior: 'smooth', block: 'center' });
        toggleAccordion(header);
      }
    }, 350);
    return () => clearTimeout(timer);
  }, [searchParams]);

  const stepGuiones = {};
  ALL_GUIONES.forEach((g) => {
    if (!stepGuiones[g.step]) stepGuiones[g.step] = [];
    stepGuiones[g.step].push(g);
  });

  return (
    <section id="guiones" className="relative py-16 md:py-24 bg-[var(--etb-bg-page)]">
      <div className="absolute inset-0 bg-neural opacity-20" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8B0000]/10 border border-[#8B0000]/30 text-[#D4A843] text-sm font-semibold tracking-wider uppercase mb-4">
            <i className="fas fa-comments" />
            Biblioteca de Guiones
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--etb-text-heading)]">
            Guiones Sugeridos
          </h2>
          <p className="mt-3 text-[var(--etb-text-secondary)] max-w-lg mx-auto">
            Frases de transición y guiones recomendados para cada motivo de retiro.
          </p>
        </div>

        <div className="space-y-3 mb-12">
          {motivos.map((m) => (
            <div
              key={m.id}
              className="rounded-2xl border border-[var(--etb-border)] bg-[var(--etb-bg-card)] overflow-hidden transition-shadow duration-300 hover:shadow-lg hover:shadow-[#8B0000]/10"
            >
              <button
                className="accordion-header w-full px-4 md:px-6 py-3 md:py-4 flex items-center gap-3 md:gap-4 text-left bg-transparent hover:bg-[var(--etb-bg-section)] transition-colors"
                data-accordion-id={m.id}
                aria-expanded="false"
              >
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm shrink-0"
                  style={{ background: m.color }}
                >
                  <i className={`fas ${ICON_MAP[m.id] || 'fa-question'}`} />
                </span>
                <span className="flex-1 font-semibold text-[var(--etb-text-heading)] text-sm">{m.title}</span>
                <i className="fas fa-chevron-down text-[var(--etb-text-muted)] transition-transform duration-300 accordion-chevron" />
              </button>

              <div
                className="accordion-body overflow-hidden transition-all duration-400"
                style={{ maxHeight: 0 }}
              >
                <div className="px-4 md:px-6 pb-4 md:pb-6 pt-2 space-y-4">
                  <div>
                    <h5 className="text-xs font-semibold uppercase tracking-wider text-[#D4A843] mb-2 flex items-center gap-2">
                      <i className="fas fa-question-circle" /> Preguntas clave
                    </h5>
                    <ul className="space-y-1.5">
                      {m.questions.map((q, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[var(--etb-text-tertiary)]">
                          <span className="text-[#D4A843] mt-0.5">•</span>
                          {q}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-xs font-semibold uppercase tracking-wider text-[#D4A843] mb-2 flex items-center gap-2">
                      <i className="fas fa-gift" /> Ofertas sugeridas
                    </h5>
                    <ul className="space-y-1.5">
                      {m.offers.map((o, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[var(--etb-text-tertiary)]">
                          <span className="text-[#8B0000] mt-0.5">•</span>
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-xs font-semibold uppercase tracking-wider text-[#D4A843] mb-3 flex items-center gap-2">
                      <i className="fas fa-comments" /> Guiones sugeridos
                    </h5>
                    <div className="space-y-2">
                      {m.scripts.map((s, i) => (
                        <div
                          key={i}
                          className="p-3.5 rounded-xl bg-[var(--etb-bg-inner)] border border-[var(--etb-border)] italic text-sm text-[var(--etb-text-tertiary)] leading-relaxed"
                        >
                          <i className="fas fa-quote-left mr-2 opacity-50" style={{ color: m.color }} />
                          {s}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-[var(--etb-border)]">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B22222]/10 border border-[#B22222]/30 text-[#D4A843] text-sm font-semibold tracking-wider uppercase mb-4">
              <i className="fas fa-file-lines" />
              Guiones — Gestiones Especiales
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--etb-text-heading)]">
              Protocolo Completo de Atención
            </h2>
            <p className="mt-2 text-[var(--etb-text-secondary)] text-sm">
              Guiones oficiales del área de gestiones especiales ETB, organizados por fase del flujo de retención.
            </p>
          </div>

          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((step) => {
              const items = stepGuiones[step] || [];
              if (!items.length) return null;
              return (
                <div
                  key={step}
                  className="rounded-2xl border border-[var(--etb-border)] bg-[var(--etb-bg-card)] overflow-hidden transition-shadow duration-300 hover:shadow-lg hover:shadow-[#B22222]/10"
                >
                  <button
                    className="accordion-header w-full px-4 md:px-6 py-3 md:py-4 flex items-center gap-3 md:gap-4 text-left bg-transparent hover:bg-[var(--etb-bg-section)] transition-colors"
                    data-accordion-id={`step-${step}`}
                    aria-expanded="false"
                  >
                    <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8B0000] to-[#B22222] flex items-center justify-center text-white text-sm shrink-0">
                      <i className={`fas ${LABEL_ICONS[step]}`} />
                    </span>
                    <span className="flex-1 font-semibold text-[var(--etb-text-heading)] text-sm">
                      {STEP_LABELS[step]}
                    </span>
                    <i className="fas fa-chevron-down text-[var(--etb-text-muted)] transition-transform duration-300 accordion-chevron" />
                  </button>

                  <div
                    className="accordion-body overflow-hidden transition-all duration-400"
                    style={{ maxHeight: 0 }}
                  >
                    <div className="px-4 md:px-6 pb-4 md:pb-6 pt-2 space-y-4">
                      {items.map((g) => (
                        <div
                          key={g.id}
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
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function toggleAccordion(header) {
  const isActive = header.classList.contains('active');

  document.querySelectorAll('.accordion-header.active').forEach((h) => {
    if (h !== header) {
      h.classList.remove('active');
      h.setAttribute('aria-expanded', 'false');
      h.nextElementSibling.style.maxHeight = '0';
    }
  });

  const chevron = header.querySelector('.accordion-chevron');
  if (isActive) {
    header.classList.remove('active');
    header.setAttribute('aria-expanded', 'false');
    header.nextElementSibling.style.maxHeight = '0';
    if (chevron) chevron.style.transform = 'rotate(0deg)';
  } else {
    header.classList.add('active');
    header.setAttribute('aria-expanded', 'true');
    const body = header.nextElementSibling;
    body.style.maxHeight = body.scrollHeight + 'px';
    if (chevron) chevron.style.transform = 'rotate(180deg)';
  }
}
