export default function Footer() {
  return (
    <footer className="bg-[var(--etb-bg-card)] border-t border-[var(--etb-border)] py-8 md:py-10 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2.5 text-[var(--etb-text-heading)] font-bold text-lg">
            <i className="fas fa-headset text-[#D4A843]" />
            <span>Formador Online ETB</span>
          </div>
          <p className="text-sm text-[var(--etb-text-muted)] leading-relaxed">
            Desarrollado para el área de formación de COS
          </p>
          <p className="text-sm text-[#D4A843] font-medium">
            Formadora Naydu Paola Sánchez Vizcaya
          </p>
          <p className="text-xs text-[var(--etb-text-muted)]">
            Por Oswaldo Castañeda
          </p>
        </div>
      </div>
    </footer>
  );
}
