import { createProducts } from "../utils/createProduct";

import categoryImage from "../../assets/images/dry-fruits.png";

import almondImg    from "../../assets/images/dry-fruits/almond.png";
import cashewImg    from "../../assets/images/dry-fruits/cashew.png";
import pistachioImg from "../../assets/images/dry-fruits/pistachio.png";
import walnutImg    from "../../assets/images/dry-fruits/walnut.png";
import raisinImg    from "../../assets/images/dry-fruits/raisin.png";
import figImg       from "../../assets/images/dry-fruits/fig.png";
import datesImg     from "../../assets/images/dry-fruits/dates.png";
import apricotImg   from "../../assets/images/dry-fruits/apricot.png";
import dryDatesImg  from "../../assets/images/dry-fruits/hazelnut.png";


const slug = "dry-fruits";

export const dryFruitsCategory = {
  slug,
  name: "Dry Fruits",
  description: "Premium almonds, cashews, pistachios and more — export grade.",
  image: categoryImage,
};

export const dryFruitsProducts = createProducts(dryFruitsCategory.slug, categoryImage, [
{
  name: "Almond (Badam)",
  image: almondImg,

  tagline: "The Power Nut of Everyday Wellness",

  description:
    "Almonds are among the world’s most popular dry fruits, celebrated for their high protein, healthy fats, and brain-boosting properties. Used across cuisines and wellness products, almonds symbolize daily nutrition and vitality. Nesbee supplies high-grade almonds, sorted and packed to ensure uniform size, crunch, and freshness.",

  healthBenefits: [
    "High protein",
    "Healthy fats",
    "Brain-boosting properties",
    "Supports daily nutrition and vitality"
  ],

varieties: [
  {
    name: "Raw Almond",
    details: "Color: Light brown skin with cream kernel\n• Texture: Firm & crunchy\n• Moisture: 5–7%\n• Taste: Mild, nutty flavor"
  },
  {
    name: "Balanced Almond",
    details: "Appearance: Fine brownish powder\n• Processing: Made from premium sun-dried figs\n• Shelf Life: Long-lasting when stored properly\n• Solubility: Easy to blend"
  },
  {
    name: "Almond Powder",
    details: "Form: Fine almond powder\n• Processing: Made from high-quality almonds\n• Shelf Life: Long when properly stored"
  },
],

  applications: [
    "Daily Consumption & Gifting Packs",
    "Bakery, Cereals & Nutrition Bars",
    "Almond Butter & Milk Production"
  ],

  applicationDetails: [
    {
      title: "Daily Consumption & Gifting Packs",
      points: [
        "Consumed raw, roasted, or soaked as a daily health snack",
        "Popular in premium dry fruit gifting boxes and festive hampers"
      ]
    },
    {
      title: "Bakery, Cereals & Nutrition Bars",
      points: [
        "Widely used in cakes, cookies, muffins, and pastries"
      ]
    },
    {
      title: "Almond Butter & Milk Production",
      points: [
        "Processed into smooth almond butter for health foods",
        "Used in plant-based almond milk and dairy alternatives"
      ]
    }
  ]
},
{
  name: "Cashew (Kaju)",
  image: cashewImg,
  tagline: "Creamy Taste, Premium Nutrition",

  description:
    "Cashew nuts are prized worldwide for their creamy taste, soft crunch, and versatility. From gourmet cooking to snack foods, cashews are a staple in premium food categories. Nesbee exports high-quality cashew kernels, processed under hygienic conditions to preserve taste, color, and shelf life.",

  varieties: [
    {
      name: "Whole Cashews",
  
      details:
        "Premium whole cashew kernels with a creamy texture and uniform appearance · Usage: Premium snacking, gifting & retail packs",
    },
    {
      name: "Cashew Splits",
      details:
        "Carefully processed broken cashew kernel pieces · Usage: Bakery, sweets, namkeen, cooking & food processing",
    },
    {
      name: "Cashew Paste",
      details:
        "Smooth, creamy cashew paste made from quality kernels · Usage: Sauces, spreads, gravies, vegan cheese & dairy-free creams",
    },
  ],

  applications: [
    "Snacks & Roasted Nuts: Consumed raw, roasted, or flavored as a premium snack",
    "Snacks & Roasted Nuts: Widely used in salted, spiced, and honey-roasted nut mixes",
    "Sweets, Curries & Gravies: Essential ingredient in Indian sweets like kaju katli and halwa",
    "Vegan Cheese & Nut Pastes: Processed into smooth cashew paste for sauces and spreads",
    "Vegan Cheese & Nut Pastes: Key base ingredient for vegan cheese and dairy-free creams",
  ],
},
{
  name: "Makhana (Regular/Flavoured)",
  image: pistachioImg,
  tagline: "Light. Crunchy. Naturally Nutritious.",

  description:
    "Makhana, also known as Fox Nuts or Lotus Seeds, is a naturally light and nutritious snack valued for its crunchy texture and wholesome nutritional profile. Rich in plant-based protein, fiber, and essential minerals, makhana is widely enjoyed as a healthy everyday snack. Nesbee offers premium-quality makhana, carefully cleaned, graded, and processed to retain its natural crunch, freshness, and quality for global markets.",

  varieties: [
    {
      name: "Regular Makhana",
      details:
        "Clean, premium-quality fox nuts with a light and crunchy texture · Usage: Direct snacking, roasting & traditional recipes",
    },
    {
      name: "Roasted Makhana",
      details:
        "Lightly roasted fox nuts with enhanced crunch and natural flavor · Usage: Healthy snacks, retail packs & ready-to-eat products",
    },
    {
      name: "Flavoured Makhana",
      details:
        "Crunchy makhana infused with carefully selected seasonings · Usage: Premium snacks, retail & modern health foods",
    },
  ],

  applications: [
    "Healthy Snacking: Enjoyed as a light and nutritious everyday snack",
    "Retail & Ready-to-Eat Foods: Packed as convenient healthy snack options",
    "Breakfast & Wellness Foods: Added to nutritious snack mixes and health-focused diets",
    "Food & Confectionery: Used in traditional recipes, desserts, and innovative food products",
    "Flavoured Snack Products: Used to create premium roasted and seasoned snack varieties",
  ],
},
 {
  name: "Walnut (Akhrot)",
  image: walnutImg,
  tagline: "The Brain Food of Nature",

  description:
    "Walnuts are globally known as “brain food”, thanks to their shape and rich omega-3 fatty acid content. They play a vital role in heart health, cognitive function, and overall wellness. Nesbee supplies export-quality walnuts, carefully graded and packed to retain freshness, crunch, and nutritional value.",

  varieties: [
    {
      name: "Whole Walnut",
     
      details:
        "Premium whole walnuts with natural shell and rich kernel · Usage: Retail, daily consumption & festive gifting",
    },
    {
      name: "Walnut Halves",
     
      details:
        "Carefully graded walnut kernel halves with a crisp texture · Usage: Bakery, salads, snacking & desserts",
    },
    {
      name: "Walnut Powder",
   
      details:
        "Finely ground premium walnut kernel · Usage: Health foods, nutrition blends, bakery mixes & smoothies",
    },
  ],

  applications: [
    "Daily Nutrition & Gifting: Consumed as a wholesome daily dry fruit",
    "Daily Nutrition & Gifting: Popular in premium dry fruit assortments and gift packs",
    "Bakery & Confectionery: Used in cakes, brownies, cookies, and pastries",
    "Health Supplements & Granola: Added to granola, trail mixes, and energy bars",
    "Health Supplements & Granola: Used in health foods and nutrition blends",
  ],
},
 {
  name: "Raisin (Kishmish)",
  tagline: "Naturally Sweet Energy Bites",

  description:
    "Raisins, or Kishmish, are dried grapes packed with natural sugars, iron, and antioxidants. Loved for their sweetness and versatility, raisins are a staple in both health foods and traditional recipes. Nesbee offers carefully dried, residue-free raisins, ensuring rich flavor, soft texture, and global export compliance.",

  varieties: [
    {
      name: "Golden Raisins",
      details:
        "Golden-colored raisins with a naturally sweet flavor · Usage: Bakery, confectionery, festive sweets",
    },
    {
      name: "Black Raisins",
      details:
        "Deep-colored raisins with rich natural flavor · Usage: Traditional recipes, health snacks & wellness foods",
    },
    {
      name: "Green Raisins",
      details:
        "Naturally dried raisins with a distinctive tangy-sweet taste · Usage: Retail packs, cooking & desserts",
    },
  ],

  applications: [
    "Bakery & Confectionery: Widely used in cakes, cookies, muffins, and pastries",
    "Bakery & Confectionery: Adds natural sweetness, texture, and visual appeal",
    "Breakfast Cereals & Snacks: Used in cereals, granola, muesli, and trail mixes",
    "Traditional Sweets & Desserts: Commonly used in Indian sweets and festive preparations",
    "Traditional Sweets & Desserts: Enhances flavor in desserts, puddings, and halwa",
  ],
},
 {
  name: "Dry Fig (Anjeer)",
  image: figImg,
  tagline: "The Ancient Fruit of Natural Sweetness",

  description:
    "Dry Fig, popularly known as Anjeer, is one of the oldest cultivated fruits in the world, valued for its natural sweetness, digestive benefits, and rich mineral content. Traditionally used in Ayurveda and modern nutrition alike, figs are a powerhouse of fiber and energy. Nesbee offers premium-grade dry figs, carefully dried and processed to retain their soft texture, rich flavor, and nutritional integrity — ideal for health foods and gourmet applications.",

  varieties: [
    {
      name: "Dried Fig",

      details:
        "Soft-dried figs with natural sweetness and rich flavor · Usage: Direct snacking, gifting, sweets & desserts",
    },
    {
      name: "Fig Powder",
    
      details:
        "Finely ground dried fig with concentrated natural sweetness · Usage: Health foods, smoothies, bakery & nutritional products",
    },
    {
      name: "Organic Dry Fig",
    
      details:
        "Certified organic dry figs with no unnecessary additives · Usage: Clean-label foods, wellness products & premium applications",
    },
  ],

  applications: [
    "Food & Beverage Applications: Used in traditional sweets, desserts, and bakery products",
    "Food & Beverage Applications: Added to breakfast cereals, granola, and energy bars",
    "Wellness & Nutritional Uses: Popular ingredient in fiber-rich and digestive health foods",
    "Ayurvedic & Traditional Uses: Used in Ayurvedic formulations for digestion and vitality",
    "Ayurvedic & Traditional Uses: Consumed as a natural remedy for overall wellness support",
  ],
},

  {
  name: "Dates (Khajoor)",
  image: datesImg,
  tagline: "Naturally Sweet. Naturally Energising.",

  description:
    "Dates, or Khajoor, are naturally sweet fruits valued for their rich flavor, soft texture, and natural energy. Naturally rich in dietary fiber and essential minerals, dates are widely enjoyed as a wholesome snack and used across traditional foods, desserts, bakery products, and health-focused applications. Nesbee offers premium-quality dates, carefully selected, graded, and packed to preserve their natural sweetness, freshness, and nutritional value.",

  varieties: [
    {
      name: "Medjool Dates",
     
      details:
        "Large, soft dates with a rich caramel-like sweetness · Usage: Premium retail, gifting & healthy snacking",
    },
    {
      name: "Deglet Noor",
     
      details:
        "Firm-textured dates with a delicate honey-like sweetness · Usage: Bakery, confectionery & retail packing",
    },
    {
      name: "Pitted Dates",
      
      details:
        "Convenient seedless dates, ready for direct consumption and processing · Usage: Snacking, bakery & food processing",
    },
    {
      name: "Date Paste",
   
      details:
        "Smooth, naturally sweet date paste made from quality dates · Usage: Natural sweetener, bakery, energy bars & food products",
    },
    {
      name: "Date Syrup",
     
      details:
        "Rich and concentrated natural date syrup · Usage: Beverages, desserts, sauces & natural sweetening applications",
    },
  ],

  applications: [
    "Retail & Healthy Snacking: Consumed as a naturally sweet and energy-rich snack",
    "Bakery & Confectionery: Used in cakes, cookies, desserts, energy bars, and traditional sweets",
    "Breakfast & Wellness Foods: Added to cereals, granola, smoothies, and nutritious food blends",
    "Natural Sweeteners: Date paste and syrup are used as alternatives to refined sugar",
    "Food Processing: Used in beverages, spreads, sauces, fillings, and other processed food products",
  ],
},{
  name: "Dry Apricot (Khubani)",
  image: apricotImg,
  tagline: "Naturally Sweet. Naturally Nutritious.",

  description:
    "Dry Apricots, popularly known as Khubani, are naturally sweet and nutrient-rich fruits valued for their soft texture, tangy flavor, and versatility. Rich in dietary fiber and naturally occurring antioxidants, dried apricots are widely used in healthy snacks, bakery products, confectionery, and traditional foods. Nesbee offers premium-quality dry apricots, carefully selected, graded, and processed to preserve their natural flavor, color, and nutritional value.",

  varieties: [
    {
      name: "Whole Dried Apricot",
   
      details:
        "Naturally dried whole apricots with a soft texture and tangy-sweet flavor · Usage: Direct snacking, gifting & retail packs",
    },
    {
      name: "Apricot Halves",
    
      details:
        "Carefully pitted and halved dried apricots · Usage: Bakery, muesli, cereals, desserts & retail packing",
    },
    {
      name: "Diced Apricot",
    
      details:
        "Uniformly cut dried apricot pieces for convenient food preparation · Usage: Confectionery, cereal bars, bakery & snack mixes",
    },
  ],

  applications: [
    "Bakery & Confectionery: Used in cakes, cookies, pastries, desserts, and sweet preparations",
    "Breakfast & Healthy Foods: Added to muesli, cereals, granola, trail mixes, and energy bars",
    "Snacking & Retail: Consumed directly as a naturally sweet and nutritious snack",
    "Traditional Foods: Used in desserts, fruit mixes, and various culinary preparations",
    "Nutritional Products: Suitable for health-focused foods and clean-label product formulations",
  ],
},
  {
  name: "Dry Dates (Chuhara)",
  image: dryDatesImg,
  tagline: "Naturally Sweet. Naturally Energising.",

  description:
    "Dry Dates, commonly known as Chuhara, are naturally dehydrated dates valued for their firm texture, concentrated sweetness, and long shelf life. Rich in natural carbohydrates, dietary fiber, and essential minerals, dry dates are widely used in traditional foods, snacks, sweets, and nutritional preparations. Nesbee offers premium-quality dry dates, carefully selected, cleaned, graded, and packed to preserve their natural taste, freshness, and quality.",

  varieties: [
    {
      name: "Whole Dry Dates",
      details:
        "Naturally dried whole dates with a firm texture and concentrated sweetness · Usage: Direct snacking, gifting & traditional preparations",
    },
    {
      name: "Pitted Dry Dates",
      details:
        "Seed-removed dry dates for convenient consumption and processing · Usage: Snacking, sweets, bakery & food processing",
    },
    {
      name: "Dry Date Pieces",
      details:
        "Uniformly cut pieces of dried dates with natural sweetness · Usage: Sweets, desserts, cereals & snack mixes",
    },
  ],

  applications: [
    "Traditional Sweets & Desserts: Used in Indian sweets, halwa, laddoos, and festive preparations",
    "Healthy Snacking: Consumed as a naturally sweet and energy-rich snack",
    "Bakery & Confectionery: Added to cakes, cookies, energy bars, and other baked products",
    "Breakfast & Nutrition Foods: Used in cereals, granola, trail mixes, and nutritional blends",
    "Food Processing: Used in date-based fillings, desserts, snack products, and natural sweet preparations",
  ],
},

]);

export default { category: dryFruitsCategory, products: dryFruitsProducts };