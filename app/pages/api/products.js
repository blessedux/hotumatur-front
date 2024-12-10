export default async function handler(req, res) {
    // Fetch WooCommerce API credentials from environment variables
const consumerKey = process.env.WC_CONSUMER_KEY;
const consumerSecret = process.env.WC_CONSUMER_SECRET;

// Check if credentials are available
if (!consumerKey || !consumerSecret) {
  throw new Error('WooCommerce API keys are not defined in environment variables');
}

// Use credentials for fetching products
const fetchProducts = async () => {
  const response = await fetch(
    `${process.env.WORDPRESS_URL}/wp-json/wc/v3/products?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  const products = await response.json();
  return products;
};

    const response = await fetch(`${process.env.WORDPRESS_URL}/wp-json/wc/v3/products`, {
        headers: {
            Authorization: `Basic ${Buffer.from(
                `${process.env.WC_CONSUMER_KEY}:${process.env.WC_CONSUMER_SECRET}`
            ).toString("base64")}`,
        },
    });

    if (!response.ok) {
        return res.status(response.status).json({ error: 'Failed to fetch products' });
    }

    const data = await response.json();
    res.status(200).json(data);
}

  