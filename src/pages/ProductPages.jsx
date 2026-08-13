import { Link, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Button from "../components/ui/Button";
import PageHero from "../components/ui/PageHero";
import { productCategories, productsByCategory } from "../data/siteData";

// ─── Flower Watermark ─────────────────────────────────────────────────────────
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

// ─── Flip Card (used for Varieties & Specifications) ──────────────────────────
const FlipCard = ({ name, details }) => (
  <div className="group h-32 [perspective:1400px]">
    <div
      className="relative h-full w-full rounded-xl shadow-sm transition-transform
                 duration-700 ease-out [transform-style:preserve-3d]
                 group-hover:[transform:rotateY(180deg)]"
    >
      {/* Front face */}
      <div
        className="absolute inset-0 flex items-center justify-center rounded-xl
                   bg-mydex-green px-4 text-center text-sm font-medium
                   text-mydex-gold [backface-visibility:hidden]"
      >
        {name}
      </div>

      {/* Back face */}
      <div
        className="absolute inset-0 flex items-center justify-center rounded-xl
                   border border-mydex-gold/30 bg-white px-4 text-center
                   text-xs leading-snug text-mydex-green
                   [backface-visibility:hidden] [transform:rotateY(180deg)]"
      >
        {details}
      </div>
    </div>
  </div>
);

// ─── Products Index ───────────────────────────────────────────────────────────
export const ProductsIndex = () => (
  <>
    <PageHero
      title="Premium Dry Fruits, Spices & Agro Products"
      subtitle="Explore our complete export portfolio curated for international buyers."
    />
    <section className="relative overflow-hidden section-pad bg-mydex-beige">
      <FlowerWatermark motif="kaju" />
      <div className="container-lux relative z-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {productCategories.map((cat) => (
          <Link
            key={cat.slug}
            to={`/products/${cat.slug}`}
            className="card-lux overflow-hidden p-0 hover:shadow-gold"
          >
            <img src={cat.image} alt={cat.name} className="h-52 w-full object-cover" />
            <div className="p-5">
              <h3 className="font-serif text-2xl text-mydex-green">{cat.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{cat.description}</p>
              <p className="mt-4 text-sm font-semibold text-mydex-gold">EXPLORE →</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  </>
);

// ─── Category Page ────────────────────────────────────────────────────────────
export const CategoryPage = () => {
  const { categorySlug } = useParams();
  const category = productCategories.find((c) => c.slug === categorySlug);
  const products = productsByCategory[categorySlug] || [];

  if (!category) {
    return (
      <section className="section-pad text-center bg-mydex-beige">
        <h1 className="heading-serif">Category not found</h1>
        <Button to="/products" className="mt-6">Back to Products</Button>
      </section>
    );
  }

  return (
    <>
      <PageHero title={category.name} subtitle={category.description} image={category.image} />

      {/* Category Banner */}
      <section className="relative overflow-hidden section-pad pb-0 bg-mydex-beige">
        <FlowerWatermark />
        <div className="container-lux relative z-10">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.3fr] items-start">
            {/* Image with offset frame */}
            <div className="relative">
              <div className="absolute -bottom-4 -left-4 h-full w-full rounded-2xl bg-mydex-green" />
              <img
                src={category.image}
                alt={category.name}
                className="relative z-10 h-[420px] w-full rounded-2xl object-cover shadow-premium"
              />
            </div>

            {/* Text content */}
            <div>
              <p className="text-sm font-semibold text-mydex-green">{category.name}</p>

              <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-bold leading-tight text-mydex-charcoal">
                {category.headline || `The Natural Essence of India's ${category.name}`}
              </h2>

              <div className="mt-6 border-l-4 border-mydex-green pl-4">
                <p className="text-lg text-mydex-green">
                  {category.tagline || category.description}
                </p>
              </div>

              <p className="mt-6 text-gray-600 leading-relaxed">
                {category.introText || category.description}
              </p>

            <p className="mt-6 text-gray-600 leading-relaxed">
  At <span className="font-bold text-mydex-charcoal">Mydex International</span>,
  we proudly export a wide range of{" "}
  <span className="font-bold text-mydex-charcoal">premium-quality {category.name}</span>,
  cultivated in harmony with nature and processed to meet{" "}
  <span className="font-bold text-mydex-charcoal">
    international purity, flavor, and nutritional standards.
  </span>
</p>

              <p className="mt-6 text-gray-600 leading-relaxed">
                Every Mydex product is a symbol of{" "}
                <span className="font-bold text-mydex-charcoal">purity, performance, and partnership</span>{" "}
                nourishing the world while preserving India's agricultural soul.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button to="/get-quote" variant="gold">Request Category Quote</Button>
                <Button to="/contact" variant="outline">Talk to Trade Desk</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative overflow-hidden section-pad bg-mydex-beige">
        <FlowerWatermark motif="kaju" />
        <div className="container-lux relative z-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-mydex-gold mb-6">
            {products.length} Products
          </p>
          <div className="grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export const ProductDetail = () => {
  const { categorySlug, productSlug } = useParams();
  const product = (productsByCategory[categorySlug] || []).find((p) => p.slug === productSlug);
  const related = (productsByCategory[categorySlug] || [])
    .filter((p) => p.slug !== productSlug)
    .slice(0, 3);

  if (!product) {
    return (
      <section className="relative overflow-hidden section-pad text-center bg-mydex-beige">
        <FlowerWatermark />
        <h1 className="heading-serif relative z-10">Product not found</h1>
        <Button to="/products" className="mt-6 relative z-10">Back to Products</Button>
      </section>
    );
  }

  return (
    <>
      <PageHero
        title={product.name}
        subtitle={product.tagline}
        image={product.image}
      />

      <section className="relative overflow-hidden section-pad bg-mydex-beige">
        <FlowerWatermark />

        {/* ── Main Grid: Image + Info ── */}
        <div className="container-lux relative z-10 grid gap-10 lg:grid-cols-2 items-start">
          {/* Image column */}
          <div className="lg:sticky lg:top-24">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-h-[420px] object-contain"
            />

            {/* Description below image */}
            <div className="mt-6 rounded-xl border border-mydex-gold/25 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-mydex-gold">
                About {product.name}
              </p>
              {product.tagline && (
                <p className="mt-2 font-serif text-lg italic text-mydex-green">
                  {product.tagline}
                </p>
              )}
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>

          {/* Info column */}
          <div>
            <p className="eyebrow">Product Details</p>
            <h2 className="mt-2 font-serif text-4xl text-mydex-green">{product.name}</h2>

            {/* Specs */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {product.specs.map((s) => (
                <div key={s.label} className="rounded-lg border border-mydex-gold/25 bg-white p-4">
                  <p className="text-xs uppercase tracking-wider text-mydex-gold">{s.label}</p>
                  <p className="mt-1 font-medium text-mydex-green">{s.value}</p>
                </div>
              ))}
            </div>

            {/* Health Benefits */}
            {product.healthBenefits?.length > 0 && (
              <div className="mt-6">
                <h3 className="font-semibold text-mydex-green">Health Benefits</h3>
                <ul className="mt-3 space-y-2">
                  {product.healthBenefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="h-2 w-2 rounded-full bg-mydex-gold flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Applications */}
            <div className="mt-6">
              <h3 className="font-semibold text-mydex-green">Applications</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.applications.map((a) => (
                  <span
                    key={a}
                    className="rounded-lg border border-mydex-gold/30 bg-mydex-cream px-3 py-1.5 text-sm text-mydex-green"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>

            {/* Quality */}
            <div className="mt-6">
              <h3 className="font-semibold text-mydex-green">Quality</h3>
              <p className="mt-2 text-sm text-gray-600">{product.quality}</p>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/get-quote" variant="gold">Request Quote</Button>
              <Button
                href={`https://wa.me/9000001026?text=${encodeURIComponent(`Inquiry for ${product.name}`)}`}
                variant="green"
              >
                WhatsApp Inquiry
              </Button>
            </div>

            {/* Varieties & Specifications — flip cards (below CTA buttons) */}
            {product.varieties?.length > 0 && (
              <div className="mt-10">
                <h3 className="font-semibold text-mydex-green">Varieties & Specifications</h3>
                <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {product.varieties.map((v) => {
                    // Supports both plain strings ("Rama Tulsi") and rich objects
                    // { name: "Rama Tulsi", details: "Color: Bright green..." }
                    const name = typeof v === "string" ? v : v.name;
                    const details =
                      typeof v === "string"
                        ? "Export-grade quality, carefully sorted and graded for international standards."
                        : v.details;

                    return <FlipCard key={name} name={name} details={details} />;
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="container-lux relative z-10 mt-16">
            <h3 className="mb-6 font-serif text-3xl text-mydex-green">Related Products</h3>
            <div className="grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
};