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
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] items-center rounded-2xl border border-mydex-gold/30 bg-white p-6 shadow-premium">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-64 rounded-xl object-cover shadow-sm"
            />
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-mydex-gold">
                Category Overview
              </p>
              <h2 className="font-serif text-3xl text-mydex-green">{category.name}</h2>
              <p className="text-gray-600 leading-relaxed">{category.description}</p>
              <div className="flex flex-wrap gap-3 pt-2">
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// ─── Product Detail ───────────────────────────────────────────────────────────
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
        <div className="container-lux relative z-10 grid gap-10 lg:grid-cols-2">
          <img
            src={product.image}
            alt={product.name}
            className="h-[420px] w-full object-contain
                       animate-fade-up
                       transition-transform duration-500 ease-out
                       hover:-translate-y-2 hover:scale-[1.02]"
          />

          <div>
            <p className="eyebrow">Product Details</p>
            <h2 className="mt-2 font-serif text-4xl text-mydex-green">{product.name}</h2>

            {/* Tagline */}
            {product.tagline && (
              <p className="mt-2 font-serif text-lg italic text-mydex-gold">
                {product.tagline}
              </p>
            )}

            {/* Description */}
            <p className="mt-4 text-gray-600 leading-relaxed">{product.description}</p>

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

            {/* Varieties */}
            {product.varieties?.length > 0 && (
              <div className="mt-6">
                <h3 className="font-semibold text-mydex-green">Varieties & Specifications</h3>
                <div className="mt-3 flex flex-wrap gap-3">
                  {product.varieties.map((v) => (
                    <span
                      key={v}
                      className="rounded-lg bg-mydex-green px-4 py-2 text-sm font-medium text-mydex-gold"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Applications */}
            <div className="mt-6">
              <h3 className="font-semibold text-mydex-green">Applications</h3>
              <p className="mt-2 text-sm text-gray-600">{product.applications.join(" · ")}</p>
            </div>

            {/* Quality */}
            <div className="mt-4">
              <h3 className="font-semibold text-mydex-green">Quality</h3>
              <p className="mt-2 text-sm text-gray-600">{product.quality}</p>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/get-quote" variant="gold">Request Quote</Button>
              <Button
                href={`https://wa.me/919876543210?text=${encodeURIComponent(`Inquiry for ${product.name}`)}`}
                variant="green"
              >
                WhatsApp Inquiry
              </Button>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="container-lux relative z-10 mt-16">
          <h3 className="mb-6 font-serif text-3xl text-mydex-green">Gallery</h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {product.gallery.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className="h-48 w-full rounded-xl object-cover"
                loading="lazy"
              />
            ))}
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="container-lux relative z-10 mt-16">
            <h3 className="mb-6 font-serif text-3xl text-mydex-green">Related Products</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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