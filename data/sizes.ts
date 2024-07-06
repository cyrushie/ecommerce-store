import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

export const getAllSizes = async (): Promise<Size[]> => {
  const res = await fetch(URL, { next: { revalidate: 0 } });

  if (!res.ok) {
    throw new Error("Failed to fetch sizes");
  }

  return res.json();
};
