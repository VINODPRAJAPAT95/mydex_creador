import { motion } from "framer-motion";

const SectionTitle = ({ eyebrow, title, light = false, center = true, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`${center ? "mx-auto mb-12 max-w-3xl text-center" : "mb-10"} ${className}`}
  >
    {eyebrow && (
      <p className={`eyebrow mb-3 ${light ? "text-mydex-gold" : ""}`}>
        {eyebrow}
      </p>
    )}
    <h2 className={`heading-serif ${light ? "text-white" : "text-mydex-green"}`}>{title}</h2>
  </motion.div>
);

export default SectionTitle;
