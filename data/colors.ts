import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

export const getAllColors = async (): Promise<Color[]> => {
  const res = await fetch(URL, { next: { revalidate: 0 } });

  if (!res.ok) {
    throw new Error("Failed to fetch colors");
  }

  return res.json();
};
