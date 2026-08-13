import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import PageHero from "../components/ui/PageHero";
import { galleryItems } from "../data/siteData";

/* Subtle repeating watermark used on plain-color sections. Sits at z-0
  behind a section's content, which should be wrapped in a
  `relative z-10` container. */
const FlowerWatermark = ({ tone, motif = "flower", className = "" }) => {
  if (motif === "kaju") {
    const resolvedTone = tone || "black";
    const stroke = resolvedTone === "light" ? "%23F5E6C8" : "%23231F1F";
    return (
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-0 opacity-[0.045] ${className}`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='170' height='170' viewBox='0 0 170 170'%3E%3Cg fill='none' stroke='${stroke}' stroke-width='1.4'%3E%3Cpath d='M40 55 C20 58 16 80 28 96 C40 112 62 108 65 90 C68 74 62 58 48 54 C45 53 42 54 40 55Z'/%3E%3Cpath d='M46 58 C55 62 60 70 60 80'/%3E%3Cg transform='translate(110,115)'%3E%3Ccircle cx='0' cy='0' r='4'/%3E%3Cpath d='M0 0 C0 -14 -12 -20 0 -32 C12 -20 0 -14 0 0Z'/%3E%3Cpath d='M0 0 C14 0 20 -12 32 0 C20 12 14 0 0 0Z'/%3E%3Cpath d='M0 0 C0 14 12 20 0 32 C-12 20 0 14 0 0Z'/%3E%3Cpath d='M0 0 C-14 0 -20 12 -32 0 C-20 -12 -14 0 0 0Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "170px 170px",
        }}
      />
    );
  }

  const resolvedTone = tone || "gold";
  const stroke = resolvedTone === "light" ? "%23F5E6C8" : "%23C9A227";
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 ${
        resolvedTone === "light" ? "opacity-[0.08]" : "opacity-[0.05]"
      } ${className}`}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cg fill='none' stroke='${stroke}' stroke-width='1.3'%3E%3Ccircle cx='70' cy='70' r='5'/%3E%3Cpath d='M70 70 C70 48 54 38 70 20 C86 38 70 48 70 70Z'/%3E%3Cpath d='M70 70 C92 70 102 54 120 70 C102 86 92 70 70 70Z'/%3E%3Cpath d='M70 70 C70 92 86 102 70 120 C54 102 70 92 70 70Z'/%3E%3Cpath d='M70 70 C48 70 38 86 20 70 C38 54 48 70 70 70Z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "140px 140px",
      }}
    />
  );
};

const filters = ["All", "Factory", "Warehouse", "Products", "Packaging", "Container Loading", "Export", "Quality"];

