export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

export interface Product {
  id: string;
  category: Category;
  color: Color;
  size: Size;
  name: string;
  price: number;
  images: Image[];
  isFeatured: boolean;
}

export interface Image {
  id: string;
  imageUrl: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}
