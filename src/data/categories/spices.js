import { createProducts } from "../utils/createProduct";

/* Local category image — place your file at:
   src/assets/images/spices.png */
import image from "../../assets/images/spices.png";

const slug = "spices";

export const spicesCategory = {
  slug,
  name: "Spices",
  description: "Authentic Indian spices with rich aroma and consistent quality.",
  image,
};

export const spicesProducts = createProducts(spicesCategory.slug, image, [
  "Turmeric",
  "Cumin",
  "Cardamom",
  "Black Pepper",
  "Coriander",
  "Clove",
  "Cinnamon",
  "Fennel",
  "Chili",
  "Saffron",
]);

export default { category: spicesCategory, products: spicesProducts };