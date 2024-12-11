import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

import querystring from "query-string";

export function getUrl(path: string, query?: Record<string, any>): string {
  const baseUrl = process.env.WORDPRESS_URL;
  if (!baseUrl) {
    throw new Error("WORDPRESS_URL is not defined in environment variables.");
  }

  const params = query ? querystring.stringify(query) : null;
  return `${baseUrl}${path}${params ? `?${params}` : ""}`;
}

export async function fetchData<T>(url: string, options?: RequestInit): Promise<T> {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in fetchData:", error);
    throw error;
  }
}
