import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  offerCategories,
  generalidades,
  politicasGenerales,
  beneficiosScripts,
  escaleraFijo,
  escaleraTraslado,
  escaleraTrasladoRegla,
  escaleraFijoMovil,
  escaleraMovil,
} from '../data/ofertas';
import { cardColors } from '../data/colors';

const TAG_STYLES = {
  info: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  success: 'bg-green-500/10 text-green-400 border-green-500/30',
  warning: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
  error: 'bg-red-500/10 text-red-400 border-red-500/30',
};

const MAIN_TABS = [
  { id: 'catalogo', label: 'Catálogo', icon: 'fa-tag' },
  { id: 'fijo', label: 'Escalera Fijo', icon: 'fa-wrench' },
  { id: 'traslado', label: 'Traslado', icon: 'fa-truck' },
  { id: 'fijo-movil', label: 'Fijo+Móvil', icon: 'fa-mobile-screen-button' },
  { id: 'movil', label: 'Móvil', icon: 'fa-phone' },
];

function PolicyTag({ text, type }) {
  return (
    <li className={`flex items-start gap-2 px-3 py-2 rounded-lg text-xs border ${TAG_STYLES[type] || TAG_STYLES.info}`}>
      <i className={`fas fa-${type === 'error' ? 'ban' : type === 'warning' ? 'exclamation-triangle' : type === 'success' ? 'check-circle' : 'info-circle'} mt-0.5`} />
      <span>{text}</span>
    </li>
  );
}

function getTagColor(text) {
  const t = text.toLowerCase();
  if (t.includes('no acumul') || t.includes('no disponible') || t.includes('bloqueado') || t.includes('mora')) return '#ef4444';
  if (t.includes('antigüedad') || t.includes('aplica') || t.includes('vigencia') || t.includes('mínima')) return '#3b82f6';
  if (t.includes('sin mora') || t.includes('al día')) return '#10b981';
  if (t.includes('evaluar') || t.includes('permanencia') || t.includes('penaliz')) return '#f59e0b';
  return '#8888a0';
}

