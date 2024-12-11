import { getUrl, fetchData } from "./utils";

export async function getAllCategories(): Promise<any[]> {
  const url = getUrl("/wp-json/wp/v2/categories");
  return fetchData<any[]>(url);
}

export async function getCategoryById(id: number): Promise<any> {
  const url = getUrl(`/wp-json/wp/v2/categories/${id}`);
  return fetchData<any>(url);
}