/* Stagger container + per-card rise-and-settle motion for the grid */
const gridContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const gridCard = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -16,
    scale: 0.96,
    transition: { duration: 0.25, ease: "easeInOut" },
  },
};

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const items = useMemo(
    () => (filter === "All" ? galleryItems : galleryItems.filter((g) => g.type === filter)),
    [filter]
  );

  // 🔧 FIX: PageHero pehle bina `image` prop ke call ho raha tha, isliye hero
  // section me background image nahi dikh rahi thi (jabki CategoryPage,
  // ProductDetail, AboutHero — sabme image prop pass hota hai).
  // Yahan koi dedicated "gallery hero" asset import nahi kiya (kyunki uska
  // filename pata nahi tha aur galat path se build hi tut sakta tha) —
  // iske bajaye, already existing `galleryItems` data se pehli image use
  // kar rahe hain hero background ke liye. Yeh hamesha safe hai (koi naya
  // broken import nahi) aur relevant bhi (asli gallery photo hi dikhega).
  const heroImage = galleryItems?.[0]?.image;

  const openLightbox = (item) => {
    const index = items.findIndex((i) => i.title === item.title);
    setLightbox({ item, index });
  };

  const stepLightbox = (dir) => {
    if (!lightbox) return;
    const nextIndex = (lightbox.index + dir + items.length) % items.length;
    setLightbox({ item: items[nextIndex], index: nextIndex });
  };

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Factory, warehouse, packaging and export operations."
        image={heroImage}
      />

      <section className="section-pad relative overflow-hidden bg-mydex-beige">
        {/* Soft decorative blur accents */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-mydex-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-mydex-green/10 blur-3xl" />
        <FlowerWatermark motif="kaju" />

        <div className="container-lux relative z-10">
          {/* ── Filter pills with sliding active indicator ── */}
          <div className="mb-10 flex flex-wrap justify-center gap-2 sm:justify-start">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`relative rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                  filter === f
                    ? "text-mydex-green"
                    : "border border-mydex-gold/30 text-mydex-green/70 hover:border-mydex-gold hover:text-mydex-green"
                }`}
              >
                {filter === f && (
                  <motion.span
                    layoutId="galleryFilterPill"
                    className="absolute inset-0 rounded-full bg-mydex-gold shadow-gold"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{f}</span>
              </button>
            ))}
          </div>

          {/* ── Masonry grid ── */}
          <motion.div
            key={filter}
            initial="hidden"
            animate="show"
            variants={gridContainer}
            className="columns-1 gap-5 sm:columns-2 lg:columns-3"
          >
            <AnimatePresence mode="popLayout">
              {items.map((item) => (
                <motion.figure
                  key={item.title}
                  layout
                  variants={gridCard}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  whileHover={{ y: -6 }}
                  onClick={() => openLightbox(item)}
                  className="group relative mb-5 block w-full cursor-pointer break-inside-avoid overflow-hidden rounded-2xl border border-mydex-gold/20 bg-white shadow-premium transition-shadow duration-300 hover:shadow-gold"
                >
                  {/* Image with slow zoom on hover */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Dark gradient overlay that fades in on hover */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-mydex-green/85 via-mydex-green/10 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

                    {/* Category badge, top-left */}
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-mydex-green shadow-sm backdrop-blur-sm">
                      {item.type}
                    </span>

                    {/* Zoom / expand icon, appears on hover */}
                    <span className="absolute right-3 top-3 flex h-9 w-9 translate-y-[-6px] items-center justify-center rounded-full bg-mydex-gold text-mydex-green opacity-0 shadow-gold transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>

                    {/* Caption slides up over the image on hover, replacing the plain figcaption below on larger reveal */}
                    <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="font-serif text-lg leading-snug text-white drop-shadow-sm">
                        {item.title}
                      </p>
                    </div>
                  </div>

                  {/* Static caption strip, visible by default (hidden on hover since overlay caption takes over) */}
                  <figcaption className="p-4 transition-opacity duration-300 group-hover:opacity-0">
                    <p className="text-xs uppercase tracking-wider text-mydex-gold">{item.type}</p>
                    <p className="mt-0.5 font-serif text-lg text-mydex-green">{item.title}</p>
                  </figcaption>
                </motion.figure>
              ))}
            </AnimatePresence>
          </motion.div>

          {items.length === 0 && (
            <p className="py-16 text-center text-sm text-gray-500">No images found in this category.</p>
          )}
        </div>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-mydex-green/95 p-4 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-mydex-gold/40 text-mydex-gold transition hover:bg-mydex-gold hover:text-mydex-green"
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                stepLightbox(-1);
              }}
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-mydex-gold/40 text-mydex-gold transition hover:bg-mydex-gold hover:text-mydex-green sm:left-6"
              aria-label="Previous"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                stepLightbox(1);
              }}
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-mydex-gold/40 text-mydex-gold transition hover:bg-mydex-gold hover:text-mydex-green sm:right-6"
              aria-label="Next"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Image card */}
            <motion.div
              key={lightbox.item.title}
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] w-full max-w-3xl overflow-hidden rounded-2xl border border-mydex-gold/30 bg-white shadow-gold"
            >
              <img
                src={lightbox.item.image}
                alt={lightbox.item.title}
                className="max-h-[65vh] w-full object-contain bg-mydex-beige"
              />
              <div className="flex items-center justify-between gap-4 p-5">
                <div>
                  <p className="text-xs uppercase tracking-wider text-mydex-gold">{lightbox.item.type}</p>
                  <p className="mt-1 font-serif text-xl text-mydex-green">{lightbox.item.title}</p>
                </div>
                <span className="flex-shrink-0 text-xs uppercase tracking-wider text-gray-400">
                  {lightbox.index + 1} / {items.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;