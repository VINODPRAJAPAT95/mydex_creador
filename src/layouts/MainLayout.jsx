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
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-mydex-cream text-mydex-ink">

      {/* ✅ FIX: WebsiteLoader sirf ek baar dikhta hai (pehli visit pe)
          onFinish callback se loading=false hota hai.
          Loader fixed overlay hai — content hamesha render rehta hai
          neeche, loader ke hatne ke baad visible hota hai. */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[9999]"
          >
            <WebsiteLoader onFinish={() => setLoading(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <ScrollProgress />
      <Navbar />

      {/*
        🔧 FIX: Pehle yahan AnimatePresence(mode="wait") + exit animation tha.
        Bug: agar browser tab background/idle ho jaata (Chrome ~5 min baad
        background tabs ko throttle karta hai), to requestAnimationFrame
        ruk jaata, aur exit animation kabhi "complete" nahi hota. Isse
        AnimatePresence purana <main> kabhi unmount nahi karta aur naya
        content kabhi nahi dikhata — page hamesha ke liye us exit style
        (opacity:0, translateY(-8px)) par atak jaata tha.

        Fix: exit animation aur AnimatePresence wrapper hata diya. Ab sirf
        entrance (initial -> animate) animation hai, jo stuck nahi ho sakta,
        kyunki koi "wait for exit to finish" state hi nahi hai.
      */}
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <Outlet />
      </motion.main>

      <Footer />
      <FloatingWhatsApp />
      <AIAssistant />
      <BackToTop />
      <CookieBanner />
    </div>
  );
};

export default MainLayout;