"use client";

import Container from "@/components/ui/container";
import { useCart } from "@/hooks/use-cart";
import CartItem from "./_components/cart-item";
import Summary from "./_components/summary";
import { useEffect, useState } from "react";

const CartPage = () => {
  const cart = useCart();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="lg:grid lg:grid-cols-12 lg:items-start gap-x-12 mt-10">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && (
                <p className="text-neutral-500">no items added to cart</p>
              )}
              <ul className="space-y-8">
                {cart.items.map((item) => (
                  <CartItem
                    key={item.id}
                    data={item}
                  />
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
