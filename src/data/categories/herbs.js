import { createProducts } from "../utils/createProduct";

import categoryImage from "../../assets/images/herbs.png";

import basilLeavesImg   from "../../assets/images/herbs/basil-leaves.png";
import amlaImg          from "../../assets/images/herbs/amla.png";
import psylliumHuskImg  from "../../assets/images/herbs/psyllium-husk.png";
import fenugreekImg     from "../../assets/images/herbs/fenugreek-leaves.png";
import cassiaTOraImg    from "../../assets/images/herbs/cassia-tora.png";
import rosePetalsImg    from "../../assets/images/herbs/rose-petals.png";
import psylliumSeedImg  from "../../assets/images/herbs/psyllium-seeds.png";
import basilSeedsImg    from "../../assets/images/herbs/basil-seeds.png";

const slug = "herbs";

export const herbsCategory = {
  slug,
  name: "Herbs",
  description: "Naturally sourced herbs for culinary and wellness markets.",
  image: categoryImage,
};

export const herbsProducts = createProducts(herbsCategory.slug, categoryImage, [
{
    name: "Basil Leaves (Tulsi)",
    image: basilLeavesImg,
    tagline: "Pure Aroma. Divine Healing. Timeless Indian Wisdom.",
    description:
      "Pure Aroma. Divine Healing. Timeless Indian Wisdom.\n\nRevered as the \"Queen of Herbs,\" Indian Basil (Tulsi) is more than a plant — it's a sacred symbol of purity, vitality, and natural healing. For centuries, Tulsi has been at the heart of Indian homes and Ayurveda, valued for its antioxidant, antimicrobial, and adaptogenic properties.\n\nAt Mydex International, we export premium-quality dried basil leaves grown in India's fertile plains under natural sunlight and organic care.\n\nOur basil leaves are shade-dried and hand-selected to preserve their vibrant green color, therapeutic oils, and fragrant essence.\n\nFrom herbal teas to cosmetic formulations, Nesbee Tulsi stands as a mark of authenticity — a perfect fusion of tradition, science, and sustainability.",
    healthBenefits: [
      "Rich in antioxidants",
      "Antimicrobial properties",
      "Adaptogenic — supports stress resilience",
      "Boosts immunity and aids digestion",
    ],
    varieties: [
      { name: "Rama Tulsi", details: "Green Basil · Most common variety · High eugenol content · Usage: Herbal teas, tonics, Ayurvedic formulations" },
      { name: "Krishna Tulsi", details: "Purple Basil · Deep purple leaves · Strong clove-like aroma · Usage: Medicinal extracts, premium herbal blends" },
      { name: "Vana Tulsi", details: "Wild Basil · Forest-grown, highly aromatic · Usage: Essential oils, therapeutic teas, wellness products" },
      { name: "General", details: "Mixed/standard grade · Shade-dried whole leaf · Usage: Bulk export, seasoning, capsules, spice blends" },
    ],
    applications: [
      "Culinary — Herbal teas, soups, and seasoning mixes; flavoring sauces, pasta, and infused oils",
      "Pharmaceutical & Ayurvedic — Used in herbal tonics, immunity boosters, and supplements; key ingredient in cough syrups, tinctures, and Ayurvedic capsules",
      "Cosmetic & Wellness — Used in skincare products for acne control and rejuvenation; extracted for essential oils used in perfumes and aromatherapy",
    ],
    applicationDetails: [
      {
        title: "Culinary Uses",
        points: [
          "Herbal teas, soups, and seasoning mixes",
          "Flavoring sauces, pasta, and infused oils",
        ],
      },
      {
        title: "Pharmaceutical & Ayurvedic Uses",
        points: [
          "Used in herbal tonics, immunity boosters, and supplements",
          "Key ingredient in cough syrups, tinctures, and Ayurvedic capsules",
        ],
      },
      {
        title: "Cosmetic & Wellness Uses",
        points: [
          "Used in skincare products for acne control and rejuvenation",
          "Extracted for essential oils used in perfumes and aromatherapy",
        ],
      },
    ],
  },

{
    name: "Amla (Indian Gooseberry / Amla)",
    image: amlaImg,
    tagline: "The Ancient Superfruit of Ayurveda",
    description:
      "Nature's Vitamin C Powerhouse from India\n\nBright, tangy, and packed with vitality — Indian Amla (Gooseberry) is one of nature's most potent superfoods. Known as the \"fruit of immortality\" in Ayurveda, amla has been cherished for thousands of years for its high Vitamin C content, antioxidant power, and rejuvenating properties.\n\nAt Mydex International, we export premium-quality dried amla sourced from India's lush orchards, primarily in Madhya Pradesh, Uttar Pradesh, and Tamil Nadu.\n\nOur amla is naturally sun-dried, cleaned, and graded to preserve its nutritional potency and authentic tangy flavor — ideal for use in health supplements, herbal teas, and cosmetic formulations.\n\nEach Nesbee Amla product carries the essence of India's ancient wellness — pure, powerful, and profoundly nourishing.",
    healthBenefits: [
      "Extremely high in Vitamin C",
      "Powerful antioxidant and anti-ageing properties",
      "Boosts immunity and metabolism",
      "Supports hair, skin, and eye health",
    ],
    varieties: [
      { name: "Dried Amla", details: "Whole / Slices · Sun-dried · High Vitamin C retention · Usage: Ayurvedic tonics, herbal teas, snacking" },
      { name: "Amla Powder", details: "Finely ground dried amla · Concentrated nutrients · Usage: Health drinks, supplements, capsules" },
      { name: "Freeze-Dried Amla", details: "On request · Maximum nutrient preservation · Usage: Premium nutraceuticals, clean-label health brands" },
    ],
    applications: [
      "Food & Beverage — Used in herbal teas, candies, chutneys, and juices; ingredient in Ayurvedic tonics and health drinks",
      "Pharmaceutical & Nutraceutical — Key component in herbal medicines, vitamin supplements, and immune boosters",
      "Cosmetic & Haircare — Used in natural shampoos, face masks, and skincare formulations; extracted for essential oils and anti-aging products",
    ],
    applicationDetails: [
      {
        title: "Food & Beverage Applications",
        points: [
          "Used in herbal teas, candies, chutneys, and juices",
          "Ingredient in Ayurvedic tonics and health drinks",
        ],
      },
      {
        title: "Pharmaceutical & Nutraceutical Uses",
        points: [
          "Key component in herbal medicines, vitamin supplements, and immune boosters",
        ],
      },
      {
        title: "Cosmetic & Haircare Uses",
        points: [
          "Used in natural shampoos, face masks, and skincare formulations",
          "Extracted for essential oils and anti-aging products",
        ],
      },
    ],
  },
{
    name: "Psyllium Husk (Isabgol)",
    image: psylliumHuskImg,
    tagline: "Nature's Most Effective Dietary Fibre",
    description:
      "Pure Fiber. Gentle Healing. From India's Fields to Global Health.\n\nSoft, soothing, and incredibly effective — Indian Psyllium Husk (Isabgol) is one of nature's most trusted sources of soluble fiber. Extracted from the seeds of the Plantago ovata plant, psyllium husk has been used for centuries as a natural digestive aid, detoxifier, and health supplement.\n\nAt Mydex International, we export premium-quality psyllium husk grown in the golden fields of Rajasthan and Gujarat, India's prime cultivation zones.\n\nOur husk is carefully milled, cleaned, and sterilized to meet stringent international food, nutraceutical, and pharmaceutical standards.\n\nFrom wellness drinks to fiber-rich supplements, Nesbee Psyllium Husk represents purity, performance, and the power of Indian agriculture.",
    healthBenefits: [
      "Excellent source of soluble dietary fibre",
      "Supports digestive health and regularity",
      "Aids in cholesterol management",
      "Helps control blood sugar levels",
    ],
    varieties: [
      { name: "Psyllium Husk", details: "85%–98% purity grades available · High swell index · Usage: Fiber supplements, pharma-grade exports, bulk trade" },
      { name: "Psyllium Husk Powder", details: "Finely milled husk · Fast-dissolving · Usage: Functional beverages, gluten-free baking, nutraceuticals" },
      { name: "Industrial Grade", details: "Standard purity · Usage: Animal feed, hydrogel formulations, industrial thickening applications" },
    ],
    applications: [
      "Food & Beverage — Used in breakfast cereals, bakery, and smoothies; added to gluten-free recipes as a natural thickener and binder",
      "Pharmaceutical & Nutraceutical — Used in fiber supplements, digestive tonics, and capsules; common in detox and weight-loss products",
      "Industrial & Cosmetic — Used in animal feed and hydrogel formulations; applied in skincare for hydration and cleansing benefits",
    ],
    applicationDetails: [
      {
        title: "Food & Beverage Applications",
        points: [
          "Used in breakfast cereals, bakery, and smoothies",
          "Added to gluten-free recipes as a natural thickener and binder",
        ],
      },
      {
        title: "Pharmaceutical & Nutraceutical Uses",
        points: [
          "Used in fiber supplements, digestive tonics, and capsules",
          "Common in detox and weight-loss products",
        ],
      },
      {
        title: "Industrial & Cosmetic Uses",
        points: [
          "Used in animal feed and hydrogel formulations",
          "Applied in skincare for hydration and cleansing benefits",
        ],
      },
    ],
  },

 {
    name: "Fenugreek Leaves (Kasuri Methi)",
    image: fenugreekImg,
    tagline: "A Staple Herb with Deep Wellness Roots",
    description:
      "Fragrant Flavor. Herbal Goodness. A Taste of Indian Tradition.\n\nDelicate, aromatic, and delightfully bitter-sweet — Indian Fenugreek Leaves (Kasuri Methi) are a cornerstone of Indian cuisine and herbal wellness. Known for their distinct aroma and health-boosting qualities, they are used worldwide in spice blends, herbal teas, and nutraceutical formulations.\n\nAt Mydex International, we export premium-grade dried fenugreek leaves sourced from the heart of India's farmlands in Rajasthan, Gujarat, and Madhya Pradesh.\n\nOur leaves are carefully harvested, naturally shade-dried, and hygienically processed to retain their vibrant color, natural aroma, and therapeutic properties.\n\nFrom kitchens to wellness brands, Nesbee Kasuri Methi delivers the essence of India's herbal and culinary excellence — pure, powerful, and globally trusted.",
    healthBenefits: [
      "Supports blood sugar regulation",
      "Rich in iron and essential vitamins",
      "Promotes lactation and hormonal balance",
      "Supports digestive health",
    ],
    varieties: [
      { name: "Dried Fenugreek Leaves", details: "Sun-dried aromatic leaf · Vibrant color retained · Usage: Curries, parathas, butter chicken, dal, spice blends" },
      { name: "Fenugreek Leaf Powder", details: "Finely ground · Concentrated aroma · Usage: Herbal supplements, seasoning mixes, capsules" },
      { name: "Organic", details: "Certified organic · No additives · Usage: Clean-label food products, wellness brands, herbal teas" },
    ],
    applications: [
      "Culinary — Used in curries, breads, sauces, and ready-to-eat meals; key ingredient in butter chicken, parathas, and dal; blended into spice powders, soups, and sauces",
      "Pharmaceutical & Herbal — Used in herbal teas, digestive tonics, and women's wellness products; added to nutritional supplements and capsules",
      "Cosmetic & Wellness — Used in skincare and haircare for detox and nourishment; common in natural soaps and herbal masks",
    ],
    applicationDetails: [
      {
        title: "Culinary Uses",
        points: [
          "Used in curries, breads, sauces, and ready-to-eat meals",
          "Key ingredient in Indian butter chicken, parathas, and dal recipes",
          "Blended into spice powders, soups, and sauces",
        ],
      },
      {
        title: "Pharmaceutical & Herbal Uses",
        points: [
          "Used in herbal teas, digestive tonics, and women's wellness products",
          "Added to nutritional supplements and capsules",
        ],
      },
      {
        title: "Cosmetic & Wellness Uses",
        points: [
          "Used in skincare and haircare for detox and nourishment",
          "Common in natural soaps and herbal masks",
        ],
      },
    ],
  },

 {
    name: "Cassia Tora (Chakramarda)",
    image: cassiaTOraImg,
    tagline: "Industrial Herb with Global Demand",
    description:
      "Natural Cleanse. Gentle Relief. Ayurvedic Wellness from India.\n\nAncient, earthy, and deeply therapeutic — Indian Cassia Tora (Chakramarda) is one of Ayurveda's most trusted herbs for detoxification and skin wellness. Known for its natural cleansing and anti-inflammatory properties, this herb has been used for centuries to balance the body and purify the system.\n\nAt Mydex International, we export premium-grade Cassia Tora seeds and leaves, harvested from India's rich herbal belts in Madhya Pradesh, Gujarat, and Chhattisgarh.\n\nOur Cassia Tora is sun-dried, cleaned, and sorted using modern technology, ensuring maximum retention of active compounds while maintaining natural color and aroma.\n\nTrusted globally for herbal, nutraceutical, and cosmetic applications, Nesbee Cassia Tora is a versatile raw material that bridges ancient Ayurveda with modern industry.",
    healthBenefits: [
      "Traditional use in skin conditions and detoxification",
      "Natural laxative properties",
      "Rich in anthraquinones with antifungal properties",
      "Supports liver health in traditional medicine",
    ],
    varieties: [
      { name: "Cassia Tora Seeds", details: "Raw harvested seed · Sun-dried & cleaned · Usage: Gum extraction, feed industry, Ayurvedic formulations" },
      { name: "Cassia Tora Powder", details: "Finely ground seed · Usage: Feed formulations, textile sizing, herbal supplements" },
      { name: "Cassia Tora Gum Powder", details: "Refined gum extract (E499) · High viscosity · Usage: Food thickener, pet food, cosmetic stabilizer" },
    ],
    applications: [
      "Pharmaceutical & Ayurvedic — Used in herbal medicines for detox, digestion, and skin care; key ingredient in liver tonics and purifying supplements",
      "Cosmetic & Personal Care — Used in natural skincare creams, anti-acne products, and body cleansers; Cassia gum acts as a stabilizer in lotions and shampoos",
      "Industrial — Used in textile printing, pet food thickening, and feed formulations",
    ],
    applicationDetails: [
      {
        title: "Pharmaceutical & Ayurvedic Uses",
        points: [
          "Used in herbal medicines for detox, digestion, and skin care",
          "Key ingredient in liver tonics and purifying supplements",
        ],
      },
      {
        title: "Cosmetic & Personal Care Applications",
        points: [
          "Used in natural skincare creams, anti-acne products, and body cleansers",
          "Cassia gum acts as a stabilizer in lotions and shampoos",
        ],
      },
      {
        title: "Industrial Uses",
        points: [
          "Used in textile printing, pet food thickening, and feed formulations",
        ],
      },
    ],
  },

 {
    name: "Rose Petals (Gulab)",
    image: rosePetalsImg,
    tagline: "The Essence of Purity and Fragrance",
    description:
      "Pure Fragrance. Natural Beauty. India's Floral Heritage.\n\nSoft, luxurious, and deeply aromatic — Indian Rose Petals are nature's symbol of purity and indulgence. Beyond their timeless beauty, rose petals have been revered for centuries in India for their therapeutic, cosmetic, and culinary properties.\n\nAt Mydex International, we export premium-quality dried rose petals, delicately harvested from India's finest rose-growing regions in Rajasthan, Uttar Pradesh, and Tamil Nadu.\n\nEach petal is handpicked, naturally dried, and carefully graded, preserving its vibrant color, fragrance, and nutrient profile.\n\nFrom herbal teas to skincare, every Nesbee rose petal reflects India's floral elegance and the purity of natural luxury.",
    healthBenefits: [
      "Rich in antioxidants and polyphenols",
      "Supports skin health and hydration",
      "Natural mood-enhancing and calming properties",
      "Anti-inflammatory benefits",
    ],
    varieties: [
      { name: "Dried Rose Petals", details: "Whole / Broken · Handpicked, shade-dried · Vibrant color & intense fragrance · Usage: Herbal teas, floral infusions, gulkand, desserts" },
      { name: "Rose Petal Powder", details: "Finely ground · Concentrated aroma & nutrients · Usage: Face masks, toners, cosmetic formulations" },
      { name: "Rose Buds", details: "Whole · Delicate fragrance, naturally dried · Usage: Premium tea blends, aromatherapy, potpourri" },
    ],
    applications: [
      "Culinary — Used in herbal and floral teas, desserts, and beverages; ingredient in Indian sweets (gulkand), syrups, and rose water",
      "Cosmetic & Skincare — Used in face masks, toners, soaps, and perfumes; extracted for rose oil and rose water in natural cosmetics",
      "Aromatic & Wellness — Used in potpourri, spa products, and aromatherapy blends; promotes relaxation and emotional balance",
    ],
    applicationDetails: [
      {
        title: "Culinary Applications",
        points: [
          "Used in herbal and floral teas, desserts, and beverages",
          "Ingredient in Indian sweets (gulkand), syrups, and rose water",
        ],
      },
      {
        title: "Cosmetic & Skincare Uses",
        points: [
          "Used in face masks, toners, soaps, and perfumes",
          "Extracted for rose oil and rose water in natural cosmetics",
        ],
      },
      {
        title: "Aromatic & Wellness Uses",
        points: [
          "Used in potpourri, spa products, and aromatherapy blends",
          "Promotes relaxation and emotional balance",
        ],
      },
    ],
  },

{
    name: "Psyllium Seeds (Isabgol Beej)",
    image: psylliumSeedImg,
    tagline: "The Source of the World's Finest Fibre",
    description:
      "Pure Seeds. Gentle Fiber. From India's Wellness Heartland.\n\nSmall in size but immense in value — Indian Psyllium Seeds (Isabgol Seeds) are nature's purest form of soluble fiber and digestive wellness. These tiny seeds, derived from the Plantago ovata plant, are the foundation of India's globally renowned psyllium husk industry.\n\nAt Mydex International, we export premium-grade psyllium seeds sourced from the fertile farmlands of Rajasthan and Gujarat, the world's largest psyllium-producing regions.\n\nEach batch is carefully cleaned, sorted, and quality tested to meet the highest international standards for food, nutraceutical, and pharmaceutical applications.\n\nOur Nesbee Psyllium Seeds embody India's agricultural heritage and commitment to natural health — pure, safe, and globally trusted.",
    healthBenefits: [
      "High in soluble and insoluble fibre",
      "Supports bowel regularity and gut health",
      "Aids in managing cholesterol and blood sugar",
      "Useful in weight management programmes",
    ],
    varieties: [
      { name: "Psyllium Seeds", details: "99% Purity · Premium grade · Carefully cleaned & sorted · Usage: Husk extraction, nutraceuticals, pharma processing" },
      { name: "Psyllium Seeds", details: "98% Purity · Standard export grade · Usage: Functional foods, dietary supplements, animal feed" },
      { name: "Industrial Grade", details: "Standard purity · Usage: Animal feed formulations, hydrocolloid preparations, bulk industrial processing" },
    ],
    applications: [
      "Food & Beverage — Used in health foods, cereals, smoothies, and energy bars; source material for psyllium husk and dietary fiber production",
      "Pharmaceutical & Nutraceutical — Used in digestive supplements, detox products, and capsules; common ingredient in cholesterol- and sugar-control formulations",
      "Industrial & Feed — Used in animal feed formulations and hydrocolloid preparations",
    ],
    applicationDetails: [
      {
        title: "Food & Beverage Applications",
        points: [
          "Used in health foods, cereals, smoothies, and energy bars",
          "Source material for psyllium husk and dietary fiber production",
        ],
      },
      {
        title: "Pharmaceutical & Nutraceutical Uses",
        points: [
          "Used in digestive supplements, detox products, and capsules",
          "Common ingredient in cholesterol- and sugar-control formulations",
        ],
      },
      {
        title: "Industrial & Feed Uses",
        points: [
          "Used in animal feed formulations and hydrocolloid preparations",
        ],
      },
    ],
  },

  {
    name: "Basil Seeds (Sabja / Tukmaria)",
    image: basilSeedsImg,
    tagline: "The Wellness Seed Taking the World by Storm",
    description:
      "Refreshing. Nutritious. Naturally Indian.\n\nTiny, black, and mighty — Indian Basil Seeds (Sabja / Tukmaria) are nature's answer to modern wellness. Known for their cooling effect and rich nutritional value, basil seeds have been used in India for centuries in beverages, desserts, and herbal tonics to soothe the body and refresh the soul.\n\nAt Mydex International, we export high-quality basil seeds sourced from India's best basil farms in Rajasthan, Gujarat, and Madhya Pradesh.\n\nOur seeds are machine-cleaned, sorted, and purity-tested, ensuring superior quality, uniform size, and high mucilage content — perfect for the global food, beverage, and nutraceutical markets.\n\nEach Nesbee Basil Seed carries the legacy of India's natural refreshment and holistic nutrition, connecting ancient tradition to contemporary wellness.",
    healthBenefits: [
      "Excellent source of dietary fibre",
      "Natural cooling and digestive properties",
      "Supports weight management",
      "Rich in omega-3 fatty acids and minerals",
    ],
    varieties: [
      { name: "Natural Basil Seeds", details: "Sabja / Tukmaria · Whole natural seed · High mucilage content · Usage: Beverages, falooda, health drinks, detox tonics" },
      { name: "Sortex Cleaned Basil Seeds", details: "Optical sortex processed · Uniform size & purity · Usage: Premium beverages, desserts, nutraceuticals, export" },
      { name: "Industrial Grade Basil Seeds", details: "Standard grade · Usage: Bulk food processing, cosmetic mucilage extraction, animal feed" },
    ],
    applications: [
      "Food & Beverage — Used in drinks, smoothies, desserts, and puddings; key ingredient in falooda, lemonades, and detox beverages; added to health bars, yogurts, and energy foods",
      "Pharmaceutical & Nutraceutical — Used in fiber supplements and digestive formulations; natural source of hydration and plant-based nutrition",
      "Cosmetic & Wellness — Used in face gels, detox masks, and moisturizing products; extracted for its natural mucilage used in herbal cosmetics",
    ],
    applicationDetails: [
      {
        title: "Food & Beverage Uses",
        points: [
          "Used in drinks, smoothies, desserts, and puddings",
          "Key ingredient in falooda, lemonades, and detox beverages",
          "Added to health bars, yogurts, and energy foods",
        ],
      },
      {
        title: "Pharmaceutical & Nutraceutical Uses",
        points: [
          "Used in fiber supplements and digestive formulations",
          "Natural source of hydration and plant-based nutrition",
        ],
      },
      {
        title: "Cosmetic & Wellness Uses",
        points: [
          "Used in face gels, detox masks, and moisturizing products",
          "Extracted for its natural mucilage used in herbal cosmetics",
        ],
      },
    ],
  },
  // {
  //   name: "Chia Seed",
  //   image: chiaImg,

  //   tagline: "The Global Superfood. Naturally Nutritious.",

  //   description:
  //     "Chia seeds are one of the most nutrient-dense superfoods in the world, delivering an exceptional combination of omega-3 fatty acids, plant-based protein, dietary fibre, and essential minerals. Originally cultivated by ancient Aztec and Mayan civilisations, chia seeds have become a global health food staple. We supply export-grade chia seeds, cleaned and sorted to meet international food safety standards.",

  //   healthBenefits: [
  //     "Rich in omega-3 fatty acids",
  //     "Excellent source of plant-based protein and fibre",
  //     "Supports heart health and bone density",
  //     "Helps regulate blood sugar and energy levels"
  //   ],

  //   varieties: ["Black Chia Seeds", "White Chia Seeds", "Organic Chia Seeds", "Milled Chia Seeds"],

  //   applications: [
  //     "Health Foods & Functional Foods",
  //     "Bakery & Beverages",
  //     "Nutraceuticals & Supplements"
  //   ],

  //   applicationDetails: [
  //     {
  //       title: "Health Foods & Functional Foods",
  //       points: [
  //         "Used in chia puddings, smoothie bowls, and energy bars",
  //         "Added to breakfast cereals, granola, and health snacks"
  //       ]
  //     },
  //     {
  //       title: "Bakery & Beverages",
  //       points: [
  //         "Incorporated into breads, muffins, and gluten-free baked goods",
  //         "Used as a topping and thickener in functional beverages and juices"
  //       ]
  //     },
  //     {
  //       title: "Nutraceuticals & Supplements",
  //       points: [
  //         "Encapsulated as omega-3 and fibre dietary supplements",
  //         "Included in meal replacement and sports nutrition formulations"
  //       ]
  //     }
  //   ]
  // },
]);

export default { category: herbsCategory, products: herbsProducts };