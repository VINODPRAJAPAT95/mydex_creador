import { createProducts } from "../utils/createProduct";

/* Local category image — place your file at:
   src/assets/images/salt.png */
import image from "../../assets/images/salt.png";

const slug = "salt";

export const saltCategory = {
  slug,
  name: "Salt",
  description: "Premium edible and industrial-grade salt for global markets.",
  image,
};

export const saltProducts = createProducts(saltCategory.slug, image, [
  "Rock Salt",
  "Sea Salt",
  "Table Salt",
  "Himalayan Pink Salt",
  "Iodized Salt",
  "Black Salt",
  "Coarse Salt",
  "Refined Salt",
  "Industrial Salt",
  "Bath Salt",
]);

export default { category: saltCategory, products: saltProducts };