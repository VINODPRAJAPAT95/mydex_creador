import { motion } from "framer-motion";

const PageHero = ({ title, subtitle, image, children }) => (
  <section className="relative overflow-hidden bg-green-lux text-white">
    {/* Background image */}
    {image && (
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-mydex-green/70" />
      </div>
    )}

    {/* Fallback solid bg when no image */}
    {!image && <div className="absolute inset-0 bg-green-lux" />}

    <div className="container-lux relative section-pad">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <p className="eyebrow mb-4">Mydex International</p>
        <h1 className="max-w-3xl font-serif text-4xl font-semibold md:text-6xl">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl text-white/80">{subtitle}</p>}
        {children && <div className="mt-8">{children}</div>}
      </motion.div>
    </div>

    {/* Wavy bottom border — same as Home hero */}
    <div className="absolute inset-x-0 -bottom-px z-10 leading-[0] text-mydex-beige">
      <svg
        className="h-10 w-full sm:h-16 md:h-20"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
      >
        <path
          d="M0,70 C240,30 360,120 600,90 C840,60 960,10 1200,50 C1320,70 1380,85 1440,70 L1440,160 L0,160 Z"
          fill="currentColor"
        />
        <path
          d="M0,55 C240,15 360,105 600,75 C840,45 960,-5 1200,35 C1320,55 1380,70 1440,55"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.55"
          strokeWidth="2"
        />
        <path
          d="M20,95 C260,60 380,135 610,108"
          fill="none"
          stroke="#123B29"
          strokeOpacity="0.35"
          strokeWidth="1.5"
        />
        <path
          d="M900,72 C1080,40 1220,95 1420,68"
          fill="none"
          stroke="#123B29"
          strokeOpacity="0.35"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  </section>
);

export default PageHero;