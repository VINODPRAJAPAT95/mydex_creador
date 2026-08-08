import { createProducts } from "../utils/createProduct";

/* Local category image — place your file at:
   src/assets/images/herbs.png */
import image from "../../assets/images/herbs.png";

const slug = "herbs";

export const herbsCategory = {
  slug,
  name: "Herbs",
  description: "Naturally sourced herbs for culinary and wellness markets.",
  image,
};

export const herbsProducts = createProducts(herbsCategory.slug, image, [
  "Basil",
  "Oregano",
  "Thyme",
  "Rosemary",
  "Mint",
  "Parsley",
  "Sage",
  "Lemongrass",
  "Bay Leaf",
  "Chamomile",
]);

export default { category: herbsCategory, products: herbsProducts };