"use client";

import { Check } from "lucide-react";
import { useState } from "react";

import { useAppContext } from "@/context";
import type { CartItem } from "@/types";
import { alreadyInCart } from "@/lib";
import { Button } from "../ui/button";
import { toast } from "@/hooks";

export function CartInfo(cartItem: CartItem) {
   const { cart, setCart } = useAppContext();
   const [productIsInCart, setProductIsInCart] = useState(alreadyInCart({ cart, productId: cartItem.id }).found);

   function addToCart() {
      if (productIsInCart) return;
      setCart((prev) => {
         prev.push(cartItem);
         return prev;
      });
      setProductIsInCart(true);
      toast({ title: "Product added to cart" });
   }

   function removeFromCart() {
      if (!productIsInCart) return;
      setCart((prev) => prev.filter((item) => item.id !== cartItem.id));
      setProductIsInCart(false);
      toast({ title: "Product removed from cart" });
   }

   return productIsInCart ? (
      <div className="flex items-center gap-x-3">
         <div className="flex items-center justify-center gap-x-2">
            <Check className="size-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Already in cart</span>
         </div>
         <Button size="sm" variant="ghost" className="text-xs text-destructive" onClick={removeFromCart}>
            Remove from cart
         </Button>
      </div>
   ) : (
      <div className="my-3">
         <Button size="sm" className="text-xs" onClick={addToCart}>
            Add to cart
         </Button>
      </div>
   );
}
