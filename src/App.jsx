import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainLayout from './components/MainLayout';
import Inicio from './pages/Inicio';
import BotTutorPage from './pages/BotTutor';
import Analizador from './pages/Analizador';
import Glosario from './pages/Glosario';
import Ofertas from './pages/Ofertas';
import Guiones from './pages/Guiones';

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          <Route index element={<Inicio />} />
          <Route path="bot-tutor" element={<BotTutorPage />} />
          <Route path="analizador" element={<Analizador />} />
          <Route path="glosario" element={<Glosario />} />
          <Route path="ofertas" element={<Ofertas />} />
          <Route path="guiones" element={<Guiones />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
