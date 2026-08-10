import { Link } from "react-router-dom";
import Button from "./ui/Button";

const ProductCard = ({ product }) => (
  <article
    className="group relative overflow-hidden rounded-2xl p-0
               transition-all duration-500 ease-out
               hover:-translate-y-2
               animate-fade-up"
  >
    {/* Image area — no background, no border, image only */}
    <div className="relative h-52 w-full overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        className="relative z-10 h-full w-full object-contain
                   transition-transform duration-500 ease-out
                   group-hover:scale-110 group-hover:rotate-1"
      />
    </div>

    {/* Text area — keeps border */}
    <div className="relative z-10 rounded-xl border border-mydex-gold/20 p-5 transition-colors duration-300 group-hover:border-mydex-gold/40">
      <h3 className="font-serif text-xl text-mydex-green transition-colors duration-300 group-hover:text-mydex-gold">
        {product.name}
      </h3>
      <p className="mt-2 text-sm text-gray-600 leading-relaxed">{product.short}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        <Button
          to={`/products/${product.category}/${product.slug}`}
          variant="gold"
          className="!px-4 !py-2 !text-xs !text-white transition-transform duration-300 hover:scale-105"
        >
          View Details
        </Button>
        <Button
          to="/get-quote"
          variant="outline"
          className="!px-4 !py-2 !text-xs transition-transform duration-300 hover:scale-105"
        >
          Request Quote
        </Button>
      </div>
    </div>

    {/* animated bottom accent line */}
    <span
      aria-hidden="true"
      className="absolute bottom-0 left-0 h-[2px] w-0 bg-mydex-gold transition-all duration-500 ease-out group-hover:w-full"
    />
  </article>
);

export default ProductCard;