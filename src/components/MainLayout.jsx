import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from './BackToTop';

export default function MainLayout() {
  return (
    <div className="relative min-h-screen bg-[var(--etb-bg-page)] overflow-x-hidden">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
