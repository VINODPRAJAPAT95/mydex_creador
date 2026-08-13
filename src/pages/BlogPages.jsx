import { Link, useParams } from "react-router-dom";
import Button from "../components/ui/Button";
import PageHero from "../components/ui/PageHero";
import { blogs } from "../data/siteData";

/* Subtle repeating watermark used on plain-color sections. Sits at z-0
  behind a section's content, which should be wrapped in a
  `relative z-10` container.

  motif="flower" (default) — a simple 6-petal flower.
    tone="gold"  (default) suits the cream/beige sections.
    tone="light" uses a pale cream stroke so it stays visible — but
      still subtle — on dark green panels.

  motif="kaju" — a cashew (kaju) nut paired with a small flower, for a
  dry-fruits-themed accent.
    tone="black" (default for this motif) gives a soft charcoal imprint
    on the cream sections. */
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

/* ─── Blog List ─────────────────────────────────────────── */
export const BlogList = () => {
  // 🔧 FIX: PageHero pehle bina `image` prop ke call ho raha tha (BlogDetail
  // niche sahi se `image={post.image}` pass karta hai, par BlogList nahi
  // kar raha tha) — isliye hero section me background image nahi dikh
  // rahi thi. Koi naya asset import nahi kiya (galat filename se build
  // tut sakta tha) — iske bajaye already existing `blogs` data se pehli
  // post ki image use kar rahe hain, jo hamesha safe hai.
  const heroImage = blogs?.[0]?.image;

  return (
    <>
      <PageHero
        title="Insights & Blog"
        subtitle="Market trends, quality guidance and trade knowledge."
        image={heroImage}
      />

      <section className="section-pad relative overflow-hidden bg-mydex-beige">
        {/* Soft decorative blur accents, matching Home's plain sections */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-mydex-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-mydex-green/10 blur-3xl" />
        <FlowerWatermark />

        <div className="container-lux relative z-10">
          {blogs.length === 0 ? (
            <p className="text-sm text-gray-500">No articles found.</p>
          ) : (
            <div className="space-y-6">
              {blogs.map((b) => (
                <article
                  key={b.slug}
                  className="card-lux grid gap-0 overflow-hidden p-0 md:grid-cols-2"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={b.image}
                      alt={b.title}
                      className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105 md:h-full"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-mydex-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-mydex-green">
                      {b.category}
                    </span>
                  </div>

                  <div className="flex flex-col justify-between p-6">
                    <div>
                      <p className="text-xs text-gray-400">{b.date}</p>
                      <h2 className="mt-2 font-serif text-xl leading-snug text-mydex-green">
                        {b.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-gray-600">
                        {b.excerpt}
                      </p>
                    </div>
                    <Link
                      to={`/blog/${b.slug}`}
                      className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-mydex-gold hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

/* ─── Blog Detail ───────────────────────────────────────── */
export const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogs.find((b) => b.slug === slug);
  const related = blogs.filter((b) => b.slug !== slug).slice(0, 3);

  if (!post) {
    return (
      <section className="section-pad relative overflow-hidden bg-mydex-beige text-center">
        <FlowerWatermark />
        <div className="relative z-10">
          <h1 className="heading-serif">Post not found</h1>
          <Button to="/blog" className="mt-6">
            Back to Blog
          </Button>
        </div>
      </section>
    );
  }

  return (
    <>
      <PageHero
        title={post.title}
        subtitle={`${post.category} · ${post.date}`}
        image={post.image}
      />

      <section className="section-pad relative overflow-hidden bg-mydex-beige">
        <FlowerWatermark />

        <div className="container-lux relative z-10 max-w-3xl">
          <img
            src={post.image}
            alt={post.title}
            className="mb-8 h-80 w-full rounded-2xl object-cover"
          />

          <span className="mb-6 inline-block rounded-full bg-mydex-gold/15 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-mydex-gold">
            {post.category}
          </span>

          <div className="space-y-5">
            {post.content.split("\n\n").map((para, i) => (
              <p key={i} className="text-base leading-8 text-gray-700">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-mydex-gold hover:underline"
            >
              ← Back to Blog
            </Link>
          </div>

          <div className="mt-12 border-t border-mydex-gold/20 pt-8">
            <h3 className="mb-4 font-serif text-2xl text-mydex-green">Related Posts</h3>
            <div className="grid gap-4 sm:grid-cols-3">
              {related.map((b) => (
                <Link
                  key={b.slug}
                  to={`/blog/${b.slug}`}
                  className="group block overflow-hidden rounded-xl border border-mydex-beige bg-white transition hover:border-mydex-gold"
                >
                  <img
                    src={b.image}
                    alt={b.title}
                    className="h-28 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="p-3">
                    <p className="text-[10px] uppercase tracking-wider text-mydex-gold">
                      {b.category}
                    </p>
                    <p className="mt-1 text-xs font-semibold leading-snug text-mydex-green">
                      {b.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};