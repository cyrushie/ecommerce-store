"use client";

import { Product } from "@/types";
import React from "react";
import Currency from "./ui/currency";
import Button from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/use-cart";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  const addToCart = () => {
    cart.addItem(data);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="text-2xl mt-3 font-semibold text-gray-900">
        <Currency value={data.price} />
      </div>
      <hr className="my-4 w-full" />
      <div className="space-y-3">
        <div className="flex items-center gap-2 ">
          <p className="text-black font-semibold">Size: </p>
          <p className="capitalize">{data.size.name}</p>
        </div>

        <div className="flex items-center gap-2 ">
          <p className="text-black font-semibold">Color: </p>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data.color.value }}
          />
        </div>
      </div>

      <div className="mt-10">
        <Button
          onClick={addToCart}
          className="flex items-center gap-x-2"
        >
          Add to cart
          <ShoppingCart className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Info;
