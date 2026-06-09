import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ofertas,
  escaleraFijo,
  escaleraTraslado,
  escaleraTrasladoRegla,
  escaleraFijoMovil,
  escaleraMovil,
  beneficiosScripts,
} from '../../data/ofertas';
import { STEP_MAP } from '../../data/guiones';

const guiones = STEP_MAP[4];

const TABS = [
  { id: 'beneficios', label: 'Beneficios', icon: 'fa-star' },
  { id: 'fijo', label: 'Fijo', icon: 'fa-house-chimney' },
  { id: 'traslado', label: 'Traslado', icon: 'fa-truck' },
  { id: 'fijo-movil', label: 'Fijo+Móvil', icon: 'fa-mobile-screen' },
  { id: 'movil', label: 'Móvil', icon: 'fa-phone' },
];

function TagBadge({ text, small }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border font-medium ${
        small ? 'px-1.5 py-0.5 text-[9px]' : 'px-2 py-0.5 text-[10px]'
      }`}
      style={{
        background: `${getTagColor(text)}15`,
        borderColor: `${getTagColor(text)}30`,
        color: getTagColor(text),
      }}
    >
      <i className={`fas fa-circle ${small ? 'text-[4px]' : 'text-[5px]'}`} style={{ color: getTagColor(text) }} />
      {text}
    </span>
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

function TooltipWrapper({ text, children }) {
  return (
    <span className="relative group">
      {children}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-lg bg-[#1A1A1A] text-white text-[10px] leading-tight whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 shadow-xl border border-white/10">
        {text}
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#1A1A1A]" />
      </div>
    </span>
  );
}

function BenefitScriptsSection() {
  return (
    <div className="space-y-4">
      <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#D4A843]">
        <i className="fas fa-quote-right" /> Guiones para Resaltar Beneficios
      </h4>
      <div className="space-y-3">
        {beneficiosScripts.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl border border-[var(--etb-border)] bg-[var(--etb-bg-inner)] overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--etb-border)]" style={{ background: '#D4A84308' }}>
              <i className="fas fa-quote-left text-sm text-[#D4A843]" />
              <span className="text-sm font-semibold text-[var(--etb-text-heading)]">{s.title}</span>
              <span className="ml-auto text-[9px] px-2 py-0.5 rounded-full bg-[#D4A843]/20 text-[#D4A843] border border-[#D4A843]/30">
                Ejemplo {i + 1}
              </span>
            </div>
            <div className="p-4">
              <p className="text-sm text-[var(--etb-text-tertiary)] italic leading-relaxed">
                {s.text}
              </p>
              {s.nota && (
                <div className="mt-2 flex items-start gap-1.5 text-[10px] text-[#f59e0b]">
                  <i className="fas fa-circle-exclamation mt-0.5" />
                  <span>{s.nota}</span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function EscaleraFijoTab({ clienteAntiguedad }) {
  return (
    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
      <div className="space-y-4">
        <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#D4A843]">
          <i className="fas fa-ladder" /> Escalera Fijo — Hogares y MiPymes
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
                <span className="w-6 h-6 rounded-full bg-[#8B0000] text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                  {n.nivel}
                </span>
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
          <i className="fa-percent" /> Descuentos Servicio Principal
        </h4>
        <div className="space-y-2">
          {escaleraFijo.descuentos.map((d, i) => {
            const cumple = clienteAntiguedad >= d.antiguedadMinima;
            return (
              <motion.div
                key={d.nivel}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className={`p-3.5 rounded-xl border transition-all duration-200 ${
                  cumple
                    ? 'bg-[var(--etb-bg-inner)] border-[var(--etb-border)]'
                    : 'bg-[var(--etb-bg-inner)] border-dashed border-red-500/30 opacity-50'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-[var(--etb-text-heading)]">{d.nivel}</span>
                    <span
                      className="text-[9px] px-1.5 py-0.5 rounded-full font-semibold"
                      style={{
                        background: cumple ? `${d.color}20` : '#ef444420',
                        color: cumple ? d.color : '#ef4444',
                        border: `1px solid ${cumple ? d.color + '40' : '#ef444440'}`,
                      }}
                    >
                      {cumple ? `✓ ${d.antiguedadMinima} meses` : `✗ mínimo ${d.antiguedadMinima} meses`}
                    </span>
                  </div>
                  <span className="text-base font-extrabold" style={{ color: cumple ? d.color : '#888' }}>{d.discount}</span>
                </div>
                <p className="text-xs text-[var(--etb-text-secondary)]">{d.desc} — {d.months} meses</p>
              </motion.div>
            );
          })}
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

        <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#8B0000]/10 to-[#B22222]/10 border border-[#8B0000]/30">
          <p className="text-xs text-[#D4A843] font-semibold uppercase tracking-wider mb-1">
            <i className="fas fa-bullseye mr-1" /> Estrategia
          </p>
          <p className="text-xs text-[var(--etb-text-tertiary)]">
            Inicia resaltando beneficios. Si el cliente persiste, escala: solución directa → mejora sin descuento → descuento XS → M → XL.
          </p>
        </div>
      </div>
    </div>
  );
}

