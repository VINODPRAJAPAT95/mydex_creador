import { Link, useParams } from "react-router-dom";
import Button from "../components/ui/Button";
import PageHero from "../components/ui/PageHero";
import { blogs } from "../data/siteData";

export const BlogList = () => (
  <>
    <PageHero title="Insights & Blog" subtitle="Market trends, quality guidance and trade knowledge." />
    <section className="section-pad">
      <div className="container-lux grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          {blogs.map((b) => (
            <article key={b.slug} className="card-lux grid gap-5 overflow-hidden p-0 md:grid-cols-2">
              <img src={b.image} alt={b.title} className="h-56 w-full object-cover md:h-full" />
              <div className="p-5">
                <p className="text-xs uppercase tracking-wider text-mydex-gold">{b.category} · {b.date}</p>
                <h2 className="mt-2 font-serif text-2xl text-mydex-green">{b.title}</h2>
                <p className="mt-3 text-sm text-gray-600">{b.excerpt}</p>
                <Link to={`/blog/${b.slug}`} className="mt-4 inline-block text-sm font-semibold text-mydex-gold">
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
        <aside className="space-y-6">
          <div className="card-lux">
            <h3 className="font-semibold text-mydex-green">Search</h3>
            <input className="mt-3 w-full rounded border border-mydex-beige px-3 py-2 text-sm" placeholder="Search articles…" />
          </div>
          <div className="card-lux">
            <h3 className="font-semibold text-mydex-green">Categories</h3>
            <div className="mt-3 space-y-2 text-sm text-gray-600">
              {["Market Insights", "Quality", "Logistics"].map((c) => (
                <p key={c}>{c}</p>
              ))}
            </div>
          </div>
          <div className="card-lux">
            <h3 className="font-semibold text-mydex-green">Recent Posts</h3>
            <div className="mt-3 space-y-3">
              {blogs.map((b) => (
                <Link key={b.slug} to={`/blog/${b.slug}`} className="block text-sm text-gray-600 hover:text-mydex-gold">
                  {b.title}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  </>
);

export const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogs.find((b) => b.slug === slug);
  const related = blogs.filter((b) => b.slug !== slug);

  if (!post) {
    return (
      <section className="section-pad text-center">
        <h1 className="heading-serif">Post not found</h1>
        <Button to="/blog" className="mt-6">Back to Blog</Button>
      </section>
    );
  }

  return (
    <>
      <PageHero title={post.title} subtitle={`${post.category} · ${post.date}`} image={post.image} />
      <section className="section-pad">
        <div className="container-lux max-w-3xl">
          <img src={post.image} alt={post.title} className="mb-8 h-80 w-full rounded-2xl object-cover" />
          <p className="text-lg leading-8 text-gray-700">{post.content}</p>
          <div className="mt-12">
            <h3 className="font-serif text-2xl text-mydex-green">Related Posts</h3>
            <div className="mt-4 space-y-3">
              {related.map((b) => (
                <Link key={b.slug} to={`/blog/${b.slug}`} className="block text-mydex-gold hover:underline">
                  {b.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
