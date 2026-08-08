import { createProducts } from "../utils/createProduct";

/* Local category image — place your file at:
   src/assets/images/seeds.png */
import image from "../../assets/images/seeds.png";

const slug = "seeds";

export const seedsCategory = {
  slug,
  name: "Seeds",
  description: "High-purity edible and oil seeds for global buyers.",
  image,
};

export const seedsProducts = createProducts(seedsCategory.slug, image, [
  "Sesame",
  "Flax",
  "Chia",
  "Sunflower",
  "Pumpkin",
  "Mustard",
  "Fenugreek",
  "Cumin Seed",
  "Niger Seed",
  "Poppy Seed",
]);

export default { category: seedsCategory, products: seedsProducts };