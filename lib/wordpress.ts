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

// Get all categories
export async function getAllCategories(): Promise<any[]> {
  const url = getUrl("/wp-json/wp/v2/categories");

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.statusText}`);
    }

    const categories: any[] = await response.json();
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
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


import { WordPressPage } from "./wordpress.d";

export async function getAllPages(): Promise<WordPressPage[]> {
  const response = await fetch('https://tu-sitio-wordpress.com/wp-json/wp/v2/pages');
  if (!response.ok) {
    throw new Error('Error fetching pages');
  }
  const pages = await response.json();
  return pages;
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

// Fetch generic WordPress products
export async function fetchProducts(query?: Record<string, any>): Promise<any[]> {
  const url = getUrl("/wp-json/wp/v2/products", query);

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }

    const products: any[] = await response.json();
    return products;
  } catch (error) {
    console.error("Error fetching WordPress products:", error);
    throw error;
  }
}

// Get a single post by its slug
export async function getPostBySlug(slug: string): Promise<any> {
  const url = getUrl("/wp-json/wp/v2/posts", { slug });

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch post by slug: ${response.statusText}`);
    }

    const posts = await response.json();
    if (!posts || posts.length === 0) {
      throw new Error(`No post found with the slug: ${slug}`);
    }

    return posts[0]; // Return the first post (WordPress returns an array)
  } catch (error) {
    console.error("Error fetching post by slug:", error);
    throw error;
  }
}

// Get a page by its slug
export async function getPageBySlug(slug: string): Promise<any> {
  const url = getUrl("/wp-json/wp/v2/pages", { slug });

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch page: ${response.statusText}`);
    }

    const pages = await response.json();
    return pages[0];
  } catch (error) {
    console.error("Error fetching page by slug:", error);
    throw error;
  }
}

// Get all authors
export async function getAllAuthors(): Promise<any[]> {
  const url = getUrl("/wp-json/wp/v2/users");

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch authors: ${response.statusText}`);
    }

    const authors: any[] = await response.json();
    return authors;
  } catch (error) {
    console.error("Error fetching authors:", error);
    throw error;
  }
}

// Get all WordPress pages
export async function getAllPages(): Promise<any[]> {
  const url = getUrl("/wp-json/wp/v2/pages");

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch pages: ${response.statusText}`);
    }

    const pages: any[] = await response.json();
    return pages;
  } catch (error) {
    console.error("Error fetching all pages:", error);
    throw error;
  }
}

// Get featured media by ID
export async function getFeaturedMediaById(id: number): Promise<any> {
  const url = getUrl(`/wp-json/wp/v2/media/${id}`);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch featured media: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching featured media by ID:", error);
    throw error;
  }
}

// Get author by ID
export async function getAuthorById(id: number): Promise<any> {
  const url = getUrl(`/wp-json/wp/v2/users/${id}`);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch author: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching author by ID:", error);
    throw error;
  }
}

// Get category by ID
export async function getCategoryById(id: number): Promise<any> {
  const url = getUrl(`/wp-json/wp/v2/categories/${id}`);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch category: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching category by ID:", error);
    throw error;
  }
}

// Get all posts
export async function getAllPosts(query?: Record<string, any>): Promise<any[]> {
  const url = getUrl("/wp-json/wp/v2/posts", query);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.statusText}`);
    }

    const posts: any[] = await response.json();
    return posts;
  } catch (error) {
    console.error("Error fetching all posts:", error);
    throw error;
  }
}