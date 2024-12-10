import { getWooCommerceProducts } from "../lib/wordpress";

async function testFetchProducts() {
  try {
    const products = await getWooCommerceProducts({ per_page: 5 });
    console.log("Fetched WooCommerce Products:", products);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

testFetchProducts();