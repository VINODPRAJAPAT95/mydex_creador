import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import AIAssistant from "../components/AIAssistant";
import BackToTop from "../components/BackToTop";
import CookieBanner from "../components/CookieBanner";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollProgress from "../components/ScrollProgress";
import WebsiteLoader from "../components/WebsiteLoader";

const MainLayout = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-mydex-cream text-mydex-ink">
      {loading && <WebsiteLoader />}
      <ScrollProgress />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <FloatingWhatsApp />
      <AIAssistant />
      <BackToTop />
      <CookieBanner />
    </div>
  );
};

export default MainLayout;
