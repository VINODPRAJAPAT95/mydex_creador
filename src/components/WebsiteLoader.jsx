import { useEffect } from "react";
import { motion } from "framer-motion";

const LINE_1 = "MYDEX";
const LINE_2 = "INTERNATIONAL";
const LETTER_DELAY = 0.035;

const LINE_1_START = 0.1;
const LINE_1_END = LINE_1_START + LINE_1.length * LETTER_DELAY;

const LINE_2_START = LINE_1_END + 0.08;
const LINE_2_END = LINE_2_START + LINE_2.length * LETTER_DELAY;

const EST_START = LINE_2_END + 0.1;
const SPINNER_START = EST_START + 0.22;
const TEXT_START = SPINNER_START + 0.15;

/* Site opens exactly 2 seconds after the loader mounts — the timing
   constants above are tuned so the full MYDEX → INTERNATIONAL →
   EST. 1956 → spinner → tagline sequence lands cleanly inside that
   window instead of getting cut off. */
const TOTAL_DURATION = 2;

const topLetterVariants = {
  hidden: { opacity: 0, y: -22, filter: "blur(5px)" },
  show: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: LINE_1_START + i * LETTER_DELAY, duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  }),
};

const bottomLetterVariants = {
  hidden: { opacity: 0, y: 22, filter: "blur(5px)" },
  show: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: LINE_2_START + i * LETTER_DELAY, duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* onFinish fires at exactly TOTAL_DURATION (2s) — pass this from the
   parent and only reveal the real site when it fires. */
const WebsiteLoader = ({ onFinish }) => {
  useEffect(() => {
    if (!onFinish) return;
    const timer = setTimeout(onFinish, TOTAL_DURATION * 1000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[200] grid place-items-center overflow-hidden bg-mydex-green">
      <div className="pointer-events-none absolute h-80 w-80 rounded-full bg-mydex-gold/10 blur-3xl" />

      <div className="relative flex flex-col items-center px-6 text-center">
        {/* MYDEX — drops in from the top */}
        <h1 className="flex justify-center whitespace-nowrap font-serif text-3xl text-mydex-gold sm:text-4xl">
          {LINE_1.split("").map((char, i) => (
            <motion.span
              key={`l1-${char}-${i}`}
              custom={i}
              variants={topLetterVariants}
              initial="hidden"
              animate="show"
              className="inline-block tracking-[0.25em]"
            >
              {char}
            </motion.span>
          ))}
        </h1>

        {/* INTERNATIONAL — rises in from the bottom */}
        <h2 className="mt-1 flex justify-center whitespace-nowrap text-xs text-mydex-gold/90 sm:text-sm">
          {LINE_2.split("").map((char, i) => (
            <motion.span
              key={`l2-${char}-${i}`}
              custom={i}
              variants={bottomLetterVariants}
              initial="hidden"
              animate="show"
              className="inline-block tracking-[0.45em]"
            >
              {char}
            </motion.span>
          ))}
        </h2>

        {/* EST. 1956 — flanked by hairlines that draw themselves in */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: EST_START, duration: 0.3 }}
          className="mt-3 flex items-center justify-center gap-3"
        >
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: EST_START, duration: 0.35, ease: "easeOut" }}
            className="h-px w-8 origin-right bg-mydex-gold/50"
          />
          <span className="text-[11px] tracking-[0.35em] text-mydex-gold/80">EST. 1956</span>
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: EST_START, duration: 0.35, ease: "easeOut" }}
            className="h-px w-8 origin-left bg-mydex-gold/50"
          />
        </motion.div>

        {/* Loading spinner — thin gold arc rotating on a faint track */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: SPINNER_START, duration: 0.3, ease: "easeOut" }}
          className="relative mt-6 flex h-10 w-10 items-center justify-center"
        >
          <div className="absolute inset-0 rounded-full border-2 border-mydex-gold/20" />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-mydex-gold"
            animate={{ rotate: 360 }}
            transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: TEXT_START, duration: 0.4, ease: "easeOut" }}
          className="mt-3 text-sm tracking-wide text-white/70"
        >
          Loading premium experience…
        </motion.p>
      </div>
    </div>
  );
};

export default WebsiteLoader;