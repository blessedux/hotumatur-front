export default async function handler(req, res) {
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