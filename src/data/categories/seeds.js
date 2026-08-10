import { createProducts } from "../utils/createProduct";

import categoryImage from "../../assets/images/seeds.png";

import sesameImg     from "../../assets/images/seeds/sesame.png";
import flaxImg       from "../../assets/images/seeds/flax.png";
import chiaImg       from "../../assets/images/seeds/chia.png";
import sunflowerImg  from "../../assets/images/seeds/sunflower.png";
import pumpkinImg    from "../../assets/images/seeds/pumpkin.png";
import mustardImg    from "../../assets/images/seeds/mustard.png";
import fenugreekImg  from "../../assets/images/seeds/fenugreek.png";
import cuminImg      from "../../assets/images/seeds/cumin.png";
import nigerImg      from "../../assets/images/seeds/niger.png";


const slug = "seeds";

export const seedsCategory = {
  slug,
  name: "Seeds",
  description: "High-purity edible and oil seeds for global buyers.",
  image: categoryImage,
};

export const seedsProducts = createProducts(seedsCategory.slug, categoryImage, [
  {
    name: "Sesame",
    image: sesameImg,
    tagline: "Pure. Nutty. Export Grade.",
    description: "Mydex Sesame Seeds are sourced from India's finest growing belts, mechanically cleaned and sortex-processed to remove impurities and admixture. Available in natFirst, Natural and Hulled grades, our sesame seeds meet strict international purity and oil-content standards for bulk and retail buyers.",
    healthBenefits: ["Rich in calcium and iron", "Good source of healthy fats", "Supports bone health", "Contains natural antioxidants"],
    varieties: ["Natural Sesame", "Hulled Sesame", "Roasted Sesame", "Black Sesame"],
    applications: ["Bakery & Confectionery", "Oil Extraction", "Tahini Production", "Retail Packing"],
  },
  {
    name: "Flax",
    image: flaxImg,
    tagline: "Golden or Brown. Naturally Nutrient-Dense.",
    description: "Our flax seeds are cleaned, graded and moisture-tested to ensure consistent quality across every shipment. Rich in omega-3 fatty acids and dietary fiber, Mydex flax seeds are suitable for health food manufacturers, bakeries and nutraceutical companies worldwide.",
    healthBenefits: ["Excellent source of omega-3 fatty acids", "High in dietary fiber", "Supports heart health", "Rich in lignans and antioxidants"],
    varieties: ["Golden Flaxseed", "Brown Flaxseed", "Flaxseed Powder"],
    applications: ["Health Foods", "Bakery", "Nutraceuticals", "Retail Packing"],
  },
  {
    name: "Chia",
    image: chiaImg,
    tagline: "Tiny Seed. Mighty Nutrition.",
    description: "Premium chia seeds sourced and sortex-cleaned to remove foreign matter, ensuring high purity for export. Known for their exceptional fiber and omega-3 content, Mydex chia seeds are ideal for the health food, beverage and supplement industries.",
    healthBenefits: ["High in omega-3 fatty acids", "Rich source of dietary fiber", "Supports sustained energy", "Good source of plant protein"],
    varieties: ["White Chia", "Black Chia"],
    applications: ["Health Foods", "Beverage Industry", "Bakery", "Supplements"],
  },
  {
    name: "Sunflower",
    image: sunflowerImg,
    tagline: "Crunchy. Versatile. Naturally Wholesome.",
    description: "Mydex sunflower seeds are graded for size, colour and shell integrity, available as in-shell or hulled kernels. Processed under hygienic conditions and packed to preserve freshness, they are well suited for snack manufacturers, bakeries and oil processors.",
    healthBenefits: ["Rich in vitamin E", "Good source of healthy fats", "Supports skin and immune health", "Contains magnesium and selenium"],
    varieties: ["In-Shell Sunflower", "Hulled Sunflower Kernel", "Roasted Sunflower Seed"],
    applications: ["Snack Industry", "Bakery", "Oil Extraction", "Retail Packing"],
  },
  {
    name: "Pumpkin",
    image: pumpkinImg,
    tagline: "Green. Protein-Rich. Export Premium.",
    description: "Our pumpkin seeds (pepitas) are cleaned, graded by size and moisture-tested before packing. Naturally hull-free with a rich green colour, Mydex pumpkin seeds are popular among health food brands, snack producers and bakery manufacturers globally.",
    healthBenefits: ["High in plant-based protein", "Rich in magnesium and zinc", "Supports heart and prostate health", "Good source of healthy fats"],
    varieties: ["Whole Pumpkin Seed (Pepitas)", "Roasted Pumpkin Seed", "Salted Pumpkin Seed"],
    applications: ["Health Foods", "Snack Industry", "Bakery", "Retail Packing"],
  },
  {
    name: "Mustard",
    image: mustardImg,
    tagline: "Pungent. Pure. Traditionally Trusted.",
    description: "Mydex mustard seeds are sourced from prime growing regions and sortex-cleaned for purity and uniform size. Available in Yellow and Black varieties with high oil content, they are widely used in oil extraction, spice blending and pickling industries.",
    healthBenefits: ["Rich in selenium and magnesium", "Contains anti-inflammatory compounds", "Supports digestion", "Good source of omega-3 fatty acids"],
    varieties: ["Yellow Mustard", "Black Mustard", "Brown Mustard"],
    applications: ["Oil Extraction", "Spice Blending", "Pickling Industry", "Retail Packing"],
  },
  {
    name: "Fenugreek",
    image: fenugreekImg,
    tagline: "Aromatic. Traditional. Naturally Beneficial.",
    description: "Fenugreek seeds from Mydex are cleaned and graded to remove admixture, delivering consistent aroma and bitterness prized in culinary and Ayurvedic applications. Suitable for spice processors, food manufacturers and herbal supplement companies.",
    healthBenefits: ["Supports digestive health", "Traditionally used to support metabolism", "Rich in dietary fiber", "Contains natural antioxidants"],
    varieties: ["Whole Fenugreek Seed", "Fenugreek Powder"],
    applications: ["Spice Industry", "Ayurvedic Formulations", "Food Processing", "Retail Packing"],
  },
  {
    name: "Cumin Seed",
    image: cuminImg,
    tagline: "Earthy. Aromatic. Kitchen Essential.",
    description: "Our cumin seeds are sourced from Gujarat and Rajasthan's finest belts, sortex-cleaned and graded for size, colour and aroma. Mydex cumin meets strict export quality standards and is available whole or ground for spice manufacturers and food brands worldwide.",
    healthBenefits: ["Aids digestion", "Rich in iron", "Contains antioxidant compounds", "Traditionally supports immunity"],
    varieties: ["Whole Cumin Seed", "Cumin Powder", "Roasted Cumin"],
    applications: ["Spice Industry", "Food Processing", "Retail Packing", "Culinary Blends"],
  },
  {
    name: "Niger Seed",
    image: nigerImg,
    tagline: "Oil-Rich. Reliable. Export Grade.",
    description: "Niger seeds from Mydex are cleaned and moisture-tested to ensure high oil yield and purity. Widely used in oil extraction and as a premium ingredient in bird feed formulations, they are packed to maintain quality across long-distance shipments.",
    healthBenefits: ["High oil content", "Rich in essential fatty acids", "Good source of protein"],
    varieties: ["Raw Niger Seed", "Cleaned Niger Seed"],
    applications: ["Oil Extraction", "Bird Feed Industry", "Food Processing"],
  },
  // {
  //   name: "Poppy Seed",
  //   image: poppyImg,
  //   tagline: "Delicate. Nutty. Premium Quality.",
  //   description: "Mydex poppy seeds are sourced, cleaned and graded for uniform size and colour. Known for their delicate nutty flavour, they are widely used in bakery, confectionery and culinary applications, and are packed to preserve freshness across export shipments.",
  //   healthBenefits: ["Good source of calcium", "Contains healthy fats", "Rich in dietary fiber"],
  //   varieties: ["White Poppy Seed", "Blue Poppy Seed"],
  //   applications: ["Bakery & Confectionery", "Culinary Blends", "Retail Packing", "Food Processing"],
  // },
]);

export default { category: seedsCategory, products: seedsProducts };