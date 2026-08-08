# Product Data Structure

Each category has its own separate file with category info + products.

```
src/data/
  categories/
    dryFruits.js      → Dry Fruits category + 10 products
    spices.js         → Spices category + 10 products
    herbs.js          → Herbs category + 10 products
    seeds.js          → Seeds category + 10 products
    pulses.js         → Pulses category + 10 products
    agroProducts.js   → Agro Products category + 10 products
    index.js          → Combines all categories
  utils/
    createProduct.js  → Shared product builder
  siteData.js         → Site-wide data + re-exports categories
```

## Edit a category
Open the matching file, for example:
- `src/data/categories/dryFruits.js`

Update category name/description/image or add/remove product names in the array.

## Add a new product
In any category file, add a name to the products array:

```js
export const dryFruitsProducts = createProducts(dryFruitsCategory.slug, image, [
  "Almond",
  "Cashew",
  // add new product here
]);
```
