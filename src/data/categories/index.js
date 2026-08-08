import salt from "./salt";
import dryFruits from "./dryFruits";
import herbs from "./herbs";
import staples from "./staples";
import seeds from "./seeds";
import spices from "./spices";

export const categoryModules = [
  dryFruits,
  spices,
  herbs,
  seeds,
  staples,
  salt,
];

export const productCategories = categoryModules.map((item) => item.category);

export const productsByCategory = Object.fromEntries(
  categoryModules.map((item) => [item.category.slug, item.products])
);

export const allProducts = categoryModules.flatMap((item) => item.products);

export {
  dryFruits,
  spices,
  herbs,
  seeds,
  staples,
  salt,
};