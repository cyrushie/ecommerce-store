"use client";

import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import { useCart } from "@/hooks/use-cart";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect } from "react";
import toast from "react-hot-toast";

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  const totalPrice = items.reduce((acc, item) => acc + Number(item.price), 0);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed");
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("Payment canceled");
    }
  }, [searchParams, removeAll]);

  const onCheckout = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productIds: items.map((item) => item.id) }),
      });

      if (!res.ok) {
        throw new Error("Failed to checkout");
      }

      const data = await res.json();

      window.location = data.url;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Suspense>
      <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5">
        <h2 className="text-lg font-semibold text-black">Order Summary</h2>
        <div className="mt-6 space-y-4">
          <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
            <p className="text-base font-semibold text-gray-900">Order total</p>
            <Currency value={totalPrice} />
          </div>
        </div>
        <Button
          disabled={items.length === 0}
          onClick={onCheckout}
          className="w-full mt-6"
        >
          Checkout
        </Button>
      </div>
    </Suspense>
  );
};

export default Summary;
