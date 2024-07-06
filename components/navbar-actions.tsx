"use client";

import React, { useEffect, useState } from "react";
import Button from "./ui/button";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="ml-auto flex items-center">
      <Button
        onClick={() => router.push("/cart")}
        className="px-4 py-2 flex space-x-2 items-center"
      >
        <ShoppingBag
          size={20}
          className="text-white"
        />
        <span className="text-white font-semibold ">{cart.items.length}</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
