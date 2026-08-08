import { Link } from "react-router-dom";
import Button from "./ui/Button";

const ProductCard = ({ product }) => (
  <article className="card-lux overflow-hidden p-0 transition hover:-translate-y-1 hover:shadow-gold">
    <img src={product.image} alt={product.name} className="h-48 w-full object-cover" loading="lazy" />
    <div className="p-5">
      <h3 className="font-serif text-xl text-mydex-green">{product.name}</h3>
      <p className="mt-2 text-sm text-gray-600">{product.short}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Button to={`/products/${product.category}/${product.slug}`} variant="gold" className="!px-4 !py-2 !text-xs">
          View Details
        </Button>
        <Button to="/get-quote" variant="outline" className="!px-4 !py-2 !text-xs">
          Request Quote
        </Button>
      </div>
    </div>
  </article>
);

export default ProductCard;
