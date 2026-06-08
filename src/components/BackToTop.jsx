import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 md:bottom-8 right-4 md:right-8 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#8B0000] text-white flex items-center justify-center shadow-xl shadow-[#8B0000]/30 hover:bg-[#B22222] hover:shadow-[#B22222]/40 active:scale-90 transition-all duration-300 z-40 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Volver al inicio"
    >
      <i className="fas fa-arrow-up" />
    </button>
  );
}
