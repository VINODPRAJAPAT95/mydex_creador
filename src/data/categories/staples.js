import { createProducts } from "../utils/createProduct";

/* Local category image — place your file at:
   src/assets/images/staples.png */
import image from "../../assets/images/staples.png";

/* Individual product images — place your files at:
   src/assets/images/staples/<name>.png */
import riceImg      from "../../assets/images/staples/rice.png";
import wheatImg      from "../../assets/images/staples/wheat.png";
import pulsesImg     from "../../assets/images/staples/pulses.png";
import chickpeaImg   from "../../assets/images/staples/chickpea.png";
import milletImg     from "../../assets/images/staples/millet.png";
import maizeImg      from "../../assets/images/staples/maize.png";
import sabudanaImg   from "../../assets/images/staples/sabudana.png";

const slug = "staples";

export const staplesCategory = {
  slug,
  name: "Staples",
  description: "Cleaned and graded staple foods meeting international standards.",
  image,
};

export const staplesProducts = createProducts(staplesCategory.slug, image, [
{
  name: "Rice",
  image: riceImg,
  tagline: "One Land. Many Grains. A Heritage of Flavor and Purity.",
  description:
    "Across the lush plains of northern India and the fertile deltas of the south, rice has been more than a crop — it's a way of life, a symbol of abundance, purity, and nourishment. At Mydex International, we bring to the world the finest varieties of Indian Basmati and Non-Basmati Rice, cultivated in the country's most fertile regions under the care of generations of skilled farmers. Each grain tells a story — of the Himalayan-fed waters that nurture Basmati's signature fragrance, and of the tropical monsoons that enrich Non-Basmati varieties with their wholesome texture and flavor. Carefully aged, precisely milled, and hygienically processed using state-of-the-art technology, every batch of Nesbee Rice embodies the essence of Indian tradition and modern excellence. From royal biryanis and global gourmet dishes to everyday meals that feed millions, Nesbee delivers rice that unites taste, nutrition, and trust.",
  varieties: [
    { name: "Basmati Rice", details: "Extra-long grain · Aromatic · Usage: Premium retail, foodservice" },
    { name: "Non-Basmati Rice", details: "Medium/long grain · Everyday cooking · Usage: Bulk retail, catering" },
    { name: "Parboiled Rice", details: "Steam-processed, firm texture · Usage: Retail, institutional supply" },
    { name: "Broken Rice", details: "Fragmented grain, cost-effective · Usage: Food processing, animal feed" },
  ],
  applications: [
    "Used in biryanis, curries, pilaf, and international cuisines",
    "Popular among restaurants, caterers, and households",
    "Packaged for premium retail brands and supermarket chains",
    "Used in instant meals, ready-to-cook products, rice flour, and snacks",
    "100% broken rice for breweries, feed, and flour industries",
    "Available in 1 kg, 5 kg, 10 kg, 25 kg, and 50 kg packs (PP, HDPE, or jute bags)",
    "Custom branding and private labeling available for distributors",
  ],
},
{
  name: "Wheat & Wheat Flour",
  image: wheatImg,
  tagline: "Wholesome. Golden. Nourishing. India's Gift to Global Kitchens.",
  description:
    "Golden fields swaying under the Indian sun tell the story of one of the world's most essential foods — Wheat. For generations, Indian Wheat and Wheat Flour (Atta) have been staples of nutrition, forming the heart of global diets from flatbreads and bakery to breakfast cereals and biscuits. At Mydex International, we export premium-quality wheat and wheat flour, sourced from India's rich agricultural states — Punjab, Haryana, and Madhya Pradesh. Our wheat is carefully milled, machine-cleaned, and naturally processed to preserve fiber, vitamins, and flavor while maintaining international standards of purity and quality. With Nesbee Wheat, you receive more than a grain — you receive the essence of India's nourishment and reliability.",
  varieties: [
    { name: "Whole Wheat", details: "Sortex cleaned, high protein · Usage: Milling, bulk export" },
    { name: "Wheat Flour (Atta)", details: "Stone-ground, fine texture · Usage: Bread, flatbreads, bakery" },
    { name: "Refined Flour (Maida)", details: "Finely milled, low fiber · Usage: Pastry, confectionery" },
    { name: "Semolina (Sooji)", details: "Coarse ground wheat · Usage: Pasta, desserts, snacks" },
  ],
  applications: [
    "Used in chapatis, parathas, and puris",
    "Key ingredient in breads, buns, biscuits, and pastries",
    "Used in pasta, pizza dough, and noodles",
    "Used in ready-to-cook meals and food processing",
    "Flour variants tailored for snacks and bakery mixes",
    "Available in 1 kg, 5 kg, 10 kg, 25 kg, and 50 kg packs",
    "Custom-branded and private-label packaging available",
  ],
},
  {
  name: "Pulses & Lentils",
  image: pulsesImg,
  tagline: "Wholesome Proteins. Pure Energy. Nourishment Rooted in Tradition.",
  description:
    "Colorful, nutrient-rich, and deeply rooted in Indian heritage — Pulses and Lentils are the backbone of Indian and global vegetarian nutrition. For centuries, these humble grains have powered millions with plant-based protein, fiber, and essential minerals, earning their place as one of the world's healthiest food groups. At Mydex International, we export a diverse range of premium Indian pulses and lentils grown across the fertile plains of Madhya Pradesh, Maharashtra, and Rajasthan. Each batch is machine-cleaned, sortex-graded, and purity tested, ensuring superior quality, consistent size, and long shelf life — meeting global export and retail standards. Every bag of Nesbee Pulses & Lentils carries India's agricultural soul — pure, wholesome, and nourishing.",
  varieties: [
    { name: "Toor Dal (Pigeon Pea)", details: "Split, polished · Usage: Everyday cooking, retail" },
    { name: "Moong Dal (Green Gram)", details: "Split/whole options · Usage: Soups, sprouts, retail" },
    { name: "Chana Dal", details: "Split Bengal gram · Usage: Curries, snacks, flour milling" },
    { name: "Urad Dal", details: "Split/whole, black gram · Usage: South Indian cuisine, batters" },
    { name: "Masoor Dal (Red Lentil)", details: "Split, fast-cooking · Usage: Soups, retail packs" },
  ],
  applications: [
    "Used in soups, curries, and salads",
    "Ground into flours for snacks and batters",
    "Used in packaged foods and instant meal kits",
    "Used in ready-to-eat meals, snacks, and protein blends",
    "Ground into besan (gram flour) for confectionery and frying mixes",
    "Available in 500 g, 1 kg, 5 kg, 25 kg, and 50 kg packaging",
    "Custom-branded and private-label options for global buyers",
  ],
},
{
  name: "Chickpeas (Kabuli & Desi)",
  image: chickpeaImg,
  tagline: "Pure Protein. Global Taste. India's Gift of Natural Nutrition.",
  description:
    "Round, golden, and full of nourishment — Indian Chickpeas (Chana) stand as one of the most versatile and protein-rich legumes in the world. From the creamy hummus bowls of the Mediterranean to the spicy curries of India, chickpeas have nourished generations across continents. At Mydex International, we export both Kabuli Chickpeas (White Chana) and Desi Chickpeas (Brown Chana) — sourced from India's prime agricultural regions of Madhya Pradesh, Rajasthan, and Maharashtra. Our chickpeas are machine-cleaned, sortex-graded, and naturally dried to retain purity, nutritional value, and shelf stability. Nesbee Chickpeas combine India's agricultural authenticity with modern global standards — pure, powerful, and naturally plant-based.",
  varieties: [
    { name: "Kabuli Chickpea", scientificName: "White Chana", details: "Large, cream-colored · Usage: Hummus, retail, canning" },
    { name: "Desi Chickpea", scientificName: "Brown Chana", details: "Smaller, darker seed coat · Usage: Curries, flour milling" },
    { name: "Chickpea Flour (Besan)", details: "Finely milled · Usage: Snacks, bakery, batters" },
  ],
  applications: [
    "Used in curries, stews, soups, and salads",
    "Ground into flour for besan (used in snacks, sweets, and batters)",
    "Key ingredient in hummus, falafel, and plant-based protein meals",
    "Used in canned and ready-to-eat food production",
    "Ground into protein flour and gluten-free baking mixes",
    "Available in 1 kg to 50 kg PP / jute bags",
    "Private labeling and custom packaging available",
  ],
},
{
  name: "Millets & Grains",
  image: milletImg,
  tagline: "Wholesome Tradition. Modern Nutrition. The Future of Healthy Eating.",
  description:
    "Centuries before the world discovered \"superfoods,\" India was already growing them. Millets and ancient grains — humble yet mighty — have long sustained Indian communities with their rich nutrition, resilience, and versatility. Today, these traditional grains are making a global comeback as natural, gluten-free, and sustainable alternatives to refined cereals. At Mydex International, we proudly export a diverse range of Indian Millets and Grains, cultivated in the drylands of Karnataka, Maharashtra, and Rajasthan using sustainable and chemical-free methods. Each batch is machine-cleaned, sortex-graded, and purity tested to meet the highest global food safety standards. With Nesbee Millets & Grains, the world rediscovers India's ancient gift of balanced nutrition and mindful living.",
  varieties: [
    { name: "Pearl Millet (Bajra)", details: "Whole grain · High iron content · Usage: Flatbreads, retail" },
    { name: "Sorghum (Jowar)", details: "Gluten-free grain · Usage: Flour milling, health foods" },
    { name: "Finger Millet (Ragi)", details: "High calcium content · Usage: Porridge, bakery, infant food" },
    { name: "Foxtail Millet", details: "Small grain, low glycemic index · Usage: Health foods, cereals" },
  ],
  applications: [
    "Used in rotis, porridges, breakfast cereals, and protein snacks",
    "Ground into flour for gluten-free baking and mixes",
    "Key ingredient in vegan, organic, and superfood blends",
    "Used in ready-to-eat foods, baby nutrition, and energy bars",
    "Incorporated in pet and livestock feed for balanced nutrition",
    "Offered in 500 g to 50 kg packaging (PP / jute / private-label)",
    "Customized branding available for export buyers",
  ],
},
{
  name: "Maize (Corn)",
  image: maizeImg,
  tagline: "Golden Goodness. Infinite Uses. India's Corn for the World.",
  description:
    "Bright, golden, and brimming with nutrition — Indian Maize (Corn) is one of the world's most versatile grains, connecting farms to food industries across continents. From traditional meals to modern food processing, maize stands as a symbol of sustainability, taste, and nourishment. At Mydex International, we export premium-quality Indian maize, cultivated in the fertile lands of Karnataka, Madhya Pradesh, and Maharashtra. Our maize is machine-cleaned, sortex-graded, and moisture-tested, ensuring uniform size, bright color, and long shelf life — making it suitable for food, feed, and industrial applications. With Nesbee Maize, every kernel reflects India's agricultural excellence and the world's growing demand for clean, natural nutrition.",
  varieties: [
    { name: "Yellow Maize", details: "High starch content · Usage: Animal feed, food processing" },
    { name: "White Maize", details: "Mild flavor · Usage: Flour milling, snacks" },
    { name: "Maize Flour", details: "Finely ground · Usage: Bakery, porridge, snack production" },
  ],
  applications: [
    "Used in cornflakes, soups, snacks, and tortillas",
    "Ground into flour for bakery and breakfast products",
    "Processed into starch, glucose, and syrup for beverages and confectionery",
    "Major component in poultry, cattle, and aquaculture feed",
    "Provides high energy and digestible carbohydrates",
    "Used in ethanol production and bio-based materials",
    "Raw material for starch, alcohol, and fermentation industries",
  ],
},
{
  name: "Sabudana (Sago)",
  image: sabudanaImg,
  tagline: "Pure Pearls of Tradition. Light on the Body, Rich in Trust.",
  description:
    "Soft, translucent, and deeply rooted in Indian tradition — Sabudana (Sago) is one of the most trusted staples during fasting seasons and festive kitchens across the country. Extracted from the starch of the tapioca root, these delicate pearls are prized for their light texture, easy digestibility, and ability to transform into everything from crispy snacks to comforting khichdi. At Mydex International, we export premium-quality sabudana processed in India's leading tapioca-growing regions of Tamil Nadu and Andhra Pradesh, where ideal soil and climate conditions yield starch of exceptional purity. Each batch is washed, dried, and graded under strict hygiene standards to ensure uniform pearl size, clean white color, and consistent cooking performance. With Nesbee Sabudana, every pearl carries the trust of generations — pure, wholesome, and reliably consistent.",
  varieties: [
    { name: "Small Sabudana Pearls", details: "Fine pearl size · Usage: Khichdi, porridge, retail" },
    { name: "Large Sabudana Pearls", details: "Bold pearl size · Usage: Snacks, papad, confectionery" },
    { name: "Sabudana Powder", details: "Finely ground starch · Usage: Food processing, thickening agent" },
    { name: "Organic", details: "Grown and processed without synthetic inputs · Usage: Clean-label retail export" },
  ],
  applications: [
    "Used in khichdi, porridge, and traditional fasting meals",
    "Fried into crispy snacks, papad, and namkeen",
    "Ground into starch for thickening soups, gravies, and sauces",
    "Used in bakery and confectionery as a natural binding agent",
    "Processed into starch derivatives for industrial food applications",
    "Available in 500 g to 50 kg packaging (PP / jute / private-label)",
    "Custom branding and private-label options for global buyers",
  ],
},
]);

export default { category: staplesCategory, products: staplesProducts };