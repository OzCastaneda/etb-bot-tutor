export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] border-t border-gray-800 py-10 md:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#8B0000] to-[#B22222] flex items-center justify-center shadow-lg shadow-[#8B0000]/30 shrink-0">
                <i className="fas fa-headset text-white text-sm" />
              </div>
              <span className="text-lg font-bold font-sans text-white tracking-tight">
                Formador Online ETB
              </span>
            </div>
            <p className="text-sm text-gray-400 font-sans">
              Desarrollado para el área de formación de COS
            </p>
            <a
              href="https://www.etb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors duration-200 font-sans"
            >
              <i className="fas fa-external-link-alt text-[9px]" />
              Sitio oficial ETB
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex items-center gap-2 text-sm text-gray-300 font-sans group">
              <span className="w-7 h-7 rounded-lg bg-[#D4A843]/15 flex items-center justify-center shrink-0 group-hover:bg-[#D4A843]/25 transition-colors duration-200">
                <i className="fas fa-graduation-cap text-[11px] text-[#D4A843]" />
              </span>
              <span>
                <span className="text-gray-500">Formadora: </span>
                <span className="text-gray-200 font-medium">Naydu Paola Sánchez Vizcaya</span>
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300 font-sans group">
              <span className="w-7 h-7 rounded-lg bg-blue-500/15 flex items-center justify-center shrink-0 group-hover:bg-blue-500/25 transition-colors duration-200">
                <i className="fas fa-code text-[11px] text-blue-400" />
              </span>
              <span>
                <span className="text-gray-500">Desarrollado por: </span>
                <span className="text-gray-200 font-medium">Oswaldo Castañeda</span>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-600 font-sans">
            &copy; {new Date().getFullYear()} ETB — Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
