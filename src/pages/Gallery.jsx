import { useMemo, useState } from "react";
import PageHero from "../components/ui/PageHero";
import { galleryItems } from "../data/siteData";

const filters = ["All", "Factory", "Warehouse", "Products", "Packaging", "Container Loading", "Export", "Quality"];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const items = useMemo(
    () => (filter === "All" ? galleryItems : galleryItems.filter((g) => g.type === filter)),
    [filter]
  );

  return (
    <>
      <PageHero title="Luxury Gallery" subtitle="Factory, warehouse, packaging and export operations." />
      <section className="section-pad">
        <div className="container-lux">
          <div className="mb-8 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-4 py-2 text-xs uppercase tracking-wider ${
                  filter === f ? "bg-mydex-gold text-mydex-green" : "border border-mydex-gold/40 text-mydex-green"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {items.map((item) => (
              <figure key={item.title} className="mb-4 break-inside-avoid overflow-hidden rounded-xl border border-mydex-gold/20 bg-white shadow-premium">
                <img src={item.image} alt={item.title} className="w-full object-cover" loading="lazy" />
                <figcaption className="p-4">
                  <p className="text-xs uppercase tracking-wider text-mydex-gold">{item.type}</p>
                  <p className="font-serif text-xl text-mydex-green">{item.title}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
