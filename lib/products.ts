import { getUrl } from "./utils"; // Asegúrate de que `getUrl` esté correctamente definido en `utils.ts`

export async function fetchProducts(query?: Record<string, any>): Promise<any[]> {
  const url = getUrl("/wp-json/wc/v3/products", query);

  const consumerKey = process.env.WC_CONSUMER_KEY;
  const consumerSecret = process.env.WC_CONSUMER_SECRET;

  if (!consumerKey || !consumerSecret) {
    throw new Error("WC_CONSUMER_KEY or WC_CONSUMER_SECRET is not defined in environment variables.");
  }

  const authHeader = `Basic ${Buffer.from(`${consumerKey}:${consumerSecret}`).toString("base64")}`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: authHeader,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching WooCommerce products:", error);
    throw error;
  }
}
