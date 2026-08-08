import { createProducts } from "../utils/createProduct";

/* Local category image — place your file at:
   src/assets/images/staples.png */
import image from "../../assets/images/staples.png";

const slug = "staples";

export const staplesCategory = {
  slug,
  name: "Staples",
  description: "Cleaned and graded staple foods meeting international standards.",
  image,
};

export const staplesProducts = createProducts(staplesCategory.slug, image, [
  "Chickpea",
  "Lentil",
  "Moong",
  "Toor",
  "Urad",
  "Kidney Bean",
  "Black Eyed Pea",
  "Green Pea",
  "Horse Gram",
  "Masoor",
]);

export default { category: staplesCategory, products: staplesProducts };