function EscaleraTrasladoTab() {
  return (
    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
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
                <span
                  className="w-6 h-6 rounded-full text-white text-[10px] font-bold flex items-center justify-center shrink-0"
                  style={{ background: e.color }}
                >
                  {e.nivel}
                </span>
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
          <p className="text-sm text-[var(--etb-text-tertiary)]">
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

function EscaleraFijoMovilTab() {
  return (
    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
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
          <i className="fa-database" /> Aumento de GB
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

        <div className="p-4 rounded-xl bg-[#D4A843]/5 border border-[#D4A843]/20">
          <p className="text-xs text-[#D4A843] font-semibold uppercase tracking-wider mb-1">
            <i className="fas fa-lightbulb mr-1" /> Estrategia
          </p>
          <p className="text-sm text-[var(--etb-text-tertiary)]">
            Evalúa el perfil del cliente: si requiere más velocidad para trabajo/entretenimiento, prioriza +Velocidad. Si consume datos móviles, prioriza +GB. Nunca ambas.
          </p>
        </div>
      </div>
    </div>
  );
}

function EscaleraMovilTab() {
  return (
    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
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
                <span className="w-6 h-6 rounded-full bg-[#8B0000] text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                  {p.paso}
                </span>
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
              <i className={`fas fa-circle mt-0.5 text-[6px]`} style={{ color: getPolColor(p.type) }} />
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
            <i className="fas fa-star mr-1" /> Estrategia móvil
          </p>
          <p className="text-sm text-[var(--etb-text-tertiary)]">
            Siempre iniciar resaltando los beneficios del plan actual. Si el cliente quiere retirarse, ofrecer oferta captura. Como última instancia, aplicar plan de retención.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function StepSolve() {
  const [activeTab, setActiveTab] = useState('beneficios');
  const [clienteAntiguedad, setClienteAntiguedad] = useState(6);
  const OFFER_HIGHLIGHTS = ofertas.slice(0, 6);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-[#8B0000] to-[#1A1A1A] flex items-center justify-center shadow-lg shadow-[#8B0000]/30 shrink-0">
          <i className="fas fa-gear text-white text-xl md:text-2xl" />
        </div>
        <div>
          <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-[#D4A843]">
            Paso 4 de 5
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-[var(--etb-text-heading)]">Solucionar Personalizado</h3>
          <p className="text-[var(--etb-text-secondary)] text-xs md:text-sm">
            Ofertas y soluciones a medida para cada perfil
          </p>
        </div>
      </div>

      <div className="glass-panel p-4 md:p-5 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex items-center gap-2 shrink-0">
            <i className="fas fa-user text-[#D4A843] text-sm" />
            <span className="text-xs font-semibold text-[var(--etb-text-heading)]">Simular Cliente</span>
          </div>
          <div className="flex items-center gap-3 flex-1">
            <label className="text-xs text-[var(--etb-text-secondary)] whitespace-nowrap">
              Antigüedad:
            </label>
            <input
              type="range"
              min="0"
              max="60"
              value={clienteAntiguedad}
              onChange={(e) => setClienteAntiguedad(Number(e.target.value))}
              className="flex-1 h-1.5 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #D4A843 ${(clienteAntiguedad / 60) * 100}%, var(--etb-border) ${(clienteAntiguedad / 60) * 100}%)`,
              }}
            />
            <span className="text-sm font-bold text-[#D4A843] min-w-[3rem] text-right">
              {clienteAntiguedad} meses
            </span>
          </div>
          <div className="flex flex-wrap gap-1">
            <span
              className={`text-[9px] px-2 py-0.5 rounded-full font-semibold ${
                clienteAntiguedad >= 10 ? 'bg-green-500/15 text-green-400 border border-green-500/30' : 'bg-red-500/15 text-red-400 border border-red-500/30'
              }`}
            >
              XS {clienteAntiguedad >= 10 ? '✓' : '✗'}
            </span>
            <span
              className={`text-[9px] px-2 py-0.5 rounded-full font-semibold ${
                clienteAntiguedad >= 10 ? 'bg-green-500/15 text-green-400 border border-green-500/30' : 'bg-red-500/15 text-red-400 border border-red-500/30'
              }`}
            >
              M {clienteAntiguedad >= 10 ? '✓' : '✗'}
            </span>
            <span
              className={`text-[9px] px-2 py-0.5 rounded-full font-semibold ${
                clienteAntiguedad >= 12 ? 'bg-green-500/15 text-green-400 border border-green-500/30' : 'bg-red-500/15 text-red-400 border border-red-500/30'
              }`}
            >
              XL {clienteAntiguedad >= 12 ? '✓' : '✗'}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-6">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold tracking-wide uppercase transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-[#8B0000] text-white shadow-md'
                : 'bg-[var(--etb-bg-inner)] text-[var(--etb-text-muted)] border border-[var(--etb-border)] hover:border-[#8B0000]/40 hover:text-[var(--etb-text-heading)]'
            }`}
          >
            <i className={`fas ${tab.icon} text-[10px]`} />
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === 'beneficios' && (
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-4">
                <BenefitScriptsSection />
              </div>
              <div className="space-y-4">
                <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#D4A843]">
                  <i className="fas fa-gift" /> Ofertas Destacadas
                </h4>
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  {OFFER_HIGHLIGHTS.map((o, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="p-3 rounded-xl bg-[var(--etb-bg-inner)] border border-[var(--etb-border)]"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <i className={`fas ${o.icon} text-[#D4A843] text-sm`} />
                        <span className="text-xs font-semibold text-[var(--etb-text-heading)]">{o.title}</span>
                      </div>
                      <p className="text-[10px] text-[var(--etb-text-secondary)] leading-relaxed">{o.desc}</p>
                    </motion.div>
                  ))}
                </div>

                <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#D4A843]">
                  <i className="fas fa-quote-right" /> Guiones Operativos
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
          )}
          {activeTab === 'fijo' && <EscaleraFijoTab clienteAntiguedad={clienteAntiguedad} />}
          {activeTab === 'traslado' && <EscaleraTrasladoTab />}
          {activeTab === 'fijo-movil' && <EscaleraFijoMovilTab />}
          {activeTab === 'movil' && <EscaleraMovilTab />}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

function getPolColor(type) {
  const map = { info: '#3b82f6', success: '#10b981', warning: '#f59e0b', error: '#ef4444' };
  return map[type] || '#8888a0';
}
