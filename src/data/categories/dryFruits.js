import { createProducts } from "../utils/createProduct";

/* Local category image — place your file at:
   src/assets/images/dry-fruits.png */
import image from "../../assets/images/dry-fruits.png";

const slug = "dry-fruits";

export const dryFruitsCategory = {
  slug,
  name: "Dry Fruits",
  description: "Premium almonds, cashews, pistachios and more — export grade.",
  image,
};

export const dryFruitsProducts = createProducts(dryFruitsCategory.slug, image, [
  "Almond",
  "Cashew",
  "Pistachio",
  "Walnut",
  "Raisin",
  "Fig",
  "Dates",
  "Apricot",
  "Hazelnut",
  "Macadamia",
]);

export default { category: dryFruitsCategory, products: dryFruitsProducts };