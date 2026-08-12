import { createProducts } from "../utils/createProduct";

import categoryImage from "../../assets/images/seeds.png";

import sesameImg     from "../../assets/images/seeds/sesame.png";
import flaxImg       from "../../assets/images/seeds/flax.png";
import chiaImg       from "../../assets/images/seeds/chia.png";
import sunflowerImg  from "../../assets/images/seeds/sunflower.png";
import pumpkinImg    from "../../assets/images/seeds/pumpkin.png";
import mustardImg    from "../../assets/images/seeds/mustard.png";
import fenugreekImg  from "../../assets/images/seeds/fenugreek.png";
// import cuminImg      from "../../assets/images/seeds/cumin.png";
import nigerImg      from "../../assets/images/seeds/niger.png";
import melonImg      from "../../assets/images/seeds/melon.png";
import peanutSeed     from "../../assets/images/seeds/peanut.png";


const slug = "seeds";

export const seedsCategory = {
  slug,
  name: "Seeds",
  description: "High-purity edible and oil seeds for global buyers.",
  image: categoryImage,
};

export const seedsProducts = createProducts(seedsCategory.slug, categoryImage, [
{
  name: "Sesame Seeds",
  image: sesameImg,
  tagline: "Nutty Aroma. Timeless Nutrition. From India's Rich Soil to Global Tables.",
  description: "Tiny yet mighty — Indian Sesame Seeds (Til) are among the world's oldest cultivated crops, celebrated for their nutty flavor, rich oil content, and exceptional nutrition. These golden seeds are a symbol of purity, prosperity, and natural wellness, finding their way into cuisines, oils, and health supplements worldwide. At Mydex International, we export a full range of premium-quality sesame seeds — white, black, hulled, and roasted varieties — sourced from India's fertile farmlands in Gujarat, Rajasthan, and Madhya Pradesh. Each batch is machine-cleaned, sortex-graded, and laboratory-tested to ensure purity, uniform color, and rich oil yield — perfectly suited for global food and oil industries. Every Mydex sesame seed tells a story of tradition, nutrition, and trust — cultivated naturally and processed with care.",
  healthBenefits: ["Rich in calcium and iron", "Good source of healthy fats", "Supports bone health", "Contains natural antioxidants"],
  varieties: [
    { name: "Natural Sesame", details: "Purity: 99% · Creamy white color · Usage: Bakery, tahini, oil extraction" },
    { name: "Hulled Sesame", details: "Outer hull removed · Bright ivory kernel · Usage: Confectionery, snacks" },
    { name: "Roasted Sesame", details: "Dry roasted, nutty aroma · Usage: Garnish, snack seasoning" },
    { name: "Black Sesame", details: "Rich in antioxidants · Deep black hue · Usage: Asian cuisine, oil, bakery" },
  ],
  applications: [
    "Bakery, Confectionery & Snacks",
    "Tahini, Hummus & Asian Recipes",
    "Cold-Pressed & Refined Sesame Oil",
    "Cosmetics, Aromatherapy & Pharmaceuticals",
    "Nutraceuticals & Nutrition Bars",
  ],
},
{
  name: "Flax Seeds(Alsi)",
  image: flaxImg,
  tagline: "Tiny Seeds. Tremendous Nutrition. The Power of Indian Wellness.",
  description: "Smooth, nutty, and nutrient-dense — Indian Flax Seeds (Alsi) are celebrated worldwide as a superfood rich in omega-3 fatty acids, fiber, and plant-based protein. From ancient Ayurvedic use to modern health supplements, flax seeds have been revered for promoting heart health, digestion, and natural energy. At Mydex International, we export premium-grade Indian flax seeds cultivated in the fertile soils of Madhya Pradesh, Rajasthan, and Gujarat. Each batch is machine-cleaned, sortex-graded, and purity tested, ensuring a consistent supply of seeds that meet international food and nutraceutical standards. Mydex Flax Seeds represent India's perfect blend of traditional nutrition and global quality — pure, natural, and powerful.",
  healthBenefits: ["Excellent source of omega-3 fatty acids", "High in dietary fiber", "Supports heart health", "Rich in lignans and antioxidants"],
  varieties: [
    { name: "Golden Flaxseed", details: "Light golden hue · Mild nutty flavor · Usage: Smoothies, baked goods" },
    { name: "Brown Flaxseed", details: "Reddish-brown color · High oil content · Usage: Cereals, health bars" },
    { name: "Flaxseed Powder", details: "Finely milled · High lignan content · Usage: Supplements, vegan egg substitute" },
  ],
  applications: [
    "Smoothies, Granola & Baked Goods",
    "Cereals, Health Bars & Protein Shakes",
    "Vegan Egg Substitute",
    "Cold-Pressed Flaxseed Oil & Capsules",
    "Linseed Oil for Industrial Use",
    "Dietary Supplements & Herbal Formulations",
    "Omega-3 Skincare & Wellness Products",
  ],
},
{
  name: "Chia Seeds",
  image: chiaImg,
  tagline: "Tiny Seed. Boundless Energy. India's Modern Superfood.",
  description: "Small, dense, and powerfully nutritious — Chia Seeds have earned global recognition as one of the world's leading superfoods, celebrated for their exceptional omega-3 content, dietary fiber, and plant-based protein. From ancient wellness traditions to modern smoothie bowls and health drinks, chia seeds have become a everyday essential for health-conscious consumers worldwide. At Mydex International, we export premium-grade chia seeds sourced and sortex-cleaned to remove foreign matter, ensuring exceptional purity for international markets. Each batch is quality-tested for consistency in color, moisture, and nutrient content, meeting the standards of global food and nutraceutical industries. Mydex Chia Seeds combine nature's nutrition with export-grade reliability — pure, wholesome, and trusted across the world.",
  healthBenefits: ["High in omega-3 fatty acids", "Rich source of dietary fiber", "Supports sustained energy", "Good source of plant protein"],
  varieties: [
    { name: "White Chia", details: "Ivory-white seed · Mild flavor · Usage: Smoothies, health drinks" },
    { name: "Black Chia", details: "Dark speckled seed · High antioxidant content · Usage: Bakery, protein bars" },
  ],
  applications: [
    "Smoothies & Health Drinks",
    "Granola & Breakfast Cereals",
    "Bakery & Protein Bars",
    "Beverage Industry",
    "Dietary Supplements",
    "Vegan & Fitness Nutrition",
  ],
},
 {
  name: "Sunflower Seeds",
  image: sunflowerImg,
  tagline: "Crisp, Nutritious & Naturally Bright. India's Source of Pure Wellness.",
  description: "Golden, wholesome, and full of vitality — Indian Sunflower Seeds are nature's gift of nourishment and natural energy. Known for their light texture and rich oil content, these seeds are a global favorite for heart-healthy oils, protein snacks, and nutrient-rich foods. At Mydex International, we export high-quality sunflower seeds grown in India's sun-drenched agricultural heartlands of Karnataka, Maharashtra, and Madhya Pradesh. Each seed is cleaned, sorted, and processed under hygienic conditions, ensuring consistency in size, oil yield, and purity. Whether you're a food manufacturer, oil refiner, or health brand, Mydex Sunflower Seeds deliver the perfect balance of nutrition, versatility, and quality.",
  healthBenefits: ["Rich in vitamin E", "Good source of healthy fats", "Supports skin and immune health", "Contains magnesium and selenium"],
  varieties: [
    { name: "In-Shell Sunflower", details: "Natural black & white striped shell · Usage: Roasted snacking" },
    { name: "Hulled Sunflower Kernel", details: "Shell removed, ivory kernel · Usage: Bakery, salads, oil extraction" },
    { name: "Roasted Sunflower Seed", details: "Dry roasted, crisp texture · Usage: Snack products, energy bars" },
  ],
  applications: [
    "Bakery, Cereals & Salads",
    "Health Bars & Snack Products",
    "Vegan & Protein-Based Foods",
    "Cold-Pressed Sunflower Oil",
    "Margarine, Soap & Skincare",
    "Energy Bars & Organic Blends",
  ],
},
{
  name: "Pumpkin Seeds",
  image: pumpkinImg,
  tagline: "Green Goodness. Packed with Power. India's Superfood Seed.",
  description: "Vibrant, crunchy, and naturally green — Indian Pumpkin Seeds (Pepitas) are celebrated globally as a nutrient-dense superfood, prized for their high protein content, healthy fats, and rich mineral profile. From ancient culinary traditions to modern health food trends, pumpkin seeds have earned their place as a staple in wellness diets worldwide. At Mydex International, we export premium-grade pumpkin seeds sourced from India's fertile agricultural belts, carefully selected for their natural hull-free quality, uniform size, and vivid green color. Each batch is cleaned, graded, and moisture-tested to ensure freshness, purity, and consistency that meet international food safety standards. Mydex Pumpkin Seeds deliver India's agricultural excellence in every bite — nutritious, versatile, and globally trusted.",
  healthBenefits: ["High in plant-based protein", "Rich in magnesium and zinc", "Supports heart and prostate health", "Good source of healthy fats"],
  varieties: [
    { name: "Whole Pumpkin Seed (Pepitas)", details: "Hull-free, vivid green · Usage: Salads, granola toppings" },
    { name: "Roasted Pumpkin Seed", details: "Dry roasted, crunchy texture · Usage: Snacking, trail mix" },
    { name: "Salted Pumpkin Seed", details: "Lightly salted, ready-to-eat · Usage: Retail snack packs" },
  ],
  applications: [
    "Health Foods & Nutrition Bars",
    "Roasted & Flavored Snacks",
    "Bakery & Confectionery",
    "Salads & Granola Toppings",
    "Cold-Pressed Pumpkin Seed Oil",
    "Retail & Bulk Packing",
  ],
},
{
  name: "Mustard Seeds",
  image: mustardImg,
  tagline: "Small in Size, Big in Flavor.",
  description: "Pungent, powerful, and full of personality — Indian Mustard Seeds (Rai) are among the most cherished spices across global cuisines. From sizzling Indian curries to tangy European mustards, these tiny seeds pack a punch of flavor that brings dishes to life. At Mydex International, we source and export premium-quality mustard seeds grown in India's leading agricultural regions — Rajasthan, Gujarat, and Madhya Pradesh. Each batch is meticulously cleaned, sorted, and tested, ensuring perfect aroma, oil content, and purity that meet the standards of the global spice trade. With Mydex International, every mustard seed carries the authentic essence of India — robust, earthy, and full of character.",
  healthBenefits: ["Rich in selenium and magnesium", "Contains anti-inflammatory compounds", "Supports digestion", "Good source of omega-3 fatty acids"],
  varieties: [
    { name: "Yellow Mustard", details: "Mild pungency, golden color · Usage: Sauces, condiments" },
    { name: "Black Mustard", details: "Sharp pungency, dark seed · Usage: Tempering, oil extraction" },
    { name: "Brown Mustard", details: "Medium pungency · Usage: Pickles, paste production" },
  ],
  applications: [
    "Tempering & Seasoning",
    "Sauces, Pickles & Condiments",
    "Mustard Paste & Oil Production",
    "Cooking & Massage Oil Extraction",
    "Herbal & Detox Formulations",
    "Preservative & Flavoring Industry",
    "Skincare & Haircare Oils",
  ],
},
{
  name: "Castor Seeds",
  image: fenugreekImg,
  tagline: "Strong Roots. Sustainable Oils. India's Engine of Natural Innovation.",
  description: "From ancient Ayurveda to modern industry, Indian Castor Seeds have stood the test of time as one of the most versatile and valuable oilseeds on Earth. Known for their exceptionally high ricinoleic acid content, castor seeds are used globally in pharmaceuticals, lubricants, cosmetics, and bio-based manufacturing. At Mydex International, we export premium-grade Indian castor seeds cultivated in Gujarat, Rajasthan, and Andhra Pradesh — regions that account for over 80% of the world's castor production. Our castor seeds are machine-cleaned, sortex-graded, and rigorously tested for purity, oil yield, and moisture content to meet the demands of industries across Europe, Asia, and the Middle East. Each Mydex Castor Seed embodies India's excellence in sustainability, innovation, and natural resource management.",
  healthBenefits: ["Supports digestive health", "Traditionally used to support metabolism", "Rich in dietary fiber", "Contains natural antioxidants"],
  varieties: [
    { name: "Whole Castor Seed", details: "High ricinoleic acid content · Usage: Cold-pressing, oil extraction" },
    { name: "Castor Oil Grade Seed", details: "Sortex-graded, low moisture · Usage: Pharmaceutical & industrial oil" },
  ],
  applications: [
    "Lubricants, Hydraulic Fluids & Coatings",
    "Biodiesel & Oil Derivatives",
    "Laxatives, Pain Balms & Capsules",
    "Skincare & Haircare Formulations",
    "Moisturizers & Lip Balms",
    "Cosmetic Thickener & Emollient",
  ],
},
 {
  name: "Melon Seeds",
  image: melonImg,
  tagline: "Light, Nutty & Naturally Nourishing. India's Little Seed of Wellness.",
  description: "Delicate, creamy-white, and subtly sweet — Indian Melon Seeds are a treasured ingredient in traditional kitchens and modern health foods alike. Prized for their rich protein content, healthy fats, and mild nutty flavor, these seeds are a versatile addition to snacks, spice blends, and confectionery worldwide. At Mydex International, we export premium-grade melon seeds sourced from the fertile farmlands of Gujarat and Rajasthan, regions known for producing seeds of exceptional size, color, and purity. Each batch is sortex-cleaned, graded, and quality-tested to meet the standards of global food and spice industries. Mydex Melon Seeds bring together India's culinary heritage and export-grade quality — pure, wholesome, and trusted worldwide.",
  healthBenefits: ["Aids digestion", "Rich in iron", "Contains antioxidant compounds", "Traditionally supports immunity"],
  varieties: [
    { name: "Whole Melon Seed", details: "Creamy-white, uniform size · Usage: Spice blends, garnishing" },
    { name: "Melon Powder", details: "Finely ground · Usage: Health foods, nutrition bars" },
    { name: "Roasted Melon", details: "Dry roasted, nutty aroma · Usage: Flavored snacks, confectionery" },
  ],
  applications: [
    "Spice Blends & Seasonings",
    "Bakery & Confectionery",
    "Roasted & Flavored Snacks",
    "Culinary Garnishing",
    "Health Foods & Nutrition Bars",
    "Food Processing Industry",
  ],
},
{
  name: "Niger Seed",
  image: nigerImg,
  tagline: "Tiny in Size. Rich in Nutrition. India's Hidden Oil Treasure.",
  description: "Humble yet extraordinary — Indian Niger Seeds (Guizotia abyssinica) are one of nature's most underrated oilseeds, known for their high oil content, unique nutty flavor, and exceptional nutritional value. These small black seeds are rich in linoleic acid, antioxidants, and essential minerals, making them a vital ingredient in edible oil extraction, health foods, and premium bird feed across the world. At Mydex International, we export premium-grade Niger Seeds sourced from India's pristine farmlands in Madhya Pradesh, Chhattisgarh, and Odisha. Our seeds are machine-cleaned, sortex-graded, and purity tested to ensure maximum oil yield, freshness, and quality consistency for global industries. Every shipment of Mydex Niger Seeds carries India's promise of purity, sustainability, and excellence.",
  healthBenefits: ["High oil content", "Rich in essential fatty acids", "Good source of protein"],
  varieties: [
    { name: "Raw Niger Seed", details: "Small black seed, high oil content · Usage: Bird feed, oil extraction" },
    { name: "Cleaned Niger Seed", details: "Sortex cleaned, low foreign matter · Usage: Premium oil, retail feed" },
  ],
  applications: [
    "Cold-Pressed Niger Oil",
    "Salad Dressings & Seasoning Oils",
    "Traditional Roasted Snacks",
    "Premium Bird Feed Formulations",
    "Livestock Feed",
    "Bio-Lubricants & Natural Soaps",
    "Organic Oils & Herbal Supplements",
  ],
},
{
  name: "Peanut Seeds",
  image: peanutSeed ,
  tagline: "Wholesome Energy. Natural Protein. Grown with Indian Pride.",
  description: "Crunchy, nourishing, and naturally rich — Indian Groundnut (Peanuts) are one of the most versatile and valuable oilseeds in the world. Loved for their high protein content, healthy fats, and irresistible flavor, peanuts are a cornerstone of global diets and industries — from snack manufacturing to cold-pressed oils. At Mydex International, we export premium-grade Indian groundnuts grown in the fertile plains of Gujarat, Tamil Nadu, and Andhra Pradesh, regions renowned for producing peanuts of exceptional taste, size, and oil yield. Each nut is machine-cleaned, graded, and tested to meet international standards for purity, flavor, and shelf life. Mydex Groundnuts deliver India's agricultural excellence in every bite — pure, nutritious, and globally trusted.",
  healthBenefits: ["Good source of calcium", "Contains healthy fats", "Rich in dietary fiber"],
  varieties: [
    { name: "White Peanut Seed", details: "Bold kernel, high oil yield · Usage: Peanut butter, roasted snacks" },
    { name: "Blue Peanut Seed", details: "Premium bold variety · Usage: Confectionery, export retail packs" },
  ],
  applications: [
    "Peanut Butter, Candies & Bakery Products",
    "Roasted & Flavored Snacking",
    "Curries, Sauces & Asian Cuisines",
    "Cold-Pressed & Refined Peanut Oil",
    "Cosmetics, Soaps & Lubricants",
    "Protein Supplements & Animal Feed",
  ],
},
]);

export default { category: seedsCategory, products: seedsProducts };