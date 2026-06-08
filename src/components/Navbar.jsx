import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const NAV_LINKS = [
  { to: '/', label: 'Inicio', icon: 'fa-home', end: true },
  { to: '/bot-tutor', label: 'Bot Tutor', icon: 'fa-robot' },
  { to: '/analizador', label: 'Analizador', icon: 'fa-microphone' },
  { to: '/glosario', label: 'Glosario', icon: 'fa-book' },
  { to: '/ofertas', label: 'Ofertas', icon: 'fa-tag' },
  { to: '/guiones', label: 'Guiones', icon: 'fa-comments' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('etb-theme');
    return saved ? saved === 'dark' : true;
  });
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('etb-theme', next ? 'dark' : 'light');
  };

  const linkClass = ({ isActive }) =>
    `flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
      isActive
        ? 'text-[#D4A843] bg-[#D4A843]/10'
        : 'text-[var(--etb-text-secondary)] hover:text-[var(--etb-text-heading)] hover:bg-[#8B0000]/10'
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
      isActive
        ? 'text-[#D4A843] bg-[#D4A843]/10'
        : 'text-[var(--etb-text-secondary)] hover:text-[var(--etb-text-heading)] hover:bg-[#8B0000]/10'
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--etb-bg-navbar)] backdrop-blur-xl shadow-lg shadow-[var(--etb-shadow)] border-b border-[var(--etb-border)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <NavLink
          to="/"
          end
          className="flex items-center gap-2.5 font-bold text-lg text-[var(--etb-text-heading)] hover:text-[#D4A843] transition-colors"
        >
          <i className="fas fa-headset text-[#D4A843]" />
          <span className="hidden sm:inline">Formador Online ETB</span>
        </NavLink>

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={linkClass}>
              <i className={`fas ${link.icon} text-xs`} />
              {link.label}
            </NavLink>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-2 w-9 h-9 rounded-lg flex items-center justify-center text-[var(--etb-text-secondary)] hover:text-[#D4A843] hover:bg-[#D4A843]/10 transition-all"
            aria-label="Cambiar tema"
          >
            <i className={`fas ${dark ? 'fa-sun' : 'fa-moon'} text-sm`} />
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-[var(--etb-text-secondary)] hover:text-[var(--etb-text-heading)] hover:bg-[#8B0000]/20 transition-all"
          aria-label="Menú"
        >
          <i className={`fas ${open ? 'fa-times' : 'fa-bars'} text-lg`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[var(--etb-bg-navbar-mobile)] backdrop-blur-xl border-t border-[var(--etb-border)]"
          >
            <div className="px-4 pb-4 pt-2 space-y-1">
              {NAV_LINKS.map((link) => (
                <NavLink key={link.to} to={link.to} end={link.end} className={mobileLinkClass}>
                  <i className={`fas ${link.icon} text-xs w-5 text-center text-[#D4A843]`} />
                  {link.label}
                </NavLink>
              ))}
              <button
                onClick={toggleTheme}
                className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium text-[var(--etb-text-secondary)] hover:text-[var(--etb-text-heading)] hover:bg-[#D4A843]/10 transition-all mt-1"
              >
                <i className={`fas ${dark ? 'fa-sun' : 'fa-moon'} text-xs w-5 text-center text-[#D4A843]`} />
                Modo {dark ? 'claro' : 'oscuro'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
