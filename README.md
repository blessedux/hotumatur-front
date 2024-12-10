# Next.js Starter for WordPress Headless CMS

This is a customized starter template for building a Next.js application integrated with WordPress as a headless CMS. The setup fetches data from the WordPress REST API and dynamically renders content in the Next.js frontend.

---

## Key Features

- **Headless CMS**: Fetch data from WordPress REST API, including posts, categories, tags, and pages.
- **Dynamic Components**: Supports filtering and displaying WordPress content dynamically.
- **Custom API Integration**: Handles WooCommerce products and integrates them into the headless CMS setup.
- **Optimized Performance**: Built with Next.js and Tailwind CSS for fast, responsive websites.
- **Deployable with Vercel**: Fully deployable on Vercel for seamless CI/CD.

---

## Environment Variables

Add the following environment variables in your `.env.local` file:

```env
WORDPRESS_URL=https://your-wordpress-site.com
WORDPRESS_HOSTNAME=your-wordpress-site.com
WC_CONSUMER_KEY=your-woocommerce-consumer-key
WC_CONSUMER_SECRET=your-woocommerce-consumer-secret
```
