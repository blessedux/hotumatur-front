import { getUrl, fetchData } from "./utils";

export async function getAllPosts(query?: Record<string, any>): Promise<any[]> {
  const url = getUrl("/wp-json/wp/v2/posts", query);
  return fetchData<any[]>(url);
}

export async function getPostBySlug(slug: string): Promise<any> {
  const url = getUrl("/wp-json/wp/v2/posts", { slug });
  const posts = await fetchData<any[]>(url);

  if (!posts || posts.length === 0) {
    throw new Error(`No post found with slug: ${slug}`);
  }

  return posts[0];
}
