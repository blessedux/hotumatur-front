import querystring from "query-string";

// Utility function to construct URLs
function getUrl(path: string, query?: Record<string, any>): string {
  const baseUrl = process.env.WORDPRESS_URL;
  if (!baseUrl) {
    throw new Error("WORDPRESS_URL is not defined in environment variables.");
  }

  const params = query ? querystring.stringify(query) : null;
  return `${baseUrl}${path}${params ? `?${params}` : ""}`;
}

// Fetch WooCommerce Products
export async function getWooCommerceProducts(
  query?: Record<string, any>
): Promise<any[]> {
  const url = getUrl("/wp-json/wc/v3/products", query);

  // Ensure WooCommerce API credentials are available
  const consumerKey = process.env.WC_CONSUMER_KEY;
  const consumerSecret = process.env.WC_CONSUMER_SECRET;

  if (!consumerKey || !consumerSecret) {
    throw new Error(
      "WC_CONSUMER_KEY or WC_CONSUMER_SECRET is not defined in environment variables."
    );
  }

  // Encode authorization header
  const authHeader = `Basic ${Buffer.from(
    `${consumerKey}:${consumerSecret}`
  ).toString("base64")}`;

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

    const products: any[] = await response.json();
    return products;
  } catch (error) {
    console.error("Error fetching WooCommerce products:", error);
    throw error;
  }
}

// Redirect to WooCommerce Checkout
export function redirectToCheckout(): void {
  const baseUrl = process.env.WORDPRESS_URL;
  if (!baseUrl) {
    throw new Error("WORDPRESS_URL is not defined in environment variables.");
  }

  try {
    window.location.href = `${baseUrl}/checkout`;
  } catch (error) {
    console.error("Error redirecting to checkout:", error);
    throw error;
  }
}