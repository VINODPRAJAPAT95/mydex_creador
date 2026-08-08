import { motion } from "framer-motion";

const WebsiteLoader = () => (
  <div className="fixed inset-0 z-[200] grid place-items-center bg-mydex-green">
    <div className="text-center">
      <motion.div
        className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-mydex-gold"
        animate={{ rotate: 360 }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
      >
        <span className="font-serif text-3xl text-mydex-gold">M</span>
      </motion.div>
      <p className="text-xs uppercase tracking-[0.4em] text-mydex-gold">Mydex International</p>
      <p className="mt-2 text-sm text-white/70">Loading premium experience…</p>
    </div>
  </div>
);

export default WebsiteLoader;
