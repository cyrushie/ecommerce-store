import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getAllCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL, { next: { revalidate: 0 } });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
};

export const getCategory = async (id: string): Promise<Category> => {
  const res = await fetch(`${URL}/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
};
