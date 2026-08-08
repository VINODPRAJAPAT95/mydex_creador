import { Link, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Button from "../components/ui/Button";
import PageHero from "../components/ui/PageHero";
import { productCategories, productsByCategory } from "../data/siteData";

export const ProductsIndex = () => (
  <>
    <PageHero
      title="Premium Dry Fruits, Spices & Agro Products"
      subtitle="Explore our complete export portfolio curated for international buyers."
    />
    <section className="section-pad">
      <div className="container-lux grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {productCategories.map((cat) => (
          <Link key={cat.slug} to={`/products/${cat.slug}`} className="card-lux overflow-hidden p-0 hover:shadow-gold">
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

export const CategoryPage = () => {
  const { categorySlug } = useParams();
  const category = productCategories.find((c) => c.slug === categorySlug);
  const products = productsByCategory[categorySlug] || [];

  if (!category) {
    return (
      <section className="section-pad text-center">
        <h1 className="heading-serif">Category not found</h1>
        <Button to="/products" className="mt-6">Back to Products</Button>
      </section>
    );
  }

  return (
    <>
      <PageHero title={category.name} subtitle={category.description} image={category.image} />
      <section className="section-pad">
        <div className="container-lux grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
};

export const ProductDetail = () => {
  const { categorySlug, productSlug } = useParams();
  const product = (productsByCategory[categorySlug] || []).find((p) => p.slug === productSlug);
  const related = (productsByCategory[categorySlug] || []).filter((p) => p.slug !== productSlug).slice(0, 3);

  if (!product) {
    return (
      <section className="section-pad text-center">
        <h1 className="heading-serif">Product not found</h1>
        <Button to="/products" className="mt-6">Back to Products</Button>
      </section>
    );
  }

  return (
    <>
      <PageHero title={product.name} subtitle={`${product.category.replace("-", " ")} · Export Premium`} image={product.image} />
      <section className="section-pad">
        <div className="container-lux grid gap-10 lg:grid-cols-2">
          <img src={product.image} alt={product.name} className="h-[420px] w-full rounded-2xl object-cover shadow-premium" />
          <div>
            <p className="eyebrow">Product Details</p>
            <h2 className="mt-2 font-serif text-4xl text-mydex-green">{product.name}</h2>
            <p className="mt-4 text-gray-600">{product.description}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {product.specs.map((s) => (
                <div key={s.label} className="rounded-lg border border-mydex-gold/25 bg-white p-4">
                  <p className="text-xs uppercase tracking-wider text-mydex-gold">{s.label}</p>
                  <p className="mt-1 font-medium text-mydex-green">{s.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <h3 className="font-semibold text-mydex-green">Applications</h3>
              <p className="mt-2 text-sm text-gray-600">{product.applications.join(" · ")}</p>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-mydex-green">Quality</h3>
              <p className="mt-2 text-sm text-gray-600">{product.quality}</p>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-mydex-green">Export Countries</h3>
              <p className="mt-2 text-sm text-gray-600">{product.countries.join(", ")}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/get-quote" variant="gold">Request Quote</Button>
              <Button href={`https://wa.me/919876543210?text=${encodeURIComponent(`Inquiry for ${product.name}`)}`} variant="green">
                WhatsApp Inquiry
              </Button>
            </div>
          </div>
        </div>

        <div className="container-lux mt-16">
          <h3 className="mb-6 font-serif text-3xl text-mydex-green">Gallery</h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {product.gallery.map((img, i) => (
              <img key={i} src={img} alt="" className="h-48 w-full rounded-xl object-cover" loading="lazy" />
            ))}
          </div>
        </div>

        <div className="container-lux mt-16">
          <h3 className="mb-6 font-serif text-3xl text-mydex-green">Related Products</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
