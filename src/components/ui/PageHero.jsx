import { motion } from "framer-motion";

const PageHero = ({ title, subtitle, image, children }) => (
  <section className="relative overflow-hidden bg-green-lux text-white">
    <div className="absolute inset-0 opacity-20">
      {image && <img src={image} alt="" className="h-full w-full object-cover" />}
    </div>
    <div className="container-lux relative section-pad">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <p className="eyebrow mb-4">Mydex International</p>
        <h1 className="max-w-3xl font-serif text-4xl font-semibold md:text-6xl">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl text-white/80">{subtitle}</p>}
        {children && <div className="mt-8">{children}</div>}
      </motion.div>
    </div>
  </section>
);

export default PageHero;