function TooltipBadge({ text, children }) {
  return (
    <span className="relative group cursor-help">
      {children}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-lg bg-[#1A1A1A] text-white text-[10px] leading-tight whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 shadow-xl border border-white/10">
        {text}
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#1A1A1A]" />
      </div>
    </span>
  );
}

function ConditionTag({ text }) {
  const color = getTagColor(text);
  return (
    <TooltipBadge text={text}>
      <span
        className="text-[10px] px-2 py-0.5 rounded-full border font-medium inline-block"
        style={{
          background: `${color}15`,
          borderColor: `${color}30`,
          color,
        }}
      >
        {text}
      </span>
    </TooltipBadge>
  );
}

function getPolColor(type) {
  const map = { info: '#3b82f6', success: '#10b981', warning: '#f59e0b', error: '#ef4444' };
  return map[type] || '#8888a0';
}

function CatalogoTab() {
  const [subTab, setSubTab] = useState(offerCategories[0]?.id || null);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {offerCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSubTab(cat.id)}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
              subTab === cat.id
                ? 'bg-[#8B0000] text-white shadow-lg shadow-[#8B0000]/25'
                : 'bg-[var(--etb-bg-card)] border border-[var(--etb-border)] text-[var(--etb-text-secondary)] hover:border-[#8B0000]/30 hover:text-[var(--etb-text-heading)]'
            }`}
          >
            <i className={`fas ${cat.icon} ${subTab === cat.id ? 'text-white' : 'text-[#D4A843]'}`} />
            {cat.title}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {offerCategories
          .filter((cat) => cat.id === subTab)
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

                    <h3 className="text-sm font-semibold text-[var(--etb-text-heading)] mb-1">{offer.title}</h3>
                    <p className="text-lg font-bold text-[#D4A843] mb-1">{offer.price}</p>
                    <p className="text-xs text-[var(--etb-text-secondary)] leading-relaxed mb-3 flex-1">{offer.desc}</p>

                    {offer.tags && offer.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-[var(--etb-border)]">
                        {offer.tags.map((tag) => (
                          <ConditionTag key={tag} text={tag} />
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
  );
}

function EscaleraFijoTab() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#D4A843]">
          <i className="fas fa-ladder" /> Niveles
        </h4>
        <div className="space-y-2">
          {escaleraFijo.niveles.map((n, i) => (
            <motion.div
              key={n.nivel}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="p-3.5 rounded-xl bg-[var(--etb-bg-inner)] border border-[var(--etb-border)]"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-6 h-6 rounded-full bg-[#8B0000] text-white text-[10px] font-bold flex items-center justify-center shrink-0">{n.nivel}</span>
                <span className="text-sm font-semibold text-[var(--etb-text-heading)]">{n.label}</span>
              </div>
              <p className="text-xs text-[var(--etb-text-secondary)] leading-relaxed ml-8">{n.desc}</p>
            </motion.div>
          ))}
        </div>

        <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#D4A843] mt-4">
          <i className="fas fa-wand-magic-sparkles" /> Mejoras sin Descuento Directo
        </h4>
        <div className="space-y-2">
          {escaleraFijo.mejorasSinDescuento.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="p-3.5 rounded-xl bg-[var(--etb-bg-inner)] border border-[var(--etb-border)]"
            >
              <div className="flex items-center gap-2 mb-1">
                <i className={`fas ${m.icon} text-sm`} style={{ color: m.color }} />
                <span className="text-sm font-semibold text-[var(--etb-text-heading)]">{m.label}</span>
              </div>
              <p className="text-xs text-[var(--etb-text-secondary)] leading-relaxed ml-6">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#D4A843]">
          <i className="fas fa-percent" /> Descuentos Servicio Principal
        </h4>
        <div className="space-y-2">
          {escaleraFijo.descuentos.map((d, i) => (
            <motion.div
              key={d.nivel}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center justify-between p-3.5 rounded-xl bg-[var(--etb-bg-inner)] border border-[var(--etb-border)]"
            >
              <div>
                <span className="text-sm font-bold text-[var(--etb-text-heading)]">{d.nivel}</span>
                <p className="text-xs text-[var(--etb-text-secondary)]">{d.desc} — {d.months} meses</p>
              </div>
              <span className="text-lg font-extrabold" style={{ color: d.color }}>{d.discount}</span>
            </motion.div>
          ))}
        </div>

        <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#D4A843] mt-4">
          <i className="fas fa-basket-shopping" /> Oferta Básica
        </h4>
        <div className="overflow-hidden rounded-xl border border-[var(--etb-border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-[var(--etb-bg-inner)]">
                <th className="px-3 py-2 text-left font-semibold text-[var(--etb-text-heading)]">Plan</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--etb-text-heading)]">Hogares</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--etb-text-heading)]">MiPymes</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--etb-text-heading)]">Vigencia</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--etb-border)]">
              {escaleraFijo.ofertaBasica.map((row) => (
                <tr key={row.plan} className="bg-[var(--etb-bg-card)]">
                  <td className="px-3 py-2 font-medium text-[var(--etb-text-heading)]">{row.plan}</td>
                  <td className="px-3 py-2 text-[var(--etb-text-primary)]">{row.hogares}</td>
                  <td className="px-3 py-2 text-[var(--etb-text-primary)]">{row.mipymes}</td>
                  <td className="px-3 py-2 text-[var(--etb-text-secondary)]">{row.vigencia}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-gradient-to-r from-[#8B0000]/10 to-[#B22222]/10 border border-[#8B0000]/30">
          <p className="text-xs text-[#D4A843] font-semibold uppercase tracking-wider mb-1">
            <i className="fas fa-bullseye mr-1" /> Estrategia
          </p>
          <p className="text-sm text-[var(--etb-text-tertiary)]">
            Inicia resaltando beneficios → solución directa → mejora sin descuento → descuento XS → M → XL.
          </p>
        </div>
      </div>
    </div>
  );
}

function TrasladoTab() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#D4A843]">
          <i className="fas fa-truck" /> Escalera Traslado
        </h4>
        <div className="space-y-2">
          {escaleraTraslado.map((e, i) => (
            <motion.div
              key={e.nivel}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07 }}
              className="p-3.5 rounded-xl bg-[var(--etb-bg-inner)] border border-[var(--etb-border)]"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-6 h-6 rounded-full text-white text-[10px] font-bold flex items-center justify-center shrink-0" style={{ background: e.color }}>{e.nivel}</span>
                <span className="text-sm font-semibold text-[var(--etb-text-heading)]">{e.label}</span>
              </div>
              <p className="text-xs text-[var(--etb-text-secondary)] leading-relaxed ml-8">{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#D4A843]">
          <i className="fas fa-check-circle" /> Regla
        </h4>
        <div className="p-4 rounded-xl bg-[#D4A843]/5 border border-[#D4A843]/20">
          <p className="text-sm text-[var(--etb-text-tertiary)] leading-relaxed">
            <i className="fas fa-quote-left text-[#D4A843] mr-1" />
            {escaleraTrasladoRegla}
          </p>
        </div>
        <div className="p-4 rounded-xl bg-gradient-to-r from-[#10b981]/10 to-[#3b82f6]/10 border border-[#10b981]/30">
          <p className="text-xs text-[#10b981] font-semibold uppercase tracking-wider mb-1">
            <i className="fas fa-lightbulb mr-1" /> Recomendación
          </p>
          <p className="text-sm text-[var(--etb-text-tertiary)]">
            El traslado es la opción con mayor probabilidad de retención. Siempre ofrecerlo como primera alternativa antes de escalar a descuentos.
          </p>
        </div>
      </div>
    </div>
  );
}

function FijoMovilTab() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#D4A843]">
          <i className="fas fa-gauge-high" /> Aumento de Velocidad
        </h4>
        <div className="space-y-2">
          {escaleraFijoMovil.velocidad.map((v, i) => (
            <motion.div
              key={v.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="p-3.5 rounded-xl bg-[var(--etb-bg-inner)] border border-[var(--etb-border)]"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: v.color }} />
                <span className="text-sm font-semibold text-[var(--etb-text-heading)]">{v.label}</span>
              </div>
              <p className="text-xs text-[var(--etb-text-secondary)] leading-relaxed ml-5">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#D4A843] mt-4">
          <i className="fas fa-arrow-down-wide-short" /> Downgrade u Optimización
        </h4>
        <div className="p-3.5 rounded-xl bg-[var(--etb-bg-inner)] border border-[var(--etb-border)]">
          <div className="flex items-center gap-2 mb-1">
            <i className={`fas ${escaleraFijoMovil.downgrade.icon} text-sm`} style={{ color: escaleraFijoMovil.downgrade.color }} />
            <span className="text-sm font-semibold text-[var(--etb-text-heading)]">{escaleraFijoMovil.downgrade.label}</span>
          </div>
          <p className="text-xs text-[var(--etb-text-secondary)] leading-relaxed ml-6">{escaleraFijoMovil.downgrade.desc}</p>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#D4A843]">
          <i className="fas fa-database" /> Aumento de GB
        </h4>
        <div className="space-y-2">
          {escaleraFijoMovil.gigas.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="p-3.5 rounded-xl bg-[var(--etb-bg-inner)] border border-[var(--etb-border)]"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: g.color }} />
                <span className="text-sm font-semibold text-[var(--etb-text-heading)]">{g.label}</span>
              </div>
              <p className="text-xs text-[var(--etb-text-secondary)] leading-relaxed ml-5">{g.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-[#ef4444]/10 border border-[#ef4444]/30">
          <p className="text-xs text-[#ef4444] font-semibold uppercase tracking-wider mb-1">
            <i className="fas fa-triangle-exclamation mr-1" /> Regla importante
          </p>
          <p className="text-sm text-[var(--etb-text-tertiary)]">
            {escaleraFijoMovil.regla}
          </p>
        </div>
      </div>
    </div>
  );
}

function MovilTab() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#D4A843]">
          <i className="fas fa-ladder" /> Escalera Móvil
        </h4>
        <div className="space-y-2">
          {escaleraMovil.pasos.map((p, i) => (
            <motion.div
              key={p.paso}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="p-3.5 rounded-xl bg-[var(--etb-bg-inner)] border border-[var(--etb-border)]"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-6 h-6 rounded-full bg-[#8B0000] text-white text-[10px] font-bold flex items-center justify-center shrink-0">{p.paso}</span>
                <span className="text-sm font-semibold text-[var(--etb-text-heading)]">{p.label}</span>
              </div>
              <p className="text-xs text-[var(--etb-text-secondary)] leading-relaxed ml-8">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#D4A843] mt-4">
          <i className="fas fa-triangle-exclamation" /> Condiciones
        </h4>
        <div className="space-y-1.5">
          {escaleraMovil.politicas.map((p, i) => (
            <div
              key={i}
              className="p-2.5 rounded-lg text-xs flex items-start gap-2"
              style={{
                background: `${getPolColor(p.type)}10`,
                border: `1px solid ${getPolColor(p.type)}30`,
                color: getPolColor(p.type),
              }}
            >
              <i className="fas fa-circle mt-0.5 text-[6px]" style={{ color: getPolColor(p.type) }} />
              {p.text}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#D4A843]">
          <i className="fas fa-table" /> Planes de Retención
        </h4>
        <div className="space-y-3">
          {escaleraMovil.planes.map((plan, i) => (
            <motion.div
              key={plan.gigas}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-[var(--etb-border)] bg-[var(--etb-bg-inner)] overflow-hidden"
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--etb-border)]" style={{ background: '#D4A84308' }}>
                <div className="flex items-center gap-2">
                  <i className="fas fa-sim-card text-sm text-[#D4A843]" />
                  <span className="text-sm font-bold text-[var(--etb-text-heading)]">{plan.gigas}</span>
                </div>
                <span className="text-base font-extrabold text-[#D4A843]">{plan.precio}</span>
              </div>
              <div className="px-4 py-3 flex flex-wrap gap-1.5">
                {plan.condiciones.map((c) => (
                  <span
                    key={c}
                    className="text-[9px] px-2 py-0.5 rounded-full border font-medium"
                    style={{
                      background: '#3b82f615',
                      borderColor: '#3b82f630',
                      color: '#3b82f6',
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-gradient-to-r from-[#10b981]/10 to-[#D4A843]/10 border border-[#10b981]/30">
          <p className="text-xs text-[#10b981] font-semibold uppercase tracking-wider mb-1">
            <i className="fas fa-star mr-1" /> Estrategia
          </p>
          <p className="text-sm text-[var(--etb-text-tertiary)]">
            Iniciar resaltando beneficios del plan actual. Si el cliente quiere retirarse, ofrecer oferta captura. Como última instancia, plan de retención.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Offers() {
  const [activeMain, setActiveMain] = useState('catalogo');

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
          {MAIN_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveMain(tab.id)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeMain === tab.id
                  ? 'bg-[#8B0000] text-white shadow-lg shadow-[#8B0000]/25'
                  : 'bg-[var(--etb-bg-card)] border border-[var(--etb-border)] text-[var(--etb-text-secondary)] hover:border-[#8B0000]/30 hover:text-[var(--etb-text-heading)]'
              }`}
            >
              <i className={`fas ${tab.icon} ${activeMain === tab.id ? 'text-white' : 'text-[#D4A843]'}`} />
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeMain}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {activeMain === 'catalogo' && <CatalogoTab />}
            {activeMain === 'fijo' && <EscaleraFijoTab />}
            {activeMain === 'traslado' && <TrasladoTab />}
            {activeMain === 'fijo-movil' && <FijoMovilTab />}
            {activeMain === 'movil' && <MovilTab />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
