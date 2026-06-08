import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { offerCategories, generalidades, politicasGenerales } from '../data/ofertas';
import { cardColors } from '../data/colors';

const TAG_STYLES = {
  info: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  success: 'bg-green-500/10 text-green-400 border-green-500/30',
  warning: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
  error: 'bg-red-500/10 text-red-400 border-red-500/30',
};

function PolicyTag({ text, type }) {
  return (
    <li className={`flex items-start gap-2 px-3 py-2 rounded-lg text-xs border ${TAG_STYLES[type] || TAG_STYLES.info}`}>
      <i className={`fas fa-${type === 'error' ? 'ban' : type === 'warning' ? 'exclamation-triangle' : type === 'success' ? 'check-circle' : 'info-circle'} mt-0.5`} />
      <span>{text}</span>
    </li>
  );
}

export default function Offers() {
  const [activeTab, setActiveTab] = useState(offerCategories[0]?.id || null);

  return (
    <section id="ofertas" className="relative py-16 md:py-24 bg-[var(--etb-bg-section)]">
      <div className="absolute inset-0 bg-neural opacity-20" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8B0000]/10 border border-[#8B0000]/30 text-[#D4A843] text-sm font-semibold tracking-wider uppercase mb-4">
            <i className="fas fa-tag" />
            Catálogo Comercial
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--etb-text-heading)]">
            Ofertas Vigentes
          </h2>
          <p className="mt-3 text-[var(--etb-text-secondary)] max-w-2xl mx-auto">
            Promociones, descuentos y beneficios disponibles para estrategias de retención y recuperación.
            Vigencia hasta el 31 de julio de 2026.
          </p>
        </div>

        <div className="glass-panel p-6 md:p-8 mb-8">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#D4A843] mb-4 flex items-center gap-2">
            <i className="fas fa-list-check" /> Generalidades de Retención
          </h3>
          <ul className="space-y-2 mb-6">
            {generalidades.map((g, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[var(--etb-text-tertiary)]">
                <span className="text-[#D4A843] mt-0.5">•</span>
                {g}
              </li>
            ))}
          </ul>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--etb-text-secondary)] mb-3">
            Políticas generales
          </h4>
          <ul className="space-y-1.5">
            {politicasGenerales.map((p, i) => (
              <PolicyTag key={i} text={p.text} type={p.type} />
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {offerCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === cat.id
                  ? 'bg-[#8B0000] text-white shadow-lg shadow-[#8B0000]/25'
                  : 'bg-[var(--etb-bg-card)] border border-[var(--etb-border)] text-[var(--etb-text-secondary)] hover:border-[#8B0000]/30 hover:text-[var(--etb-text-heading)]'
              }`}
            >
              <i className={`fas ${cat.icon} ${activeTab === cat.id ? 'text-white' : 'text-[#D4A843]'}`} />
              {cat.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {offerCategories
            .filter((cat) => cat.id === activeTab)
            .map((cat) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25 }}
              >
                <p className="text-sm text-[var(--etb-text-secondary)] mb-6">{cat.desc}</p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {cat.offers.map((offer, i) => (
                    <motion.div
                      key={offer.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className={`card-etb group relative flex flex-col ${
                        offer.blocked ? 'opacity-60' : ''
                      }`}
                    >
                      {offer.blocked && (
                        <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-red-500/20 border border-red-500/40 text-[10px] font-bold text-red-400 uppercase tracking-wider">
                          Bloqueado
                        </div>
                      )}

                      <div className="flex items-start justify-between mb-3">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center text-white text-base transition-transform group-hover:scale-110"
                          style={{ background: cardColors[(i + 3) % cardColors.length] }}
                        >
                          <i className={`fas ${offer.icon}`} />
                        </div>
                        {offer.badge && (
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                            offer.blocked
                              ? 'bg-red-500/20 text-red-400'
                              : 'bg-[#D4A843]/15 text-[#D4A843]'
                          }`}>
                            {offer.badge}
                          </span>
                        )}
                      </div>

                      <h3 className="text-sm font-semibold text-[var(--etb-text-heading)] mb-1">
                        {offer.title}
                      </h3>

                      <p className="text-lg font-bold text-[#D4A843] mb-1">{offer.price}</p>

                      <p className="text-xs text-[var(--etb-text-secondary)] leading-relaxed mb-3 flex-1">
                        {offer.desc}
                      </p>

                      {offer.tags && offer.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-[var(--etb-border)]">
                          {offer.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--etb-bg-badge)] text-[var(--etb-text-muted)]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
