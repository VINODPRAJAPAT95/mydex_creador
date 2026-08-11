import { Link } from "react-router-dom";
import Button from "./ui/Button";

const ProductCard = ({ product }) => (
  <article className="group relative w-full">
    {/* ===== MOBILE VIEW ===== */}
    <div className="sm:hidden flex flex-col items-center text-center bg-[#eef1fb] rounded-2xl p-2.5 h-full">
      <div className="h-16 w-16 mb-2 flex items-center justify-center flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-contain"
        />
      </div>

      <h3 className="text-xs font-bold leading-[1.2] text-gray-800 line-clamp-2 min-h-[28px] flex items-center justify-center px-0.5">
        {product.name}
      </h3>

      <div className="mt-2 flex flex-col gap-1 w-full">
        <Link
          to={`/products/${product.category}/${product.slug}`}
          className="w-full rounded-md bg-mydex-gold px-2 py-1.5 text-[10px] font-semibold text-white text-center leading-none"
        >
          View Details
        </Link>
        <Link
          to="/get-quote"
          className="w-full rounded-md border border-mydex-gold px-2 py-1.5 text-[10px] font-semibold text-mydex-gold text-center leading-none"
        >
          Get Quote
        </Link>
      </div>
    </div>

    {/* ===== DESKTOP VIEW ===== */}
    <div className="hidden sm:block relative overflow-hidden rounded-2xl transition-all duration-500 ease-out hover:-translate-y-2 animate-fade-up">
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

      <div className="relative z-10 rounded-xl border border-mydex-gold/20 p-5 transition-colors duration-300 group-hover:border-mydex-gold/40">
        <h3 className="font-serif text-xl font-bold text-mydex-green transition-colors duration-300 group-hover:text-mydex-gold line-clamp-2 min-h-[3.5rem]">
          {product.name}
        </h3>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2">{product.short}</p>

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

      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[2px] w-0 bg-mydex-gold transition-all duration-500 ease-out group-hover:w-full"
      />
    </div>
  </article>
);

export default ProductCard;